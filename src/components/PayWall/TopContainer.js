import React from "react";
import { MidContainer } from "./MidContainer";

const TopContainer = () => {
  return (
    <div className="ml-4">
      <div className="flex flex-row justify-between">
        <h1 className="text-white font-bold text-3xl">
          Subscribe Now and start Streaming
        </h1>
        <div className="flex flex-row font-medium">
          <div className=" text-white gap-4 flex flex-col">
            <div className="flex flex-row">
              <h1 className="ml-80 text-xl">Super</h1>
              <h1 className="ml-24 text-xl">Premium</h1>
            </div>

            <div className="flex flex-row gap-24">
              <div>
                <h1>All Content</h1>
                <h1 className="text-gray-400">
                  Movies,Live Sports, TV, Specials{" "}
                </h1>
              </div>
              <div className="ml-4 flex flex-row gap-32">
                {" "}
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
              </div>
            </div>
            <div className="flex flex-row gap-40">
              <h1>Watch on TV or Laptop</h1>
              <div className="ml-4 flex flex-row gap-32">
                {" "}
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
              </div>
            </div>
            <div className="flex flex-row gap-6">
              <h1>Ads free movies and shows (except sports)</h1>
              <div className="ml-4 flex flex-row gap-32">
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
              </div>
            </div>
            <div className="flex flex-row gap-11">
              <h1>Number of devices that can be logged in</h1>
              <div className="flex flex-row gap-32">
                <h1 className="ml-4">2</h1>
                <h1 className="ml-4">4</h1>
              </div>
            </div>
            <div className="flex flex-row items-center gap-48">
              <h1>Max video quality</h1>
              <div className="flex flex-row gap-24">
                <div className="ml-4">
                  <h1>Full HD</h1>
                  <h1>1080P</h1>
                </div>
                <div className="ml-4">
                  <h1>4K</h1>
                  <h1>2160P</h1>
                </div>
              </div>
            </div>

            <div className="flex flex-row gap-12">
              <div>
                <h1>Max audio quality</h1>
                <h1 className="text-gray-400">
                  Atmos available on select titles only
                </h1>
              </div>
              <div className="flex flex-row gap-12">
                <h1 className="ml-4">Dolby Atmos</h1>
                <h1 className="ml-4">Dolby Atmos</h1>
              </div>
            </div>
            <MidContainer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopContainer;
