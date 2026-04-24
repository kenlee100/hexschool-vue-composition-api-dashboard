import { useApi } from '@/composables/useApi.js';

export const getOrder = (num = 1) => useApi().get(`/admin/orders/?page=${num}`);
export const deleteOrder = (id, options) => useApi().delete(`/admin/order/${id}`, options);

export const updatePaid = (content) =>
  useApi().put(`/admin/order/${content.id}`, {
    data: {
      is_paid: content.is_paid
    }
  });
