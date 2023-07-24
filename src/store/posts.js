import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "../helpers/api";
import {STATUSES} from "../constants/statuses";

// First, create the thunk
export const fetchPosts = createAsyncThunk(
  'posts/fetchPosts',
  async ({ search, url }) => {
    // Здесь только логика запроса и возврата данных
    // Никакой обработки ошибок
    const config = { limit: 11 };

    if (search) {
      config.search = search;
    }

    return await API.getPosts({ params: config, url });
  }
);

export const fetchPost = createAsyncThunk(
  'posts/fetchPost',
  async (postId) => {
    // Здесь только логика запроса и возврата данных
    // Никакой обработки ошибок
    const result = await API.logIn(postId);

    return result;
  }
);

const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: [],
    search: '',
    status: STATUSES.init,
    next: null,
    previous: null,
    selectedPost: null,
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
        const { next, previous, results } = action.payload;
        state.posts = results;
        state.next = next?.replace('http', 'https');
        state.previous = previous?.replace('http', 'https');
        state.status = STATUSES.success;
      })
      .addCase(fetchPosts.rejected, (state) => {
        state.status = STATUSES.failed;
      })

      .addCase(fetchPost.fulfilled, (state, action) => {
        // Add posts to the state array
        state.selectedPost = action.payload;
      })
  },
});
export const { setSearch } = postsSlice.actions;
// Export the reducer, either as a default or named export
export default postsSlice.reducer;
