import { configureStore } from "@reduxjs/toolkit";
import blogSlice from "../slices/blogSlice";

export const store = configureStore({
  reducer: {
    blogs: blogSlice,
  },
});

export * from "../slices/blogSlice";
export * from "../thunks/blogThunks";
