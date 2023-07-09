import {useContext, useEffect} from "react";
import {useDispatch} from "react-redux";

import {PostsContext} from "../../context/posts";
import SearchResults from "./searchResults/searchResults";
import AllPosts from "./allPosts/allPosts";

import './posts.scss';
import { fetchPosts } from "../../store/posts";

const Posts = () => {
  const { search } = useContext(PostsContext);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
    // dispatch(({ type: 'posts/fetchPosts/fulfilled' }))
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
