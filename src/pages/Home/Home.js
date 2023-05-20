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
  PostContainer,
  PostContent,
  Post,
  UserDetails,
  UserPicture,
} from './Home.style';
import sendGetRequest from '../../API/Home_calls';
// import Navbar from '../Navbar/Navbar';
// import { myUser } from '../Login/Login';

export default function Home() {
  const [auth, setAuth] = useState(null);
  const [postData, setPostData] = useState([]);
  // const [postCon, setPost] = useState(null);
  const history = useNavigate();
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const authData = localStorage.getItem('user');
      console.log('authData: ', authData);
      if (JSON.parse(authData)) {
        setAuth(authData);
      }
    }
  }, []);
 
  useEffect(() => {
    const getPosts = async () => {
      try {
        if (auth) {
          const result = await sendGetRequest();
          if (result && result.data) {
            localStorage.setItem('posts', JSON.stringify(result.data));
            const updatedPostData = JSON.parse(localStorage.getItem('posts')); // Parse the JSON string
            setPostData(updatedPostData);
            console.log('result.data: ', JSON.stringify(postData)); // Use updatedPostData instead of postData
          }
        }
      } catch (error) {
        console.error(error);
      }
    };
    getPosts();
  }, [auth]);
  const cleanDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleString();
  };
  // const post = async(content) => {
  //   console.log(`CONTENT:\t${content}`);
  //   if (!auth) {
  //     console.log('Not logged in');
  //     return;
  //   }
  //   try {
  //     const result = await sendPostRequest({ auth, content });
  //     if (result === null) return;
  //     localStorage.setItem('posts', JSON.stringify(result.data));
  //     console.log(result.data);
  //   } catch(error) {
  //     console.error(error);
  //   }
  // };
  // post('Hello this is a post!!!!');
  return (
<HomeWrapper>
      <TextContainer>
        {auth ? (
          <>
            <Title>
              Hello {JSON.parse(auth).firstName}!<br />
              Welcome to StudNet
            </Title>
            <PostContainer>
              {postData.map((post) => (
                <Post key={post._id}>
                  <UserDetails>
                    <UserPicture src={post.userID.picture} alt="User Profile" />
                    <p>{post.userID.firstName} {post.userID.lastName}&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{cleanDate(post.date)}</p>
                  </UserDetails>
                  <PostContent>{post.content}</PostContent>
                </Post>
              ))}
            </PostContainer>
          </>
        ) : (
          <Title>
            Welcome to StudNet
          </Title>
        )}
        {/* <STitle>The ultimate platform for students to share and discover knowledge! Whether you&apos;re struggling with a tough assignment or looking for new study resources, StudNet is the perfect place to find everything you need. Join our community of passionate learners today and start your journey towards academic success. Sign up now and unlock a world of endless possibilities!</STitle> */}
      </TextContainer>
    </HomeWrapper>
  );
}
