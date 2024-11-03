import React from "react";
import { useSelector } from "react-redux";

const MovieDetails = () => {
  const movieCast = useSelector((store) => store.search.movieCastDetail);
  
  const runtime = movieCast?.Runtime
    ? `${parseInt(parseInt(movieCast?.Runtime) / 60)}h ${
        parseInt(movieCast?.Runtime) % 60
      }min`
    : "N/A";

  return (
    <div className="max-w-2xl mx-auto p-6 text-gray-800">
      <div className="text-2xl font-bold text-center mb-4 md:text-3xl">
        {movieCast?.Title}
      </div>
      <div className="flex flex-wrap justify-around text-lg mb-4 md:flex-nowrap">
        <div className="p-2">{movieCast?.Type}</div>
        <div className="p-2">{movieCast?.Released}</div>
        <div className="p-2">{runtime}</div>
      </div>
      <div className="text-center text-lg font-semibold">
        IMDb RATING: <span className="font-normal">{movieCast?.imdbRating}/10</span>
        <span className="text-gray-600"> ({movieCast?.imdbVotes} votes)</span>
      </div>
    </div>
  );
};

export default MovieDetails;
