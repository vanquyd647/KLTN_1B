import axios from 'axios';
import {
    getToken,
    setToken,
    getRefreshToken,
    setRefreshToken,
    getUserId,
    setUserId,
    setSessionId,
    getSessionId,
    removeSessionId,
    removeRefreshToken,
    removeUserId,
    removeToken,
    setCartId,
    getCartId,
    removeCartId,
} from './storage';
import { resetAuthState } from '../store/slices/userSlice';

// https://kltn-1a.onrender.com hihi

const apiClient = axios.create({
    baseURL: 'https://kltn-1a.onrender.com/api/',
});

// **Request Interceptor**
apiClient.interceptors.request.use(
    async (config) => {
        try {
            // Retrieve access token and session ID from cookies
            const accessToken = getToken();
            const sessionId = getSessionId();

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
    },
    (error) => Promise.reject(error)
);

apiClient.interceptors.response.use(
    (response) => {
        // Log toàn bộ response để kiểm tra
        console.log('Response received:', response);
        console.log('Response headers:', response.headers['x-session-id']);

        // Lưu session ID nếu có trong headers của response
        const sessionId = response.headers['x-session-id'];
        if (sessionId) {
            setSessionId(sessionId); // Lưu vào cookie hoặc storage
            console.log('Session ID saved from response:', sessionId); // Log session ID để kiểm tra
        }

        return response;
    },
    async (error) => {
        // Log toàn bộ error response
        console.error('Error response:', error.response);

        const originalRequest = error.config;

        // Thêm thuộc tính _retryCount nếu chưa có
        if (!originalRequest._retryCount) {
            originalRequest._retryCount = 0;
        }

        // Nếu lỗi 403 và chưa đạt giới hạn retry
        if (error.response?.status === 403 && originalRequest._retryCount < 5) {
            originalRequest._retryCount += 1; // Tăng số lần retry

            if (originalRequest.url.includes('/users/refresh-token')) {
                console.error('Token refresh failed. Redirecting to login...');
                removeSessionId(); // Xóa session ID
                store.dispatch(resetAuthState());
                return Promise.reject(new Error('Please log in again.'));
            }

            try {
                const newAccessToken = await userApi.refreshToken();
                originalRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
                return apiClient(originalRequest); // Retry request với token mới
            } catch (refreshError) {
                console.error('Error during token refresh:', refreshError);
                return Promise.reject(refreshError);
            }
        }

        // Nếu vượt quá số lần retry, trả về lỗi
        if (originalRequest._retryCount >= 5) {
            console.error('Maximum retry attempts reached.');
            return Promise.reject(new Error('Request failed after maximum retries.'));
        }

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
            const { accessToken, refreshToken } = response.data.data;

            if (accessToken && refreshToken) {
                setToken(accessToken); // Lưu access token
                setRefreshToken(refreshToken); // Lưu refresh token
                removeCartId(); // Xóa cart ID khi đăng nhập
            }

            // Kiểm tra và lưu session ID từ headers của response
            const sessionId = response.headers['x-session-id'];
            if (sessionId) {
                setSessionId(sessionId); // Lưu session ID vào cookie hoặc storage
                console.log('Session ID received and saved during login:', sessionId); // Log kiểm tra
            }

            return response.data;
        } catch (error) {
            throw error;
        }
    },


    // Logout user
    logout: async () => {
        try {
            const refreshToken = getRefreshToken();
            const userId = getUserId();
            await apiClient.post('users/logout', { refreshToken, userId });

            // Clear all stored tokens and session ID
            removeSessionId();
            removeRefreshToken();
            removeUserId();
            removeSessionId();
            removeToken();
            removeCartId();
            return { message: 'Logout successful' };
        } catch (error) {
            throw error.response?.data || 'Logout failed';
        }
    },

    // Get user profile
    getUserProfile: async () => {
        try {
            const response = await apiClient.get('users/profile');
            return response.data.data;
        } catch (error) {
            throw error.response?.data || 'Failed to fetch user profile';
        }
    },

    // Refresh token
    refreshToken: async () => {
        try {
            const get_refreshToken = getRefreshToken();
            const get_userId = getUserId();
            const response = await apiClient.post('users/refresh-token', { get_refreshToken });

            const { accessToken, refreshToken: newRefreshToken } = response.data.data;

            if (accessToken && newRefreshToken) {
                setToken(accessToken); // Update access token
                setRefreshToken(newRefreshToken); // Update refresh token
            }

            return accessToken; // Return the new access token
        } catch (error) {
            throw new Error('Token refresh failed. Please log in again.');
        }
    },
};

