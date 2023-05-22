/* eslint-disable */
/* eslint max-len: ["error", { "code": 400 }] */
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import React from 'react';
import {
  TextContainer,
  ForgotPassButton,
  Title,
  ForgotPassHolder,
  CreateForgotPassContainer,
  ForgotPassInput,
  PageWrapper
} from './ForgotPass.style';
import { sendEmailRequest } from '../../API/Auth_calls';
import { TextMesasge } from '../Login/Login.style';

export default function ForgotPass() {
  const [auth, setAuth] = useState(null); 
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [msg, setMessage] = useState('');

  // useEffect(() => {
  //   if (typeof window !== 'undefined') {
  //     const authData = localStorage.getItem('user');
  //     if (JSON.parse(authData)) {
  //       setAuth(authData);
  //     }
  //   }
  // }, []);

  // const TextBoxWithButton = async () => {
  //   try {
  //       const [text, setText] = useState('');
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  const handleInputChange = async (e) => {
    try {
      setEmail(e.target.value);
    } catch (error) {
      console.error(error);
    }
  };

  const handleButtonClick = async () => {
    try {
        setMessage('');
        const result = await sendEmailRequest({email});
        if (result == null){
          setMessage('Invalid email!');
          return;
        }
        setMessage('A password recovery email has been successfully sent!');
        }
   catch (error) {
      console.error(error);
    }
  };

  return (
<PageWrapper>
  <TextContainer>
      <>
        <Title>
          Forgot Password
        </Title>
        <ForgotPassHolder>
          <CreateForgotPassContainer>
            <ForgotPassInput
              type="text"
              //value={newPostContent}
              onChange={(e) => handleInputChange(e)}
              placeholder="Enter your email"
            />
            <ForgotPassButton onClick={handleButtonClick}>Send email</ForgotPassButton>
          </CreateForgotPassContainer>
          <TextMesasge>{msg}</TextMesasge>
          </ForgotPassHolder>
      </>
    (
      <Title>
      </Title>
    )
    {}
  </TextContainer>
</PageWrapper>
);
}
