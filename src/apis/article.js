import { useApi } from '@/composables/useApi.js';

export const getArticles = (num = 1) => useApi().get(`/admin/articles/?page=${num}`);

export const getArticleItem = (id) => useApi().get(`/admin/article/${id}`);

export const deleteArticleItem = (id, options) => useApi().delete(`/admin/article/${id}`, options);

export const updateArticleItem = (method, url, data, options) =>
  useApi()[method](url, data, options);
