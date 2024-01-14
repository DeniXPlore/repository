import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "https://api.escuelajs.co/api/v1";

export const getCategories = createAsyncThunk(
  "categories/getCategories",
  async (_, thunkAPI) => {
    try {
      const res = await axios(`${BASE_URL}/categories`);
      return res.data;
    } catch (err) {
      console.log(err);
      return thunkAPI.rejectWithValue(err);
    }
  }
);

const initialState = {
  list: [],
  isLoading: false
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getCategories.pending, (state, { payload }) => {
        state.isLoading = true;
      })
      .addCase(getCategories.fulfilled, (state, { payload }) => {
        state.list = payload;
        state.isLoading = false
      })
      .addCase(getCategories.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export default categoriesSlice.reducer;
