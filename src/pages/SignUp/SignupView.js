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
} from '../Login/Login.style';

export default function SignUpView(props) {
  const email = useRef(null);
  const password = useRef(null);
  const userName = useRef(null);
  const firstName = useRef(null);
  const lastName = useRef(null);

  const submitHandler = () => {
  // Regular expression to check if the email is in the correct format
  var emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  var passRegex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
  var nameRegex = /^[a-zA-Z]+$/;
  var userNameRegex = /^[a-zA-Z0-9]+$/;
  // Check if the email is empty
  if (email.current.value === "") {
    window.alert("Email field must be filled out");
    return;
  }
  // Check if the email is in the correct format
  if (!email.current.value.match(emailRegex)) {
    window.alert("Please enter a valid email address");
    return;
  }
  // Check if the password is empty
  if (password.current.value === "") {
    window.alert("Password field must be filled out");
    return;
  }
  // Check if the password is in the correct format
  if (!password.current.value.match(passRegex)) {
    window.alert("Password must be at least 8 characters as well as contain at least one uppercase, one lowercase, and one number.");
    return;
  }
    // Check if the userName is empty
    if (userName.current.value === "") {
        window.alert("Username field must be filled out");
        return;
    }
    // Check if the usernName is in the correct format
    if (!userName.current.value.match(userNameRegex)) {
        window.alert("Username must be alphanumeric");
        return;
    }
    // Check if the first name is empty
    if (firstName.current.value === "") {
        window.alert("First name field must be filled out");
        return;
    }
    // Check if the first name is in the correct format
    if (!firstName.current.value.match(nameRegex)) {
        window.alert("First name must be alphabetic");
        return;
    }
    // Check if the last name is empty
    if (lastName.current.value === "") {
        window.alert("Last name field must be filled out");
        return;
    }
    // Check if the last name is in the correct format
    if (!lastName.current.value.match(nameRegex)) {
        window.alert("Last name must be alphabetic");
        return;
    }

  
  props.signup(email.current.value, password.current.value, userName.current.value, firstName.current.value, lastName.current.value);
  
  };

  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(!show);
  };
  return (
    <VerticalContainer>
      <Title>Sign Up in to StudNet</Title>
      <LoginContainer>
        <InputLbl>Email address</InputLbl>
        <TextInput type="email" ref={email} placeholder="Email"/>
        <InputLbl>Username</InputLbl>
        <TextInput type="text" ref={userName} placeholder="Username"/>
        <InputLbl>First name</InputLbl>
        <TextInput type="text" ref={firstName} placeholder="First name"/>
        <InputLbl>Last name</InputLbl>
        <TextInput type="text" ref={lastName} placeholder="Last name"/>
        <InputLbl>Password</InputLbl>
        <TextInput type={show ? 'text' : 'password'} id="password" ref={password} placeholder="Password"/>
        <EyeLab onClick={handleShow}>{show ? 'Hide' : 'Show'} </EyeLab>
        <SubmitBtn onClick={() => submitHandler()}>Sign in</SubmitBtn>
      </LoginContainer>

    </VerticalContainer>

  );
}
