/* eslint-disable no-console */
import React from 'react';
import { sendLoginRequest } from '../../API/Auth_calls';

import LoginView from './LoginView';

function Login() {
  const login = async (email, password) => {
    console.log(`EMAIL:\t${email}\nPASSWORD:\t${password}`);
    try {
      await sendLoginRequest({
        email,
        password,
      });
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
