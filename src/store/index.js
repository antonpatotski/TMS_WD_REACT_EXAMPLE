import { configureStore } from "@reduxjs/toolkit";
import postsReducer from './posts';
import tokenReducer from './auth';
import userReducer from './user';

export default configureStore({
  reducer: {
    posts: postsReducer,
    token: tokenReducer,
    user: userReducer
    // theme: themeReducer
  }
})
