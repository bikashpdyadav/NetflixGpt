import { useEffect } from "react";
import { API_OPTIONS, API_URL } from "../utils/constants";
import { addTopRatedMovie, addUpcomingMovie } from "../utils/movieSlice";
import { useDispatch } from "react-redux";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  const getUpcomingMovie = async () => {
    const response = await fetch(API_URL + "upcoming", API_OPTIONS);
    const data = await response.json();
    dispatch(addUpcomingMovie(data.results));
  };
  useEffect(() => {
    getUpcomingMovie();
  }, []);
};

export default useUpcomingMovies;
