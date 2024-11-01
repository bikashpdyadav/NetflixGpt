import React from "react";
import MidContainer from "./MidContainer"; // Adjusted import

const TopContainer = () => {
  return (
    <div className="ml-4">
      <div className="flex flex-col gap-8">
        <h1 className="text-white font-bold text-3xl">
          Subscribe Now and Start Streaming
        </h1>
        <div className="flex flex-row font-medium">
          <div className="text-white gap-4 flex flex-col w-full">
            <div className="flex flex-row justify-between">
              <h2 className="text-xl">Super</h2>
              <h2 className="text-xl">Premium</h2>
            </div>

            <div className="flex flex-row justify-between">
              <div>
                <h3>All Content</h3>
                <h3 className="text-gray-400">
                  Movies, Live Sports, TV, Specials
                </h3>
              </div>
              <div className="flex items-center gap-4">
                <CheckmarkIcon />
                <CheckmarkIcon />
              </div>
            </div>

            <div className="flex flex-row justify-between">
              <h3>Watch on TV or Laptop</h3>
              <div className="flex items-center gap-4">
                <CheckmarkIcon />
                <CheckmarkIcon />
              </div>
            </div>

            <div className="flex flex-row justify-between">
              <h3>Ads Free Movies and Shows (except sports)</h3>
              <div className="flex items-center gap-4">
                <CrossIcon />
                <CheckmarkIcon />
              </div>
            </div>

            <div className="flex flex-row justify-between">
              <h3>Number of Devices that Can Be Logged In</h3>
              <div className="flex gap-12">
                <span className="ml-4">2</span>
                <span className="ml-4">4</span>
              </div>
            </div>

            <div className="flex flex-row justify-between">
              <h3>Max Video Quality</h3>
              <div className="flex gap-12">
                <div>
                  <h4>Full HD</h4>
                  <h4>1080P</h4>
                </div>
                <div>
                  <h4>4K</h4>
                  <h4>2160P</h4>
                </div>
              </div>
            </div>

            <div className="flex flex-col">
              <h3>Max Audio Quality</h3>
              <p className="text-gray-400">
                Atmos available on select titles only
              </p>
              <div className="flex gap-12">
                <h4 className="ml-4">Dolby Atmos</h4>
                <h4 className="ml-4">Dolby Atmos</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const CheckmarkIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m4.5 12.75 6 6 9-13.5"
    />
  </svg>
);

const CrossIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 18 18 6M6 6l12 12"
    />
  </svg>
);

export default TopContainer;
