module.exports = {

"[externals]/next/dist/compiled/next-server/pages.runtime.dev.js [external] (next/dist/compiled/next-server/pages.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/pages.runtime.dev.js", () => require("next/dist/compiled/next-server/pages.runtime.dev.js"));

module.exports = mod;
}}),
"[externals]/react/jsx-runtime [external] (react/jsx-runtime, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("react/jsx-runtime", () => require("react/jsx-runtime"));

module.exports = mod;
}}),
"[externals]/react [external] (react, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("react", () => require("react"));

module.exports = mod;
}}),
"[externals]/path [external] (path, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}}),
"[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("react/jsx-dev-runtime", () => require("react/jsx-dev-runtime"));

module.exports = mod;
}}),
"[externals]/react-redux [external] (react-redux, esm_import)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
const mod = await __turbopack_context__.y("react-redux");

__turbopack_context__.n(mod);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[externals]/@reduxjs/toolkit [external] (@reduxjs/toolkit, esm_import)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
const mod = await __turbopack_context__.y("@reduxjs/toolkit");

__turbopack_context__.n(mod);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[externals]/axios [external] (axios, esm_import)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
const mod = await __turbopack_context__.y("axios");

__turbopack_context__.n(mod);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[externals]/js-cookie [external] (js-cookie, esm_import)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
const mod = await __turbopack_context__.y("js-cookie");

