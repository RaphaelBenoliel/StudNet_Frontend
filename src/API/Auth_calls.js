/* eslint-disable no-console */
/* eslint-disable no-undef */
/* eslint-disable no-alert */
/* eslint-disable import/prefer-default-export */

import axios from 'axios';

const BASE_URL = 'http://localhost:5002/';
// const BASE_URL = 'https://studnet.onrender.com/';
export const sendLoginRequest = async (params, setMessage) => {
  setMessage('');
  try {
    const result = await axios.post(`${BASE_URL}log`, params);
    // console.log(result);
    if (result.data.success) {
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
    setMessage(result.data.data);
  } catch (error) {
    console.error(error);
    alert('An error occurred while processing your request. Please try again later.');
  }
  return null;
};
export const sendEmailRequest = async (email) => {
  try {
    const result = await axios.post(`${BASE_URL}email`, email);
    if (result.data.success) {
      return result.data.success;
    }
  } catch (error) {
    console.error(error);
  }
  return null;
};
export const getAllusers = async () => {
  try {
    const result = await axios.post(`${BASE_URL}allusers`);
    if (result.data.success) {
      return result.data.data;
    }
  } catch (error) {
    console.error(error);
  }
  return null;
};

export const getUsersByiD = async (params) => {
  try {
    const result = await axios.post(`${BASE_URL}userbyid`, params);
    if (result.data.success) {
      return result.data.data;
    }
  } catch (error) {
    console.error(error);
  }
  return null;
};

export const requestUpdateProfile = async (params) => {
  try {
    const result = await axios.put(`${BASE_URL}update`, params);
    if (result.data.success) {
      return result.data.data;
    }
  } catch (error) {
    console.error(error);
  }
  return null;
};
