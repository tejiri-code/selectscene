// src/utils/api.js
import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: '29f37cc889bf79902d8f7cb892f1a6d5',
  },
});
export const fetchConfiguration = async () => {
  try {
    const response = await instance.get('/configuration');
    return response.data.images;
  } catch (error) {
    console.error('Error fetching TMDb configuration:', error);
    throw error;
  }
};
export default instance;
