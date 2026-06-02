import { useEffect } from "react";
import { API_OPTIONS, API_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addMovieTrailer } from "../utils/movieSlice";

const pickTrailer = (results) => {
  if (!results.length) return [];

  const officialTrailer = results.find(
    (video) =>
      video.type === "Trailer" &&
      video.name === "Official Trailer" &&
      video.site === "YouTube"
  );
  if (officialTrailer) return [officialTrailer];

  const trailer = results.find(
    (video) => video.type === "Trailer" && video.site === "YouTube"
  );
  if (trailer) return [trailer];

  const fallback = results.find((video) => video.site === "YouTube" && video.key);
  return fallback ? [fallback] : [];
};

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (!movieId) {
      dispatch(addMovieTrailer([]));
      return;
    }

    const fetchMovieTrailer = async () => {
      try {
        const response = await fetch(`${API_URL}${movieId}/videos`, API_OPTIONS);
        const data = await response.json();
        const results = Array.isArray(data?.results) ? data.results : [];
        dispatch(addMovieTrailer(pickTrailer(results)));
      } catch (error) {
        dispatch(addMovieTrailer([]));
      }
    };

    fetchMovieTrailer();
  }, [movieId, dispatch]);
};

export default useMovieTrailer;
