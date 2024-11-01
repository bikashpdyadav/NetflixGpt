import React from "react";
import { FaHome, FaSearch, FaFilm, FaTv, FaUser } from "react-icons/fa";
// import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
// import { toggleSearch } from "../utils/searchSlice";

const MenuBar = () => {
  // const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate("/browse/search");
  };

  return (
    <div className="text-white p-2 z-50 bg-gray-900 fixed bottom-0 w-screen flex justify-around lg:justify-evenly items-center border-t border-gray-700">
      <div
        className="menu-item flex flex-col items-center cursor-pointer transition-transform duration-200 hover:scale-110"
        onClick={() => navigate("/browse")}
      >
        <FaHome className="text-lg sm:text-xl" />
        <span className="text-xs sm:text-sm mt-1">Home</span>
      </div>
      <div
        className="menu-item flex flex-col items-center cursor-pointer transition-transform duration-200 hover:scale-110"
        onClick={handleSearch}
      >
        <FaSearch className="text-lg sm:text-xl" />
        <span className="text-xs sm:text-sm mt-1">Search</span>
      </div>
      <div
        className="menu-item flex flex-col items-center cursor-pointer transition-transform duration-200 hover:scale-110"
        onClick={() => navigate("/browse/movie")}
      >
        <FaFilm className="text-lg sm:text-xl" />
        <span className="text-xs sm:text-sm mt-1">Movies</span>
      </div>
      <div
        className="menu-item flex flex-col items-center cursor-pointer transition-transform duration-200 hover:scale-110"
        onClick={() => navigate("/browse/tv")}
      >
        <FaTv className="text-lg sm:text-xl" />
        <span className="text-xs sm:text-sm mt-1">TV</span>
      </div>
      <div
        className="menu-item flex flex-col items-center cursor-pointer transition-transform duration-200 hover:scale-110"
        onClick={() => navigate("/mypage")}
      >
        <FaUser className="text-lg sm:text-xl" />
        <span className="text-xs sm:text-sm mt-1">MySpace</span>
      </div>
    </div>
  );
};

export default MenuBar;
