/* eslint-disable */
import React, { useEffect, useState, useRef } from 'react';
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import './PersonalArea.css';
import { TextInputContainer, TextInput, EyeLab } from '../Login/Login.style';
import eyeClosed from '../../icons/eye-off.png';
import eyeOpen from '../../icons/eye-on.png';
import { Link, useNavigate } from 'react-router-dom';
import { getUsersByiD, requestUpdateProfile, requestDeleteProfile } from '../../API/Auth_calls';
import { FormControl, InputLabel, MenuItem, Select, TextField} from '@mui/material';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import PostAddIcon from '@mui/icons-material/PostAdd';
import GroupIcon from '@mui/icons-material/Group';
import ThumbsUpDownOutlinedIcon from '@mui/icons-material/ThumbsUpDownOutlined';
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function PersonalArea() {
  const navigate = useNavigate();
  const [followers, setFollowers] = useState([]);
  const [followersUsers, setFollowersUsers] = useState([]);
  const [following, setFollowing] = useState([]);
  const [followingUsers, setFollowingUsers] = useState([]);
  const [likedPosts, setLikedPosts] = useState([]);
  const [savedPosts, setSavedPosts] = useState([]);
  const [statistics, setStatistics] = useState({});
  const [user, setUser] = useState(null);
  const [messageUser, setMessageUser] = useState([]);
  const [messageFirst, setMessageFirst] = useState([]);
  const [messageLast, setMessageLast] = useState([]);
  const [messagePass, setMessagePass] = useState([]);
  const [messagePass1, setMessagePass1] = useState([]);
  const [messagePass2, setMessagePass2] = useState([]);
  const [noEqualMessage, setNoEqualMessage] = useState(false);
  const [currentPasswordMessage, setCurrentPasswordMessage] = useState('');
  const currentPassword = useRef(null);
  const newPassword = useRef(null);
  const newPasswordAgain = useRef(null);
  const userName = useRef(null);
  const firstName = useRef(null);
  const lastName = useRef(null);
  const [profilePicture, setProfilePicture] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState({
    userName: '',
    firstName: '',
    lastName: '',
    country: '',
    studySubject: '',
    schoolYear: '',
    aboutMySelf: '',
    phoneNumber: '',
    picture: '',
  });
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [showPassword, setShow] = useState(false);
  const handleShow = () => {
    setShow(!showPassword);
  };
   
  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (userData) {
      const parsedData = JSON.parse(userData);
      setUser(parsedData);
      setEditedUser(parsedData);
      setFollowers(parsedData.followers);
      setFollowing(parsedData.following);
    }
  }, []);
  //followers
  const getFollowers = async () => {
    const userf = JSON.parse(localStorage.getItem('user'));
    if (followers.length !== 0) {
      try {
        // console.log(followers);
        const result = await getUsersByiD({ users: followers });
        // getUsersByiD( {_id: userID} )
        // console.log(result);
        setFollowersUsers(result.users);
        // console.log(userf.followers);
        userf.followers = followers;
        localStorage.setItem('user', JSON.stringify(userf));
      } catch (error) {
        console.error(error);
      }
    }
    if (following.length !== 0) {
      try {
        console.log(following);
        //using the same function to get the following users
        const result1 = await getUsersByiD({ users: following });
        setFollowingUsers(result1.users);

        userf.following = following;
        localStorage.setItem('user', JSON.stringify(userf));
        console.log(result1);
      } catch (error) {
        console.error(error);
      }
    }
  };
  useEffect(() => {
      getFollowers();
  }, [followers, following]);

  const handleFollowButtonClick = (user) => {
    // Implement the desired functionality here
    // For example, you can show a message or perform an action
    console.log(`Follow button clicked for user: ${user.firstName} ${user.lastName}`);
  };
  const handleUnfollowButtonClick = (user) => {
    // Logic for unfollowing the user goes here
    console.log(`Unfollow ${user.firstName} ${user.lastName}`);
  };

    const changePassword = () => {
    var passRegex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
    var isRegex = false;
    setCurrentPasswordMessage('');
    setNoEqualMessage('');
    if (currentPassword.current.value === user.password) {
      setCurrentPasswordMessage('');
      if (newPassword.current.value === newPasswordAgain.current.value) {
        if (newPassword.current.value === '') {
          setMessagePass("Password cannot be empty.");
          isRegex = true;
          // Check if the password is in the correct format
        }else if (!newPassword.current.value.match(passRegex)) {
          setMessagePass("Password must be at least 8 characters.");
          setMessagePass1("At least one uppercase,");
          setMessagePass2("lowercase and number.");
          isRegex = true;
        } else{
          setMessagePass("");
          setMessagePass1("");
          setMessagePass2("");
        }
        if (!isRegex){
            sendChangePassword(user, newPassword.current.value);
        }
      } else {
        setNoEqualMessage('New password not match');
      }
    } else {
      setCurrentPasswordMessage('Current password not match');
    }
}

