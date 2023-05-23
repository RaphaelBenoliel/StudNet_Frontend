/* eslint max-len: ["error", { "code": 400 }] */
import React from 'react';
import {
  TextContainer,
  AboutT,
  Title,
  HomeWrapper,
} from './About.style';

export default function About() {
  return (
    <HomeWrapper>
      <TextContainer>
        <Title>About us </Title>
        <AboutT>Welcome to StudNet, the go-to platform for students seeking academic success. Our mission is to provide students with the resources and tools they need to excel in their studies and achieve their academic goals.</AboutT>
        <AboutT>At StudNet, we understand that education is essential for personal and professional growth. That&apos;s why we&apos;ve created a community where students can connect with each other, share their knowledge, and support each other along the way.</AboutT>
        <AboutT>Our team is made up of experienced educators, developers, and designers who are passionate about providing students with the best possible learning experience. We know what it takes to succeed academically, and we&apos;re committed to helping students achieve their full potential.</AboutT>
        <AboutT>StudNet offers a range of features and benefits that make it the ideal platform for academic success. Our platform includes a searchable database of study resources, interactive study tools, a discussion forum where students can connect with each other, and personalized support from our team of experts.</AboutT>
      </TextContainer>
    </HomeWrapper>
  );
}
