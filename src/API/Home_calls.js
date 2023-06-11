/* eslint-disable no-console */
import axios from 'axios';

const BASE_URL = 'http://localhost:5002/';
// const BASE_URL = 'https://studnet.onrender.com/';

export const sendPostRequest = async (params) => {
  try {
    const result = await axios.post(`${BASE_URL}cpost`, params);
    return result.data;
  } catch (error) {
    console.error(error);
  }
  return null;
};

export const sendGetRequest = async (params) => {
  try {
    const result = await axios.post(`${BASE_URL}posts`, params);
    return result;
  } catch (error) {
    console.error(error);
  }
  return null;
};

export const sendDeleteRequest = async (postId, auth) => {
  try {
    const result = await axios.delete(`${BASE_URL}posts/delete`, { postId, data: { auth } });
    return result.data;
  } catch (error) {
    console.error(error);
  }
  return null;
};

export const sendPutRequest = async (postId, updatedData) => {
  try {
    const result = await axios.put(`${BASE_URL}posts/update`, updatedData);
    return result;
  } catch (error) {
    console.error(error);
  }
  return null;
};

export const sendLikeRequest = async (params) => {
  try {
    const result = await axios.get(`${BASE_URL}liked`, params);
    return result;
  } catch (error) {
    console.error(error);
  }
  return null;
};
