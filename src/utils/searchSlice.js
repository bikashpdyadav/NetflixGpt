import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    ToggleSearchGPT: false,
    useGPTSearch: true, // Toggle for GPT search feature
    searchMovieText: null,
    searchMovieList: null,
    omdbSearchMovieList: null,
    gptSuggestions: null,
    gptSearchLoading: false,
    movieIdDetails: null,
    movieDetails: null,
    movieDetailsById: null,
    movieCastDetail: null,
  },
  reducers: {
    toggleSearch: (state, action) => {
      state.ToggleSearchGPT = action.payload;
    },
    setUseGPTSearch: (state, action) => {
      state.useGPTSearch = action.payload;
    },
    searchMovie: (state, action) => {
      state.searchMovieText = action.payload;
    },
    searchMovieList: (state, action) => {
      state.searchMovieList = action.payload;
    },
    omdbSearchMovieList: (state, action) => {
      state.omdbSearchMovieList = action.payload;
    },
    addGPTSuggestions: (state, action) => {
      state.gptSuggestions = action.payload;
    },
    setGPTSearchLoading: (state, action) => {
      state.gptSearchLoading = action.payload;
    },
    movieIdDetails: (state, action) => {
      state.movieIdDetails = action.payload;
    },
    movieDetails: (state, action) => {
      state.movieDetails = action.payload;
    },
    movieDetailsById: (state, action) => {
      state.movieDetailsById = action.payload;
    },
    movieCastDetail: (state, action) => {
      state.movieCastDetail = action.payload;
    },
  },
});

export const {
  toggleSearch,
  setUseGPTSearch,
  searchMovie,
  searchMovieList,
  omdbSearchMovieList,
  addGPTSuggestions,
  setGPTSearchLoading,
  movieIdDetails,
  movieDetails,
  movieDetailsById,
  movieCastDetail,
} = searchSlice.actions;
export default searchSlice.reducer;
