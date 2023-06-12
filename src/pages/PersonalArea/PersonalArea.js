/* eslint-disable */
import React, { useEffect, useState, useRef } from 'react';
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import './PersonalArea.css';
import { TextInputContainer, TextInput, EyeLab } from '../Login/Login.style';
import eyeClosed from '../../icons/eye-off.png';
import eyeOpen from '../../icons/eye-on.png';
import { Link } from 'react-router-dom';
import { getUsersByiD, requestUpdateProfile } from '../../API/Auth_calls';
import { FormControl, InputLabel, MenuItem, Select, TextField, Snackbar, MuiAlert} from '@mui/material';



export default function PersonalArea() {
  const [followers, setFollowers] = useState([]);
  const [followersUsers, setFollowersUsers] = useState([]);
  const [following, setFollowing] = useState([]);
  const [followingUsers, setFollowingUsers] = useState([]);
  const [likedPosts, setLikedPosts] = useState([]);
  const [savedPosts, setSavedPosts] = useState([]);
  const [statistics, setStatistics] = useState({});
  const [user, setUser] = useState(null);
  const [messagePass, setMessagePass] = useState([]);
  const [messagePass1, setMessagePass1] = useState([]);
  const [messagePass2, setMessagePass2] = useState([]);
  const [noEqualMessage, setNoEqualMessage] = useState(false);
  const [currentPasswordMessage, setCurrentPasswordMessage] = useState('');
  const currentPassword = useRef(null);
  const newPassword = useRef(null);
  const newPasswordAgain = useRef(null);
  const [schoolYear, setSchoolYear] = useState('');
  const [editedUser, setEditedUser] = useState({
    userName: '',
    firstName: '',
    lastName: '',
    country: '',
    studySubject: '',
    schoolYear: '',
    aboutMySelf: '',
  });


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
    if (followers.length !== 0) {
      try {
        // console.log(followers);
        const result = await getUsersByiD({ users: followers });
        // console.log(result);
        setFollowersUsers(result.users);
       
      } catch (error) {
        console.error(error);
      }
    }
    if (following.length !== 0) {
      try {
        console.log(following);
        //using the same function to get the following users
        const result1 = await getUsersByiD({ users: following });
        console.log(result1);
        setFollowingUsers(result1.users);
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

    const changePassword = async () => {
    var passRegex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
    var isRegex = false;
    setCurrentPasswordMessage('');
    setNoEqualMessage('');
    console.log (currentPassword.current.value);
      if (currentPassword.current.value === user.password) {
        console.log('hhhh', user.password);

        setCurrentPasswordMessage('');
        if (newPassword.current.value === newPasswordAgain.current.value) {
          if (newPassword.current.value === '') {
            setMessagePass("Password cannot be empty.");
            props.setMessage('');
            isRegex = true;
            // Check if the password is in the correct format
          }else if (!newPassword.current.value.match(passRegex)) {
            setMessagePass("Password must be at least 8 characters.");
            setMessagePass1("At least one uppercase,");
            setMessagePass2("lowercase and number.");
            props.setMessage('');
            isRegex = true;
          } else{
            setMessagePass("");
            setMessagePass1("");
            setMessagePass2("");
          }
          if (!isRegex){
            try {
              const result = await changePassword({user, newPassword});
            } catch (error) {
              console.error(error);
            }
          }
        } else {
          setNoEqualMessage('New password not match');
        }
      } else {
        setCurrentPasswordMessage('Current password not match');
      }
  }
  
const [isEditing, setIsEditing] = useState(false);

const handleChange = (e) => {
  const { name, value } = e.target;
  setEditedUser((prevUser) => ({
    ...prevUser,
    [name]: value,
  }));
};

// const handleChangeYear = (event) => {
//   setSchoolYear(event.target.value);
// };

const saveProfile = async () => {
  setIsEditing(false);
  setUser(editedUser);
  localStorage.setItem('user', JSON.stringify(editedUser));
  try {
    const result = await requestUpdateProfile(editedUser);
    console.log(result);
  } catch (error) {
    console.error(error);
  }
};



const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
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
    saveProfile();
  }
};


    const deleteAccount = () => {
        // Implement the logic to delete the user account
        // This can include API calls, removing data, etc.
        // You can replace the placeholder implementation with your actual logic.
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
                    </TabList>
                    <TabPanel>
            <div className="panel-content">
              <h2>Edit account</h2>
              <div>
                <form>
                  <p>
                    User Name: {' '}
                    {isEditing ? (
                      <TextInput
                        type="text"
                        name="userName"
                        value={editedUser.userName}
                        onChange={handleChange}
                        autoComplete="userName" />
                    ) : (
                      editedUser.userName
                    )}
                  </p>
                  <p>
                    First Name: {' '}
                    {isEditing ? (
                      <TextInput
                        type="text"
                        name="firstName"
                        value={editedUser.firstName}
                        onChange={handleChange}
                        autoComplete="firstName" />
                    ) : (
                      editedUser.firstName
                    )}
                  </p>
                  <p>
                    Last Name: {' '}
                    {isEditing ? (
                      <TextInput
                        type="text"
                        name="lastName"
                        value={editedUser.lastName}
                        onChange={handleChange}
                        autoComplete="lastName" />
                    ) : (
                      editedUser.lastName
                    )}
                  </p>
                  <p>
                    <button type="button" onClick={toggleEdit}>
                      {isEditing ? 'Save' : 'Edit'}
                    </button>
                  </p>
                </form>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
              <div className="panel-content_password">
                <h2>Edit password</h2>
                <p>Password must be at least 8 characters, At least one uppercase, lowercase, and number.</p>
                <form onSubmit={saveProfile}>
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
                      placeholder="New Password Again"/>
                      <EyeLab onClick={handleShow} >
                        <img src={showPassword ? eyeClosed : eyeOpen} alt={showPassword ? 'Hide' : 'Show'} />
                      </EyeLab>
                  </TextInputContainer>
                  <p>{noEqualMessage}</p>
                  <p> Forgot password?&nbsp;
                    <Link to="/login/:fpass" className="forgot-link">Click Here</Link>
                  </p>
                  <button className='saveButton' onClick={() => changePassword()}>
                    Save
                  </button>
                </form>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="panel-content">
                <h2>Edit Personal Details</h2>
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
                      <InputLabel id="demo-simple-select-autowidth-label" style={{ color: 'white' }}>school year</InputLabel>
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
                        label="Phone Number"
                        autoComplete="phoneNumber" />
                    ) : (
                      editedUser.phoneNumber
                    )}
                  </p>
                  <p>
                    <button type="button" onClick={toggleEdit}>
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
                        {followingUsers.map((user) => (
                          <div key={user.email}>
                            <img src={user.picture} alt={user.firstName} />
                            <p>{`${user.firstName} ${user.lastName}`}</p>
                            <button onClick={() => handleUnfollowButtonClick(user)}>Unfollow</button>
                          </div>
                        ))}
                      </div>
                    </div>
                  </TabPanel>
                </Tabs></>
            )}
        </div>
    );
}
