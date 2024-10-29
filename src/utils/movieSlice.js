import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    nowPlayingMovieList: [],
    movieTrailerList: [],
    popularMovieList: [],
    topRatedMovieList: [],
    upcomingMovieList: [],
    trendingMovieList: [],
    movieGenreId: [],
    movieGenre: [],
    movieByGenre: [],
    currentMovieGenre: [],
  },
  reducers: {
    addMovie: (state, action) => {
      state.nowPlayingMovieList = action.payload;
    },
    addMovieTrailer: (state, action) => {
      state.movieTrailerList = action.payload;
    },
    addPopularMovie: (state, action) => {
      state.popularMovieList = action.payload;
    },
    addTopRatedMovie: (state, action) => {
      state.topRatedMovieList = action.payload;
    },
    addUpcomingMovie: (state, action) => {
      state.upcomingMovieList = action.payload;
    },
    addTrendingMovie: (state, action) => {
      state.trendingMovieList = action.payload;
    },
    getMovieGenre: (state, action) => {
      state.movieGenre = action.payload;
    },
    getMovieGenreId: (state, action) => {
      state.movieGenreId = action.payload;
    },
    getMovieByGenre: (state, action) => {
      state.movieByGenre = action.payload;
    },
    getMovieCurrentGenre: (state, action) => {
      state.currentMovieGenre = action.payload;
    },
  },
});

export default movieSlice.reducer;
export const {
  addMovie,
  addMovieTrailer,
  addPopularMovie,
  addTopRatedMovie,
  addUpcomingMovie,
  addTrendingMovie,
  getMovieGenreId,
  getMovieGenre,
  getMovieByGenre,
  getMovieCurrentGenre,
} = movieSlice.actions;
