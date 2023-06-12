/* eslint-disable no-console */
/* eslint-disable  max-len */
/* eslint-disable no-undef */
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { sendSignUpRequest } from '../../API/Auth_calls';
import SignUpView from './SignupView';

function Signup() {
  const [message, setMessage] = useState('');
  const history = useNavigate();
  useEffect(() => {
    const auth = localStorage.getItem('user');
    if (auth) {
      history('/home');
    }
  }, []);
  const signup = async (email, password, userName, firstName, lastName) => {
    // console.log(`EMAIL:\t${email}\nPASSWORD:\t${password}\nUSERNAME:\t${userName}`);
    try {
      const result = await sendSignUpRequest({
        email, password, userName, firstName, lastName,
      }, setMessage);
      if (result === null) return;
      history('/login');
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <SignUpView
      signup={signup}
      setMessage={setMessage}
      message={message}
    />
  );
}

export default Signup;
