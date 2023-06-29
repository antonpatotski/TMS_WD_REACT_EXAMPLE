import { useRef } from "react";
import { useSearchParams } from "react-router-dom";

import Form from "../../components/form/form/form";
import Input from "../../components/form/input/input";
import Button from "../../components/button/button";

import './singUp.scss';


const SignUp = () => {
  const emailRef = useRef();
  const [ urlParams ] = useSearchParams();

  console.log(urlParams.get('token'))
  const onNameChange = () => {
    console.log(emailRef.current.value);

    emailRef.current.select();
  }

  return (
    <div className="sign-up__container">
      <Form className="sign-up__form">
        <Input label="Name" placeholder="Your name" onChange={onNameChange} />
        <Input label="Email" placeholder="Your email" refLink={emailRef} />
        <Input label="Password" placeholder="Your password" />
        <Input label="ConfirmPassword" placeholder="Your password" />
        <Button fullWidth>Sign Up</Button>
      </Form>
    </div>
  )
}

export default SignUp;
