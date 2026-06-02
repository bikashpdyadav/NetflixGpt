import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addTrendingMovie } from "../utils/movieSlice";
import { useDispatch } from "react-redux";

const useTrendingMovie = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const getTrendingMovie = async () => {
      const response = await fetch(
        "https://api.themoviedb.org/3/trending/movie/week",
        API_OPTIONS
      );
      const data = await response.json();
      dispatch(addTrendingMovie(data.results));
    };
    getTrendingMovie();
  }, [dispatch]);
};

export default useTrendingMovie;
