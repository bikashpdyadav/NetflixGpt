import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { movieDetailsById } from "../utils/searchSlice";

const useMovieDetailsById = () => {
  const movieId = useSelector((store) => store.search.movieIdDetails);
  const dispatch = useDispatch();
  const getMovieDetalsById = async () => {
    if (movieId) {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/" + movieId + "?language=en-US",
        API_OPTIONS
      );
      const data = await response.json();
      dispatch(movieDetailsById(data));
    } 
  };
  useEffect(() => {
    getMovieDetalsById();
  }, [movieId]);
};
export default useMovieDetailsById;
