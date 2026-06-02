import React, { useState } from "react";
import MainContainer from "./MainContainer/MainContainer";
import SecondaryContainer from "./SecondaryContainer/SecondaryContainer";
import Sidebar from "./Sidebar";
import useMovieGenre from "../hooks/useMovieGenre";
import useMovieGenreId from "../hooks/useMovieGenreId";
import { useSelector } from "react-redux";
import Dropdown from "./Dropdown";
import MenuBar from "./MenuBar";

const Movie = () => {
  const movieGenre = useSelector((store) => store.movie.movieGenre);
  const movieGenreId = useSelector((store) => store.movie.movieGenreId);
  useMovieGenre();
  useMovieGenreId();

  return (
    <>
      {/* <Dropdown /> */}
      <div className="xs:hidden lg:block">
        <Sidebar />
      </div>
      <div className="xs:block lg:hidden">
        <MenuBar />
      </div>
      <div className="xs:bg-black mb-8 lg:mb-0 w-full min-w-0 overflow-x-hidden">
        <MainContainer />
        <div className="relative z-10 -mt-[14vw] lg:-mt-[9vw] lg:pl-10 pb-12 min-w-0 w-full">
          <SecondaryContainer />
        </div>
      </div>
    </>
  );
};

export default Movie;
