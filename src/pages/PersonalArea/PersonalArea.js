/* eslint-disable */
import React, { useEffect, useState, useRef } from 'react';
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import './PersonalArea.css';
import { InputLabel,  } from '@mui/material';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { TextInput } from '../Login/Login.style';
import eyeClosed from '../../icons/eye-off.png';
import eyeOpen from '../../icons/eye-on.png';

export default function PersonalArea() {
    
    const [followers, setFollowers] = useState([]);
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
  
    const [isEditing, setIsEditing] = useState({
      userName: false,
      firstName: false,
      lastName: false,
      password: false,
    });
    const [updatedProfile, setUpdatedProfile] = useState({
      userName: '',
      firstName: '',
      lastName: '',
      password: '',
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
        fetchUserData(parsedData.id);
      }
    }, []);

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

    const fetchUserData = (userId) => {
      // Fetch user-related data from the backend server
      // Replace the placeholder API endpoints with the actual backend API endpoints
    //   Promise.all([
    //     fetch(`/api/users/${userId}/followers`),
    //     fetch(`/api/users/${userId}/following`),
    //     fetch(`/api/users/${userId}/liked-posts`),
    //     fetch(`/api/users/${userId}/saved-posts`),
    //     fetch(`/api/users/${userId}/statistics`),
    //   ])
    //     .then((responses) => Promise.all(responses.map((res) => res.json())))
    //     .then(([followersData, followingData, likedPostsData, savedPostsData, statisticsData]) => {
    //       setFollowers(followersData);
    //       setFollowing(followingData);
    //       setLikedPosts(likedPostsData);
    //       setSavedPosts(savedPostsData);
    //       setStatistics(statisticsData);
    //     })
    //     .catch((error) => {
    //       console.error('Error fetching user data:', error);
    //     });
    };
  
    const editProfile = (event) => {
      event.preventDefault();
      setIsEditing(true);
      setUpdatedProfile({
        username: user.userName,
        email: user.email,
        fullName: user.fullName
      });
    };
  
    // const saveProfile = (event) => {
    //   event.preventDefault();
    //   // Call the backend API to save the updated profile
    //   // Replace the placeholder API endpoint with the actual backend API endpoint
    //   fetch(`/api/users/${user.id}/profile`, {
    //     method: 'PUT',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(updatedProfile),
    //   })
    //     .then((response) => response.json())
    //     .then((updatedProfileData) => {
    //       setUser(updatedProfileData);
    //       setIsEditing(false);
    //     })
    //     .catch((error) => {
    //       console.error('Error updating profile:', error);
    //     });
    // };
    
    const saveProfile = (e, field) => {
      e.preventDefault();
      setUser({ ...user, [field]: updatedProfile[field] });
      setIsEditing({ ...isEditing, [field]: false });
    };
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setUpdatedProfile({ ...updatedProfile, [name]: value });
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
            <><div className='title'>
                <p>
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

                            <form onSubmit={saveProfile}>
      <p>
        Username: &nbsp;
        {isEditing.userName ? (
          <input
            type="text"
            name="userName"
            defaultValue={ user.userName }
            onChange={handleChange}
          />
        ) : (
          user.userName
        )}
        <button onClick={() => setIsEditing({ ...isEditing, userName: !isEditing.userName })}>
          {isEditing.userName ? 'Save' : 'Edit'}
        </button>
      </p>

      <p>
        First Name: &nbsp;
        {isEditing.firstName ? (
          <input
            type="text"
            name="firstName"
            defaultValue={ user.firstName }
            onChange={handleChange}
          />
        ) : (
          user.firstName
        )}
        <button onClick={() => setIsEditing({ ...isEditing, firstName: !isEditing.firstName })}>
          {isEditing.firstName ? 'Save' : 'Edit'}
        </button>
      </p>

      <p>
        Last Name: &nbsp;
        {isEditing.lastName ? (
          <input
            type="text"
            name="lastName"
            defaultValue={ user.lastName }
            onChange={handleChange}
          />
        ) : (
          user.lastName
        )}
        <button onClick={() => setIsEditing({ ...isEditing, lastName: !isEditing.lastName })}>
          {isEditing.lastName ? 'Save' : 'Edit'}
        </button>
      </p>
    </form>
                            
      </div>
                        </div>
                    </TabPanel>
                    <TabPanel>
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
      />        <p>{messagePass}</p>
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
                    </TabPanel><TabPanel>
                        <div className="panel-content">
                            <h2>Any content 4</h2>
                        </div>
                    </TabPanel><TabPanel>
                        <div className="panel-content">
                            <h2>Any content 5</h2>
                        </div>
                    </TabPanel>
                </Tabs></>
            )}
        </div>
    );
}


