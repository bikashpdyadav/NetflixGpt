import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import movieReducer from "./movieSlice";
import searchReducer from "./searchSlice";
import configReducer from "./configSlice";
import tvReducer from "../slice/tvSlice";
const store = configureStore({
  reducer: {
    user: userReducer,
    movie: movieReducer,
    search: searchReducer,
    config: configReducer,
    tv: tvReducer,
  },
});

export default store;
