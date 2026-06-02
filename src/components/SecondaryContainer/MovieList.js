import React from "react";
import MovieCard from "./MovieCard";
import { Link } from "react-router-dom";

const MovieList = ({ title, movies }) => {
  return (
    <div className="w-screen mb-6"> 
      <h1 className="xs:text-2xl lg:text-3xl text-white pl-6 font-semibold">
        {title}
      </h1>
      
      {movies && movies.length > 0 ? (
        <div className="flex items-center justify-center xs:p-3 lg:p-6 xs:ml-4 lg:ml-0 overflow-hidden">
          <div className="flex xs:gap-5 lg:gap-6 overflow-x-auto whitespace-nowrap">
            {movies.map((movie) => (
              <Link to={`/browse/search/${movie?.id}`} key={movie.id}>
                <MovieCard 
                  poster_path={movie.poster_path} 
                  className="xs:w-32 lg:w-40"
                />
              </Link>
            ))}
          </div>
        </div>
      ) : movies === null ? (
        <div className="flex items-center justify-center xs:p-3 lg:p-6 xs:ml-4 lg:ml-0">
          <div className="text-center">
            <div className="text-6xl mb-4">🔍</div>
            <p className="text-gray-400 text-lg">Search for movies to see TMDB results</p>
            <p className="text-gray-500 text-sm mt-2">TMDB provides comprehensive movie database</p>
          </div>
        </div>
      ) : movies && movies.length === 0 ? (
        <div className="flex items-center justify-center xs:p-3 lg:p-6 xs:ml-4 lg:ml-0">
          <div className="text-center">
            <div className="text-6xl mb-4">😔</div>
            <p className="text-gray-400 text-lg">No TMDB movies found for this search</p>
            <p className="text-gray-500 text-sm mt-2">Try a different search term</p>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center xs:p-3 lg:p-6 xs:ml-4 lg:ml-0">
          <div className="text-center">
            <div className="text-6xl mb-4">⏳</div>
            <p className="text-gray-400 text-lg">Loading TMDB results...</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieList;
