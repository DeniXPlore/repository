import { configureStore } from "@reduxjs/toolkit";
import categoriesSlice from "../category/categoriesSlice";

export const store = configureStore({
  reducer: {
    categories: categoriesSlice
  }
})