import { configureStore } from "@reduxjs/toolkit";
import accordionReducer from "./accordion/accordionSlice";

const store = configureStore({
  reducer: {
    accordion: accordionReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
