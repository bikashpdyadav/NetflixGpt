import React from "react";
import { useSelector } from "react-redux";
import MovieList from "../SecondaryContainer/MovieList";
import useTVAiringToday from "../../hooks/useTVAiringToday";
import useTVOnTheAir from "../../hooks/useTVOnTheAir";
import useTVPopular from "../../hooks/useTVPopular";
import useTVTopRated from "../../hooks/useTVTopRated";

const TVList = () => {
  const tvStore = useSelector((store) => store.tv);
  useTVAiringToday();
  useTVOnTheAir();
  useTVPopular();
  useTVTopRated();

  return (
    <div className="flex flex-col gap-10 w-full">
      <MovieList title={"Airing Today"} movies={tvStore.tvAiringToday} />
      <MovieList title={"On the Air"} movies={tvStore.onTheAir} />
      <MovieList title={"Popular TV Series"} movies={tvStore.popular} />
      <MovieList title={"Top Rated"} movies={tvStore.topRated} />
    </div>
  );
};

export default TVList;
