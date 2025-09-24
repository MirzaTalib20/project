import { API_CONFIG } from '../config/api';
import { Product } from '../types';

interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
}

export const productService = {
  async fetchAll(): Promise<ApiResponse<Product[]>> {
    const response = await fetch(`${API_CONFIG.BASE_URL}/products`, {
      method: 'GET',
      headers: API_CONFIG.HEADERS,
      mode: 'cors'
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    return response.json();
  },

  async getById(id: string): Promise<ApiResponse<Product>> {
    const response = await fetch(`${API_CONFIG.BASE_URL}/products/${id}`, {
      method: 'GET',
      headers: API_CONFIG.HEADERS,
      mode: 'cors'
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.json();
  },

  async create(product: Omit<Product, '_id'>): Promise<ApiResponse<Product>> {
    const response = await fetch(`${API_CONFIG.BASE_URL}/products`, {
      method: 'POST',
      headers: API_CONFIG.HEADERS,
      mode: 'cors',
      body: JSON.stringify(product)
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.json();
  },

  async update(id: string, product: Omit<Product, '_id'>): Promise<ApiResponse<Product>> {
    if (!id) {
      throw new Error('Product ID is required');
    }

    try {
      const response = await fetch(`${API_CONFIG.BASE_URL}/products/${id}`, {
        method: 'PUT',
        headers: {
          ...API_CONFIG.HEADERS,
          'Content-Type': 'application/json',
        },
        mode: 'cors',
        body: JSON.stringify(product)
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || `Error updating product (${response.status})`);
      }

      return data;
    } catch (error) {
      console.error('Product update failed:', error);
      throw error instanceof Error 
        ? error 
        : new Error('Error updating product');
    }
  },

  async delete(id: string): Promise<ApiResponse<null>> {
    const response = await fetch(`${API_CONFIG.BASE_URL}/products/${id}`, {
      method: 'DELETE',
      headers: API_CONFIG.HEADERS,
      mode: 'cors'
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.json();
  }
};