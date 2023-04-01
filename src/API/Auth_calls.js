/* eslint-disable no-undef */
/* eslint-disable no-alert */
/* eslint-disable import/prefer-default-export */
import axios from 'axios';

const BASE_URL = 'https://studnet.onrender.com/Auth';

export const sendLoginRequest = async (params) => {
  const result = await axios.get(BASE_URL, {
    params,
  });
  if (result.status === 200) {
    alert(result.data.message);
  }
};
