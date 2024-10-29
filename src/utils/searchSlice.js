import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    ToggleSearchGPT: false,
    searchMovieText: null,
    searchMovieList: null,
    omdbSearchMovieList: null,
    movieIdDetails: null,
    movieDetails: null,
    movieDetailsById: null,
    movieCastDetail: null,
  },
  reducers: {
    toggleSearch: (state, action) => {
      state.ToggleSearchGPT = action.payload;
    },
    searchMovie: (state, action) => {
      state.searchMovieText = action.payload;
    },
    searchMovieList: (state, action) => {
      state.searchMovieList = action.payload;
    },
    omdbSearchMovieList: (state, action) => {
      if (action.payload == null) {
        return {
          ...state,
          omdbSearchMovieList: null,
        };
      }

      return {
        ...state,
        omdbSearchMovieList: action.payload,
      };
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
  searchMovie,
  searchMovieList,
  omdbSearchMovieList,
  movieIdDetails,
  movieDetails,
  movieDetailsById,
  movieCastDetail,
} = searchSlice.actions;
export default searchSlice.reducer;
