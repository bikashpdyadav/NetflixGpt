import { useEffect, useState } from "react";
import { API_OPTIONS, API_URL, API_URL_MOVIE } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addMovie } from "../utils/movieSlice";
import { addOnTheAir, addTVAiringToday } from "../slice/tvSlice";

const useTVOnTheAir = () => {
  const dispatch = useDispatch();
  const getTVOnTheAir = async () => {
    const response = await fetch(
      API_URL_MOVIE + "on_the_air?language=en-US&page=1",
      API_OPTIONS
    );
    const data = await response.json();
    console.log(data);
    dispatch(addOnTheAir(data.results));
  };

  useEffect(() => {
    getTVOnTheAir();
  }, []);
};

export default useTVOnTheAir;
