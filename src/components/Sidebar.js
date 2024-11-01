import React, { useEffect, useState } from "react";
import SportsBaseballIcon from "@mui/icons-material/SportsBaseball";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import TvIcon from "@mui/icons-material/Tv";
import MovieIcon from "@mui/icons-material/Movie";
import { Fade } from "react-awesome-reveal";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser, removeUser } from "../utils/userSlice";
import { auth } from "../utils/firebase";
import { onAuthStateChanged } from "firebase/auth";

const Sidebar = () => {
  const [touch, setTouch] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(addUser({ email: user.email, uid: user.uid }));
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return unsubscribe;
  }, [dispatch, navigate]);

  const handleNavigation = (path) => navigate(path);

  return (
    <div
      className="flex flex-row fixed z-30 -m-3"
      onMouseEnter={() => setTouch(true)}
      onMouseLeave={() => setTouch(false)}
    >
      <div className="bg-[rgba(15,16,20,0.95)] w-4/12 flex flex-col justify-center items-center gap-10 bg-gradient-to-l from-black pb-20 cursor-pointer h-screen">

        <div className="flex flex-row items-center justify-center">
          <img
            src="https://img1.hotstarext.com/image/upload/w_201,h_200,c_fill/v1/feature/profile/38.png"
            alt=""
            className="w-1/3"
          />
        </div>

        {[SearchIcon, HomeIcon, MovieIcon, SportsBaseballIcon, TvIcon].map((Icon, index) => (
          <div key={index} className="text-white m-1">
            <Icon />
          </div>
        ))}
      </div>

      {touch && (
        <Fade>
          <div className="flex flex-col bg-gradient-to-r from-black pt-[10rem] gap-[0.85rem] bg-opacity-20 z-30 -ml-4 w-20 bg-black h-full font-extrabold text-base text-slate-300">
            {[
              { label: "MySpace", path: "/mypage" },
              { label: "Search", path: "/browse/search" },
              { label: "Home", path: "/browse" },
              { label: "Movies", path: "/browse/movie" },
              { label: "Sports", path: "/browse" },
              { label: "TV", path: "/browse/tv" }
            ].map(({ label, path }) => (
              <div key={label} className="cursor-pointer text-lg p-4 z-40" onClick={() => handleNavigation(path)}>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </Fade>
      )}
    </div>
  );
};

export default Sidebar;
