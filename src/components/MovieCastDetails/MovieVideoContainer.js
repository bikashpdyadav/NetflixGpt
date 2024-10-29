import React from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../../hooks/useMovieTrailer";

const MovieVideoContainer = () => {
  const movieCast = useSelector((store) => store.search.movieCastDetail);
  const movieDetailsId = useSelector((store) => store.search.movieDetailsById);
  const movieTrailerList = useSelector((store) => store.search.movieDetails);
  console.log(movieTrailerList);
  console.log(movieDetailsId);
  useMovieTrailer(movieDetailsId);

  const trailer = movieTrailerList?.results.filter(
    (trailer) => trailer.Type === "Official Trailer"
  );

  if (!trailer) return null;
  const officialTrailer = trailer[0]?.key;
  return (
    <div>
      <img src={movieCast?.Poster} alt="" />
      <iframe
        width="560"
        height="315"
        src={"https://www.youtube.com/embed/" + officialTrailer}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default MovieVideoContainer;
