/* External dependencies */
import { configureStore } from "@reduxjs/toolkit";

/* Local dependencies */
import postsSlice from "./reducer";

export const store = configureStore({
  reducer: {
    posts: postsSlice,
  },
});
