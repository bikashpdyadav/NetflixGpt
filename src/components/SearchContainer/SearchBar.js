import React, { useRef } from "react";
import lang from "../../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import useSearchMovie from "../../hooks/useSearchMovie";
import { searchMovie } from "../../utils/searchSlice";
import useOmdbSearchMovie from "../../hooks/useOmdbSearchMovie";

const SearchBar = () => {
  const currentLanguage = useSelector((store) => store.config.currentLanguage);
  const dispatch = useDispatch();
  const searchText = useRef(null);
  useSearchMovie();
  useOmdbSearchMovie();

  const handleGPTSearch = () => {
    dispatch(searchMovie(searchText.current.value));
  };

  return (
    <>
      <div className="absolute inset-0 -z-10 w-full h-full bg-cover bg-center bg-no-repeat custom-bg" />
      <div className="pt-32 flex justify-center">
        <form
          className="w-full max-w-2xl m-4 p-6 flex items-center justify-center bg-black bg-opacity-70 rounded-lg shadow-lg"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="w-full flex relative">
            <input
              ref={searchText}
              className="w-full p-4 text-white bg-gray-800 rounded-l-xl focus:outline-none focus:ring-2 focus:ring-red-900 transition-all duration-200 ease-in"
              type="text"
              placeholder={lang[currentLanguage].gptSearchPlaceholder}
              aria-label="Search input for GPT"
            />
            <button
              className="p-4 bg-red-700 text-white rounded-r-xl hover:bg-red-800 transition-all duration-200 ease-in font-semibold"
              onClick={handleGPTSearch}
              aria-label="Search"
            >
              {lang[currentLanguage].Search}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default SearchBar;
