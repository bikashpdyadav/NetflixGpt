import { useEffect } from "react";
import { API_OPTIONS, API_URL } from "../utils/constants";
import { addUpcomingMovie } from "../utils/movieSlice";
import { useDispatch } from "react-redux";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const getUpcomingMovie = async () => {
      const response = await fetch(API_URL + "upcoming", API_OPTIONS);
      const data = await response.json();
      dispatch(addUpcomingMovie(data.results));
    };
    getUpcomingMovie();
  }, [dispatch]);
};

export default useUpcomingMovies;
