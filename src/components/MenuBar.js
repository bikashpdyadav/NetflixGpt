import React from "react";
import { FaHome, FaSearch, FaFilm, FaTv, FaUser } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toggleSearch } from "../utils/searchSlice";

const MenuBar = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const handleSearch = () => {
    dispatch(toggleSearch("true"));
    // navigate("/search");
  };
  return (
    <div className="text-white p-2 z-50 rounded-lg bg-gray-900 menu-bar flex justify-between flex-row bottom-0 fixed w-full">
      <Link to="/browse">
        <div className="menu-item flex items-center flex-col">
          <FaHome />
          <span>Home</span>
        </div>
      </Link>
      <Link to="/search">
        <div
          className="menu-item flex items-center flex-col"
          onClick={handleSearch}
        >
          <FaSearch />
          <span>Search</span>
        </div>
      </Link>

      <Link to="/browse/movie">
        <div className="menu-item flex items-center flex-col">
          <FaFilm />
          <span>Movies</span>
        </div>
      </Link>
      <Link to="/browse/tv">
        <div className="menu-item flex items-center flex-col">
          <FaTv />
          <span>TV</span>
        </div>
      </Link>
      <Link to="/mypage">
        <div className="menu-item flex items-center flex-col">
          <FaUser />
          <span>MySpace</span>
        </div>
      </Link>
    </div>
  );
};

export default MenuBar;
