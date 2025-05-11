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
"[project]/src/pages/shopping-guide.js [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>ShoppingGuide)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
;
function ShoppingGuide() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        className: "container mx-auto px-4 py-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h1", {
                className: "text-3xl font-bold mb-6",
                children: "Hướng dẫn mua hàng"
            }, void 0, false, {
                fileName: "[project]/src/pages/shopping-guide.js",
                lineNumber: 4,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "prose max-w-none",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                        className: "text-xl font-semibold mt-6 mb-4",
                        children: "Các bước mua hàng tại FASHION STORE"
                    }, void 0, false, {
                        fileName: "[project]/src/pages/shopping-guide.js",
                        lineNumber: 6,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("ol", {
                        className: "list-decimal pl-6 space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                        className: "font-medium",
                                        children: "Chọn sản phẩm"
                                    }, void 0, false, {
                                        fileName: "[project]/src/pages/shopping-guide.js",
                                        lineNumber: 9,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                        children: "Truy cập website FASHION STORE, tìm và chọn sản phẩm bạn muốn mua"
                                    }, void 0, false, {
                                        fileName: "[project]/src/pages/shopping-guide.js",
                                        lineNumber: 10,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/pages/shopping-guide.js",
                                lineNumber: 8,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                        className: "font-medium",
                                        children: "Thêm vào giỏ hàng"
                                    }, void 0, false, {
                                        fileName: "[project]/src/pages/shopping-guide.js",
                                        lineNumber: 13,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                        children: 'Chọn size, màu sắc và số lượng phù hợp, sau đó click "Thêm vào giỏ hàng"'
                                    }, void 0, false, {
                                        fileName: "[project]/src/pages/shopping-guide.js",
                                        lineNumber: 14,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/pages/shopping-guide.js",
                                lineNumber: 12,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                        className: "font-medium",
                                        children: "Kiểm tra giỏ hàng"
                                    }, void 0, false, {
                                        fileName: "[project]/src/pages/shopping-guide.js",
                                        lineNumber: 17,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                        children: "Xem lại sản phẩm, số lượng và giá tiền trong giỏ hàng"
                                    }, void 0, false, {
                                        fileName: "[project]/src/pages/shopping-guide.js",
                                        lineNumber: 18,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/pages/shopping-guide.js",
                                lineNumber: 16,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                        className: "font-medium",
                                        children: "Thanh toán"
                                    }, void 0, false, {
                                        fileName: "[project]/src/pages/shopping-guide.js",
                                        lineNumber: 21,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                        children: "Điền thông tin giao hàng và chọn phương thức thanh toán"
                                    }, void 0, false, {
                                        fileName: "[project]/src/pages/shopping-guide.js",
                                        lineNumber: 22,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/pages/shopping-guide.js",
                                lineNumber: 20,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/pages/shopping-guide.js",
                        lineNumber: 7,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                        className: "text-xl font-semibold mt-8 mb-4",
                        children: "Thông tin liên hệ"
                    }, void 0, false, {
                        fileName: "[project]/src/pages/shopping-guide.js",
                        lineNumber: 26,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "bg-gray-100 p-4 rounded-lg",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                className: "font-medium",
                                children: "FASHION STORE"
                            }, void 0, false, {
                                fileName: "[project]/src/pages/shopping-guide.js",
                                lineNumber: 28,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                children: "Văn phòng: Tp. HCM"
                            }, void 0, false, {
                                fileName: "[project]/src/pages/shopping-guide.js",
                                lineNumber: 29,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                children: "Hotline: 0999 999 999"
                            }, void 0, false, {
                                fileName: "[project]/src/pages/shopping-guide.js",
                                lineNumber: 30,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                children: "Email: cskh@fashionstore.vn"
                            }, void 0, false, {
                                fileName: "[project]/src/pages/shopping-guide.js",
                                lineNumber: 31,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/pages/shopping-guide.js",
                        lineNumber: 27,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/pages/shopping-guide.js",
                lineNumber: 5,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/pages/shopping-guide.js",
        lineNumber: 3,
        columnNumber: 9
    }, this);
}
}}),

};

//# sourceMappingURL=%5Broot%20of%20the%20server%5D__36a7f54e._.js.map