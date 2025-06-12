import axios from 'axios';

// const API_BASE_URL = 'http://localhost:8000/api';
const API_BASE_URL = 'https://planto-backend.onrender.com/api';


const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getProducts = async () => {
  try {
    const response = await api.get('/products/');
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
};

export const getServices = async () => {
  try {
    const response = await api.get('/services/');
    return response.data;
  } catch (error) {
    console.error('Error fetching services:', error);
    return [];
  }
};

export const getTrainingEvents = async () => {
  try {
    const response = await api.get('/training-events/');
    return response.data;
  } catch (error) {
    console.error('Error fetching training events:', error);
    return [];
  }
};

export const getBlogPosts = async () => {
  try {
    const response = await api.get('/blog-posts/');
    return response.data;
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return [];
  }
};

export const getJournals = async () => {
  try {
    const response = await api.get('/journals/');
    return response.data;
  } catch (error) {
    console.error('Error fetching journals:', error);
    return [];
  }
};

export const getCaseStudies = async () => {
  try {
    const response = await api.get('/case-studies/');
    return response.data;
  } catch (error) {
    console.error('Error fetching case studies:', error);
    return [];
  }
};

export const getTeamMembers = async () => {
  try {
    const response = await api.get('/team-members/');
    return response.data;
  } catch (error) {
    console.error('Error fetching team members:', error);
    return [];
  }
};

export const submitContactForm = async (formData) => {
  try {
    const response = await api.post('/contact-messages/', formData);
    return response.data;
  } catch (error) {
    console.error('Error submitting contact form:', error);
    throw error;
  }
}; 