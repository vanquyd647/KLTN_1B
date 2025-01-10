import axios from 'axios';
import { getToken, setToken, getRefreshToken, setRefreshToken, getUserId, setUserId } from './storage';
import { resetAuthState } from '../store/slices/userSlice';

const apiClient = axios.create({
    baseURL: 'http://localhost:5551/api/',
});

// Interceptor: Tự động thêm access token vào headers
apiClient.interceptors.request.use(
    async (config) => {
        try {
            const accessToken = getToken();
            if (accessToken) {
                config.headers['Authorization'] = `Bearer ${accessToken}`;
            }
        } catch (error) {
            console.error('Lỗi khi lấy access token:', error);
        }
        return config;
    },
    (error) => Promise.reject(error)
);

// In your interceptor
apiClient.interceptors.response.use(
    (response) => response, // Return the response if no error
    async (error) => {
        const originalRequest = error.config;

        // Tạo bộ đếm retry nếu chưa tồn tại
        if (!originalRequest._retryCount) {
            originalRequest._retryCount = 0;
        }

        if (error.response?.status === 403 && originalRequest._retryCount < 3) {
            if (originalRequest.url.includes('/users/refresh-token')) {
                console.error('Token refresh failed. Redirecting to login...');
                setToken(null);
                setRefreshToken(null);
                // Làm mới trạng thái đăng nhập
                store.dispatch(resetAuthState());
                return Promise.reject(new Error('Please log in again.'));
            }

            originalRequest._retry = true;
            originalRequest._retryCount += 1; // Tăng bộ đếm retry

            try {
                const newAccessToken = await userApi.refreshToken();
                originalRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
                return apiClient(originalRequest); // Thử lại request với token mới
            } catch (refreshError) {
                return Promise.reject(refreshError);
            }
        }

        // Nếu đã retry tối đa hoặc gặp lỗi khác, từ chối request
        return Promise.reject(error);
    }
);

// **User API**
const userApi = {
    // Register user
    register: async (userData) => {
        try {
            const response = await apiClient.post('users/register', userData);
            return response.data;
        } catch (error) {
            throw error;
        }
    },

    // Verify OTP for registration
    verifyOtp: async (otpData) => {
        try {
            const response = await apiClient.post('users/verify-otp', otpData);
            return response.data;
        } catch (error) {
            throw error;
        }
    },

    // Login user
    login: async (credentials) => {
        try {
            const response = await apiClient.post('users/login', credentials);
            const { accessToken, refreshToken, userId } = response.data.data;

            if (accessToken && refreshToken) {
                setToken(accessToken); // Store the access token
                setRefreshToken(refreshToken); // Store the refresh token
            }

            if (userId) {
                setUserId(userId); // Store the user ID
            }

            return response.data;
        } catch (error) {
            throw error;
        }
    },

    // Logout user
    logout: async () => {
        try {
            const userId = getUserId(); 
            const refreshToken = getRefreshToken(); 
            await apiClient.post('users/logout', { refreshToken, userId }); 
            setToken(null); 
            setRefreshToken(null); 
            return { message: 'Logout successful' };
        } catch (error) {
            throw error.response?.data || 'Đăng xuất thất bại';
        }
    },

    // Get user profile
    getUserProfile: async () => {
        try {
            const response = await apiClient.get('users/profile');
            return response.data.data;
        } catch (error) {
            throw error.response?.data || 'Không thể lấy thông tin người dùng';
        }
    },

    // Refresh token
    refreshToken: async () => {
        try {
            const get_refreshToken = getRefreshToken();
            const get_userId = getUserId();
            const response = await apiClient.post('users/refresh-token', { get_refreshToken, get_userId });
            const { accessToken, refreshToken } = response.data.data;

            if (accessToken && refreshToken) {
                // Xóa token cũ trước khi lưu mới
                setToken(null);
                setRefreshToken(null);
                // Lưu token mới
                setToken(accessToken); // Store the access token
                setRefreshToken(refreshToken); // Store the refresh token
            }
            
            return response.data;
        } catch (error) {
            throw new Error('Vui lòng đăng nhập lại.');
        }
    }
};

export default userApi;
