import { configureStore } from '@reduxjs/toolkit';
import imageSliderReducer from '../features/imageSliderSlice';

export const store = configureStore({
  reducer: {
    imageSlider: imageSliderReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
