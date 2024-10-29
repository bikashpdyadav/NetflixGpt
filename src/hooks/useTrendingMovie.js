import { useEffect } from "react";
import { API_OPTIONS, API_URL } from "../utils/constants";
import { addTrendingMovie } from "../utils/movieSlice";
import { useDispatch } from "react-redux";

const useTrendingMovie = () => {
  const dispatch = useDispatch();
  const getTrendingMovie = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/trending/movie/week",
      API_OPTIONS
    );
    const data = await response.json();
    dispatch(addTrendingMovie(data.results));
  };
  useEffect(() => {
    getTrendingMovie();
  }, []);
};

export default useTrendingMovie;
