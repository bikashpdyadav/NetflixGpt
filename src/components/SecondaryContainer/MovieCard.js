import React from "react";
import { IMAGES_URL } from "../../utils/constants";
import Sidebar from "../Sidebar";

const MovieCard = ({ poster_path }) => {
  if (!poster_path) return null;

  return (
    <div className="w-40 pr-4">
      <img src={IMAGES_URL + poster_path} alt="nowPlayingMoviesImages" />
    </div>
  );
};

export default MovieCard;

export const OMDBMovieCard = ({ poster_path }) => {
  if (!poster_path || poster_path === "N/A") return null;

  return (
    <div className="w-40 pr-4">
      <img src={poster_path} alt="nowPlayingMoviesImages" />
    </div>
  );
};
