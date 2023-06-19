import './button.scss';

const Button = ({ children, type = 'primary' }) => (
  <button className={`btn btn--${type}`}>{children} type: {type}</button>
);


export default Button;
