// src/utils/api.js
import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: 'dda439d031b9a59f8116b4a2f6f64c2f',
  },
});

export default instance;
