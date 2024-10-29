import { useEffect } from "react";
import { movieCastDetail } from "../utils/searchSlice";
import { useDispatch } from "react-redux";

const useMovieCastDetails = () => {
  const dispatch = useDispatch();
  const getMovieCastDetails = async () => {
    const response = await fetch(
      "https://www.omdbapi.com/?i=tt0848228&apikey=a6fc1c65"
    );
    const data = await response.json();
    dispatch(movieCastDetail(data));
  };
  useEffect(() => {
    getMovieCastDetails();
  }, []);
};
export default useMovieCastDetails;
