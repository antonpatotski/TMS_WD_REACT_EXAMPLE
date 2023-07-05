import { useParams } from "react-router";
import {useContext, useMemo} from "react";

import { PostsContext } from "../../context/posts";

const SelectedPost = () => {
  const { postId } = useParams();
  const { posts } = useContext(PostsContext);
  const selectedPost = useMemo(() => posts.find(({ id }) => id.toString() === postId), [ postId, posts ])

  return (
   !selectedPost
     ? null
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
