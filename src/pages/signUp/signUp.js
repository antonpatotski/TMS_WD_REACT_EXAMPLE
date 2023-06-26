import Form from "../../components/form/form/form";
import Input from "../../components/form/input/input";
import Button from "../../components/button/button";

import './singUp.scss';

const SignUp = () => {
  return (
    <div className="sign-up__container">
      <Form className="sign-up__form">
        <Input label="Name" placeholder="Your name" />
        <Input label="Email" placeholder="Your email" />
        <Input label="Password" placeholder="Your password" />
        <Input label="ConfirmPassword" placeholder="Your password" />
        <Button fullWidth>Sign Up</Button>
      </Form>
    </div>
  )
}

export default SignUp;
