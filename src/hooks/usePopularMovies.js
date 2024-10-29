import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addPopularMovie } from "../utils/movieSlice";
import { API_OPTIONS, API_URL } from "../utils/constants";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const getPopularMovies = async () => {
    const response = await fetch(API_URL + "popular", API_OPTIONS);
    const data = await response.json();
    dispatch(addPopularMovie(data.results));
  };
  useEffect(() => {
    getPopularMovies();
  }, []);
}; 

export default usePopularMovies;
