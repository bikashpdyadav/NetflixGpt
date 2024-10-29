import React from "react";
import MovieDetails from "./MovieDetails";
import MovieVideoContainer from "./MovieVideoContainer";
import MovieCastName from "./MovieCastName";
import useMovieCastDetails from "../../hooks/useMovieCastDetails";

const MovieCastDetails = () => {
  useMovieCastDetails();
  return (
    <>
      <MovieDetails />
      <MovieVideoContainer />
      <MovieCastName />
    </>
  );
};

export default MovieCastDetails;
