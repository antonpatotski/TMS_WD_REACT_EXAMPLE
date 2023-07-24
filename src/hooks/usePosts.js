import {fetchPosts, setSearch} from "../store/posts";
import { useDispatch, useSelector } from "react-redux";

const usePosts = () => {
  const posts = useSelector((state) => {
    return state.posts;
  });
  const dispatch = useDispatch();

  const updateSearch = (value) => {
    dispatch(setSearch(value))
  };

  const updatePosts = (params = {}) => {
    dispatch(fetchPosts(params));
  }

  return {
    ...posts,
    updatePosts,
    setSearch: updateSearch,
  }
}

export default usePosts;
