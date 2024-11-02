import { useSelector } from "react-redux";
import MovieList from "../SecondaryContainer/MovieList";

const MovieSuggestion = () => {
  const searchMovieList = useSelector((store) => store.search.searchMovieList);
  const omdbSearchMovieList = useSelector(
    (store) => store.search.omdbSearchMovieList
  );
  //console.log(omdbSearchMovieList,"hi")
  return (
    <div className="bg-gray-950 pt-10">
      <div className="relative xs:mt-4 lg:pl-10">
        <MovieList title="Movie Results (TMDB)" movies={searchMovieList} />
        <MovieList title="Movie Results (OMDB)" omdbMovies={omdbSearchMovieList} />
      </div>
    </div>
  );
};

export default MovieSuggestion;
