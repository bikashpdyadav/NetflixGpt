import React from "react";
import Sidebar from "../Sidebar";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="xs:bg-black lg:bg-transparent lg:absolute lg:pt-44 xs:order-2 text-white lg:pl-24  lg:bg-gradient-to-r from-black lg:w-screen lg:aspect-video">
      <div className="-mt-20 xs:hidden lg:block">
        {/* {currentLocation === "/browse" ? null : <Dropdown />} */}
      </div>
      <div className="xs:p-2 lg:p-0 xs:-mt-28 lg:mt-12">
        <h1 className="text-bold xs:text-xl lg:text-3xl xs:mt-24 lg:my-2">
          {title}
        </h1>
        <p className="xs:text-sm lg:text-lg xs:w-full lg:w-4/12 overflow-hidden xs:max-h-18 lg:max-h-36 line-clamp-4">
          {overview}
        </p>
        <div className="mt-4">
          <button className="bg-white text-black xs:p-1 xs:px-5 lg:p-3 lg:px-10 rounded-lg">
            Play
          </button>
          <button className="bg-white text-black xs:p-1 xs:px-5 lg:p-3 lg:px-10 mx-4 rounded-lg">
            More info
          </button>
        </div>
        {/* <div className="mt-20 mr-10 flex items-end justify-end"> */}
        {/* <Dropdown /> */}
        {/* </div> */}
      </div>
    </div>
  );
};

export default VideoTitle;
