import React, { useRef, useState } from 'react';
import {
  InputLbl,
  LoginContainer,
  SubmitBtn,
  TextInput,
  Title,
  VerticalContainer,
  EyeLab,
} from './LoginStyle.style';

export default function LoginView(props) {
  const email = useRef(null);
  const password = useRef(null);
  const submitHandler = () => {
    props.login(email.current.value, password.current.value);
  };
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(!show);
  };
  return (
    <VerticalContainer>
      <Title>Log in to StudNet</Title>
      <LoginContainer>
        <InputLbl>Email address</InputLbl>
        <TextInput type="email" ref={email} placeholder="Email" />
        <InputLbl>Password</InputLbl>
        <TextInput type={show ? 'text' : 'password'} id="password" ref={password} placeholder="Password" />
        <EyeLab onClick={handleShow}>{show ? 'Hide' : 'Show'}</EyeLab>
        <SubmitBtn onClick={() => submitHandler()}>Log in</SubmitBtn>
      </LoginContainer>

    </VerticalContainer>

  );
}
