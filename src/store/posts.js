import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "../helpers/api";
import {STATUSES} from "../constants/statuses";

// First, create the thunk
export const fetchPosts = createAsyncThunk(
  'posts/fetchPosts',
  async () => {
    // Здесь только логика запроса и возврата данных
    // Никакой обработки ошибок
    const { results: postsResponse } = await API.getPosts({ limit: 11, offset: 1 });

    return postsResponse;
  }
);

const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: [],
    search: '',
    status: STATUSES.init,
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
        state.status = STATUSES.inProgress
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        // Add posts to the state array
        state.posts = action.payload;
        state.status = STATUSES.success;
      })
      .addCase(fetchPosts.rejected, (state) => {
        state.status = STATUSES.failed;
      })
  },
});
export const { setSearch } = postsSlice.actions;
// Export the reducer, either as a default or named export
export default postsSlice.reducer;
