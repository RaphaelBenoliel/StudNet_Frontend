/* eslint-disable */
/* eslint max-len: ["error", { "code": 400 }] */
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import React from 'react';
import {
  TextContainer,
  STitle,
  Title,
  HomeWrapper,
} from './Home.style';
import sendPostRequest from '../../API/Home_calls';
// import Navbar from '../Navbar/Navbar';
// import { myUser } from '../Login/Login';

export default function Home() {
  const [auth, setAuth] = useState(null);
  const [postCon, setPost] = useState(null);
  const history = useNavigate();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const authData = localStorage.getItem('user');
      const posts = localStorage.getItem('post');
      if (authData) {
        setPost(post);
        setAuth(authData);
        history('/home'); // Redirect to home after setting auth
      }
    }
  }, [history]);
  const post = async(content) => {
    try {
      const result = await sendPostRequest(content);
      if (result === null) return;
      localStorage.setItem('post', JSON.stringify(result));
    } catch(error) {
      console.error(error);
    }
  };
  post('Hello this is a post!!!!');
  return (
    <HomeWrapper>
      <TextContainer>
        {auth ? (
          <Title>
            {postCon}
            Hello
            {' '}
            {JSON.parse(auth).firstName}
            !<br />Welcome to StudNet
          </Title>
        ) : (
          <Title>
            Welcome to StudNet
          </Title>
        )}
        <STitle>The ultimate platform for students to share and discover knowledge! Whether you&apos;re struggling with a tough assignment or looking for new study resources, StudNet is the perfect place to find everything you need. Join our community of passionate learners today and start your journey towards academic success. Sign up now and unlock a world of endless possibilities!</STitle>
      </TextContainer>
    </HomeWrapper>
  );
}
