/* eslint-disable */
/* eslint max-len: ["error", { "code": 400 }] */
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import React from 'react';
import {
  TextContainer,
  SearchButton,
  Title,
  SearchHolder,
  CreateSearchContainer,
  SearchInput,
  PageWrapper
} from './Search.style';

export default function Search() {
  const [auth, setAuth] = useState(null); 
  const navigate = useNavigate();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const authData = localStorage.getItem('user');
      if (JSON.parse(authData)) {
        setAuth(authData);
      }
    }
  }, []);
  const [text, setText] = useState('');
  // const TextBoxWithButton = async () => {
  //   try {
        
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  const handleInputChange = async (e) => {
    try {
        setText(e.target.value);
    } catch (error) {
      console.error(error);
    }
  };

  const handleButtonClick = async () => {
    try {
        // Do something with the text, e.g., display it or perform an action
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
          Search
        </Title>
        <SearchHolder>
          <CreateSearchContainer>
            <SearchInput
              type="text"
              //value={newPostContent}
              onChange={(e) => handleInputChange(e.target.value)}
              placeholder="Search..."
            />
            <SearchButton onClick={handleButtonClick}>Search</SearchButton>
          </CreateSearchContainer>
          </SearchHolder>
      </>
    ) : (
      <Title>
      </Title>
    )}
    {/* <STitle>The ultimate platform for students to share and discover knowledge! Whether you&apos;re struggling with a tough assignment or looking for new study resources, StudNet is the perfect place to find everything you need. Join our community of passionate learners today and start your journey towards academic success. Sign up now and unlock a world of endless possibilities!</STitle> */}
  </TextContainer>
</PageWrapper>
);
}
