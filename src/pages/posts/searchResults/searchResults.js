import PostItem from "../allPosts/postItem/postItem";
import usePosts from "../../../hooks/usePosts";
import { useSelector } from "react-redux";
import { searchedPosts } from "../../../selectors/searchedPosts";

const SearchResults = () => {
  const { search } = usePosts();
  const postsResult = useSelector(searchedPosts);

  return (
    <div>
      Search results: { search }

      { postsResult
        .map(post => (
          <PostItem post={post} size="small" />
        ))
      }
    </div>
  )
}

export default SearchResults;
