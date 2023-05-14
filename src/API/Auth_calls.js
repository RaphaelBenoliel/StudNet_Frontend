/* eslint-disable no-console */
/* eslint-disable no-undef */
/* eslint-disable no-alert */
/* eslint-disable import/prefer-default-export */
import axios from 'axios';
// https://studnet.onrender.com/
// http://localhost:5002/
const BASE_URL = 'https://studnet.onrender.com/';
export const sendLoginRequest = async (params) => {
  try {
    const result = await axios.post(`${BASE_URL}log`, params);
    // console.log(result);
    if (result.data.success) {
      alert(result.data.data.message);
      return result.data.data.firstName;
    }
    alert(result.data.data.message);
  } catch (error) {
    console.error(error);
    alert('An error occurred while processing your request. Please try again later.');
  }
  return null;
};

export const sendSignUpRequest = async (params) => {
  try {
    const result = await axios.post(`${BASE_URL}auth`, params);
    if (result.data.success) {
      alert(result.data.data.message);
      return result.data.data.firstName;
    }
    if (result.data.data.message === 'User already exists') {
      alert(result.data.data.message);
      return null;
    }
    alert(result.data.data.message);
  } catch (error) {
    console.error(error);
    alert('An error occurred while processing your request. Please try again later.');
  }
  return null;
};
