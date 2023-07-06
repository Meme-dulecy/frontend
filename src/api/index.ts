import axios from 'axios';

export const serviceClient = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URI,
});
