import { useApi } from '@/composables/useApi';

export const getCoupons = (num = 1) => useApi().get(`/admin/coupons?page=${num}`);

export const deleteItem = (id, options) => useApi().delete(`/admin/coupon/${id}`, options);

export const updateCouponItem = (method, url, data, options) =>
  useApi()[method](url, data, options);
