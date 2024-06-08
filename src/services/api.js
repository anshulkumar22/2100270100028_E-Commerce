import axios from 'axios';

const API_BASE_URL = 'https://20.244.56.144/test';

export const registerUser = async (userData) => {
  return axios.post(`${API_BASE_URL}/register`, userData);
};

export const fetchProducts = async (category, company) => {
  return axios.get(`${API_BASE_URL}/products`, {
    params: { category, company }
  });
};

export const fetchProductById = async (productId) => {
  return axios.get(`${API_BASE_URL}/product/${productId}`);
};