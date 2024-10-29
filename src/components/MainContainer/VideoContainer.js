import React, { useEffect, useState } from "react";
import useMovieTrailer from "../../hooks/useMovieTrailer";
import { useSelector } from "react-redux";
import Dropdown from "../Dropdown";
import { useLocation } from "react-router-dom";

const VideoContainer = ({ movieId }) => {
  const movieTrailer = useSelector((store) => store.movie?.movieTrailerList);
  const trailerKey = movieTrailer[0]?.key;
  const location = useLocation();
  const [currentLocation, setCurrentLocation] = useState("/browse");
  useMovieTrailer(movieId);

  useEffect(() => {
    console.log("Current pathname:", location.pathname);
    setCurrentLocation(location.pathname);
    // Your existing code...
  }, [location]);

  console.log(currentLocation);
  return (
    <div className="w-screen xs:order-1">
      <iframe
        className="w-screen aspect-video "
        src={
          "https://www.youtube.com/embed/" + trailerKey + "?&autoplay=1&mute=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      >
        {" "}
        {/* {currentLocation === "/browse" ? null : <Dropdown />} */}
      </iframe>
    </div>
  );
};

export default VideoContainer;
