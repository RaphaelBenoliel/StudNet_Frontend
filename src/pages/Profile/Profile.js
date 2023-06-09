/* eslint-disable */
/* eslint max-len: ["error", { "code": 400 }] */
import { useEffect, useState } from 'react';
import React from 'react';
import {
  TextContainer,
  CreatePostContainer,
  PostInput,
  PostButton,
  Title,
  Wrapper,
  PostContainer,
  PostContent,
  Post,
  UserDetails,
  UserPicture,
  Button,
} from './Profile.style';
import { sendGetRequest, sendPostRequest, sendPutRequest, sendDeleteRequest} from '../../API/Home_calls';

export default function Profile() {
  const [auth, setAuth] = useState(null);
  const [postData, setPostData] = useState([]);
  const [newPostContent, setNewPostContent] = useState('');
  const [editingPostId, setEditingPostId] = useState(null);
  const [updatedPostContent, setUpdatedPostContent] = useState(''); 
  
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const authData = localStorage.getItem('user');
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
            // const updatedPosts = result.data.posts ? result.data.posts : [];
            setPostData(result.data.filter((post) => post.userID._id === JSON.parse(auth)._id));
            localStorage.setItem('posts', JSON.stringify(result.data));
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
  
      const updatedPosts = result.data && result.data.posts ? result.data.posts : [];
      // Parse the auth object from the string stored in local storage
      const parsedAuth = JSON.parse(auth);
      // Initialize auth.posts as an array if it's not already
      if (!Array.isArray(parsedAuth.posts)) {
        parsedAuth.posts = [];
      }
      // Update the auth.posts array with the new posts
      parsedAuth.posts.push(...updatedPosts);
      // Stringify the updated auth object before storing it back in local storage
      const updatedAuth = JSON.stringify(parsedAuth);
      localStorage.setItem('user', updatedAuth);
  
      setPostData([...postData, ...updatedPosts]);
      localStorage.setItem('posts', JSON.stringify([...postData, ...updatedPosts]));
      // Reset the new post contents
      setNewPostContent('');
      location.reload();
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeletePost = async (postId) => {
    try {
      console.log('postId: ', postId);
      console.log('auth: ', auth);
      await sendDeleteRequest(postId, auth); //good
      const updatedPostData = postData.filter((post) => post._id !== postId);
      setPostData(updatedPostData);
    } catch (error) {
      console.error(error);
    }
  };

  const handleUpdatePost = async (postId, updatedContent) => {
    try {
      const result = await sendPutRequest(postId, { content: updatedContent });
      if (result === null) return;
      
      const updatedPostData = JSON.parse(localStorage.getItem('posts'));
      setPostData(updatedPostData);
      localStorage.setItem('posts', JSON.stringify(result.data));
      setEditingPostId(null); // Reset the editing post id
      setUpdatedPostContent({}); // Reset the updated post content
      location.reload();
    } catch (error) {
      console.error(error);
    }
  };
  return (
<Wrapper>
  <TextContainer>
    {auth ? (
      <>
        <Title>
          My Posts
        </Title>
        <Post>
          <CreatePostContainer>
            <PostInput
              type="text"
              value={newPostContent}
              onChange={(e) => setNewPostContent(e.target.value)}
              placeholder="Write your post..."
            />
            <PostButton onClick={handlePostSubmission}>Post</PostButton>
          </CreatePostContainer>
        </Post>
        <PostContainer>
        {Array.isArray(postData) && 
          postData.sort((a, b) => new Date(b.date) - new Date(a.date)).map((post) => (
            <Post key={post._id}>
              <UserDetails>
                <UserPicture src={post.userID.picture} alt="User Profile" />
                <p>
                  {post.userID.firstName} {post.userID.lastName}&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{cleanDate(post.date)}&emsp;{post.userID._id === JSON.parse(auth)._id}
                </p>
              </UserDetails>
              {editingPostId === post._id ? (
                <>
                  <input
                    type="text"
                    value={editingPostId === post._id ? updatedPostContent : post.content}
                    onChange={(e) => {
                      if (editingPostId === post._id) {
                        setUpdatedPostContent(e.target.value);
                      } else {
                        setNewPostContent(e.target.value);
                      }
                    }}
                  />
                  {post.userID._id === JSON.parse(auth)._id && (
                    <Button onClick={() => handleUpdatePost(post._id, updatedPostContent)}>
                      Post
                    </Button>
                  )}
                </>
              ) : (
                <>
                  <PostContent>{post.content}</PostContent>
                  <>
                    <div>
                      <Button onClick={() => setEditingPostId(post._id)}>Edit</Button>
                      <Button onClick={() => handleDeletePost(post._id)}>Delete</Button>
                    </div>
                    </>
                </>
              )}
            </Post>
          ))}
        </PostContainer>
      </>
    ) : (
      <Title>
        Welcome to StudNet
      </Title>
    )}
  </TextContainer>
</Wrapper>
);
}
