import {useContext, useEffect, useState} from "react";

import PostItem from "./postItem/postItem";
import { TABS } from "../../../constants/tabs";
import Tabs from "../../../components/tabs/tabs";

import './allPosts.scss';
import usePosts from "../../../hooks/usePosts";

const Posts = () => {
  const [ activeTab, setActiveTab ] = useState(TABS[0]?.key);
  const { posts } = usePosts();

  if (posts.length === 0) {
    return null;
  }

  return (
    <div className="posts__container">
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} tabs={TABS} />
      <div className="posts__body">
        <div className="all-posts-body__left">
          <PostItem post={posts[0]} size='large' />
          <div className="all-posts-body-left__medium">
            {
              posts.slice(1, 5).map((post) => (
                <PostItem key={post.id} post={post} size='medium' />
              ))
            }
          </div>
        </div>

        <div className="all-posts-body__right">
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
