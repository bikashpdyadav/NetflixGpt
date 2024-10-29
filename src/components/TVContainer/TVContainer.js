import React from "react";
import TVList from "./TVList";
import Sidebar from "../Sidebar";
import Header from "../Header";
import MainContainer from "../MainContainer/MainContainer";
import useNowPlayingMovies from "../../hooks/useNowPlayingMovies";
import usePopularMovies from "../../hooks/usePopularMovies";
import useTopRatedMovie from "../../hooks/useTopRatedMovie";
import useUpcomingMovies from "../../hooks/useUpcomingMovies";
import useTrendingMovie from "../../hooks/useTrendingMovie";
import { useSelector } from "react-redux";
import MainTVContainer from "../MainTVContainer/MainTVContainer";
import MenuBar from "../MenuBar";

const TVContainer = () => {
  const toggleSearch = useSelector((store) => store.search.ToggleSearchGPT);
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovie();
  useUpcomingMovies();
  useTrendingMovie();
  return (
    <div>
      {/* <Header /> */}
      <div className="xs:hidden lg:block">
        <Sidebar />
      </div>
      <div className="xs:block lg:hidden">
        <MenuBar />
      </div>
      <div className="xs:bg-black">
        <MainTVContainer />
        <TVList />
      </div>
    </div>
  );
};

export default TVContainer;
