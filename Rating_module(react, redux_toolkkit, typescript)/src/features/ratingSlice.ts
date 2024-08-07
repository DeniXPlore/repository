import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type RatingState = {
  rating: number;
  hover: number;
};

const initialState: RatingState = {
  rating: 0,
  hover: 0,
};

const ratingSlice = createSlice({
  name: "rating",
  initialState,
  reducers: {
    setRating(state, action: PayloadAction<number>) {
      state.rating = action.payload;
    },
    setHover(state, action: PayloadAction<number>) {
      state.hover = action.payload;
    },
  },
});

export const { setRating, setHover } = ratingSlice.actions;
export default ratingSlice.reducer;
