/* eslint-disable no-console */
/* eslint-disable no-undef */
/* eslint-disable no-alert */
/* eslint-disable import/prefer-default-export */
import axios from 'axios';
// https://studnet.onrender.com/
// http://localhost:5002/

const BASE_URL = 'http://localhost:5002/';
export const sendLoginRequest = async (params, setMessage) => {
  setMessage('');
  try {
    const result = await axios.post(`${BASE_URL}log`, params);
    // console.log(result);
    if (result.data.success) {
      alert(result.data.data.message);
      return result.data.data.firstName;
    }
    // alert(result.data.data.message);
    setMessage(result.data.data.message);
    // const errorElement = document.createElement('span');
    // errorElement.textContent = result.data.data.message;
    // eslint-disable-next-line max-len
    // const inputText = document.getElementById('TextMesasge'); // replace this with the ID of your input text element
    // inputText.parentNode.appendChild(errorElement);
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
