import { createSlice } from "@reduxjs/toolkit";

const tvSlice = createSlice({
  name: "movie",
  initialState: {
    tvAiringToday: [],
    onTheAir: [],
    popular: [],
    topRated: [],
    tvTrailer: [], 
  },  
  reducers: { 
    addTVAiringToday: (state, action) => {
      state.tvAiringToday = action.payload;
    },
    addOnTheAir: (state, action) => {
      state.onTheAir = action.payload;
    },
    addPopular: (state, action) => {
      state.popular = action.payload;
    },
    addTVTopRated: (state, action) => {
      state.topRated = action.payload;
    },
    addTVTrailer: (state, action) => {
      state.tvTrailer = action.payload;
    },
  },
});

export default tvSlice.reducer;
export const {
  addTVAiringToday,
  addOnTheAir,
  addPopular,
  addTVTopRated,
  addTVTrailer,
} = tvSlice.actions;
