import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { omdbSearchMovieList } from "../utils/searchSlice";

const useOmdbSearchMovie = () => {
  const dispatch = useDispatch();
  const movieSearchText = useSelector((store) => store.search?.searchMovieText);
  const getOmdbSearchMovies = async () => {
    if (!movieSearchText) {
      console.log("OMDB: No search text provided");
      return;
    }
    
    console.log("OMDB Search Text:", movieSearchText);
    try {
      // URL encode the search text to handle spaces and special characters
      const encodedSearchText = encodeURIComponent(movieSearchText);
      const response = await fetch(
        `https://www.omdbapi.com/?s=${encodedSearchText}&apikey=a6fc1c65`
      );
      const data = await response.json();
      
      console.log("OMDB API Response:", data);
      console.log("OMDB Response Status:", data.Response);
      console.log("OMDB Error (if any):", data.Error);
      console.log("OMDB Search Results:", data.Search);
      
      // Check for successful response
      if (data.Response === "True" && data.Search && Array.isArray(data.Search)) {
        dispatch(omdbSearchMovieList(data.Search));
        console.log("OMDB: Successfully dispatched search results", data.Search.length, "movies");
      } else {
        // Handle API errors
        console.log("OMDB: No results found or API error", data.Error || "Unknown error");
        dispatch(omdbSearchMovieList([])); // Use empty array instead of null for better handling
      }
    } catch (error) {
      console.error("OMDB API Error:", error);
      dispatch(omdbSearchMovieList([])); // Use empty array instead of null
    }
  };
  
  useEffect(() => {
    getOmdbSearchMovies();
  }, [movieSearchText]);
};

export default useOmdbSearchMovie;
