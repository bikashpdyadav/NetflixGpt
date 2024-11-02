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
    <div>
      <iframe
        className="w-full h-[56vw] lg:h-[36vw] aspect-video max-w-full"
        src={`https://www.youtube.com/embed/${trailerKey}?&autoplay=1&mute=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      />
    </div>
  );
};

export default VideoContainer;
