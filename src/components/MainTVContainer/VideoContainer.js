import React from "react";
import { useSelector } from "react-redux";
import useTVTrailer from "../../hooks/useTVTrailer";

const VideoContainer = ({ tvId }) => {
  useTVTrailer(tvId);
  const tvSerialTrailer = useSelector((store) => store.tv.tvTrailer);
  const trailerKey = tvSerialTrailer?.[0]?.key;
  //console.log(tvSerialTrailer,"hi")
  // if (!trailerKey) {
  //   return (
  //     <div className="flex items-center justify-center w-screen h-screen bg-black">
  //       <p className="text-white">Loading trailer...</p>
  //     </div>
  //   );
  // }

  return (
    <div className="w-screen xs:order-1">
      <iframe
        className="w-full aspect-video" // Changed to w-full for full responsiveness
        src={`https://www.youtube.com/embed/${trailerKey}?&autoplay=1&mute=1`}
        title="Video trailer for TV series"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoContainer;
