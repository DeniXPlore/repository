import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "1",
    title: "project",
    content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et, facilis.",
  },
  {
    id: "2",
    title: "slices",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, delectus odit eos recusandae eum excepturi?",
  },
];

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postAdded: {
      reducer(state, action) {
      state.push(action.payload);
      },
      prepare(title, content, userId){
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            userId
          }
        }
      }
  }
  }
});

export const selectAllPosts = (state) => state.posts;
export const { postAdded } = postSlice.actions;
export default postSlice.reducer;
