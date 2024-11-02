import React from "react";
import MovieCard, { OMDBMovieCard } from "./MovieCard";
import { Link } from "react-router-dom";

const MovieList = ({ title, movies, omdbMovies }) => {
  return (
    <div className="w-screen mb-6"> 
      <h1 className="xs:text-2xl lg:text-3xl text-white pl-6 font-semibold">
        {title}
      </h1>
      <div className="flex items-center justify-center xs:p-3 lg:p-6 xs:ml-4 lg:ml-0 overflow-hidden">
        <div className="flex xs:gap-5 lg:gap-6 overflow-x-auto whitespace-nowrap">
          {movies?.map((movie) => (
            <Link to={`search/${movie?.id}`} key={movie.id}>
              <MovieCard 
                poster_path={movie.poster_path} 
                className="xs:w-32 lg:w-40"
              />
            </Link>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-center xs:p-3 lg:p-6 xs:ml-4 lg:ml-0 overflow-hidden">
        <div className="flex xs:gap-5 lg:gap-6 overflow-x-auto whitespace-nowrap">
          {omdbMovies?.map((movie) => (
            <Link to={`movie/details/${movie?.imdbID}`} key={movie.imdbID}>
              <OMDBMovieCard 
                poster_path={movie.Poster} 
                className="xs:w-32 lg:w-40"
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
