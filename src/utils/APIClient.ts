import axios from 'axios';

const client = axios.create({
  //!Put this in .env variable
  baseURL: '127.0.0.1:1337/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const setHeaders = () => {
  client.defaults.headers.common = {
    Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
  };
};

export default client;
