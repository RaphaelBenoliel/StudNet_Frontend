/* eslint-disable */
import React, { useEffect, useState } from 'react';
import { Container, Heading, SubHeading, UserInfo, Button, List, ListItem, Label, FormContainer, FormLabel, FormInput}
 from './PersonalArea.style';

export default function PersonalArea() {
    
    const [followers, setFollowers] = useState([]);
    const [following, setFollowing] = useState([]);
    const [likedPosts, setLikedPosts] = useState([]);
    const [savedPosts, setSavedPosts] = useState([]);
    const [statistics, setStatistics] = useState({});
    const [user, setUser] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const [updatedProfile, setUpdatedProfile] = useState({
      username: '',
      email: '',
      fullName: ''
    });
  
    useEffect(() => {
      const userData = localStorage.getItem('user');
      if (userData) {
        const parsedData = JSON.parse(userData);
        setUser(parsedData);
        fetchUserData(parsedData.id);
      }
    }, []);
  
    const fetchUserData = (userId) => {
      // Fetch user-related data from the backend server
      // Replace the placeholder API endpoints with the actual backend API endpoints
      Promise.all([
        fetch(`/api/users/${userId}/followers`),
        fetch(`/api/users/${userId}/following`),
        fetch(`/api/users/${userId}/liked-posts`),
        fetch(`/api/users/${userId}/saved-posts`),
        fetch(`/api/users/${userId}/statistics`),
      ])
        .then((responses) => Promise.all(responses.map((res) => res.json())))
        .then(([followersData, followingData, likedPostsData, savedPostsData, statisticsData]) => {
          setFollowers(followersData);
          setFollowing(followingData);
          setLikedPosts(likedPostsData);
          setSavedPosts(savedPostsData);
          setStatistics(statisticsData);
        })
        .catch((error) => {
          console.error('Error fetching user data:', error);
        });
    };
  
    const editProfile = (event) => {
      event.preventDefault();
      setIsEditing(true);
      setUpdatedProfile({
        username: user.username,
        email: user.email,
        fullName: user.fullName
      });
    };
  
    const saveProfile = (event) => {
      event.preventDefault();
      // Call the backend API to save the updated profile
      // Replace the placeholder API endpoint with the actual backend API endpoint
      fetch(`/api/users/${user.id}/profile`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedProfile),
      })
        .then((response) => response.json())
        .then((updatedProfileData) => {
          setUser(updatedProfileData);
          setIsEditing(false);
        })
        .catch((error) => {
          console.error('Error updating profile:', error);
        });
    };
    
  
    const handleChange = (event) => {
      const { name, value } = event.target;
      setUpdatedProfile((prevProfile) => ({
        ...prevProfile,
        [name]: value
      }));
    };
    const deleteAccount = () => {
        // Implement the logic to delete the user account
        // This can include API calls, removing data, etc.
        // You can replace the placeholder implementation with your actual logic.
        console.log('Deleting user account...');
      };

    return (
      <Container>
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
      </Container>
    );
}
  
  