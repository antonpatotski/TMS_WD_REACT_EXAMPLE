import './input.scss';

const Input = (props) => {
  const {
    value: InputValue,
    onChange = () => {},
    disabled,
    error,
    errorMsg,
    label,
    type = 'text',
    refLink = null,
  } = props;
  const { value, key } = InputValue || {};

  return (
    <div className="ra-input__container">
      <label className="ra-input__label">
        <span>{label}</span>
        <input
          className={`ra-input ${error ? 'ra-input--error' : ''}`}
          disabled={disabled}
          value={value}
          onChange={({ target: { value } }) => onChange(key, value)}
          type={type}
          ref={refLink}
          { ...props }
        />
      </label>
      <p className="ra-input__error-list">
        { errorMsg }
      </p>
    </div>
  )
}

export default Input;
