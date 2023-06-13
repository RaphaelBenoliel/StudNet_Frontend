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
  UserPictureBig,
  Button,
  Label,
  Label2,
  TD
} from './Profile.style';
import { useNavigate } from 'react-router-dom';
import { sendGetRequest, sendPostRequest, sendPutRequest, sendDeleteRequest} from '../../API/Home_calls';
import { getUsersByiD, requestFollow, requestFollowingList, requestUnfollow }  from '../../API/Auth_calls';
import { isVisible } from '@testing-library/user-event/dist/utils';

export default function Profile() {
  const [auth, setAuth] = useState(null);
  const [authID, setAuthID] = useState(null);
  const [isFollowing, setFollowingState] = useState(null);
  const [isFollowBtnVisible, setFollowBtnVisibility] = useState(null);
  const [followBtnContent, setFollowBtnContent] = useState(null);
  const [postData, setPostData] = useState([]);
  const [isNewPostVisible, setNewPostVisibility] = useState(null);
  const [newPostContent, setNewPostContent] = useState('');
  const [editingPostId, setEditingPostId] = useState(null);
  const [updatedPostContent, setUpdatedPostContent] = useState(''); 
  const navigate = useNavigate();

  var urlParams = new URLSearchParams(window.location.search);
  const userId = urlParams.get('id');
  // console.log(userId);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if(userId === null)
      {
        const authData = localStorage.getItem('user');
        //console.log('&&&&&&&&&&&&', authData);
        if (JSON.parse(authData)) {
          setAuth(authData);
        }
        setAuthID(JSON.parse(authData)._id);
      }
      else
      {
        const getUserByID = async () => {
          try {
            const result = await getUsersByiD({users: userId});
            //console.log('1111111111', result.users[0]);
            const tmp = result.users[0];
            try {
              var jsonData = JSON.stringify(eval(tmp));
              if (JSON.parse(jsonData)) {
                setAuth(jsonData);
              } 
              setAuthID(userId);             
              //console.log('!@#$%^&*&^%$#@!@#$%^&*&^%$#@!', jsonData);
            } catch (error) {
              console.error(error);
            }
          } catch (error) {
            console.error(error);
          }
        };
        getUserByID(userId);
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
            //setPostData(result.data.filter((post) => post.userID._id === JSON.parse(auth)._id));
            setPostData(result.data.filter((post) => post.userID._id === authID));
            localStorage.setItem('posts', JSON.stringify(result.data));
          }
        }
      } catch (error) {
        console.error(error);
      }
    };
    getPosts();
  }, [auth]);

  useEffect(() => {
    const getFollowingState = async () => {
      try {
        const loggedUserID = JSON.parse(localStorage.getItem('user'))._id;
        if(authID === null) return;
        else if (authID === loggedUserID) {
          setFollowBtnVisibility(false);
          setNewPostVisibility(true);
        }
        else {
          setFollowBtnVisibility(true);
          setNewPostVisibility(false);
          //לבדוק אם אני עוקבת אחרי המשתמש
          const user_ID = loggedUserID;
          const result = await requestFollowingList({ user_ID });
          console.log('^^^^^^^^^^', result.find((value) => value === authID));
          if (!result) return;

          if (result.find((value) => value === authID)){
            setFollowingState(true);
            setFollowBtnContent('unfollow');
          }
          else{
            setFollowingState(false);
            setFollowBtnContent('follow');
          }
        }
      } catch (error) {
        console.error(error);
      }
    };
    getFollowingState();
  }, [authID]);

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
      console.log('auth: ', JSON.parse(auth)._id);
      await sendDeleteRequest(postId, JSON.parse(auth)._id ); //good
      const updatedPostData = postData.filter((post) => post._id !== postId);
      setPostData(updatedPostData);
    } catch (error) {
      console.error(error);
    }
  };

  const handleUpdatePost = async (postId, updatedContent) => {
    try {
      const result = await sendPutRequest(postId,  updatedContent );
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

  const handleFollowBtn = async () => {
    try {
      // if (JSON.parse(localStorage.getItem('user').following).lenght > 0 && JSON.parse(localStorage.getItem('user').following).includes(authID)){
      //   console.log('@@@@@@Following');
      //   const result = await requestUnfollow({ loggedUserID , authID });
      //   console.log('!!!!!!!!!!!1', result);
      //   //למחוק מרשימת הנעקבים ומרשימת העוקבים של המשתמש השני
      // }
      // else {
      //   const result = await requestFollow({ loggedUserID , authID });
      //   console.log('!!!!!!!!!!!2', result);
      //   //להוסיף לרשימת הנעקבים שלי ולרשימת העוקבים של המשתמש השני
      // }
      const user1_ID = JSON.parse(localStorage.getItem('user'))._id;
      const user2_ID = authID;

      if(isFollowing){
        //...
        const result = await requestUnfollow({ user1_ID , user2_ID });
        console.log('!!!!!!!!!!!1', result);
        setFollowBtnContent('follow');
        setFollowingState(false);
      }
      else{
        //...
        const result = await requestFollow({ user1_ID , user2_ID });
        console.log('!!!!!!!!!!!2', result);
        setFollowBtnContent('unfollow');
        setFollowingState(true);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const retunArea = () => {
navigate('/my-area')
  }
  return (
<Wrapper>
  <TextContainer>
    {auth ? (
      <>
      <table>
        <td>
          <Title>
            <UserPictureBig src={JSON.parse(auth).picture} alt="User Profile" /> {JSON.parse(auth).userName}
            <br/>
            {isFollowBtnVisible && <PostButton onClick={() => handleFollowBtn()}>{followBtnContent}</PostButton>}
            {!isFollowBtnVisible &&<button onClick={retunArea} style={{backgroundColor: 'green', color: 'white',   borderRadius: '25px', border: 'none', cursor: 'pointer', fontSize: '17px', padding: '10px'}}>personal area</button>}
            <br/>
            <Label>About:</Label>
            <Label2>{JSON.parse(auth).firstName} {JSON.parse(auth).lastName}</Label2>
            <Label2>{JSON.parse(auth).email}</Label2>
          </Title>
        </td>
        <TD></TD>
        <td>
        <Post style={{ visibility: isNewPostVisible ? 'visible' : 'hidden' }}>
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
        </td>
      </table>
        
        {/* <Title >My Posts</Title> */}
        <br/>
        <br/>
        <br/>
        
        
      </>
    ) : (
      <Title>
        Please log in to see profile.
      </Title>
    )}
  </TextContainer>
</Wrapper>
);
}
