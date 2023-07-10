import './input.scss';
import {useState} from "react";

const Input = ({
  value: inputValue,
  onChange = () => {},
  disabled,
  validator = () => {},
  label,
  type = 'text',
  refLink = null,
  noPadding,
  ...props
}) => {
  const [ errorMsg, setErrMsg ] = useState('');
  const onInputChange = ({ target: { value } }) => {
    const err = validator(value);
    setErrMsg(err);
    onChange(value);
  }

  return (
    <div className={`ra-input__container ${noPadding ? 'ra-input__container--no-padding' : ''}`}>
      <label className="ra-input__label">
        { label && (<span>{label}</span>) }
        <input
          className={`ra-input ${errorMsg ? 'ra-input--error' : ''}`}
          disabled={disabled}
          value={inputValue}
          onChange={onInputChange}
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
