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
import SearchContainer from "./SearchContainer/SearchContainer";
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
        <div className="hidden lg:block w-1/4">
          <Sidebar />
        </div>

        {/* MenuBar visible on smaller screens */}
        <div className="block lg:hidden">
          <MenuBar />
        </div>

        {/* Main content area */}
        <div className="flex-1 bg-black lg:p-4 sm:p-6 lg:ml-6">
          <MainContainer />
          <div className="mt-8 lg:mt-16">
            <SecondaryContainer />
          </div>
          <div className="my-8">
            <TVList />
          </div>
        </div>

        {/* Conditionally render SearchContainer */}
        {toggleSearch && (
          <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-75 z-50 flex justify-center items-center">
            <SearchContainer />
          </div>
        )}
      </div>
    </>
  );
};

export default Browse;
