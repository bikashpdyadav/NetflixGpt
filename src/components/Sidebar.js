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
        <div className="fixed left-0 top-0 h-screen flex items-center z-10">
            <div
                className="bg-[rgba(15,16,20,0.95)] py-4 w-1/4 flex bg-gradient-to-l from-black cursor-pointer h-fit"
                onMouseEnter={() => setTouch(true)}
                onMouseLeave={() => setTouch(false)}
            >
                <div className="flex flex-col items-center justify-center gap-10">
                    <div className="flex items-center justify-center">
                        <img
                            src="https://img1.hotstarext.com/image/upload/w_201,h_200,c_fill/v1/feature/profile/38.png"
                            alt=""
                            className="w-1/2"
                        />
                    </div>
                    {[SearchIcon, HomeIcon, MovieIcon, SportsBaseballIcon, TvIcon].map((Icon, index) => (
                        <div key={index} className="text-white">
                            <Icon />
                        </div>
                    ))}
                </div>
            </div>

            {touch && (
                <Fade>
                    <div
                        className="flex flex-col gap-6 bg-gradient-to-r from-black bg-opacity-80 font-extrabold text-base text-slate-300 py-2"
                        onMouseEnter={() => setTouch(true)}
                        onMouseLeave={() => setTouch(false)}
                    >
                        {[
                            { label: "MySpace", path: "/mypage" },
                            { label: "Search", path: "/browse/search" },
                            { label: "Home", path: "/browse" },
                            { label: "Movies", path: "/browse/movie" },
                            { label: "Sports", path: "/browse" },
                            { label: "TV", path: "/browse/tv" }
                        ].map(({ label, path }) => (
                            <div key={label} className="cursor-pointer text-lg py-2" onClick={() => handleNavigation(path)}>
                                {label}
                            </div>
                        ))}
                    </div>
                </Fade>
            )}
        </div>
    );
};

export default Sidebar;
