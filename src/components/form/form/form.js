import './form.scss';

const Form = ({ children, className }) => <div className={`form__container ${className}`}>{ children }</div>

Form.Item = ({ children }) => <div className="form-item__container">{ children }</div>

export default Form;
