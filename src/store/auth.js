import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "../helpers/api";
import {STATUSES} from "../constants/statuses";

const defaultTokens = JSON.parse(localStorage.getItem('tokens') || null) || { access: null, refresh: null }

// First, create the thunk
export const fetchTokens = createAsyncThunk(
  'auth/fetchTokens',
  async (params) => {
    // Здесь только логика запроса и возврата данных
    // Никакой обработки ошибок
    return await API.logIn(params);
  }
);

export const refreshToken = createAsyncThunk(
  'auth/refreshToken',
  async (refresh) => {
    // Здесь только логика запроса и возврата данных
    // Никакой обработки ошибок
    return await API.refreshToken(refresh);
  }
);

const authSlice = createSlice({
  name: 'tokens',
  initialState: {
    ...defaultTokens,
    status: 'idle',
    error: null,
    isLoggedIn: defaultTokens.access && true,
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder
      .addCase(fetchTokens.pending, (state) => {
        state.status = STATUSES.inProgress
      })
      .addCase(fetchTokens.fulfilled, (state, { payload }) => {
        // Add posts to the state array
        const { access, refresh } = payload;
        localStorage.setItem('tokens', JSON.stringify(payload));
        state.isLoggedIn = true;
        state.access = access;
        state.refresh = refresh;
      })
      .addCase(fetchTokens.rejected, (state, { payload }) => {
        state.status = STATUSES.failed;
        state.isLoggedIn = false;
        state.error = payload;
      })

      .addCase(refreshToken.fulfilled, (state, { payload }) => {
        state.access = payload.access;
        localStorage.setItem('tokens', JSON.stringify({ access: payload.access, refresh: state.refresh }));
      })
  },
});
// Export the reducer, either as a default or named export
export default authSlice.reducer;
