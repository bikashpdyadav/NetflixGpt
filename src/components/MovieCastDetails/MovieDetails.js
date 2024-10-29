import React from "react";
import { useSelector } from "react-redux";

const MovieDetails = () => {
  const movieCast = useSelector((store) => store.search.movieCastDetail);
  return (
    <div>
      <div>{movieCast?.Title}</div>
      <div>
        {movieCast?.Type}
        {movieCast?.Released}
        {parseInt(parseInt(movieCast?.Runtime) / 60) +
          "h " +
          (parseInt(movieCast?.Runtime) % 60) +
          "min"}
      </div>

      <div>
        IMDb RATING {movieCast?.imdbRating + "/10"}{" "}
        {movieCast?.imdbVotes + " votes"}
      </div>
    </div>
  );
};

export default MovieDetails;
