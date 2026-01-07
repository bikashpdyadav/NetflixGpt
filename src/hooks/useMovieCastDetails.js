import { useEffect } from "react";
import { movieCastDetail } from "../utils/searchSlice";
import { useDispatch } from "react-redux";

const useMovieCastDetails = () => {
  const dispatch = useDispatch();
  const getMovieCastDetails = async () => {
    const response = await fetch(
      `https://www.omdbapi.com/?i=tt3896198&apikey=${process.env.REACT_APP_OMDB_API_KEY}`
    );
    const data = await response.json();
    dispatch(movieCastDetail(data));
  };
  useEffect(() => {
    getMovieCastDetails();
  }, []);
};
export default useMovieCastDetails;
