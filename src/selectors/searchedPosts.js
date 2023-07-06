import { createSelector } from "@reduxjs/toolkit";

export const searchedPosts =
  createSelector(({ posts }) => ({ posts: posts.posts, search: posts.search }),
    ({ posts, search }) => posts.filter(post => post.title.toLowerCase().includes(search.toLowerCase()))
  );


/*const createSelector1 = function() {
  arguments.reducer((acc, currenValue) => {
    return currenValue()
  })
}*/
