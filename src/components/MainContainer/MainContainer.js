import React from "react";
import VideoTitle from "./VideoTitle";
import VideoContainer from "./VideoContainer";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const movie = useSelector((store) => store.movie?.nowPlayingMovieList);
  const lang = useSelector((store) => store.config?.languageDetailsStore);

  if (!movie?.length) return null;

  const mainMovie = movie.find((item) => item.backdrop_path) || movie[0];
  const { original_title, overview, id, backdrop_path } = mainMovie;

  return (
    <div className="relative w-full">
      <VideoContainer movieId={id} backdropPath={backdrop_path} />
      <VideoTitle
        title={lang?.title ? lang.title : original_title}
        overview={overview}
      />
    </div>
  );
};

export default MainContainer;
