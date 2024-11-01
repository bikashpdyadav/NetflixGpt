import { useEffect, useState } from "react";
import { API_OPTIONS, API_URL, API_URL_MOVIE } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addMovie } from "../utils/movieSlice";
import { addPopular, addTVAiringToday } from "../slice/tvSlice";

const useTVPopular = () => {
  const dispatch = useDispatch();
  const getTVPopular = async () => {
    const response = await fetch(
      API_URL_MOVIE + "popular?language=en-US&page=1",
      API_OPTIONS
    );
    const data = await response.json();
    //console.log(data);
    dispatch(addPopular(data.results));
  };

  useEffect(() => {
    getTVPopular();
  }, []);
};

export default useTVPopular;
