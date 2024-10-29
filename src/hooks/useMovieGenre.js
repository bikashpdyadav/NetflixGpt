import React, { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { getMovieGenre, getMovieGenreId } from "../utils/movieSlice";

const useMovieGenre = () => {
  const dispatch = useDispatch();
  const getMovieByGenre = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/discover/movie",
      API_OPTIONS
    );
    const data = await response.json();
    dispatch(getMovieGenre(data));
    console.log(data, "useMovieGenre");
  };
  useEffect(() => {
    getMovieByGenre();
  }, []);
};

export default useMovieGenre;
