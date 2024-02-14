import { configureStore } from "@reduxjs/toolkit";
import cakeSlice from "./cake/cakeSlice";
import icecreamSlice from "./icecream/icecreamSlice";

const store = configureStore({
  reducer: { 
    cake: cakeSlice,
    icecream: icecreamSlice,
  },
});

export default store;
