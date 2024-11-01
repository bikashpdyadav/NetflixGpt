import React from "react";
import VideoTitle from "./VideoTitle";
import VideoContainer from "./VideoContainer";
import { useSelector } from "react-redux";
import Sidebar from "../Sidebar";

const MainTVContainer = () => {
  const movie = useSelector((store) => store.movie?.nowPlayingMovieList);
  const tv = useSelector((store) => store.tv.tvAiringToday);
  const lang = useSelector((store) => store.config?.languageDetailsStore);
  if (tv.length === 0) return;
  const mainTV = tv[2];
  const { original_name, overview, id } = mainTV;
  //console.log(tv);
  return (
    <div className="flex flex-col">
      <VideoTitle title={original_name} overview={overview} />
      <VideoContainer tvId={id} />
    </div>
  );
};

export default MainTVContainer;
