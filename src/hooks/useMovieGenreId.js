import React, { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { getMovieGenreId } from "../utils/movieSlice";

const useMovieGenreId = () => {
  const dispatch = useDispatch();
  const getGenreId = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/genre/movie/list",
      API_OPTIONS
    );
    const data = await response.json();
    dispatch(getMovieGenreId(data));
    //console.log(data, "useMovieGenre");
  };
  useEffect(() => {
    getGenreId();
  }, []);
};

export default useMovieGenreId;
