import { ReactComponent as LikeIcon } from "../../../../assets/svg/Like.svg";
import { ReactComponent as DislikeIcon } from "../../../../assets/svg/Down.svg";
import { ReactComponent as FavoritesIcon } from "../../../../assets/svg/Bookmark.svg";

import './postItem.scss';
import {useNavigate} from "react-router";
import {ROUTES} from "../../../../constants/routes";

const PostItem = ({ post, size = 'large' }) => {
  const navigate = useNavigate();

  return (
    <div className={`post-item__container post-item__container--${size}`}>
      <div className="post-item__body">
        <div className="post-item-body__main-info">
          <p className="post-item-body__date">{ post.date }</p>
          <p
            className="post-item-body__title"
            onClick={() => navigate(`${post.id}`)}
          >
            { post.title }
          </p>
          <p className="post-item-body__desc">{post.description}</p>
        </div>
        <img className="post-item-body__image" src={post.image} alt="Post" />
      </div>
      <div className="post-item__footer">
        <div className="post-item-footer__like">
          <div className="post-item-footer-like__count">
            <LikeIcon />
            { post.lesson_num }
          </div>
          <DislikeIcon />
        </div>
        <FavoritesIcon />
      </div>
    </div>
  )
}

export default PostItem;
