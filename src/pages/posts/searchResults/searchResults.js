import { useContext } from "react";
import { PostsContext } from "../../../context/posts";
import PostItem from "../allPosts/postItem/postItem";

const SearchResults = () => {
  const { posts, search } = useContext(PostsContext);

  return (
    <div>
      Search results: { search }

      { posts
        .filter(post => post.title.toLowerCase().includes(search.toLowerCase()))
        .map(post => (
          <PostItem post={post} size="small" />
        ))
      }
    </div>
  )
}

export default SearchResults;