const changeAccount = () => {
  var nameRegex = /^[a-zA-Z]+$/;
    var userNameRegex = /^[a-zA-Z0-9]+$/;
   
    setMessageUser('');
    setMessageFirst('');
    setMessageLast('');
  if (userName.current.value === '') {
    setMessageUser('Username cannot be empty.');
    return false;
  } else if (!userName.current.value.match(userNameRegex)) {
    // Check if the usernName is in the correct format
    setMessageUser('Username must be alphanumeric.');
    return false;
  }else setMessageUser('');
  // Check if the first name is empty
  if (firstName.current.value === '') {
    setMessageFirst('First name cannot be empty.');
    return false;
  } else if (!firstName.current.value.match(nameRegex)) {
  // Check if the first name is in the correct format
    setMessageFirst('First name must be alphabetic.');
    return false;
  } else setMessageFirst('');
  // Check if the last name is empty
  if (lastName.current.value === '') {
    setMessageLast('Last name cannot be empty.');
    return false;
  } else if (!lastName.current.value.match(nameRegex)) {
  // Check if the last name is in the correct format
    setMessageLast('Last name must be alphabetic.');
    return false;
  } else setMessageLast('');
  return true;
}

const sendChangePassword = async (user, newPassword) => {
  try {
    localStorage.setItem('user', JSON.stringify({ ...user, password: newPassword }));
    const result = await requestUpdateProfile({ ...user, password: newPassword });
  } catch (error) {
    console.error(error);
  }
}
  
const handleChange = (e) => {
  const { name, value, files } = e.target;
  if (name === "image") {
    setProfilePicture(files[0]);
  } else {
    setEditedUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  }
};

