/* eslint-disable */

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
  let flag = 0;
  // Regular expression to check if the email is in the correct format
  var emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  var passRegex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;

  // Check if the email is empty
  if (email.current.value === "") {
    window.alert("Email field must be filled out");
    flag = 1;
    return;
  }
  // Check if the email is in the correct format
  if (!email.current.value.match(emailRegex)) {
    window.alert("Please enter a valid email address");
    flag = 1;
    return;
  }
  // Check if the password is empty
  if (password.current.value === "") {
    window.alert("Password field must be filled out");
    flag = 1;
    return;
  }
  // Check if the password is in the correct format
  if (!password.current.value.match(passRegex)) {
    window.alert("Password must be at least 8 characters as well as contain at least one uppercase, one lowercase, and one number.");
    flag = 1;
    return;
  }
  if(flag !== 1)
  {
    props.login(email.current.value, password.current.value);
  }

      // props.login(email.current.value, password.current.value);

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
        <TextInput type="email" ref={email} placeholder="Email"/>
        <InputLbl>Password</InputLbl>
        <TextInput type={show ? 'text' : 'password'} id="password" ref={password} placeholder="Password"/>
        <EyeLab onClick={handleShow}>{show ? 'Hide' : 'Show'} </EyeLab>
        <SubmitBtn onClick={() => submitHandler()}>Log in</SubmitBtn>
      </LoginContainer>

    </VerticalContainer>

  );
}
