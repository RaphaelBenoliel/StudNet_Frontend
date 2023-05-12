/* eslint-disable no-console */
/* eslint-disable no-undef */
/* eslint-disable no-alert */
/* eslint-disable import/prefer-default-export */
import axios from 'axios';

const BASE_URL = 'http://localhost:5001/auth';

export const sendLoginRequest = async (params) => {
  try {
    const result = await axios.post(BASE_URL, params);
    if (result.status === 200) {
      alert(result.data.message);
    }
  } catch (error) {
    console.error(error);
    alert('An error occurred while processing your request. Please try again later.');
  }
};
