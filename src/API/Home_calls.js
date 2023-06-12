/* eslint-disable no-console */
import axios from 'axios';

const BASE_URL = 'http://localhost:5002/';
// const BASE_URL = 'https://studnet.onrender.com/';

export const sendPostRequest = async (params) => {
  try {
    const result = await axios.post(`${BASE_URL}cpost`, params);
    console.log('RESULT\t', result.data);
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

export const sendDeleteRequest = async (postId, userID) => {
  try {
    console.log('postId: ', postId);
    console.log('userID: ', userID);
    const result = await axios.put(`${BASE_URL}posts/delete`, { _id: postId, userID });
    return result.data;
  } catch (error) {
    console.error(error);
  }
  return null;
};

export async function sendPutRequest(postId, updatedData) {
  try {
    const result = await axios.put(`${BASE_URL}posts/update`, { _id: postId, updatedData });
    return result;
  } catch (error) {
    console.error(error);
  }
  return null;
}

export const sendLikeRequest = async (postId, userId) => {
  try {
    const result = await axios.post(`${BASE_URL}posts/liked`, { postId, userId });
    return result;
  } catch (error) {
    console.error(error);
  }
  return null;
};
