import {useContext} from "react";
import {PostsContext} from "../../context/posts";

import './posts.scss';
import SearchResults from "./searchResults/searchResults";
import AllPosts from "./allPosts/allPosts";

const Posts = () => {
  const { posts, search } = useContext(PostsContext);

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
