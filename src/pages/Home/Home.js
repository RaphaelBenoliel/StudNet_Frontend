/* eslint-disable */
/* eslint max-len: ["error", { "code": 400 }] */
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import React from 'react';
import {
  TextContainer,
  CreatePostContainer,
  PostInput,
  PostButton,
  Title,
  HomeWrapper,
  PostContainer,
  PostContent,
  Post,
  UserDetails,
  UserPicture,
} from './Home.style';
import { sendGetRequest, sendPostRequest } from '../../API/Home_calls';
// import Navbar from '../Navbar/Navbar';
// import { myUser } from '../Login/Login';

export default function Home() {
  const [auth, setAuth] = useState(null);
  const [postData, setPostData] = useState([]);
  const [newPostContent, setNewPostContent] = useState('');
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
  const handlePostSubmission = async () => {
    if (!auth) {
      console.log('Not logged in');
      return;
    }
    try {
      console.log(`CONTENT:\t${newPostContent}`);
      const result = await sendPostRequest({ auth, content: newPostContent });
      if (result === null) return;
      localStorage.setItem('posts', JSON.stringify(result.data));
      console.log(result.data);
      // Reset the new post content
      setNewPostContent('');
    } catch (error) {
      console.error(error);
    }
  };
  return (
<HomeWrapper>
      <TextContainer>
        {auth ? (
          <>
            <Title>
              Hello {JSON.parse(auth).firstName}!<br />
              Welcome to StudNet
            </Title>
            <Post>
              <CreatePostContainer>
                <PostInput
                  type="text"
                  value={newPostContent}
                  onChange={(e) => setNewPostContent(e.target.value)}
                  placeholder="Write your post..."/><PostButton onClick={handlePostSubmission}>Post</PostButton>
              </CreatePostContainer>
            </Post>
            <PostContainer>
              {postData.sort((a, b) => new Date(b.date) - new Date(a.date)).map((post) => (
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
