import React from "react";
import SearchBar from "./SearchBar";
import MovieSuggestion from "./MovieSuggestion";
import Header from "../Header";
import MenuBar from "../MenuBar";

const SearchContainer = () => {
  return (
    <>
      <div className="xs:block lg:hidden">
        <MenuBar />
      </div>
      <Header />
      <SearchBar />
      <MovieSuggestion />
    </>
  );
};

export default SearchContainer;
