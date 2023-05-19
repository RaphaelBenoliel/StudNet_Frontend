import axios from 'axios';

const BASE_URL = 'http://localhost:5002/';

const sendPostRequest = async (params) => {
  try {
    const result = await axios.post(`${BASE_URL}cpost`, params);
    console.log(result);
    return result;
  } catch (error) {
    console.error(error);
  }
  return null;
};

export default sendPostRequest;
