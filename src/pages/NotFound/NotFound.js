/* eslint-disable */
import React from 'react';
import { Container, Title, Img, Body, STitle, NavbarLinkExtended } from './NotFound.styled';

function NotFound() {
  return (
     <Body>
        <Container>
        <Title>404</Title>
        <STitle>Oops! Something is wrong. This page could not be found!</STitle>
        <NavbarLinkExtended to="/"> Back to Home Page</NavbarLinkExtended>
        <Container>
          <Img src="https://i.imgur.com/qIufhof.png" alt="404" />
        </Container>
        </Container>
    </Body>
  );
}

export default NotFound;
