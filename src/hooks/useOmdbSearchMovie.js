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
      const response = await fetch(
        "https://www.omdbapi.com/?s=" + movieSearchText + "&apikey=a6fc1c65"
      );
      const data = await response.json();
      
      console.log("OMDB API Response:", data);
      console.log("OMDB Search Results:", data.Search);
      console.log("OMDB Response Status:", data.Response);
      
      if (data.Response === "True" && data.Search) {
        dispatch(omdbSearchMovieList(data.Search));
        console.log("OMDB: Successfully dispatched search results");
      } else {
        console.log("OMDB: No results found or API error");
        dispatch(omdbSearchMovieList(null));
      }
    } catch (error) {
      console.error("OMDB API Error:", error);
      dispatch(omdbSearchMovieList(null));
    }
  };
  useEffect(() => {
    getOmdbSearchMovies();
  }, [movieSearchText]);
};
export default useOmdbSearchMovie;
