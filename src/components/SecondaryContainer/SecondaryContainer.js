import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movieStore = useSelector((store) => store.movie);
  const movieByGenre = useSelector((store) => store.movie.movieByGenre);
  const currentMovieGenre = useSelector(
    (store) => store.movie.currentMovieGenre
  );

  return (
    <div className="flex flex-col gap-10 w-full min-w-0">
      {movieByGenre?.length !== 0 ? (
        <MovieList
          title={currentMovieGenre?.selectedGenreName + " Movies"}
          movies={movieByGenre}
        />
      ) : (
        <>
          <MovieList
            title={"Now Playing"}
            movies={movieStore.nowPlayingMovieList}
          />
          <MovieList
            title={"Trending"}
            movies={movieStore.trendingMovieList}
          />
          <MovieList
            title={"Popular Movies"}
            movies={movieStore.popularMovieList}
          />
          <MovieList
            title={"Top Rated"}
            movies={movieStore.topRatedMovieList}
          />
          <MovieList
            title={"Upcoming"}
            movies={movieStore.upcomingMovieList}
          />
        </>
      )}
    </div>
  );
};

export default SecondaryContainer;
