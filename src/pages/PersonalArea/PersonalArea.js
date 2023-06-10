/* eslint-disable */
import React, { useEffect, useState, useRef } from 'react';
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import './PersonalArea.css';
import { InputLabel,  } from '@mui/material';
import styled from 'styled-components';
import { TextInput } from '../Login/Login.style';
import eyeClosed from '../../icons/eye-off.png';
import eyeOpen from '../../icons/eye-on.png';
import { Link } from 'react-router-dom';
import { getUsersByiD, requestUpdateProfile } from '../../API/Auth_calls';

export default function PersonalArea() {
  const [followers, setFollowers] = useState([]);
  const [followersUsers, setFollowersUsers] = useState([]);
  const [following, setFollowing] = useState([]);
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
  const [editedUser, setEditedUser] = useState({
    userName: '',
    firstName: '',
    lastName: '',
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
    }

  }, []);
  //followers
  const getFollowers = async () => {
    if (followers.length === 0) {
      return;
    }
    try {
      console.log(followers);
      const result = await getUsersByiD({ followers });
      console.log(result);
      setFollowersUsers(result.users);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
      getFollowers();
  }, [followers]);
  const handleFollowButtonClick = (user) => {
    // Implement the desired functionality here
    // For example, you can show a message or perform an action
    console.log(`Follow button clicked for user: ${user.firstName} ${user.lastName}`);
  };

const EyeLab = styled.span`
  margin-left: 60%;
  display: block;
  cursor: pointer;
`;
  
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
                      <input
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
                      <input
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
                      <input
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
          </TabPanel><TabPanel>
              <div className="panel-content_password">
                <h2>Edit password</h2>
                <p>Password must be at least 8 characters,</p>
                <h9>At least one uppercase, lowercase, and number.</h9>
                <form onSubmit={saveProfile}>
                  <p>
                  <InputLabel>
          <EyeLab
            onClick={handleShow} >
          <img src={showPassword ? eyeClosed : eyeOpen} alt={showPassword ? 'Hide' : 'Show'} /></EyeLab></InputLabel>
      <TextInput 
      type={showPassword ? 'text' : 'password'} 
      id="password" 
      ref={currentPassword} 
      placeholder="Current Password"
      />
                    <p>{currentPasswordMessage}</p>
                  </p>
                  <p>
                  <InputLabel>
          <EyeLab
            onClick={handleShow} >
          <img src={showPassword ? eyeClosed : eyeOpen} alt={showPassword ? 'Hide' : 'Show'} /></EyeLab></InputLabel>
      <TextInput 
      type={showPassword ? 'text' : 'password'} 
      id="password" 
      ref={newPassword} 
      placeholder="New Password"
      /> 

                    <p>{messagePass}</p>
                    <p>{messagePass1}</p>
                    <p>{messagePass2}</p>
                  </p>
                  <p>
                  <InputLabel>
          <EyeLab
            onClick={handleShow} >
          <img src={showPassword ? eyeClosed : eyeOpen} alt={showPassword ? 'Hide' : 'Show'} /></EyeLab></InputLabel>
      <TextInput 
      type={showPassword ? 'text' : 'password'} 
      id="password" 
      ref={newPasswordAgain} 
      placeholder="New Password Again"
      />
                    <p>{noEqualMessage}</p>
                  </p>
                  <p>Forgot password?&nbsp;
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
                <h2>Any content 3</h2>
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
              <div className="panel-content">
                <h2> My Following</h2>
              </div>
              </TabPanel>
                </Tabs></>
            )}
        </div>
    );
}
