/* eslint-disable no-console */
/* eslint-disable no-undef */
/* eslint-disable no-alert */
/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const BASE_URL = 'https://studnet.onrender.com/';
const navigate = useNavigate();
export const sendLoginRequest = async (params) => {
  try {
    const result = await axios.post(`${BASE_URL}log`, params);
    console.log(result);
    if (result.status === 200) {
      alert(result.data.message);
      navigate('/');
    } else if (result.status === 201) {
      alert(result.data.message);
    } else if (result.status === 202) {
      alert(result.data.message);
    }
  } catch (error) {
    console.error(error);
    alert('An error occurred while processing your request. Please try again later.');
  }
};

export const sendSignUpRequest = async (params) => {
  try {
    const result = await axios.post(`${BASE_URL}auth`, params);
    if (result.status === 200) {
      alert(result.data.message);
    }
    if (result.status === 201) {
      alert(result.data.message);
    }
  } catch (error) {
    console.error(error);
    alert('An error occurred while processing your request. Please try again later.');
  }
};
