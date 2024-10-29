import { useEffect, useState } from "react";
import { API_OPTIONS, API_URL, API_URL_MOVIE } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addMovie } from "../utils/movieSlice";
import { addTVAiringToday } from "../slice/tvSlice";

const useTVAiringToday = () => {
  const dispatch = useDispatch();
  const getTVAiringToday = async () => {
    const response = await fetch(
      API_URL_MOVIE + "airing_today?language=en-US&page=1",
      API_OPTIONS
    );
    const data = await response.json();
    console.log(data);
    dispatch(addTVAiringToday(data.results));
  };

  useEffect(() => {
    getTVAiringToday();
  }, []);
};

export default useTVAiringToday;
