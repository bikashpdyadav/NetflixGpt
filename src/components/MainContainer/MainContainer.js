import React from "react";
import VideoTitle from "./VideoTitle";
import VideoContainer from "./VideoContainer";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const movie = useSelector((store) => store.movie?.nowPlayingMovieList);
  const lang = useSelector((store) => store.config?.languageDetailsStore);
  
  if (movie.length === 0) return;
  const mainMovie = movie[3];
  const { original_title, overview, id } = mainMovie;

  return (
    <div className="flex flex-col p-8">
      <VideoContainer movieId={id} />
      <VideoTitle
        title={lang?.title ? lang?.title : original_title}
        overview={overview}
      />
    </div>
  );
};

export default MainContainer;
