import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import openAi from "../utils/openAi";
import { searchMovie, addGPTSuggestions, setGPTSearchLoading } from "../utils/searchSlice";

const useGPTSearch = () => {
  const dispatch = useDispatch();
  const searchText = useSelector((store) => store.search?.searchMovieText);
  const useGPT = useSelector((store) => store.search?.useGPTSearch ?? true);
  const [gptResults, setGptResults] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const getGPTSearchResults = async (userQuery) => {
    if (!userQuery || userQuery.trim() === "") {
      return;
    }

    setIsLoading(true);
    setError(null);
    dispatch(setGPTSearchLoading(true));

    try {
      // Create a prompt for GPT to understand the search query
      const gptQuery = `You are a movie recommendation assistant. The user wants to search for: "${userQuery}".
      
Please provide:
1. A list of 5-10 movie titles that match this query (comma-separated)
2. If the query is about a genre, mood, or theme, suggest relevant movies
3. If the query mentions a specific movie, suggest similar movies
4. If the query is vague, suggest popular movies in that category

Return ONLY a comma-separated list of movie titles, nothing else.`;

      const completion = await openAi.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content: "You are a helpful movie recommendation assistant. Always return only movie titles in a comma-separated format. Do not include any explanations or additional text.",
          },
          {
            role: "user",
            content: gptQuery,
          },
        ],
        max_tokens: 200,
        temperature: 0.7,
      });

      const gptResponse = completion.choices[0]?.message?.content || "";
      const movieTitles = gptResponse
        .split(",")
        .map((title) => title.trim())
        .filter((title) => title.length > 0);

      if (movieTitles.length > 0) {
        setGptResults(movieTitles);
        dispatch(addGPTSuggestions(movieTitles));

        // Use the first suggestion or original search text for API search
        const searchQuery = movieTitles[0] || userQuery;
        dispatch(searchMovie(searchQuery));
      } else {
        // If GPT doesn't return valid results, use original query
        dispatch(searchMovie(userQuery));
      }
    } catch (err) {
      console.error("GPT Search Error:", err);
      setError(err.message);
      // Fallback to direct search if GPT fails
      dispatch(searchMovie(userQuery));
    } finally {
      setIsLoading(false);
      dispatch(setGPTSearchLoading(false));
    }
  };

  useEffect(() => {
    // Only trigger GPT search if GPT is enabled, searchText exists and is not empty
    if (useGPT && searchText && searchText.trim() !== "") {
      // Debounce the GPT search
      const timer = setTimeout(() => {
        getGPTSearchResults(searchText);
      }, 1000); // Wait 1 second after user stops typing

      return () => clearTimeout(timer);
    } else {
      // Clear results when search text is empty or GPT is disabled
      if (!useGPT || !searchText || searchText.trim() === "") {
        setGptResults(null);
        dispatch(addGPTSuggestions(null));
      }
      // If GPT is disabled, just do direct search
      if (!useGPT && searchText && searchText.trim() !== "") {
        dispatch(searchMovie(searchText));
      }
    }
  }, [searchText, useGPT]);

  return { gptResults, isLoading, error };
};

export default useGPTSearch;

