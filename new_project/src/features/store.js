import { configureStore } from "@reduxjs/toolkit";
import categoriesSlice from "./category/categoriesSlice";
import productsSlice from "./products/productsSlice";

export const store = configureStore({
  reducer: {
    categories: categoriesSlice,
    products: productsSlice,
  }
})