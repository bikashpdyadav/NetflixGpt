import { useEffect } from "react";
import { API_OPTIONS, API_URL_MOVIE } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTVTrailer } from "../slice/tvSlice";

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

const useTVTrailer = (tvId) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (!tvId) {
      dispatch(addTVTrailer([]));
      return;
    }

    const fetchTVTrailer = async () => {
      try {
        const response = await fetch(`${API_URL_MOVIE}${tvId}/videos`, API_OPTIONS);
        const data = await response.json();
        const results = Array.isArray(data?.results) ? data.results : [];
        dispatch(addTVTrailer(pickTrailer(results)));
      } catch (error) {
        dispatch(addTVTrailer([]));
      }
    };

    fetchTVTrailer();
  }, [tvId, dispatch]);
};

export default useTVTrailer;