__turbopack_context__.n(mod);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[project]/src/utils/storage.js [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s({
    "clearAllCookies": (()=>clearAllCookies),
    "getCartId": (()=>getCartId),
    "getRefreshToken": (()=>getRefreshToken),
    "getRole": (()=>getRole),
    "getSessionId": (()=>getSessionId),
    "getToken": (()=>getToken),
    "getUserId": (()=>getUserId),
    "removeCartId": (()=>removeCartId),
    "removeRefreshToken": (()=>removeRefreshToken),
    "removeRole": (()=>removeRole),
    "removeSessionId": (()=>removeSessionId),
    "removeToken": (()=>removeToken),
    "removeUserId": (()=>removeUserId),
    "setCartId": (()=>setCartId),
    "setRefreshToken": (()=>setRefreshToken),
    "setRole": (()=>setRole),
    "setSessionId": (()=>setSessionId),
    "setToken": (()=>setToken),
    "setUserId": (()=>setUserId)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$js$2d$cookie__$5b$external$5d$__$28$js$2d$cookie$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/js-cookie [external] (js-cookie, esm_import)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$js$2d$cookie__$5b$external$5d$__$28$js$2d$cookie$2c$__esm_import$29$__
]);
([__TURBOPACK__imported__module__$5b$externals$5d2f$js$2d$cookie__$5b$external$5d$__$28$js$2d$cookie$2c$__esm_import$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__);
;
const TOKEN_KEY = 'token';
const REFRESH_TOKEN_KEY = 'refreshToken';
const USER_ID_KEY = 'userId';
const SESSION_ID_KEY = 'sessionId';
const CART_ID_KEY = 'cartId';
const ROLE = 'role';
const setToken = (token)=>__TURBOPACK__imported__module__$5b$externals$5d2f$js$2d$cookie__$5b$external$5d$__$28$js$2d$cookie$2c$__esm_import$29$__["default"].set(TOKEN_KEY, token, {
        expires: 7,
        secure: true,
        sameSite: 'Strict'
    });
const getToken = ()=>__TURBOPACK__imported__module__$5b$externals$5d2f$js$2d$cookie__$5b$external$5d$__$28$js$2d$cookie$2c$__esm_import$29$__["default"].get(TOKEN_KEY);
const removeToken = ()=>__TURBOPACK__imported__module__$5b$externals$5d2f$js$2d$cookie__$5b$external$5d$__$28$js$2d$cookie$2c$__esm_import$29$__["default"].remove(TOKEN_KEY);
const setRefreshToken = (token)=>__TURBOPACK__imported__module__$5b$externals$5d2f$js$2d$cookie__$5b$external$5d$__$28$js$2d$cookie$2c$__esm_import$29$__["default"].set(REFRESH_TOKEN_KEY, token, {
        expires: 7,
        secure: true,
        sameSite: 'Strict'
    });
const getRefreshToken = ()=>__TURBOPACK__imported__module__$5b$externals$5d2f$js$2d$cookie__$5b$external$5d$__$28$js$2d$cookie$2c$__esm_import$29$__["default"].get(REFRESH_TOKEN_KEY);
const removeRefreshToken = ()=>__TURBOPACK__imported__module__$5b$externals$5d2f$js$2d$cookie__$5b$external$5d$__$28$js$2d$cookie$2c$__esm_import$29$__["default"].remove(REFRESH_TOKEN_KEY);
const setUserId = (userId)=>__TURBOPACK__imported__module__$5b$externals$5d2f$js$2d$cookie__$5b$external$5d$__$28$js$2d$cookie$2c$__esm_import$29$__["default"].set(USER_ID_KEY, userId, {
        expires: 7,
        secure: true,
        sameSite: 'Strict'
    });
const getUserId = ()=>__TURBOPACK__imported__module__$5b$externals$5d2f$js$2d$cookie__$5b$external$5d$__$28$js$2d$cookie$2c$__esm_import$29$__["default"].get(USER_ID_KEY);
const removeUserId = ()=>__TURBOPACK__imported__module__$5b$externals$5d2f$js$2d$cookie__$5b$external$5d$__$28$js$2d$cookie$2c$__esm_import$29$__["default"].remove(USER_ID_KEY);
const setSessionId = (sessionId)=>__TURBOPACK__imported__module__$5b$externals$5d2f$js$2d$cookie__$5b$external$5d$__$28$js$2d$cookie$2c$__esm_import$29$__["default"].set(SESSION_ID_KEY, sessionId, {
        expires: 7,
        secure: false,
        sameSite: 'Strict'
    });
const getSessionId = ()=>__TURBOPACK__imported__module__$5b$externals$5d2f$js$2d$cookie__$5b$external$5d$__$28$js$2d$cookie$2c$__esm_import$29$__["default"].get(SESSION_ID_KEY);
const removeSessionId = ()=>__TURBOPACK__imported__module__$5b$externals$5d2f$js$2d$cookie__$5b$external$5d$__$28$js$2d$cookie$2c$__esm_import$29$__["default"].remove(SESSION_ID_KEY);
const setCartId = (cartId)=>__TURBOPACK__imported__module__$5b$externals$5d2f$js$2d$cookie__$5b$external$5d$__$28$js$2d$cookie$2c$__esm_import$29$__["default"].set(CART_ID_KEY, cartId, {
        expires: 7,
        secure: false,
        sameSite: 'Strict'
    });
const getCartId = ()=>__TURBOPACK__imported__module__$5b$externals$5d2f$js$2d$cookie__$5b$external$5d$__$28$js$2d$cookie$2c$__esm_import$29$__["default"].get(CART_ID_KEY);
const removeCartId = ()=>__TURBOPACK__imported__module__$5b$externals$5d2f$js$2d$cookie__$5b$external$5d$__$28$js$2d$cookie$2c$__esm_import$29$__["default"].remove(CART_ID_KEY);
const setRole = (role)=>__TURBOPACK__imported__module__$5b$externals$5d2f$js$2d$cookie__$5b$external$5d$__$28$js$2d$cookie$2c$__esm_import$29$__["default"].set(ROLE, role, {
        expires: 7,
        secure: false,
        sameSite: 'Strict'
    });
const getRole = ()=>__TURBOPACK__imported__module__$5b$externals$5d2f$js$2d$cookie__$5b$external$5d$__$28$js$2d$cookie$2c$__esm_import$29$__["default"].get(ROLE);
const removeRole = ()=>__TURBOPACK__imported__module__$5b$externals$5d2f$js$2d$cookie__$5b$external$5d$__$28$js$2d$cookie$2c$__esm_import$29$__["default"].remove(ROLE);
const clearAllCookies = ()=>{
    __TURBOPACK__imported__module__$5b$externals$5d2f$js$2d$cookie__$5b$external$5d$__$28$js$2d$cookie$2c$__esm_import$29$__["default"].remove(TOKEN_KEY);
    __TURBOPACK__imported__module__$5b$externals$5d2f$js$2d$cookie__$5b$external$5d$__$28$js$2d$cookie$2c$__esm_import$29$__["default"].remove(REFRESH_TOKEN_KEY);
    __TURBOPACK__imported__module__$5b$externals$5d2f$js$2d$cookie__$5b$external$5d$__$28$js$2d$cookie$2c$__esm_import$29$__["default"].remove(USER_ID_KEY);
    __TURBOPACK__imported__module__$5b$externals$5d2f$js$2d$cookie__$5b$external$5d$__$28$js$2d$cookie$2c$__esm_import$29$__["default"].remove(SESSION_ID_KEY);
    __TURBOPACK__imported__module__$5b$externals$5d2f$js$2d$cookie__$5b$external$5d$__$28$js$2d$cookie$2c$__esm_import$29$__["default"].remove(CART_ID_KEY);
    __TURBOPACK__imported__module__$5b$externals$5d2f$js$2d$cookie__$5b$external$5d$__$28$js$2d$cookie$2c$__esm_import$29$__["default"].remove(ROLE);
};
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/utils/apiClient.js [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s({
    "addressApi": (()=>addressApi),
    "adminApi": (()=>adminApi),
    "apiClient": (()=>apiClient),
    "carrierApi": (()=>carrierApi),
    "cartApi": (()=>cartApi),
    "categoriesApi": (()=>categoriesApi),
    "colorsApi": (()=>colorsApi),
    "couponApi": (()=>couponApi),
    "favoriteApi": (()=>favoriteApi),
    "indexApi": (()=>indexApi),
    "invoiceApi": (()=>invoiceApi),
    "orderApi": (()=>orderApi),
    "orderTrackingApi": (()=>orderTrackingApi),
    "paymentApi": (()=>paymentApi),
    "productApi": (()=>productApi),
    "productsByCategoryApi": (()=>productsByCategoryApi),
    "revenueApi": (()=>revenueApi),
    "reviewApi": (()=>reviewApi),
    "stockApi": (()=>stockApi),
    "userApi": (()=>userApi)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$axios__$5b$external$5d$__$28$axios$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/axios [external] (axios, esm_import)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$storage$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/storage.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$slices$2f$userSlice$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/slices/userSlice.js [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$axios__$5b$external$5d$__$28$axios$2c$__esm_import$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$storage$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$slices$2f$userSlice$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__
]);
([__TURBOPACK__imported__module__$5b$externals$5d2f$axios__$5b$external$5d$__$28$axios$2c$__esm_import$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$storage$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$slices$2f$userSlice$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__);
;
;
;
// https://kltn-1a.onrender.com hihi, http://localhost:5551/v1/api/, https://c918-118-71-16-139.ngrok-free.app
const apiClient = __TURBOPACK__imported__module__$5b$externals$5d2f$axios__$5b$external$5d$__$28$axios$2c$__esm_import$29$__["default"].create({
    baseURL: 'http://localhost:5551/v1/api/',
    headers: {
        'Content-Type': 'application/json',
        'ngrok-skip-browser-warning': 'true'
    },
    withCredentials: true
});
// **Request Interceptor**
apiClient.interceptors.request.use(async (config)=>{
    try {
        // Retrieve access token and session ID from cookies
        const accessToken = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$storage$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["getToken"])();
        const sessionId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$storage$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["getSessionId"])();
        // Add Authorization header if token exists
        if (accessToken) {
            config.headers['Authorization'] = `Bearer ${accessToken}`;
        }
        // Add session ID header if session ID exists
        if (sessionId) {
            config.headers['x-session-id'] = sessionId; // Add session ID to headers
        }
    } catch (error) {
        console.error('Error adding headers:', error);
    }
    return config;
}, (error)=>Promise.reject(error));
const MAX_RETRY_COUNT = 5; // Giới hạn số lần retry
// Hàm delay với backoff logic
const delay = (ms)=>new Promise((resolve)=>setTimeout(resolve, ms));
// Interceptor xử lý response
apiClient.interceptors.response.use((response)=>{
    console.log('Response received:', response);
    // Lưu session ID nếu có trong response headers
    const sessionId = response.headers?.['x-session-id'];
    if (sessionId) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$storage$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["setSessionId"])(sessionId); // Lưu vào cookie hoặc storage
        console.log('Session ID saved from response:', sessionId);
    }
    return response;
}, async (error)=>{
    const originalRequest = error.config;
    console.log('Error response:', error.response || 'No response available');
    // Thêm thuộc tính _retryCount nếu chưa có
    if (!originalRequest._retryCount) {
        originalRequest._retryCount = 0;
    }
    // Kiểm tra lỗi từ Refresh Token
    if (error.response?.status === 403 && error.response?.data?.message === "Refresh Token không tồn tại") {
        console.log('Refresh token does not exist. Logging out...');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$storage$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["clearAllCookies"])(); // Xóa tất cả cookies
        store.dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$slices$2f$userSlice$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["resetAuthState"])()); // Reset trạng thái auth
        return new Promise(()=>{}); // Trả về Promise không lỗi
    }
    // Dừng retry nếu là request tới /users/refresh-token
    if (originalRequest.url.includes('/users/refresh-token')) {
        console.log('Refresh token request failed. Stopping retries.');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$storage$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["removeSessionId"])(); // Xóa session ID
        store.dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$slices$2f$userSlice$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["resetAuthState"])()); // Reset trạng thái auth
        return new Promise(()=>{}); // Trả về Promise không lỗi
    }
    // Nếu lỗi 403 và chưa đạt giới hạn retry
    if (error.response?.status === 403 && originalRequest._retryCount < MAX_RETRY_COUNT) {
        originalRequest._retryCount += 1; // Tăng số lần retry
        console.log(`Retrying request (${originalRequest._retryCount}/${MAX_RETRY_COUNT})...`);
        try {
            // Lấy token mới
            const newAccessToken = await userApi.refreshToken();
            // Gắn token mới vào header
            originalRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
            return apiClient(originalRequest); // Retry request
        } catch (refreshError) {
            console.log('Error during token refresh:', refreshError);
            return new Promise(()=>{}); // Trả về Promise không lỗi
        }
    }
    // Nếu vượt quá số lần retry
    if (originalRequest._retryCount >= MAX_RETRY_COUNT) {
        console.log('Maximum retry attempts reached.');
        return new Promise(()=>{}); // Trả về Promise không lỗi
    }
    return Promise.reject(error);
});
// **User API**
const userApi = {
    // Register user
    register: async (userData)=>{
        try {
            const response = await apiClient.post('users/register', userData);
            return response.data;
        } catch (error) {
            throw error;
        }
    },
    resend_otp: async (email)=>{
        try {
            const response = await apiClient.post('users/resend-otp', {
                email
            });
            return response.data;
        } catch (error) {
            throw error;
        }
    },
    // Verify OTP for registration
    verifyOtp: async (otpData)=>{
        try {
            const response = await apiClient.post('users/verify-otp', otpData);
            return response.data;
        } catch (error) {
            throw error;
        }
    },
    // Login user
    login: async (credentials)=>{
        try {
            const response = await apiClient.post('users/login', credentials);
            const { accessToken, refreshToken, user } = response.data.data;
            if (accessToken && refreshToken) {
                // Lấy cart_id trực tiếp từ user object
                const cart_id = user.cart_id;
                // Lưu các thông tin cần thiết
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$storage$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["setRole"])('');
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$storage$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["setToken"])(accessToken);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$storage$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["setRefreshToken"])(refreshToken);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$storage$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["removeCartId"])(); // Xóa cart ID cũ nếu có
            // setCartId(cart_id); // Lưu cart ID mới
            }
            // Kiểm tra và lưu session ID từ headers
            const sessionId = response.headers['x-session-id'];
            if (sessionId) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$storage$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["setSessionId"])(sessionId);
                console.log('Session ID received and saved during login:', sessionId);
            }
            return response.data;
        } catch (error) {
            throw error;
        }
    },
    // Logout user
    logout: async ()=>{
        try {
            const refreshToken = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$storage$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["getRefreshToken"])();
            const userId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$storage$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["getUserId"])();
            await apiClient.post('users/logout', {
                refreshToken,
                userId
            });
            // Clear all stored tokens and session ID
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$storage$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["removeSessionId"])();
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$storage$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["removeRefreshToken"])();
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$storage$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["removeUserId"])();
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$storage$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["removeSessionId"])();
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$storage$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["removeToken"])();
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$storage$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["removeCartId"])();
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$storage$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["removeRole"])();
            return {
                message: 'Logout successful'
            };
        } catch (error) {
            throw error.response?.data || 'Logout failed';
        }
    },
    // Get user profile
    getUserProfile: async ()=>{
        try {
            const response = await apiClient.get('users/profile');
            return response.data.data;
        } catch (error) {
            throw error.response?.data || 'Failed to fetch user profile';
        }
    },
    // Refresh token
    refreshToken: async ()=>{
        try {
            const get_refreshToken = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$storage$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["getRefreshToken"])();
            const get_userId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$storage$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["getUserId"])();
            const response = await apiClient.post('users/refresh-token', {
                get_refreshToken
            });
            const { accessToken, refreshToken: newRefreshToken } = response.data.data;
            if (accessToken && newRefreshToken) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$storage$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["setToken"])(accessToken); // Update access token
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$storage$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["setRefreshToken"])(newRefreshToken); // Update refresh token
            }
            return accessToken; // Return the new access token
        } catch (error) {
            throw new Error('Token refresh failed. Please log in again.');
        }
    },
    // Cập nhật thông tin profile người dùng
    updateUserProfile: async (userData)=>{
        try {
            const response = await apiClient.put('users/profile', userData);
            return response.data;
        } catch (error) {
            throw error.response?.data || 'Không thể cập nhật thông tin người dùng.';
        }
    },
    /**
 * Request password reset OTP
 * @param {Object} data - Request data
 * @param {string} data.email - User's email address
 * @returns {Promise<Object>} - API response
 */ forgotPassword: async (data)=>{
        try {
            const response = await apiClient.post('users/forgot-password', data);
            return response.data;
        } catch (error) {
            throw error.response?.data || 'Không thể gửi yêu cầu đặt lại mật khẩu.';
        }
    },
    /**
     * Reset password using OTP
     * @param {Object} data - Reset password data
     * @param {string} data.email - User's email
     * @param {string} data.otp - One-time password
     * @param {string} data.newPassword - New password
     * @returns {Promise<Object>} - API response
     */ resetPassword: async (data)=>{
        try {
            const response = await apiClient.post('users/reset-password', data);
            return response.data;
        } catch (error) {
            throw error.response?.data || 'Không thể đặt lại mật khẩu.';
        }
    }
};
const adminApi = {
    /**
     * Đăng nhập admin
     * @param {Object} credentials - Dữ liệu đăng nhập (email và password)
     * @returns {Promise<Object>} - Phản hồi từ API
     */ loginForAdmin: async (credentials)=>{
        try {
            const response = await apiClient.post('users/login-admin', credentials);
            // Lấy token và vai trò từ phản hồi
            const { accessToken, refreshToken, role } = response.data.data;
            // Lưu token và role
            if (accessToken && refreshToken) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$storage$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["setToken"])(accessToken);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$storage$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["setRefreshToken"])(refreshToken);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$storage$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["setRole"])(role);
            }
            // Lưu session ID nếu có trong header
            const sessionId = response.headers['x-session-id'];
            if (sessionId) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$storage$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["setSessionId"])(sessionId);
            }
            return {
                user: response.data.user,
                role
            }; // Trả về thông tin người dùng và vai trò
        } catch (error) {
            throw error.response?.data || error.message;
        }
    },
    // Get all users (Admin only) 
    getAllUsers: async (params = {})=>{
        try {
            const { page = 1, limit = 10, email, phone, name } = params;
            const query = new URLSearchParams({
                page: String(page),
                limit: String(limit)
            });
            if (email) query.append('email', email);
            if (phone) query.append('phone', phone);
            if (name) query.append('name', name);
            const response = await apiClient.get(`users/admin/users?${query}`);
            return response.data;
        } catch (error) {
            throw error.response?.data || 'Failed to fetch users list';
        }
    },
    // Create new user (Admin only)
    createUser: async (userData)=>{
        try {
            const response = await apiClient.post('users/admin/users', userData);
            return response.data;
        } catch (error) {
            throw error.response?.data || 'Failed to create user';
        }
    },
    // Update user (Admin only) 
    updateUser: async (userId, userData)=>{
        try {
            const response = await apiClient.put(`users/admin/users/${userId}`, userData);
            return response.data;
        } catch (error) {
            throw error.response?.data || 'Failed to update user';
        }
    },
    deleteUser: async (userId)=>{
        try {
            const response = await apiClient.delete(`users/admin/users/${userId}`);
            return response.data;
        } catch (error) {
            throw error.response?.data || 'Failed to delete user';
        }
    }
};
// **Product API**
const productApi = {
    // Create a new product
    createProduct: async (productData)=>{
        const response = await apiClient.post('products/', productData);
        return response.data;
    },
    // Get all products
    getProducts: async ()=>{
        const response = await apiClient.get('products');
        return response.data.data;
    },
    // Get product details by slug
    getProductDetail: async (slug)=>{
        const response = await apiClient.get(`products/${slug}`);
        return response.data.data;
    },
    // Update product by slug
    updateProduct: async (slug, productData)=>{
        const response = await apiClient.put(`products/${slug}`, productData);
        return response.data;
    },
    // Delete product by slug
    deleteProduct: async (slug)=>{
        const response = await apiClient.delete(`products/${slug}`);
        return response.data;
    },
    // Get products with pagination
    getProductsByPagination: async (params = {})=>{
        try {
            const { page = 1, limit = 20, name, categories, colorIds, sizes, priceRange, sort = 'newest' } = params;
            // Xây dựng query parameters
            const queryParams = new URLSearchParams({
                page: String(page),
                limit: String(limit)
            });
            // Thêm các filter tùy chọn
            if (name) queryParams.append('name', name);
            if (categories) queryParams.append('categories', categories);
            if (colorIds) queryParams.append('colors', colorIds);
            if (sizes) queryParams.append('sizes', sizes);
            if (priceRange) queryParams.append('priceRange', priceRange);
            if (sort) queryParams.append('sort', sort);
            console.log('API call to:', `products/pagination?${queryParams.toString()}`);
            const response = await apiClient.get(`products/pagination?${queryParams.toString()}`);
            console.log('API response:', response.data);
            return response.data;
        } catch (error) {
            console.error('Error fetching products:', error);
            throw error.response?.data || 'Failed to fetch products.';
        }
    },
    // Get new products with pagination
    getNewProductsByPagination: async (page, limit, sort, priceRange, colorIds)=>{
        try {
            const query = new URLSearchParams({
                page,
                limit,
                sort,
                priceRange: priceRange || '',
                colorIds: colorIds || ''
            }).toString();
            const response = await apiClient.get(`products/new?${query}`);
            return response.data;
        } catch (error) {
            console.error('Error fetching new products:', error);
            throw error.response?.data || 'Failed to fetch new products.';
        }
    },
    // Get featured products with pagination
    getFeaturedProductsByPagination: async (page, limit, sort, priceRange, colorIds)=>{
        try {
            const query = new URLSearchParams({
                page,
                limit,
                sort,
                priceRange: priceRange || '',
                colorIds: colorIds || ''
            }).toString();
            const response = await apiClient.get(`products/featured?${query}`);
            return response.data;
        } catch (error) {
            console.error('Error fetching featured products:', error);
            throw error.response?.data || 'Failed to fetch featured products.';
        }
    },
    searchProductsByNameAndColor: async (keyword, options = {})=>{
        try {
            const { page = 1, limit = 20, sort = 'newest' } = options;
            const query = new URLSearchParams({
                keyword: keyword || '',
                page: String(page),
                limit: String(limit),
                sort
            }).toString();
            const response = await apiClient.get(`products/search/name-color?${query}`);
            return response.data;
        } catch (error) {
            console.error('Error searching products:', error);
            throw error.response?.data || 'Không thể tìm kiếm sản phẩm.';
        }
    }
};
const cartApi = {
    // Tạo giỏ hàng cho khách
    createCartForGuest: async (cartData)=>{
        try {
            const response = await apiClient.post('carts/guest', cartData);
            const { id } = response.data.data;
            if (id) {
                console.log('Cart ID:', id);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$storage$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["setCartId"])(id); // Lưu cart ID vào cookie hoặc storage
            }
            return response.data;
        } catch (error) {
            throw error.response?.data || 'Failed to create cart for guest.';
        }
    },
    // Tạo hoặc lấy giỏ hàng cho người dùng đã đăng nhập
    createCartForUser: async ()=>{
        try {
            const response = await apiClient.post('carts/user');
            const { id } = response.data.data;
            if (id) {
                console.log('Cart ID:', id);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$storage$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["setCartId"])(id); // Lưu cart ID vào cookie hoặc storage
            }
            return response.data;
        } catch (error) {
            throw error.response?.data || 'Failed to create or retrieve cart for user.';
        }
    },
    // Lấy chi tiết giỏ hàng theo ID
    getCartById: async (cartId)=>{
        try {
            const response = await apiClient.get(`carts/${cartId}`);
            return response.data;
        } catch (error) {
            throw error.response?.data || 'Failed to fetch cart details.';
        }
    },
    // Thêm sản phẩm vào giỏ hàng
    addItemToCart: async (cartId, itemData)=>{
        try {
            const response = await apiClient.post(`carts/${cartId}/items`, itemData);
            return response.data;
        } catch (error) {
            throw error.response?.data || 'Failed to add item to cart.';
        }
    },
    // Xóa sản phẩm khỏi giỏ hàng
    removeCartItem: async (itemId)=>{
        try {
            const response = await apiClient.delete(`carts/items/${itemId}`);
            return response.data;
        } catch (error) {
            throw error.response?.data || 'Failed to remove item from cart.';
        }
    },
    // Lấy tất cả sản phẩm trong giỏ hàng
    getCartItems: async (cartId)=>{
        try {
            const response = await apiClient.get(`carts/${cartId}/items`);
            return response.data;
        } catch (error) {
            throw error.response?.data || 'Failed to fetch cart items.';
        }
    },
    // Cập nhật số lượng sản phẩm trong giỏ hàng
    updateCartItemQuantity: async (itemId, quantity)=>{
        try {
            const response = await apiClient.put(`carts/item/${itemId}`, {
                quantity
            });
            return response.data;
        } catch (error) {
            throw error.response?.data || 'Failed to update cart item quantity.';
        }
    }
};
const reviewApi = {
    // Tạo mới một review
    createReview: async (reviewData)=>{
        try {
            const response = await apiClient.post('reviews/', reviewData);
            return response.data;
        } catch (error) {
            throw error.response?.data || 'Failed to create review.';
        }
    },
    // Lấy danh sách review của một sản phẩm
    getReviewsByProduct: async (productId, page, limit)=>{
        try {
            const response = await apiClient.get(`reviews/product/${productId}?page=${page}&limit=${limit}`);
            return response.data;
        } catch (error) {
            throw error.response?.data || 'Failed to fetch reviews.';
        }
    },
    // Lấy điểm trung bình của một sản phẩm
    getAverageRating: async (productId)=>{
        try {
            const response = await apiClient.get(`reviews/product/${productId}/average-rating`);
            return response.data;
        } catch (error) {
            throw error.response?.data || 'Failed to fetch average rating.';
        }
    },
    // Xóa một review
    deleteReview: async (reviewId)=>{
        try {
            const response = await apiClient.delete(`reviews/${reviewId}`);
            return response.data;
        } catch (error) {
            throw error.response?.data || 'Failed to delete review.';
        }
    }
};
const productsByCategoryApi = {
    // Fetch all products by category
    getProductsByCategory: async (categoryId, page, limit, sort, priceRange, colorIds)=>{
        try {
            const query = new URLSearchParams({
                page,
                limit,
                sort,
                priceRange: priceRange || '',
                colorIds: colorIds || ''
            }).toString();
            const response = await apiClient.get(`products-by-category/${categoryId}?${query}`);
            return response.data;
        } catch (error) {
            throw error.response?.data || 'Failed to fetch products by category.';
        }
    },
    // Cập nhật danh mục cho sản phẩm
    updateProductCategories: async (productId, categoryIds)=>{
        try {
            // Validate input
            if (!Array.isArray(categoryIds)) {
                throw new Error('categoryIds phải là một mảng');
            }
            if (categoryIds.length === 0) {
                throw new Error('Phải có ít nhất một danh mục');
            }
            const response = await apiClient.put(`products-by-category/product/${productId}/categories`, {
                categoryIds
            });
            return response.data;
        } catch (error) {
            // Xử lý các loại lỗi cụ thể
            if (error.response) {
                switch(error.response.status){
                    case 400:
                        throw new Error(error.response.data.message || 'Dữ liệu đầu vào không hợp lệ');
                    case 404:
                        throw new Error(error.response.data.message || 'Không tìm thấy sản phẩm hoặc danh mục');
                    case 500:
                        throw new Error(error.response.data.message || 'Lỗi máy chủ khi cập nhật danh mục sản phẩm');
                    default:
                        throw new Error(error.response.data.message || 'Lỗi không xác định');
                }
            }
            throw error;
        }
    }
};
const colorsApi = {
    // Fetch all colors
    getColors: async ()=>{
        try {
            const response = await apiClient.get('colors');
            return response.data.data;
        } catch (error) {
            throw error.response?.data || 'Failed to fetch colors.';
        }
    }
};
const indexApi = {
    getNewProducts: async (page, limit)=>{
        const response = await apiClient.get('/products/news', {
            params: {
                page,
                limit
            }
        });
        return response.data;
    },
    getFeaturedProducts: async (page, limit)=>{
        const response = await apiClient.get('/products/featureds', {
            params: {
                page,
                limit
            }
        });
        return response.data;
    }
};
const orderApi = {
    /**
     * Create a new order
     * @param {Object} orderData - Order details
     * @returns {Promise<Object>} - Created order response
     */ createOrder: async (orderData)=>{
        try {
            const response = await apiClient.post('orders', orderData);
            return response.data;
        } catch (error) {
            throw error.response?.data || 'Failed to create order.';
        }
    },
    /**
     * Get an order by ID
     * @param {number} orderId - ID of the order
     * @returns {Promise<Object>} - Order details
     */ getOrderById: async (orderId)=>{
        try {
            const response = await apiClient.get(`orders/${orderId}`);
            return response.data;
        } catch (error) {
            throw error.response?.data || 'Failed to fetch order details.';
        }
    },
    /**
     * Update order status
     * @param {number} orderId - ID of the order
     * @param {string} status - New status ('pending', 'completed', 'canceled', etc.)
     * @returns {Promise<Object>} - Response status
     */ updateOrderStatus: async (orderId, status)=>{
        try {
            const response = await apiClient.patch(`orders/${orderId}/status`, {
                status
            });
            return response.data;
        } catch (error) {
            throw error.response?.data || 'Failed to update order status.';
        }
    },
    /**
     * Cancel expired orders
     * @returns {Promise<Object>} - Response status
     */ cancelExpiredOrders: async ()=>{
        try {
            const response = await apiClient.post('orders/cancel-expired');
            return response.data;
        } catch (error) {
            throw error.response?.data || 'Failed to cancel expired orders.';
        }
    },
    /**
     * Complete an order
     * @param {number} orderId - ID of the order
     * @returns {Promise<Object>} - Response status
     */ completeOrder: async (orderId)=>{
        try {
            const response = await apiClient.post(`orders/${orderId}/complete`);
            return response.data;
        } catch (error) {
            throw error.response?.data || 'Failed to complete order.';
        }
    },
    /**
     * Delete an order by ID
     * @param {number} orderId - ID of the order
     * @returns {Promise<Object>} - Response status
     */ deleteOrder: async (orderId)=>{
        try {
            const response = await apiClient.delete(`orders/${orderId}`);
            return response.data;
        } catch (error) {
            throw error.response?.data || 'Failed to delete order.';
        }
    },
    /**
     * Get orders by user with pagination
     * @param {Object} params - Query parameters
     * @param {number} params.page - Page number
     * @param {number} params.limit - Items per page
     * @returns {Promise<Object>} - Paginated user orders
     */ getOrdersByUser: async ({ page = 1, limit = 10 })=>{
        try {
            const response = await apiClient.get(`orders/user`, {
                params: {
                    page,
                    limit
                }
            });
            return response.data;
        } catch (error) {
            throw error.response?.data || 'Không thể lấy danh sách đơn hàng.';
        }
    },
    getAllOrders: async ({ page = 1, limit = 10, status, startDate, endDate, orderId, customerName, customerEmail, customerPhone// Thêm filter số điện thoại
     })=>{
        try {
            // Tạo query params
            const params = new URLSearchParams({
                page: String(page),
                limit: String(limit)
            });
            // Thêm các filter hiện tại
            if (status) {
                params.append('status', status);
            }
            if (startDate) {
                params.append('startDate', startDate);
            }
            if (endDate) {
                params.append('endDate', endDate);
            }
            // Thêm các filter mới
            if (orderId) {
                params.append('orderId', orderId);
            }
            if (customerName) {
                params.append('customerName', customerName);
            }
            if (customerEmail) {
                params.append('customerEmail', customerEmail);
            }
            if (customerPhone) {
                params.append('customerPhone', customerPhone);
            }
            const response = await apiClient.get(`orders?${params}`);
            return response.data;
        } catch (error) {
            throw error.response?.data || 'Không thể lấy danh sách đơn hàng.';
        }
    },
    /**
 * Gửi email xác nhận đơn hàng
 * @param {Object} data - Dữ liệu đơn hàng
 * @param {Array} data.checkoutItems - Danh sách sản phẩm đặt hàng
 * @param {Object} data.orderDetails - Chi tiết đơn hàng
 * @returns {Promise<Object>} - Kết quả gửi email
 */ sendOrderConfirmation: async (data)=>{
        try {
            const response = await apiClient.post('orders/send-order-confirmation', data);
            return response.data;
        } catch (error) {
            throw error.response?.data || 'Không thể gửi email xác nhận đơn hàng.';
        }
    }
};
const paymentApi = {
    /**
     * Tạo thanh toán qua PayOS
     * @param {Object} paymentData - Dữ liệu thanh toán
     * @returns {Promise<Object>} - Thông tin thanh toán
     */ createPayOSPayment: async (paymentData)=>{
        try {
            const response = await apiClient.post('payments/payos', paymentData);
            return response.data;
        } catch (error) {
            throw error.response?.data || 'Không thể tạo thanh toán PayOS.';
        }
    },
    /**
     * Tạo thanh toán COD (Cash On Delivery)
     * @param {Object} codData - Dữ liệu thanh toán COD
     * @returns {Promise<Object>} - Thông tin thanh toán COD
     */ createCODPayment: async (codData)=>{
        try {
            const response = await apiClient.post('payments/cod', codData);
            return response.data;
        } catch (error) {
            throw error.response?.data || 'Không thể tạo thanh toán COD.';
        }
    },
    updatePaymentStatus: async (statusData)=>{
        try {
            const response = await apiClient.post('payments/payos-webhook', statusData);
            return response.data;
        } catch (error) {
            throw error.response?.data || 'Không thể cập nhật trạng thái thanh toán.';
        }
    },
    /**
     * Cập nhật trạng thái thanh toán
     * @param {Object} statusData - Dữ liệu cập nhật trạng thái
     * @param {string} statusData.orderId - ID đơn hàng
     * @param {string} statusData.paymentMethod - Phương thức thanh toán ('payos' hoặc 'cash_on_delivery')
     * @param {string} statusData.paymentStatus - Trạng thái thanh toán ('pending', 'processing', 'paid', 'cancelled')
     * @returns {Promise<Object>} - Kết quả cập nhật
     */ updatePaymentMethodStatus: async (statusData)=>{
        try {
            const response = await apiClient.put('payments/update-status', statusData);
            return response.data;
        } catch (error) {
            throw error.response?.data || 'Không thể cập nhật trạng thái thanh toán.';
        }
    }
};
const stockApi = {
    // Lấy thông tin tồn kho
    getProductStocks: async ()=>{
        try {
            const response = await apiClient.get('product-stocks');
            return response.data;
        } catch (error) {
            throw error.response?.data || 'Failed to fetch product stocks.';
        }
    },
    updateStock: async (stockId, stockData)=>{
        try {
            const response = await apiClient.put(`product-stocks/${stockId}`, stockData);
            return response.data;
        } catch (error) {
            throw error.response?.data || 'Failed to update stock.';
        }
    }
};
const carrierApi = {
    // Tạo nhà vận chuyển mới
    createCarrier: async (carrierData)=>{
        try {
            const response = await apiClient.post('carriers', carrierData);
            return response.data;
        } catch (error) {
            throw error.response?.data || 'Failed to create carrier.';
        }
    },
    // Lấy danh sách nhà vận chuyển
    getCarriers: async (query = {})=>{
        try {
            const { page = 1, limit = 10 } = query;
            const queryString = new URLSearchParams({
                page,
                limit
            }).toString();
            const response = await apiClient.get(`carriers?${queryString}`);
            return response.data;
        } catch (error) {
            throw error.response?.data || 'Failed to fetch carriers.';
        }
    },
    // Lấy chi tiết nhà vận chuyển
    getCarrierById: async (id)=>{
        try {
            const response = await apiClient.get(`carriers/${id}`);
            return response.data;
        } catch (error) {
            throw error.response?.data || 'Failed to fetch carrier details.';
        }
    },
    // Cập nhật thông tin nhà vận chuyển
    updateCarrier: async (id, carrierData)=>{
        try {
            const response = await apiClient.put(`carriers/${id}`, carrierData);
            return response.data;
        } catch (error) {
            throw error.response?.data || 'Failed to update carrier.';
        }
    },
    // Xóa nhà vận chuyển
    deleteCarrier: async (id)=>{
        try {
            const response = await apiClient.delete(`carriers/${id}`);
            return response.data;
        } catch (error) {
            throw error.response?.data || 'Failed to delete carrier.';
        }
    },
    // Cập nhật trạng thái nhà vận chuyển
    updateCarrierStatus: async (id, status)=>{
        try {
            const response = await apiClient.patch(`carriers/${id}/status`, {
                status
            });
            return response.data;
        } catch (error) {
            throw error.response?.data || 'Failed to update carrier status.';
        }
    }
};
const addressApi = {
    // Lấy danh sách địa chỉ của người dùng
    getAddresses: async ()=>{
        try {
            const response = await apiClient.get('addresses');
            return response.data;
        } catch (error) {
            throw error.response?.data || 'Không thể lấy danh sách địa chỉ.';
        }
    },
    // Tạo địa chỉ mới
    createAddress: async (addressData)=>{
        try {
            const response = await apiClient.post('addresses', addressData);
            return response.data;
        } catch (error) {
            throw error.response?.data || 'Không thể tạo địa chỉ mới.';
        }
    },
    // Cập nhật địa chỉ
    updateAddress: async (addressId, addressData)=>{
        try {
            const response = await apiClient.put(`addresses/${addressId}`, addressData);
            return response.data;
        } catch (error) {
            throw error.response?.data || 'Không thể cập nhật địa chỉ.';
        }
    },
    // Xóa địa chỉ
    deleteAddress: async (addressId)=>{
        try {
            const response = await apiClient.delete(`addresses/${addressId}`);
            return response.data;
        } catch (error) {
            throw error.response?.data || 'Không thể xóa địa chỉ.';
        }
    },
    // Đặt địa chỉ làm mặc định
    setDefaultAddress: async (addressId)=>{
        try {
            const response = await apiClient.put(`addresses/${addressId}/default`);
            return response.data;
        } catch (error) {
            throw error.response?.data || 'Không thể đặt địa chỉ mặc định.';
        }
    }
};
const favoriteApi = {
    // Kiểm tra trạng thái yêu thích của sản phẩm
    checkFavoriteStatus: async (productId)=>{
        try {
            const response = await apiClient.get(`favorites/products/${productId}/favorite`);
            return response.data;
        } catch (error) {
            throw error.response?.data || 'Không thể kiểm tra trạng thái yêu thích.';
        }
    },
    // Lấy danh sách sản phẩm yêu thích
    getFavorites: async (page = 1, limit = 10)=>{
        try {
            const response = await apiClient.get('favorites/favorites', {
                params: {
                    page,
                    limit
                }
            });
            return response.data;
        } catch (error) {
            throw error.response?.data || 'Không thể lấy danh sách yêu thích.';
        }
    },
    // Thêm sản phẩm vào danh sách yêu thích
    addToFavorite: async (productId)=>{
        try {
            const response = await apiClient.post(`favorites/products/${productId}/favorite`);
            return response.data;
        } catch (error) {
            throw error.response?.data || 'Không thể thêm vào yêu thích.';
        }
    },
    // Xóa sản phẩm khỏi danh sách yêu thích
    removeFromFavorite: async (productId)=>{
        try {
            const response = await apiClient.delete(`favorites/products/${productId}/favorite`);
            return response.data;
        } catch (error) {
            throw error.response?.data || 'Không thể xóa khỏi yêu thích.';
        }
    },
    // Chuyển danh sách yêu thích từ session sang tài khoản
    transferFavorites: async ()=>{
        try {
            const response = await apiClient.post('favorites/favorites/transfer');
            return response.data;
        } catch (error) {
            throw error.response?.data || 'Không thể chuyển danh sách yêu thích.';
        }
    }
};
const orderTrackingApi = {
    /**
     * Tra cứu thông tin đơn hàng
     * @param {string} orderId - Mã đơn hàng
     * @param {string} identifier - Email hoặc số điện thoại người đặt
     * @returns {Promise<Object>} - Thông tin đơn hàng
     */ trackOrder: async (orderId, identifier)=>{
        try {
            const response = await apiClient.get(`order-tracking/${orderId}`, {
                params: {
                    identifier
                }
            });
            return response.data;
        } catch (error) {
            throw error.response?.data || 'Không thể tra cứu thông tin đơn hàng.';
        }
    }
};
const couponApi = {
    // Tạo mã giảm giá mới (Admin)
    createCoupon: async (couponData)=>{
        try {
            const response = await apiClient.post('coupons', couponData);
            return response.data;
        } catch (error) {
            throw error.response?.data || 'Không thể tạo mã giảm giá.';
        }
    },
    // Lấy danh sách mã giảm giá (Admin)
    getAllCoupons: async (params = {})=>{
        try {
            const { page = 1, limit = 10, search, is_active, startDate, endDate, minAmount, maxAmount, sortBy = 'created_at', sortOrder = 'DESC' } = params;
            // Xây dựng query parameters
            const query = new URLSearchParams({
                page: String(page),
                limit: String(limit)
            });
            // Thêm các filter tùy chọn
            if (search) {
                query.append('search', search);
            }
            if (typeof is_active !== 'undefined') {
                query.append('is_active', is_active);
            }
            if (startDate) {
                query.append('startDate', startDate);
            }
            if (endDate) {
                query.append('endDate', endDate);
            }
            if (minAmount) {
                query.append('minAmount', minAmount);
            }
            if (maxAmount) {
                query.append('maxAmount', maxAmount);
            }
            if (sortBy) {
                query.append('sortBy', sortBy);
            }
            if (sortOrder) {
                query.append('sortOrder', sortOrder);
            }
            const response = await apiClient.get(`coupons?${query}`);
            return response.data;
        } catch (error) {
            throw error.response?.data || 'Không thể lấy danh sách mã giảm giá.';
        }
    },
    // Lấy chi tiết mã giảm giá (Admin)
    getCouponById: async (id)=>{
        try {
            const response = await apiClient.get(`coupons/${id}`);
            return response.data;
        } catch (error) {
            throw error.response?.data || 'Không thể lấy thông tin mã giảm giá.';
        }
    },
    // Kiểm tra mã giảm giá (Public)
    validateCoupon: async (code, orderAmount)=>{
        try {
            const response = await apiClient.post('coupons/validate', {
                code,
                orderAmount
            });
            return response.data;
        } catch (error) {
            throw error.response?.data || 'Mã giảm giá không hợp lệ.';
        }
    },
    // Áp dụng mã giảm giá (Public)
    applyCoupon: async (code, orderAmount)=>{
        try {
            const response = await apiClient.post('coupons/apply', {
                code,
                orderAmount
            });
            return response.data;
        } catch (error) {
            throw error.response?.data || 'Không thể áp dụng mã giảm giá.';
        }
    },
    // Cập nhật mã giảm giá (Admin)
    updateCoupon: async (id, updateData)=>{
        try {
            const response = await apiClient.put(`coupons/${id}`, updateData);
            return response.data;
        } catch (error) {
            throw error.response?.data || 'Không thể cập nhật mã giảm giá.';
        }
    },
    // Xóa mã giảm giá (Admin)
    deleteCoupon: async (id)=>{
        try {
            const response = await apiClient.delete(`coupons/${id}`);
            return response.data;
        } catch (error) {
            throw error.response?.data || 'Không thể xóa mã giảm giá.';
        }
    }
};
const revenueApi = {
    // Lấy thống kê doanh thu
    getRevenueStats: async (filters = {})=>{
        try {
            console.log('Calling getRevenueStats API...');
            const queryParams = new URLSearchParams();
            if (filters.startDate) {
                queryParams.append('startDate', filters.startDate);
            }
            if (filters.endDate) {
                queryParams.append('endDate', filters.endDate);
            }
            const response = await apiClient.get(`revenue/stats?${queryParams}`);
            console.log('Raw API response:', response);
            return response;
        } catch (error) {
            console.error('Error in getRevenueStats:', error);
            // Ném ra error object đầy đủ thay vì chỉ message
            throw error;
        }
    },
    // Lấy doanh thu theo ngày
    getDailyRevenue: async (date)=>{
        try {
            const response = await apiClient.get('revenue/daily', {
                params: {
                    date
                }
            });
            return response;
        } catch (error) {
            throw error.response?.data || 'Không thể lấy doanh thu theo ngày.';
        }
    },
    // Lấy doanh thu theo tháng
    getMonthlyRevenue: async (year, month)=>{
        try {
            const response = await apiClient.get('revenue/monthly', {
                params: {
                    year,
                    month
                }
            });
            return response;
        } catch (error) {
            throw error.response?.data || 'Không thể lấy doanh thu theo tháng.';
        }
    },
    getSalesStatistics: async ()=>{
        try {
            const response = await apiClient.get('statistics/sales');
            return response.data;
        } catch (error) {
            throw error.response?.data || 'Không thể lấy thống kê bán hàng.';
        }
    },
    getSalesByDateRange: async (startDate, endDate)=>{
        try {
            const response = await apiClient.get('statistics/sales/by-date', {
                params: {
                    startDate,
                    endDate
                }
            });
            return response.data;
        } catch (error) {
            throw error.response?.data || 'Không thể lấy thống kê bán hàng theo ngày.';
        }
    }
};
const invoiceApi = {
    // Tạo hóa đơn mới từ đơn hàng đã hoàn thành
    // POST /api/invoices/create
    createInvoice: (orderData)=>apiClient.post('/invoices/create', orderData),
    // Lấy chi tiết hóa đơn theo ID
    // GET /api/invoices/:id
    getInvoiceById: (id)=>apiClient.get(`/invoices/${id}`),
    // Lấy tất cả hóa đơn với phân trang
    // GET /api/invoices?page=1&limit=10
    getAllInvoices: (params)=>apiClient.get('/invoices', {
            params
        }),
    // Tìm kiếm hóa đơn
    // GET /api/invoices/search?invoiceNumber=IV&page=1&limit=10
    searchInvoices: (params)=>apiClient.get('/invoices/search', {
            params
        }),
    // Tạo và tải file PDF cho hóa đơn
    // GET /api/invoices/:id/pdf
    generateInvoicePDF: async (id, orderId)=>{
        try {
            const response = await apiClient.get(`/invoices/${id}/pdf/${orderId}`, {
                responseType: 'blob'
            });
            return response.data;
        } catch (error) {
            throw error.response?.data || error.message;
        }
    }
};
const categoriesApi = {
    // Lấy tất cả danh mục
    getAllCategories: async ()=>{
        try {
            const response = await apiClient.get('categories');
            return response.data;
        } catch (error) {
            throw error.response?.data || 'Không thể lấy danh sách danh mục.';
        }
    },
    // Lấy danh mục theo ID
    getCategoryById: async (id)=>{
        try {
            const response = await apiClient.get(`categories/${id}`);
            return response.data;
        } catch (error) {
            throw error.response?.data || 'Không thể lấy thông tin danh mục.';
        }
    },
    // Tạo danh mục mới (Admin only)
    createCategory: async (categoryData)=>{
        try {
            const response = await apiClient.post('categories', categoryData);
            return response.data;
        } catch (error) {
            throw error.response?.data || 'Không thể tạo danh mục mới.';
        }
    },
    // Cập nhật danh mục (Admin only)
    updateCategory: async (id, categoryData)=>{
        try {
            const response = await apiClient.put(`categories/${id}`, categoryData);
            return response.data;
        } catch (error) {
            throw error.response?.data || 'Không thể cập nhật danh mục.';
        }
    },
    // Xóa danh mục (Admin only) 
    deleteCategory: async (id)=>{
        try {
            const response = await apiClient.delete(`categories/${id}`);
            return response.data;
        } catch (error) {
            throw error.response?.data || 'Không thể xóa danh mục.';
        }
    }
};
;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/store/slices/userSlice.js [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__),
    "getUserInfo": (()=>getUserInfo),
    "loginUser": (()=>loginUser),
    "logoutUser": (()=>logoutUser),
    "registerUser": (()=>registerUser),
    "resetAuthState": (()=>resetAuthState),
    "updateProfile": (()=>updateProfile),
    "verifyOtp": (()=>verifyOtp)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f40$reduxjs$2f$toolkit__$5b$external$5d$__$2840$reduxjs$2f$toolkit$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/@reduxjs/toolkit [external] (@reduxjs/toolkit, esm_import)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$apiClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/apiClient.js [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f40$reduxjs$2f$toolkit__$5b$external$5d$__$2840$reduxjs$2f$toolkit$2c$__esm_import$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$apiClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__
]);
([__TURBOPACK__imported__module__$5b$externals$5d2f40$reduxjs$2f$toolkit__$5b$external$5d$__$2840$reduxjs$2f$toolkit$2c$__esm_import$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$apiClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__);
;
;
const registerUser = (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$reduxjs$2f$toolkit__$5b$external$5d$__$2840$reduxjs$2f$toolkit$2c$__esm_import$29$__["createAsyncThunk"])('auth/registerUser', async (userData, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$apiClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["userApi"].register(userData);
        return response;
    } catch (error) {
        return rejectWithValue(error.response?.data || error.message);
    }
});
const verifyOtp = (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$reduxjs$2f$toolkit__$5b$external$5d$__$2840$reduxjs$2f$toolkit$2c$__esm_import$29$__["createAsyncThunk"])('auth/verifyOtp', async (otpData, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$apiClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["userApi"].verifyOtp(otpData);
        return response;
    } catch (error) {
        return rejectWithValue(error.response?.data || error.message);
    }
});
const loginUser = (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$reduxjs$2f$toolkit__$5b$external$5d$__$2840$reduxjs$2f$toolkit$2c$__esm_import$29$__["createAsyncThunk"])('auth/loginUser', async (credentials, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$apiClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["userApi"].login(credentials);
        return response;
    } catch (error) {
        // Chuẩn hóa thông báo lỗi
        return rejectWithValue({
            status: 'error',
            code: error.response?.data?.code || 400,
            message: error.response?.data?.message === "User not found" || error.response?.data?.message === "Invalid password" ? "Tài khoản hoặc mật khẩu không đúng" : error.response?.data?.message || "Đã có lỗi xảy ra",
            data: null
        });
    }
});
const logoutUser = (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$reduxjs$2f$toolkit__$5b$external$5d$__$2840$reduxjs$2f$toolkit$2c$__esm_import$29$__["createAsyncThunk"])('auth/logoutUser', async (_, { rejectWithValue })=>{
    try {
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$apiClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["userApi"].logout();
        return true;
    } catch (error) {
        return rejectWithValue(error.response?.data || error.message);
    }
});
const getUserInfo = (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$reduxjs$2f$toolkit__$5b$external$5d$__$2840$reduxjs$2f$toolkit$2c$__esm_import$29$__["createAsyncThunk"])('auth/getUserInfo', async (_, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$apiClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["userApi"].getUserProfile();
        return response; // Trả về dữ liệu người dùng
    } catch (error) {
        // Xử lý lỗi từ apiClient
        console.error('Error fetching user info:', error);
        return rejectWithValue(error.message || 'Failed to fetch user info');
    }
});
const updateProfile = (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$reduxjs$2f$toolkit__$5b$external$5d$__$2840$reduxjs$2f$toolkit$2c$__esm_import$29$__["createAsyncThunk"])('auth/updateProfile', async (userData, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$apiClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["userApi"].updateUserProfile(userData);
        // Đảm bảo trả về đúng dữ liệu user đã cập nhật
        return response.data;
    } catch (error) {
        return rejectWithValue({
            message: error.response?.data?.message || 'Không thể cập nhật thông tin.'
        });
    }
});
// Slice
const userSlice = (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$reduxjs$2f$toolkit__$5b$external$5d$__$2840$reduxjs$2f$toolkit$2c$__esm_import$29$__["createSlice"])({
    name: 'auth',
    initialState: {
        user: null,
        token: null,
        loading: false,
        error: null
    },
    reducers: {
        resetAuthState: (state)=>{
            state.user = null;
            state.token = null;
            state.loading = false;
            state.error = null;
        }
    },
    extraReducers: (builder)=>{
        // Register
        builder.addCase(registerUser.pending, (state)=>{
            state.loading = true;
            state.error = null;
        });
        builder.addCase(registerUser.fulfilled, (state, action)=>{
            state.loading = false;
            state.user = action.payload.user;
        });
        builder.addCase(registerUser.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload;
        });
        // Verify OTP
        builder.addCase(verifyOtp.pending, (state)=>{
            state.loading = true;
            state.error = null;
        });
        builder.addCase(verifyOtp.fulfilled, (state, action)=>{
            state.loading = false;
            state.user = action.payload.user;
        });
        builder.addCase(verifyOtp.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload;
        });
        // Login
        builder.addCase(loginUser.pending, (state)=>{
            state.loading = true;
            state.error = null;
        });
        builder.addCase(loginUser.fulfilled, (state, action)=>{
            state.loading = false;
            state.user = action.payload.user;
            state.token = action.payload.accessToken;
        });
        builder.addCase(loginUser.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload;
        });
        // Logout
        builder.addCase(logoutUser.pending, (state)=>{
            state.loading = true;
        });
        builder.addCase(logoutUser.fulfilled, (state)=>{
            state.user = null;
            state.token = null;
            state.loading = false;
        });
        builder.addCase(logoutUser.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload;
        });
        // Get User Info
        builder.addCase(getUserInfo.pending, (state)=>{
            state.loading = true;
            state.error = null;
        });
        builder.addCase(getUserInfo.fulfilled, (state, action)=>{
            state.loading = false;
            state.user = action.payload;
        });
        builder.addCase(getUserInfo.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload || 'Failed to fetch user info';
        });
        // Update Profile
        builder.addCase(updateProfile.pending, (state)=>{
            state.loading = true;
            state.error = null;
        });
        // Sửa lại reducer updateProfile.fulfilled
        builder.addCase(updateProfile.fulfilled, (state, action)=>{
            state.loading = false;
            // Cập nhật state với dữ liệu mới
            state.user = {
                ...state.user,
                ...action.payload
            };
            state.error = null;
        });
        builder.addCase(updateProfile.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload;
        });
    }
});
const { resetAuthState } = userSlice.actions;
const __TURBOPACK__default__export__ = userSlice.reducer;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/store/slices/productSlice.js [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s({
    "clearProductState": (()=>clearProductState),
    "createProduct": (()=>createProduct),
    "default": (()=>__TURBOPACK__default__export__),
    "deleteProduct": (()=>deleteProduct),
    "fetchFeaturedProductsByPagination": (()=>fetchFeaturedProductsByPagination),
    "fetchNewProductsByPagination": (()=>fetchNewProductsByPagination),
    "fetchProductDetail": (()=>fetchProductDetail),
    "fetchProducts": (()=>fetchProducts),
    "fetchProductsByPagination": (()=>fetchProductsByPagination),
    "searchProductsByNameAndColor": (()=>searchProductsByNameAndColor),
    "setVisibleFeaturedProducts": (()=>setVisibleFeaturedProducts),
    "setVisibleNewProducts": (()=>setVisibleNewProducts),
    "updateProduct": (()=>updateProduct)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f40$reduxjs$2f$toolkit__$5b$external$5d$__$2840$reduxjs$2f$toolkit$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/@reduxjs/toolkit [external] (@reduxjs/toolkit, esm_import)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$apiClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/apiClient.js [ssr] (ecmascript)"); // Import API client
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f40$reduxjs$2f$toolkit__$5b$external$5d$__$2840$reduxjs$2f$toolkit$2c$__esm_import$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$apiClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__
]);
([__TURBOPACK__imported__module__$5b$externals$5d2f40$reduxjs$2f$toolkit__$5b$external$5d$__$2840$reduxjs$2f$toolkit$2c$__esm_import$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$apiClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__);
;
;
const fetchProducts = (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$reduxjs$2f$toolkit__$5b$external$5d$__$2840$reduxjs$2f$toolkit$2c$__esm_import$29$__["createAsyncThunk"])('products/fetchProducts', async (_, { rejectWithValue })=>{
    try {
        const products = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$apiClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["productApi"].getProducts();
        return products;
    } catch (error) {
        return rejectWithValue(error.response?.data || 'Failed to fetch products');
    }
});
const fetchProductsByPagination = (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$reduxjs$2f$toolkit__$5b$external$5d$__$2840$reduxjs$2f$toolkit$2c$__esm_import$29$__["createAsyncThunk"])('products/fetchProductsByPagination', async (params, { rejectWithValue })=>{
    try {
        console.log('Calling fetchProductsByPagination with params:', params);
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$apiClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["productApi"].getProductsByPagination(params);
        console.log('API Response:', response);
        return response;
    } catch (error) {
        return rejectWithValue(error.response?.data || 'Failed to fetch products with pagination');
    }
});
const fetchNewProductsByPagination = (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$reduxjs$2f$toolkit__$5b$external$5d$__$2840$reduxjs$2f$toolkit$2c$__esm_import$29$__["createAsyncThunk"])('products/fetchNewProductsByPagination', async ({ page, limit, sort, priceRange, colorIds }, { rejectWithValue })=>{
    try {
        const newProducts = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$apiClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["productApi"].getNewProductsByPagination(page, limit, sort, priceRange, colorIds);
        return newProducts;
    } catch (error) {
        return rejectWithValue(error.response?.data || 'Failed to fetch new products');
    }
});
const fetchFeaturedProductsByPagination = (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$reduxjs$2f$toolkit__$5b$external$5d$__$2840$reduxjs$2f$toolkit$2c$__esm_import$29$__["createAsyncThunk"])('products/fetchFeaturedProductsByPagination', async ({ page, limit, sort, priceRange, colorIds }, { rejectWithValue })=>{
    try {
        const featuredProducts = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$apiClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["productApi"].getFeaturedProductsByPagination(page, limit, sort, priceRange, colorIds);
        return featuredProducts;
    } catch (error) {
        return rejectWithValue(error.response?.data || 'Failed to fetch featured products');
    }
});
const fetchProductDetail = (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$reduxjs$2f$toolkit__$5b$external$5d$__$2840$reduxjs$2f$toolkit$2c$__esm_import$29$__["createAsyncThunk"])('products/fetchProductDetail', async (slug, { rejectWithValue })=>{
    try {
        const product = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$apiClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["productApi"].getProductDetail(slug);
        return product;
    } catch (error) {
        return rejectWithValue(error.response?.data || 'Failed to fetch product details');
    }
});
const createProduct = (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$reduxjs$2f$toolkit__$5b$external$5d$__$2840$reduxjs$2f$toolkit$2c$__esm_import$29$__["createAsyncThunk"])('products/createProduct', async (productData, { rejectWithValue })=>{
    try {
        const newProduct = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$apiClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["productApi"].createProduct(productData);
        return newProduct;
    } catch (error) {
        return rejectWithValue(error.response?.data || 'Failed to create product');
    }
});
const updateProduct = (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$reduxjs$2f$toolkit__$5b$external$5d$__$2840$reduxjs$2f$toolkit$2c$__esm_import$29$__["createAsyncThunk"])('products/updateProduct', async ({ slug, productData }, { rejectWithValue })=>{
    try {
        const updatedProduct = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$apiClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["productApi"].updateProduct(slug, productData);
        return updatedProduct;
    } catch (error) {
        return rejectWithValue(error.response?.data || 'Failed to update product');
    }
});
const deleteProduct = (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$reduxjs$2f$toolkit__$5b$external$5d$__$2840$reduxjs$2f$toolkit$2c$__esm_import$29$__["createAsyncThunk"])('products/deleteProduct', async (slug, { rejectWithValue })=>{
    try {
        const result = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$apiClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["productApi"].deleteProduct(slug);
        return result;
    } catch (error) {
        return rejectWithValue(error.response?.data || 'Failed to delete product');
    }
});
const searchProductsByNameAndColor = (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$reduxjs$2f$toolkit__$5b$external$5d$__$2840$reduxjs$2f$toolkit$2c$__esm_import$29$__["createAsyncThunk"])('products/searchProductsByNameAndColor', async ({ keyword, page, limit, sort }, { rejectWithValue })=>{
    try {
        const searchResults = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$apiClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["productApi"].searchProductsByNameAndColor(keyword, {
            page,
            limit,
            sort
        });
        return searchResults;
    } catch (error) {
        return rejectWithValue(error.response?.data || 'Không thể tìm kiếm sản phẩm');
    }
});
// **Slice**
const productSlice = (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$reduxjs$2f$toolkit__$5b$external$5d$__$2840$reduxjs$2f$toolkit$2c$__esm_import$29$__["createSlice"])({
    name: 'products',
    initialState: {
        newProducts: {
            items: [],
            pagination: {
                totalItems: 0,
                totalPages: 0,
                currentPage: 1,
                pageSize: 10
            }
        },
        visibleNewProducts: [],
        featuredProducts: {
            items: [],
            pagination: {
                totalItems: 0,
                totalPages: 0,
                currentPage: 1,
                pageSize: 10
            }
        },
        searchResults: {
            items: [],
            pagination: {
                totalItems: 0,
                totalPages: 0,
                currentPage: 1,
                pageSize: 10
            }
        },
        pagination: {
            items: [],
            totalItems: 0,
            totalPages: 0,
            currentPage: 1,
            pageSize: 10,
            filters: {
                name: '',
                categories: null,
                colors: null,
                sizes: null,
                priceRange: null,
                sort: 'newest'
            }
        },
        visibleFeaturedProducts: [],
        loading: false,
        fetchLoading: false,
        submitLoading: false,
        error: null
    },
    reducers: {
        // Set visible products for index page
        setVisibleNewProducts: (state, action)=>{
            state.visibleNewProducts = action.payload;
        },
        setVisibleFeaturedProducts: (state, action)=>{
            state.visibleFeaturedProducts = action.payload;
        },
        // Clear product state
        clearProductState: (state)=>{
            state.newProducts = {
                items: [],
                pagination: {
                    totalItems: 0,
                    totalPages: 0,
                    currentPage: 1,
                    pageSize: 10
                }
            };
            state.visibleNewProducts = [];
            state.featuredProducts = {
                items: [],
                pagination: {
                    totalItems: 0,
                    totalPages: 0,
                    currentPage: 1,
                    pageSize: 10
                }
            };
            state.searchResults = {
                items: [],
                pagination: {
                    totalItems: 0,
                    totalPages: 0,
                    currentPage: 1,
                    pageSize: 10
                }
            };
            state.visibleFeaturedProducts = [];
            state.loading = false;
            state.error = null;
        },
        updateFilters: (state, action)=>{
            state.pagination.filters = {
                ...state.pagination.filters,
                ...action.payload
            };
        }
    },
    extraReducers: (builder)=>{
        // Fetch all products
        builder.addCase(fetchProducts.pending, (state)=>{
            state.loading = true;
            state.error = null;
        }).addCase(fetchProducts.fulfilled, (state, action)=>{
            state.items = action.payload;
            state.loading = false;
        }).addCase(fetchProducts.rejected, (state, action)=>{
            state.error = action.payload;
            state.loading = false;
        });
        // Fetch products with pagination
        builder.addCase(fetchProductsByPagination.pending, (state)=>{
            state.fetchLoading = true;
            state.error = null;
        }).addCase(fetchProductsByPagination.fulfilled, (state, action)=>{
            const { products, pagination } = action.payload.data;
            state.pagination = {
                ...state.pagination,
                items: products || [],
                totalItems: pagination.totalItems || 0,
                totalPages: pagination.totalPages || 0,
                currentPage: pagination.currentPage || 1,
                pageSize: pagination.pageSize || 10
            };
            state.fetchLoading = false;
        }).addCase(fetchProductsByPagination.rejected, (state, action)=>{
            state.error = action.payload;
            state.fetchLoading = false;
        });
        // Fetch new products with pagination
        builder.addCase(fetchNewProductsByPagination.pending, (state)=>{
            state.loading = true;
            state.error = null;
        }).addCase(fetchNewProductsByPagination.fulfilled, (state, action)=>{
            const { products, pagination } = action.payload.data;
            if (pagination.currentPage === 1) {
                // Thay thế toàn bộ danh sách sản phẩm nếu là trang đầu tiên
                state.newProducts.items = products;
            } else {
                // Thêm sản phẩm mới nếu không phải trang đầu tiên
                const uniqueProducts = products.filter((product)=>!state.newProducts.items.some((existing)=>existing.id === product.id));
                state.newProducts.items = [
                    ...state.newProducts.items,
                    ...uniqueProducts
                ];
            }
            state.newProducts.pagination = {
                totalItems: pagination.totalItems || 0,
                totalPages: pagination.totalPages || 0,
                currentPage: pagination.currentPage || 1,
                pageSize: pagination.pageSize || 10
            };
            // Cập nhật sản phẩm hiển thị (có thể không cần thiết nếu không dùng `visibleNewProducts`)
            state.visibleNewProducts = state.newProducts.items.slice(0, state.newProducts.pagination.pageSize);
            state.loading = false;
        }).addCase(fetchNewProductsByPagination.rejected, (state, action)=>{
            state.error = action.payload;
            state.loading = false;
        });
        // Fetch featured products with pagination
        builder.addCase(fetchFeaturedProductsByPagination.pending, (state)=>{
            state.loading = true;
            state.error = null;
        }).addCase(fetchFeaturedProductsByPagination.fulfilled, (state, action)=>{
            const { products, pagination } = action.payload.data;
            if (pagination.currentPage === 1) {
                // Thay thế toàn bộ danh sách sản phẩm nếu là trang đầu tiên
                state.featuredProducts.items = products;
            } else {
                // Thêm sản phẩm mới nếu không phải trang đầu tiên
                const uniqueProducts = products.filter((product)=>!state.featuredProducts.items.some((existing)=>existing.id === product.id));
                state.featuredProducts.items = [
                    ...state.featuredProducts.items,
                    ...uniqueProducts
                ];
            }
            state.featuredProducts.pagination = {
                totalItems: pagination.totalItems || 0,
                totalPages: pagination.totalPages || 0,
                currentPage: pagination.currentPage || 1,
                pageSize: pagination.pageSize || 10
            };
            // Cập nhật sản phẩm hiển thị (nếu cần)
            state.visibleFeaturedProducts = state.featuredProducts.items.slice(0, state.featuredProducts.pagination.pageSize);
            state.loading = false;
        }).addCase(fetchFeaturedProductsByPagination.rejected, (state, action)=>{
            state.error = action.payload;
            state.loading = false;
        });
        // Fetch product details
        builder.addCase(fetchProductDetail.pending, (state)=>{
            state.loading = true;
            state.error = null;
        }).addCase(fetchProductDetail.fulfilled, (state, action)=>{
            state.currentProduct = action.payload;
            state.loading = false;
        }).addCase(fetchProductDetail.rejected, (state, action)=>{
            state.error = action.payload;
            state.loading = false;
        });
        // Create product
        builder.addCase(createProduct.pending, (state)=>{
            state.submitLoading = true;
            state.error = null;
        }).addCase(createProduct.fulfilled, (state, action)=>{
            // Kiểm tra cấu trúc response và cập nhật state phù hợp
            const newProduct = Array.isArray(action.payload.data) ? action.payload.data[0] : action.payload.data;
            if (state.items) {
                state.items.push(newProduct);
            } else {
                state.items = [
                    newProduct
                ];
            }
            state.submitLoading = false;
            state.error = null;
        }).addCase(createProduct.rejected, (state, action)=>{
            state.error = action.payload;
            state.submitLoading = false;
        });
        // Update product
        builder.addCase(updateProduct.pending, (state)=>{
            state.submitLoading = true;
            state.error = null;
        }).addCase(updateProduct.fulfilled, (state, action)=>{
            // Cập nhật sản phẩm trong danh sách
            if (state.pagination && state.pagination.items) {
                const index = state.pagination.items.findIndex((item)=>item.slug === action.payload.data.slug);
                if (index !== -1) {
                    state.pagination.items[index] = action.payload.data;
                }
            }
            state.submitLoading = false;
            state.error = null;
        }).addCase(updateProduct.rejected, (state, action)=>{
            state.error = action.payload;
            state.submitLoading = false;
        });
        // Delete product
        builder.addCase(deleteProduct.pending, (state)=>{
            state.loading = true;
            state.error = null;
        }).addCase(deleteProduct.fulfilled, (state, action)=>{
            // Kiểm tra và cập nhật pagination.items thay vì items
            if (state.pagination && state.pagination.items) {
                state.pagination.items = state.pagination.items.filter((item)=>item.slug !== action.meta.arg);
            }
            state.loading = false;
        }).addCase(deleteProduct.rejected, (state, action)=>{
            state.error = action.payload;
            state.loading = false;
        });
        // Trong phần extraReducers, thêm các cases xử lý search
        builder.addCase(searchProductsByNameAndColor.pending, (state)=>{
            state.loading = true;
            state.error = null;
        }).addCase(searchProductsByNameAndColor.fulfilled, (state, action)=>{
            const { products, pagination } = action.payload.data;
            state.searchResults = {
                items: products,
                pagination: {
                    totalItems: pagination.totalItems || 0,
                    totalPages: pagination.totalPages || 0,
                    currentPage: pagination.currentPage || 1,
                    pageSize: pagination.pageSize || 10
                }
            };
            state.loading = false;
        }).addCase(searchProductsByNameAndColor.rejected, (state, action)=>{
            state.error = action.payload;
            state.loading = false;
        });
    }
});
const { setVisibleNewProducts, setVisibleFeaturedProducts, clearProductState } = productSlice.actions;
const __TURBOPACK__default__export__ = productSlice.reducer;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/store/slices/cartSlice.js [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s({
    "addItemToCart": (()=>addItemToCart),
    "createCartForGuest": (()=>createCartForGuest),
    "createCartForUser": (()=>createCartForUser),
    "default": (()=>__TURBOPACK__default__export__),
    "getCartById": (()=>getCartById),
    "getCartItems": (()=>getCartItems),
    "removeCartItem": (()=>removeCartItem),
    "resetCartState": (()=>resetCartState),
    "updateCartItemQuantity": (()=>updateCartItemQuantity)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f40$reduxjs$2f$toolkit__$5b$external$5d$__$2840$reduxjs$2f$toolkit$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/@reduxjs/toolkit [external] (@reduxjs/toolkit, esm_import)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$apiClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/apiClient.js [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f40$reduxjs$2f$toolkit__$5b$external$5d$__$2840$reduxjs$2f$toolkit$2c$__esm_import$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$apiClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__
]);
([__TURBOPACK__imported__module__$5b$externals$5d2f40$reduxjs$2f$toolkit__$5b$external$5d$__$2840$reduxjs$2f$toolkit$2c$__esm_import$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$apiClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__);
;
;
const createCartForGuest = (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$reduxjs$2f$toolkit__$5b$external$5d$__$2840$reduxjs$2f$toolkit$2c$__esm_import$29$__["createAsyncThunk"])('cart/createCartForGuest', async (cartData, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$apiClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["cartApi"].createCartForGuest(cartData);
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response?.data || 'Failed to create cart for guest.');
    }
});
const createCartForUser = (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$reduxjs$2f$toolkit__$5b$external$5d$__$2840$reduxjs$2f$toolkit$2c$__esm_import$29$__["createAsyncThunk"])('cart/createCartForUser', async (_, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$apiClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["cartApi"].createCartForUser();
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response?.data || 'Failed to create or retrieve cart for user.');
    }
});
const getCartById = (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$reduxjs$2f$toolkit__$5b$external$5d$__$2840$reduxjs$2f$toolkit$2c$__esm_import$29$__["createAsyncThunk"])('cart/getCartById', async (cartId, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$apiClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["cartApi"].getCartById(cartId);
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response?.data || 'Failed to fetch cart details.');
    }
});
const addItemToCart = (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$reduxjs$2f$toolkit__$5b$external$5d$__$2840$reduxjs$2f$toolkit$2c$__esm_import$29$__["createAsyncThunk"])('cart/addItemToCart', async ({ cartId, itemData }, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$apiClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["cartApi"].addItemToCart(cartId, itemData);
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response?.data || 'Failed to add item to cart.');
    }
});
const removeCartItem = (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$reduxjs$2f$toolkit__$5b$external$5d$__$2840$reduxjs$2f$toolkit$2c$__esm_import$29$__["createAsyncThunk"])('cart/removeCartItem', async (itemId, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$apiClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["cartApi"].removeCartItem(itemId);
        return response;
    } catch (error) {
        return rejectWithValue(error.response?.data || 'Failed to remove item from cart.');
    }
});
const getCartItems = (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$reduxjs$2f$toolkit__$5b$external$5d$__$2840$reduxjs$2f$toolkit$2c$__esm_import$29$__["createAsyncThunk"])('cart/getCartItems', async (cartId, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$apiClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["cartApi"].getCartItems(cartId);
        return response.data; // Lấy phần `data` từ kết quả API
    } catch (error) {
        return rejectWithValue(error.response?.data || 'Failed to fetch cart items.');
    }
});
const updateCartItemQuantity = (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$reduxjs$2f$toolkit__$5b$external$5d$__$2840$reduxjs$2f$toolkit$2c$__esm_import$29$__["createAsyncThunk"])('cart/updateCartItemQuantity', async ({ itemId, quantity }, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$apiClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["cartApi"].updateCartItemQuantity(itemId, quantity);
        return response.data; // Đảm bảo trả về đầy đủ dữ liệu sản phẩm
    } catch (error) {
        return rejectWithValue(error.response?.data || 'Failed to update cart item quantity.');
    }
});
// **Slice**
const cartSlice = (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$reduxjs$2f$toolkit__$5b$external$5d$__$2840$reduxjs$2f$toolkit$2c$__esm_import$29$__["createSlice"])({
    name: 'cart',
    initialState: {
        cart: null,
        items: [],
        loading: false,
        updating: {},
        error: null
    },
    reducers: {
        resetCartState: (state)=>{
            state.cart = null;
            state.items = [];
            state.loading = false;
            state.updating = {};
            state.error = null;
        }
    },
    extraReducers: (builder)=>{
        builder// Create cart for guest
        .addCase(createCartForGuest.pending, (state)=>{
            state.loading = true;
            state.error = null;
        }).addCase(createCartForGuest.fulfilled, (state, action)=>{
            state.loading = false;
            state.cart = action.payload;
        }).addCase(createCartForGuest.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload;
        })// Create or retrieve cart for user
        .addCase(createCartForUser.pending, (state)=>{
            state.loading = true;
            state.error = null;
        }).addCase(createCartForUser.fulfilled, (state, action)=>{
            state.loading = false;
            state.cart = action.payload;
        }).addCase(createCartForUser.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload;
        })// Get cart by ID
        .addCase(getCartById.pending, (state)=>{
            state.loading = true;
            state.error = null;
        }).addCase(getCartById.fulfilled, (state, action)=>{
            state.loading = false;
            state.cart = action.payload;
        }).addCase(getCartById.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload;
        })// Add item to cart
        .addCase(addItemToCart.pending, (state)=>{
            state.loading = true;
            state.error = null;
        }).addCase(addItemToCart.fulfilled, (state, action)=>{
            state.loading = false;
            state.items.push(action.payload);
        }).addCase(addItemToCart.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload;
        })// Remove item from cart
        // Remove item from cart
        .addCase(removeCartItem.pending, (state, action)=>{
            const itemId = action.meta.arg; // Capture the item ID being removed
            state.updating[itemId] = true; // Mark the specific item as updating
            state.error = null;
        }).addCase(removeCartItem.fulfilled, (state, action)=>{
            const itemId = action.meta.arg; // Retrieve the ID of the removed item
            state.items = state.items.filter((item)=>item.id !== itemId); // Remove the item from the state
            delete state.updating[itemId]; // Remove the "updating" flag for the item
        }).addCase(removeCartItem.rejected, (state, action)=>{
            const itemId = action.meta.arg; // Retrieve the ID of the item that failed to be removed
            state.updating[itemId] = false; // Reset the "updating" flag
            state.error = action.payload; // Store the error message
        })// Get cart items
        .addCase(getCartItems.pending, (state)=>{
            state.loading = true;
            state.error = null;
        }).addCase(getCartItems.fulfilled, (state, action)=>{
            state.loading = false;
            if (JSON.stringify(state.items) !== JSON.stringify(action.payload)) {
                state.items = action.payload;
            }
        }).addCase(getCartItems.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload;
        })// Update cart item quantity
        .addCase(updateCartItemQuantity.pending, (state, action)=>{
            const { itemId } = action.meta.arg;
            state.updating[itemId] = true; // Đánh dấu sản phẩm đang cập nhật
            state.error = null;
        }).addCase(updateCartItemQuantity.fulfilled, (state, action)=>{
            const updatedItem = action.payload;
            const itemIndex = state.items.findIndex((item)=>item.id === updatedItem.id);
            if (itemIndex !== -1) {
                state.items[itemIndex] = {
                    ...state.items[itemIndex],
                    ...updatedItem
                };
            }
            delete state.updating[updatedItem.id]; // Xóa trạng thái cập nhật
        }).addCase(updateCartItemQuantity.rejected, (state, action)=>{
            const { itemId } = action.meta.arg;
            state.updating[itemId] = false; // Đánh dấu cập nhật thất bại
            state.error = action.payload;
        });
    }
});
const { resetCartState } = cartSlice.actions;
const __TURBOPACK__default__export__ = cartSlice.reducer;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/store/slices/reviewsSlice.js [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s({
    "createReview": (()=>createReview),
    "default": (()=>__TURBOPACK__default__export__),
    "deleteReview": (()=>deleteReview),
    "fetchAverageRating": (()=>fetchAverageRating),
    "fetchReviewsByProduct": (()=>fetchReviewsByProduct)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f40$reduxjs$2f$toolkit__$5b$external$5d$__$2840$reduxjs$2f$toolkit$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/@reduxjs/toolkit [external] (@reduxjs/toolkit, esm_import)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$apiClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/apiClient.js [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f40$reduxjs$2f$toolkit__$5b$external$5d$__$2840$reduxjs$2f$toolkit$2c$__esm_import$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$apiClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__
]);
([__TURBOPACK__imported__module__$5b$externals$5d2f40$reduxjs$2f$toolkit__$5b$external$5d$__$2840$reduxjs$2f$toolkit$2c$__esm_import$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$apiClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__);
;
;
const fetchReviewsByProduct = (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$reduxjs$2f$toolkit__$5b$external$5d$__$2840$reduxjs$2f$toolkit$2c$__esm_import$29$__["createAsyncThunk"])('reviews/fetchReviewsByProduct', async ({ productId, page, limit }, thunkAPI)=>{
    try {
        // API call to fetch paginated reviews
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$apiClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["reviewApi"].getReviewsByProduct(productId, page, limit);
        // Ensure response matches the structure from `getProductReviewsHandler`
        if (response.status === 'success') {
            return {
                reviews: response.data,
                meta: response.meta
            };
        } else {
            throw new Error('Unexpected API response');
        }
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response?.data?.message || 'Failed to fetch reviews');
    }
});
const fetchAverageRating = (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$reduxjs$2f$toolkit__$5b$external$5d$__$2840$reduxjs$2f$toolkit$2c$__esm_import$29$__["createAsyncThunk"])('reviews/fetchAverageRating', async (productId, thunkAPI)=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$apiClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["reviewApi"].getAverageRating(productId);
        if (response.status === 'success' && response.data?.averageRating) {
            return {
                averageRating: parseFloat(response.data.averageRating.averageRating) || 0,
                totalReviews: parseInt(response.data.averageRating.totalReviews, 10) || 0
            };
        } else {
            throw new Error('Invalid API response structure');
        }
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response?.data?.message || 'Failed to fetch average rating');
    }
});
const createReview = (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$reduxjs$2f$toolkit__$5b$external$5d$__$2840$reduxjs$2f$toolkit$2c$__esm_import$29$__["createAsyncThunk"])('reviews/createReview', async (reviewData, thunkAPI)=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$apiClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["reviewApi"].createReview(reviewData);
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response?.data || 'Failed to create review');
    }
});
const deleteReview = (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$reduxjs$2f$toolkit__$5b$external$5d$__$2840$reduxjs$2f$toolkit$2c$__esm_import$29$__["createAsyncThunk"])('reviews/deleteReview', async (reviewId, thunkAPI)=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$apiClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["reviewApi"].deleteReview(reviewId);
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response?.data || 'Failed to delete review');
    }
});
// Initial state
const initialState = {
    reviews: [],
    averageRating: 0,
    isLoading: false,
    error: null,
    pagination: {
        totalReviews: 0,
        totalPages: 1,
        currentPage: 1
    }
};
// Reviews slice
const reviewsSlice = (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$reduxjs$2f$toolkit__$5b$external$5d$__$2840$reduxjs$2f$toolkit$2c$__esm_import$29$__["createSlice"])({
    name: 'reviews',
    initialState,
    reducers: {},
    extraReducers: (builder)=>{
        // Handle `fetchReviewsByProduct`
        builder.addCase(fetchReviewsByProduct.pending, (state)=>{
            state.isLoading = true;
            state.error = null;
        }).addCase(fetchReviewsByProduct.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.reviews = action.payload.reviews || [];
            state.pagination = {
                totalReviews: action.payload.meta?.totalReviews || 0,
                totalPages: action.payload.meta?.totalPages || 1,
                currentPage: action.payload.meta?.currentPage || 1
            };
        }).addCase(fetchReviewsByProduct.rejected, (state, action)=>{
            state.isLoading = false;
            state.error = action.payload;
        });
        // Fetch average rating
        builder.addCase(fetchAverageRating.pending, (state)=>{
            state.isLoading = true;
            state.error = null;
        }).addCase(fetchAverageRating.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.averageRating = action.payload?.averageRating || 0;
            state.pagination.totalReviews = action.payload?.totalReviews || 0;
        }).addCase(fetchAverageRating.rejected, (state, action)=>{
            state.isLoading = false;
            state.error = action.payload;
        });
        // Create review
        builder.addCase(createReview.pending, (state)=>{
            state.isLoading = true;
            state.error = null;
        }).addCase(createReview.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.reviews.unshift(action.payload);
            state.pagination.totalReviews += 1;
            if (state.reviews.length > 10) {
                state.reviews.pop(); // Ensure review list doesn't grow beyond the limit
            }
        }).addCase(createReview.rejected, (state, action)=>{
            state.isLoading = false;
            state.error = action.payload;
        });
        // Delete review
        builder.addCase(deleteReview.pending, (state)=>{
            state.isLoading = true;
            state.error = null;
        }).addCase(deleteReview.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.reviews = state.reviews.filter((review)=>review.id !== action.meta.arg);
            state.pagination.totalReviews = Math.max(0, state.pagination.totalReviews - 1);
        }).addCase(deleteReview.rejected, (state, action)=>{
            state.isLoading = false;
            state.error = action.payload;
        });
    }
});
const __TURBOPACK__default__export__ = reviewsSlice.reducer;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/store/slices/productsByCategorySlice.js [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__),
    "fetchProductsByCategory": (()=>fetchProductsByCategory)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f40$reduxjs$2f$toolkit__$5b$external$5d$__$2840$reduxjs$2f$toolkit$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/@reduxjs/toolkit [external] (@reduxjs/toolkit, esm_import)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$apiClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/apiClient.js [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f40$reduxjs$2f$toolkit__$5b$external$5d$__$2840$reduxjs$2f$toolkit$2c$__esm_import$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$apiClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__
]);
([__TURBOPACK__imported__module__$5b$externals$5d2f40$reduxjs$2f$toolkit__$5b$external$5d$__$2840$reduxjs$2f$toolkit$2c$__esm_import$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$apiClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__);
;
;
const fetchProductsByCategory = (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$reduxjs$2f$toolkit__$5b$external$5d$__$2840$reduxjs$2f$toolkit$2c$__esm_import$29$__["createAsyncThunk"])('productsByCategory/fetchProductsByCategory', async ({ categoryId, page, limit, sort, priceRange, colorIds }, { rejectWithValue })=>{
    try {
        const data = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$apiClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["productsByCategoryApi"].getProductsByCategory(categoryId, page, limit, sort, priceRange, colorIds);
        return data;
    } catch (error) {
        return rejectWithValue(error);
    }
});
const productsByCategorySlice = (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$reduxjs$2f$toolkit__$5b$external$5d$__$2840$reduxjs$2f$toolkit$2c$__esm_import$29$__["createSlice"])({
    name: 'productsByCategory',
    initialState: {
        total: 0,
        products: [],
        totalPages: 0,
        loading: false,
        error: null
    },
    reducers: {},
    extraReducers: (builder)=>{
        builder.addCase(fetchProductsByCategory.pending, (state)=>{
            state.loading = true;
            state.error = null;
        }).addCase(fetchProductsByCategory.fulfilled, (state, action)=>{
            state.loading = false;
            const { products, totalPages, total } = action.payload.data;
            if (action.meta.arg.page > 1) {
                // Nối sản phẩm nếu không phải trang đầu tiên
                state.products = [
                    ...state.products,
                    ...products
                ];
            } else {
                // Ghi đè sản phẩm nếu là trang đầu tiên
                state.products = products;
            }
            state.totalPages = totalPages;
            state.total = total;
        }).addCase(fetchProductsByCategory.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload || 'Failed to fetch products by category';
        });
    }
});
const __TURBOPACK__default__export__ = productsByCategorySlice.reducer;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/store/slices/colorsSlice.js [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__),
    "fetchColors": (()=>fetchColors)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f40$reduxjs$2f$toolkit__$5b$external$5d$__$2840$reduxjs$2f$toolkit$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/@reduxjs/toolkit [external] (@reduxjs/toolkit, esm_import)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$apiClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/apiClient.js [ssr] (ecmascript)"); // Adjust the path based on your project structure
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f40$reduxjs$2f$toolkit__$5b$external$5d$__$2840$reduxjs$2f$toolkit$2c$__esm_import$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$apiClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__
]);
([__TURBOPACK__imported__module__$5b$externals$5d2f40$reduxjs$2f$toolkit__$5b$external$5d$__$2840$reduxjs$2f$toolkit$2c$__esm_import$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$apiClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__);
;
;
const fetchColors = (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$reduxjs$2f$toolkit__$5b$external$5d$__$2840$reduxjs$2f$toolkit$2c$__esm_import$29$__["createAsyncThunk"])('colors/fetchColors', async (_, { rejectWithValue })=>{
    try {
        const colors = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$apiClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["colorsApi"].getColors();
        return colors;
    } catch (error) {
        return rejectWithValue(error);
    }
});
// Colors slice
const colorsSlice = (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$reduxjs$2f$toolkit__$5b$external$5d$__$2840$reduxjs$2f$toolkit$2c$__esm_import$29$__["createSlice"])({
    name: 'colors',
    initialState: {
        data: [],
        loading: false,
        error: null
    },
    reducers: {},
    extraReducers: (builder)=>{
        builder.addCase(fetchColors.pending, (state)=>{
            state.loading = true;
            state.error = null;
        }).addCase(fetchColors.fulfilled, (state, action)=>{
            state.loading = false;
            state.data = action.payload;
        }).addCase(fetchColors.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload || 'Failed to fetch colors.';
        });
    }
});
const __TURBOPACK__default__export__ = colorsSlice.reducer;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/store/slices/categorySlice.js [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__),
    "setCurrentCategoryId": (()=>setCurrentCategoryId),
    "setSelectedCategoryId": (()=>setSelectedCategoryId)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f40$reduxjs$2f$toolkit__$5b$external$5d$__$2840$reduxjs$2f$toolkit$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/@reduxjs/toolkit [external] (@reduxjs/toolkit, esm_import)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f40$reduxjs$2f$toolkit__$5b$external$5d$__$2840$reduxjs$2f$toolkit$2c$__esm_import$29$__
]);
([__TURBOPACK__imported__module__$5b$externals$5d2f40$reduxjs$2f$toolkit__$5b$external$5d$__$2840$reduxjs$2f$toolkit$2c$__esm_import$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__);
;
const categorySlice = (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$reduxjs$2f$toolkit__$5b$external$5d$__$2840$reduxjs$2f$toolkit$2c$__esm_import$29$__["createSlice"])({
    name: 'categories',
    initialState: {
        currentCategoryId: null,
        selectedCategoryId: null
    },
    reducers: {
        setCurrentCategoryId (state, action) {
            state.currentCategoryId = action.payload;
        },
        setSelectedCategoryId (state, action) {
            state.selectedCategoryId = action.payload;
        }
    }
});
const { setCurrentCategoryId, setSelectedCategoryId } = categorySlice.actions;
const __TURBOPACK__default__export__ = categorySlice.reducer;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/store/slices/adminUserSlice.js [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__),
    "loginAdmin": (()=>loginAdmin),
    "logoutAdmin": (()=>logoutAdmin),
    "resetAdminState": (()=>resetAdminState)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f40$reduxjs$2f$toolkit__$5b$external$5d$__$2840$reduxjs$2f$toolkit$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/@reduxjs/toolkit [external] (@reduxjs/toolkit, esm_import)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$apiClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/apiClient.js [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f40$reduxjs$2f$toolkit__$5b$external$5d$__$2840$reduxjs$2f$toolkit$2c$__esm_import$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$apiClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__
]);
([__TURBOPACK__imported__module__$5b$externals$5d2f40$reduxjs$2f$toolkit__$5b$external$5d$__$2840$reduxjs$2f$toolkit$2c$__esm_import$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$apiClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__);
;
;
;
const loginAdmin = (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$reduxjs$2f$toolkit__$5b$external$5d$__$2840$reduxjs$2f$toolkit$2c$__esm_import$29$__["createAsyncThunk"])('admin/login', async (credentials, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$apiClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["adminApi"].loginForAdmin(credentials);
        return {
            user: response.user,
            role: response.role
        };
    } catch (error) {
        return rejectWithValue(error);
    }
});
const logoutAdmin = (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$reduxjs$2f$toolkit__$5b$external$5d$__$2840$reduxjs$2f$toolkit$2c$__esm_import$29$__["createAsyncThunk"])('admin/logout', async (_, { rejectWithValue })=>{
    try {
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$apiClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["userApi"].logout(); // Gọi API logout
        return true;
    } catch (error) {
        return rejectWithValue(error.response?.data || error.message);
    }
});
// Slice cho quản lý trạng thái admin
const adminSlice = (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$reduxjs$2f$toolkit__$5b$external$5d$__$2840$reduxjs$2f$toolkit$2c$__esm_import$29$__["createSlice"])({
    name: 'admin',
    initialState: {
        token: null,
        adminInfo: null,
        role: null,
        loading: false,
        error: null,
        accessDenied: false
    },
    reducers: {
        resetAdminState: (state)=>{
            state.adminInfo = null;
            state.role = null;
            state.token = null;
            state.loading = false;
            state.error = null;
            state.accessDenied = false;
        }
    },
    extraReducers: (builder)=>{
        builder// Login
        .addCase(loginAdmin.pending, (state)=>{
            state.loading = true;
            state.error = null;
            state.accessDenied = false;
        }).addCase(loginAdmin.fulfilled, (state, action)=>{
            const { role } = action.payload;
            state.loading = false;
            state.adminInfo = action.payload.user;
            state.role = role;
            state.token = action.payload.accessToken;
            state.error = null;
            state.accessDenied = role !== 'admin' && role !== 'superadmin'; // Đánh dấu quyền truy cập
        }).addCase(loginAdmin.rejected, (state, action)=>{
            state.loading = false;
            state.error = typeof action.payload === 'object' && action.payload.message ? action.payload.message : action.payload || 'Đăng nhập thất bại!';
        })// Logout
        .addCase(logoutAdmin.pending, (state)=>{
            state.loading = true;
        }).addCase(logoutAdmin.fulfilled, (state)=>{
            state.adminInfo = null;
            state.role = null;
            state.token = null;
            state.loading = false;
            state.accessDenied = false;
        }).addCase(logoutAdmin.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload;
        });
    }
});
const { resetAdminState } = adminSlice.actions;
const __TURBOPACK__default__export__ = adminSlice.reducer;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/store/slices/orderSlice.js [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s({
    "cancelExpiredOrders": (()=>cancelExpiredOrders),
    "clearOrderState": (()=>clearOrderState),
    "completeOrder": (()=>completeOrder),
    "createOrder": (()=>createOrder),
    "default": (()=>__TURBOPACK__default__export__),
    "deleteOrder": (()=>deleteOrder),
    "getOrderById": (()=>getOrderById),
    "updateOrderStatus": (()=>updateOrderStatus)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f40$reduxjs$2f$toolkit__$5b$external$5d$__$2840$reduxjs$2f$toolkit$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/@reduxjs/toolkit [external] (@reduxjs/toolkit, esm_import)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$apiClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/apiClient.js [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f40$reduxjs$2f$toolkit__$5b$external$5d$__$2840$reduxjs$2f$toolkit$2c$__esm_import$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$apiClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__
]);
([__TURBOPACK__imported__module__$5b$externals$5d2f40$reduxjs$2f$toolkit__$5b$external$5d$__$2840$reduxjs$2f$toolkit$2c$__esm_import$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$apiClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__);
;
;
const createOrder = (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$reduxjs$2f$toolkit__$5b$external$5d$__$2840$reduxjs$2f$toolkit$2c$__esm_import$29$__["createAsyncThunk"])('order/createOrder', async (orderData, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$apiClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["orderApi"].createOrder(orderData);
        return response;
    } catch (error) {
        return rejectWithValue(error);
    }
});
const getOrderById = (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$reduxjs$2f$toolkit__$5b$external$5d$__$2840$reduxjs$2f$toolkit$2c$__esm_import$29$__["createAsyncThunk"])('order/getOrderById', async (orderId, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$apiClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["orderApi"].getOrderById(orderId);
        return response;
    } catch (error) {
        return rejectWithValue(error);
    }
});
const updateOrderStatus = (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$reduxjs$2f$toolkit__$5b$external$5d$__$2840$reduxjs$2f$toolkit$2c$__esm_import$29$__["createAsyncThunk"])('order/updateOrderStatus', async ({ orderId, status }, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$apiClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["orderApi"].updateOrderStatus(orderId, status);
        return response;
    } catch (error) {
        return rejectWithValue(error);
    }
});
const completeOrder = (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$reduxjs$2f$toolkit__$5b$external$5d$__$2840$reduxjs$2f$toolkit$2c$__esm_import$29$__["createAsyncThunk"])('order/completeOrder', async (orderId, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$apiClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["orderApi"].completeOrder(orderId);
        return response;
    } catch (error) {
        return rejectWithValue(error);
    }
});
const deleteOrder = (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$reduxjs$2f$toolkit__$5b$external$5d$__$2840$reduxjs$2f$toolkit$2c$__esm_import$29$__["createAsyncThunk"])('order/deleteOrder', async (orderId, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$apiClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["orderApi"].deleteOrder(orderId);
        return response;
    } catch (error) {
        return rejectWithValue(error);
    }
});
const cancelExpiredOrders = (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$reduxjs$2f$toolkit__$5b$external$5d$__$2840$reduxjs$2f$toolkit$2c$__esm_import$29$__["createAsyncThunk"])('order/cancelExpiredOrders', async (_, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$apiClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["orderApi"].cancelExpiredOrders();
        return response;
    } catch (error) {
        return rejectWithValue(error);
    }
});
// 📌 Order Slice
const orderSlice = (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$reduxjs$2f$toolkit__$5b$external$5d$__$2840$reduxjs$2f$toolkit$2c$__esm_import$29$__["createSlice"])({
    name: 'order',
    initialState: {
        orders: [],
        currentOrder: null,
        loading: false,
        error: null,
        message: null
    },
    reducers: {
        clearOrderState: (state)=>{
            state.orders = [];
            state.currentOrder = null;
            state.loading = false;
            state.error = null;
            state.message = null;
        }
    },
    extraReducers: (builder)=>{
        builder// Create Order
        .addCase(createOrder.pending, (state)=>{
            state.loading = true;
            state.error = null;
        }).addCase(createOrder.fulfilled, (state, action)=>{
            state.loading = false;
            state.orders.push(action.payload);
            state.message = 'Order created successfully';
        }).addCase(createOrder.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload;
        })// Get Order by ID
        .addCase(getOrderById.pending, (state)=>{
            state.loading = true;
            state.error = null;
        }).addCase(getOrderById.fulfilled, (state, action)=>{
            state.loading = false;
            state.currentOrder = action.payload;
        }).addCase(getOrderById.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload;
        })// Update Order Status
        .addCase(updateOrderStatus.pending, (state)=>{
            state.loading = true;
            state.error = null;
        }).addCase(updateOrderStatus.fulfilled, (state, action)=>{
            state.loading = false;
            state.message = 'Order status updated successfully';
        }).addCase(updateOrderStatus.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload;
        })// Complete Order
        .addCase(completeOrder.pending, (state)=>{
            state.loading = true;
            state.error = null;
        }).addCase(completeOrder.fulfilled, (state, action)=>{
            state.loading = false;
            state.message = 'Order completed successfully';
        }).addCase(completeOrder.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload;
        })// Delete Order
        .addCase(deleteOrder.pending, (state)=>{
            state.loading = true;
            state.error = null;
        }).addCase(deleteOrder.fulfilled, (state, action)=>{
            state.loading = false;
            state.message = 'Order deleted successfully';
        }).addCase(deleteOrder.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload;
        })// Cancel Expired Orders
        .addCase(cancelExpiredOrders.pending, (state)=>{
            state.loading = true;
            state.error = null;
        }).addCase(cancelExpiredOrders.fulfilled, (state, action)=>{
            state.loading = false;
            state.message = 'Expired orders cancelled successfully';
        }).addCase(cancelExpiredOrders.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload;
        });
    }
});
const { clearOrderState } = orderSlice.actions;
const __TURBOPACK__default__export__ = orderSlice.reducer;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/store/slices/favoriteSlice.js [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s({
    "addToFavorite": (()=>addToFavorite),
    "checkFavoriteStatus": (()=>checkFavoriteStatus),
    "default": (()=>__TURBOPACK__default__export__),
    "forceUpdateFavorites": (()=>forceUpdateFavorites),
    "getFavorites": (()=>getFavorites),
    "removeFromFavorite": (()=>removeFromFavorite),
    "resetFavoriteState": (()=>resetFavoriteState),
    "selectFavoriteCount": (()=>selectFavoriteCount),
    "selectFavoriteItems": (()=>selectFavoriteItems),
    "selectFavoriteState": (()=>selectFavoriteState),
    "selectFavoriteStatuses": (()=>selectFavoriteStatuses),
    "selectFavoriteTotal": (()=>selectFavoriteTotal),
    "transferFavorites": (()=>transferFavorites)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f40$reduxjs$2f$toolkit__$5b$external$5d$__$2840$reduxjs$2f$toolkit$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/@reduxjs/toolkit [external] (@reduxjs/toolkit, esm_import)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$apiClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/apiClient.js [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f40$reduxjs$2f$toolkit__$5b$external$5d$__$2840$reduxjs$2f$toolkit$2c$__esm_import$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$apiClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__
]);
([__TURBOPACK__imported__module__$5b$externals$5d2f40$reduxjs$2f$toolkit__$5b$external$5d$__$2840$reduxjs$2f$toolkit$2c$__esm_import$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$apiClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__);
;
;
;
const getFavorites = (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$reduxjs$2f$toolkit__$5b$external$5d$__$2840$reduxjs$2f$toolkit$2c$__esm_import$29$__["createAsyncThunk"])('favorites/getFavorites', async ({ page = 1, limit = 10 }, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$apiClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["favoriteApi"].getFavorites(page, limit);
        return response;
    } catch (error) {
        return rejectWithValue(error);
    }
});
const forceUpdateFavorites = (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$reduxjs$2f$toolkit__$5b$external$5d$__$2840$reduxjs$2f$toolkit$2c$__esm_import$29$__["createAsyncThunk"])('favorites/forceUpdate', async ({ page = 1, limit = 10 }, { dispatch, rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$apiClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["favoriteApi"].getFavorites(page, limit);
        return response;
    } catch (error) {
        console.error('Error fetching favorites:', error);
        return rejectWithValue(error);
    }
});
const selectFavoriteState = (state)=>state.favorites;
const checkFavoriteStatus = (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$reduxjs$2f$toolkit__$5b$external$5d$__$2840$reduxjs$2f$toolkit$2c$__esm_import$29$__["createAsyncThunk"])('favorites/checkStatus', async (productId, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$apiClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["favoriteApi"].checkFavoriteStatus(productId);
        return {
            productId,
            ...response
        };
    } catch (error) {
        return rejectWithValue(error);
    }
});
const addToFavorite = (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$reduxjs$2f$toolkit__$5b$external$5d$__$2840$reduxjs$2f$toolkit$2c$__esm_import$29$__["createAsyncThunk"])('favorites/add', async (productId, { dispatch, rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$apiClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["favoriteApi"].addToFavorite(productId);
        await dispatch(forceUpdateFavorites({
            page: 1,
            limit: 10
        }));
        return {
            productId,
            ...response
        };
    } catch (error) {
        return rejectWithValue(error);
    }
});
const removeFromFavorite = (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$reduxjs$2f$toolkit__$5b$external$5d$__$2840$reduxjs$2f$toolkit$2c$__esm_import$29$__["createAsyncThunk"])('favorites/remove', async (productId, { dispatch, rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$apiClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["favoriteApi"].removeFromFavorite(productId);
        await dispatch(forceUpdateFavorites({
            page: 1,
            limit: 10
        }));
        return {
            productId,
            ...response
        };
    } catch (error) {
        return rejectWithValue(error);
    }
});
const transferFavorites = (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$reduxjs$2f$toolkit__$5b$external$5d$__$2840$reduxjs$2f$toolkit$2c$__esm_import$29$__["createAsyncThunk"])('favorites/transfer', async (_, { dispatch, rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$apiClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["favoriteApi"].transferFavorites();
        await dispatch(forceUpdateFavorites({
            page: 1,
            limit: 10
        }));
        return response;
    } catch (error) {
        return rejectWithValue(error);
    }
});
const initialState = {
    items: [],
    pagination: {
        total: 0,
        page: 1,
        limit: 10,
        totalPages: 1
    },
    loading: false,
    error: null,
    favoriteStatuses: {}
};
const selectFavoriteCount = (state)=>state.favorites.pagination.total || 0;
const selectFavoriteItems = (state)=>state.favorites.items;
const selectFavoriteTotal = (state)=>state.favorites.pagination.total || 0;
const selectFavoriteStatuses = (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$reduxjs$2f$toolkit__$5b$external$5d$__$2840$reduxjs$2f$toolkit$2c$__esm_import$29$__["createSelector"])([
    selectFavoriteItems
], (items)=>items.reduce((acc, item)=>{
        acc[item.product_id] = true;
        return acc;
    }, {}));
const favoriteSlice = (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$reduxjs$2f$toolkit__$5b$external$5d$__$2840$reduxjs$2f$toolkit$2c$__esm_import$29$__["createSlice"])({
    name: 'favorites',
    initialState,
    reducers: {
        resetFavoriteState: ()=>initialState
    },
    extraReducers: (builder)=>{
        builder.addCase(getFavorites.pending, (state)=>{
            state.loading = true;
            state.error = null;
        }).addCase(getFavorites.fulfilled, (state, action)=>{
            state.loading = false;
            state.items = action.payload.data;
            state.pagination = action.payload.pagination;
            state.error = null;
            // Cập nhật favoriteStatuses
            state.favoriteStatuses = action.payload.data.reduce((acc, item)=>{
                acc[item.product_id] = true;
                return acc;
            }, {});
        }).addCase(getFavorites.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload?.message || 'Có lỗi xảy ra';
        }).addCase(forceUpdateFavorites.pending, (state)=>{
            state.loading = true;
            state.error = null;
        }).addCase(forceUpdateFavorites.fulfilled, (state, action)=>{
            state.loading = false;
            state.items = action.payload.data;
            state.pagination = action.payload.pagination;
            state.error = null;
            // Cập nhật favoriteStatuses
            state.favoriteStatuses = action.payload.data.reduce((acc, item)=>{
                acc[item.product_id] = true;
                return acc;
            }, {});
        }).addCase(forceUpdateFavorites.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload?.message || 'Failed to update favorites';
        }).addCase(checkFavoriteStatus.fulfilled, (state, action)=>{
            state.favoriteStatuses[action.payload.productId] = action.payload.data;
        }).addCase(addToFavorite.fulfilled, (state, action)=>{
            const newItem = {
                product_id: action.payload.productId
            };
            if (!state.items.find((item)=>item.product_id === newItem.product_id)) {
                state.items.push(newItem);
                state.favoriteStatuses[action.payload.productId] = true;
                state.pagination.total += 1;
            }
        }).addCase(removeFromFavorite.fulfilled, (state, action)=>{
            state.items = state.items.filter((item)=>item.product_id !== action.payload.productId);
            delete state.favoriteStatuses[action.payload.productId];
            state.pagination.total = Math.max(0, state.pagination.total - 1);
        });
    }
});
const { resetFavoriteState } = favoriteSlice.actions;
const __TURBOPACK__default__export__ = favoriteSlice.reducer;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/store/slices/voucherSlice.js [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s({
    "addVoucher": (()=>addVoucher),
    "default": (()=>__TURBOPACK__default__export__),
    "deleteVoucher": (()=>deleteVoucher),
    "selectActiveVouchers": (()=>selectActiveVouchers),
    "selectAllVouchers": (()=>selectAllVouchers),
    "updateVoucher": (()=>updateVoucher)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f40$reduxjs$2f$toolkit__$5b$external$5d$__$2840$reduxjs$2f$toolkit$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/@reduxjs/toolkit [external] (@reduxjs/toolkit, esm_import)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f40$reduxjs$2f$toolkit__$5b$external$5d$__$2840$reduxjs$2f$toolkit$2c$__esm_import$29$__
]);
([__TURBOPACK__imported__module__$5b$externals$5d2f40$reduxjs$2f$toolkit__$5b$external$5d$__$2840$reduxjs$2f$toolkit$2c$__esm_import$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__);
;
const initialState = {
    items: [
        {
            id: '1',
            code: 'WELCOME50',
            description: 'Giảm 50.000đ cho đơn hàng đầu tiên',
            discount_amount: 50000,
            expiry_date: '2025-12-31',
            is_active: true
        },
        {
            id: '2',
            code: 'SUMMER2025',
            description: 'Giảm 100.000đ cho đơn hàng từ 500.000đ',
            discount_amount: 100000,
            expiry_date: '2025-08-31',
            is_active: true
        },
        {
            id: '3',
            code: 'NEWYEAR25',
            description: 'Giảm 250.000đ cho đơn hàng từ 1.000.000đ',
            discount_amount: 250000,
            expiry_date: '2025-01-31',
            is_active: true
        },
        {
            id: '4',
            code: 'FREESHIP',
            description: 'Miễn phí vận chuyển cho đơn hàng từ 300.000đ',
            discount_amount: 40000,
            expiry_date: '2025-06-30',
            is_active: true
        }
    ]
};
const voucherSlice = (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$reduxjs$2f$toolkit__$5b$external$5d$__$2840$reduxjs$2f$toolkit$2c$__esm_import$29$__["createSlice"])({
    name: 'vouchers',
    initialState,
    reducers: {
        addVoucher: (state, action)=>{
            const newVoucher = {
                ...action.payload,
                id: (state.items.length + 1).toString()
            };
            state.items.push(newVoucher);
        },
        updateVoucher: (state, action)=>{
            const index = state.items.findIndex((v)=>v.id === action.payload.id);
            if (index !== -1) {
                state.items[index] = {
                    ...state.items[index],
                    ...action.payload
                };
            }
        },
        deleteVoucher: (state, action)=>{
            state.items = state.items.filter((v)=>v.id !== action.payload);
        }
    }
});
const { addVoucher, updateVoucher, deleteVoucher } = voucherSlice.actions;
const selectAllVouchers = (state)=>state.vouchers.items;
const selectActiveVouchers = (state)=>state.vouchers.items.filter((voucher)=>voucher.is_active && new Date(voucher.expiry_date) > new Date());
const __TURBOPACK__default__export__ = voucherSlice.reducer;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/store/index.js [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f40$reduxjs$2f$toolkit__$5b$external$5d$__$2840$reduxjs$2f$toolkit$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/@reduxjs/toolkit [external] (@reduxjs/toolkit, esm_import)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$slices$2f$userSlice$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/slices/userSlice.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$slices$2f$productSlice$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/slices/productSlice.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$slices$2f$cartSlice$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/slices/cartSlice.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$slices$2f$reviewsSlice$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/slices/reviewsSlice.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$slices$2f$productsByCategorySlice$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/slices/productsByCategorySlice.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$slices$2f$colorsSlice$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/slices/colorsSlice.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$slices$2f$categorySlice$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/slices/categorySlice.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$slices$2f$adminUserSlice$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/slices/adminUserSlice.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$slices$2f$orderSlice$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/slices/orderSlice.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$slices$2f$favoriteSlice$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/slices/favoriteSlice.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$slices$2f$voucherSlice$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/slices/voucherSlice.js [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f40$reduxjs$2f$toolkit__$5b$external$5d$__$2840$reduxjs$2f$toolkit$2c$__esm_import$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$slices$2f$userSlice$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$slices$2f$productSlice$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$slices$2f$cartSlice$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$slices$2f$reviewsSlice$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$slices$2f$productsByCategorySlice$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$slices$2f$colorsSlice$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$slices$2f$categorySlice$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$slices$2f$adminUserSlice$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$slices$2f$orderSlice$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$slices$2f$favoriteSlice$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$slices$2f$voucherSlice$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__
]);
([__TURBOPACK__imported__module__$5b$externals$5d2f40$reduxjs$2f$toolkit__$5b$external$5d$__$2840$reduxjs$2f$toolkit$2c$__esm_import$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$slices$2f$userSlice$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$slices$2f$productSlice$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$slices$2f$cartSlice$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$slices$2f$reviewsSlice$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$slices$2f$productsByCategorySlice$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$slices$2f$colorsSlice$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$slices$2f$categorySlice$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$slices$2f$adminUserSlice$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$slices$2f$orderSlice$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$slices$2f$favoriteSlice$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$slices$2f$voucherSlice$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__);
;
;
;
;
;
;
;
;
;
;
;
;
const store = (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$reduxjs$2f$toolkit__$5b$external$5d$__$2840$reduxjs$2f$toolkit$2c$__esm_import$29$__["configureStore"])({
    reducer: {
        auth: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$slices$2f$userSlice$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"],
        products: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$slices$2f$productSlice$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"],
        cart: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$slices$2f$cartSlice$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"],
        reviews: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$slices$2f$reviewsSlice$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"],
        productsByCategory: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$slices$2f$productsByCategorySlice$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"],
        colors: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$slices$2f$colorsSlice$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"],
        categories: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$slices$2f$categorySlice$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"],
        adminUser: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$slices$2f$adminUserSlice$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"],
        order: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$slices$2f$orderSlice$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"],
        favorites: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$slices$2f$favoriteSlice$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"],
        vouchers: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$slices$2f$voucherSlice$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"]
    }
});
const __TURBOPACK__default__export__ = store;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[externals]/next/head.js [external] (next/head.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/head.js", () => require("next/head.js"));

module.exports = mod;
}}),
"[project]/src/pages/_app.js [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s({
    "default": (()=>App)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$redux__$5b$external$5d$__$28$react$2d$redux$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/react-redux [external] (react-redux, esm_import)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/index.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$next$2f$head$2e$js__$5b$external$5d$__$28$next$2f$head$2e$js$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/next/head.js [external] (next/head.js, cjs)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$redux__$5b$external$5d$__$28$react$2d$redux$2c$__esm_import$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__
]);
([__TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$redux__$5b$external$5d$__$28$react$2d$redux$2c$__esm_import$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__);
;
;
;
;
;
function App({ Component, pageProps }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$redux__$5b$external$5d$__$28$react$2d$redux$2c$__esm_import$29$__["Provider"], {
        store: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"],
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$next$2f$head$2e$js__$5b$external$5d$__$28$next$2f$head$2e$js$2c$__cjs$29$__["default"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("title", {
                        children: "Fashion Store"
                    }, void 0, false, {
                        fileName: "[project]/src/pages/_app.js",
                        lineNumber: 10,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("link", {
                        rel: "icon",
                        href: "https://firebasestorage.googleapis.com/v0/b/red89-f8933.appspot.com/o/KLTN%2FDALL%C2%B7E%202025-01-20%2014.48.34%20-%20A%20minimalistic%20logo%20for%20a%20Fashion%20Store%2C%20designed%20for%20use%20as%20a%20website%20favicon.%20The%20logo%20features%20a%20sleek%20and%20modern%20design%20with%20an%20abstract%20represent.webp?alt=media&token=da1ff9d9-3a6e-44ca-ba4c-6de1a45b80fc"
                    }, void 0, false, {
                        fileName: "[project]/src/pages/_app.js",
                        lineNumber: 11,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/pages/_app.js",
                lineNumber: 9,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Component, {
                ...pageProps
            }, void 0, false, {
                fileName: "[project]/src/pages/_app.js",
                lineNumber: 16,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/pages/_app.js",
        lineNumber: 8,
        columnNumber: 9
    }, this);
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[externals]/fs [external] (fs, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}}),
"[externals]/stream [external] (stream, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}}),
"[externals]/zlib [external] (zlib, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}}),
"[externals]/react-dom [external] (react-dom, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("react-dom", () => require("react-dom"));

module.exports = mod;
}}),
"[externals]/@fortawesome/react-fontawesome [external] (@fortawesome/react-fontawesome, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("@fortawesome/react-fontawesome", () => require("@fortawesome/react-fontawesome"));

module.exports = mod;
}}),
"[externals]/@fortawesome/free-solid-svg-icons [external] (@fortawesome/free-solid-svg-icons, esm_import)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
const mod = await __turbopack_context__.y("@fortawesome/free-solid-svg-icons");

