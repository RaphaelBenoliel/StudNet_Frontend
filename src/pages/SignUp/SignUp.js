/* eslint-disable no-console */
import React, { useState } from 'react';
import { sendSignUpRequest } from '../../API/Auth_calls';
import SignUpView from './SignupView';

function Signup() {
  const [message, setMessage] = useState('');
  const signup = async (email, password, userName, firstName, lastName) => {
    console.log(`EMAIL:\t${email}\nPASSWORD:\t${password}\nUSERNAME:\t${userName}`);
    try {
      await sendSignUpRequest({
        email,
        password,
        userName,
        firstName,
        lastName,
      }, setMessage);
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
