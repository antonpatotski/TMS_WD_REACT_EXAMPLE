import {useState} from "react";
import {NavLink} from "react-router-dom";

import Form from "../../components/form/form/form";
import Input from "../../components/form/input/input";
import Button from "../../components/button/button";
import Success from "../../components/success/success";
import {emailValidator, passwordValidator} from "../../helpers/validators";
import {Title} from "../../components/title/title";
import {ROUTES} from "../../constants/routes";

import './signIn.scss';
import {useDispatch, useSelector} from "react-redux";
import {fetchTokens} from "../../store/auth";

const SignIn = () => {
  const [form, setForm] = useState({});
  const [ showSuccessMessage, setShowSuccessMessage ] = useState(false);
  const dispatch = useDispatch();
  const { status: authStatus, error } = useSelector(state => state.token)
  const setValue = (key, value) => {
    setForm({...form, [key] : value});
  }
  const onSubmit = () => {
    try {
      dispatch(fetchTokens(form));
      setShowSuccessMessage(true);
    } catch (e) {
      console.warn(e);
    }
  }

  return (
    <div className="sign-in__container">
      {
        showSuccessMessage ? (
          <Success>
            <Success.Message>
              Please activate your account with the activation
              link in the email <b>{form.email}</b>. Please, check your email
            </Success.Message>
            <Success.Action>
              <Button type="primary"><NavLink to={ROUTES.main}>Go to home</NavLink></Button>
            </Success.Action>
          </Success>
        ) : (
          <>
            <Title>Sign In</Title>
            <Form className="sign-in__form">
              <Input
                validator={emailValidator}
                label="Email"
                type="email"
                placeholder="Your email"
                onChange={value=>setValue('email', value)}
              />
              <Input
                label="Password"
                type="password"
                placeholder="Your password"
                validator={passwordValidator}
                onChange={value=>setValue('password', value)}
              />
              <Button fullWidth onClick={onSubmit}>Sign In</Button>
            </Form>
          </>
        )
      }
    </div>
  )
}

export default SignIn;
