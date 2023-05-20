/* eslint-disable no-console */
/* eslint-disable no-undef */
/* eslint-disable no-alert */
/* eslint-disable import/prefer-default-export */
import axios from 'axios';

// const BASE_URL = 'http://localhost:5002/';
const BASE_URL = 'https://studnet.onrender.com/';

export const sendLoginRequest = async (params, setMessage) => {
  setMessage('');
  try {
    const result = await axios.post(`${BASE_URL}log`, params);
    console.log(result);
    if (result.data.success) {
      // alert(`Hello ${result.data.data.user.firstName}, You are now logged in!`);
      return result.data.data.user;
    }
    setMessage(result.data.data.message);
  } catch (error) {
    console.error(error);
    alert('An error occurred while processing your request. Please try again later.');
  }
  return null;
};

export const sendSignUpRequest = async (params, setMessage) => {
  setMessage('');
  try {
    const result = await axios.post(`${BASE_URL}auth`, params);
    if (result.data.success) {
      alert(`Hello ${result.data.data.newUser.firstName}, You are now registered!`);
      return result.data.data.user;
    }
    setMessage(result.data.data.message);
  } catch (error) {
    console.error(error);
    alert('An error occurred while processing your request. Please try again later.');
  }
  return null;
};
