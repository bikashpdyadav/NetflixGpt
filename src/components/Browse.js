import Header from "./Header";
import MainContainer from "./MainContainer/MainContainer";
import SecondaryContainer from "./SecondaryContainer/SecondaryContainer";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovie from "../hooks/useTopRatedMovie";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import useTrendingMovie from "../hooks/useTrendingMovie";
import useMovieGenre from "../hooks/useMovieGenre";
import useMovieGenreId from "../hooks/useMovieGenreId";
import { useSelector } from "react-redux";
import Sidebar from "./Sidebar";
import TVList from "./TVContainer/TVList";
import MenuBar from "./MenuBar";

const Browse = () => {
  const toggleSearch = useSelector((store) => store.search.ToggleSearchGPT);

  // Call custom hooks to fetch data
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovie();
  useUpcomingMovies();
  useTrendingMovie();
  useMovieGenre();
  useMovieGenreId();

  return (
    <>
      <Header />
      <div className="flex flex-col lg:flex-row">
        {/* Sidebar visible on larger screens */}
        <div className="hidden lg:block">
          <Sidebar />
        </div>

        {/* MenuBar visible on smaller screens */}
        <div className="block lg:hidden">
          <MenuBar />
        </div>

        {/* Main content area */}
        <div className="bg-black sm:mb-0 mb-8">
          <MainContainer />
          <SecondaryContainer />
          <TVList />
        </div>
      </div>
    </>
  );
};

export default Browse;
