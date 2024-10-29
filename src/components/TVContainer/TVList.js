import React from "react";
import { useSelector } from "react-redux";
import MovieList from "../SecondaryContainer/MovieList";
import { Link } from "react-router-dom";
import useNowPlayingMovies from "../../hooks/useNowPlayingMovies";
import usePopularMovies from "../../hooks/usePopularMovies";
import useTopRatedMovie from "../../hooks/useTopRatedMovie";
import useUpcomingMovies from "../../hooks/useUpcomingMovies";
import useTrendingMovie from "../../hooks/useTrendingMovie";
import Sidebar from "../Sidebar";
import useTVAiringToday from "../../hooks/useTVAiringToday";
import useTVOnTheAir from "../../hooks/useTVOnTheAir";
import useTVPopular from "../../hooks/useTVPopular";
import useTVTopRated from "../../hooks/useTVTopRated";

const TVList = () => {
  const tvStore = useSelector((store) => store.tv);
  const toggleSearch = useSelector((store) => store.search.ToggleSearchGPT);
  useTVAiringToday();
  useTVOnTheAir();
  useTVPopular();
  useTVTopRated();

  return (
    <div className="bg-black">
      <div className=" relative lg:-mt-80 z-40 xs:mt-4">
        <MovieList title={"Airing Today"} movies={tvStore.tvAiringToday} />

        <MovieList title={"On the Air"} movies={tvStore.onTheAir} />
        <MovieList title={"Popular TV Series"} movies={tvStore.popular} />
        <MovieList title={"Top Rated"} movies={tvStore.topRated} />
      </div>
    </div>
  );
};

export default TVList;
