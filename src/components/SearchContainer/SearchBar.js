import React, { useRef } from "react";
import lang from "../../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import useSearchMovie from "../../hooks/useSearchMovie";
import { searchMovie } from "../../utils/searchSlice";
import useOmdbSearchMovie from "../../hooks/useOmdbSearchMovie";
import useMovieDetails from "../../hooks/useMovieDetails";

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
      <div className="absolute -z-10 w-screen">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/ab4b0b22-2ddf-4d48-ae88-c201ae0267e2/0efe6360-4f6d-4b10-beb6-81e0762cfe81/IN-en-20231030-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt="logo"
        />
      </div>
      <div className="pt-[20%] flex justify-center">
        <form
          className="xs:flex xs:flex-col xs:gap-2 xs:items-center xs:w-4/5 lg:w-1/2 lg:bg-black lg:grid lg:grid-cols-12"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            ref={searchText}
            className="xs:p-2 xs:mt-4 lg:p-4 lg:m-4 lg:col-span-9"
            type="text"
            placeholder={lang[currentLanguage].gptSearchPlaceholder}
          />
          <button
            className="bg-red-700 xs:w-20 lg:w-32 xs:p-1 lg:px-6 lg:py-2 rounded-lg lg:col-span-3 lg:m-4"
            onClick={handleGPTSearch}
          >
            {lang[currentLanguage].Search}
          </button>
        </form>
      </div>
    </>
  );
};

export default SearchBar;
