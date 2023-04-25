import { createSlice } from '@reduxjs/toolkit'

const initialState = { list:[]};

const postSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {
    addPost(state,action){
        state.list.push(action.payload)
    },
    deletePost: (state, action) => {
      state.list = state.list.filter((post) => post.id !== action.payload);
    },
    updatePost: (state, action) => {
      state.list  = state.list.map((postList) => {
        if (postList.id === action.payload.id) {
          return action.payload;
        }
        return postList;
      });
      
    },

  },
})

export const { addPost, deletePost, updatePost  } = postSlice.actions
export default postSlice.reducer