import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
  name: "config",
  initialState: {
    currentLanguage: "en",
    languageDetailsStore: null,
  },
  reducers: {
    changeLanguage: (state, action) => {
      state.currentLanguage = action.payload;
    },
    languageStore: (state, action) => {
      state.languageDetailsStore = action.payload;
    },
  },
});

export default configSlice.reducer;
export const { changeLanguage, languageStore } = configSlice.actions;
