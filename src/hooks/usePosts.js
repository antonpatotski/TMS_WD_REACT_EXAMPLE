import { useEffect, useState } from "react";

const usePosts = () => {
  const [ posts, setPosts ] = useState([]);
  const [ search, setSearch ] = useState('');

  useEffect(() => {
    const getPosts = async () => {
      try {
        const urlParams = new URLSearchParams({
          limit: 11, // count of elements on page
          offset: 1, // page number
        });// limit=11&offset=1
        const { results: postsResponse } = await fetch('https://studapi.teachmeskills.by/blog/posts?' + urlParams)
          .then(response => response.json())

        setPosts(postsResponse)
      } catch (e) {
        console.error(e);
      }
    }

    getPosts();
  }, []);

  return {
    posts,
    search,
    setSearch,
  }
}

export default usePosts;
