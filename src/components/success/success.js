import './success.scss';

const Success = ({ children }) => (<div className="success__container">{ children }</div>)

Success.Message = ({ children }) => (<p className="success__message">{ children }</p>)

Success.Action = ({ children }) => (<div>{ children }</div>)

export default Success;
