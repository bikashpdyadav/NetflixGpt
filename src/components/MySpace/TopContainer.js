import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const TopContainer = () => {
  const userDetails = useSelector((store) => store.user.userDetails);
  return (
    <div className="w-[98%] lg:ml-4 flex flex-wrap xs:gap-4  lg:justify-between bg-gradient-to-r from-black via-gray-700 to-gray-900 text-white">
      <div className="gap-2 flex flex-col opacity-90">
        <h3 className="xs:text-xl lg:text-2xl font-bold">
          Subscribe to enjoy Netflix
        </h3>
        <h3 className="text-lg">{userDetails?.email}</h3>
      </div>
      <div className="flex flex-row gap-4 flex-wrap xs:items-center xs:justify-center">
        <div className="flex flex-col items-center justify-center">
          <Link to="/paywall">
            <button className="text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-900 p-3 pl-16 pr-16 flex items-center justify-center rounded-lg">
              Subscribe
            </button>
          </Link>
          <h4 className=" opacity-40 text-white">Plans Start at $99</h4>
        </div>
        <div>
          <Link to="/settings">
            <button className="text-md font-bold bg-gray-600 p-3 pl-12 pr-12 flex items-center justify-center rounded-lg">
              Help and Settings
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopContainer;
