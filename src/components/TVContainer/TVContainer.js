import React from "react";
import TVList from "./TVList";
import Sidebar from "../Sidebar";
import Header from "../Header";
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

  // Fetching movie data using custom hooks
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovie();
  useUpcomingMovies();
  useTrendingMovie();

  return (
    <>
      <Header />
      {/* Sidebar for larger screens */}
      <div className="xs:hidden lg:block">
        <Sidebar />
      </div>
      {/* MenuBar for smaller screens */}
      <div className="xs:block lg:hidden">
        <MenuBar />
      </div>
      
      <div className="bg-black sm:mb-0 mb-8">
        <MainTVContainer />
        <TVList />
      </div>
    </>
  );
};

export default TVContainer;
