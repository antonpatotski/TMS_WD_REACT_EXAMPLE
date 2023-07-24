import {useState} from "react";

import PostItem from "./postItem/postItem";
import { TABS } from "../../../constants/tabs";
import Tabs from "../../../components/tabs/tabs";
import usePosts from "../../../hooks/usePosts";
import Loading from "../../../components/loading/loading";
import {STATUSES} from "../../../constants/statuses";

import './allPosts.scss';
import Pagination from "../../../components/pagination/pagintaion";

const Posts = () => {
  const [ activeTab, setActiveTab ] = useState(TABS[0]?.key);
  const { posts, status } = usePosts();

  return (
    <Loading isLoading={status !== STATUSES.success}>
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

        <Pagination />
      </div>
    </Loading>
  )
}

export default Posts;
