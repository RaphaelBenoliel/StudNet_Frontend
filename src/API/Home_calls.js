/* eslint-disable no-console */
import axios from 'axios';

// const BASE_URL = 'http://localhost:5002/';
const BASE_URL = 'https://studnet.onrender.com/';

export const sendPostRequest = async (params) => {
  console.log('params: ', params);
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
    console.log('result', result.data);
    return result;
  } catch (error) {
    console.error(error);
  }
  return null;
};

export const sendDeleteRequest = async (params) => {
  try {
    console.log('postId>>>> ', params);// work
    const result = await axios.delete(`${BASE_URL}posts/${params.postId}`, JSON.stringify(params));
    console.log('resultdelete', result);// the result come with an 404 user not found
    return result.data;
  } catch (error) {
    console.error(error);
  }
  return null;
};

export const sendPutRequest = async (postId, updatedData) => {
  try {
    const result = await axios.put(`${BASE_URL}posts/${postId}`, updatedData);
    return result;
  } catch (error) {
    console.error(error);
  }
  return null;
};
