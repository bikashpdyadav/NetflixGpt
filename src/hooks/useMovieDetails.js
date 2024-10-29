import { useEffect } from "react";
import { API_OPTIONS, API_URL } from "../utils/constants";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { movieDetails } from "../utils/searchSlice";

const useMovieDetails = () => {
  const dispatch = useDispatch();
  const movieDetailsId = useSelector((store) => store.search?.movieIdDetails);
  const getMovieDetails = async () => {
    if (movieDetailsId) {
      const response = await fetch(
        API_URL + movieDetailsId + "/videos",
        API_OPTIONS
      );
      const data = await response.json();
      dispatch(movieDetails(data)); 
    }
  };

  useEffect(() => {
    getMovieDetails();
  }, [movieDetailsId]);
};
export default useMovieDetails;
