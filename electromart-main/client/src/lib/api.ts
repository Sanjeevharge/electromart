import axios from 'axios';
import type { Category, OrderPayload, Product } from '../types';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:4000/api',
  timeout: 8000,
});

export const fetchProducts = async (params?: Record<string, string | number | undefined>) => {
  const response = await api.get<{ data: Product[] }>('/products', { params });
  return response.data.data;
};

export const fetchProduct = async (slug: string) => {
  const response = await api.get<{ data: Product; related: Product[] }>(`/products/${slug}`);
  return response.data;
};

export const fetchFeaturedProducts = async () => {
  const response = await api.get<{ featured: Product[]; newArrivals: Product[] }>('/products/featured');
  return response.data;
};

export const fetchCategories = async () => {
  const response = await api.get<{ data: Category[] }>('/categories');
  return response.data.data;
};

export const createOrder = async (payload: OrderPayload) => {
  const response = await api.post('/orders', payload);
  return response.data;
};

export default api;

