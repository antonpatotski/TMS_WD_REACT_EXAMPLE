import './button.scss';

const Button = ({ children, type = 'primary', onClick = () => {}, fullWidth = false }) => (
  <button
    className={
    `btn btn--${type} ${fullWidth ? 'btn--full-width' : ''}`
    }
    onClick={onClick}
  >
    {children}
  </button>
);


export default Button;
