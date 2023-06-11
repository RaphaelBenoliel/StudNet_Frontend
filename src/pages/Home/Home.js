/* eslint-disable */
/* eslint max-len: ["error", { "code": 400 }] */
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import * as React from 'react';
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
  EditDeleteButton,
} from './Home.style';
import { sendGetRequest, sendPostRequest, sendPutRequest, sendDeleteRequest} from '../../API/Home_calls';
import PopupMessage from './PopMessage';
// import Navbar from '../Navbar/Navbar';
// import { myUser } from '../Login/Login';

export default function Home() {
  const [auth, setAuth] = useState(null);
  const [postData, setPostData] = useState([]);
  const [newPostContent, setNewPostContent] = useState('');
  const [likeContent, setLikeContent] = useState('');
  const [commentContent, setCommentContent] = useState('');
  const [shareContent, setShareContent] = useState('');
  const [editingPostId, setEditingPostId] = useState(null);
  const [updatedPostContent, setUpdatedPostContent] = useState(''); 
  const history = useNavigate();
  // const [postCon, setPost] = useState(null);
  
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const authData = localStorage.getItem('user');
      // console.log('authData: ', authData);
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
            setPostData(result.data);
            localStorage.setItem('posts', JSON.stringify(result.data));
          }
        }
      } catch (error) {
        console.error(error);
      }
    };
    getPosts();
  }, [auth]);
  const [showPopup, setShowPopup] = useState(false);

  const handleShowPopup = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

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
      history('/');
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
  const handleLikePost = async (post_id) => {
    try {
      const result = await sendLikeRequest({ postId: post_id, userId: auth._id });
      setAuth(result.data); 
    }catch(error) {
      console.error(error);
    }
  }

  const handleUpdatePost = async (postId, updatedContent) => {
    try {
      const result = await sendPutRequest(postId, { content: updatedContent });
      if (result === null) return;
      
      const updatedPostData = JSON.parse(localStorage.getItem('posts'));
      setPostData(updatedPostData);
      localStorage.setItem('posts', JSON.stringify(result.data));
      setEditingPostId(null); // Reset the editing post id
      setUpdatedPostContent({}); // Reset the updated post content
      // window.location.reload();
      // ddd
      history('/');
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
          Hello {JSON.parse(auth).firstName} !&#128075;<br />
          Welcome to StudNet
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
                  {post.userID.firstName} {post.userID.lastName}&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{cleanDate(post.date)}&emsp;&emsp;&emsp;{post.userID._id === JSON.parse(auth)._id && (
                    <>
                          <PopupMessage onDelete={() => handleDeletePost(post._id)} onClose={handleClosePopup} onEdit={() => setEditingPostId(post._id)} />
                  
                    </>
                  )}
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
                    <><EditDeleteButton onClick={() => handleUpdatePost(post._id, updatedPostContent)}>
                      Post
                    </EditDeleteButton><EditDeleteButton onClick={() => handleClosePopup}>Cancel</EditDeleteButton></>
                  )}
                </>
              ) : (
                <>
                  <PostContent>{post.content}</PostContent>
                  <>
                    <div>
                      <EditDeleteButton onClick={() => handleLikePost(post._id)}>Like</EditDeleteButton>
                      <EditDeleteButton onClick={() => setCommentContent(post._id)}>Comment</EditDeleteButton>
                      <EditDeleteButton onClick={() => setShareContent(post._id)}>Share</EditDeleteButton>
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
    {/* <STitle>The ultimate platform for students to share and discover knowledge! Whether you&apos;re struggling with a tough assignment or looking for new study resources, StudNet is the perfect place to find everything you need. Join our community of passionate learners today and start your journey towards academic success. Sign up now and unlock a world of endless possibilities!</STitle> */}
  </TextContainer>
</HomeWrapper>
);
}
