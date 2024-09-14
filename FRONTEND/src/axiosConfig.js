import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:5000/api'       //    'http://localhost:5000   only for admin page 
   // Ensure this matches your backend base URL
});

// Add a request interceptor to include the token in the headers
instance.interceptors.request.use(
  (config) => {
      const token = localStorage.getItem('adminToken');
      if (token) {
          config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
  },
  (error) => Promise.reject(error)
);

export default instance;
