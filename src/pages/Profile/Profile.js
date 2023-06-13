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
import { getUserByID, requestFollow, requestFollowersList, requestFollowingList, requestUnfollow }  from '../../API/Auth_calls';
import { isVisible } from '@testing-library/user-event/dist/utils';
import PopupMessage from '../Home/PopMessage';

export default function Profile() {
  const [auth, setAuth] = useState(null);
  const [authID, setAuthID] = useState(null);
  const [isFollowing, setFollowingState] = useState(null);
  const [isFollowBtnVisible, setFollowBtnVisibility] = useState(null);
  const [followBtnContent, setFollowBtnContent] = useState(null);
  const [followersCount, setFollowersCount] = useState(null);
  const [followingCount, setFollowingCount] = useState(null);
  const [postData, setPostData] = useState([]);
  const [isNewPostVisible, setNewPostVisibility] = useState(null);
  const [newPostContent, setNewPostContent] = useState('');
  const [editingPostId, setEditingPostId] = useState(null);
  const [updatedPostContent, setUpdatedPostContent] = useState(''); 
  const [showPopup, setShowPopup] = useState(false);

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
        const getUserById = async () => {
          try {
            const result = await getUserByID({users: userId});
            //console.log('111111', result.users.data[0]);
            //const tmp = result.users[0];
            const tmp = result.users.data[0];
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
        getUserById(userId);
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
        setFollowingCount(0);
        setFollowersCount(0);

        const loggedUserID = JSON.parse(localStorage.getItem('user'))._id;
        if(authID === null) return;
        else if (authID === loggedUserID) {
          setFollowBtnVisibility(false);
          setNewPostVisibility(true);
        }
        else {
          setFollowBtnVisibility(true);
          setNewPostVisibility(false);

          const user_ID = loggedUserID;
          console.log('!!!!!!!!!!1', user_ID);

          const result = await requestFollowingList({ user_ID });
          if (!result) return;

          //לבדוק אם אני עוקבת אחרי המשתמש
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

  useEffect(() => {
    const getFollowingFollowersCounts = async () => {
      try {
          const user_ID = authID;
          console.log('!!!!!!!!!!2', authID);
          console.log('!!!!!!!!!!3', user_ID);

          const result2 = await requestFollowingList({ user_ID });
          if (!result2) return;
          const result3 = await requestFollowersList({ user_ID });
          if (!result3) return;
          setFollowingCount(result2.length);
          setFollowersCount(result3.length);
        }
      catch (error) {
        console.error(error);
      }
    };
    getFollowingFollowersCounts();
  }, [authID]);

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

      console.log('RESULT:\t', JSON.stringify(result.savedPost));
      localStorage.setItem('user', JSON.stringify(result.user));
      localStorage.setItem('posts', JSON.stringify(result.posts));
      setAuth(JSON.stringify(result.user));
      setPostData(result.posts);
      setNewPostContent('');
      location.reload();
    } catch (error) {
      console.error(error);
    }
  };

  const [showInputText, setShowInputText] = useState(true);

  const handleCancelClick = () => {
    setShowInputText(false);
  };

  const handleDeletePost = async (postId) => {
    try {
      await sendDeleteRequest(postId, JSON.parse(auth)._id );
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
      const user1_ID = JSON.parse(localStorage.getItem('user'))._id;
      const user2_ID = authID;

      if(isFollowing){
        //...
        const result = await requestUnfollow({ user1_ID , user2_ID });
        console.log('!!!!!!!!!!!1', result);
        setFollowBtnContent('follow');
        setFollowingState(false);
        setFollowersCount(followersCount - 1);
      }
      else{
        //...
        const result = await requestFollow({ user1_ID , user2_ID });
        console.log('!!!!!!!!!!!2', result);
        setFollowBtnContent('unfollow');
        setFollowingState(true);
        setFollowersCount(followersCount + 1);
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
            {!isFollowBtnVisible && <PostButton onClick={() => retunArea()}>personal area</PostButton>}

            {/* {!isFollowBtnVisible &&<button onClick={retunArea} style={{backgroundColor: 'green', color: 'white',   borderRadius: '25px', border: 'none', cursor: 'pointer', fontSize: '17px', padding: '10px'}}>personal area</button>} */}
            <br/>
            <Label2>{followersCount} Followers</Label2>
            <Label2>{followingCount} Following</Label2>
            <br/>
            <Label>About:</Label>
            <Label2>Name: {JSON.parse(auth).firstName} {JSON.parse(auth).lastName}</Label2>
            <Label2>Email: {JSON.parse(auth).email}</Label2>
            <Label2>Country: {JSON.parse(auth).country}</Label2>
            <Label2>Study subject: {JSON.parse(auth).studySubject}</Label2>
            <Label2>School year: {JSON.parse(auth).schoolYear}</Label2>
            <Label2>Phone number: {JSON.parse(auth).phoneNumber}</Label2>
            <Label2>About my self: {JSON.parse(auth).aboutMySelf}</Label2>



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
                <div>
                  {post.userID.firstName} {post.userID.lastName}&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{cleanDate(post.date)}&emsp;&emsp;&emsp;{post.userID._id === JSON.parse(auth)._id && (
                    <PopupMessage onClose={handleClosePopup} onDelete={() => handleDeletePost(post._id)} onEdit={() => setEditingPostId(post._id)} />
                  )}
                </div>
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
                    <><Button onClick={() => handleUpdatePost(post._id, updatedPostContent)}>
                      Post
                    </Button><Button onClick={() => handleCancelClick}>Cancel</Button></>
                  )}
                </>
              ) : (
                <>
                  <PostContent>{post.content}</PostContent>
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
