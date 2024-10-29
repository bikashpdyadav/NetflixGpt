import React, { useEffect } from "react";
import { API_OPTIONS, API_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addMovieTrailer } from "../utils/movieSlice";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  const getMovieTrailer = async () => {
    if (movieId) {
      const response = await fetch(API_URL + movieId + "/videos", API_OPTIONS);
      const data = await response.json();

      const filteredMovies = data.results?.filter(
        (movieTrailer) =>
          movieTrailer.type === "Trailer" &&
          movieTrailer.name === "Official Trailer"
      );

      const trailer =
        filteredMovies?.length === 0 ? data.results[0] : filteredMovies;

      dispatch(addMovieTrailer(trailer));
    }
  };
  useEffect(() => {
    getMovieTrailer();
  }, []);
};

export default useMovieTrailer;
