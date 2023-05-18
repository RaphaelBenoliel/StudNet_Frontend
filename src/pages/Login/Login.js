/* eslint-disable  */
/* eslint prefer-const: "error" */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { sendLoginRequest } from '../../API/Auth_calls';
import LoginView from './LoginView';
import { use } from 'chai';
import { useEffect } from 'react';

function Login() {
  const history = useNavigate();
  const [message, setMessage] = useState('');
  useEffect(() => {
    const auth = localStorage.getItem('user');
    if(auth){
      history('/home');
    }
  }, []);
  const login = async (email, password) => {
    console.log(`EMAIL:\t${email}\nPASSWORD:\t${password}`);
    try {
      const result = await sendLoginRequest({ email, password }, setMessage);
      if (result === null) return;
      localStorage.setItem('user', JSON.stringify(result));
      history('/home');
      // history('/home', { state: { user: result } });
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <LoginView
      login={login}
      setMessage={setMessage}
      message={message}
    />
  );
}

export default Login;
