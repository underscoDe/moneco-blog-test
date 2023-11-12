import axios from 'axios';

import { STRAPI_API_TOKEN, STRAPI_URL } from '@/constant/env';

const client = axios.create({
  //!Put this in .env variable
  baseURL: `${STRAPI_URL}/api`,
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
