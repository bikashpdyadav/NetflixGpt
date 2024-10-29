import React from "react";
import MovieCard, { OMDBMovieCard } from "./MovieCard";
import { Link } from "react-router-dom";

const MovieList = ({ title, movies, omdbMovies }) => {
  return (
    <div className="xs:p-0 lg:p-4 lg:mt-8 w-screen">
      <h1 className="xs:text-2xl lg:text-3xl text-white pl-6 font-semibold">
        {title}
      </h1>
      <div className="flex xs:p-3 lg:p-6 xs:ml-4 lg:ml-0 xs:justify-center lg:justify-start">
        <div className="flex xs:gap-5 lg:gap-0 overflow-x-auto whitespace-nowrap">
          {movies?.map((movie) => (
            <Link to={`search/${movie?.id}`} key={movie.id}>
              <MovieCard key={movie.id} poster_path={movie.poster_path} />
            </Link>
          ))}
        </div>
        <div className="flex xs:gap-5 lg:gap-0 overflow-x-auto whitespace-nowrap">
          {omdbMovies?.map((movie, index) => (
            <Link to={`movie/details/${movie?.imdbID}`} key={movie.imdbID}>
              <OMDBMovieCard key={movie.imdbID} poster_path={movie.Poster} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
