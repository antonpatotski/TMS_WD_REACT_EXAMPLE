import {useState} from "react";

import Form from "../../components/form/form/form";
import Input from "../../components/form/input/input";
import Button from "../../components/button/button";
import Success from "../../components/success/success";
import {emailValidator, nameValidation, passwordValidator} from "../../helpers/validators";
import {Title} from "../../components/title/title";
import {API} from "../../helpers/api";

import './signUp.scss';

const SignUp = () => {
  const [form, setForm] = useState({});
  const [ showSuccessMessage, setShowSuccessMessage ] = useState(false);
  const setValue = (key, value) => {
    setForm({...form, [key] : value})
  }
  const onSubmit = async () => {
    try {
      await API.setAuth(form);
      setShowSuccessMessage(true);
    } catch (e) {
      console.warn(e);
    }
  }

  return (
    <div className="sign-up__container">
      {
        showSuccessMessage ? (
          <Success>
            <Success.Message>
              Please activate your account with the activation
              link in the email <b>{form.email}</b>. Please, check your email
            </Success.Message>
            <Success.Action>
              <Button type="primary">Go to home</Button>
            </Success.Action>
          </Success>
        ) : (
          <>
            <Title>Sign up</Title>
            <Form className="sign-up__form">
              <Input
                label="Name"
                placeholder="Your name"
                onChange={ value => setValue('username', value) }
                validator={nameValidation}
              />
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
              <Input
                label="ConfirmPassword"
                type="password"
                placeholder="Your password"
                validator={passwordValidator}
                onChange={value=>setValue('confirmPassword', value)}
              />
              <Button fullWidth onClick={onSubmit}>Sign Up</Button>
            </Form>
          </>
        )
      }
    </div>
  )
}

export default SignUp;
