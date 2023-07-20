import { useParams } from "react-router";
import {useEffect, useMemo, useState} from "react";

import usePosts from "../../hooks/usePosts";
import {fetchPost} from "../../store/posts";
import {useDispatch, useSelector} from "react-redux";
import Loading from "../../components/loading/loading";

const SelectedPost = () => {
  const { postId } = useParams();
  const [ isLoading, setIsLoading ] = useState(true);
  const { selectedPost } = usePosts();
  const dispatch = useDispatch();
  // const selectedPost = useMemo(() => posts.find(({ id }) => id.toString() === postId), [ postId, posts ])

  useState(() => {
    dispatch(fetchPost(postId))
  }, [ postId ])

  useEffect(() => {
    if (selectedPost !== null) {
      setIsLoading(false);
    }
  }, [ selectedPost ])

  return (
    <Loading isLoading={isLoading}>
      {
        !selectedPost
          ? (<div>No posts found !!!!!!!</div>)
          : (
            <div>
              Selected Post Id: { postId }
              <br/>

              Title: {selectedPost?.title}
              <br/>
              Desc: {selectedPost?.description}
            </div>
          )
      }
    </Loading>
  )
}

export default SelectedPost;
