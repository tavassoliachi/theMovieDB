import axios from 'axios';

const baseURL = 'https://api.themoviedb.org/3';

const api = axios.create({
  baseURL: baseURL,
});

api.interceptors.request.use(async (config) => {
  if (!localStorage.getItem('token')) {
    // Imitate fetching the token
    const token = process.env.REACT_APP_AUTH_TOKEN;
    if (token) {
      localStorage.setItem('token', token);
    } else {
      const error = new Error('API key is not available');
      error.name = 'UnauthenticatedError';
      throw error;
    }
  }
  config.headers['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
  return config;
});

export default api;
