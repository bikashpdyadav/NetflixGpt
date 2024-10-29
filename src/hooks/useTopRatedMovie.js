import { useEffect } from "react";
import { API_OPTIONS, API_URL } from "../utils/constants";
import { addTopRatedMovie } from "../utils/movieSlice";
import { useDispatch } from "react-redux";

const useTopRatedMovie = () => {
  const dispatch = useDispatch();
  const getTopRatedMovie = async () => {
    const response = await fetch(API_URL + "top_rated", API_OPTIONS);
    const data = await response.json();
    dispatch(addTopRatedMovie(data.results));
  };
  useEffect(() => {
    getTopRatedMovie();
  }, []);
};

export default useTopRatedMovie;
