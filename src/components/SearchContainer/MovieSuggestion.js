import { useSelector } from "react-redux";
import MovieList from "../SecondaryContainer/MovieList";
import OMDBMovieList from "../SecondaryContainer/OMDBMovieList";

const MovieSuggestion = () => {
  const searchMovieList = useSelector((store) => store.search.searchMovieList);
  const omdbSearchMovieList = useSelector(
    (store) => store.search.omdbSearchMovieList
  );
  console.log("TMDB Search Movie List:", searchMovieList);
  console.log("OMDB Search Movie List:", omdbSearchMovieList);
  return (
    <div className="bg-gray-950 pt-10">
      <div className="relative xs:mt-4 lg:pl-10">
        <MovieList title="Movie Results (TMDB)" movies={searchMovieList} />
        <OMDBMovieList title="Movie Results (OMDB)" omdbMovies={omdbSearchMovieList} />
      </div>
    </div>
  );
};

export default MovieSuggestion;
