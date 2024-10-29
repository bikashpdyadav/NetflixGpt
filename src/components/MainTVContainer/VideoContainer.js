import React from "react";
import useMovieTrailer from "../../hooks/useMovieTrailer";
import { useSelector } from "react-redux";
import useTVTrailer from "../../hooks/useTVTrailer";

const VideoContainer = ({ tvId }) => {
  const movieTrailer = useSelector((store) => store.movie?.movieTrailerList);
  const tvSerialTrailer = useSelector((store) => store.tv.tvTrailer);
  const trailerKey = tvSerialTrailer?.[0]?.key;
  useTVTrailer(tvId);
  return (
    <div className="w-screen xs:order-1">
      <iframe
        className="w-screen aspect-video "
        src={
          "https://www.youtube.com/embed/" + trailerKey + "?&autoplay=1&mute=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoContainer;
