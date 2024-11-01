import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const TopContainer = () => {
  const userDetails = useSelector((store) => store.user.userDetails);
  
  return (
    <div className="w-full px-4 lg:ml-4 flex flex-wrap xs:gap-4 lg:justify-between bg-gradient-to-r from-black via-gray-700 to-gray-900 text-white">
    <div className="gap-2 flex flex-col opacity-90">
      <h3 className="font-bold text-3xl xs:text-2xl"> {/* Added responsive text size for small screens */}
        Subscribe to enjoy Netflix
      </h3>
      <h3 className="text-xl mb-2 xs:text-lg"> {/* Added responsive text size for small screens */}
        {userDetails?.email}
      </h3>
    </div>
    <div className="flex flex-row flex-wrap gap-4 xs:items-center xs:justify-center">
      <div className="flex flex-col items-center justify-center">
        <Link to="/paywall">
          <button 
            aria-label="Subscribe to Netflix" 
            className="text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-900 p-3 px-16 flex items-center justify-center rounded-lg hover:opacity-80 xs:px-8 xs:text-lg"> {/* Adjusted padding and text size for small screens */}
            Subscribe
          </button>
        </Link>
        <h4 className="opacity-40 text-white text-lg xs:text-md"> {/* Added responsive text size for small screens */}
          Plans Start at $99
        </h4>
      </div>
      <div>
        <Link to="/settings">
          <button 
            aria-label="Help and Settings" 
            className="text-xl mb-7 font-bold bg-gray-600 p-3 px-12 flex rounded-lg hover:opacity-80 xs:px-6 xs:text-lg"> {/* Adjusted padding and text size for small screens */}
            Help and Settings
          </button>
        </Link>
      </div>
    </div>
  </div>
  
  );
};

export default TopContainer;
