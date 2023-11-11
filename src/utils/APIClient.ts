import axios from 'axios';

import { STRAPI_API_TOKEN } from '@/constant/env';

const client = axios.create({
  //!Put this in .env variable
  baseURL: 'http://127.0.0.1:1337/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const setHeaders = () => {
  client.defaults.headers.common = {
    Authorization: `Bearer ${STRAPI_API_TOKEN}`,
  };
};

export default client;
