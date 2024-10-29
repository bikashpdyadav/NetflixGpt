import React, { useEffect, useState } from "react";
import SportsBaseballIcon from "@mui/icons-material/SportsBaseball";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import TvIcon from "@mui/icons-material/Tv";
import MovieIcon from "@mui/icons-material/Movie";
import CategoryIcon from "@mui/icons-material/Category";
import { Fade } from "react-awesome-reveal";
import { useDispatch, useSelector } from "react-redux";
import { toggleSearch } from "../utils/searchSlice";
import { Link, useNavigate } from "react-router-dom";
import { addUser, removeUser } from "../utils/userSlice";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";

const Sidebar = () => {
  const [isMySpaceVisible, setIsMySpaceVisible] = useState(false);
  const [touch, setTouch] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toggleSearchValue = useSelector(
    (store) => store.search.ToggleSearchGPT
  );

  const handleMouseEnter = () => {
    setIsMySpaceVisible(true);
  };

  const handleMouseLeave = () => {
    setIsMySpaceVisible(false);
  };

  const handleSearch = () => {
    dispatch(toggleSearch("true"));
    // navigate("/search");
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        dispatch(addUser({ email: user.email, uid: user.uid }));
        // navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
  }, []);

  return (
    <div
      className="flex flex-row absolute z-30 -mt-4"
      onMouseEnter={() => setTouch(true)}
      onMouseLeave={() => setTouch(false)}
    >
      <div className="bg-[rgba(15,16,20,.95)]-transparent  w-4/12 flex flex-col justify-center items-center gap-10 bg-gradient-to-l from-black pb-20 cursor-pointer h-screen">
        <div className="flex flex-row justify-center items-center mt-4">
          <div style={{ display: "none" }}>
            <img
              src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_256/v1656431456/web-images/logo-d-plus.svg"
              alt=""
              className="w-2/4"
            />
          </div>
        </div>

        <div
          className="flex flex-row items-center justify-center"
          onMouseEnter={() => setTouch(true)}
          onMouseLeave={() => setTouch(false)}
        >
          <img
            src="https://img1.hotstarext.com/image/upload/w_201,h_200,c_fill/v1/feature/profile/38.png"
            alt=""
            className="w-1/6"
          />
          {/* <span
            className={`text-white ml-2 ${
              isMySpaceVisible ? "visible" : "hidden"
            }`}
          >
            My Space
          </span> */}
        </div>

        <div
          className="text-white"
          onMouseEnter={() => setTouch(true)}
          // onMouseLeave={() => setTouch(false)}
        >
          <SearchIcon />
        </div>
        <div
          className="text-white"
          onMouseEnter={() => setTouch(true)}
          // onMouseLeave={() => setTouch(false)}
        >
          <HomeIcon />
        </div>

        <div
          className="text-white"
          onMouseEnter={() => setTouch(true)}
          // onMouseLeave={() => setTouch(false)}
        >
          <MovieIcon />
        </div>
        <div
          className="text-white"
          onMouseEnter={() => setTouch(true)}
          // onMouseLeave={() => setTouch(false)}
        >
          <SportsBaseballIcon />
        </div>
        <div
          className="text-white"
          onMouseEnter={() => setTouch(true)}
          onMouseLeave={() => setTouch(false)}
        >
          <TvIcon />
        </div>
        {/* <div
          className="text-white"
          onMouseEnter={() => setTouch(true)}
          // onMouseLeave={() => setTouch(false)}
        >
          <CategoryIcon />
        </div> */}
      </div>
      {touch && (
        <Fade>
          <div
            className="flex flex-col bg-gradient-to-r from-black gap-10 pt-28 bg-opacity-20 z-20 -ml-4 w-20 bg-black h-screen font-extrabold text-base text-slate-300 transition-opacity duration-5000 "
            onClick={() => {
              // Perform your action here
              console.log("Clicked on Fade Text");
            }}
            onMouseEnter={() => setTouch(true)}
            onMouseLeave={() => setTouch(false)}
          >
            <Link to="/mypage">
              <h4 className="mt-1 cursor-pointer">My Space</h4>
            </Link>

            <h4 className="cursor-pointer" onClick={handleSearch}>
              Search
            </h4>

            <Link to="/browse">
              <h4 className="cursor-pointer">Home</h4>
            </Link>
            <Link to="/browse/movie">
              <h4 className="cursor-pointer">Movies</h4>
            </Link>
            <h4 className="mt-1 cursor-pointer">Sports</h4>
            <Link to="/browse/tv">
              <h4 className="cursor-pointer">TV</h4>
            </Link>
            {/* <h4 className="mt-1 cursor-pointer">Categories</h4> */}
          </div>
        </Fade>
      )}
    </div>
  );
};

export default Sidebar;
