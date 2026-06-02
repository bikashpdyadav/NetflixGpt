import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute z-20 bottom-[18vw] left-4 right-4 lg:bottom-[10vw] lg:left-12 lg:right-auto lg:max-w-xl text-white">
      <h1 className="font-bold text-xl lg:text-4xl drop-shadow-lg">{title}</h1>

      <p className="text-sm lg:text-lg mt-2 overflow-hidden max-h-20 lg:max-h-32 line-clamp-3 lg:line-clamp-4 drop-shadow-md">
        {overview}
      </p>

      <div className="mt-4 flex space-x-4">
        <button className="bg-white text-black px-5 py-2 lg:px-8 lg:py-2 rounded-lg font-medium">
          Play
        </button>
        <button className="bg-white/80 text-black px-5 py-2 lg:px-8 lg:py-2 rounded-lg font-medium">
          More info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
