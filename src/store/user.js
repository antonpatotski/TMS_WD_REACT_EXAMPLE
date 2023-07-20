import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "../helpers/api";
import {STATUSES} from "../constants/statuses";
import {userSerializer} from "../helpers/serializers";

// First, create the thunk
export const fetchUser = createAsyncThunk(
  'user/fetchUser',
  async (accessToken) => {
    // Здесь только логика запроса и возврата данных
    // Никакой обработки ошибок
    return await API.getUser(accessToken);
  }
);

const userSlice = createSlice({
  name: 'tokens',
  initialState: {
    user: null,
    status: 'idle',
    error: null,
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder
      .addCase(fetchUser.pending, (state) => {
        state.status = STATUSES.inProgress
      })
      .addCase(fetchUser.fulfilled, (state, { payload }) => {
        // Add posts to the state array
        state.user = userSerializer(payload);
      })
      .addCase(fetchUser.rejected, (state, { payload }) => {
        state.status = STATUSES.failed;
        state.error = payload;
      })
  },
});
// Export the reducer, either as a default or named export
export default userSlice.reducer;
