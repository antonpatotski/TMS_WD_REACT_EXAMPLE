import { setSearch } from "../store/posts";
import { useDispatch, useSelector } from "react-redux";

const usePosts = () => {
  const { posts, search } = useSelector((state) => {
    return state.posts;
  });
  const dispatch = useDispatch();

  const updateSearch = (value) => {
    dispatch(setSearch(value))
  }

  return {
    posts,
    search,
    setSearch: updateSearch,
  }
}

export default usePosts;
