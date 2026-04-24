import { useApi } from '@/composables/useApi.js';

export const getProducts = (num = 1) => useApi().get(`/admin/products/?page=${num}`);
export const deleteItem = (id, options) => useApi().delete(`/admin/product/${id}`, options);

export const updateProduct = (method, url, data, options) => useApi()[method](url, data, options);

export const uploadImage = (data, options = {}) =>
  useApi().post(`/admin/upload`, data, {
    ...options,
    headers: {
      'Content-Type': 'multipart/form-data',
      ...(options.headers || {})
    }
  });
