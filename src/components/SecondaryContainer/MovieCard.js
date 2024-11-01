import React from "react";
import { IMAGES_URL } from "../../utils/constants";

const MovieCard = ({ poster_path }) => {
  if (!poster_path) return null;

  return (
    <div className="w-32 sm:w-40 md:w-48 lg:w-56 xl:w-64 pr-4">
      <div className="relative pb-[150%] w-full overflow-hidden rounded-lg shadow-md">
        <img
          src={IMAGES_URL + poster_path}
          alt="nowPlayingMoviesImages"
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default MovieCard;

export const OMDBMovieCard = ({ poster_path }) => {
  if (!poster_path || poster_path === "N/A") return null;

  return (
    <div className="w-32 sm:w-40 md:w-48 lg:w-56 xl:w-64 pr-4">
      <div className="relative pb-[150%] w-full overflow-hidden rounded-lg shadow-md">
        <img
          src={poster_path}
          alt="nowPlayingMoviesImages"
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
      </div>
    </div>
  );
};
