import './loading.scss';
export const Loading = ({ isLoading, children }) => {
  return (
    <>
      { isLoading ? (
        <div className="center">
          <div className="wave"></div>
          <div className="wave"></div>
          <div className="wave"></div>
          <div className="wave"></div>
          <div className="wave"></div>
          <div className="wave"></div>
          <div className="wave"></div>
          <div className="wave"></div>
          <div className="wave"></div>
          <div className="wave"></div>
        </div>
      ) : children }
    </>
  )
}

export default Loading;