__turbopack_context__.n(mod);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[project]/src/components/profiles/AuthInterface.js [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s({
    "default": (()=>AuthInterface)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$react$2d$fontawesome__$5b$external$5d$__$2840$fortawesome$2f$react$2d$fontawesome$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/@fortawesome/react-fontawesome [external] (@fortawesome/react-fontawesome, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons__$5b$external$5d$__$2840$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/@fortawesome/free-solid-svg-icons [external] (@fortawesome/free-solid-svg-icons, esm_import)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$apiClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/apiClient.js [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons__$5b$external$5d$__$2840$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2c$__esm_import$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$apiClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__
]);
([__TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons__$5b$external$5d$__$2840$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2c$__esm_import$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$apiClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__);
;
;
;
;
;
function AuthInterface({ authStep, setAuthStep, formData, setFormData, handleChange, handleLogin, handleRegister, handleOtpSubmit, handleForgotPassword, handleResetPassword, otp, setOtp, passwordVisibility, togglePasswordVisibility, loading, error }) {
    // State để lưu lỗi validation cho từng trường
    const [validationErrors, setValidationErrors] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])({
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        confirmPassword: '',
        phone: '',
        gender: ''
    });
    const [countdown, setCountdown] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(60);
    const [canResend, setCanResend] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    // Validate từng trường khi người dùng thay đổi giá trị
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        if (authStep === 'register') {
            validateField('firstname', formData.firstname);
            validateField('lastname', formData.lastname);
            validateField('email', formData.email);
            validateField('password', formData.password);
            validateField('confirmPassword', formData.confirmPassword);
            validateField('phone', formData.phone);
        } else if (authStep === 'reset-password') {
            validateField('newPassword', formData.newPassword);
            validateField('confirmNewPassword', formData.confirmNewPassword);
        }
    }, [
        formData,
        authStep
    ]);
    // Thêm useEffect để xử lý đếm ngược
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        let timer;
        if ((authStep === 'otp' || authStep === 'reset-password') && countdown > 0) {
            timer = setInterval(()=>{
                setCountdown((prev)=>prev - 1);
            }, 1000);
        }
        if (countdown === 0) {
            setCanResend(true);
        }
        return ()=>clearInterval(timer);
    }, [
        countdown,
        authStep
    ]);
    // Thêm hàm xử lý gửi lại OTP
    const handleResendOtp = async ()=>{
        try {
            setCanResend(false);
            setCountdown(60);
            console.log('formData.email', formData.email);
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$apiClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["userApi"].resend_otp(formData.email);
        } catch (error) {
            console.error('Lỗi khi gửi lại OTP:', error);
        }
    };
    // Hàm validate từng trường
    const validateField = (fieldName, value)=>{
        let error = '';
        switch(fieldName){
            case 'firstname':
                if (value && value.length < 2) {
                    error = 'Họ phải có ít nhất 2 ký tự';
                } else if (value && value.length > 20) {
                    error = 'Họ không được vượt quá 20 ký tự';
                } else if (value && !/^[\p{L}\s]+$/u.test(value)) {
                    error = 'Họ chỉ được chứa chữ cái';
                }
                break;
            case 'lastname':
                if (value && value.length < 2) {
                    error = 'Tên phải có ít nhất 2 ký tự';
                } else if (value && value.length > 20) {
                    error = 'Tên không được vượt quá 20 ký tự';
                } else if (value && !/^[a-zA-ZÀ-ỹ\s]+$/.test(value)) {
                    error = 'Tên chỉ được chứa chữ cái';
                }
                break;
            case 'email':
                if (value && !/\S+@\S+\.\S+/.test(value)) {
                    error = 'Email không hợp lệ';
                }
                break;
            case 'password':
                if (value && value.length < 6) {
                    error = 'Mật khẩu phải có ít nhất 6 ký tự';
                } else if (value && value.length > 20) {
                    error = 'Mật khẩu không được vượt quá 20 ký tự';
                } else if (value && value.includes(' ')) {
                    error = 'Mật khẩu không được chứa khoảng trắng';
                } else if (value && !/[A-Z]/.test(value)) {
                    error = 'Mật khẩu phải chứa ít nhất một chữ cái viết hoa';
                } else if (value && !/[a-z]/.test(value)) {
                    error = 'Mật khẩu phải chứa ít nhất một chữ cái viết thường';
                } else if (value && !/[0-9]/.test(value)) {
                    error = 'Mật khẩu phải chứa ít nhất một chữ số';
                } else if (value && !/[!@#$%^&*]/.test(value)) {
                    error = 'Mật khẩu phải chứa ít nhất một ký tự đặc biệt';
                }
                break;
            case 'confirmPassword':
                if (value !== formData.password) {
                    error = 'Mật khẩu không khớp';
                }
                break;
            case 'newPassword':
                if (value && value.length < 6) {
                    error = 'Mật khẩu phải có ít nhất 6 ký tự';
                } else if (value && value.length > 20) {
                    error = 'Mật khẩu không được vượt quá 20 ký tự';
                } else if (value && value.includes(' ')) {
                    error = 'Mật khẩu không được chứa khoảng trắng';
                } else if (value && !/[A-Z]/.test(value)) {
                    error = 'Mật khẩu phải chứa ít nhất một chữ cái viết hoa';
                } else if (value && !/[a-z]/.test(value)) {
                    error = 'Mật khẩu phải chứa ít nhất một chữ cái viết thường';
                } else if (value && !/[0-9]/.test(value)) {
                    error = 'Mật khẩu phải chứa ít nhất một chữ số';
                } else if (value && !/[!@#$%^&*]/.test(value)) {
                    error = 'Mật khẩu phải chứa ít nhất một ký tự đặc biệt';
                }
                break;
            case 'confirmNewPassword':
                if (value !== formData.newPassword) {
                    error = 'Mật khẩu không khớp';
                }
                break;
            case 'phone':
                if (value && !/^\d{10}$/.test(value)) {
                    error = 'Số điện thoại không hợp lệ (10 chữ số)';
                }
                break;
            default:
                break;
        }
        setValidationErrors((prev)=>({
                ...prev,
                [fieldName]: error
            }));
        return error;
    };
    // Xác thực toàn bộ form trước khi submit
    const validateForm = ()=>{
        let isValid = true;
        const errors = {};
        if (authStep === 'register') {
            // Validate firstname
            const firstnameError = validateField('firstname', formData.firstname);
            if (firstnameError) {
                errors.firstname = firstnameError;
                isValid = false;
            }
            // Validate lastname
            const lastnameError = validateField('lastname', formData.lastname);
            if (lastnameError) {
                errors.lastname = lastnameError;
                isValid = false;
            }
            // Validate email
            const emailError = validateField('email', formData.email);
            if (emailError) {
                errors.email = emailError;
                isValid = false;
            }
            // Validate password
            const passwordError = validateField('password', formData.password);
            if (passwordError) {
                errors.password = passwordError;
                isValid = false;
            }
            // Validate confirm password
            const confirmPasswordError = validateField('confirmPassword', formData.confirmPassword);
            if (confirmPasswordError) {
                errors.confirmPassword = confirmPasswordError;
                isValid = false;
            }
            // Validate phone
            const phoneError = validateField('phone', formData.phone);
            if (phoneError) {
                errors.phone = phoneError;
                isValid = false;
            }
            // Validate gender
            if (!formData.gender) {
                errors.gender = 'Vui lòng chọn giới tính';
                isValid = false;
            }
        } else if (authStep === 'reset-password') {
            // Validate newPassword
            const newPasswordError = validateField('newPassword', formData.newPassword);
            if (newPasswordError) {
                errors.newPassword = newPasswordError;
                isValid = false;
            }
            // Validate confirmNewPassword
            const confirmNewPasswordError = validateField('confirmNewPassword', formData.confirmNewPassword);
            if (confirmNewPasswordError) {
                errors.confirmNewPassword = confirmNewPasswordError;
                isValid = false;
            }
        }
        setValidationErrors(errors);
        return isValid;
    };
    // Ghi đè hàm handleRegister để thêm validation
    const handleRegisterWithValidation = async (e)=>{
        e.preventDefault();
        if (validateForm()) {
            handleRegister(e);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        className: "container mx-auto px-4 py-6",
        children: [
            authStep === 'login' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "bg-white p-6 rounded shadow-md max-w-md mx-auto",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                        className: "text-2xl font-bold mb-4 text-center",
                        children: "Đăng nhập"
                    }, void 0, false, {
                        fileName: "[project]/src/components/profiles/AuthInterface.js",
                        lineNumber: 255,
                        columnNumber: 21
                    }, this),
                    error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "mb-4 p-3 bg-red-100 text-red-700 rounded",
                        children: error.message === "User not found" || error.message === "Invalid password" ? "Tài khoản hoặc mật khẩu không đúng" : error.message
                    }, void 0, false, {
                        fileName: "[project]/src/components/profiles/AuthInterface.js",
                        lineNumber: 257,
                        columnNumber: 25
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("form", {
                        onSubmit: handleLogin,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                                        children: "Email:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/profiles/AuthInterface.js",
                                        lineNumber: 265,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                                        type: "email",
                                        name: "email",
                                        value: formData.email,
                                        onChange: handleChange,
                                        className: "w-full border p-2 rounded",
                                        required: true,
                                        onInvalid: (e)=>e.target.setCustomValidity("Không được để trống"),
                                        onInput: (e)=>e.target.setCustomValidity("")
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/profiles/AuthInterface.js",
                                        lineNumber: 266,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/profiles/AuthInterface.js",
                                lineNumber: 264,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                                        children: "Mật khẩu:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/profiles/AuthInterface.js",
                                        lineNumber: 278,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "relative",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                                                type: passwordVisibility.password ? 'text' : 'password',
                                                name: "password",
                                                value: formData.password,
                                                onChange: handleChange,
                                                className: "w-full border p-2 rounded",
                                                required: true,
                                                onInvalid: (e)=>e.target.setCustomValidity("Không được để trống"),
                                                onInput: (e)=>e.target.setCustomValidity("")
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/profiles/AuthInterface.js",
                                                lineNumber: 280,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                className: "absolute right-2 top-2 text-gray-600",
                                                onClick: ()=>togglePasswordVisibility('password'),
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$react$2d$fontawesome__$5b$external$5d$__$2840$fortawesome$2f$react$2d$fontawesome$2c$__cjs$29$__["FontAwesomeIcon"], {
                                                    icon: passwordVisibility.password ? __TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons__$5b$external$5d$__$2840$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2c$__esm_import$29$__["faEyeSlash"] : __TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons__$5b$external$5d$__$2840$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2c$__esm_import$29$__["faEye"]
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/profiles/AuthInterface.js",
                                                    lineNumber: 295,
                                                    columnNumber: 37
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/profiles/AuthInterface.js",
                                                lineNumber: 290,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/profiles/AuthInterface.js",
                                        lineNumber: 279,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/profiles/AuthInterface.js",
                                lineNumber: 277,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                type: "submit",
                                className: "bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700 transition w-full",
                                disabled: loading,
                                children: loading ? 'Đang đăng nhập...' : 'Đăng nhập'
                            }, void 0, false, {
                                fileName: "[project]/src/components/profiles/AuthInterface.js",
                                lineNumber: 299,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/profiles/AuthInterface.js",
                        lineNumber: 263,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                        className: "mt-4 text-center",
                        children: [
                            "Bạn chưa có tài khoản?",
                            ' ',
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                onClick: ()=>setAuthStep('register'),
                                className: "text-blue-600 hover:underline",
                                children: "Đăng ký"
                            }, void 0, false, {
                                fileName: "[project]/src/components/profiles/AuthInterface.js",
                                lineNumber: 309,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setAuthStep('forgot-password'),
                                    className: "text-blue-600 hover:underline",
                                    children: "Quên mật khẩu?"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/profiles/AuthInterface.js",
                                    lineNumber: 316,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/profiles/AuthInterface.js",
                                lineNumber: 315,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/profiles/AuthInterface.js",
                        lineNumber: 307,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/profiles/AuthInterface.js",
                lineNumber: 254,
                columnNumber: 17
            }, this),
            authStep === 'forgot-password' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "bg-white p-6 rounded shadow-md max-w-md mx-auto",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                        className: "text-2xl font-bold mb-4 text-center",
                        children: "Quên mật khẩu"
                    }, void 0, false, {
                        fileName: "[project]/src/components/profiles/AuthInterface.js",
                        lineNumber: 329,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("form", {
                        onSubmit: handleForgotPassword,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                                        children: "Email:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/profiles/AuthInterface.js",
                                        lineNumber: 332,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                                        type: "email",
                                        name: "email",
                                        value: formData.email,
                                        onChange: handleChange,
                                        className: "w-full border p-2 rounded",
                                        required: true,
                                        onInvalid: (e)=>e.target.setCustomValidity("Không được để trống"),
                                        onInput: (e)=>e.target.setCustomValidity("")
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/profiles/AuthInterface.js",
                                        lineNumber: 333,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/profiles/AuthInterface.js",
                                lineNumber: 331,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                type: "submit",
                                className: "bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700 transition w-full",
                                disabled: loading,
                                children: loading ? 'Đang gửi...' : 'Gửi mã OTP'
                            }, void 0, false, {
                                fileName: "[project]/src/components/profiles/AuthInterface.js",
                                lineNumber: 344,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/profiles/AuthInterface.js",
                        lineNumber: 330,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                        className: "mt-4 text-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                            onClick: ()=>setAuthStep('login'),
                            className: "text-blue-600 hover:underline",
                            children: "Quay lại đăng nhập"
                        }, void 0, false, {
                            fileName: "[project]/src/components/profiles/AuthInterface.js",
                            lineNumber: 353,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/profiles/AuthInterface.js",
                        lineNumber: 352,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/profiles/AuthInterface.js",
                lineNumber: 328,
                columnNumber: 17
            }, this),
            authStep === 'reset-password' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "bg-white p-6 rounded shadow-md max-w-md mx-auto",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                        className: "text-2xl font-bold mb-4 text-center",
                        children: "Đặt lại mật khẩu"
                    }, void 0, false, {
                        fileName: "[project]/src/components/profiles/AuthInterface.js",
                        lineNumber: 365,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("form", {
                        onSubmit: handleResetPassword,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                                        children: "Mã OTP:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/profiles/AuthInterface.js",
                                        lineNumber: 368,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "relative",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                value: otp,
                                                onChange: (e)=>setOtp(e.target.value),
                                                className: "w-full border p-2 rounded",
                                                required: true,
                                                onInvalid: (e)=>e.target.setCustomValidity("Không được để trống"),
                                                onInput: (e)=>e.target.setCustomValidity("")
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/profiles/AuthInterface.js",
                                                lineNumber: 370,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                className: "mt-2 text-sm",
                                                children: canResend ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: handleResendOtp,
                                                    className: "text-blue-600 hover:text-blue-800",
                                                    children: "Gửi lại mã OTP"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/profiles/AuthInterface.js",
                                                    lineNumber: 382,
                                                    columnNumber: 41
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                    className: "text-gray-500",
                                                    children: [
                                                        "Gửi lại mã sau ",
                                                        countdown,
                                                        " giây"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/profiles/AuthInterface.js",
                                                    lineNumber: 390,
                                                    columnNumber: 41
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/profiles/AuthInterface.js",
                                                lineNumber: 380,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/profiles/AuthInterface.js",
                                        lineNumber: 369,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/profiles/AuthInterface.js",
                                lineNumber: 367,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                                        children: "Mật khẩu mới:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/profiles/AuthInterface.js",
                                        lineNumber: 400,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "relative",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                                                type: passwordVisibility.newPassword ? 'text' : 'password',
                                                name: "newPassword",
                                                value: formData.newPassword,
                                                onChange: handleChange,
                                                className: `w-full border p-2 rounded ${validationErrors.newPassword ? 'border-red-500' : ''}`,
                                                required: true,
                                                onInvalid: (e)=>e.target.setCustomValidity("Không được để trống"),
                                                onInput: (e)=>e.target.setCustomValidity("")
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/profiles/AuthInterface.js",
                                                lineNumber: 402,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                className: "absolute right-2 top-2 text-gray-600",
                                                onClick: ()=>togglePasswordVisibility('newPassword'),
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$react$2d$fontawesome__$5b$external$5d$__$2840$fortawesome$2f$react$2d$fontawesome$2c$__cjs$29$__["FontAwesomeIcon"], {
                                                    icon: passwordVisibility.newPassword ? __TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons__$5b$external$5d$__$2840$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2c$__esm_import$29$__["faEyeSlash"] : __TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons__$5b$external$5d$__$2840$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2c$__esm_import$29$__["faEye"]
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/profiles/AuthInterface.js",
                                                    lineNumber: 417,
                                                    columnNumber: 37
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/profiles/AuthInterface.js",
                                                lineNumber: 412,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/profiles/AuthInterface.js",
                                        lineNumber: 401,
                                        columnNumber: 29
                                    }, this),
                                    validationErrors.newPassword && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                        className: "text-red-500 text-sm mt-1",
                                        children: validationErrors.newPassword
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/profiles/AuthInterface.js",
                                        lineNumber: 421,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/profiles/AuthInterface.js",
                                lineNumber: 399,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                                        children: "Xác nhận mật khẩu mới:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/profiles/AuthInterface.js",
                                        lineNumber: 426,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "relative",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                                                type: passwordVisibility.confirmNewPassword ? 'text' : 'password',
                                                name: "confirmNewPassword",
                                                value: formData.confirmNewPassword,
                                                onChange: handleChange,
                                                className: `w-full border p-2 rounded ${validationErrors.confirmNewPassword ? 'border-red-500' : ''}`,
                                                required: true,
                                                onInvalid: (e)=>e.target.setCustomValidity("Không được để trống"),
                                                onInput: (e)=>e.target.setCustomValidity("")
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/profiles/AuthInterface.js",
                                                lineNumber: 428,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                className: "absolute right-2 top-2 text-gray-600",
                                                onClick: ()=>togglePasswordVisibility('confirmNewPassword'),
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$react$2d$fontawesome__$5b$external$5d$__$2840$fortawesome$2f$react$2d$fontawesome$2c$__cjs$29$__["FontAwesomeIcon"], {
                                                    icon: passwordVisibility.confirmNewPassword ? __TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons__$5b$external$5d$__$2840$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2c$__esm_import$29$__["faEyeSlash"] : __TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons__$5b$external$5d$__$2840$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2c$__esm_import$29$__["faEye"]
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/profiles/AuthInterface.js",
                                                    lineNumber: 443,
                                                    columnNumber: 37
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/profiles/AuthInterface.js",
                                                lineNumber: 438,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/profiles/AuthInterface.js",
                                        lineNumber: 427,
                                        columnNumber: 29
                                    }, this),
                                    validationErrors.confirmNewPassword && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                        className: "text-red-500 text-sm mt-1",
                                        children: validationErrors.confirmNewPassword
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/profiles/AuthInterface.js",
                                        lineNumber: 447,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/profiles/AuthInterface.js",
                                lineNumber: 425,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                type: "submit",
                                className: "bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700 transition w-full",
                                disabled: loading,
                                children: loading ? 'Đang xử lý...' : 'Đặt lại mật khẩu'
                            }, void 0, false, {
                                fileName: "[project]/src/components/profiles/AuthInterface.js",
                                lineNumber: 451,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/profiles/AuthInterface.js",
                        lineNumber: 366,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/profiles/AuthInterface.js",
                lineNumber: 364,
                columnNumber: 17
            }, this),
            authStep === 'register' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "bg-white p-6 rounded shadow-md max-w-md mx-auto",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                        className: "text-2xl font-bold mb-4 text-center",
                        children: "Đăng ký"
                    }, void 0, false, {
                        fileName: "[project]/src/components/profiles/AuthInterface.js",
                        lineNumber: 464,
                        columnNumber: 21
                    }, this),
                    error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "mb-4 p-3 bg-red-100 text-red-700 rounded",
                        children: error.message || error
                    }, void 0, false, {
                        fileName: "[project]/src/components/profiles/AuthInterface.js",
                        lineNumber: 466,
                        columnNumber: 25
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("form", {
                        onSubmit: handleRegisterWithValidation,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                                        children: "Họ:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/profiles/AuthInterface.js",
                                        lineNumber: 472,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        name: "firstname",
                                        value: formData.firstname,
                                        onChange: handleChange,
                                        className: `w-full border p-2 rounded ${validationErrors.firstname ? 'border-red-500' : ''}`,
                                        required: true,
                                        onInvalid: (e)=>e.target.setCustomValidity("Không được để trống"),
                                        onInput: (e)=>e.target.setCustomValidity("")
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/profiles/AuthInterface.js",
                                        lineNumber: 473,
                                        columnNumber: 29
                                    }, this),
                                    validationErrors.firstname && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                        className: "text-red-500 text-sm mt-1",
                                        children: validationErrors.firstname
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/profiles/AuthInterface.js",
                                        lineNumber: 484,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/profiles/AuthInterface.js",
                                lineNumber: 471,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                                        children: "Tên:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/profiles/AuthInterface.js",
                                        lineNumber: 488,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        name: "lastname",
                                        value: formData.lastname,
                                        onChange: handleChange,
                                        className: `w-full border p-2 rounded ${validationErrors.lastname ? 'border-red-500' : ''}`,
                                        required: true,
                                        onInvalid: (e)=>e.target.setCustomValidity("Không được để trống"),
                                        onInput: (e)=>e.target.setCustomValidity("")
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/profiles/AuthInterface.js",
                                        lineNumber: 489,
                                        columnNumber: 29
                                    }, this),
                                    validationErrors.lastname && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                        className: "text-red-500 text-sm mt-1",
                                        children: validationErrors.lastname
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/profiles/AuthInterface.js",
                                        lineNumber: 500,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/profiles/AuthInterface.js",
                                lineNumber: 487,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                                        children: "Email:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/profiles/AuthInterface.js",
                                        lineNumber: 504,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                                        type: "email",
                                        name: "email",
                                        value: formData.email,
                                        onChange: handleChange,
                                        className: `w-full border p-2 rounded ${validationErrors.email ? 'border-red-500' : ''}`,
                                        required: true,
                                        onInvalid: (e)=>e.target.setCustomValidity("Không được để trống"),
                                        onInput: (e)=>e.target.setCustomValidity("")
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/profiles/AuthInterface.js",
                                        lineNumber: 505,
                                        columnNumber: 29
                                    }, this),
                                    validationErrors.email && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                        className: "text-red-500 text-sm mt-1",
                                        children: validationErrors.email
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/profiles/AuthInterface.js",
                                        lineNumber: 516,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/profiles/AuthInterface.js",
                                lineNumber: 503,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                                        children: "Mật khẩu:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/profiles/AuthInterface.js",
                                        lineNumber: 520,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "relative",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                                                type: passwordVisibility.password ? 'text' : 'password',
                                                name: "password",
                                                value: formData.password,
                                                onChange: handleChange,
                                                className: `w-full border p-2 rounded ${validationErrors.password ? 'border-red-500' : ''}`,
                                                required: true,
                                                onInvalid: (e)=>e.target.setCustomValidity("Không được để trống"),
                                                onInput: (e)=>e.target.setCustomValidity("")
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/profiles/AuthInterface.js",
                                                lineNumber: 522,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                className: "absolute right-2 top-2 text-gray-600",
                                                onClick: ()=>togglePasswordVisibility('password'),
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$react$2d$fontawesome__$5b$external$5d$__$2840$fortawesome$2f$react$2d$fontawesome$2c$__cjs$29$__["FontAwesomeIcon"], {
                                                    icon: passwordVisibility.password ? __TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons__$5b$external$5d$__$2840$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2c$__esm_import$29$__["faEyeSlash"] : __TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons__$5b$external$5d$__$2840$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2c$__esm_import$29$__["faEye"]
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/profiles/AuthInterface.js",
                                                    lineNumber: 537,
                                                    columnNumber: 37
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/profiles/AuthInterface.js",
                                                lineNumber: 532,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/profiles/AuthInterface.js",
                                        lineNumber: 521,
                                        columnNumber: 29
                                    }, this),
                                    validationErrors.password && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                        className: "text-red-500 text-sm mt-1",
                                        children: validationErrors.password
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/profiles/AuthInterface.js",
                                        lineNumber: 543,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/profiles/AuthInterface.js",
                                lineNumber: 519,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                                        children: "Nhập lại mật khẩu:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/profiles/AuthInterface.js",
                                        lineNumber: 547,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "relative",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                                                type: passwordVisibility.confirmPassword ? 'text' : 'password',
                                                name: "confirmPassword",
                                                value: formData.confirmPassword,
                                                onChange: handleChange,
                                                className: `w-full border p-2 rounded ${validationErrors.confirmPassword ? 'border-red-500' : ''}`,
                                                required: true,
                                                onInvalid: (e)=>e.target.setCustomValidity("Không được để trống"),
                                                onInput: (e)=>e.target.setCustomValidity("")
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/profiles/AuthInterface.js",
                                                lineNumber: 549,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                className: "absolute right-2 top-2 text-gray-600",
                                                onClick: ()=>togglePasswordVisibility('confirmPassword'),
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$react$2d$fontawesome__$5b$external$5d$__$2840$fortawesome$2f$react$2d$fontawesome$2c$__cjs$29$__["FontAwesomeIcon"], {
                                                    icon: passwordVisibility.confirmPassword ? __TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons__$5b$external$5d$__$2840$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2c$__esm_import$29$__["faEyeSlash"] : __TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons__$5b$external$5d$__$2840$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2c$__esm_import$29$__["faEye"]
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/profiles/AuthInterface.js",
                                                    lineNumber: 564,
                                                    columnNumber: 37
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/profiles/AuthInterface.js",
                                                lineNumber: 559,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/profiles/AuthInterface.js",
                                        lineNumber: 548,
                                        columnNumber: 29
                                    }, this),
                                    validationErrors.confirmPassword && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                        className: "text-red-500 text-sm mt-1",
                                        children: validationErrors.confirmPassword
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/profiles/AuthInterface.js",
                                        lineNumber: 570,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/profiles/AuthInterface.js",
                                lineNumber: 546,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                                        children: "Số điện thoại:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/profiles/AuthInterface.js",
                                        lineNumber: 574,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        name: "phone",
                                        value: formData.phone,
                                        onChange: handleChange,
                                        className: `w-full border p-2 rounded ${validationErrors.phone ? 'border-red-500' : ''}`,
                                        required: true,
                                        onInvalid: (e)=>e.target.setCustomValidity("Không được để trống"),
                                        onInput: (e)=>e.target.setCustomValidity("")
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/profiles/AuthInterface.js",
                                        lineNumber: 575,
                                        columnNumber: 29
                                    }, this),
                                    validationErrors.phone && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                        className: "text-red-500 text-sm mt-1",
                                        children: validationErrors.phone
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/profiles/AuthInterface.js",
                                        lineNumber: 586,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/profiles/AuthInterface.js",
                                lineNumber: 573,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                                        children: "Chọn giới tính:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/profiles/AuthInterface.js",
                                        lineNumber: 590,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("select", {
                                        name: "gender",
                                        value: formData.gender,
                                        onChange: handleChange,
                                        className: `w-full border p-2 rounded ${validationErrors.gender ? 'border-red-500' : ''}`,
                                        required: true,
                                        onInvalid: (e)=>e.target.setCustomValidity("Không được để trống"),
                                        onInput: (e)=>e.target.setCustomValidity(""),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("option", {
                                                value: "",
                                                children: "Chọn"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/profiles/AuthInterface.js",
                                                lineNumber: 600,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("option", {
                                                value: "male",
                                                children: "Nam"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/profiles/AuthInterface.js",
                                                lineNumber: 601,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("option", {
                                                value: "female",
                                                children: "Nữ"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/profiles/AuthInterface.js",
                                                lineNumber: 602,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("option", {
                                                value: "other",
                                                children: "Khác"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/profiles/AuthInterface.js",
                                                lineNumber: 603,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/profiles/AuthInterface.js",
                                        lineNumber: 591,
                                        columnNumber: 29
                                    }, this),
                                    validationErrors.gender && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                        className: "text-red-500 text-sm mt-1",
                                        children: validationErrors.gender
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/profiles/AuthInterface.js",
                                        lineNumber: 606,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/profiles/AuthInterface.js",
                                lineNumber: 589,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                type: "submit",
                                className: "bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700 transition w-full",
                                disabled: loading,
                                children: loading ? 'Đang đăng ký...' : 'Đăng ký'
                            }, void 0, false, {
                                fileName: "[project]/src/components/profiles/AuthInterface.js",
                                lineNumber: 609,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/profiles/AuthInterface.js",
                        lineNumber: 470,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                        className: "mt-4 text-center",
                        children: [
                            "Đã có tài khoản?",
                            ' ',
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                onClick: ()=>setAuthStep('login'),
                                className: "text-blue-600 hover:underline",
                                children: "Đăng nhập"
                            }, void 0, false, {
                                fileName: "[project]/src/components/profiles/AuthInterface.js",
                                lineNumber: 619,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/profiles/AuthInterface.js",
                        lineNumber: 617,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/profiles/AuthInterface.js",
                lineNumber: 463,
                columnNumber: 17
            }, this),
            authStep === 'otp' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "bg-white p-6 rounded shadow-md max-w-md mx-auto",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                        className: "text-2xl font-bold mb-4 text-center",
                        children: "Xác nhận OTP"
                    }, void 0, false, {
                        fileName: "[project]/src/components/profiles/AuthInterface.js",
                        lineNumber: 630,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                        className: "mb-4 text-center",
                        children: "Mã OTP đã được gửi đến email của bạn."
                    }, void 0, false, {
                        fileName: "[project]/src/components/profiles/AuthInterface.js",
                        lineNumber: 631,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("form", {
                        onSubmit: handleOtpSubmit,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                                        children: "Nhập OTP:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/profiles/AuthInterface.js",
                                        lineNumber: 634,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        value: otp,
                                        onChange: (e)=>setOtp(e.target.value),
                                        className: "w-full border p-2 rounded",
                                        required: true,
                                        maxLength: 6,
                                        onInvalid: (e)=>e.target.setCustomValidity("Không được để trống"),
                                        onInput: (e)=>e.target.setCustomValidity("")
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/profiles/AuthInterface.js",
                                        lineNumber: 635,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/profiles/AuthInterface.js",
                                lineNumber: 633,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                type: "submit",
                                className: "bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700 transition w-full mb-3",
                                disabled: loading,
                                children: loading ? 'Đang xác thực...' : 'Xác thực OTP'
                            }, void 0, false, {
                                fileName: "[project]/src/components/profiles/AuthInterface.js",
                                lineNumber: 646,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/profiles/AuthInterface.js",
                        lineNumber: 632,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "text-center mt-4",
                        children: canResend ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                            onClick: handleResendOtp,
                            className: "text-blue-600 hover:text-blue-800 transition",
                            children: "Gửi lại mã OTP"
                        }, void 0, false, {
                            fileName: "[project]/src/components/profiles/AuthInterface.js",
                            lineNumber: 657,
                            columnNumber: 29
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                            className: "text-gray-600",
                            children: [
                                "Gửi lại mã sau: ",
                                countdown,
                                "s"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/profiles/AuthInterface.js",
                            lineNumber: 664,
                            columnNumber: 29
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/profiles/AuthInterface.js",
                        lineNumber: 655,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/profiles/AuthInterface.js",
                lineNumber: 629,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/profiles/AuthInterface.js",
        lineNumber: 252,
        columnNumber: 9
    }, this);
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[externals]/react-toastify [external] (react-toastify, esm_import)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
const mod = await __turbopack_context__.y("react-toastify");

__turbopack_context__.n(mod);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[project]/src/components/profiles/ProfileInterface.js [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s({
    "default": (()=>ProfileInterface)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$apiClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/apiClient.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fi/index.mjs [ssr] (ecmascript)"); // Icon sửa
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ri$2f$index$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/ri/index.mjs [ssr] (ecmascript)"); // Icon xóa
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/md/index.mjs [ssr] (ecmascript)"); // Icon mặc định
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$redux__$5b$external$5d$__$28$react$2d$redux$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/react-redux [external] (react-redux, esm_import)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$toastify__$5b$external$5d$__$28$react$2d$toastify$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/react-toastify [external] (react-toastify, esm_import)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$slices$2f$userSlice$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/slices/userSlice.js [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$apiClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$redux__$5b$external$5d$__$28$react$2d$redux$2c$__esm_import$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$toastify__$5b$external$5d$__$28$react$2d$toastify$2c$__esm_import$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$slices$2f$userSlice$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__
]);
([__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$apiClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$redux__$5b$external$5d$__$28$react$2d$redux$2c$__esm_import$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$toastify__$5b$external$5d$__$28$react$2d$toastify$2c$__esm_import$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$slices$2f$userSlice$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__);
;
;
;
;
;
;
;
;
;
// Component hiển thị trạng thái đơn hàng
const StatusBadge = ({ status })=>{
    const getStatusColor = ()=>{
        switch(status?.toLowerCase()){
            case 'pending':
                return 'bg-yellow-100 text-yellow-800';
            case 'processing':
                return 'bg-gray-100 text-gray-800';
            case 'shipping':
                return 'bg-indigo-100 text-indigo-800';
            case 'completed':
                return 'bg-green-100 text-green-800';
            case 'cancelled':
                return 'bg-red-100 text-red-800';
            default:
                return 'bg-gray-100 text-gray-800';
        }
    };
    const getStatusText = ()=>{
        switch(status?.toLowerCase()){
            case 'pending':
                return 'Chờ xử lý';
            case 'processing':
                return 'Đang xử lý';
            case 'shipping':
                return 'Đang giao hàng';
            case 'completed':
                return 'Hoàn thành';
            case 'cancelled':
                return 'Đã hủy';
            case 'in_payment':
                return 'Đang thanh toán';
            default:
                return 'Không xác định';
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
        className: `px-2 py-1 rounded-full text-xs font-medium ${getStatusColor()}`,
        children: getStatusText()
    }, void 0, false, {
        fileName: "[project]/src/components/profiles/ProfileInterface.js",
        lineNumber: 51,
        columnNumber: 9
    }, this);
};
// Component hiển thị trạng thái thanh toán
const PaymentStatusBadge = ({ status })=>{
    const getPaymentStatusColor = ()=>{
        switch(status?.toLowerCase()){
            case 'paid':
                return 'bg-green-100 text-green-800';
            case 'pending':
                return 'bg-yellow-100 text-yellow-800';
            case 'failed':
                return 'bg-red-100 text-red-800';
            default:
                return 'bg-gray-100 text-gray-800';
        }
    };
    const getPaymentStatusText = ()=>{
        switch(status?.toLowerCase()){
            case 'paid':
                return 'Đã thanh toán';
            case 'pending':
                return 'Chờ thanh toán';
            case 'failed':
                return 'Thanh toán thất bại';
            default:
                return 'Thanh toán thất bại';
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
        className: `px-2 py-1 rounded-full text-xs font-medium ${getPaymentStatusColor()}`,
        children: getPaymentStatusText()
    }, void 0, false, {
        fileName: "[project]/src/components/profiles/ProfileInterface.js",
        lineNumber: 86,
        columnNumber: 9
    }, this);
};
// Component hiển thị thông tin đơn hàng dạng card
const OrderCard = ({ order, onViewDetail })=>{
    const formatDate = (dateString)=>{
        return new Date(dateString).toLocaleDateString('vi-VN', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };
    const formatPrice = (price)=>{
        return new Intl.NumberFormat('vi-VN', {
            style: 'currency',
            currency: 'VND'
        }).format(price);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        className: "border rounded-lg p-3 lg:p-4 hover:shadow-md transition duration-200",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "flex flex-col sm:flex-row justify-between items-start gap-2 mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "w-full sm:w-auto",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                className: "font-medium text-base lg:text-lg",
                                children: [
                                    "Đơn hàng #",
                                    order.id
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/profiles/ProfileInterface.js",
                                lineNumber: 116,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                className: "text-xs lg:text-sm text-gray-600",
                                children: formatDate(order.dates.created_at)
                            }, void 0, false, {
                                fileName: "[project]/src/components/profiles/ProfileInterface.js",
                                lineNumber: 117,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/profiles/ProfileInterface.js",
                        lineNumber: 115,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(StatusBadge, {
                        status: order.status
                    }, void 0, false, {
                        fileName: "[project]/src/components/profiles/ProfileInterface.js",
                        lineNumber: 119,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/profiles/ProfileInterface.js",
                lineNumber: 114,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "space-y-3",
                children: order.items.slice(0, 2).map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "flex items-start gap-2 lg:gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("img", {
                                src: item.variant.color.image,
                                className: "w-14 h-14 lg:w-16 lg:h-16 object-cover rounded",
                                alt: item.product.name
                            }, void 0, false, {
                                fileName: "[project]/src/components/profiles/ProfileInterface.js",
                                lineNumber: 126,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "flex-1 min-w-0",
                                children: [
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                        className: "font-medium text-sm lg:text-base truncate",
                                        children: item.product.name
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/profiles/ProfileInterface.js",
                                        lineNumber: 132,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                        className: "text-xs lg:text-sm text-gray-600 truncate",
                                        children: [
                                            "Màu: ",
                                            item.variant.color.name,
                                            " | Size: ",
                                            item.variant.size
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/profiles/ProfileInterface.js",
                                        lineNumber: 135,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                        className: "text-xs lg:text-sm text-gray-600",
                                        children: [
                                            item.quantity,
                                            " x ",
                                            formatPrice(item.price)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/profiles/ProfileInterface.js",
                                        lineNumber: 138,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/profiles/ProfileInterface.js",
                                lineNumber: 131,
                                columnNumber: 25
                            }, this)
                        ]
                    }, index, true, {
                        fileName: "[project]/src/components/profiles/ProfileInterface.js",
                        lineNumber: 125,
                        columnNumber: 21
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/profiles/ProfileInterface.js",
                lineNumber: 123,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "flex justify-between items-center border-t pt-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                className: "text-sm text-gray-600",
                                children: "Tổng tiền"
                            }, void 0, false, {
                                fileName: "[project]/src/components/profiles/ProfileInterface.js",
                                lineNumber: 149,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                className: "font-medium text-lg text-gray-600",
                                children: formatPrice(order.pricing.final_price)
                            }, void 0, false, {
                                fileName: "[project]/src/components/profiles/ProfileInterface.js",
                                lineNumber: 150,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/profiles/ProfileInterface.js",
                        lineNumber: 148,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                        onClick: ()=>onViewDetail(order),
                        className: "px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg transition",
                        children: "Xem chi tiết"
                    }, void 0, false, {
                        fileName: "[project]/src/components/profiles/ProfileInterface.js",
                        lineNumber: 154,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/profiles/ProfileInterface.js",
                lineNumber: 147,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/profiles/ProfileInterface.js",
        lineNumber: 112,
        columnNumber: 9
    }, this);
};
// Component Modal chi tiết đơn hàng
const OrderDetail = ({ order, onClose })=>{
    const formatDate = (dateString)=>{
        return new Date(dateString).toLocaleDateString('vi-VN', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };
    const formatPrice = (price)=>{
        return new Intl.NumberFormat('vi-VN', {
            style: 'currency',
            currency: 'VND'
        }).format(price);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
            className: "bg-white rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto m-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "sticky top-0 bg-white p-4 border-b flex justify-between items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                    className: "text-lg font-medium",
                                    children: [
                                        "Chi tiết đơn hàng #",
                                        order.id
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/profiles/ProfileInterface.js",
                                    lineNumber: 190,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(StatusBadge, {
                                    status: order.status
                                }, void 0, false, {
                                    fileName: "[project]/src/components/profiles/ProfileInterface.js",
                                    lineNumber: 191,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/profiles/ProfileInterface.js",
                            lineNumber: 189,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            className: "text-gray-500 hover:text-gray-700",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
                                className: "w-6 h-6",
                                fill: "none",
                                stroke: "currentColor",
                                viewBox: "0 0 24 24",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: "2",
                                    d: "M6 18L18 6M6 6l12 12"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/profiles/ProfileInterface.js",
                                    lineNumber: 195,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/profiles/ProfileInterface.js",
                                lineNumber: 194,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/profiles/ProfileInterface.js",
                            lineNumber: 193,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/profiles/ProfileInterface.js",
                    lineNumber: 188,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "p-6 space-y-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "bg-gray-50 p-4 rounded-lg",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h4", {
                                    className: "font-medium mb-3",
                                    children: "Thông tin người nhận"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/profiles/ProfileInterface.js",
                                    lineNumber: 203,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-2 gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-gray-600",
                                                    children: "Họ và tên"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/profiles/ProfileInterface.js",
                                                    lineNumber: 206,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                    className: "font-medium",
                                                    children: order.shipping.recipient.name
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/profiles/ProfileInterface.js",
                                                    lineNumber: 207,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/profiles/ProfileInterface.js",
                                            lineNumber: 205,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-gray-600",
                                                    children: "Số điện thoại"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/profiles/ProfileInterface.js",
                                                    lineNumber: 210,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                    className: "font-medium",
                                                    children: order.shipping.recipient.phone
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/profiles/ProfileInterface.js",
                                                    lineNumber: 211,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/profiles/ProfileInterface.js",
                                            lineNumber: 209,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-gray-600",
                                                    children: "Email"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/profiles/ProfileInterface.js",
                                                    lineNumber: 214,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                    className: "font-medium",
                                                    children: order.shipping.recipient.email
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/profiles/ProfileInterface.js",
                                                    lineNumber: 215,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/profiles/ProfileInterface.js",
                                            lineNumber: 213,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            className: "col-span-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-gray-600",
                                                    children: "Địa chỉ"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/profiles/ProfileInterface.js",
                                                    lineNumber: 218,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                    className: "font-medium",
                                                    children: `${order.shipping.recipient.address.street}, ${order.shipping.recipient.address.ward}, 
                                    ${order.shipping.recipient.address.district}, ${order.shipping.recipient.address.city}`
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/profiles/ProfileInterface.js",
                                                    lineNumber: 219,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/profiles/ProfileInterface.js",
                                            lineNumber: 217,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/profiles/ProfileInterface.js",
                                    lineNumber: 204,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/profiles/ProfileInterface.js",
                            lineNumber: 202,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h4", {
                                    className: "font-medium mb-3",
                                    children: "Sản phẩm"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/profiles/ProfileInterface.js",
                                    lineNumber: 229,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "space-y-3",
                                    children: order.items.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            className: "flex gap-4 p-3 bg-gray-50 rounded",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("img", {
                                                    src: item.variant.color.image,
                                                    className: "w-20 h-20 object-cover rounded",
                                                    alt: item.product.name
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/profiles/ProfileInterface.js",
                                                    lineNumber: 233,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                    className: "flex-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                            className: "font-medium",
                                                            children: item.product.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/profiles/ProfileInterface.js",
                                                            lineNumber: 239,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                            className: "text-sm text-gray-600",
                                                            children: [
                                                                "Màu: ",
                                                                item.variant.color.name,
                                                                " | Size: ",
                                                                item.variant.size
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/profiles/ProfileInterface.js",
                                                            lineNumber: 240,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                            className: "flex justify-between mt-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                                    className: "text-sm",
                                                                    children: [
                                                                        "Số lượng: ",
                                                                        item.quantity
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/profiles/ProfileInterface.js",
                                                                    lineNumber: 244,
                                                                    columnNumber: 45
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                                    className: "font-medium",
                                                                    children: formatPrice(item.price)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/profiles/ProfileInterface.js",
                                                                    lineNumber: 245,
                                                                    columnNumber: 45
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/profiles/ProfileInterface.js",
                                                            lineNumber: 243,
                                                            columnNumber: 41
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/profiles/ProfileInterface.js",
                                                    lineNumber: 238,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, index, true, {
                                            fileName: "[project]/src/components/profiles/ProfileInterface.js",
                                            lineNumber: 232,
                                            columnNumber: 33
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/profiles/ProfileInterface.js",
                                    lineNumber: 230,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/profiles/ProfileInterface.js",
                            lineNumber: 228,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-2 gap-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "bg-gray-50 p-4 rounded-lg",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h4", {
                                            className: "font-medium mb-3",
                                            children: "Thông tin vận chuyển"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/profiles/ProfileInterface.js",
                                            lineNumber: 256,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-gray-600",
                                            children: "Đơn vị vận chuyển"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/profiles/ProfileInterface.js",
                                            lineNumber: 257,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                            className: "font-medium mb-2",
                                            children: order.shipping.description
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/profiles/ProfileInterface.js",
                                            lineNumber: 258,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-gray-600",
                                            children: "Phí vận chuyển"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/profiles/ProfileInterface.js",
                                            lineNumber: 259,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                            className: "font-medium",
                                            children: formatPrice(order.shipping.shipping_fee)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/profiles/ProfileInterface.js",
                                            lineNumber: 260,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/profiles/ProfileInterface.js",
                                    lineNumber: 255,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "bg-gray-50 p-4 rounded-lg",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h4", {
                                            className: "font-medium mb-3",
                                            children: "Thông tin thanh toán"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/profiles/ProfileInterface.js",
                                            lineNumber: 263,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-gray-600",
                                            children: "Phương thức"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/profiles/ProfileInterface.js",
                                            lineNumber: 264,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                            className: "font-medium mb-2",
                                            children: order.payment.method === 'cash_on_delivery' ? 'Thanh toán khi nhận hàng' : order.payment.method
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/profiles/ProfileInterface.js",
                                            lineNumber: 265,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-gray-600",
                                            children: "Trạng thái"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/profiles/ProfileInterface.js",
                                            lineNumber: 268,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(PaymentStatusBadge, {
                                            status: order.payment.status
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/profiles/ProfileInterface.js",
                                            lineNumber: 269,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-gray-600",
                                            children: "Ngày thanh toán"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/profiles/ProfileInterface.js",
                                            lineNumber: 270,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                            className: "font-medium",
                                            children: order.payment.status === 'paid' ? formatDate(order.payment.payment_date) : 'Chưa thanh toán'
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/profiles/ProfileInterface.js",
                                            lineNumber: 271,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/profiles/ProfileInterface.js",
                                    lineNumber: 262,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/profiles/ProfileInterface.js",
                            lineNumber: 254,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "border-t pt-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                className: "text-gray-600",
                                                children: "Tổng tiền hàng"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/profiles/ProfileInterface.js",
                                                lineNumber: 281,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                children: formatPrice(order.pricing.original_price)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/profiles/ProfileInterface.js",
                                                lineNumber: 282,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/profiles/ProfileInterface.js",
                                        lineNumber: 280,
                                        columnNumber: 29
                                    }, this),
                                    parseFloat(order.pricing.discount_amount) > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                className: "text-gray-600",
                                                children: "Giảm giá"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/profiles/ProfileInterface.js",
                                                lineNumber: 286,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                className: "text-red-600",
                                                children: [
                                                    "-",
                                                    formatPrice(order.pricing.discount_amount)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/profiles/ProfileInterface.js",
                                                lineNumber: 287,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/profiles/ProfileInterface.js",
                                        lineNumber: 285,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                className: "text-gray-600",
                                                children: "Phí vận chuyển"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/profiles/ProfileInterface.js",
                                                lineNumber: 293,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                children: formatPrice(order.shipping.shipping_fee)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/profiles/ProfileInterface.js",
                                                lineNumber: 294,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/profiles/ProfileInterface.js",
                                        lineNumber: 292,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between font-medium text-lg pt-2 border-t",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                children: "Tổng cộng"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/profiles/ProfileInterface.js",
                                                lineNumber: 297,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                className: "text-gray-600",
                                                children: formatPrice(order.pricing.final_price)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/profiles/ProfileInterface.js",
                                                lineNumber: 298,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/profiles/ProfileInterface.js",
                                        lineNumber: 296,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/profiles/ProfileInterface.js",
                                lineNumber: 279,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/profiles/ProfileInterface.js",
                            lineNumber: 278,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/profiles/ProfileInterface.js",
                    lineNumber: 200,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/profiles/ProfileInterface.js",
            lineNumber: 186,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/profiles/ProfileInterface.js",
        lineNumber: 185,
        columnNumber: 9
    }, this);
};
function ProfileInterface({ user, userLoading, handleLogout, selectedTab, setSelectedTab, orders, orderLoading }) {
    // Thêm vào component ProfileInterface
    const [addresses, setAddresses] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])([]);
    const [addressLoading, setAddressLoading] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const [showAddressForm, setShowAddressForm] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const [selectedAddress, setSelectedAddress] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(null);
    const [addressFormData, setAddressFormData] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])({
        street: '',
        ward: '',
        district: '',
        city: '',
        country: 'Vietnam',
        address_type: 'home',
        is_default: false
    });
    const [provinces, setProvinces] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])([]);
    const [districts, setDistricts] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])([]);
    const [wards, setWards] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])([]);
    const [selectedOrder, setSelectedOrder] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(null);
    const [isEditing, setIsEditing] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const [profileData, setProfileData] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])({
        firstname: '',
        lastname: '',
        phone: '',
        gender: ''
    });
    const [updateLoading, setUpdateLoading] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    // Thêm state để quản lý lỗi validation
    const [validationErrors, setValidationErrors] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])({
        firstname: '',
        lastname: '',
        phone: ''
    });
    const dispatch = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$redux__$5b$external$5d$__$28$react$2d$redux$2c$__esm_import$29$__["useDispatch"])();
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        if (user) {
            setProfileData({
                firstname: user.firstname || '',
                lastname: user.lastname || '',
                phone: user.phone || '',
                gender: user.gender || ''
            });
        }
    }, [
        user
    ]);
    const handleProfileChange = (e)=>{
        const { name, value } = e.target;
        setProfileData((prev)=>({
                ...prev,
                [name]: value
            }));
        // Xóa lỗi validation khi người dùng nhập lại
        if (validationErrors[name]) {
            setValidationErrors((prev)=>({
                    ...prev,
                    [name]: ''
                }));
        }
    };
    // Hàm validate dữ liệu thông tin cá nhân
    const validateProfileData = ()=>{
        const errors = {};
        let isValid = true;
        // Kiểm tra họ
        if (!profileData.firstname) {
            errors.firstname = 'Vui lòng nhập họ';
            isValid = false;
        } else if (!/^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s]+$/.test(profileData.firstname)) {
            errors.firstname = 'Họ chỉ được chứa chữ cái';
            isValid = false;
        } else if (profileData.firstname.length < 2) {
            errors.firstname = 'Họ phải có ít nhất 2 ký tự';
            isValid = false;
        } else if (profileData.firstname.length > 20) {
            errors.firstname = 'Họ không được vượt quá 20 ký tự';
            isValid = false;
        }
        // Kiểm tra tên
        if (!profileData.lastname) {
            errors.lastname = 'Vui lòng nhập tên';
            isValid = false;
        } else if (!/^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s]+$/.test(profileData.lastname)) {
            errors.lastname = 'Tên chỉ được chứa chữ cái';
            isValid = false;
        } else if (profileData.lastname.length < 2) {
            errors.lastname = 'Tên phải có ít nhất 2 ký tự';
            isValid = false;
        } else if (profileData.lastname.length > 20) {
            errors.lastname = 'Tên không được vượt quá 20 ký tự';
            isValid = false;
        }
        // Kiểm tra số điện thoại
        if (profileData.phone && !/^\d{10}$/.test(profileData.phone)) {
            errors.phone = 'Số điện thoại không hợp lệ (cần đúng 10 chữ số)';
            isValid = false;
        }
        setValidationErrors(errors);
        return isValid;
    };
    // Thêm handler cho submit
    const handleUpdateProfile = async (e)=>{
        e.preventDefault();
        // Kiểm tra validation trước khi gửi dữ liệu
        if (!validateProfileData()) {
            // Hiển thị thông báo lỗi chung nếu cần
            __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$toastify__$5b$external$5d$__$28$react$2d$toastify$2c$__esm_import$29$__["toast"].error('Vui lòng điền đầy đủ thông tin hợp lệ.');
            return;
        }
        setUpdateLoading(true);
        try {
            // Tạo object data thay vì FormData
            const updateData = {
                firstname: profileData.firstname,
                lastname: profileData.lastname,
                phone: profileData.phone,
                gender: profileData.gender
            };
            const result = await dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$slices$2f$userSlice$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["updateProfile"])(updateData)).unwrap();
            // Cập nhật state với dữ liệu mới
            setProfileData({
                firstname: result.firstname || '',
                lastname: result.lastname || '',
                phone: result.phone || '',
                gender: result.gender || ''
            });
            setIsEditing(false);
            __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$toastify__$5b$external$5d$__$28$react$2d$toastify$2c$__esm_import$29$__["toast"].success('Cập nhật thông tin thành công!');
        } catch (error) {
            __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$toastify__$5b$external$5d$__$28$react$2d$toastify$2c$__esm_import$29$__["toast"].error(error.message || 'Có lỗi xảy ra khi cập nhật thông tin');
        } finally{
            setUpdateLoading(false);
        }
    };
    // Fetch addresses
    const fetchAddresses = async ()=>{
        try {
            setAddressLoading(true);
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$apiClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["addressApi"].getAddresses();
            setAddresses(response.data);
        } catch (error) {
            console.error('Failed to fetch addresses:', error);
        } finally{
            setAddressLoading(false);
        }
    };
    // Handle form submission
    const handleAddressSubmit = async (e)=>{
        e.preventDefault();
        // Validate địa chỉ đường
        const streetRegex = /^(?=.*\d)(?=.*[a-zA-Z]).+$/; // Phải chứa ít nhất 1 số và 1 chữ
        if (!streetRegex.test(addressFormData.street)) {
            alert('Địa chỉ phải bao gồm số nhà và tên đường');
            return;
        }
        try {
            if (selectedAddress) {
                await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$apiClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["addressApi"].updateAddress(selectedAddress.id, addressFormData);
            } else {
                await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$apiClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["addressApi"].createAddress(addressFormData);
            }
            fetchAddresses();
            setShowAddressForm(false);
            setSelectedAddress(null);
            setAddressFormData({
                street: '',
                ward: '',
                district: '',
                city: '',
                country: 'Vietnam',
                address_type: 'home',
                is_default: false
            });
        } catch (error) {
            console.error('Failed to save address:', error);
        }
    };
    // Handle address deletion
    const handleDeleteAddress = async (addressId)=>{
        if (window.confirm('Bạn có chắc chắn muốn xóa địa chỉ này?')) {
            try {
                await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$apiClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["addressApi"].deleteAddress(addressId);
                fetchAddresses();
            } catch (error) {
                console.error('Failed to delete address:', error);
            }
        }
    };
    // Handle setting default address
    const handleSetDefaultAddress = async (addressId)=>{
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$apiClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["addressApi"].setDefaultAddress(addressId);
            fetchAddresses();
        } catch (error) {
            console.error('Failed to set default address:', error);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        const fetchProvinces = async ()=>{
            try {
                const response = await fetch('https://provinces.open-api.vn/api/?depth=3');
                const data = await response.json();
                setProvinces(data);
            } catch (error) {
                console.error('Failed to fetch provinces:', error);
            }
        };
        fetchProvinces();
    }, []);
    const handleProvinceChange = (e)=>{
        const provinceCode = e.target.value;
        const selectedProvince = provinces.find((p)=>p.code === Number(provinceCode));
        setAddressFormData({
            ...addressFormData,
            city: selectedProvince?.name || '',
            district: '',
            ward: ''
        });
        setDistricts(selectedProvince?.districts || []);
        setWards([]);
    };
    const handleDistrictChange = (e)=>{
        const districtCode = e.target.value;
        const selectedDistrict = districts.find((d)=>d.code === Number(districtCode));
        setAddressFormData({
            ...addressFormData,
            district: selectedDistrict?.name || '',
            ward: ''
        });
        setWards(selectedDistrict?.wards || []);
    };
    const handleWardChange = (e)=>{
        const wardCode = e.target.value;
        const selectedWard = wards.find((w)=>w.code === Number(wardCode));
        setAddressFormData({
            ...addressFormData,
            ward: selectedWard?.name || ''
        });
    };
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        if (selectedTab === 'address') {
            fetchAddresses();
        }
    }, [
        selectedTab
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        className: "container mx-auto px-4 py-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h1", {
                className: "text-2xl font-bold mb-4",
                children: "Thông tin tài khoản"
            }, void 0, false, {
                fileName: "[project]/src/components/profiles/ProfileInterface.js",
                lineNumber: 596,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "flex flex-col md:flex-row gap-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "w-full lg:w-1/4 bg-white p-4 rounded shadow-md",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                className: `w-full text-left px-4 py-2 mb-2 rounded transition duration-200 
                            ${selectedTab === 'info' ? 'bg-gray-600 text-white' : 'bg-gray-100 hover:bg-gray-200'}`,
                                onClick: ()=>setSelectedTab('info'),
                                children: "Thông tin cá nhân"
                            }, void 0, false, {
                                fileName: "[project]/src/components/profiles/ProfileInterface.js",
                                lineNumber: 600,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                className: `w-full text-left px-4 py-2 mb-2 rounded transition duration-200 
                            ${selectedTab === 'orders' ? 'bg-gray-600 text-white' : 'bg-gray-100 hover:bg-gray-200'}`,
                                onClick: ()=>{
                                    setSelectedTab('orders');
                                    setIsEditing(false);
                                },
                                children: "Đơn hàng của tôi"
                            }, void 0, false, {
                                fileName: "[project]/src/components/profiles/ProfileInterface.js",
                                lineNumber: 610,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                className: `w-full text-left px-4 py-2 mb-2 rounded transition duration-200 
                            ${selectedTab === 'address' ? 'bg-gray-600 text-white' : 'bg-gray-100 hover:bg-gray-200'}`,
                                onClick: ()=>{
                                    setSelectedTab('address');
                                    setIsEditing(false);
                                },
                                children: "Sổ địa chỉ"
                            }, void 0, false, {
                                fileName: "[project]/src/components/profiles/ProfileInterface.js",
                                lineNumber: 623,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                className: "w-full bg-red-600 text-white px-4 py-2 rounded hover:bg-red-600    transition duration-200 mt-6",
                                onClick: handleLogout,
                                children: "Đăng xuất"
                            }, void 0, false, {
                                fileName: "[project]/src/components/profiles/ProfileInterface.js",
                                lineNumber: 636,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/profiles/ProfileInterface.js",
                        lineNumber: 599,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "w-full lg:w-3/4 bg-white p-4 lg:p-6 rounded shadow-md",
                        children: [
                            selectedTab === 'info' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between items-center mb-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                                                className: "text-xl font-semibold",
                                                children: "Thông tin cá nhân"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/profiles/ProfileInterface.js",
                                                lineNumber: 651,
                                                columnNumber: 33
                                            }, this),
                                            !isEditing && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setIsEditing(true),
                                                className: "p-2 hover:bg-gray-100 rounded-full transition-colors",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__["FiEdit2"], {
                                                    className: "w-5 h-5 text-gray-600 "
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/profiles/ProfileInterface.js",
                                                    lineNumber: 657,
                                                    columnNumber: 41
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/profiles/ProfileInterface.js",
                                                lineNumber: 653,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/profiles/ProfileInterface.js",
                                        lineNumber: 650,
                                        columnNumber: 29
                                    }, this),
                                    userLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "flex justify-center items-center h-40",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            className: "animate-spin rounded-full h-8 w-8 border-b-2 border-gray-600"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/profiles/ProfileInterface.js",
                                            lineNumber: 664,
                                            columnNumber: 37
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/profiles/ProfileInterface.js",
                                        lineNumber: 663,
                                        columnNumber: 33
                                    }, this) : user ? isEditing ? // Form cập nhật với validation
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("form", {
                                        onSubmit: handleUpdateProfile,
                                        className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                className: "space-y-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                                                        className: "block text-sm font-medium text-gray-700",
                                                        children: [
                                                            "Họ ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                className: "text-red-500",
                                                                children: "*"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/profiles/ProfileInterface.js",
                                                                lineNumber: 673,
                                                                columnNumber: 52
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/profiles/ProfileInterface.js",
                                                        lineNumber: 672,
                                                        columnNumber: 45
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        name: "firstname",
                                                        value: profileData.firstname,
                                                        onChange: handleProfileChange,
                                                        className: `w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-gray-200 
                                                ${validationErrors.firstname ? 'border-red-500' : ''}`,
                                                        required: true,
                                                        onInvalid: (e)=>e.target.setCustomValidity("Không được để trống"),
                                                        onInput: (e)=>e.target.setCustomValidity("")
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/profiles/ProfileInterface.js",
                                                        lineNumber: 675,
                                                        columnNumber: 45
                                                    }, this),
                                                    validationErrors.firstname && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                        className: "text-red-500 text-xs mt-1",
                                                        children: validationErrors.firstname
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/profiles/ProfileInterface.js",
                                                        lineNumber: 687,
                                                        columnNumber: 49
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/profiles/ProfileInterface.js",
                                                lineNumber: 671,
                                                columnNumber: 41
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                className: "space-y-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                                                        className: "block text-sm font-medium text-gray-700",
                                                        children: [
                                                            "Tên ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                className: "text-red-500",
                                                                children: "*"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/profiles/ProfileInterface.js",
                                                                lineNumber: 694,
                                                                columnNumber: 53
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/profiles/ProfileInterface.js",
                                                        lineNumber: 693,
                                                        columnNumber: 45
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        name: "lastname",
                                                        value: profileData.lastname,
                                                        onChange: handleProfileChange,
                                                        className: `w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-gray-200
                                                ${validationErrors.lastname ? 'border-red-500' : ''}`,
                                                        required: true,
                                                        onInvalid: (e)=>e.target.setCustomValidity("Không được để trống"),
                                                        onInput: (e)=>e.target.setCustomValidity("")
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/profiles/ProfileInterface.js",
                                                        lineNumber: 696,
                                                        columnNumber: 45
                                                    }, this),
                                                    validationErrors.lastname && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                        className: "text-red-500 text-xs mt-1",
                                                        children: validationErrors.lastname
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/profiles/ProfileInterface.js",
                                                        lineNumber: 708,
                                                        columnNumber: 49
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/profiles/ProfileInterface.js",
                                                lineNumber: 692,
                                                columnNumber: 41
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                className: "space-y-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                                                        className: "block text-sm font-medium text-gray-700",
                                                        children: "Email"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/profiles/ProfileInterface.js",
                                                        lineNumber: 714,
                                                        columnNumber: 45
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                                                        type: "email",
                                                        value: user.email,
                                                        className: "w-full px-4 py-2 border rounded-lg bg-gray-50",
                                                        disabled: true
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/profiles/ProfileInterface.js",
                                                        lineNumber: 715,
                                                        columnNumber: 45
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/profiles/ProfileInterface.js",
                                                lineNumber: 713,
                                                columnNumber: 41
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                className: "space-y-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                                                        className: "block text-sm font-medium text-gray-700",
                                                        children: "Số điện thoại"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/profiles/ProfileInterface.js",
                                                        lineNumber: 725,
                                                        columnNumber: 45
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                                                        type: "tel",
                                                        name: "phone",
                                                        value: profileData.phone,
                                                        onChange: handleProfileChange,
                                                        className: `w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-gray-200
                                                ${validationErrors.phone ? 'border-red-500' : ''}`,
                                                        placeholder: "Nhập 10 chữ số",
                                                        required: true,
                                                        onInvalid: (e)=>e.target.setCustomValidity("Không được để trống"),
                                                        onInput: (e)=>e.target.setCustomValidity("")
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/profiles/ProfileInterface.js",
                                                        lineNumber: 726,
                                                        columnNumber: 45
                                                    }, this),
                                                    validationErrors.phone && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                        className: "text-red-500 text-xs mt-1",
                                                        children: validationErrors.phone
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/profiles/ProfileInterface.js",
                                                        lineNumber: 739,
                                                        columnNumber: 49
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/profiles/ProfileInterface.js",
                                                lineNumber: 724,
                                                columnNumber: 41
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                className: "space-y-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                                                        className: "block text-sm font-medium text-gray-700",
                                                        children: [
                                                            "Giới tính ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                className: "text-red-500",
                                                                children: "*"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/profiles/ProfileInterface.js",
                                                                lineNumber: 746,
                                                                columnNumber: 59
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/profiles/ProfileInterface.js",
                                                        lineNumber: 745,
                                                        columnNumber: 45
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("select", {
                                                        name: "gender",
                                                        value: profileData.gender,
                                                        onChange: handleProfileChange,
                                                        className: `w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-gray-200 transition-colors duration-200
                                                            ${!profileData.gender ? 'border-red-500' : 'border-gray-300'}`,
                                                        required: true,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("option", {
                                                                value: "",
                                                                disabled: true,
                                                                children: "Chọn giới tính"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/profiles/ProfileInterface.js",
                                                                lineNumber: 756,
                                                                columnNumber: 49
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("option", {
                                                                value: "male",
                                                                children: "Nam"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/profiles/ProfileInterface.js",
                                                                lineNumber: 757,
                                                                columnNumber: 49
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("option", {
                                                                value: "female",
                                                                children: "Nữ"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/profiles/ProfileInterface.js",
                                                                lineNumber: 758,
                                                                columnNumber: 49
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("option", {
                                                                value: "other",
                                                                children: "Khác"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/profiles/ProfileInterface.js",
                                                                lineNumber: 759,
                                                                columnNumber: 49
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/profiles/ProfileInterface.js",
                                                        lineNumber: 748,
                                                        columnNumber: 45
                                                    }, this),
                                                    !profileData.gender && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                        className: "text-red-500 text-sm mt-1 animate-[slideDown_0.2s_ease-in-out]",
                                                        children: "Vui lòng chọn giới tính"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/profiles/ProfileInterface.js",
                                                        lineNumber: 762,
                                                        columnNumber: 49
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/profiles/ProfileInterface.js",
                                                lineNumber: 744,
                                                columnNumber: 41
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                className: "md:col-span-2 flex justify-end gap-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: ()=>{
                                                            setIsEditing(false);
                                                            setValidationErrors({});
                                                            setProfileData({
                                                                firstname: user.firstname || '',
                                                                lastname: user.lastname || '',
                                                                phone: user.phone || '',
                                                                gender: user.gender || ''
                                                            });
                                                        },
                                                        className: "px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50",
                                                        children: "Hủy"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/profiles/ProfileInterface.js",
                                                        lineNumber: 769,
                                                        columnNumber: 45
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                                        type: "submit",
                                                        disabled: updateLoading,
                                                        className: `px-6 py-2 rounded-lg text-white
                                                ${updateLoading ? 'bg-gray-400' : 'bg-green-600 hover:bg-green-700'}`,
                                                        children: updateLoading ? 'Đang cập nhật...' : 'Lưu thay đổi'
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/profiles/ProfileInterface.js",
                                                        lineNumber: 785,
                                                        columnNumber: 45
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/profiles/ProfileInterface.js",
                                                lineNumber: 768,
                                                columnNumber: 41
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/profiles/ProfileInterface.js",
                                        lineNumber: 669,
                                        columnNumber: 37
                                    }, this) : // Giữ nguyên phần hiển thị thông tin
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                className: "space-y-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                        className: "text-sm font-medium text-gray-700",
                                                        children: "Họ"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/profiles/ProfileInterface.js",
                                                        lineNumber: 799,
                                                        columnNumber: 45
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                        className: "",
                                                        children: user.firstname || 'Chưa cập nhật'
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/profiles/ProfileInterface.js",
                                                        lineNumber: 800,
                                                        columnNumber: 45
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/profiles/ProfileInterface.js",
                                                lineNumber: 798,
                                                columnNumber: 41
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                className: "space-y-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                        className: "text-sm font-medium text-gray-700",
                                                        children: "Tên"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/profiles/ProfileInterface.js",
                                                        lineNumber: 803,
                                                        columnNumber: 45
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                        className: "",
                                                        children: user.lastname || 'Chưa cập nhật'
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/profiles/ProfileInterface.js",
                                                        lineNumber: 804,
                                                        columnNumber: 45
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/profiles/ProfileInterface.js",
                                                lineNumber: 802,
                                                columnNumber: 41
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                className: "space-y-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                        className: "text-sm font-medium text-gray-700",
                                                        children: "Email"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/profiles/ProfileInterface.js",
                                                        lineNumber: 807,
                                                        columnNumber: 45
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                        className: "",
                                                        children: user.email || 'Chưa cập nhật'
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/profiles/ProfileInterface.js",
                                                        lineNumber: 808,
                                                        columnNumber: 45
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/profiles/ProfileInterface.js",
                                                lineNumber: 806,
                                                columnNumber: 41
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                className: "space-y-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                        className: "text-sm font-medium text-gray-700",
                                                        children: "Số điện thoại"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/profiles/ProfileInterface.js",
                                                        lineNumber: 811,
                                                        columnNumber: 45
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                        className: "",
                                                        children: user.phone || 'Chưa cập nhật'
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/profiles/ProfileInterface.js",
                                                        lineNumber: 812,
                                                        columnNumber: 45
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/profiles/ProfileInterface.js",
                                                lineNumber: 810,
                                                columnNumber: 41
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                className: "space-y-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                        className: "text-sm font-medium text-gray-700",
                                                        children: "Giới tính"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/profiles/ProfileInterface.js",
                                                        lineNumber: 815,
                                                        columnNumber: 45
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                        className: "",
                                                        children: user.gender === "male" ? "Nam" : user.gender === "female" ? "Nữ" : user.gender === "other" ? "Khác" : "Chưa cập nhật"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/profiles/ProfileInterface.js",
                                                        lineNumber: 816,
                                                        columnNumber: 45
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/profiles/ProfileInterface.js",
                                                lineNumber: 814,
                                                columnNumber: 41
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/profiles/ProfileInterface.js",
                                        lineNumber: 797,
                                        columnNumber: 37
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "text-center py-8 text-gray-500",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                            children: "Không thể tải thông tin người dùng"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/profiles/ProfileInterface.js",
                                            lineNumber: 826,
                                            columnNumber: 37
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/profiles/ProfileInterface.js",
                                        lineNumber: 825,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/profiles/ProfileInterface.js",
                                lineNumber: 649,
                                columnNumber: 25
                            }, this),
                            selectedTab === 'orders' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                                        className: "text-xl font-semibold mb-6",
                                        children: "Đơn hàng của tôi"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/profiles/ProfileInterface.js",
                                        lineNumber: 835,
                                        columnNumber: 29
                                    }, this),
                                    orderLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "flex justify-center items-center h-40",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            className: "animate-spin rounded-full h-8 w-8 border-b-2 border-gray-600"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/profiles/ProfileInterface.js",
                                            lineNumber: 838,
                                            columnNumber: 37
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/profiles/ProfileInterface.js",
                                        lineNumber: 837,
                                        columnNumber: 33
                                    }, this) : orders?.data?.orders?.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "space-y-4",
                                        children: orders.data.orders.map((order)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(OrderCard, {
                                                order: order,
                                                onViewDetail: setSelectedOrder
                                            }, order.id, false, {
                                                fileName: "[project]/src/components/profiles/ProfileInterface.js",
                                                lineNumber: 843,
                                                columnNumber: 41
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/profiles/ProfileInterface.js",
                                        lineNumber: 841,
                                        columnNumber: 33
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "text-center py-8 text-gray-500",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                            children: "Bạn chưa có đơn hàng nào"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/profiles/ProfileInterface.js",
                                            lineNumber: 852,
                                            columnNumber: 37
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/profiles/ProfileInterface.js",
                                        lineNumber: 851,
                                        columnNumber: 33
                                    }, this),
                                    selectedOrder && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(OrderDetail, {
                                        order: selectedOrder,
                                        onClose: ()=>setSelectedOrder(null)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/profiles/ProfileInterface.js",
                                        lineNumber: 857,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/profiles/ProfileInterface.js",
                                lineNumber: 834,
                                columnNumber: 25
                            }, this),
                            selectedTab === 'address' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between items-center mb-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                                                className: "text-xl font-semibold",
                                                children: "Sổ địa chỉ"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/profiles/ProfileInterface.js",
                                                lineNumber: 869,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                                onClick: ()=>{
                                                    setShowAddressForm(true);
                                                    setSelectedAddress(null);
                                                },
                                                className: "bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700",
                                                children: "Thêm địa chỉ mới"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/profiles/ProfileInterface.js",
                                                lineNumber: 870,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/profiles/ProfileInterface.js",
                                        lineNumber: 868,
                                        columnNumber: 29
                                    }, this),
                                    addressLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "flex justify-center items-center h-40",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            className: "animate-spin rounded-full h-8 w-8 border-b-2 border-gray-600"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/profiles/ProfileInterface.js",
                                            lineNumber: 883,
                                            columnNumber: 37
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/profiles/ProfileInterface.js",
                                        lineNumber: 882,
                                        columnNumber: 33
                                    }, this) : addresses.length > 0 ? /* Address List */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "space-y-4",
                                        children: addresses.map((address)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                className: "border border-gray-200 rounded-lg p-4 hover:shadow-md transition duration-200",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-col sm:flex-row justify-between gap-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                            className: "flex-1 min-w-0",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                                    className: "flex flex-wrap items-center gap-2 mb-3",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                            className: "font-medium text-sm sm:text-base text-gray-800",
                                                                            children: address.address_type === 'home' ? 'Nhà riêng' : address.address_type === 'office' ? 'Văn phòng' : 'Khác'
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/profiles/ProfileInterface.js",
                                                                            lineNumber: 895,
                                                                            columnNumber: 57
                                                                        }, this),
                                                                        address.is_default && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                            className: "bg-gray-100 text-yellow-600 text-xs px-2.5 py-1 rounded-full    font-medium flex items-center gap-1",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__["MdStars"], {
                                                                                    className: "w-4 h-4"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/profiles/ProfileInterface.js",
                                                                                    lineNumber: 902,
                                                                                    columnNumber: 65
                                                                                }, this),
                                                                                "Mặc định"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/components/profiles/ProfileInterface.js",
                                                                            lineNumber: 900,
                                                                            columnNumber: 61
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/profiles/ProfileInterface.js",
                                                                    lineNumber: 894,
                                                                    columnNumber: 53
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                                    className: "space-y-2 text-sm sm:text-base",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                                            className: "flex flex-col sm:flex-row sm:items-baseline",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                                    className: "text-gray-700 font-medium w-full sm:w-32 shrink-0",
                                                                                    children: "Số nhà, Đường:"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/profiles/ProfileInterface.js",
                                                                                    lineNumber: 911,
                                                                                    columnNumber: 61
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                                    className: "text-gray-600 break-words",
                                                                                    children: address.street
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/profiles/ProfileInterface.js",
                                                                                    lineNumber: 914,
                                                                                    columnNumber: 61
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/components/profiles/ProfileInterface.js",
                                                                            lineNumber: 910,
                                                                            columnNumber: 57
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                                            className: "flex flex-col sm:flex-row sm:items-baseline",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                                    className: "text-gray-700 font-medium w-full sm:w-32 shrink-0",
                                                                                    children: "Phường/Xã:"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/profiles/ProfileInterface.js",
                                                                                    lineNumber: 920,
                                                                                    columnNumber: 61
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                                    className: "text-gray-600 break-words",
                                                                                    children: address.ward
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/profiles/ProfileInterface.js",
                                                                                    lineNumber: 923,
                                                                                    columnNumber: 61
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/components/profiles/ProfileInterface.js",
                                                                            lineNumber: 919,
                                                                            columnNumber: 57
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                                            className: "flex flex-col sm:flex-row sm:items-baseline",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                                    className: "text-gray-700 font-medium w-full sm:w-32 shrink-0",
                                                                                    children: "Quận/Huyện:"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/profiles/ProfileInterface.js",
                                                                                    lineNumber: 929,
                                                                                    columnNumber: 61
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                                    className: "text-gray-600 break-words",
                                                                                    children: address.district
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/profiles/ProfileInterface.js",
                                                                                    lineNumber: 932,
                                                                                    columnNumber: 61
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/components/profiles/ProfileInterface.js",
                                                                            lineNumber: 928,
                                                                            columnNumber: 57
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                                            className: "flex flex-col sm:flex-row sm:items-baseline",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                                    className: "text-gray-700 font-medium w-full sm:w-32 shrink-0",
                                                                                    children: "Tỉnh/Thành phố:"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/profiles/ProfileInterface.js",
                                                                                    lineNumber: 938,
                                                                                    columnNumber: 61
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                                    className: "text-gray-600 break-words",
                                                                                    children: address.city
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/profiles/ProfileInterface.js",
                                                                                    lineNumber: 941,
                                                                                    columnNumber: 61
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/components/profiles/ProfileInterface.js",
                                                                            lineNumber: 937,
                                                                            columnNumber: 57
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                                            className: "flex flex-col sm:flex-row sm:items-baseline",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                                    className: "text-gray-700 font-medium w-full sm:w-32 shrink-0",
                                                                                    children: "Quốc gia:"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/profiles/ProfileInterface.js",
                                                                                    lineNumber: 947,
                                                                                    columnNumber: 61
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                                    className: "text-gray-600 break-words",
                                                                                    children: address.country
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/profiles/ProfileInterface.js",
                                                                                    lineNumber: 950,
                                                                                    columnNumber: 61
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/components/profiles/ProfileInterface.js",
                                                                            lineNumber: 946,
                                                                            columnNumber: 57
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/profiles/ProfileInterface.js",
                                                                    lineNumber: 909,
                                                                    columnNumber: 53
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/profiles/ProfileInterface.js",
                                                            lineNumber: 893,
                                                            columnNumber: 49
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                            className: "flex sm:flex-col items-center gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>{
                                                                        setSelectedAddress(address);
                                                                        setAddressFormData(address);
                                                                        setShowAddressForm(true);
                                                                    },
                                                                    className: "p-2 hover:bg-gray-100 rounded-full transition-colors",
                                                                    title: "Sửa địa chỉ",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__["FiEdit2"], {
                                                                        className: "w-5 h-5 text-gray-600"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/profiles/ProfileInterface.js",
                                                                        lineNumber: 968,
                                                                        columnNumber: 57
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/profiles/ProfileInterface.js",
                                                                    lineNumber: 959,
                                                                    columnNumber: 53
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>handleDeleteAddress(address.id),
                                                                    className: "p-2 hover:bg-red-50 rounded-full transition-colors",
                                                                    title: "Xóa địa chỉ",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ri$2f$index$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__["RiDeleteBinLine"], {
                                                                        className: "w-5 h-5 text-red-600"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/profiles/ProfileInterface.js",
                                                                        lineNumber: 976,
                                                                        columnNumber: 57
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/profiles/ProfileInterface.js",
                                                                    lineNumber: 971,
                                                                    columnNumber: 53
                                                                }, this),
                                                                !address.is_default && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>handleSetDefaultAddress(address.id),
                                                                    className: "p-2 hover:bg-yellow-50 rounded-full transition-colors",
                                                                    title: "Đặt làm địa chỉ mặc định",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__["MdStars"], {
                                                                        className: "w-5 h-5 text-yellow-600"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/profiles/ProfileInterface.js",
                                                                        lineNumber: 985,
                                                                        columnNumber: 61
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/profiles/ProfileInterface.js",
                                                                    lineNumber: 980,
                                                                    columnNumber: 57
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/profiles/ProfileInterface.js",
                                                            lineNumber: 958,
                                                            columnNumber: 49
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/profiles/ProfileInterface.js",
                                                    lineNumber: 891,
                                                    columnNumber: 45
                                                }, this)
                                            }, address.id, false, {
                                                fileName: "[project]/src/components/profiles/ProfileInterface.js",
                                                lineNumber: 889,
                                                columnNumber: 41
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/profiles/ProfileInterface.js",
                                        lineNumber: 887,
                                        columnNumber: 33
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "text-center py-8",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                className: "text-gray-400 mb-3",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
                                                    className: "mx-auto h-12 w-12",
                                                    fill: "none",
                                                    viewBox: "0 0 24 24",
                                                    stroke: "currentColor",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        strokeWidth: 2,
                                                        d: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/profiles/ProfileInterface.js",
                                                        lineNumber: 997,
                                                        columnNumber: 45
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/profiles/ProfileInterface.js",
                                                    lineNumber: 996,
                                                    columnNumber: 41
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/profiles/ProfileInterface.js",
                                                lineNumber: 995,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                className: "text-gray-500 text-lg",
                                                children: "Chưa có địa chỉ nào được lưu"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/profiles/ProfileInterface.js",
                                                lineNumber: 1001,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/profiles/ProfileInterface.js",
                                        lineNumber: 994,
                                        columnNumber: 33
                                    }, this),
                                    showAddressForm && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            className: "bg-white rounded-lg w-full max-w-md max-h-[90vh] overflow-y-auto",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                    className: "sticky top-0 bg-white px-6 py-4 border-b flex justify-between items-center",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                                            className: "text-lg font-medium text-gray-900",
                                                            children: selectedAddress ? 'Cập nhật địa chỉ' : 'Thêm địa chỉ mới'
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/profiles/ProfileInterface.js",
                                                            lineNumber: 1011,
                                                            columnNumber: 45
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>{
                                                                setShowAddressForm(false);
                                                                setSelectedAddress(null);
                                                            },
                                                            className: "text-gray-400 hover:text-gray-500 transition-colors",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
                                                                className: "w-6 h-6",
                                                                fill: "none",
                                                                stroke: "currentColor",
                                                                viewBox: "0 0 24 24",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                                                                    strokeLinecap: "round",
                                                                    strokeLinejoin: "round",
                                                                    strokeWidth: "2",
                                                                    d: "M6 18L18 6M6 6l12 12"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/profiles/ProfileInterface.js",
                                                                    lineNumber: 1022,
                                                                    columnNumber: 53
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/profiles/ProfileInterface.js",
                                                                lineNumber: 1021,
                                                                columnNumber: 49
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/profiles/ProfileInterface.js",
                                                            lineNumber: 1014,
                                                            columnNumber: 45
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/profiles/ProfileInterface.js",
                                                    lineNumber: 1010,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("form", {
                                                    onSubmit: handleAddressSubmit,
                                                    className: "p-6 space-y-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                            className: "space-y-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                                                                    className: "block text-sm font-medium text-gray-700",
                                                                    children: "Loại địa chỉ"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/profiles/ProfileInterface.js",
                                                                    lineNumber: 1030,
                                                                    columnNumber: 49
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("select", {
                                                                    value: addressFormData.address_type,
                                                                    onChange: (e)=>setAddressFormData({
                                                                            ...addressFormData,
                                                                            address_type: e.target.value
                                                                        }),
                                                                    className: "w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none    focus:ring-2 focus:ring-gray-500 focus:border-transparent",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("option", {
                                                                            value: "home",
                                                                            children: "Nhà riêng"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/profiles/ProfileInterface.js",
                                                                            lineNumber: 1042,
                                                                            columnNumber: 53
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("option", {
                                                                            value: "office",
                                                                            children: "Văn phòng"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/profiles/ProfileInterface.js",
                                                                            lineNumber: 1043,
                                                                            columnNumber: 53
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("option", {
                                                                            value: "other",
                                                                            children: "Khác"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/profiles/ProfileInterface.js",
                                                                            lineNumber: 1044,
                                                                            columnNumber: 53
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/profiles/ProfileInterface.js",
                                                                    lineNumber: 1033,
                                                                    columnNumber: 49
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/profiles/ProfileInterface.js",
                                                            lineNumber: 1029,
                                                            columnNumber: 45
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                            className: "space-y-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                                                                    className: "block text-sm font-medium text-gray-700",
                                                                    children: "Số nhà, Đường"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/profiles/ProfileInterface.js",
                                                                    lineNumber: 1050,
                                                                    columnNumber: 49
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                                                                    type: "text",
                                                                    value: addressFormData.street,
                                                                    onChange: (e)=>{
                                                                        const value = e.target.value;
                                                                        setAddressFormData({
                                                                            ...addressFormData,
                                                                            street: value
                                                                        });
                                                                        // Reset custom validity khi người dùng nhập
                                                                        e.target.setCustomValidity("");
                                                                    },
                                                                    onInvalid: (e)=>{
                                                                        const value = e.target.value;
                                                                        if (!value) {
                                                                            e.target.setCustomValidity("Không được để trống");
                                                                        } else if (!/^(?=.*\d)(?=.*[a-zA-Z]).+$/.test(value)) {
                                                                            e.target.setCustomValidity("Địa chỉ phải bao gồm số nhà và tên đường");
                                                                        }
                                                                    },
                                                                    onInput: (e)=>e.target.setCustomValidity(""),
                                                                    pattern: "^(?=.*\\d)(?=.*[a-zA-Z]).+$",
                                                                    className: "w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none    focus:ring-2 focus:ring-gray-500 focus:border-transparent",
                                                                    required: true,
                                                                    placeholder: "Ví dụ: 123 Đường Nguyễn Văn A"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/profiles/ProfileInterface.js",
                                                                    lineNumber: 1053,
                                                                    columnNumber: 49
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                                    className: "text-xs text-gray-500",
                                                                    children: "*Địa chỉ phải bao gồm số nhà và tên đường"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/profiles/ProfileInterface.js",
                                                                    lineNumber: 1080,
                                                                    columnNumber: 49
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/profiles/ProfileInterface.js",
                                                            lineNumber: 1049,
                                                            columnNumber: 45
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                            className: "space-y-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                                                                    className: "block text-sm font-medium text-gray-700",
                                                                    children: "Tỉnh/Thành phố"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/profiles/ProfileInterface.js",
                                                                    lineNumber: 1087,
                                                                    columnNumber: 49
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("select", {
                                                                    value: provinces.find((p)=>p.name === addressFormData.city)?.code || '',
                                                                    onChange: handleProvinceChange,
                                                                    className: "w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none    focus:ring-2 focus:ring-gray-500 focus:border-transparent",
                                                                    required: true,
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("option", {
                                                                            value: "",
                                                                            children: "Chọn Tỉnh/Thành phố"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/profiles/ProfileInterface.js",
                                                                            lineNumber: 1097,
                                                                            columnNumber: 53
                                                                        }, this),
                                                                        provinces.map((province)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("option", {
                                                                                value: province.code,
                                                                                children: province.name
                                                                            }, province.code, false, {
                                                                                fileName: "[project]/src/components/profiles/ProfileInterface.js",
                                                                                lineNumber: 1099,
                                                                                columnNumber: 57
                                                                            }, this))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/profiles/ProfileInterface.js",
                                                                    lineNumber: 1090,
                                                                    columnNumber: 49
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/profiles/ProfileInterface.js",
                                                            lineNumber: 1086,
                                                            columnNumber: 45
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                            className: "space-y-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                                                                    className: "block text-sm font-medium text-gray-700",
                                                                    children: "Quận/Huyện"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/profiles/ProfileInterface.js",
                                                                    lineNumber: 1108,
                                                                    columnNumber: 49
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("select", {
                                                                    value: districts.find((d)=>d.name === addressFormData.district)?.code || '',
                                                                    onChange: handleDistrictChange,
                                                                    className: "w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none    focus:ring-2 focus:ring-gray-500 focus:border-transparent",
                                                                    required: true,
                                                                    disabled: !addressFormData.city,
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("option", {
                                                                            value: "",
                                                                            children: "Chọn Quận/Huyện"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/profiles/ProfileInterface.js",
                                                                            lineNumber: 1119,
                                                                            columnNumber: 53
                                                                        }, this),
                                                                        districts.map((district)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("option", {
                                                                                value: district.code,
                                                                                children: district.name
                                                                            }, district.code, false, {
                                                                                fileName: "[project]/src/components/profiles/ProfileInterface.js",
                                                                                lineNumber: 1121,
                                                                                columnNumber: 57
                                                                            }, this))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/profiles/ProfileInterface.js",
                                                                    lineNumber: 1111,
                                                                    columnNumber: 49
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/profiles/ProfileInterface.js",
                                                            lineNumber: 1107,
                                                            columnNumber: 45
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                            className: "space-y-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                                                                    className: "block text-sm font-medium text-gray-700",
                                                                    children: "Phường/Xã"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/profiles/ProfileInterface.js",
                                                                    lineNumber: 1130,
                                                                    columnNumber: 49
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("select", {
                                                                    value: wards.find((w)=>w.name === addressFormData.ward)?.code || '',
                                                                    onChange: handleWardChange,
                                                                    className: "w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none    focus:ring-2 focus:ring-gray-500 focus:border-transparent",
                                                                    required: true,
                                                                    disabled: !addressFormData.district,
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("option", {
                                                                            value: "",
                                                                            children: "Chọn Phường/Xã"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/profiles/ProfileInterface.js",
                                                                            lineNumber: 1141,
                                                                            columnNumber: 53
                                                                        }, this),
                                                                        wards.map((ward)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("option", {
                                                                                value: ward.code,
                                                                                children: ward.name
                                                                            }, ward.code, false, {
                                                                                fileName: "[project]/src/components/profiles/ProfileInterface.js",
                                                                                lineNumber: 1143,
                                                                                columnNumber: 57
                                                                            }, this))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/profiles/ProfileInterface.js",
                                                                    lineNumber: 1133,
                                                                    columnNumber: 49
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/profiles/ProfileInterface.js",
                                                            lineNumber: 1129,
                                                            columnNumber: 45
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                                                                    type: "checkbox",
                                                                    id: "is_default",
                                                                    checked: addressFormData.is_default,
                                                                    onChange: (e)=>setAddressFormData({
                                                                            ...addressFormData,
                                                                            is_default: e.target.checked
                                                                        }),
                                                                    className: "h-4 w-4 text-gray-600 focus:ring-gray-500 border-gray-300 rounded"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/profiles/ProfileInterface.js",
                                                                    lineNumber: 1151,
                                                                    columnNumber: 49
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                                                                    htmlFor: "is_default",
                                                                    className: "ml-2 text-sm text-gray-700",
                                                                    children: "Đặt làm địa chỉ mặc định"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/profiles/ProfileInterface.js",
                                                                    lineNumber: 1161,
                                                                    columnNumber: 49
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/profiles/ProfileInterface.js",
                                                            lineNumber: 1150,
                                                            columnNumber: 45
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                            className: "flex justify-end gap-3 pt-4 border-t",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                                                    type: "button",
                                                                    onClick: ()=>{
                                                                        setShowAddressForm(false);
                                                                        setSelectedAddress(null);
                                                                    },
                                                                    className: "px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-500    transition-colors",
                                                                    children: "Hủy"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/profiles/ProfileInterface.js",
                                                                    lineNumber: 1167,
                                                                    columnNumber: 49
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                                                    type: "submit",
                                                                    className: "px-4 py-2 bg-gray-600 text-white text-sm font-medium rounded-lg    hover:bg-gray-700 transition-colors",
                                                                    children: selectedAddress ? 'Cập nhật' : 'Thêm mới'
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/profiles/ProfileInterface.js",
                                                                    lineNumber: 1178,
                                                                    columnNumber: 49
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/profiles/ProfileInterface.js",
                                                            lineNumber: 1166,
                                                            columnNumber: 45
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/profiles/ProfileInterface.js",
                                                    lineNumber: 1027,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/profiles/ProfileInterface.js",
                                            lineNumber: 1008,
                                            columnNumber: 37
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/profiles/ProfileInterface.js",
                                        lineNumber: 1007,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/profiles/ProfileInterface.js",
                                lineNumber: 867,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/profiles/ProfileInterface.js",
                        lineNumber: 646,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/profiles/ProfileInterface.js",
                lineNumber: 597,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/profiles/ProfileInterface.js",
        lineNumber: 595,
        columnNumber: 9
    }, this);
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/components/RecentlyViewed.js [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
// components/RecentlyViewed.js
__turbopack_context__.s({
    "default": (()=>RecentlyViewed)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/router.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$redux__$5b$external$5d$__$28$react$2d$redux$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/react-redux [external] (react-redux, esm_import)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$HeartIcon$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__HeartIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/outline/esm/HeartIcon.js [ssr] (ecmascript) <export default as HeartIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$solid$2f$esm$2f$HeartIcon$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__HeartIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/solid/esm/HeartIcon.js [ssr] (ecmascript) <export default as HeartIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ShoppingBagIcon$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBagIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/outline/esm/ShoppingBagIcon.js [ssr] (ecmascript) <export default as ShoppingBagIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$formatDistanceToNow$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/formatDistanceToNow.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$locale$2f$vi$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/locale/vi.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$slices$2f$favoriteSlice$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/slices/favoriteSlice.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$slices$2f$cartSlice$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/slices/cartSlice.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$apiClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/apiClient.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$storage$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/storage.js [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$redux__$5b$external$5d$__$28$react$2d$redux$2c$__esm_import$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$slices$2f$favoriteSlice$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$slices$2f$cartSlice$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$apiClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$storage$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__
]);
([__TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$redux__$5b$external$5d$__$28$react$2d$redux$2c$__esm_import$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$slices$2f$favoriteSlice$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$slices$2f$cartSlice$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$apiClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$storage$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__);
;
;
;
;
;
;
;
;
;
;
;
;
;
const RECENTLY_VIEWED_KEY = 'recently_viewed_products';
function RecentlyViewed({}) {
    const [recentProducts, setRecentProducts] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])([]);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const dispatch = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$redux__$5b$external$5d$__$28$react$2d$redux$2c$__esm_import$29$__["useDispatch"])();
    const favorites = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$redux__$5b$external$5d$__$28$react$2d$redux$2c$__esm_import$29$__["useSelector"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$slices$2f$favoriteSlice$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["selectFavoriteStatuses"]);
    const { items: cartItems } = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$redux__$5b$external$5d$__$28$react$2d$redux$2c$__esm_import$29$__["useSelector"])((state)=>state.cart);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(true);
    const [stocks, setStocks] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])([]); // Thêm state stock
    const [productModal, setProductModal] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(null); // Modal cho chọn sản phẩm
    const [selectedColor, setSelectedColor] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(null);
    const [selectedSize, setSelectedSize] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(null);
    const [quantity, setQuantity] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(1);
    // Thêm hàm fetch stocks
    const fetchStocks = async ()=>{
        try {
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$apiClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["stockApi"].getProductStocks();
            if (response.success) {
                setStocks(response.data);
            } else {
                console.error('Lỗi khi tải dữ liệu tồn kho');
            }
        } catch (err) {
            console.error('Error fetching stocks:', err);
        }
    };
    // Cập nhật trạng thái khi chọn sản phẩm
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        if (productModal && stocks.length > 0) {
            const firstAvailableColor = productModal.productColors.find((color)=>isColorAvailable(productModal.id, color.id));
            setSelectedColor(firstAvailableColor || null);
            setSelectedSize(null);
            setQuantity(1);
        }
    }, [
        productModal,
        stocks
    ]);
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        if (selectedColor && productModal?.productSizes && stocks.length > 0) {
            const firstAvailableSize = productModal.productSizes.find((size)=>isSizeAvailable(productModal.id, selectedColor.id, size.id));
            setSelectedSize(firstAvailableSize || null);
            setQuantity(1);
        }
    }, [
        selectedColor,
        productModal,
        stocks
    ]);
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        const fetchData = async ()=>{
            setLoading(true);
            try {
                await Promise.all([
                    fetchStocks(),
                    dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$slices$2f$favoriteSlice$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["getFavorites"])({
                        page: 1,
                        limit: 100
                    })).unwrap()
                ]);
                // Tải thông tin giỏ hàng nếu có
                const cartId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$storage$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["getCartId"])();
                if (cartId) {
                    dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$slices$2f$cartSlice$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["getCartItems"])(cartId));
                }
            } catch (error) {
                console.error('Error loading initial data:', error);
                setError('Có lỗi xảy ra khi tải dữ liệu');
            } finally{
                setLoading(false);
            }
        };
        fetchData();
    }, [
        dispatch
    ]);
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        try {
            const products = JSON.parse(localStorage.getItem(RECENTLY_VIEWED_KEY) || '[]');
            setRecentProducts(products);
        } catch (error) {
            console.error('Error loading recently viewed products:', error);
        }
    }, []);
    const handleProductClick = (slug)=>{
        router.push(`/productdetail/${slug}`);
    };
    if (recentProducts.length === 0) {
        return null;
    }
    const handleFavoriteClick = async (e, productId)=>{
        e.stopPropagation();
        try {
            if (favorites[productId]) {
                await dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$slices$2f$favoriteSlice$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["removeFromFavorite"])(productId)).unwrap();
            } else {
                await dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$slices$2f$favoriteSlice$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["addToFavorite"])(productId)).unwrap();
            }
        } catch (error) {
            console.error('Error handling favorite:', error);
        }
    };
    // Thêm các hàm quản lý stock từ [slug].js
    const getStockQuantity = (productId, colorId, sizeId)=>{
        const stock = stocks.find((stock)=>stock.product_id === productId && stock.color_id === colorId && stock.size_id === sizeId);
        return stock ? stock.quantity : 0;
    };
    const getCartItemQuantity = (productId, colorId, sizeId)=>{
        const existingItem = cartItems?.find((item)=>item.product_id === productId && item.color_id === colorId && item.size_id === sizeId);
        return existingItem?.quantity || 0;
    };
    const isColorAvailable = (productId, colorId)=>{
        return stocks.some((stock)=>stock.product_id === productId && stock.color_id === colorId && stock.quantity > 0);
    };
    const isSizeAvailable = (productId, colorId, sizeId)=>{
        return stocks.some((stock)=>stock.product_id === productId && stock.color_id === colorId && stock.size_id === sizeId && stock.quantity > 0);
    };
    const getMaxAvailableQuantity = (productId)=>{
        if (!selectedColor || !selectedSize) return 0;
        const stockQuantity = getStockQuantity(productId, selectedColor.id, selectedSize.id);
        const cartQuantity = getCartItemQuantity(productId, selectedColor.id, selectedSize.id);
        return Math.max(0, stockQuantity - cartQuantity);
    };
    const handleAddToCart = async (showAlert = true)=>{
        if (!selectedColor || !selectedSize) {
            alert('Vui lòng chọn màu và kích thước.');
            return;
        }
        const stockQuantity = getStockQuantity(productModal.id, selectedColor.id, selectedSize.id);
        const cartQuantity = getCartItemQuantity(productModal.id, selectedColor.id, selectedSize.id);
        if (cartQuantity + quantity > stockQuantity) {
            const remainingQuantity = stockQuantity - cartQuantity;
            if (remainingQuantity <= 0) {
                alert('Sản phẩm đã hết hàng hoặc đã có trong giỏ hàng với số lượng tối đa.');
                return;
            }
            alert(`Chỉ còn ${remainingQuantity} sản phẩm có thể thêm vào giỏ hàng.`);
            return;
        }
        try {
            let activeCartId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$storage$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["getCartId"])();
            if (!activeCartId) {
                const cartResponse = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$storage$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["getToken"])() ? await dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$slices$2f$cartSlice$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["createCartForUser"])()).unwrap() : await dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$slices$2f$cartSlice$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["createCartForGuest"])()).unwrap();
                activeCartId = cartResponse?.id;
            }
            await dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$slices$2f$cartSlice$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["addItemToCart"])({
                cartId: activeCartId,
                itemData: {
                    product_id: productModal.id,
                    color_id: selectedColor.id,
                    size_id: selectedSize.id,
                    quantity
                }
            })).unwrap();
            dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$slices$2f$cartSlice$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["getCartItems"])(activeCartId));
            localStorage.setItem('cartId', activeCartId);
            setProductModal(null); // Đóng modal
            if (showAlert) {
                alert('Sản phẩm đã được thêm vào giỏ hàng!');
            }
        } catch (error) {
            alert('Có lỗi xảy ra khi thêm vào giỏ hàng!');
            console.error(error);
        }
    };
    const handleBuyNow = async ()=>{
        try {
            await handleAddToCart(false);
            router.push('/cart');
        } catch (error) {
            alert('Có lỗi xảy ra khi thêm vào giỏ hàng!');
        }
    };
    const increaseQuantity = ()=>{
        const availableQuantity = getMaxAvailableQuantity(productModal?.id);
        if (quantity >= availableQuantity) {
            alert(`Chỉ còn ${availableQuantity} sản phẩm có thể thêm vào giỏ hàng.`);
            return;
        }
        setQuantity((prev)=>prev + 1);
    };
    const decreaseQuantity = ()=>setQuantity((prev)=>prev > 1 ? prev - 1 : 1);
    const openProductModal = (product)=>{
        setProductModal(product);
        console.log('product', product);
    };
    const ProductModal = ()=>{
        if (!productModal) return null;
        // Tìm đối tượng màu đang được chọn hoặc sử dụng màu đầu tiên nếu chưa chọn màu nào
        const currentColorObject = selectedColor ? productModal.productColors.find((c)=>c.id === selectedColor.id) : productModal.productColors[0];
        // Lấy ảnh từ productColor
        const currentImage = currentColorObject?.image || 'https://via.placeholder.com/150';
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
            className: "fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50 p-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "bg-white rounded-lg p-6 max-w-md w-full max-h-[90vh] overflow-y-auto",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "flex justify-between items-center mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                className: "text-lg font-bold",
                                children: productModal.product_name
                            }, void 0, false, {
                                fileName: "[project]/src/components/RecentlyViewed.js",
                                lineNumber: 281,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                onClick: ()=>setProductModal(null),
                                className: "text-gray-500 hover:text-gray-700",
                                children: "×"
                            }, void 0, false, {
                                fileName: "[project]/src/components/RecentlyViewed.js",
                                lineNumber: 282,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/RecentlyViewed.js",
                        lineNumber: 280,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "mb-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("img", {
                            src: currentImage,
                            alt: `${productModal.product_name} - ${currentColorObject?.color || 'Màu mặc định'}`,
                            className: "w-full h-64 object-contain rounded mb-4 border"
                        }, void 0, false, {
                            fileName: "[project]/src/components/RecentlyViewed.js",
                            lineNumber: 292,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/RecentlyViewed.js",
                        lineNumber: 291,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h4", {
                                className: "font-semibold mb-2",
                                children: "Chọn màu:"
                            }, void 0, false, {
                                fileName: "[project]/src/components/RecentlyViewed.js",
                                lineNumber: 300,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap gap-2",
                                children: productModal.productColors.map((color)=>{
                                    const hasStock = isColorAvailable(productModal.id, color.id);
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: `
                                            w-8 h-8 rounded-full border relative
                                            ${selectedColor?.id === color.id ? 'ring-2 ring-gray-500' : ''}
                                            ${!hasStock ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer hover:shadow-md'}
                                        `,
                                        style: {
                                            backgroundColor: color.hex_code
                                        },
                                        title: `${color.color}${!hasStock ? ' (Hết hàng)' : ''}`,
                                        onClick: ()=>hasStock && setSelectedColor(color),
                                        children: !hasStock && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            className: "absolute inset-0 flex items-center justify-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                className: "w-full h-0.5 bg-gray-400 transform rotate-45"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/RecentlyViewed.js",
                                                lineNumber: 318,
                                                columnNumber: 49
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/RecentlyViewed.js",
                                            lineNumber: 317,
                                            columnNumber: 45
                                        }, this)
                                    }, color.id, false, {
                                        fileName: "[project]/src/components/RecentlyViewed.js",
                                        lineNumber: 305,
                                        columnNumber: 37
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/src/components/RecentlyViewed.js",
                                lineNumber: 301,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/RecentlyViewed.js",
                        lineNumber: 299,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h4", {
                                className: "font-semibold mb-2",
                                children: "Chọn kích thước:"
                            }, void 0, false, {
                                fileName: "[project]/src/components/RecentlyViewed.js",
                                lineNumber: 328,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap gap-2",
                                children: productModal.productSizes.map((size)=>{
                                    const isAvailable = selectedColor && isSizeAvailable(productModal.id, selectedColor.id, size.id);
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                        className: `
                                            px-4 py-1 border rounded relative
                                            ${selectedSize?.id === size.id ? 'bg-gray-100' : ''}
                                            ${!isAvailable ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-100'}
                                        `,
                                        onClick: ()=>isAvailable && setSelectedSize(size),
                                        disabled: !isAvailable,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                            children: size.size
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/RecentlyViewed.js",
                                            lineNumber: 343,
                                            columnNumber: 41
                                        }, this)
                                    }, size.id, false, {
                                        fileName: "[project]/src/components/RecentlyViewed.js",
                                        lineNumber: 333,
                                        columnNumber: 37
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/src/components/RecentlyViewed.js",
                                lineNumber: 329,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/RecentlyViewed.js",
                        lineNumber: 327,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h4", {
                                className: "font-semibold mb-2",
                                children: "Số lượng:"
                            }, void 0, false, {
                                fileName: "[project]/src/components/RecentlyViewed.js",
                                lineNumber: 351,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                        className: "px-3 py-1 bg-gray-200 rounded hover:bg-gray-300",
                                        onClick: decreaseQuantity,
                                        disabled: !selectedSize || !selectedColor,
                                        children: "-"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/RecentlyViewed.js",
                                        lineNumber: 353,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                                        type: "number",
                                        className: "w-16 px-2 py-1 border rounded text-center",
                                        min: "1",
                                        max: getMaxAvailableQuantity(productModal.id),
                                        value: quantity,
                                        readOnly: true
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/RecentlyViewed.js",
                                        lineNumber: 360,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                        className: "px-3 py-1 bg-gray-200 rounded hover:bg-gray-300",
                                        onClick: increaseQuantity,
                                        disabled: !selectedSize || !selectedColor,
                                        children: "+"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/RecentlyViewed.js",
                                        lineNumber: 368,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/RecentlyViewed.js",
                                lineNumber: 352,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/RecentlyViewed.js",
                        lineNumber: 350,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap gap-2 mt-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                className: "bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700 transition w-full sm:w-auto",
                                onClick: ()=>handleAddToCart(),
                                disabled: !selectedSize || !selectedColor || getMaxAvailableQuantity(productModal.id) === 0,
                                children: "Thêm vào giỏ hàng"
                            }, void 0, false, {
                                fileName: "[project]/src/components/RecentlyViewed.js",
                                lineNumber: 379,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                className: "bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition w-full sm:w-auto",
                                onClick: handleBuyNow,
                                disabled: !selectedSize || !selectedColor || getMaxAvailableQuantity(productModal.id) === 0,
                                children: "Mua ngay"
                            }, void 0, false, {
                                fileName: "[project]/src/components/RecentlyViewed.js",
                                lineNumber: 386,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/RecentlyViewed.js",
                        lineNumber: 378,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/RecentlyViewed.js",
                lineNumber: 279,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/RecentlyViewed.js",
            lineNumber: 278,
            columnNumber: 13
        }, this);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        className: "container mx-auto px-4 py-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                className: "text-2xl font-bold mb-6 text-center",
                children: "Sản phẩm đã xem gần đây"
            }, void 0, false, {
                fileName: "[project]/src/components/RecentlyViewed.js",
                lineNumber: 401,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4",
                children: recentProducts.map((product)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "relative overflow-hidden aspect-[3/4]",
                                onClick: ()=>handleProductClick(product.slug),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("img", {
                                        src: product.mainImage || 'https://via.placeholder.com/300',
                                        alt: product.product_name,
                                        className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/RecentlyViewed.js",
                                        lineNumber: 410,
                                        columnNumber: 29
                                    }, this),
                                    product.discount_price < product.price && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "absolute top-2 left-2 bg-red-500 text-white px-2 py-1 text-xs font-semibold",
                                        children: [
                                            "-",
                                            Math.round((product.price - product.discount_price) / product.price * 100),
                                            "%"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/RecentlyViewed.js",
                                        lineNumber: 418,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/RecentlyViewed.js",
                                lineNumber: 409,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "p-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between items-start",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                                className: "text-sm md:text-base font-medium mb-1 line-clamp-1 hover:text-red-500 cursor-pointer",
                                                onClick: ()=>handleProductClick(product.slug),
                                                children: product.product_name
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/RecentlyViewed.js",
                                                lineNumber: 426,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                                className: "text-gray-700 hover:text-red-500 transition",
                                                onClick: (e)=>handleFavoriteClick(e, product.id),
                                                children: favorites[product.id] ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$solid$2f$esm$2f$HeartIcon$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__HeartIcon$3e$__["HeartIcon"], {
                                                    className: "h-5 w-5 text-red-500"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/RecentlyViewed.js",
                                                    lineNumber: 437,
                                                    columnNumber: 41
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$HeartIcon$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__HeartIcon$3e$__["HeartIcon"], {
                                                    className: "h-5 w-5"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/RecentlyViewed.js",
                                                    lineNumber: 439,
                                                    columnNumber: 41
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/RecentlyViewed.js",
                                                lineNumber: 432,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/RecentlyViewed.js",
                                        lineNumber: 425,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2 mb-2",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            className: "flex gap-1 overflow-hidden",
                                            children: [
                                                product.productColors && product.productColors.length > 0 ? product.productColors.slice(0, 3).map((color, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                        className: "w-4 h-4 rounded-full border",
                                                        style: {
                                                            backgroundColor: color.hex_code
                                                        },
                                                        title: color.color
                                                    }, index, false, {
                                                        fileName: "[project]/src/components/RecentlyViewed.js",
                                                        lineNumber: 448,
                                                        columnNumber: 45
                                                    }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                    className: "text-xs text-gray-500",
                                                    children: "No colors available"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/RecentlyViewed.js",
                                                    lineNumber: 456,
                                                    columnNumber: 41
                                                }, this),
                                                product.colors && product.colors.length > 3 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                    className: "text-xs",
                                                    children: [
                                                        "+",
                                                        product.colors.length - 3
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/RecentlyViewed.js",
                                                    lineNumber: 459,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/RecentlyViewed.js",
                                            lineNumber: 445,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/RecentlyViewed.js",
                                        lineNumber: 444,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "flex items-end justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-col",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                            className: "text-red-500 font-bold text-sm md:text-base",
                                                            children: [
                                                                product.discount_price.toLocaleString('vi-VN'),
                                                                " đ"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/RecentlyViewed.js",
                                                            lineNumber: 467,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                            className: "text-gray-500 line-through text-xs",
                                                            children: [
                                                                product.price.toLocaleString('vi-VN'),
                                                                " đ"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/RecentlyViewed.js",
                                                            lineNumber: 470,
                                                            columnNumber: 41
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/RecentlyViewed.js",
                                                    lineNumber: 466,
                                                    columnNumber: 37
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/RecentlyViewed.js",
                                                lineNumber: 465,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                                className: "text-gray-700 hover:text-red-500 transition",
                                                onClick: (e)=>{
                                                    e.stopPropagation();
                                                    openProductModal(product);
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ShoppingBagIcon$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBagIcon$3e$__["ShoppingBagIcon"], {
                                                    className: "h-5 w-5"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/RecentlyViewed.js",
                                                    lineNumber: 482,
                                                    columnNumber: 37
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/RecentlyViewed.js",
                                                lineNumber: 475,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/RecentlyViewed.js",
                                        lineNumber: 464,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-gray-500 mt-2",
                                        children: [
                                            "Đã xem ",
                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$formatDistanceToNow$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["formatDistanceToNow"])(new Date(product.timestamp), {
                                                addSuffix: true,
                                                locale: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$locale$2f$vi$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["vi"]
                                            })
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/RecentlyViewed.js",
                                        lineNumber: 485,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/RecentlyViewed.js",
                                lineNumber: 424,
                                columnNumber: 25
                            }, this)
                        ]
                    }, product.id, true, {
                        fileName: "[project]/src/components/RecentlyViewed.js",
                        lineNumber: 405,
                        columnNumber: 21
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/RecentlyViewed.js",
                lineNumber: 403,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(ProductModal, {}, void 0, false, {
                fileName: "[project]/src/components/RecentlyViewed.js",
                lineNumber: 495,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/RecentlyViewed.js",
        lineNumber: 400,
        columnNumber: 9
    }, this);
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/pages/account/profile.js [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s({
    "default": (()=>Profile)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$redux__$5b$external$5d$__$28$react$2d$redux$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/react-redux [external] (react-redux, esm_import)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/router.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dynamic$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dynamic.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$slices$2f$userSlice$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/slices/userSlice.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$storage$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/storage.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$apiClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/apiClient.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$profiles$2f$AuthInterface$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/profiles/AuthInterface.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$profiles$2f$ProfileInterface$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/profiles/ProfileInterface.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RecentlyViewed$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/RecentlyViewed.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$slices$2f$cartSlice$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/slices/cartSlice.js [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$redux__$5b$external$5d$__$28$react$2d$redux$2c$__esm_import$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$slices$2f$userSlice$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$storage$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$apiClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$profiles$2f$AuthInterface$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$profiles$2f$ProfileInterface$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RecentlyViewed$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$slices$2f$cartSlice$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__
]);
([__TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$redux__$5b$external$5d$__$28$react$2d$redux$2c$__esm_import$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$slices$2f$userSlice$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$storage$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$apiClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$profiles$2f$AuthInterface$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$profiles$2f$ProfileInterface$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RecentlyViewed$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$slices$2f$cartSlice$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__);
;
;
;
;
;
;
;
;
;
// Dynamic import
const Layout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dynamic$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.r("[project]/src/components/Layout.js [ssr] (ecmascript, next/dynamic entry, async loader)")(__turbopack_context__.i), {
    loadableGenerated: {
        modules: [
            "[project]/src/components/Layout.js [client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
;
;
;
;
function Profile() {
    const dispatch = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$redux__$5b$external$5d$__$28$react$2d$redux$2c$__esm_import$29$__["useDispatch"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const { user, loading } = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$redux__$5b$external$5d$__$28$react$2d$redux$2c$__esm_import$29$__["useSelector"])((state)=>state.auth);
    const [isMounted, setIsMounted] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const [isAuthenticated, setIsAuthenticated] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const [authStep, setAuthStep] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])('login');
    const [selectedTab, setSelectedTab] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])('info');
    const [otp, setOtp] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])('');
    const [orders, setOrders] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])([]);
    const [orderLoading, setOrderLoading] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const [passwordVisibility, setPasswordVisibility] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])({
        password: false,
        confirmPassword: false
    });
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])({
        email: '',
        password: '',
        confirmPassword: '',
        firstname: '',
        lastname: '',
        phone: '',
        gender: '',
        newPassword: '',
        confirmNewPassword: ''
    });
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(null);
    // Mounted effect
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        setIsMounted(true);
    }, []);
    // Authentication effect
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        const initializeAuth = async ()=>{
            const token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$storage$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["getToken"])();
            if (token) {
                setIsAuthenticated(true);
                try {
                    await dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$slices$2f$userSlice$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["getUserInfo"])()).unwrap();
                    setError(null);
                } catch (err) {
                    console.error('Failed to get user info:', err);
                    setError(err.message || 'Failed to authenticate');
                    setIsAuthenticated(false);
                }
            }
        };
        if (isMounted) {
            initializeAuth();
        }
    }, [
        dispatch,
        isMounted
    ]);
    // Thêm function để lấy orders
    const fetchOrders = async ()=>{
        try {
            setOrderLoading(true);
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$apiClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["orderApi"].getOrdersByUser({
                page: 1,
                limit: 10
            });
            setOrders(response);
        } catch (error) {
            console.error('Failed to fetch orders:', error);
        } finally{
            setOrderLoading(false);
        }
    };
    // Thêm useEffect để gọi API khi tab orders được chọn
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        if (selectedTab === 'orders') {
            fetchOrders();
        }
    }, [
        selectedTab
    ]);
    const handleLogout = async ()=>{
        try {
            await dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$slices$2f$userSlice$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["logoutUser"])()).unwrap();
            // Thêm dispatch resetCartState để xóa state cart cũ
            dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$slices$2f$cartSlice$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["resetCartState"])());
            setIsAuthenticated(false);
            window.location.reload();
        } catch (err) {
            console.error('Failed to logout:', err);
        }
    };
    const handleChange = (e)=>{
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };
    const handleLogin = async (e)=>{
        e.preventDefault();
        setError(null); // Reset error state
        try {
            const result = await dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$slices$2f$userSlice$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["loginUser"])({
                email: formData.email,
                password: formData.password
            })).unwrap();
            if (result.status === 'success') {
                setIsAuthenticated(true);
                await dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$slices$2f$userSlice$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["getUserInfo"])());
                const cartId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$storage$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["getCartId"])();
                if (cartId) {
                    await dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$slices$2f$cartSlice$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["getCartItems"])(cartId));
                } else {
                    const cartResponse = await dispatch(!(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$storage$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["getToken"])() ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$slices$2f$cartSlice$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["createCartForGuest"])() : (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$slices$2f$cartSlice$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["createCartForUser"])()).unwrap();
                    if (cartResponse?.id) {
                        await dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$slices$2f$cartSlice$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["getCartItems"])(cartResponse.id));
                        window.location.reload();
                    }
                }
            }
        } catch (err) {
            setError(err);
            console.error('Login error:', err);
        }
    };
    // Thêm hàm xử lý quên mật khẩu
    const handleForgotPassword = async (e)=>{
        e.preventDefault();
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$apiClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["userApi"].forgotPassword({
                email: formData.email
            });
            alert('Mã OTP đã được gửi đến email của bạn');
            setAuthStep('reset-password');
        } catch (error) {
            alert(error.message || 'Có lỗi xảy ra');
        }
    };
    // Thêm hàm xử lý reset mật khẩu
    const handleResetPassword = async (e)=>{
        e.preventDefault();
        if (formData.newPassword !== formData.confirmNewPassword) {
            alert('Mật khẩu mới không khớp');
            return;
        }
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$apiClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["userApi"].resetPassword({
                email: formData.email,
                otp: otp,
                newPassword: formData.newPassword
            });
            alert('Đặt lại mật khẩu thành công');
            setAuthStep('login');
            setFormData({
                ...formData,
                newPassword: '',
                confirmNewPassword: ''
            });
            setOtp('');
        } catch (error) {
            alert(error.message || 'Có lỗi xảy ra');
        }
    };
    const handleRegister = async (e)=>{
        e.preventDefault();
        setError(null); // Reset error state before attempting registration
        if (!formData.email || !formData.password || !formData.firstname || !formData.lastname) {
            setError('Vui lòng điền đầy đủ thông tin.');
            return;
        }
        if (formData.password.length < 6) {
            setError('Mật khẩu phải có ít nhất 6 ký tự.');
            return;
        }
        if (!/\S+@\S+\.\S+/.test(formData.email)) {
            setError('Email không hợp lệ. Vui lòng nhập lại.');
            return;
        }
        if (!/^\d{10}$/.test(formData.phone)) {
            setError('Số điện thoại không hợp lệ. Vui lòng nhập lại.');
            return;
        }
        if (formData.firstname.length < 2 || formData.lastname.length < 2) {
            setError('Tên và họ phải có ít nhất 2 ký tự.');
            return;
        }
        if (formData.firstname.length > 20 || formData.lastname.length > 20) {
            setError('Tên và họ không được vượt quá 20 ký tự.');
            return;
        }
        if (formData.password.length > 20) {
            setError('Mật khẩu không được vượt quá 20 ký tự.');
            return;
        }
        if (formData.password.includes(' ')) {
            setError('Mật khẩu không được chứa khoảng trắng.');
            return;
        }
        if (!/[A-Z]/.test(formData.password)) {
            setError('Mật khẩu phải chứa ít nhất một chữ cái viết hoa.');
            return;
        }
        if (!/[a-z]/.test(formData.password)) {
            setError('Mật khẩu phải chứa ít nhất một chữ cái viết thường.');
            return;
        }
        if (!/[0-9]/.test(formData.password)) {
            setError('Mật khẩu phải chứa ít nhất một chữ số.');
            return;
        }
        if (!/[!@#$%^&*]/.test(formData.password)) {
            setError('Mật khẩu phải chứa ít nhất một ký tự đặc biệt.');
            return;
        }
        if (formData.password !== formData.confirmPassword) {
            setError('Mật khẩu không khớp. Vui lòng thử lại.');
            return;
        }
        try {
            const result = await dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$slices$2f$userSlice$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["registerUser"])(formData)).unwrap();
            if (result.status === 'success') {
                setAuthStep('otp');
            }
        } catch (err) {
            setError(err); // Lưu lỗi vào state
            console.error('Registration error:', err);
        }
    };
    const handleOtpSubmit = async (e)=>{
        e.preventDefault();
        const result = await dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$slices$2f$userSlice$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["verifyOtp"])({
            email: formData.email,
            otp
        }));
        if (result.meta.requestStatus === 'fulfilled') {
            alert('Xác minh OTP thành công! Bây giờ bạn có thể đăng nhập.');
            setAuthStep('login');
        } else {
            alert('Xác minh OTP thất bại. Vui lòng thử lại.');
        }
    };
    const togglePasswordVisibility = (field)=>{
        setPasswordVisibility({
            ...passwordVisibility,
            [field]: !passwordVisibility[field]
        });
    };
    if (!isMounted) {
        return null;
    }
    if (!isAuthenticated) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Layout, {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$profiles$2f$AuthInterface$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                authStep: authStep,
                setAuthStep: setAuthStep,
                formData: formData,
                setFormData: setFormData,
                handleChange: handleChange,
                handleLogin: handleLogin,
                handleRegister: handleRegister,
                handleOtpSubmit: handleOtpSubmit,
                handleForgotPassword: handleForgotPassword,
                handleResetPassword: handleResetPassword,
                otp: otp,
                setOtp: setOtp,
                passwordVisibility: passwordVisibility,
                togglePasswordVisibility: togglePasswordVisibility,
                loading: loading,
                error: error
            }, void 0, false, {
                fileName: "[project]/src/pages/account/profile.js",
                lineNumber: 293,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/pages/account/profile.js",
            lineNumber: 292,
            columnNumber: 13
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Layout, {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$profiles$2f$ProfileInterface$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                user: user,
                selectedTab: selectedTab,
                setSelectedTab: setSelectedTab,
                handleLogout: handleLogout,
                orders: orders,
                orderLoading: orderLoading,
                userLoading: loading
            }, void 0, false, {
                fileName: "[project]/src/pages/account/profile.js",
                lineNumber: 317,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RecentlyViewed$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/pages/account/profile.js",
                lineNumber: 326,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/pages/account/profile.js",
        lineNumber: 316,
        columnNumber: 9
    }, this);
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),

};

//# sourceMappingURL=%5Broot%20of%20the%20server%5D__29b4f55c._.js.map