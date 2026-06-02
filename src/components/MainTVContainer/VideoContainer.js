import React from "react";
import { useSelector } from "react-redux";
import useTVTrailer from "../../hooks/useTVTrailer";
import { BACKDROP_IMAGE_URL } from "../../utils/constants";

const VideoContainer = ({ tvId, backdropPath }) => {
  useTVTrailer(tvId);
  const tvSerialTrailer = useSelector((store) => store.tv.tvTrailer);
  const trailerKey = tvSerialTrailer?.[0]?.key;

  if (!trailerKey && !backdropPath) return null;

  return (
    <div className="relative z-0 w-full">
      {trailerKey ? (
        <iframe
          className="w-full h-[56vw] lg:h-[36vw] aspect-video max-w-full pointer-events-none"
          src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1&mute=1&controls=0&rel=0`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        />
      ) : (
        <img
          src={`${BACKDROP_IMAGE_URL}${backdropPath}`}
          alt=""
          className="w-full h-[56vw] lg:h-[36vw] object-cover"
        />
      )}
      <div
        className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent pointer-events-none"
        aria-hidden="true"
      />
    </div>
  );
};

export default VideoContainer;
