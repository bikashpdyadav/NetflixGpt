import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import store from "../utils/store";
import { searchMovieList } from "../utils/searchSlice";

const useSearchMovie = () => {
  const dispatch = useDispatch();
  const movieSearchText = useSelector((store) => store.search?.searchMovieText);
  console.log(movieSearchText);
  const getSearchMovieList = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movieSearchText +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const data = await response.json();
    dispatch(searchMovieList(data.results));
  };

  useEffect(() => {
    getSearchMovieList();
  }, [movieSearchText]);
};
export default useSearchMovie;
