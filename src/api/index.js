import axios from 'axios';

export const backend = axios.create({
  baseURL: `${process.env.API_HOST}/api`,
  headers: {
    'X-Custom-Header': 'foobar'
  },
  timeout: 3000
});

export const authenticate = data =>
  backend.post('/authenticate', data)
