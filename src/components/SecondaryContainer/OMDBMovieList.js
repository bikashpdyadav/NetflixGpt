import React from "react";
import { OMDBMovieCard } from "./MovieCard";
import { Link } from "react-router-dom";

const OMDBMovieList = ({ title, omdbMovies }) => {
  console.log("OMDBMovieList - Title:", title);
  console.log("OMDBMovieList - Movies:", omdbMovies);
  console.log("OMDBMovieList - Is Array:", Array.isArray(omdbMovies));
  console.log("OMDBMovieList - Length:", omdbMovies?.length);
  
  return (
    <div className="w-screen mb-6"> 
      <h1 className="xs:text-2xl lg:text-3xl text-white pl-6 font-semibold">
        {title}
      </h1>
      
      {Array.isArray(omdbMovies) && omdbMovies.length > 0 ? (
        <div className="flex items-center justify-center xs:p-3 lg:p-6 xs:ml-4 lg:ml-0 overflow-hidden">
          <div className="flex xs:gap-5 lg:gap-6 overflow-x-auto whitespace-nowrap">
            {omdbMovies.map((movie) => {
              console.log("OMDB Movie in List:", movie);
              // Validate movie has required fields
              if (!movie || !movie.imdbID) {
                console.warn("Invalid OMDB movie object:", movie);
                return null;
              }
              return (
                <Link to={`/browse/movie/details/${movie.imdbID}`} key={movie.imdbID}>
                  <OMDBMovieCard 
                    poster_path={movie.Poster} 
                    className="xs:w-32 lg:w-40"
                  />
                </Link>
              );
            })}
          </div>
        </div>
      ) : omdbMovies === null || omdbMovies === undefined ? (
        <div className="flex items-center justify-center xs:p-3 lg:p-6 xs:ml-4 lg:ml-0">
          <div className="text-center">
            <div className="text-6xl mb-4">🔍</div>
            <p className="text-gray-400 text-lg">Search for movies to see OMDB results</p>
            <p className="text-gray-500 text-sm mt-2">OMDB provides additional movie information</p>
          </div>
        </div>
      ) : Array.isArray(omdbMovies) && omdbMovies.length === 0 ? (
        <div className="flex items-center justify-center xs:p-3 lg:p-6 xs:ml-4 lg:ml-0">
          <div className="text-center">
            <div className="text-6xl mb-4">😔</div>
            <p className="text-gray-400 text-lg">No OMDB movies found for this search</p>
            <p className="text-gray-500 text-sm mt-2">Try a different search term</p>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center xs:p-3 lg:p-6 xs:ml-4 lg:ml-0">
          <div className="text-center">
            <div className="text-6xl mb-4">⏳</div>
            <p className="text-gray-400 text-lg">Loading OMDB results...</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default OMDBMovieList;
