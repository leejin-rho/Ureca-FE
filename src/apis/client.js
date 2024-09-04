import axios from 'axios';

export const BASE_URL = 'http:';

export const client = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});
