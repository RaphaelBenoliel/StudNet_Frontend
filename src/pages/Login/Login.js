/* eslint-disable no-console */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { sendLoginRequest } from '../../API/Auth_calls';

import LoginView from './LoginView';

function Login() {
  const history = useNavigate();
  const login = async (email, password) => {
    console.log(`EMAIL:\t${email}\nPASSWORD:\t${password}`);
    try {
      const result = await sendLoginRequest({
        email,
        password,
      });
      if (result === null) {
        return;
      }
      history('/', { state: { firstName: result } });
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <LoginView
      login={login}
    />
  );
}

export default Login;
