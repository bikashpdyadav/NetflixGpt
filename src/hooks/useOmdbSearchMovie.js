import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { omdbSearchMovieList } from "../utils/searchSlice";

const useOmdbSearchMovie = () => {
  const dispatch = useDispatch();
  const movieSearchText = useSelector((store) => store.search?.searchMovieText);
  const getOmdbSearchMovies = async () => {
    const response = await fetch(
      "https://www.omdbapi.com/?s=" + movieSearchText + "&apikey=a6fc1c65"
    );
    const data = await response.json();
 
    dispatch(omdbSearchMovieList(data.Search));
    console.log(data);
  };
  useEffect(() => {
    getOmdbSearchMovies();
  }, [movieSearchText]);
};
export default useOmdbSearchMovie;
