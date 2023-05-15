/* eslint-disable no-console */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { sendLoginRequest } from '../../API/Auth_calls';

import LoginView from './LoginView';

function Login() {
  const history = useNavigate();
  const [message, setMessage] = useState('');
  const login = async (email, password) => {
    console.log(`EMAIL:\t${email}\nPASSWORD:\t${password}`);
    try {
      // setMessage('');
      const result = await sendLoginRequest({ email, password }, setMessage);
      if (result === null) return;
      history('/', { state: { firstName: result } });
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
