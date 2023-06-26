import PostItem from "./postItem/postItem";
import './posts.scss';

const Posts = ({ posts }) => {
  console.log(posts);

  if (posts.length === 0) {
    return null;
  }

  return (
    <div className="posts__container">
      <div className="posts__body">
        <div className="posts-body__left">
          <PostItem post={posts[0]} size='large' />
          {
            posts.slice(1, 4).map((post) => (
              <PostItem key={post.id} post={post} size='medium' />
            ))
          }
        </div>

        <div className="posts-body__right">
          {
            posts.slice(5, 10).map((post) => (
              <PostItem key={post.id} post={post} size='small' />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Posts;
