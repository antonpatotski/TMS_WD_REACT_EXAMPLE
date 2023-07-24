import usePosts from "../../hooks/usePosts";

import './pagintaion.scss';

const Pagination = () => {
  const { next, previous, updatePosts } = usePosts();

  return (
    <div className="pagination__container">
      { previous &&  <a onClick={() => updatePosts({ url: previous })}>Previous</a> }
      { next && <a onClick={() => updatePosts({ url: next })}>Next</a> }
    </div>
  )
}

export default Pagination;
