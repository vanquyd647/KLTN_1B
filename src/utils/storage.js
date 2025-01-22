import Cookies from 'js-cookie';

const TOKEN_KEY = 'token';
const REFRESH_TOKEN_KEY = 'refreshToken';
const USER_ID_KEY = 'userId';
const SESSION_ID_KEY = 'sessionId';
const CART_ID_KEY = 'cartId';
const ROLE = 'role';

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

// Set session ID in cookies
export const setSessionId = (sessionId) =>
    Cookies.set(SESSION_ID_KEY, sessionId, { expires: 7, secure: false, sameSite: 'Strict' });

// Get session ID from cookies
export const getSessionId = () => Cookies.get(SESSION_ID_KEY);

// Remove session ID from cookies
export const removeSessionId = () => Cookies.remove(SESSION_ID_KEY);

// Set cart ID in cookies
export const setCartId = (cartId) => Cookies.set(CART_ID_KEY, cartId, { expires: 7, secure: false, sameSite: 'Strict' });

// Get cart ID from cookies
export const getCartId = () => Cookies.get(CART_ID_KEY);

// Remove cart ID from cookies
export const removeCartId = () => Cookies.remove(CART_ID_KEY);

// Set role in cookies
export const setRole = (role) => Cookies.set(ROLE, role, { expires: 7, secure: false, sameSite: 'Strict' });

// Get role from cookies
export const getRole = () => Cookies.get(ROLE);

// Remove role from cookies
export const removeRole = () => Cookies.remove(ROLE);

// Clear all cookies
export const clearAllCookies = () => {
    Cookies.remove(TOKEN_KEY);
    Cookies.remove(REFRESH_TOKEN_KEY);
    Cookies.remove(USER_ID_KEY);
    Cookies.remove(SESSION_ID_KEY);
    Cookies.remove(CART_ID_KEY);
    Cookies.remove(ROLE);
};
