/* eslint-disable no-console */
import React from 'react';
import { sendSignUpRequest } from '../../API/Auth_calls';

import SignUpView from './SignupView';

function Signup() {
  const signup = async (email, password, userName, firstName, lastName) => {
    console.log(`EMAIL:\t${email}\nPASSWORD:\t${password}\nUSERNAME:\t${userName}`);
    try {
      await sendSignUpRequest({
        email,
        password,
        userName,
        firstName,
        lastName,
      });
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <SignUpView
      signup={signup}
    />
  );
}

export default Signup;
