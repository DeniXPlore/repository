import { configureStore } from "@reduxjs/toolkit";
import cakeSlice from "./cake/cakeSlice";
import icecreamSlice from "./icecream/icecreamSlice";
import userSlice from "./user/userSlice";

const store = configureStore({
  reducer: {
    cake: cakeSlice,
    icecream: icecreamSlice,
    user: userSlice,
  },
});

export default store;
