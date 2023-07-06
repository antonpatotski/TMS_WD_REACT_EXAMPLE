import { useEffect } from "react";

import { setPosts, setSearch } from "../store/posts";
import { useDispatch, useSelector } from "react-redux";

let isPostInProcess = false

const usePosts = () => {
  const { posts, search } = useSelector(state => state.posts);
  const dispatch = useDispatch();

  const updateSearch = (value) => {
    dispatch(setSearch(value))
  }

  useEffect(() => {
    const getPosts = async () => {
      isPostInProcess = true;

      try {
        const urlParams = new URLSearchParams({
          limit: 11, // count of elements on page
          offset: 1, // page number
        });// limit=11&offset=1
        const { results: postsResponse } = await fetch('https://studapi.teachmeskills.by/blog/posts?' + urlParams)
          .then(response => response.json())

        dispatch(setPosts(postsResponse));
      } catch (e) {
        console.error(e);
      }
    }

    if (!isPostInProcess) {
      getPosts();
    }
  }, []);

  return {
    posts,
    search,
    setSearch: updateSearch,
  }
}

export default usePosts;
