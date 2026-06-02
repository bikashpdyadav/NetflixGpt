import React from "react";
import MovieCard from "./MovieCard";
import { Link } from "react-router-dom";

const MovieList = ({ title, movies }) => {
  return (
    <section className="w-full">
      <h2 className="text-2xl lg:text-3xl text-white pl-4 lg:pl-6 font-semibold mb-4">
        {title}
      </h2>

      {movies && movies.length > 0 ? (
        <div className="overflow-hidden pl-4 lg:pl-6">
          <div className="flex gap-4 lg:gap-6 overflow-x-auto pb-2">
            {movies.map((movie) => (
              <Link to={`/browse/search/${movie?.id}`} key={movie.id} className="shrink-0">
                <MovieCard
                  poster_path={movie.poster_path}
                  className="w-32 lg:w-40"
                />
              </Link>
            ))}
          </div>
        </div>
      ) : movies === null ? (
        <div className="flex items-center justify-center py-8 pl-4 lg:pl-6">
          <div className="text-center">
            <div className="text-6xl mb-4">🔍</div>
            <p className="text-gray-400 text-lg">Search for movies to see TMDB results</p>
            <p className="text-gray-500 text-sm mt-2">TMDB provides comprehensive movie database</p>
          </div>
        </div>
      ) : movies && movies.length === 0 ? (
        <div className="flex items-center justify-center py-8 pl-4 lg:pl-6">
          <div className="text-center">
            <div className="text-6xl mb-4">😔</div>
            <p className="text-gray-400 text-lg">No TMDB movies found for this search</p>
            <p className="text-gray-500 text-sm mt-2">Try a different search term</p>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center py-8 pl-4 lg:pl-6">
          <div className="text-center">
            <div className="text-6xl mb-4">⏳</div>
            <p className="text-gray-400 text-lg">Loading TMDB results...</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default MovieList;
