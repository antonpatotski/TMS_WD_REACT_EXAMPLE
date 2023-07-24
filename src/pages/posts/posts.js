import {useEffect} from "react";
import {useDispatch} from "react-redux";

import SearchResults from "./searchResults/searchResults";
import AllPosts from "./allPosts/allPosts";

import './posts.scss';
import { fetchPosts } from "../../store/posts";
import usePosts from "../../hooks/usePosts";

const Posts = () => {
  const { search, updatePosts } = usePosts();
  const dispatch = useDispatch();

  useEffect(() => {
    updatePosts();
  }, [])

  return (
    <div className="posts__container">
      {
        search
          ? <SearchResults />
          : <AllPosts />
      }
    </div>
  )
}

export default Posts;
