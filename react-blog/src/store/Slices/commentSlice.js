import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  comment: [],
};

export const commentSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    addComment: (state, action) => {
      state.comment.push(action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addComment } = commentSlice.actions;

export default commentSlice.reducer;
