import { useEffect } from "react";

import { setPosts, setSearch } from "../store/posts";
import { useDispatch, useSelector } from "react-redux";

const usePosts = () => {
  const { posts, search } = useSelector(state => state.posts);
  const dispatch = useDispatch();

  const updateSearch = (value) => {
    dispatch(setSearch(value))
  }

  useEffect(() => {
    const getPosts = async () => {
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

    getPosts();
  }, []);

  return {
    posts,
    search,
    setSearch: updateSearch,
  }
}

export default usePosts;
