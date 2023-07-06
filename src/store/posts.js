import { createSlice } from "@reduxjs/toolkit";

const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: [],
    search: '',
  },
  reducers: {
    setPosts: (state, action) => {
      state.posts = action.payload;
    },
    setSearch: (state, action) => {
      state.search = action.payload
    }
  },
});

// Extract and export each action creator by name
export const { setPosts, setSearch } = postsSlice.actions;
// Export the reducer, either as a default or named export
export default postsSlice.reducer;

// const setPosts = (value) => {
//   postsSlice.reducers.setPosts(postsSlice.reducer, { type: `${postsSlice.name}/setPosts`, payload: value })
// }
