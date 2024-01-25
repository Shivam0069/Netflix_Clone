import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../utils/userSlice";
import movieSlice from "./movieSlice";
import headerSlice from "./headerSlice";

const appStore = configureStore({
  reducer: {
    user: userSlice,
    movies: movieSlice,
    header: headerSlice,
  },
});

export default appStore;
