import React from "react";
import SearchBar from "./SearchBar";
import MovieSuggestion from "./MovieSuggestion";
import Header from "../Header";
import Sidebar from "../Sidebar";
import MenuBar from "../MenuBar";

const SearchContainer = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="xs:hidden lg:block">
        <Sidebar />
      </div>
      <div className="xs:block lg:hidden">
        <MenuBar />
      </div>
      
      <div className="flex flex-col flex-grow">
      <SearchBar />
      <MovieSuggestion />
      </div>
    </div>
  );
};

export default SearchContainer;
