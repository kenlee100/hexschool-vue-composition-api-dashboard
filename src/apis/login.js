const { VITE_URL } = import.meta.env;

import { useApi } from '@/composables/useApi.js';

export const login = (data) => useApi().post(`${VITE_URL}/admin/signin`, data);

export const check = () => useApi().post(`${VITE_URL}/api/user/check`);

export const logout = () => useApi().post(`${VITE_URL}/logout`);
