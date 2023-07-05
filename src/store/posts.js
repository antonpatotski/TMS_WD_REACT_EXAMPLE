import { createSlice } from "@reduxjs/toolkit";

const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: []
  },
  reducers: {
    setPosts: (state, action) => {
      state.posts = action.payload;
    }
  },
});
// Extract and export each action creator by name
export const { setPosts } = postsSlice.actions
// Export the reducer, either as a default or named export
export default postsSlice.reducer
