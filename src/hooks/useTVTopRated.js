import { useEffect, useState } from "react";
import { API_OPTIONS, API_URL, API_URL_MOVIE } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addMovie } from "../utils/movieSlice";
import { addTVAiringToday, addTVTopRated } from "../slice/tvSlice";

const useTVTopRated = () => {
  const dispatch = useDispatch();
  const getTVTopRated = async () => {
    const response = await fetch(
      API_URL_MOVIE + "top_rated?language=en-US&page=1",
      API_OPTIONS
    );
    const data = await response.json();
    console.log(data);
    dispatch(addTVTopRated(data.results));
  };

  useEffect(() => {
    getTVTopRated();
  }, []);
};

export default useTVTopRated;
