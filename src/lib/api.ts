import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:8000/api',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
});

// Interceptor para añadir token de autenticación
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('auth_token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const getServices = async () => {
  try {
    const response = await api.get('/services');
    return response.data;
  } catch (error) {
    console.error('Error fetching services:', error);
    throw error;
  }
};

export const getSponsors = async () => {
  try {
    const response = await api.get('/sponsors');
    return response.data;
  } catch (error) {
    console.error('Error fetching sponsors:', error);
    throw error;
  }
};

export const sendContactForm = async (data: {
  name: string;
  email: string;
  message: string;
}) => {
  try {
    const response = await api.post('/contact', data);
    return response.data;
  } catch (error) {
    console.error('Error sending contact form:', error);
    throw error;
  }
};