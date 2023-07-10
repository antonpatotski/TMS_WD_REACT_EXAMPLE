import {useState} from "react";

import Form from "../../components/form/form/form";
import Input from "../../components/form/input/input";
import Button from "../../components/button/button";

import './signUp.scss';
import {emailValidator, nameValidation} from "../../helpers/validators";


const SignUp = () => {
  const [form, setForm] = useState({});
  const setValue = (key, value) => {
    setForm({...form, [key] : value})
  }
  const onSubmit = () => {

    const setForm = async () => {
      try{
        const results = await fetch('https://studapi.teachmeskills.by/auth/users',
          {method:'POST',  body: JSON.stringify(form)})
          .then(response => response.json());
        console.log(results)
      } catch (e) {
        console.error(e)
      }
    }
    setForm()
  }

  return (
    <div className="sign-up__container">
      <Form className="sign-up__form">
        <Input
          label="Name"
          placeholder="Your name"
          onChange={ value => setValue('name', value) }
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
          onChange={value=>setValue('password', value)}
        />
        <Input
          label="ConfirmPassword"
          type="password"
          placeholder="Your password"
          onChange={value=>setValue('confirmPassword', value)}
        />
        <Button fullWidth onClick={onSubmit}>Sign Up</Button>
      </Form>
    </div>
  )
}

export default SignUp;
