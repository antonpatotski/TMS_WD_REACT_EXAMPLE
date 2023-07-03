import './input.scss';

const Input = ({
  value: inputValue,
  onChange = () => {},
  disabled,
  error,
  errorMsg,
  label,
  type = 'text',
  refLink = null,
  noPadding,
  ...props
}) => {
  return (
    <div className={`ra-input__container ${noPadding ? 'ra-input__container--no-padding' : ''}`}>
      <label className="ra-input__label">
        { label && (<span>{label}</span>) }
        <input
          className={`ra-input ${error ? 'ra-input--error' : ''}`}
          disabled={disabled}
          value={inputValue}
          onChange={({ target: { value } }) => onChange(value)}
          type={type}
          ref={refLink}
          { ...props }
        />
      </label>
      {
        errorMsg && (
          <p className="ra-input__error-list">
            { errorMsg }
          </p>
        )
      }
    </div>
  )
}

export default Input;
