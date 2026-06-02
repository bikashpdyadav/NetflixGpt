import React, { useEffect } from "react";
import { API_OPTIONS, API_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addMovieTrailer } from "../utils/movieSlice";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  const getMovieTrailer = async () => {
    if (movieId) {
      try {
        const response = await fetch(API_URL + movieId + "/videos", API_OPTIONS);
        const data = await response.json();
        const results = Array.isArray(data?.results) ? data.results : [];

        const filteredMovies = results.filter(
          (movieTrailer) =>
            movieTrailer.type === "Trailer" &&
            movieTrailer.name === "Official Trailer"
        );

        const trailer =
          filteredMovies.length > 0
            ? filteredMovies
            : results[0]
            ? [results[0]]
            : [];

        dispatch(addMovieTrailer(trailer));
      } catch (error) {
        dispatch(addMovieTrailer([]));
      }
    }
  };
  useEffect(() => {
    getMovieTrailer();
  }, []);
};

export default useMovieTrailer;
