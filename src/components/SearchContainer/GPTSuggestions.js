import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { searchMovie } from "../../utils/searchSlice";

const GPTSuggestions = () => {
  const gptSuggestions = useSelector((store) => store.search.gptSuggestions);
  const isLoading = useSelector((store) => store.search.gptSearchLoading);
  const dispatch = useDispatch();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center p-6 text-white bg-gray-900 bg-opacity-80 rounded-lg mt-4">
        <div className="flex items-center">
          <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-3"></div>
          <span className="text-lg">AI is finding the perfect movies for you...</span>
        </div>
      </div>
    );
  }

  if (!gptSuggestions || gptSuggestions.length === 0) {
    return null;
  }

  const handleSuggestionClick = (movieTitle) => {
    dispatch(searchMovie(movieTitle));
  };

  return (
    <div className="bg-gray-900 bg-opacity-90 p-6 rounded-lg mt-4 border border-gray-700">
      <h3 className="text-white text-xl font-semibold mb-4 flex items-center">
        <span className="mr-2">🤖</span>
        AI Recommendations
      </h3>
      <div className="flex flex-wrap gap-3">
        {gptSuggestions.map((movie, index) => (
          <button
            key={index}
            onClick={() => handleSuggestionClick(movie)}
            className="px-4 py-2 bg-gray-800 rounded-lg text-white text-sm hover:bg-gray-700 cursor-pointer transition-all duration-200 hover:scale-105 border border-gray-600 hover:border-red-500"
          >
            {movie}
          </button>
        ))}
      </div>
      <p className="text-gray-400 text-xs mt-3">
        Click on any suggestion to search for that movie
      </p>
    </div>
  );
};

export default GPTSuggestions;

