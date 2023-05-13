/* eslint max-len: ["error", { "code": 400 }] */
import { useLocation } from 'react-router-dom';
import React from 'react';
import {
  TextContainer,
  STitle,
  Title,
  HomeWrapper,
} from './Home.style';

export default function Home() {
  const location = useLocation();
  return (
    <HomeWrapper>
      <TextContainer>
        {location.state && location.state.firstName ? (
          <Title>
            Hello
            {' '}
            {location.state.firstName}
            ! Welcome to StudNet
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
