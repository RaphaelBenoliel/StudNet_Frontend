/* eslint-disable no-console */
import axios from 'axios';

// const BASE_URL = 'http://localhost:5002/';
const BASE_URL = 'https://studnet.onrender.com/';

const sendPostRequest = async (params) => {
  console.log('params: ', params);
  try {
    const result = await axios.post(`${BASE_URL}cpost`, params);
    console.log('result', result.data);
    return result.data;
  } catch (error) {
    console.error(error);
  }
  return null;
};
const sendGetRequest = async (params) => {
  try {
    const result = await axios.post(`${BASE_URL}posts`, params);
    console.log('result', result.data);
    return result;
  } catch (error) {
    console.error(error);
  }
  return null;
};

export default (sendPostRequest, sendGetRequest);
