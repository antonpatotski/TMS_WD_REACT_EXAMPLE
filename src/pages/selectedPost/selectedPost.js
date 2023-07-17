import { useParams } from "react-router";
import {useMemo} from "react";

import usePosts from "../../hooks/usePosts";

const SelectedPost = () => {
  const { postId } = useParams();
  const { posts } = usePosts();
  const selectedPost = useMemo(() => posts.find(({ id }) => id.toString() === postId), [ postId, posts ])

  return (
   !selectedPost
     ? (<div>No posts found !!!!!!!</div>)
     : (
        <div>
          Selected Post Id: { postId }
          <br/>

          Title: {selectedPost.title}
          <br/>
          Desc: {selectedPost.description}
        </div>
      )
  )
}

export default SelectedPost;
