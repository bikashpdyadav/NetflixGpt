import React, { useEffect } from "react";
import { API_OPTIONS, API_URL, API_URL_MOVIE } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTVTrailer } from "../slice/tvSlice";

const useTVTrailer = (tvId) => {
  const dispatch = useDispatch();
  const getTVTrailer = async () => {
    if (tvId) {
      try {
        const response = await fetch(
          API_URL_MOVIE + tvId + "/videos",
          API_OPTIONS
        );
        const data = await response.json();
        const results = Array.isArray(data?.results) ? data.results : [];

        const filteredTV = results.filter(
          (tvTrailer) =>
            tvTrailer.type === "Trailer" && tvTrailer.name === "Official Trailer"
        );

        const trailer =
          filteredTV.length > 0 ? filteredTV : results[0] ? [results[0]] : [];

        dispatch(addTVTrailer(trailer));
      } catch (error) {
        dispatch(addTVTrailer([]));
      }
    }
  };
  useEffect(() => {
    getTVTrailer();
  }, []);
};

export default useTVTrailer;
