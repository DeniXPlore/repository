import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import cakeSlice from "../cake/cakeSlice";

const initialState = {
  loading: false,
  users: [],
  error: "",
};

export const fetchUsers = createAsyncThunk('user/fetchusers', () => {
  return axios
    .get('https://jsonplaceholder.typicode.com/usersasd')
    .then((response) => response.data.map((user) => user.id))
})

const userSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false
      })
  }
})

export default user.reducer;
export const { cakeActions } = cakeSlice.actions;
