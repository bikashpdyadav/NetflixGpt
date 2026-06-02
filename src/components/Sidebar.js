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
  { label: "MySpace", path: "/mypage" },
  { label: "Search", path: "/browse/search" },
  { label: "Home", path: "/browse" },
  { label: "Movies", path: "/browse/movie" },
  { label: "Sports", path: "/browse" },
  { label: "TV", path: "/browse/tv" },
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

  const quickIcons = [SearchIcon, HomeIcon, MovieIcon, SportsBaseballIcon, TvIcon];

  return (
    <div
      className="fixed left-0 top-0 z-30 flex h-screen bg-[#0b0b0f] shadow-[4px_0_24px_rgba(0,0,0,0.45)]"
      onMouseEnter={() => setTouch(true)}
      onMouseLeave={() => setTouch(false)}
    >
      <div className="flex h-full border-r border-white/10">
        <div className="flex w-16 shrink-0 flex-col items-center gap-8 bg-gradient-to-b from-[#121218] to-[#0b0b0f] py-6">
          <button
            type="button"
            className="rounded-full p-0.5 ring-1 ring-white/20 transition hover:ring-white/50"
            onClick={() => handleNavigation("/mypage")}
            aria-label="Profile"
          >
            <img
              src="https://img1.hotstarext.com/image/upload/w_201,h_200,c_fill/v1/feature/profile/38.png"
              alt=""
              className="h-9 w-9 rounded-full object-cover"
            />
          </button>
          {quickIcons.map((Icon, index) => (
            <button
              key={index}
              type="button"
              className="rounded-lg p-1 transition hover:bg-white/10"
              aria-label={`Quick nav ${index}`}
            >
              <Icon sx={iconSx} />
            </button>
          ))}
        </div>

        <div
          className={`flex flex-col justify-center gap-4 overflow-hidden border-l border-white/10 bg-[#14141c] py-6 pl-5 pr-8 transition-all duration-300 ${
            touch ? "w-44 opacity-100" : "w-0 opacity-0"
          }`}
        >
          {navItems.map(({ label, path }) => (
            <button
              key={label}
              type="button"
              className="cursor-pointer whitespace-nowrap text-left text-base font-semibold text-slate-300 transition hover:text-white"
              onClick={() => handleNavigation(path)}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
