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

export default function ForgotPass() {
  const [auth, setAuth] = useState(null); 
  const navigate = useNavigate();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const authData = localStorage.getItem('user');
      console.log('authData: ', authData);
      if (JSON.parse(authData)) {
        setAuth(authData);
      }
    }
  }, []);

  const TextBoxWithButton = async () => {
    try {
        const [text, setText] = useState('');
    } catch (error) {
      console.error(error);
    }
  };

  const handleInputChange = async (e) => {
    try {
        setText(e.target.value);
    } catch (error) {
      console.error(error);
    }
  };

  const handleButtonClick = async () => {
    try {
        console.log(text);    }
   catch (error) {
      console.error(error);
    }
  };

  return (
<PageWrapper>
  <TextContainer>
    {auth ? (
      <>
        <Title>
          Forgot Password
        </Title>
        <ForgotPassHolder>
          <CreateForgotPassContainer>
            <ForgotPassInput
              type="text"
              //value={newPostContent}
              onChange={(e) => handleInputChange(e.target.value)}
              placeholder="Enter your email"
            />
            <ForgotPassButton onClick={handleButtonClick}>Send email</ForgotPassButton>
          </CreateForgotPassContainer>
          </ForgotPassHolder>
      </>
    ) : (
      <Title>
      </Title>
    )}
    {}
  </TextContainer>
</PageWrapper>
);
}
