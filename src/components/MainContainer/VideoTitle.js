import React, { useEffect, useState } from "react";
import Dropdown from "../Dropdown";
import { useLocation } from "react-router-dom";

const VideoTitle = ({ title, overview }) => {
  const location = useLocation();
  const [currentLocation, setCurrentLocation] = useState("/browse");

  useEffect(() => {
    setCurrentLocation(location.pathname);
  }, [location]);

  return (
    <div className="lg:bg-transparent lg:absolute lg:top-[15%] text-white lg:ml-24 lg:bg-gradient-to-r from-black lg:w-auto lg:max-w-md">
      {currentLocation !== "/browse" && (
        <div className="hidden lg:block -mt-20">
          <Dropdown />
        </div>
      )}
      <div className="xs:p-4 lg:p-0 xs:-mt-28 lg:mt-12">
        <h1 className="font-bold xs:text-xl lg:text-3xl xs:mt-24 lg:my-2">
          {title}
        </h1>

        <p className="xs:text-sm lg:text-lg xs:w-full lg:w-auto overflow-hidden max-h-20 lg:max-h-36 line-clamp-4 mt-2">
          {overview}
        </p>

        <div className="mt-4 flex space-x-4">
          <button className="bg-white text-black px-5 py-2 lg:px-8 lg:py-2 rounded-lg">
            Play
          </button>
          <button className="bg-white text-black px-5 py-2 lg:px-8 lg:py-2 rounded-lg">
            More info
          </button>
        </div>
      </div>
    </div>

  );
};

export default VideoTitle;
