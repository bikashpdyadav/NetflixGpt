import React, { useRef } from "react";
import lang from "../../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import useSearchMovie from "../../hooks/useSearchMovie";
import useOmdbSearchMovie from "../../hooks/useOmdbSearchMovie";
import useGPTSearch from "../../hooks/useGPTSearch";
import { searchMovie, setUseGPTSearch } from "../../utils/searchSlice";

const SearchBar = () => {
  const currentLanguage = useSelector((store) => store.config.currentLanguage);
  const dispatch = useDispatch();
  const searchText = useRef(null);
  const useGPT = useSelector((store) => store.search?.useGPTSearch ?? true);
  
  useSearchMovie();
  useOmdbSearchMovie();
  const { gptResults, isLoading, error } = useGPTSearch(); // Use GPT hook

  const handleGPTSearch = () => {
    const query = searchText.current.value;
    if (query.trim()) {
      dispatch(searchMovie(query));
    }
  };

  return (
    <>
      <div className="absolute inset-0 -z-10 w-full h-full bg-cover bg-center bg-no-repeat custom-bg" />
      <div className="pt-32 flex justify-center">
        <form
          className="w-full max-w-2xl m-4 p-6 flex items-center justify-center bg-black bg-opacity-70 rounded-lg shadow-lg"
          onSubmit={(e) => {
            e.preventDefault();
            handleGPTSearch();
          }}
        >
          <div className="w-full flex flex-col">
            {/* GPT Toggle */}
            <div className="flex items-center mb-2">
              <label className="flex items-center text-white text-sm cursor-pointer">
                <input
                  type="checkbox"
                  checked={useGPT}
                  onChange={(e) => dispatch(setUseGPTSearch(e.target.checked))}
                  className="mr-2 w-4 h-4 cursor-pointer"
                />
                <span>🤖 Use AI Search</span>
              </label>
              {isLoading && (
                <span className="ml-4 text-yellow-400 text-sm flex items-center">
                  <span className="animate-spin mr-2">⚙️</span>
                  AI thinking...
                </span>
              )}
            </div>

            {/* Search Input */}
            <div className="w-full flex relative">
              <input
                ref={searchText}
                className="w-full p-4 text-white bg-gray-800 rounded-l-xl focus:outline-none focus:ring-2 focus:ring-red-900 transition-all duration-200 ease-in"
                type="text"
                placeholder={lang[currentLanguage].gptSearchPlaceholder}
                aria-label="Search input for GPT"
              />
              <button
                className="p-4 bg-red-700 text-white rounded-r-xl hover:bg-red-800 transition-all duration-200 ease-in font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                onClick={handleGPTSearch}
                disabled={isLoading}
                aria-label="Search"
              >
                {isLoading ? "..." : lang[currentLanguage].Search}
              </button>
            </div>

            {/* GPT Suggestions */}
            {useGPT && gptResults && gptResults.length > 0 && (
              <div className="mt-4 text-white">
                <p className="mb-2 text-sm font-semibold">💡 AI Suggestions:</p>
                <div className="flex flex-wrap gap-2">
                  {gptResults.slice(0, 5).map((title, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        searchText.current.value = title;
                        dispatch(searchMovie(title));
                      }}
                      className="px-3 py-1 bg-gray-700 hover:bg-gray-600 rounded text-xs transition-colors"
                    >
                      {title}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Error Message */}
            {error && (
              <div className="mt-2 text-red-400 text-sm">
                ⚠️ AI search unavailable. Using standard search.
              </div>
            )}
          </div>
        </form>
      </div>
    </>
  );
};

export default SearchBar;
