import {useContext, useState} from "react";

import PostItem from "./postItem/postItem";
import { TABS } from "../../constants/tabs";
import Tabs from "../../components/tabs/tabs";
import { PostsContext } from "../../context/posts";

import './posts.scss';

const Posts = () => {
  const [ activeTab, setActiveTab ] = useState(TABS[0]?.key);
  const { posts } = useContext(PostsContext);

  if (posts.length === 0) {
    return null;
  }

  return (
    <div className="posts__container">
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} tabs={TABS} />
      <div className="posts__body">
        <div className="posts-body__left">
          <PostItem post={posts[0]} size='large' />
          <div className="posts-body-left__medium">
            {
              posts.slice(1, 5).map((post) => (
                <PostItem key={post.id} post={post} size='medium' />
              ))
            }
          </div>
        </div>

        <div className="posts-body__right">
          {
            posts.slice(5, 11).map((post) => (
              <PostItem key={post.id} post={post} size='small' />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Posts;