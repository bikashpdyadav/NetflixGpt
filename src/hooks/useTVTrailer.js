import React, { useEffect } from "react";
import { API_OPTIONS, API_URL, API_URL_MOVIE } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addMovieTrailer } from "../utils/movieSlice";
import { addTVTrailer } from "../slice/tvSlice";

const useTVTrailer = (tvId) => {
  const dispatch = useDispatch();
  const getTVTrailer = async () => {
    if (tvId) {
      const response = await fetch(
        API_URL_MOVIE + tvId + "/videos",
        API_OPTIONS
      );
      const data = await response.json();
      //console.log(data,"hello");
      const filteredTV = data.results?.filter(
        (tvTrailer) =>
          tvTrailer.type === "Trailer" && tvTrailer.name === "Official Trailer"
      );

      const trailer = filteredTV?.length === 0 ? data.results[0] : filteredTV;
      console.log(trailer);
      dispatch(addTVTrailer(trailer));
    }
  };
  useEffect(() => {
    getTVTrailer();
  }, []);
};

export default useTVTrailer;
