import React, { useEffect, useState } from "react";
import SportsBaseballIcon from "@mui/icons-material/SportsBaseball";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import TvIcon from "@mui/icons-material/Tv";
import MovieIcon from "@mui/icons-material/Movie";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser, removeUser } from "../utils/userSlice";
import { auth } from "../utils/firebase";
import { onAuthStateChanged } from "firebase/auth";

const iconSx = { color: "#ffffff", fontSize: 26 };

const navItems = [
  { label: "MySpace", path: "/mypage", isProfile: true },
  { label: "Search", path: "/browse/search", Icon: SearchIcon },
  { label: "Home", path: "/browse", Icon: HomeIcon },
  { label: "Movies", path: "/browse/movie", Icon: MovieIcon },
  { label: "Sports", path: "/browse", Icon: SportsBaseballIcon },
  { label: "TV", path: "/browse/tv", Icon: TvIcon },
];

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
      className="fixed left-0 top-0 z-30 flex h-screen items-center"
      onMouseEnter={() => setTouch(true)}
      onMouseLeave={() => setTouch(false)}
    >
      <nav
        className={`flex flex-col gap-8 border border-white/10 bg-gradient-to-l from-black to-[#0f1014] py-6 shadow-[4px_0_24px_rgba(0,0,0,0.5)] transition-all duration-300 ease-out ${
          touch ? "min-w-[12rem] rounded-r-xl pl-4 pr-8" : "w-16 items-center rounded-r-lg px-2"
        }`}
      >
        {navItems.map(({ label, path, Icon, isProfile }) => (
          <button
            key={label}
            type="button"
            onClick={() => handleNavigation(path)}
            className={`flex items-center text-left transition hover:opacity-90 ${
              touch ? "w-full justify-start gap-4" : "w-full justify-center"
            }`}
          >
            {isProfile ? (
              <img
                src="https://img1.hotstarext.com/image/upload/w_201,h_200,c_fill/v1/feature/profile/38.png"
                alt=""
                className="h-9 w-9 shrink-0 rounded-full object-cover ring-1 ring-white/20"
              />
            ) : (
              <Icon sx={iconSx} className="shrink-0" />
            )}
            <span
              className={`whitespace-nowrap text-base font-semibold text-slate-300 transition-all duration-300 hover:text-white ${
                touch
                  ? "max-w-[8rem] opacity-100"
                  : "max-w-0 overflow-hidden opacity-0"
              }`}
            >
              {label}
            </span>
          </button>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
