import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Browse from "./Browse";
import ItemDetails from "./ItemDetails";
import MovieCastDetails from "./MovieCastDetails/MovieCastDetails";
import Sidebar from "./Sidebar";
import SearchContainer from "./SearchContainer/SearchContainer";
import MovieList from "./SecondaryContainer/MovieList";
import SecondaryContainer from "./SecondaryContainer/SecondaryContainer";
import Category from "./TVContainer/TVList";
import TVList from "./TVContainer/TVList";
import TVContainer from "./TVContainer/TVContainer";
import MySpace from "./MySpace/MySpace";
import PayWall from "./PayWall/PayWall";
import Movie from "./Movie";
import HelpSetting from "./HelpSetting/HelpSetting";
import MenuBar from "./MenuBar";
import App from "../App";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/search",
      element: <SearchContainer />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
    {
      path: "browse/search/:id",
      element: <ItemDetails />,
    },
    {
      path: "browse/movie/details/:imbdID",
      element: <MovieCastDetails />,
    },
    {
      path: "browse/movie/sidebar",
      element: <Sidebar />,
    },
    {
      path: "browse/menubar",
      element: <MenuBar />,
    },

    {
      path: "browse/tv",
      element: <TVContainer />,
    },
    {
      path: "browse/movie",
      element: <Movie />,
    },
    {
      path: "/mypage",
      element: <MySpace />,
    },
    {
      path: "/paywall",
      element: <PayWall />,
    },
    {
      path: "/settings",
      element: <HelpSetting />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
