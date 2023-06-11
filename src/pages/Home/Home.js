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
  PopDiv
} from './Home.style';
import { sendGetRequest, sendPostRequest, sendPutRequest, sendDeleteRequest} from '../../API/Home_calls';
import { styled, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import EditIcon from '@mui/icons-material/Edit';
import Divider from '@mui/material/Divider';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
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


  const StyledMenu = styled((props) => (
    <Menu
      elevation={0}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      {...props}
    />
  ))(({ theme }) => ({
    '& .MuiPaper-root': {
      borderRadius: 6,
      marginTop: theme.spacing(1),
      minWidth: 180,
      color:
        theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
      boxShadow:
        'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
      '& .MuiMenu-list': {
        padding: '4px 0',
      },
      '& .MuiMenuItem-root': {
        '& .MuiSvgIcon-root': {
          fontSize: 18,
          color: theme.palette.text.secondary,
          marginRight: theme.spacing(1.5),
        },
        '&:active': {
          backgroundColor: alpha(
            theme.palette.primary.main,
            theme.palette.action.selectedOpacity,
          ),
        },
      },
    },
  }));
  
  function PopupMessage({ onClose, onDelete, onEdit }) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    const handleDelete = () => {
          if (typeof onDelete === 'function') {
            onDelete(); // Call the delete function
          }
          onClose(); // Close the popup
        };
        const handleEdit = () => {
          if (typeof onEdit === 'function') {
            onEdit(); // Call the delete function
          }
          onClose(); // Close the popup
        };
    return (
      <div>
        <Button
          id="demo-customized-button"
          aria-controls={open ? 'demo-customized-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          variant="contained"
          disableElevation
          onClick={handleClick}
          endIcon={<KeyboardArrowDownIcon />}
        >
        </Button>
        <StyledMenu
          id="demo-customized-menu"
          MenuListProps={{
            'aria-labelledby': 'demo-customized-button',
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
        >
          <EditDeleteButton onClick={handleEdit} disableRipple>
            <EditIcon />
            Edit
          </EditDeleteButton>
          <EditDeleteButton onClick={handleDelete} disableRipple>
            <FileCopyIcon />
            Delete
          </EditDeleteButton>
          <Divider sx={{ my: 0.5 }} />
        </StyledMenu>
      </div>
    );
  }
 
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
                  {post.userID.firstName} {post.userID.lastName}&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{cleanDate(post.date)}&emsp;{post.userID._id === JSON.parse(auth)._id && (
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
                    <EditDeleteButton onClick={() => handleUpdatePost(post._id, updatedPostContent)}>
                      Post
                    </EditDeleteButton>
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
