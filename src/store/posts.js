import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// First, create the thunk
export const fetchPosts = createAsyncThunk(
  'posts/fetchPosts',
  async () => {
    // Здесь только логика запроса и возврата данных
    // Никакой обработки ошибок
    const urlParams = new URLSearchParams({
      limit: 11, // count of elements on page
      offset: 1, // page number
    });// limit=11&offset=1
    const { results: postsResponse } = await fetch('https://studapi.teachmeskills.by/blog/posts?' + urlParams)
      .then(response => response.json());

    return postsResponse;
  }
);

const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: [],
    search: '',
    status: 'idle',
  },
  reducers: {
    // setPosts: (state, action) => {
    //   state.posts = action.payload;
    // },
    setSearch: (state, action) => {
      state.search = action.payload
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = 'pending'
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        // Add posts to the state array
        state.posts = action.payload;
        state.status = 'succeeded';
      })
      .addCase(fetchPosts.rejected, (state) => {
        state.status = 'failed';
      })
  },
});
export const { setSearch } = postsSlice.actions;
// Export the reducer, either as a default or named export
export default postsSlice.reducer;
