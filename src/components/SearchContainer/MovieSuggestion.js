import { useSelector } from "react-redux";
import MovieList from "../SecondaryContainer/MovieList";

const MovieSuggestion = () => {
  const searchMovieList = useSelector((store) => store.search.searchMovieList);
  const omdbSearchMovieList = useSelector(
    (store) => store.search.omdbSearchMovieList
  );

  return (
    <div className="bg-gray-950 w-full min-h-screen p-8 lg:p-8">
      <div className="container mx-auto">
        <MovieList title="Movie Results (TMDB)" movies={searchMovieList} />
        <MovieList title="Movie Results (OMDB)" omdbMovies={omdbSearchMovieList} />
      </div>
    </div>
  );
};

export default MovieSuggestion;
