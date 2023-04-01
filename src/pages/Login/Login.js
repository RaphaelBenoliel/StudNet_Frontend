import React from 'react';
import { sendLoginRequest } from '../../API/Auth_calls';

import LoginView from './LoginView';
 function Login() {
  const login = async (email, password) => {
    console.log(`EMAIL:\t${email}\nPASSWORD:\t${password}`);
    await sendLoginRequest({
      email,
      password,
    });
  };
  return (
    <LoginView
      login={login}
    />
  );
}

export default Login;
