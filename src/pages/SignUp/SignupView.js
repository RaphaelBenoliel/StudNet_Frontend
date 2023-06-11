/* eslint-disable */
import React, { useRef, useState } from 'react';
import {
  InputLbl,
  LoginContainer,
  SubmitBtn,
  TextInput,
  TextInputContainer,
  Title,
  VerticalContainer,
  EyeLab,
  NavLink,
  TextMesasge,
} from '../Login/Login.style';
import eyeClosed from '../../icons/eye-off.png';
import eyeOpen from '../../icons/eye-on.png';

export default function SignUpView(props) {
  const email = useRef(null);
  const password = useRef(null);
  const userName = useRef(null);
  const firstName = useRef(null);
  const lastName = useRef(null);
  const [message, setMessage] = useState('');
  const [messagePass, setMessagePass] = useState('');
  const [messagePass1, setMessagePass1] = useState('');
  const [messagePass2, setMessagePass2] = useState('');
  const [messageUser, setMessageUser] = useState('');
  const [messageFirst, setMessageFirst] = useState('');
  const [messageLast, setMessageLast] = useState('');

  const submitHandler = () => {
  // Regular expression to check if the email is in the correct format
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const passRegex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
    const nameRegex = /^[a-zA-Z]+$/;
    const userNameRegex = /^[a-zA-Z0-9]+$/;
    let isRegex = false;

    // Check if the email is empty
    if (email.current.value === '') {
      setMessage('Email cannot be empty.');
      props.setMessage('');
      isRegex = true;
    } else if (!email.current.value.match(emailRegex)) {
      // Check if the email is in the correct format
      setMessage('Please enter a valid email address');
      props.setMessage('');
      isRegex = true;
    } else setMessage('');
    // Check if the password is empty
    if (password.current.value === '') {
      setMessagePass1('');
      setMessagePass('Password cannot be empty.');
      props.setMessage('');
      isRegex = true;
    } else if (!password.current.value.match(passRegex)) {
      // Check if the password is in the correct formats
      setMessagePass('Password must be at least 8 characters.');
      setMessagePass1('At least one uppercase,');
      setMessagePass2('lowercase and number.');
      props.setMessage('');
      isRegex = true;
    } else {
      setMessagePass('');
      setMessagePass1('');
      setMessagePass2('');
    }
    // Check if the userName is empty
    if (userName.current.value === '') {
      setMessageUser('Username cannot be empty.');
      props.setMessage('');
      isRegex = true;
    } else if (!userName.current.value.match(userNameRegex)) {
      // Check if the usernName is in the correct format
      setMessageUser('Username must be alphanumeric.');
      props.setMessage('');
      isRegex = true;
    }else setMessageUser('');
    // Check if the first name is empty
    if (firstName.current.value === '') {
      setMessageFirst('First name cannot be empty.');
      props.setMessage('');
      isRegex = true;
    } else if (!firstName.current.value.match(nameRegex)) {
    // Check if the first name is in the correct format
      setMessageFirst('First name must be alphabetic.');
      props.setMessage('');
      isRegex = true;
    } else setMessageFirst('');
    // Check if the last name is empty
    if (lastName.current.value === '') {
      setMessageLast('Last name cannot be empty.');
      props.setMessage('');
      isRegex = true;
    } else if (!lastName.current.value.match(nameRegex)) {
    // Check if the last name is in the correct format
      setMessageLast('Last name must be alphabetic.');
      props.setMessage('');
      isRegex = true;
    } else setMessageLast('');
    if (!isRegex) {
      props.signup(email.current.value, password.current.value, userName.current.value, firstName.current.value, lastName.current.value);
    }
  };
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(!show);
  };
  return (
    <VerticalContainer>
      <Title>Sign Up to StudNet</Title>
      <LoginContainer>
        <InputLbl>Email address</InputLbl>
        <TextInputContainer>
        <TextInput type="email" ref={email} placeholder="Email" />
        </TextInputContainer>
        <TextMesasge>
          {message}
          {props.message}
        </TextMesasge>
        <InputLbl>Username</InputLbl>
        <TextInputContainer>
        <TextInput type="text" ref={userName} placeholder="Username" />
        </TextInputContainer>
        <TextMesasge>
          {messageUser}
        </TextMesasge>
        <InputLbl>First name</InputLbl>
        <TextInputContainer>
        <TextInput type="text" ref={firstName} placeholder="First name" />
        </TextInputContainer>
        <TextMesasge>
          {messageFirst}
        </TextMesasge>
        <InputLbl>Last name</InputLbl>
        <TextInputContainer>
        <TextInput type="text" ref={lastName} placeholder="Last name" />
        </TextInputContainer>
        <TextMesasge>
          {messageLast}
        </TextMesasge>
        <InputLbl>Password</InputLbl>
        <TextInputContainer>
          <TextInput type={show ? 'text' : 'password'} ref={password} placeholder="Password" />
          <EyeLab onClick={handleShow}>
            <img src={show ? eyeClosed : eyeOpen} alt={show ? 'Hide' : 'Show'} />
          </EyeLab>
        </TextInputContainer>
        <TextMesasge>{messagePass}<br/>{messagePass1}<br/>{messagePass2}</TextMesasge>
        <SubmitBtn onClick={() => submitHandler()}>Sign up</SubmitBtn>
        <InputLbl>&emsp;&emsp;Already have an account?&nbsp;&nbsp;<NavLink to="/login">Sign in</NavLink></InputLbl>
      </LoginContainer>
    </VerticalContainer>
  );
  }
