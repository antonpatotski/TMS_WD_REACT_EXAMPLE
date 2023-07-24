import PostItem from "../allPosts/postItem/postItem";
import usePosts from "../../../hooks/usePosts";
import {useEffect, useState} from "react";
import {useDebounce} from "../../../hooks/useDebounce";

const SearchResults = () => {
  const { search, posts, updatePosts } = usePosts();
  const debounce = useDebounce();

  useEffect(() => {
    debounce({ search }, updatePosts);
  }, [ search, debounce ]);
  // const postsResult = useSelector(searchedPosts);

  return (
    <div>
      Search results: { search }

      { posts
        .map(post => (
          <PostItem post={post} size="small" />
        ))
      }
    </div>
  )
}

export default SearchResults;
