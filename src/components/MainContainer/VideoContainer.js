import React from "react";
import useMovieTrailer from "../../hooks/useMovieTrailer";
import { useSelector } from "react-redux";

const VideoContainer = ({ movieId }) => {
  const movieTrailer = useSelector((store) => store.movie?.movieTrailerList);
  const trailerKey = movieTrailer[0]?.key;
  // const location = useLocation();
  // const [currentLocation, setCurrentLocation] = useState("/browse");

  // Fetch trailer based on movieId
  useMovieTrailer(movieId);
  // useEffect(() => {
  //   setCurrentLocation(location.pathname);
  // }, [location]);
  return (
    <div className="w-full xs:order-1 flex justify-center bg-black">
      <iframe
        className="w-full h-[56vw] lg:h-[36vw] aspect-video max-w-full" // Added max-w-full
        src={`https://www.youtube.com/embed/${trailerKey}?&autoplay=1&mute=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      />
    </div>
  );
};

export default VideoContainer;
