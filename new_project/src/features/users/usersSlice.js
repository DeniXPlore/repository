import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {id: '0', name: 'Denis Emelianov'},
  {id: '1', name: 'Olga Krasilnikova'},
  {id: '2', name: 'Ekaterina Volkova'}
]

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers:{}
})

export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer