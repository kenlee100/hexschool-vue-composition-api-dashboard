const TOKEN_KEY = 'userToken';

export const getAuthToken = () => {
  const cookie = document.cookie.split('; ').find((row) => row.startsWith(`${TOKEN_KEY}=`));

  return cookie ? decodeURIComponent(cookie.split('=').slice(1).join('=')) : '';
};

export const setAuthToken = (token, expiredAt) => {
  document.cookie = `${TOKEN_KEY}=${encodeURIComponent(token)}; expires=${new Date(
    expiredAt
  ).toUTCString()}; path=/;`;
};

export const clearAuthToken = () => {
  document.cookie = `${TOKEN_KEY}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/;`;
};
