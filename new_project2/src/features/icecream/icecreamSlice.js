import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  numOfIcecreams: 20,
}

const icecreamSlice = createSlice({
  name: "icecream",
  initialState,
  reducers: {
    ordered: state => {
      state.numOfIcecreams --
    },
    restoked: (state, action) => {
      state.numOfIcecreams += action.payload
    }
  }
})

export const {ordered, restoked} = icecreamSlice.actions
export default icecreamSlice.reducer