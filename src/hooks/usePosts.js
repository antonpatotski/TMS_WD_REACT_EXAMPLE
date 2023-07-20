import { setSearch } from "../store/posts";
import { useDispatch, useSelector } from "react-redux";

const usePosts = () => {
  const { posts, status, search, selectedPost } = useSelector((state) => {
    return state.posts;
  });
  const dispatch = useDispatch();

  const updateSearch = (value) => {
    dispatch(setSearch(value))
  }

  return {
    posts,
    search,
    status,
    selectedPost,
    setSearch: updateSearch,
  }
}

export default usePosts;
