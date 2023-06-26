import './postItem.scss';

const PostItem = ({ post, size = 'large' }) => {
  return (
    <div className={`post-item__container item__container--${size}`}>
      <div className="post-item__body">
        <div className="post-item-body__main-info">
          <p className="post-item-body__date">{ post.date }</p>
          <p className="post-item-body__title">{ post.title }</p>
        </div>
        <img className="post-item-body__image" src={post.image} alt="Post" />
        <p className="post-item-body__desc">{post.description}</p>
      </div>
      <div className="post-item__footer"></div>
    </div>
  )
}

export default PostItem;
