import Cookies from 'js-cookie';

const TOKEN_KEY = 'token';
const REFRESH_TOKEN_KEY = 'refreshToken';
const USER_ID_KEY = 'userId';

// Set token in cookies
export const setToken = (token) => Cookies.set(TOKEN_KEY, token, { expires: 7, secure: true, sameSite: 'Strict' });

// Get token from cookies
export const getToken = () => Cookies.get(TOKEN_KEY);

// Remove token from cookies
export const removeToken = () => Cookies.remove(TOKEN_KEY);

// Set refresh token in cookies
export const setRefreshToken = (token) => Cookies.set(REFRESH_TOKEN_KEY, token, { expires: 7, secure: true, sameSite: 'Strict' });

// Get refresh token from cookies
export const getRefreshToken = () => Cookies.get(REFRESH_TOKEN_KEY);

// Remove refresh token from cookies
export const removeRefreshToken = () => Cookies.remove(REFRESH_TOKEN_KEY);

// Set user ID in cookies
export const setUserId = (userId) => Cookies.set(USER_ID_KEY, userId, { expires: 7, secure: true, sameSite: 'Strict' });

// Get user ID from cookies
export const getUserId = () => Cookies.get(USER_ID_KEY);

// Remove user ID from cookies
export const removeUserId = () => Cookies.remove(USER_ID_KEY);