{/* <Container>
<Heading>Personal Area</Heading>

{user && (
  <div>
    <SubHeading>User Profile</SubHeading>
    <UserInfo>
      <Label>Username:</Label>
      <span>{user.username}</span>
    </UserInfo>
    <UserInfo>
      <Label>Email:</Label>
      <span>{user.email}</span>
    </UserInfo>
    <UserInfo>
      <Label>Full Name:</Label>
      <span>{user.fullName}</span>
    </UserInfo>

    {!isEditing && (
      <Button onClick={editProfile}>Edit Profile</Button>
    )}

    {isEditing && (
      <FormContainer>
        <form onSubmit={saveProfile}>
          <FormLabel>Username:</FormLabel>
          <FormInput
            type="text"
            name="username"
            value={updatedProfile.username}
            onChange={handleChange}
          />

          <FormLabel>Email:</FormLabel>
          <FormInput
            type="email"
            name="email"
            value={updatedProfile.email}
            onChange={handleChange}
          />

          <FormLabel>Full Name:</FormLabel>
          <FormInput
            type="text"
            name="fullName"
            value={updatedProfile.fullName}
            onChange={handleChange}
          />

          <Button type="submit">Save</Button>
          <Button onClick={() => setIsEditing(false)}>Cancel</Button>
        </form>
      </FormContainer>
    )}

    <Button onClick={deleteAccount}>Delete Account</Button>
    <Button onClick={() => changePassword('newpassword')}>Change Password</Button>
  </div>
)}

{followers.length > 0 && (
  <div>
    <SubHeading>Followers ({followers.length})</SubHeading>
    <List>
      {followers.map((follower, index) => (
        <ListItem key={index}>{follower}</ListItem>
      ))}
    </List>
  </div>
)}

{following.length > 0 && (
  <div>
    <SubHeading>Following ({following.length})</SubHeading>
    <List>
      {following.map((followedAccount, index) => (
        <ListItem key={index}>{followedAccount}</ListItem>
      ))}
    </List>
  </div>
)}

{likedPosts.length > 0 && (
  <div>
    <SubHeading>Liked Posts ({likedPosts.length})</SubHeading>
    <List>
      {likedPosts.map((likedPost, index) => (
        <ListItem key={index}>{likedPost}</ListItem>
      ))}
    </List>
  </div>
)}

{savedPosts.length > 0 && (
  <div>
    <SubHeading>Saved Posts ({savedPosts.length})</SubHeading>
    <List>
      {savedPosts.map((savedPost, index) => (
        <ListItem key={index}>{savedPost}</ListItem>
      ))}
    </List>
  </div>
)}

{Object.keys(statistics).length > 0 && (
  <div>
    <SubHeading>Statistics</SubHeading>
    <UserInfo>
      <Label>Posts:</Label>
      <span>{statistics.posts}</span>
    </UserInfo>
    <UserInfo>
      <Label>Followers:</Label>
      <span>{statistics.followers}</span>
    </UserInfo>
    <UserInfo>
      <Label>Following:</Label>
      <span>{statistics.following}</span>
    </UserInfo>
  </div>
)}
</Container> */}