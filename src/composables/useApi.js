const { VITE_URL, VITE_PATH } = import.meta.env;
import axios from 'axios';
import toast from '@/utils/toast';
import { getAuthToken } from '@/utils/authToken';
const instance = axios.create({
  baseURL: `${VITE_URL}/api/${VITE_PATH}`,
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
    Accept: 'application/json'
  },
  timeout: 1000 * 60
});

// 統一在送出前注入 token，避免每支 API 都重複處理 Authorization。
instance.interceptors.request.use((config) => {
  const token = getAuthToken();
  if (token) config.headers.Authorization = token;
  return config;
});

// 將回傳資料攤平成 data，並集中處理錯誤提示以維持 UI 行為一致。
instance.interceptors.response.use(
  (res) => res.data,
  (err) => {
    if (!err.config?.silent) {
      toast.fire({
        icon: 'error',
        title: err.config?.errorMessage || err.response?.data?.message || '發生錯誤'
      });
    }

    return Promise.reject(err);
  }
);

// 將「業務選項」與「axios 原生選項」拆開，讓 request 主流程維持精簡可讀。
const buildRequestConfig = (method, data, options = {}) => {
  const {
    silent = false, // 不顯示任何 toast（元件自己全權處理）
    successMsg = '', // 成功時顯示的訊息
    errorMsg = '', // 失敗時覆蓋預設錯誤訊息
    params = {}, // GET 查詢參數
    ...axiosOptions
  } = options;

  const requestConfig = {
    method,
    silent,
    errorMessage: errorMsg,
    ...axiosOptions
  };

  // GET 使用 params；其餘方法才帶 request body，避免傳遞無效 payload。
  if (method === 'get') {
    requestConfig.params = params;
  } else if (data !== undefined && data !== null) {
    requestConfig.data = data;
  }

  return {
    requestConfig,
    successMsg
  };
};

export const request = async (method, url, data, options = {}) => {
  // 標準化 method，避免呼叫端大小寫差異造成分支判斷不一致。
  const normalizedMethod = method.toLowerCase();
  const { requestConfig, successMsg } = buildRequestConfig(normalizedMethod, data, options);

  const res = await instance.request({
    url,
    ...requestConfig
  });

  if (successMsg) {
    toast.fire({ icon: 'success', title: successMsg });
  }

  return res;
};

// 對外保留簡潔介面，讓元件不需要知道 axios 參數細節。
export const useApi = () => ({
  instance,
  get: (url, params, options) => request('get', url, null, { ...options, params }),
  post: (url, data, options) => request('post', url, data, options),
  put: (url, data, options) => request('put', url, data, options),
  delete: (url, options) => request('delete', url, null, options)
});
