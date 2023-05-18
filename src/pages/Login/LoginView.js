/* eslint-disable */
import eyeClosed from '../../icons/eye-off.png';
import eyeOpen from '../../icons/eye-on.png';
import React, { useRef, useState } from 'react';
import {
  InputLbl,
  LoginContainer,
  SubmitBtn,
  TextInput,
  Title,
  VerticalContainer,
  EyeLab,
  TextMesasge,
  NavLink,
} from './Login.style';

export default function LoginView(props) {
  const email = useRef(null);
  const password = useRef(null);
  const [ message, setMessage ] = useState("");
  const [ messagePass ,setMessagePass ]= useState("")
  const [ messagePass1 ,setMessagePass1 ]= useState("")
  const [ messagePass2 ,setMessagePass2 ]= useState("")

  const submitHandler = () => {
    // Regular expression to check if the email is in the correct format
    var emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var passRegex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
    var isRegex = false;
    // Check if the email is empty
    if (email.current.value === "") {
      setMessage("Email cannot be empty.");
      props.setMessage('');
      isRegex = true;
      // Check if the email is in the correct format
    }else if (!email.current.value.match(emailRegex)) {
      setMessage("Please enter a valid email address");
      props.setMessage('');
      isRegex = true;
    }else setMessage("");
    // Check if the password is empty
    if (password.current.value === '') {
      setMessagePass1('');
      setMessagePass("Password cannot be empty.");
      props.setMessage('');
      isRegex = true;
      // Check if the password is in the correct format
    }else if (!password.current.value.match(passRegex)) {
      setMessagePass("Password must be at least 8 characters.");
      setMessagePass1("At least one uppercase,");
      setMessagePass2("lowercase and number.");
      props.setMessage('');
      isRegex = true;
    } else{
      setMessagePass("");
      setMessagePass1("");
      setMessagePass2("");
    }
    if (!isRegex) props.login(email.current.value, password.current.value);
  };
  const [show, setShow] = useState(false);
  const handleShow = () => { setShow(!show); };
  return (
       <VerticalContainer>
        <Title>Log in to StudNet</Title>
      <LoginContainer>
        <InputLbl>Email address</InputLbl>
        <TextInput type="email" ref={email} placeholder="Email"></TextInput>
        <TextMesasge>{message}</TextMesasge>
        <InputLbl>Password<EyeLab onClick={handleShow}> <img src={show ? eyeClosed : eyeOpen} alt={show ? 'Hide' : 'Show'} /></EyeLab></InputLbl>
        <TextInput type={show ? 'text' : 'password'} id="password" ref={password} placeholder="Password"/>
        <TextMesasge>{messagePass}<br/>{messagePass1}<br/>{messagePass2}</TextMesasge>
        <SubmitBtn onClick={() => submitHandler()}>Log in</SubmitBtn>
        <TextMesasge>{props.message }</TextMesasge>
        <InputLbl>&emsp;&emsp;Don't have an account?&nbsp;&nbsp;<NavLink to="/signUp">Sign up</NavLink> </InputLbl>
      </LoginContainer>
    </VerticalContainer>
  );
}
