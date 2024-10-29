import { useSelector } from "react-redux";
import MovieList from "../SecondaryContainer/MovieList";
import store from "../../utils/store";
import { Link } from "react-router-dom";

const MovieSuggestion = () => {
  const searchMovieList = useSelector((store) => store.search.searchMovieList);
  const omdbSearchMovieList = useSelector(
    (store) => store.search.omdbSearchMovieList
  );
  return (
    <div className=" bg-gray-950 xs:mt-10 lg:mt-12 w-screen">
      <MovieList title="Movie Results(TMDB)" movies={searchMovieList} />

      <MovieList title="Movie Results(OMDB)" omdbMovies={omdbSearchMovieList} />
    </div>
  );
};

export default MovieSuggestion;