const saveProfile = async () => {
  setIsEditing(false);
  setUser(editedUser);
  localStorage.setItem('user', JSON.stringify(editedUser));
  try {
    const formData = new FormData();
    formData.append('image', profilePicture);
    console.log('>>>>>1: ', profilePicture);
    if (profilePicture) {
      const uploadResult = await uploadProfilePicture(formData);
      // console.log('>>>>> ', uploadResult.url);
      editedUser.picture = uploadResult.url;
      localStorage.setItem('user', JSON.stringify(editedUser));
      // navigate('/my-area');
    }
    const result = await requestUpdateProfile(editedUser);
    console.log(result);
  } catch (error) {
    console.error(error);
  }
};
const BASE_URL = 'http://localhost:5002/';
const uploadProfilePicture = async (formData) => {
  try {
    const response = await fetch(`${BASE_URL}api/upload`, {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      throw new Error('Failed to upload profile picture');
    }
    const result = await response.json();
    return result; // Assuming the response contains the URL of the uploaded picture
  } catch (error) {
    console.error(error);
    throw new Error('Failed to upload profile picture');
  }
};

const getSchoolYearLabel = (value) => {
  switch (value) {
    case 0:
      return 'Preparing';
    case 1:
      return 'First year';
    case 2:
      return 'Second year';
    case 3:
      return 'Third year';
    case 4:
      return 'Fourth year';
    default:
      return '';
  }
};

const toggleEdit= () => {
  setIsEditing(!isEditing);
  if (isEditing) {
    if ( changeAccount() === true) saveProfile();
  }
};

const deleteAccount = async () => {
    setOpen(false);
    console.log(user._id);
    try {
      await requestDeleteProfile({_id: user._id});
      setUser(null);
      navigate('/');
    } catch (error) {
      console.error(error);
    }
    localStorage.removeItem('user');
    console.log('Deleting user account...');
};
        
    return (
        <div className="App">
            {user && (
            <><div className="title">
                <p >
                <img src={user.picture} alt="User Profile" />
                  {user.firstName} {user.lastName}
                </p>
                </div><Tabs>
                    <TabList>
                        <Tab>
                            <p>Account</p>
                        </Tab>
                        <Tab>
                            <p>Password</p>
                        </Tab>
                        <Tab>
                            <p>Personal</p>
                        </Tab>
                        <Tab>
                            <p>Followers</p>
                        </Tab>
                        <Tab>
                            <p>Following</p>
                        </Tab>
                        <Tab>
                          <p>Posts Liked</p>
                        </Tab>
                        <Tab>
                          <p>Posts Saved</p>
                        </Tab>
                        <Tab>
                          <p>Statistics</p>
                        </Tab>
                    </TabList>
                    <TabPanel>
            <div className="panel-content">
              <h2>Edit Account</h2>
              <div>
                <form>
                  <p>
                    User Name: {' '}
                    {isEditing ? (
                      <TextInput
                        type="text"
                        name="userName"
                        ref={userName} 
                        value={editedUser.userName}
                        onChange={handleChange}
                        autoComplete="userName" />
                        
                    ) : (
                      editedUser.userName
                    )}
                    
                        <p className='error-message'>{messageUser}</p>
                  </p>
                  <p>
                    First Name: {' '}
                    {isEditing ? (
                      <TextInput
                        type="text"
                        name="firstName"
                        ref={firstName} 
                        value={editedUser.firstName}
                        onChange={handleChange}
                        autoComplete="firstName" />
                        
                    ) : (
                      editedUser.firstName
                    )}
                    <p className='error-message'>{messageFirst}</p>

                  </p>
                  <p>
                    Last Name: {' '}
                    {isEditing ? (
                      <TextInput
                        type="text"
                        name="lastName"
                        value={editedUser.lastName}
                        onChange={handleChange}
                        ref={lastName}
                        autoComplete="lastName" />
                    ) : (
                      editedUser.lastName
                    )}
                       <p className='error-message'>{messageLast}</p>
                  </p>
                  <p>
                    <button type="button" className='accountButton' onClick={toggleEdit}>
                      {isEditing ? 'Save' : 'Edit'}
                    </button>
                  </p>
                
                      <Button variant="outlined" onClick={handleClickOpen} style={{ color: 'green', border: '1px solid #2da042'}}>
                        Delete My Account
                      </Button>
                      <Dialog
                        open={open}
                        TransitionComponent={Transition}
                        keepMounted
                        onClose={handleClose}
                        aria-describedby="alert-dialog-slide-description"
                      >
                        <DialogTitle>{"Delete My Account"}</DialogTitle>
                        <DialogContent>
                          <DialogContentText id="alert-dialog-slide-description"> 
                          The following action will delete your account permanently and all the personal details in your account including posts you have uploaded in order to confirm this action you must click "DELETE ACCOUNT".
                          </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                          <Button onClick={handleClose} style={{ color: 'green' }}>Cancel</Button>
                          <Button onClick={deleteAccount} style={{ color: 'green' }}>Delete Account</Button>
                        </DialogActions>
                      </Dialog>
                </form>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
              <div className="panel-content_password">
                <h2>Edit Password</h2>
                <p>Password must be at least 8 characters, At least one uppercase, lowercase, and number.</p>
                <form >
                <TextInputContainer>
                  <TextInput 
                    type={showPassword ? 'text' : 'password'} 
                    ref={currentPassword} 
                    placeholder="Current Password"/> 
                  <EyeLab onClick={handleShow} >
                    <img src={showPassword ? eyeClosed : eyeOpen} alt={showPassword ? 'Hide' : 'Show'} />
                  </EyeLab>
                </TextInputContainer>
                  <p>{currentPasswordMessage}</p>
                <TextInputContainer>
                    <TextInput 
                      type={showPassword ? 'text' : 'password'} 
                      ref={newPassword} 
                      placeholder="New Password" /> 
                      <EyeLab onClick={handleShow} >
                        <img src={showPassword ? eyeClosed : eyeOpen} alt={showPassword ? 'Hide' : 'Show'} />
                      </EyeLab>
                </TextInputContainer>
                    <p>{messagePass}</p>
                    <p>{messagePass1}</p>
                    <p>{messagePass2}</p>
                  <TextInputContainer>
                    <TextInput 
                      type={showPassword ? 'text' : 'password'} 
                      ref={newPasswordAgain} 
                      placeholder="Re-enter New Password"/>
                      <EyeLab onClick={handleShow} >
                        <img src={showPassword ? eyeClosed : eyeOpen} alt={showPassword ? 'Hide' : 'Show'} />
                      </EyeLab>
                  </TextInputContainer>
                  <p>{noEqualMessage}</p>
                  <p> Forgot password?&nbsp;
                    <Link to="/login/:fpass" className="forgot-link">Click Here</Link>
                  </p>
                  <button type="button" className='saveButton' onClick={() => changePassword()}>
                    Save
                  </button>
                </form>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="panel-content">
                <h2>Edit Personal Details</h2>
                <p>
    Profile Picture:{' '}
    {isEditing ? (
      <TextInput
      name="image"
        type="file"
        accept="image/*"
        onChange={handleChange}
      />
    ) : (
       <img src={user.picture} alt="User Profile" />
    )}
  </p>
                <p>
                    Country: {' '}
                    {isEditing ? (
                      <TextInput
                        type="text"
                        name="country"
                        value={editedUser.country}
                        onChange={handleChange}
                        autoComplete="country" />
                    ) : (
                      editedUser.country
                    )}
                  </p>
                  <p>
                    Study subject: {' '}
                    {isEditing ? (
                      <TextInput
                        type="text"
                        name="studySubject"
                        value={editedUser.studySubject}
                        onChange={handleChange}
                        autoComplete="studySubject" />
                    ) : (
                      editedUser.studySubject
                    )}
                  </p>
                  <p>
                    School year: {' '}
                    {isEditing ? (
                      <FormControl sx={{ m: 1, minWidth: '70px' }}>
                      <InputLabel id="demo-simple-select-autowidth-label" style={{ color: 'white' }}></InputLabel>
                      <Select
                        labelId="demo-simple-select-autowidth-label"
                        name="schoolYear"
                        value={editedUser.schoolYear}
                        onChange={handleChange}
                        autoWidth
                        label="schoolYear"
                        style={{ color: 'white', backgroundColor: 'black' }}
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value={0}>Preparing</MenuItem>
                        <MenuItem value={1}>First year</MenuItem>
                        <MenuItem value={2}>Second year</MenuItem>
                        <MenuItem value={3}>Third year</MenuItem>
                        <MenuItem value={4}>Fourth year</MenuItem>

                      </Select>
                    </FormControl>
                    ) : (
                      getSchoolYearLabel(editedUser.schoolYear)
                      )}
                  </p>
                  <p>
                    About my self: {' '}
                    {isEditing ? (
                      <TextField
                      sx={{ width: '230px',
                      backgroundColor: 'black',
                      borderRadius: '8px',
                      border: '1px solid green',
                      '& .MuiInputBase-input': {
                        color: 'white',
                      },}}
                        type="text"
                        name="aboutMySelf"
                        value={editedUser.aboutMySelf}
                        onChange={handleChange}
                        multiline
                        autoComplete="aboutMySelf" />
                    ) : (
                      editedUser.aboutMySelf
                    )}
                  </p>
                  <p>
                    Phone number: {' '}
                    {isEditing ? (
                      <TextInput
                        type="number"
                        name="phoneNumber"
                        value={editedUser.phoneNumber}
                        onChange={handleChange}
                        label="PhoneNumber"
                        autoComplete="phoneNumber" />
                    ) : (
                      editedUser.phoneNumber
                    )}
                  </p>
                  <p>
                    <button type="button" className='accountButton' onClick={toggleEdit}>
                      {isEditing ? 'Save' : 'Edit'}
                    </button>
                  </p>
              </div>
              </TabPanel>
              <TabPanel>
                <div className="panel-content-followers">
                  <h2>My Followers</h2>
                  <div className="followers-list">
                    {followersUsers.map((user) => (
                      <div key={user.email}>
                        <img src={user.picture} alt={user.firstName} />
                        <p>{`${user.firstName} ${user.lastName}`}</p>
                        <button onClick={() => handleFollowButtonClick(user)}>Follow</button>
                      </div>
                    ))}
                  </div>
                </div>
              </TabPanel>
              <TabPanel>
                    <div className="panel-content-followers">
                      <h2>My Following</h2>
                      <div className="followers-list">
                        {followingUsers.map(user => (
                          <div key={user.email}>
                            <img src={user.picture} alt={user.firstName} />
                            <p>{`${user.firstName} ${user.lastName}`}</p>
                            <button onClick={() => handleUnfollowButtonClick(user)}>Unfollow</button>
                          </div>
                        ))}
                      </div>
                    </div>
                  </TabPanel>
                  <TabPanel>
                <div className="panel-content">
                  <h2>Liked Posts</h2>
                  <div className="like-post">
                  <p>I like posts: {user.likedPosts.length} <br></br><br></br><br></br>
                  <ThumbsUpDownOutlinedIcon></ThumbsUpDownOutlinedIcon></p>
                  </div>
                </div>
              </TabPanel><TabPanel>
                <div className="panel-content">
                  <h2>Saved Posts</h2>
                  <div className="save-post">
                  </div>
                </div>
              </TabPanel>
              <TabPanel>
                  <div className="panel-content_statistics">
                    <h2>User Statistics</h2>
                    {/* {userStatistics && ( */}
                      <div>
                        <p><ThumbUpAltIcon></ThumbUpAltIcon> Number of likes : {user.likedPosts.length}</p>
                        <p><PostAddIcon></PostAddIcon> Number of Posts: {user.posts.length}</p>
                        <p><GroupIcon></GroupIcon> Number of Followers: {user.followers.length}</p>
                        <p><GroupIcon></GroupIcon> Number of Following: {user.following.length}</p>
                      </div>
                  </div>
                </TabPanel>
                </Tabs></>
            )}
        </div>
    );
}