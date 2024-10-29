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
    <div className="bg-black">
      {movieByGenre?.length !== 0 ? (
        <div className="relative lg:-mt-80 z-40 xs:mt-4">
          <MovieList
            title={currentMovieGenre?.selectedGenreName + "Movies"}
            movies={movieByGenre}
          />
        </div>
      ) : (
        <div className="relative lg:-mt-80 z-40 xs:mt-4">
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
        </div>
      )}
    </div>
  );
};

export default SecondaryContainer;
