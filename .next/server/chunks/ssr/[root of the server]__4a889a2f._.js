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
"[externals]/lodash/debounce.js [external] (lodash/debounce.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("lodash/debounce.js", () => require("lodash/debounce.js"));

module.exports = mod;
}}),
"[project]/src/components/Sidebar.js [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Sidebar)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/link.js [ssr] (ecmascript)");
;
;
;
function Sidebar({ isMobile }) {
    const categories = [
        {
            id: 8,
            name: 'Thời Trang Nam',
            subCategories: []
        },
        {
            id: 9,
            name: 'Thời Trang Nữ',
            subCategories: []
        },
        {
            id: 1,
            name: 'Áo',
            subCategories: [
                {
                    id: 2,
                    name: 'Áo Thun'
                },
                {
                    id: 13,
                    name: 'Áo Sơ Mi'
                },
                {
                    id: 10,
                    name: 'Áo Polo'
                },
                {
                    id: 32,
                    name: 'Áo Nam'
                },
                {
                    id: 33,
                    name: 'Áo Nữ'
                }
            ]
        },
        {
            id: 15,
            name: 'Quần',
            subCategories: [
                {
                    id: 18,
                    name: 'Quần Jeans'
                },
                {
                    id: 20,
                    name: 'Quần Shorts'
                },
                {
                    id: 28,
                    name: 'Quần Tây'
                },
                {
                    id: 39,
                    name: 'Quần Nam'
                },
                {
                    id: 30,
                    name: 'Quần Nữ'
                }
            ]
        },
        {
            id: 2,
            name: 'Áo Thun',
            subCategories: [
                {
                    id: 4,
                    name: 'Áo Thun Nam'
                },
                {
                    id: 6,
                    name: 'Áo Thun Nữ'
                }
            ]
        },
        {
            id: 10,
            name: 'Áo Polo',
            subCategories: [
                {
                    id: 11,
                    name: 'Áo Polo Nam'
                },
                {
                    id: 12,
                    name: 'Áo Polo Nữ'
                }
            ]
        },
        {
            id: 24,
            name: 'Áo Khoác',
            subCategories: [
                {
                    id: 34,
                    name: 'Áo Khoác Nam'
                },
                {
                    id: 25,
                    name: 'Áo Khoác Nữ'
                }
            ]
        },
        {
            id: 13,
            name: 'Áo Sơ Mi',
            subCategories: [
                {
                    id: 14,
                    name: 'Áo Sơ Mi Nam'
                },
                {
                    id: 26,
                    name: 'Áo Sơ Mi Nữ'
                }
            ]
        },
        {
            id: 38,
            name: 'Phụ Kiện',
            subCategories: [
                {
                    id: 35,
                    name: 'Mũ'
                },
                {
                    id: 36,
                    name: 'Thắt Lưng'
                },
                {
                    id: 37,
                    name: 'Ví'
                }
            ]
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        className: `
            ${isMobile ? 'fixed inset-0 z-50 bg-white overflow-y-auto h-screen pt-16' : 'hidden md:block w-64'}
        `,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("aside", {
                className: `${isMobile ? 'py-2' : 'p-6'}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                        className: "text-lg font-semibold text-gray-800 mb-4 px-4",
                        children: "Danh mục sản phẩm"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Sidebar.js",
                        lineNumber: 93,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("ul", {
                        className: "space-y-1",
                        children: categories.map((category)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                className: "group",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                                        href: `/category/productsByCategory?categoryId=${category.id}&categoryName=${category.name}`,
                                        className: "flex items-center px-4 py-2.5 text-gray-700 hover:bg-gray-50    transition-colors duration-200 font-medium group-hover:text-gray-600",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                            children: category.name
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Sidebar.js",
                                            lineNumber: 103,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Sidebar.js",
                                        lineNumber: 98,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("ul", {
                                        className: "",
                                        children: category.subCategories.map((subCategory)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                                                    href: `/category/productsByCategory?categoryId=${subCategory.id}&categoryName=${subCategory.name}`,
                                                    className: "block px-8 py-2 text-sm text-gray-600 hover:bg-gray-50    hover:text-gray-600 transition-colors duration-200",
                                                    children: subCategory.name
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Sidebar.js",
                                                    lineNumber: 109,
                                                    columnNumber: 41
                                                }, this)
                                            }, subCategory.id, false, {
                                                fileName: "[project]/src/components/Sidebar.js",
                                                lineNumber: 108,
                                                columnNumber: 37
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Sidebar.js",
                                        lineNumber: 106,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, category.id, true, {
                                fileName: "[project]/src/components/Sidebar.js",
                                lineNumber: 96,
                                columnNumber: 25
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/Sidebar.js",
                        lineNumber: 94,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Sidebar.js",
                lineNumber: 92,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("nav", {
                className: "py-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: "/TrackOrder",
                        className: "flex items-center px-4 py-2.5 text-gray-700 hover:bg-gray-50 hover:text-gray-600",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
                                className: "w-5 h-5 mr-3",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                stroke: "currentColor",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 2,
                                    d: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Sidebar.js",
                                    lineNumber: 130,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/Sidebar.js",
                                lineNumber: 129,
                                columnNumber: 21
                            }, this),
                            "Tra cứu đơn hàng"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Sidebar.js",
                        lineNumber: 124,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: "/store-locations",
                        className: "flex items-center px-4 py-2.5 text-gray-700 hover:bg-gray-50 hover:text-gray-600",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
                                className: "w-5 h-5 mr-3",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                stroke: "currentColor",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 2,
                                        d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Sidebar.js",
                                        lineNumber: 141,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 2,
                                        d: "M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Sidebar.js",
                                        lineNumber: 143,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Sidebar.js",
                                lineNumber: 140,
                                columnNumber: 21
                            }, this),
                            "Hệ thống cửa hàng"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Sidebar.js",
                        lineNumber: 135,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: "/user-guide",
                        className: "flex items-center px-4 py-2.5 text-gray-700 hover:bg-gray-50 hover:text-gray-600",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
                                className: "w-5 h-5 mr-3",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                stroke: "currentColor",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 2,
                                    d: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Sidebar.js",
                                    lineNumber: 154,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/Sidebar.js",
                                lineNumber: 153,
                                columnNumber: 21
                            }, this),
                            "Hướng dẫn sử dụng"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Sidebar.js",
                        lineNumber: 148,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: "/warranty-policy",
                        className: "flex items-center px-4 py-2.5 text-gray-700 hover:bg-gray-50 hover:text-gray-600",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
                                className: "w-5 h-5 mr-3",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                stroke: "currentColor",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 2,
                                    d: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Sidebar.js",
                                    lineNumber: 165,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/Sidebar.js",
                                lineNumber: 164,
                                columnNumber: 21
                            }, this),
                            "Chính sách bảo hành"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Sidebar.js",
                        lineNumber: 159,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Sidebar.js",
                lineNumber: 123,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Sidebar.js",
        lineNumber: 86,
        columnNumber: 9
    }, this);
}
}}),
"[project]/src/components/AnnouncementBar.js [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>AnnouncementBar)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
;
;
function AnnouncementBar() {
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        const announcementHidden = localStorage.getItem('hideShippingAnnouncement');
        if (announcementHidden && new Date().getTime() < parseInt(announcementHidden)) {
            setIsVisible(false);
        }
    }, []);
    const hideAnnouncement = ()=>{
        const expireTime = new Date().getTime() + 24 * 60 * 60 * 1000;
        localStorage.setItem('hideShippingAnnouncement', expireTime.toString());
        setIsVisible(false);
    };
    if (!isVisible) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        className: "bg-gray-800 text-white relative overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-center py-2 px-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "whitespace-nowrap animate-marquee",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                            className: "mr-2",
                            children: "🚚"
                        }, void 0, false, {
                            fileName: "[project]/src/components/AnnouncementBar.js",
                            lineNumber: 25,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                            className: "text-sm font-medium inline-block",
                            children: "MIỄN PHÍ VẬN CHUYỂN CHO ĐƠN HÀNG TỪ 200K"
                        }, void 0, false, {
                            fileName: "[project]/src/components/AnnouncementBar.js",
                            lineNumber: 26,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/AnnouncementBar.js",
                    lineNumber: 24,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/AnnouncementBar.js",
                lineNumber: 23,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                onClick: hideAnnouncement,
                className: "absolute right-2 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-200",
                "aria-label": "Đóng thông báo",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    className: "h-5 w-5",
                    viewBox: "0 0 20 20",
                    fill: "currentColor",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                        fillRule: "evenodd",
                        d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",
                        clipRule: "evenodd"
                    }, void 0, false, {
                        fileName: "[project]/src/components/AnnouncementBar.js",
                        lineNumber: 37,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/AnnouncementBar.js",
                    lineNumber: 36,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/AnnouncementBar.js",
                lineNumber: 31,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/AnnouncementBar.js",
        lineNumber: 22,
        columnNumber: 9
    }, this);
}
}}),
"[project]/src/components/Header.js [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$lodash$2f$debounce$2e$js__$5b$external$5d$__$28$lodash$2f$debounce$2e$js$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/lodash/debounce.js [external] (lodash/debounce.js, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$redux__$5b$external$5d$__$28$react$2d$redux$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/react-redux [external] (react-redux, esm_import)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/router.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/link.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$apiClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/apiClient.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$slices$2f$favoriteSlice$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/slices/favoriteSlice.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Sidebar$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Sidebar.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AnnouncementBar$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/AnnouncementBar.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$UserIcon$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__UserIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/outline/esm/UserIcon.js [ssr] (ecmascript) <export default as UserIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$HeartIcon$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__HeartIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/outline/esm/HeartIcon.js [ssr] (ecmascript) <export default as HeartIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ShoppingBagIcon$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBagIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/outline/esm/ShoppingBagIcon.js [ssr] (ecmascript) <export default as ShoppingBagIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$MagnifyingGlassIcon$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MagnifyingGlassIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/outline/esm/MagnifyingGlassIcon.js [ssr] (ecmascript) <export default as MagnifyingGlassIcon>");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$redux__$5b$external$5d$__$28$react$2d$redux$2c$__esm_import$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$apiClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$slices$2f$favoriteSlice$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__
]);
([__TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$redux__$5b$external$5d$__$28$react$2d$redux$2c$__esm_import$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$apiClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$slices$2f$favoriteSlice$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__);
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
const Header = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["memo"])(function Header({ isCartPage }) {
    const [isDrawerOpen, setIsDrawerOpen] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const { items } = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$redux__$5b$external$5d$__$28$react$2d$redux$2c$__esm_import$29$__["useSelector"])((state)=>state.cart);
    const [isSearchOpen, setIsSearchOpen] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const [searchTerm, setSearchTerm] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])('');
    const [searchResults, setSearchResults] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])([]);
    const searchRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])(null);
    const searchInputRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])(null);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    // Tính toán số lượng item trong giỏ hàng
    const totalItems = items?.reduce((sum, item)=>{
        if (item && typeof item.quantity === 'number') {
            return sum + item.quantity;
        }
        return sum;
    }, 0) || 0;
    const dispatch = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$redux__$5b$external$5d$__$28$react$2d$redux$2c$__esm_import$29$__["useDispatch"])();
    // Lấy trực tiếp total từ selector 
    const favoriteCount = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$redux__$5b$external$5d$__$28$react$2d$redux$2c$__esm_import$29$__["useSelector"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$slices$2f$favoriteSlice$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["selectFavoriteTotal"]);
    // Thêm effect để tự động cập nhật
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        // Cập nhật ngay khi mount
        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$slices$2f$favoriteSlice$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["forceUpdateFavorites"])({
            page: 1,
            limit: 10
        }));
        // Cập nhật định kỳ mỗi 30s
        const interval = setInterval(()=>{
            dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$slices$2f$favoriteSlice$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["forceUpdateFavorites"])({
                page: 1,
                limit: 10
            }));
        }, 300000);
        return ()=>clearInterval(interval);
    }, [
        dispatch
    ]);
    // Xử lý drawer sidebar
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        const handleResize = ()=>{
            if (window.innerWidth >= 768) {
                setIsDrawerOpen(false);
            }
        };
        window.addEventListener('resize', handleResize);
        return ()=>window.removeEventListener('resize', handleResize);
    }, []);
    // Xử lý click outside để đóng search
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        function handleClickOutside(event) {
            if (searchRef.current && !searchRef.current.contains(event.target)) {
                setIsSearchOpen(false);
                setSearchTerm('');
                setSearchResults([]);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return ()=>document.removeEventListener('mousedown', handleClickOutside);
    }, []);
    // Tách riêng logic search
    const performSearch = async (term)=>{
        if (term.trim().length >= 2) {
            try {
                const result = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$apiClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["productApi"].searchProductsByNameAndColor(term.trim(), {
                    page: 1,
                    limit: 10,
                    sort: 'newest'
                });
                if (result.data?.products) {
                    setSearchResults(result.data.products);
                }
            } catch (error) {
                console.error('Search error:', error);
                setSearchResults([]);
            }
        } else {
            setSearchResults([]);
        }
    };
    // Sử dụng debounce
    const debouncedSearch = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])((0, __TURBOPACK__imported__module__$5b$externals$5d2f$lodash$2f$debounce$2e$js__$5b$external$5d$__$28$lodash$2f$debounce$2e$js$2c$__cjs$29$__["default"])((term)=>performSearch(term), 300)).current;
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        debouncedSearch(searchTerm);
        return ()=>debouncedSearch.cancel();
    }, [
        searchTerm
    ]);
    // Handler cho việc mở search
    const handleSearchClick = (e)=>{
        e.preventDefault();
        e.stopPropagation();
        setIsSearchOpen(!isSearchOpen);
        if (!isSearchOpen && searchInputRef.current) {
            setTimeout(()=>{
                searchInputRef.current.focus();
            }, 100);
        }
    };
    // Handler cho việc nhập search
    const handleSearchInput = (e)=>{
        e.preventDefault();
        e.stopPropagation();
        setSearchTerm(e.target.value);
    };
    // Handler cho phím Enter
    const handleKeyDown = (e)=>{
        if (e.key === 'Enter') {
            e.preventDefault(); // Ngăn chặn reload trang
            e.stopPropagation();
            if (searchTerm.trim().length >= 2) {
                router.push(`/search?keyword=${encodeURIComponent(searchTerm.trim())}`);
                setIsSearchOpen(false);
                setSearchTerm('');
                setSearchResults([]);
            }
        }
    };
    // Handler cho việc đóng drawer
    const toggleDrawer = ()=>{
        setIsDrawerOpen(!isDrawerOpen);
    };
    const searchSection = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
        className: "relative w-6 h-6",
        ref: searchRef,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: handleSearchClick,
                className: "hover:underline focus:outline-none",
                "aria-label": "Search",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$MagnifyingGlassIcon$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MagnifyingGlassIcon$3e$__["MagnifyingGlassIcon"], {
                    className: "h-6 w-6 text-black"
                }, void 0, false, {
                    fileName: "[project]/src/components/Header.js",
                    lineNumber: 155,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/Header.js",
                lineNumber: 149,
                columnNumber: 13
            }, this),
            isSearchOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "fixed md:absolute top-0 md:top-full left-0 md:left-auto right-0 md:right-0 h-screen md:h-auto w-full md:w-96 bg-white md:rounded-lg shadow-xl z-[60] md:mt-2",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "p-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between p-4 md:hidden border-b border-gray-200",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                                    className: "text-lg font-medium text-gray-900",
                                    children: "Tìm kiếm"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Header.js",
                                    lineNumber: 162,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                    onClick: ()=>{
                                        setIsSearchOpen(false);
                                        setSearchTerm('');
                                        setSearchResults([]);
                                    },
                                    className: "p-2 -mr-2",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
                                        className: "w-5 h-5 text-gray-500",
                                        fill: "none",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: "2",
                                        viewBox: "0 0 24 24",
                                        stroke: "currentColor",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                                            d: "M6 18L18 6M6 6l12 12"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Header.js",
                                            lineNumber: 180,
                                            columnNumber: 37
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Header.js",
                                        lineNumber: 171,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Header.js",
                                    lineNumber: 163,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Header.js",
                            lineNumber: 161,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            id: "header-search-container",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                                ref: searchInputRef,
                                type: "search",
                                placeholder: "Tìm kiếm sản phẩm...",
                                className: "w-full p-4 md:p-3 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-500 text-gray-900 text-base",
                                value: searchTerm,
                                onChange: handleSearchInput,
                                onKeyDown: handleKeyDown,
                                autoComplete: "off"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Header.js",
                                lineNumber: 185,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/Header.js",
                            lineNumber: 184,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "max-h-[400px] overflow-y-auto mt-2",
                            children: [
                                searchResults.slice(0, 4).map((product)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: `/productdetail/${product.slug}`,
                                        className: "flex items-center space-x-4 p-2 hover:bg-gray-50 rounded-lg",
                                        onClick: ()=>{
                                            setIsSearchOpen(false);
                                            setSearchTerm('');
                                            setSearchResults([]);
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("img", {
                                                src: product.productColors[0]?.ProductColor?.image || '/placeholder-image.jpg',
                                                alt: product.product_name,
                                                className: "w-12 h-12 object-cover rounded"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Header.js",
                                                lineNumber: 209,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                        className: "text-sm font-medium text-black",
                                                        children: product.product_name
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Header.js",
                                                        lineNumber: 215,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-2",
                                                        children: product.discount_price ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                                    className: "text-sm line-through text-gray-400",
                                                                    children: [
                                                                        product.price.toLocaleString('vi-VN'),
                                                                        "đ"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/Header.js",
                                                                    lineNumber: 221,
                                                                    columnNumber: 53
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                                    className: "text-sm font-medium text-red-500",
                                                                    children: [
                                                                        product.discount_price.toLocaleString('vi-VN'),
                                                                        "đ"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/Header.js",
                                                                    lineNumber: 224,
                                                                    columnNumber: 53
                                                                }, this)
                                                            ]
                                                        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                            className: "text-sm text-gray-500",
                                                            children: [
                                                                product.price.toLocaleString('vi-VN'),
                                                                "đ"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/Header.js",
                                                            lineNumber: 229,
                                                            columnNumber: 49
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Header.js",
                                                        lineNumber: 218,
                                                        columnNumber: 41
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/Header.js",
                                                lineNumber: 214,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, product.id, true, {
                                        fileName: "[project]/src/components/Header.js",
                                        lineNumber: 199,
                                        columnNumber: 33
                                    }, this)),
                                searchResults.length > 4 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: `/search?keyword=${encodeURIComponent(searchTerm.trim())}`,
                                    className: "block w-full text-center py-2 mt-2 text-gray-600 hover:text-gray-700 font-medium border-t",
                                    onClick: (e)=>{
                                        e.preventDefault();
                                        e.stopPropagation();
                                        setIsSearchOpen(false);
                                        setSearchTerm('');
                                        setSearchResults([]);
                                        router.push(`/search?keyword=${encodeURIComponent(searchTerm.trim())}`);
                                    },
                                    children: "Xem thêm sản phẩm"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Header.js",
                                    lineNumber: 239,
                                    columnNumber: 33
                                }, this),
                                searchTerm.trim().length >= 2 && searchResults.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "mt-4 text-center text-gray-500",
                                    children: "Không tìm thấy sản phẩm phù hợp"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Header.js",
                                    lineNumber: 256,
                                    columnNumber: 33
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Header.js",
                            lineNumber: 197,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Header.js",
                    lineNumber: 160,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/Header.js",
                lineNumber: 159,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Header.js",
        lineNumber: 148,
        columnNumber: 9
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AnnouncementBar$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/components/Header.js",
                lineNumber: 269,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("header", {
                className: "bg-white-800 text-black p-4 shadow",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "container mx-auto flex justify-between items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                            className: "md:hidden block focus:outline-none mr-4",
                            onClick: toggleDrawer,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
                                className: "w-6 h-6",
                                fill: "none",
                                stroke: "currentColor",
                                viewBox: "0 0 24 24",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 2,
                                    d: "M4 6h16M4 12h16m-7 6h7"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Header.js",
                                    lineNumber: 284,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/Header.js",
                                lineNumber: 277,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/Header.js",
                            lineNumber: 273,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            className: "flex items-center space-x-2 font-bold flex-shrink-0",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("img", {
                                    src: "https://firebasestorage.googleapis.com/v0/b/red89-f8933.appspot.com/o/KLTN%2FDALL%C2%B7E%202025-01-20%2014.48.34%20-%20A%20minimalistic%20logo%20for%20a%20Fashion%20Store%2C%20designed%20for%20use%20as%20a%20website%20favicon.%20The%20logo%20features%20a%20sleek%20and%20modern%20design%20with%20an%20abstract%20represent.webp?alt=media&token=da1ff9d9-3a6e-44ca-ba4c-6de1a45b80fc",
                                    alt: "Fashion Store Logo",
                                    className: "h-8 w-8 object-contain"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Header.js",
                                    lineNumber: 295,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                    className: "text-2xl text-black",
                                    children: "Fashion Store"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Header.js",
                                    lineNumber: 300,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Header.js",
                            lineNumber: 294,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("nav", {
                            className: "hidden md:flex space-x-8 ml-auto text-base font-medium tracking-wide",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/onsale",
                                    className: "text-black hover:underline transition-colors duration-200 font-sans",
                                    style: {
                                        fontSize: '15px'
                                    },
                                    children: "Sale"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Header.js",
                                    lineNumber: 306,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/category/productsByCategory?categoryId=8&categoryName=Thời%20Trang%20Nam",
                                    className: "text-black hover:underline transition-colors duration-200 font-sans",
                                    style: {
                                        fontSize: '15px'
                                    },
                                    children: "Thời trang nam"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Header.js",
                                    lineNumber: 313,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/category/productsByCategory?categoryId=9&categoryName=Thời%20Trang%20Nữ",
                                    className: "text-black hover:underline transition-colors duration-200 font-sans",
                                    style: {
                                        fontSize: '15px'
                                    },
                                    children: "Thời trang nữ"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Header.js",
                                    lineNumber: 320,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/vouchers",
                                    className: "text-black hover:underline transition-colors duration-200 font-sans",
                                    style: {
                                        fontSize: '15px'
                                    },
                                    children: "Ưu đãi"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Header.js",
                                    lineNumber: 327,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/store-locations",
                                    className: "text-black hover:underline transition-colors duration-200 font-sans",
                                    style: {
                                        fontSize: '15px'
                                    },
                                    children: "Hệ thống cửa hàng"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Header.js",
                                    lineNumber: 334,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/TrackOrder",
                                    className: "text-black hover:underline transition-colors duration-200 font-sans",
                                    style: {
                                        fontSize: '15px'
                                    },
                                    children: "Tra cứu đơn hàng"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Header.js",
                                    lineNumber: 341,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Header.js",
                            lineNumber: 305,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("nav", {
                            className: "flex space-x-6 md:ml-auto",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("ul", {
                                className: "flex space-x-4 items-center",
                                children: [
                                    searchSection,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/account/profile",
                                            className: "hover:underline",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$UserIcon$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__UserIcon$3e$__["UserIcon"], {
                                                className: "h-6 w-6 text-black"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Header.js",
                                                lineNumber: 359,
                                                columnNumber: 37
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Header.js",
                                            lineNumber: 358,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Header.js",
                                        lineNumber: 357,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                        className: "relative",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/favorites",
                                            className: "hover:underline",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$HeartIcon$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__HeartIcon$3e$__["HeartIcon"], {
                                                    className: "h-6 w-6 text-black"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Header.js",
                                                    lineNumber: 366,
                                                    columnNumber: 37
                                                }, this),
                                                favoriteCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                    className: "absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold",
                                                    children: favoriteCount
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Header.js",
                                                    lineNumber: 368,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Header.js",
                                            lineNumber: 365,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Header.js",
                                        lineNumber: 364,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                        className: "relative",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/cart",
                                            className: "hover:underline",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ShoppingBagIcon$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBagIcon$3e$__["ShoppingBagIcon"], {
                                                    className: "h-6 w-6 text-black"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Header.js",
                                                    lineNumber: 378,
                                                    columnNumber: 37
                                                }, this),
                                                totalItems > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                    className: "absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold",
                                                    children: totalItems
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Header.js",
                                                    lineNumber: 380,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Header.js",
                                            lineNumber: 377,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Header.js",
                                        lineNumber: 376,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Header.js",
                                lineNumber: 352,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/Header.js",
                            lineNumber: 351,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Header.js",
                    lineNumber: 271,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/Header.js",
                lineNumber: 270,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: `fixed inset-0 z-50 bg-gray-800 bg-opacity-50 transition-opacity duration-300 ${isDrawerOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`,
                onClick: toggleDrawer
            }, void 0, false, {
                fileName: "[project]/src/components/Header.js",
                lineNumber: 392,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: `fixed top-0 left-0 w-64 h-full bg-white shadow-lg z-50 transform transition-transform duration-300 ${isDrawerOpen ? 'translate-x-0' : '-translate-x-full'}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                        className: "absolute top-4 right-4 text-gray-600 focus:outline-none",
                        onClick: toggleDrawer,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            className: "w-6 h-6",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            stroke: "currentColor",
                            strokeWidth: 2,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                d: "M6 18L18 6M6 6l12 12"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Header.js",
                                lineNumber: 414,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/Header.js",
                            lineNumber: 406,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Header.js",
                        lineNumber: 402,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "divide-y divide-gray-200",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Sidebar$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                            isMobile: true
                        }, void 0, false, {
                            fileName: "[project]/src/components/Header.js",
                            lineNumber: 424,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Header.js",
                        lineNumber: 423,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Header.js",
                lineNumber: 397,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true);
});
const __TURBOPACK__default__export__ = Header;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/components/Footer.js [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// components/Footer.js
__turbopack_context__.s({
    "default": (()=>Footer)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/link.js [ssr] (ecmascript)");
;
;
function Footer() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("footer", {
        className: "bg-gray-800 text-white py-12",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
            className: "container mx-auto px-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                    className: "text-xl font-bold mb-4",
                                    children: "FASHION STORE"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Footer.js",
                                    lineNumber: 10,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                    className: "text-gray-300 mb-4",
                                    children: "Hệ thống thời trang hàng đầu Việt Nam, hướng tới phong cách lịch lãm và trẻ trung."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Footer.js",
                                    lineNumber: 11,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                            className: "flex items-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
                                                    className: "w-5 h-5 mr-2",
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    viewBox: "0 0 24 24",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        strokeWidth: "2",
                                                        d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Footer.js",
                                                        lineNumber: 17,
                                                        columnNumber: 37
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Footer.js",
                                                    lineNumber: 16,
                                                    columnNumber: 33
                                                }, this),
                                                "Văn phòng: Tp. HCM"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Footer.js",
                                            lineNumber: 15,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                            className: "flex items-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
                                                    className: "w-5 h-5 mr-2",
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    viewBox: "0 0 24 24",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        strokeWidth: "2",
                                                        d: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Footer.js",
                                                        lineNumber: 23,
                                                        columnNumber: 37
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Footer.js",
                                                    lineNumber: 22,
                                                    columnNumber: 33
                                                }, this),
                                                "0999 999 999"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Footer.js",
                                            lineNumber: 21,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                            className: "flex items-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
                                                    className: "w-5 h-5 mr-2",
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    viewBox: "0 0 24 24",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        strokeWidth: "2",
                                                        d: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Footer.js",
                                                        lineNumber: 29,
                                                        columnNumber: 37
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Footer.js",
                                                    lineNumber: 28,
                                                    columnNumber: 33
                                                }, this),
                                                "cskh@fashionstore.vn"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Footer.js",
                                            lineNumber: 27,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Footer.js",
                                    lineNumber: 14,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "flex space-x-4 mt-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                                            href: "#",
                                            className: "hover:text-blue-400",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
                                                className: "w-6 h-6",
                                                fill: "currentColor",
                                                viewBox: "0 0 24 24",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                                                    d: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Footer.js",
                                                    lineNumber: 37,
                                                    columnNumber: 37
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Footer.js",
                                                lineNumber: 36,
                                                columnNumber: 33
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Footer.js",
                                            lineNumber: 35,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                                            href: "#",
                                            className: "hover:text-blue-400",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
                                                className: "w-6 h-6",
                                                fill: "currentColor",
                                                viewBox: "0 0 24 24",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                                                    d: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Footer.js",
                                                    lineNumber: 42,
                                                    columnNumber: 37
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Footer.js",
                                                lineNumber: 41,
                                                columnNumber: 33
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Footer.js",
                                            lineNumber: 40,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Footer.js",
                                    lineNumber: 34,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Footer.js",
                            lineNumber: 9,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                    className: "text-lg font-semibold mb-4",
                                    children: "Chính sách"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Footer.js",
                                    lineNumber: 50,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("ul", {
                                    className: "space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                                                href: "#",
                                                className: "hover:text-blue-400",
                                                children: "Tìm kiếm"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Footer.js",
                                                lineNumber: 52,
                                                columnNumber: 33
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Footer.js",
                                            lineNumber: 52,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/about",
                                                className: "hover:text-blue-400",
                                                children: "Giới thiệu"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Footer.js",
                                                lineNumber: 54,
                                                columnNumber: 33
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Footer.js",
                                            lineNumber: 53,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                                                href: "#",
                                                className: "hover:text-blue-400",
                                                children: "Cơ hội việc làm"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Footer.js",
                                                lineNumber: 58,
                                                columnNumber: 33
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Footer.js",
                                            lineNumber: 58,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Footer.js",
                                    lineNumber: 51,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Footer.js",
                            lineNumber: 49,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                    className: "text-lg font-semibold mb-4",
                                    children: "Hỗ trợ khách hàng"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Footer.js",
                                    lineNumber: 64,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("ul", {
                                    className: "space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/shopping-guide",
                                                className: "hover:text-blue-400",
                                                children: "Hướng dẫn mua hàng"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Footer.js",
                                                lineNumber: 67,
                                                columnNumber: 33
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Footer.js",
                                            lineNumber: 66,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/usage-guide",
                                                className: "hover:text-blue-400",
                                                children: "Hướng dẫn sử dụng"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Footer.js",
                                                lineNumber: 72,
                                                columnNumber: 33
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Footer.js",
                                            lineNumber: 71,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/size-guide",
                                                className: "hover:text-blue-400",
                                                children: "Chi tiết kích cỡ"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Footer.js",
                                                lineNumber: 77,
                                                columnNumber: 33
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Footer.js",
                                            lineNumber: 76,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/warranty-policy",
                                                className: "hover:text-blue-400",
                                                children: "Chính sách đổi trả & bảo hành"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Footer.js",
                                                lineNumber: 82,
                                                columnNumber: 33
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Footer.js",
                                            lineNumber: 81,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/shipping-payment",
                                                className: "hover:text-blue-400",
                                                children: "Quy trình giao nhận và thanh toán"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Footer.js",
                                                lineNumber: 87,
                                                columnNumber: 33
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Footer.js",
                                            lineNumber: 86,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/TrackOrder",
                                                className: "hover:text-blue-400",
                                                children: "Tra cứu đơn hàng"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Footer.js",
                                                lineNumber: 92,
                                                columnNumber: 33
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Footer.js",
                                            lineNumber: 91,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Footer.js",
                                    lineNumber: 65,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Footer.js",
                            lineNumber: 63,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                    className: "text-lg font-semibold mb-4",
                                    children: "Phương thức thanh toán"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Footer.js",
                                    lineNumber: 99,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "mb-4",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-2 gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                className: "bg-white p-2 rounded",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("img", {
                                                    src: "https://firebasestorage.googleapis.com/v0/b/red89-f8933.appspot.com/o/KLTN%2Fdownload%20(1).png?alt=media&token=511aa9a9-ee31-4052-b34c-33678688b64a",
                                                    alt: "VietQR",
                                                    className: "h-12 object-contain mx-auto"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Footer.js",
                                                    lineNumber: 104,
                                                    columnNumber: 37
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Footer.js",
                                                lineNumber: 103,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                className: "bg-white p-2 rounded",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("img", {
                                                    src: "https://firebasestorage.googleapis.com/v0/b/red89-f8933.appspot.com/o/KLTN%2Fdownload.png?alt=media&token=2864ee90-34ec-45a7-a3a7-90cb82e7639e",
                                                    alt: "COD",
                                                    className: "h-12 object-contain mx-auto"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Footer.js",
                                                    lineNumber: 113,
                                                    columnNumber: 37
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Footer.js",
                                                lineNumber: 112,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Footer.js",
                                        lineNumber: 101,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Footer.js",
                                    lineNumber: 100,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Footer.js",
                            lineNumber: 98,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Footer.js",
                    lineNumber: 7,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "border-t border-gray-700 mt-8 pt-8 text-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                        className: "text-sm text-gray-400",
                        children: "© 2025 Fashion Store. All rights reserved."
                    }, void 0, false, {
                        fileName: "[project]/src/components/Footer.js",
                        lineNumber: 125,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/Footer.js",
                    lineNumber: 124,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Footer.js",
            lineNumber: 6,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/Footer.js",
        lineNumber: 5,
        columnNumber: 9
    }, this);
}
}}),
"[project]/src/components/ContactLinks.js [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// components/ContactLinks.js
__turbopack_context__.s({
    "default": (()=>ContactLinks)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa/index.mjs [ssr] (ecmascript)");
;
;
function ContactLinks() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        className: "fixed bottom-20 right-4 flex flex-col gap-3 z-50",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                href: "https://www.facebook.com/yourpage",
                target: "_blank",
                rel: "noopener noreferrer",
                className: "bg-blue-600 text-white p-3 rounded-full shadow-md hover:bg-blue-700 transition",
                "aria-label": "Facebook",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__["FaFacebook"], {}, void 0, false, {
                    fileName: "[project]/src/components/ContactLinks.js",
                    lineNumber: 14,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ContactLinks.js",
                lineNumber: 7,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                href: "https://www.instagram.com/yourpage",
                target: "_blank",
                rel: "noopener noreferrer",
                className: "bg-pink-500 text-white p-3 rounded-full shadow-md hover:bg-pink-600 transition",
                "aria-label": "Instagram",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__["FaInstagram"], {}, void 0, false, {
                    fileName: "[project]/src/components/ContactLinks.js",
                    lineNumber: 23,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ContactLinks.js",
                lineNumber: 16,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                href: "mailto:contact@example.com",
                className: "bg-gray-700 text-white p-3 rounded-full shadow-md hover:bg-gray-800 transition",
                "aria-label": "Email",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__["FaEnvelope"], {}, void 0, false, {
                    fileName: "[project]/src/components/ContactLinks.js",
                    lineNumber: 30,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ContactLinks.js",
                lineNumber: 25,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ContactLinks.js",
        lineNumber: 6,
        columnNumber: 9
    }, this);
}
}}),
"[project]/src/components/BackToTop.js [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// components/BackToTop.js
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
;
;
const BackToTop = ()=>{
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    // Kiểm tra vị trí scroll để hiển thị/ẩn nút
    const toggleVisibility = ()=>{
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };
    // Xử lý scroll to top
    const scrollToTop = ()=>{
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        window.addEventListener('scroll', toggleVisibility);
        return ()=>{
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
        children: isVisible && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
            onClick: scrollToTop,
            className: "fixed bottom-8 right-8 bg-gray-600 hover:bg-gray-700    text-white w-12 h-12 rounded-full shadow-lg    transition-all duration-300 ease-in-out    flex items-center justify-center   z-50 group",
            "aria-label": "Về đầu trang",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
                className: "w-6 h-6 group-hover:-translate-y-1 transition-transform duration-300",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24",
                xmlns: "http://www.w3.org/2000/svg",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: "2.5",
                    d: "M5 10l7-7m0 0l7 7m-7-7v18"
                }, void 0, false, {
                    fileName: "[project]/src/components/BackToTop.js",
                    lineNumber: 51,
                    columnNumber: 25
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/BackToTop.js",
                lineNumber: 44,
                columnNumber: 21
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/BackToTop.js",
            lineNumber: 35,
            columnNumber: 17
        }, this)
    }, void 0, false);
};
const __TURBOPACK__default__export__ = BackToTop;
}}),
"[project]/src/components/FloatingButtons.js [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>FloatingButtons)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa/index.mjs [ssr] (ecmascript)");
;
;
;
function FloatingButtons() {
    const [showScroll, setShowScroll] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        const handleScroll = ()=>{
            setShowScroll(window.pageYOffset > 300);
        };
        window.addEventListener('scroll', handleScroll);
        return ()=>window.removeEventListener('scroll', handleScroll);
    }, []);
    const scrollToTop = ()=>{
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        className: "fixed bottom-4 right-4 flex flex-col items-center gap-3 z-50",
        children: [
            showScroll && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                onClick: scrollToTop,
                className: "bg-gray-600 hover:bg-gray-700 text-white p-3 rounded-full shadow-md transition",
                "aria-label": "Về đầu trang",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__["FaArrowUp"], {}, void 0, false, {
                    fileName: "[project]/src/components/FloatingButtons.js",
                    lineNumber: 28,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/FloatingButtons.js",
                lineNumber: 23,
                columnNumber: 17
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                href: "https://www.facebook.com/",
                target: "_blank",
                rel: "noopener noreferrer",
                className: "bg-blue-600 text-white p-3 rounded-full shadow-md hover:bg-blue-700 transition",
                "aria-label": "Facebook",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__["FaFacebook"], {}, void 0, false, {
                    fileName: "[project]/src/components/FloatingButtons.js",
                    lineNumber: 39,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/FloatingButtons.js",
                lineNumber: 32,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                href: "mailto:contact@example.com",
                className: "bg-gray-700 text-white p-3 rounded-full shadow-md hover:bg-gray-800 transition",
                "aria-label": "Email",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__["FaEnvelope"], {}, void 0, false, {
                    fileName: "[project]/src/components/FloatingButtons.js",
                    lineNumber: 47,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/FloatingButtons.js",
                lineNumber: 42,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/FloatingButtons.js",
        lineNumber: 21,
        columnNumber: 9
    }, this);
}
}}),
"[project]/src/components/ServiceFeatures.js [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// components/ServiceFeatures.js
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
;
const ServiceFeatures = ()=>{
    const features = [
        {
            id: 1,
            title: 'Miễn phí vận chuyển',
            description: 'Áp dụng cho mọi đơn hàng từ 500k',
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
                className: "w-8 h-8",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24",
                xmlns: "http://www.w3.org/2000/svg",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: "2",
                    d: "M5 13l4 4L19 7"
                }, void 0, false, {
                    fileName: "[project]/src/components/ServiceFeatures.js",
                    lineNumber: 10,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ServiceFeatures.js",
                lineNumber: 9,
                columnNumber: 17
            }, this)
        },
        {
            id: 2,
            title: 'Đổi hàng dễ dàng',
            description: '7 ngày đổi hàng vì bất kì lí do gì',
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
                className: "w-8 h-8",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24",
                xmlns: "http://www.w3.org/2000/svg",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: "2",
                    d: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                }, void 0, false, {
                    fileName: "[project]/src/components/ServiceFeatures.js",
                    lineNumber: 20,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ServiceFeatures.js",
                lineNumber: 19,
                columnNumber: 17
            }, this)
        },
        {
            id: 3,
            title: 'Hỗ trợ nhanh chóng',
            description: 'HOTLINE 24/7: 0999999999',
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
                className: "w-8 h-8",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24",
                xmlns: "http://www.w3.org/2000/svg",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: "2",
                    d: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                }, void 0, false, {
                    fileName: "[project]/src/components/ServiceFeatures.js",
                    lineNumber: 30,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ServiceFeatures.js",
                lineNumber: 29,
                columnNumber: 17
            }, this)
        },
        {
            id: 4,
            title: 'Thanh toán đa dạng',
            description: 'Thanh toán khi nhận hàng, VietQR, Chuyển Khoản',
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
                className: "w-8 h-8",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24",
                xmlns: "http://www.w3.org/2000/svg",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: "2",
                    d: "M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                }, void 0, false, {
                    fileName: "[project]/src/components/ServiceFeatures.js",
                    lineNumber: 40,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ServiceFeatures.js",
                lineNumber: 39,
                columnNumber: 17
            }, this)
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        className: "bg-gray-50 py-12",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
            className: "container mx-auto px-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8",
                children: features.map((feature)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "bg-white p-6 rounded-lg shadow-md    hover:shadow-lg transition-shadow duration-300   flex flex-col items-center text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "text-gray-600 mb-4",
                                children: feature.icon
                            }, void 0, false, {
                                fileName: "[project]/src/components/ServiceFeatures.js",
                                lineNumber: 57,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                className: "text-lg font-semibold text-gray-800 mb-2",
                                children: feature.title
                            }, void 0, false, {
                                fileName: "[project]/src/components/ServiceFeatures.js",
                                lineNumber: 60,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                className: "text-gray-600",
                                children: feature.description
                            }, void 0, false, {
                                fileName: "[project]/src/components/ServiceFeatures.js",
                                lineNumber: 63,
                                columnNumber: 29
                            }, this)
                        ]
                    }, feature.id, true, {
                        fileName: "[project]/src/components/ServiceFeatures.js",
                        lineNumber: 51,
                        columnNumber: 25
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/ServiceFeatures.js",
                lineNumber: 49,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/ServiceFeatures.js",
            lineNumber: 48,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ServiceFeatures.js",
        lineNumber: 47,
        columnNumber: 9
    }, this);
};
const __TURBOPACK__default__export__ = ServiceFeatures;
}}),
"[project]/src/components/Layout.js [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s({
    "default": (()=>Layout)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$redux__$5b$external$5d$__$28$react$2d$redux$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/react-redux [external] (react-redux, esm_import)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/router.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$slices$2f$cartSlice$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/slices/cartSlice.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$slices$2f$favoriteSlice$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/slices/favoriteSlice.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$storage$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/storage.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Header$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Header.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Footer$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Footer.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ContactLinks$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ContactLinks.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$BackToTop$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/BackToTop.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FloatingButtons$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/FloatingButtons.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ServiceFeatures$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ServiceFeatures.js [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$redux__$5b$external$5d$__$28$react$2d$redux$2c$__esm_import$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$slices$2f$cartSlice$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$slices$2f$favoriteSlice$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$storage$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Header$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__
]);
([__TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$redux__$5b$external$5d$__$28$react$2d$redux$2c$__esm_import$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$slices$2f$cartSlice$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$slices$2f$favoriteSlice$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$storage$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Header$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__);
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
function Layout({ children }) {
    const dispatch = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$redux__$5b$external$5d$__$28$react$2d$redux$2c$__esm_import$29$__["useDispatch"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const isCartPage = router.pathname === '/cart';
    const hasFetchedCart = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])(false);
    const hasFetchedFavorites = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])(false);
    // Initial fetch favorites và transfer
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        const initializeFavorites = async ()=>{
            if (!hasFetchedFavorites.current) {
                try {
                    // Đầu tiên thực hiện transfer favorites
                    await dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$slices$2f$favoriteSlice$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["transferFavorites"])()).unwrap();
                    // Sau đó fetch dữ liệu mới
                    await dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$slices$2f$favoriteSlice$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["forceUpdateFavorites"])({
                        page: 1,
                        limit: 10
                    })).unwrap();
                    hasFetchedFavorites.current = true;
                } catch (error) {
                    console.error('Failed to initialize favorites:', error);
                    hasFetchedFavorites.current = false;
                }
            }
        };
        initializeFavorites();
    }, [
        dispatch
    ]);
    // Route change với transfer và update
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        let timeoutId;
        const handleRouteChange = async ()=>{
            clearTimeout(timeoutId);
            timeoutId = setTimeout(async ()=>{
                try {
                    // Transfer trước khi update
                    await dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$slices$2f$favoriteSlice$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["transferFavorites"])()).unwrap();
                    await dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$slices$2f$favoriteSlice$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["forceUpdateFavorites"])({
                        page: 1,
                        limit: 10
                    })).unwrap();
                } catch (error) {
                    console.error('Failed to update favorites on route change:', error);
                }
            }, 300000);
        };
        router.events.on('routeChangeComplete', handleRouteChange);
        return ()=>{
            router.events.off('routeChangeComplete', handleRouteChange);
            clearTimeout(timeoutId);
        };
    }, [
        dispatch,
        router.events
    ]);
    // Cart logic giữ nguyên
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        const cartId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$storage$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["getCartId"])();
        if (cartId && !isCartPage && !hasFetchedCart.current) {
            hasFetchedCart.current = true;
            dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$slices$2f$cartSlice$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["getCartItems"])(cartId));
        }
        return ()=>{
            hasFetchedCart.current = false;
        };
    }, [
        dispatch,
        isCartPage
    ]);
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        const updateFavorites = async ()=>{
            try {
                await dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$slices$2f$favoriteSlice$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["transferFavorites"])()).unwrap();
                await dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$slices$2f$favoriteSlice$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["forceUpdateFavorites"])({
                    page: 1,
                    limit: 10
                })).unwrap();
            } catch (error) {
                console.error('Failed to update favorites:', error);
            }
        };
        updateFavorites();
    }, [
        dispatch
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        className: "min-h-screen flex flex-col",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Header$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                isCartPage: isCartPage
            }, void 0, false, {
                fileName: "[project]/src/components/Layout.js",
                lineNumber: 94,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("main", {
                className: "flex-grow",
                children: children
            }, void 0, false, {
                fileName: "[project]/src/components/Layout.js",
                lineNumber: 96,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FloatingButtons$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/components/Layout.js",
                lineNumber: 100,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ServiceFeatures$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/components/Layout.js",
                lineNumber: 101,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Footer$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/components/Layout.js",
                lineNumber: 102,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Layout.js",
        lineNumber: 93,
        columnNumber: 9
    }, this);
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/pages/size-guide.js [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s({
    "default": (()=>SizeGuide)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Layout$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Layout.js [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Layout$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__
]);
([__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Layout$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__);
;
;
const sizeGuides = {
    shirt: {
        title: 'Bảng Size Áo',
        headers: [
            'Size',
            'Chiều cao (cm)',
            'Cân nặng (kg)',
            'Ngực (cm)',
            'Vai (cm)',
            'Dài tay (cm)'
        ],
        data: [
            [
                'S',
                '150-160',
                '45-52',
                '82-86',
                '36-38',
                '58-60'
            ],
            [
                'M',
                '155-165',
                '53-60',
                '86-90',
                '38-40',
                '60-62'
            ],
            [
                'L',
                '160-170',
                '61-68',
                '90-94',
                '40-42',
                '62-64'
            ],
            [
                'XL',
                '165-175',
                '69-76',
                '94-98',
                '42-44',
                '64-66'
            ]
        ]
    },
    pants: {
        title: 'Bảng Size Quần',
        headers: [
            'Size',
            'Chiều cao (cm)',
            'Cân nặng (kg)',
            'Vòng eo (cm)',
            'Vòng mông (cm)',
            'Dài quần (cm)'
        ],
        data: [
            [
                'S',
                '150-160',
                '45-52',
                '64-68',
                '86-90',
                '95-97'
            ],
            [
                'M',
                '155-165',
                '53-60',
                '68-72',
                '90-94',
                '97-99'
            ],
            [
                'L',
                '160-170',
                '61-68',
                '72-76',
                '94-98',
                '99-101'
            ],
            [
                'XL',
                '165-175',
                '69-76',
                '76-80',
                '98-102',
                '101-103'
            ]
        ]
    },
    shoes: {
        title: 'Bảng Size Giày',
        headers: [
            'Size US',
            'Size EU',
            'Size UK',
            'Chiều dài chân (cm)'
        ],
        data: [
            [
                '6',
                '39',
                '5.5',
                '24.5'
            ],
            [
                '7',
                '40',
                '6.5',
                '25.5'
            ],
            [
                '8',
                '41',
                '7.5',
                '26.5'
            ],
            [
                '9',
                '42',
                '8.5',
                '27.5'
            ],
            [
                '10',
                '43',
                '9.5',
                '28.5'
            ]
        ]
    }
};
const SizeTable = ({ headers, data })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        className: "overflow-x-auto",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("table", {
            className: "min-w-full bg-white border",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("thead", {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("tr", {
                        className: "bg-gray-100",
                        children: headers.map((header, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("th", {
                                className: "border p-3 text-sm",
                                children: header
                            }, index, false, {
                                fileName: "[project]/src/pages/size-guide.js",
                                lineNumber: 43,
                                columnNumber: 29
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/pages/size-guide.js",
                        lineNumber: 41,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/pages/size-guide.js",
                    lineNumber: 40,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("tbody", {
                    children: data.map((row, rowIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("tr", {
                            children: row.map((cell, cellIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("td", {
                                    className: "border p-3 text-center",
                                    children: cell
                                }, cellIndex, false, {
                                    fileName: "[project]/src/pages/size-guide.js",
                                    lineNumber: 53,
                                    columnNumber: 33
                                }, this))
                        }, rowIndex, false, {
                            fileName: "[project]/src/pages/size-guide.js",
                            lineNumber: 51,
                            columnNumber: 25
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/pages/size-guide.js",
                    lineNumber: 49,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/pages/size-guide.js",
            lineNumber: 39,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/pages/size-guide.js",
        lineNumber: 38,
        columnNumber: 9
    }, this);
};
function SizeGuide() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Layout$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
            className: "container mx-auto px-4 py-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h1", {
                    className: "text-3xl font-bold mb-6",
                    children: "Hướng dẫn chọn size"
                }, void 0, false, {
                    fileName: "[project]/src/pages/size-guide.js",
                    lineNumber: 69,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "mb-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                            className: "text-xl font-semibold mb-4",
                            children: "Cách đo size chính xác"
                        }, void 0, false, {
                            fileName: "[project]/src/pages/size-guide.js",
                            lineNumber: 73,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "bg-gray-50 p-4 rounded-lg",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("ul", {
                                className: "space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                        children: "• Vòng ngực: Đo vòng quanh phần đầy đặn nhất của ngực"
                                    }, void 0, false, {
                                        fileName: "[project]/src/pages/size-guide.js",
                                        lineNumber: 76,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                        children: "• Vòng eo: Đo vòng quanh eo tại vị trí nhỏ nhất"
                                    }, void 0, false, {
                                        fileName: "[project]/src/pages/size-guide.js",
                                        lineNumber: 77,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                        children: "• Vòng mông: Đo vòng quanh phần đầy đặn nhất của mông"
                                    }, void 0, false, {
                                        fileName: "[project]/src/pages/size-guide.js",
                                        lineNumber: 78,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                        children: "• Chiều dài tay: Đo từ vai đến cổ tay"
                                    }, void 0, false, {
                                        fileName: "[project]/src/pages/size-guide.js",
                                        lineNumber: 79,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                        children: "• Chiều dài chân: Đo từ đáy chân đến mắt cá chân"
                                    }, void 0, false, {
                                        fileName: "[project]/src/pages/size-guide.js",
                                        lineNumber: 80,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/pages/size-guide.js",
                                lineNumber: 75,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/pages/size-guide.js",
                            lineNumber: 74,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/pages/size-guide.js",
                    lineNumber: 72,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "mb-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                            className: "text-xl font-semibold mb-4",
                            children: sizeGuides.shirt.title
                        }, void 0, false, {
                            fileName: "[project]/src/pages/size-guide.js",
                            lineNumber: 87,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(SizeTable, {
                            headers: sizeGuides.shirt.headers,
                            data: sizeGuides.shirt.data
                        }, void 0, false, {
                            fileName: "[project]/src/pages/size-guide.js",
                            lineNumber: 88,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/pages/size-guide.js",
                    lineNumber: 86,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "mb-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                            className: "text-xl font-semibold mb-4",
                            children: sizeGuides.pants.title
                        }, void 0, false, {
                            fileName: "[project]/src/pages/size-guide.js",
                            lineNumber: 93,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(SizeTable, {
                            headers: sizeGuides.pants.headers,
                            data: sizeGuides.pants.data
                        }, void 0, false, {
                            fileName: "[project]/src/pages/size-guide.js",
                            lineNumber: 94,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/pages/size-guide.js",
                    lineNumber: 92,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "mb-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                            className: "text-xl font-semibold mb-4",
                            children: sizeGuides.shoes.title
                        }, void 0, false, {
                            fileName: "[project]/src/pages/size-guide.js",
                            lineNumber: 99,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(SizeTable, {
                            headers: sizeGuides.shoes.headers,
                            data: sizeGuides.shoes.data
                        }, void 0, false, {
                            fileName: "[project]/src/pages/size-guide.js",
                            lineNumber: 100,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/pages/size-guide.js",
                    lineNumber: 98,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "mt-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                            className: "text-xl font-semibold mb-4",
                            children: "Lưu ý khi chọn size"
                        }, void 0, false, {
                            fileName: "[project]/src/pages/size-guide.js",
                            lineNumber: 105,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "bg-yellow-50 p-4 rounded-lg",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("ul", {
                                className: "space-y-2 text-yellow-800",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                        children: "• Các số đo trong bảng chỉ mang tính chất tham khảo"
                                    }, void 0, false, {
                                        fileName: "[project]/src/pages/size-guide.js",
                                        lineNumber: 108,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                        children: "• Tùy thuộc vào mẫu sản phẩm, size có thể sẽ có sự chênh lệch nhỏ"
                                    }, void 0, false, {
                                        fileName: "[project]/src/pages/size-guide.js",
                                        lineNumber: 109,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                        children: "• Nếu bạn đang cân nhắc giữa hai size, nên chọn size lớn hơn"
                                    }, void 0, false, {
                                        fileName: "[project]/src/pages/size-guide.js",
                                        lineNumber: 110,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/pages/size-guide.js",
                                lineNumber: 107,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/pages/size-guide.js",
                            lineNumber: 106,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/pages/size-guide.js",
                    lineNumber: 104,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "mt-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                            className: "text-xl font-semibold mb-4",
                            children: "Thông tin liên hệ hỗ trợ"
                        }, void 0, false, {
                            fileName: "[project]/src/pages/size-guide.js",
                            lineNumber: 117,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "bg-gray-100 p-4 rounded-lg",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                    className: "font-medium",
                                    children: "FASHION STORE"
                                }, void 0, false, {
                                    fileName: "[project]/src/pages/size-guide.js",
                                    lineNumber: 119,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                    children: "Văn phòng: Tp. HCM"
                                }, void 0, false, {
                                    fileName: "[project]/src/pages/size-guide.js",
                                    lineNumber: 120,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                    children: "Hotline: 0999 999 999"
                                }, void 0, false, {
                                    fileName: "[project]/src/pages/size-guide.js",
                                    lineNumber: 121,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                    children: "Email: cskh@fashionstore.vn"
                                }, void 0, false, {
                                    fileName: "[project]/src/pages/size-guide.js",
                                    lineNumber: 122,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/pages/size-guide.js",
                            lineNumber: 118,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/pages/size-guide.js",
                    lineNumber: 116,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/pages/size-guide.js",
            lineNumber: 68,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/pages/size-guide.js",
        lineNumber: 67,
        columnNumber: 9
    }, this);
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),

};

//# sourceMappingURL=%5Broot%20of%20the%20server%5D__4a889a2f._.js.map