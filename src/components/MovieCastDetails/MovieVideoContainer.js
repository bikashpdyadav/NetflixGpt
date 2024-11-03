import React from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../../hooks/useMovieTrailer";

const MovieVideoContainer = () => {
  const movieCast = useSelector((store) => store.search.movieCastDetail);
  const movieDetailsId = useSelector((store) => store.search.movieDetailsById);
  const movieTrailerList = useSelector((store) => store.search.movieDetails);
  useMovieTrailer(movieDetailsId);

  const trailer = movieTrailerList?.results?.filter(
    (trailer) => trailer.Type === "Official Trailer"
  );

  if (!trailer || trailer.length === 0) return null;
  const officialTrailer = trailer[0]?.key;

  return (
    <div className="flex flex-col items-center p-4 max-w-3xl mx-auto md:flex-row md:space-x-4">
      {/* Poster Image */}
      <div className="mb-4 md:mb-0 md:w-1/3">
        <img
          src={movieCast?.Poster}
          alt={movieCast?.Title + " Poster"}
          className="w-full h-auto rounded shadow-lg"
        />
      </div>

      {/* Trailer Video */}
      <div className="w-full md:w-2/3">
        <iframe
          width="100%"
          height="315"
          src={`https://www.youtube.com/embed/${officialTrailer}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="rounded-lg shadow-lg"
        ></iframe>
      </div>
    </div>
  );
};

export default MovieVideoContainer;
