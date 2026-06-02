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
    <div className="relative z-10 -mt-[14vw] lg:-mt-[9vw] lg:pl-10 pb-8">
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
