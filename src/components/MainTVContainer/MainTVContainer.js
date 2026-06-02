import React from "react";
import VideoTitle from "./VideoTitle";
import VideoContainer from "./VideoContainer";
import { useSelector } from "react-redux";

const MainTVContainer = () => {
  const tv = useSelector((store) => store.tv.tvAiringToday);

  if (!tv?.length) return null;

  const mainTV = tv.find((item) => item.backdrop_path) || tv[0];
  const { original_name, overview, id, backdrop_path } = mainTV;

  return (
    <div className="relative w-full">
      <VideoContainer tvId={id} backdropPath={backdrop_path} />
      <VideoTitle title={original_name} overview={overview} />
    </div>
  );
};

export default MainTVContainer;