// **Product API**
const productApi = {
    // Create a new product
    createProduct: async (productData) => {
        const response = await apiClient.post('products/', productData);
        return response.data;
    },

    // Get all products
    getProducts: async () => {
        const response = await apiClient.get('products/');
        return response.data.data;
    },

    // Get product details by slug
    getProductDetail: async (slug) => {
        const response = await apiClient.get(`products/${slug}`);
        return response.data.data;
    },

    // Update product by slug
    updateProduct: async (slug, productData) => {
        const response = await apiClient.put(`products/${slug}`, productData);
        return response.data;
    },

    // Delete product by slug
    deleteProduct: async (slug) => {
        const response = await apiClient.delete(`products/${slug}`);
        return response.data;
    },

    // Get products with pagination
    getProductsByPagination: async (page, limit) => {
        const response = await apiClient.get(`products/pagination?page=${page}&limit=${limit}`);
        return response.data;
    },

    // Get new products with pagination
    getNewProductsByPagination: async (page, limit) => {
        const response = await apiClient.get(`products/new?page=${page}&limit=${limit}`);
        return response.data;
    },

    // Get featured products with pagination
    getFeaturedProductsByPagination: async (page, limit) => {
        const response = await apiClient.get(`products/featured?page=${page}&limit=${limit}`);
        return response.data;
    },
};


const cartApi = {
    // Tạo giỏ hàng cho khách
    createCartForGuest: async (cartData) => {
        try {
            const response = await apiClient.post('carts/guest', cartData);
            const { id } = response.data.data;
            if (id) {
                console.log('Cart ID:', id);
                setCartId(id); // Lưu cart ID vào cookie hoặc storage
            }

            return response.data;
        } catch (error) {
            throw error.response?.data || 'Failed to create cart for guest.';
        }
    },

    // Tạo hoặc lấy giỏ hàng cho người dùng đã đăng nhập
    createCartForUser: async () => {
        try {
            const response = await apiClient.post('carts/user');
            const { id } = response.data.data;
            if (id) {
                console.log('Cart ID:', id);
                setCartId(id); // Lưu cart ID vào cookie hoặc storage
            }

            return response.data;
        } catch (error) {
            throw error.response?.data || 'Failed to create or retrieve cart for user.';
        }
    },

    // Lấy chi tiết giỏ hàng theo ID
    getCartById: async (cartId) => {
        try {
            const response = await apiClient.get(`carts/${cartId}`);
            return response.data;
        } catch (error) {
            throw error.response?.data || 'Failed to fetch cart details.';
        }
    },

    // Thêm sản phẩm vào giỏ hàng
    addItemToCart: async (cartId, itemData) => {
        try {
            const response = await apiClient.post(`carts/${cartId}/items`, itemData);
            return response.data;
        } catch (error) {
            throw error.response?.data || 'Failed to add item to cart.';
        }
    },


    // Xóa sản phẩm khỏi giỏ hàng
    removeCartItem: async (itemId) => {
        try {
            const response = await apiClient.delete(`carts/items/${itemId}`);
            return response.data;
        } catch (error) {
            throw error.response?.data || 'Failed to remove item from cart.';
        }
    },

    // Lấy tất cả sản phẩm trong giỏ hàng
    getCartItems: async (cartId) => {
        try {
            const response = await apiClient.get(`carts/${cartId}/items`);
            return response.data;
        } catch (error) {
            throw error.response?.data || 'Failed to fetch cart items.';
        }
    },
};

const reviewApi = {
    // Tạo mới một review
    createReview: async (reviewData) => {
        try {
            const response = await apiClient.post('reviews/', reviewData);
            return response.data;
        } catch (error) {
            throw error.response?.data || 'Failed to create review.';
        }
    },

    // Lấy danh sách review của một sản phẩm
    getReviewsByProduct: async (productId, page, limit) => {
        try {
            const response = await apiClient.get(`reviews/product/${productId}?page=${page}&limit=${limit}`);
            return response.data;
        } catch (error) {
            throw error.response?.data || 'Failed to fetch reviews.';
        }
    },

    // Lấy điểm trung bình của một sản phẩm
    getAverageRating: async (productId) => {
        try {
            const response = await apiClient.get(`reviews/product/${productId}/average-rating`);
            return response.data;
        } catch (error) {
            throw error.response?.data || 'Failed to fetch average rating.';
        }
    },

    // Xóa một review
    deleteReview: async (reviewId) => {
        try {
            const response = await apiClient.delete(`reviews/${reviewId}`);
            return response.data;
        } catch (error) {
            throw error.response?.data || 'Failed to delete review.';
        }
    },
};

const productsByCategoryApi = {
    // Lấy tất cả sản phẩm theo danh mục
    getProductsByCategory: async (categoryId, page, limit) => {
        try {
            const response = await apiClient.get(`products-by-category/${categoryId}?page=${page}&limit=${limit}`);
            return response.data;
        } catch (error) {
            throw error.response?.data || 'Failed to fetch products by category.';
        }
    },
};

export { apiClient, userApi, productApi, cartApi, reviewApi, productsByCategoryApi };
