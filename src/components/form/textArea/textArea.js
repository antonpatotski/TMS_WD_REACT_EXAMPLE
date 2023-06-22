
import './textArea.scss';

const Input = (props) => {
  const {
    value: { value, key },
    onChange,
    disabled,
    error,
    errorMsg,
    label,
  } = props;

  return (
    <div className="ra-text-area__container">
      <label className="ra-text-area__label">
        <span>{label}</span>
        <textarea
          className={`ra-text-area ${error ? 'ra-text-area--error' : ''}`}
          disabled={disabled}
          value={value}
          onChange={({ target: { value } }) => onChange(key, value)}
        />
      </label>
      <p className="ra-text-area__error-list">
        { errorMsg }
      </p>
    </div>
  )
}

export default Input;
