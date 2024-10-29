import React from "react";
import VideoTitle from "./VideoTitle";
import VideoContainer from "./VideoContainer";
import { useSelector } from "react-redux";
import Sidebar from "../Sidebar";

const MainContainer = () => {
  const movie = useSelector((store) => store.movie?.nowPlayingMovieList);

  const lang = useSelector((store) => store.config?.languageDetailsStore);
  if (movie.length === 0) return;
  const mainMovie = movie[3];
  const { original_title, overview, id } = mainMovie;

  return (
    <div className="flex flex-col">
      <VideoTitle
        title={lang?.title ? lang?.title : original_title}
        overview={overview}
      />

      <VideoContainer movieId={id} />
    </div>
  );
};

export default MainContainer;
