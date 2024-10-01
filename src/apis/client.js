import axios from 'axios';

export const client = axios.create({
  baseURL: process.env.VITE_SERVER_API,
  withCredentials: true,
});
