import axios from 'axios';
import {
    getToken,
    setToken,
    getRefreshToken,
    setRefreshToken,
    getUserId,
    setSessionId,
    getSessionId,
    removeSessionId,
    removeRefreshToken,
    removeUserId,
    removeToken,
    setCartId,
    getCartId,
    removeCartId,
    clearAllCookies,
    removeRole,
    setRole,
} from './storage';
import { resetAuthState } from '../store/slices/userSlice';

// https://kltn-1a.onrender.com hihi, http://localhost:5551/v1/api/, https://c918-118-71-16-139.ngrok-free.app

const apiClient = axios.create({
    baseURL: 'http://localhost:5551/v1/api/',
    headers: {
        'Content-Type': 'application/json',
        'ngrok-skip-browser-warning': 'true'
    },
    withCredentials: true
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

const MAX_RETRY_COUNT = 5; // Giới hạn số lần retry

// Hàm delay với backoff logic
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// Interceptor xử lý response
apiClient.interceptors.response.use(
    (response) => {
        console.log('Response received:', response);

        // Lưu session ID nếu có trong response headers
        const sessionId = response.headers?.['x-session-id'];
        if (sessionId) {
            setSessionId(sessionId); // Lưu vào cookie hoặc storage
            console.log('Session ID saved from response:', sessionId);
        }

        return response;
    },
    async (error) => {
        const originalRequest = error.config;

        console.log('Error response:', error.response || 'No response available');

        // Thêm thuộc tính _retryCount nếu chưa có
        if (!originalRequest._retryCount) {
            originalRequest._retryCount = 0;
        }

        // Kiểm tra lỗi từ Refresh Token
        if (
            error.response?.status === 403 &&
            error.response?.data?.message === "Refresh Token không tồn tại"
        ) {
            console.log('Refresh token does not exist. Logging out...');
            clearAllCookies(); // Xóa tất cả cookies
            store.dispatch(resetAuthState()); // Reset trạng thái auth
            return new Promise(() => { }); // Trả về Promise không lỗi
        }

        // Dừng retry nếu là request tới /users/refresh-token
        if (originalRequest.url.includes('/users/refresh-token')) {
            console.log('Refresh token request failed. Stopping retries.');
            removeSessionId(); // Xóa session ID
            store.dispatch(resetAuthState()); // Reset trạng thái auth
            return new Promise(() => { }); // Trả về Promise không lỗi
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
                return new Promise(() => { }); // Trả về Promise không lỗi
            }
        }

        // Nếu vượt quá số lần retry
        if (originalRequest._retryCount >= MAX_RETRY_COUNT) {
            console.log('Maximum retry attempts reached.');
            return new Promise(() => { }); // Trả về Promise không lỗi
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
            const { accessToken, refreshToken, user } = response.data.data;

            if (accessToken && refreshToken) {
                // Lấy cart_id trực tiếp từ user object
                const cart_id = user.cart_id;

                // Lưu các thông tin cần thiết

                setRole('');
                setToken(accessToken);
                setRefreshToken(refreshToken);
                removeCartId(); // Xóa cart ID cũ nếu có
                // setCartId(cart_id); // Lưu cart ID mới
            }

            // Kiểm tra và lưu session ID từ headers
            const sessionId = response.headers['x-session-id'];
            if (sessionId) {
                setSessionId(sessionId);
                console.log('Session ID received and saved during login:', sessionId);
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
            removeRole();

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

    // Cập nhật thông tin profile người dùng
    updateUserProfile: async (userData) => {
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
 */
    forgotPassword: async (data) => {
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
     */
    resetPassword: async (data) => {
        try {
            const response = await apiClient.post('users/reset-password', data);
            return response.data;
        } catch (error) {
            throw error.response?.data || 'Không thể đặt lại mật khẩu.';
        }
    },

};

const adminApi = {
    /**
     * Đăng nhập admin
     * @param {Object} credentials - Dữ liệu đăng nhập (email và password)
     * @returns {Promise<Object>} - Phản hồi từ API
     */
    loginForAdmin: async (credentials) => {
        try {
            const response = await apiClient.post('users/login-admin', credentials);

            // Lấy token và vai trò từ phản hồi
            const { accessToken, refreshToken, role } = response.data.data;

            // Lưu token và role
            if (accessToken && refreshToken) {
                setToken(accessToken);
                setRefreshToken(refreshToken);
                setRole(role);

            }

            // Lưu session ID nếu có trong header
            const sessionId = response.headers['x-session-id'];
            if (sessionId) {
                setSessionId(sessionId);
            }

            return { user: response.data.user, role }; // Trả về thông tin người dùng và vai trò
        } catch (error) {
            throw error.response?.data || error.message;
        }
    },

    // Get all users (Admin only) 
    getAllUsers: async (params = {}) => {
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
    createUser: async (userData) => {
        try {
            const response = await apiClient.post('users/admin/users', userData);
            return response.data;
        } catch (error) {
            throw error.response?.data || 'Failed to create user';
        }
    },

    // Update user (Admin only) 
    updateUser: async (userId, userData) => {
        try {
            const response = await apiClient.put(`users/admin/users/${userId}`, userData);
            return response.data;
        } catch (error) {
            throw error.response?.data || 'Failed to update user';
        }
    },

    deleteUser: async (userId) => {
        try {
            const response = await apiClient.delete(`users/admin/users/${userId}`);
            return response.data;
        } catch (error) {
            throw error.response?.data || 'Failed to delete user';
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
        const response = await apiClient.get('products');
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
    getProductsByPagination: async (params = {}) => {
        try {
            const {
                page = 1,
                limit = 20,
                name,
                categories,
                colorIds,
                sizes,
                priceRange,
                sort = 'newest'
            } = params;

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
    getNewProductsByPagination: async (page, limit, sort, priceRange, colorIds) => {
        try {
            const query = new URLSearchParams({
                page,
                limit,
                sort,
                priceRange: priceRange || '',
                colorIds: colorIds || '',
            }).toString();

            const response = await apiClient.get(`products/new?${query}`);
            return response.data;
        } catch (error) {
            console.error('Error fetching new products:', error);
            throw error.response?.data || 'Failed to fetch new products.';
        }
    },

    // Get featured products with pagination
    getFeaturedProductsByPagination: async (page, limit, sort, priceRange, colorIds) => {
        try {
            const query = new URLSearchParams({
                page,
                limit,
                sort,
                priceRange: priceRange || '',
                colorIds: colorIds || '',
            }).toString();

            const response = await apiClient.get(`products/featured?${query}`);
            return response.data;
        } catch (error) {
            console.error('Error fetching featured products:', error);
            throw error.response?.data || 'Failed to fetch featured products.';
        }
    },

    searchProductsByNameAndColor: async (keyword, options = {}) => {
        try {
            const {
                page = 1,
                limit = 20,
                sort = 'newest'
            } = options;

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

    // Cập nhật số lượng sản phẩm trong giỏ hàng
    updateCartItemQuantity: async (itemId, quantity) => {
        try {
            const response = await apiClient.put(`carts/item/${itemId}`, { quantity });
            return response.data;
        } catch (error) {
            throw error.response?.data || 'Failed to update cart item quantity.';
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
    // Fetch all products by category
    getProductsByCategory: async (categoryId, page, limit, sort, priceRange, colorIds) => {
        try {
            const query = new URLSearchParams({
                page,
                limit,
                sort,
                priceRange: priceRange || '',
                colorIds: colorIds || '',
            }).toString();

            const response = await apiClient.get(`products-by-category/${categoryId}?${query}`);
            return response.data;
        } catch (error) {
            throw error.response?.data || 'Failed to fetch products by category.';
        }
    },
};

const colorsApi = {
    // Fetch all colors
    getColors: async () => {
        try {
            const response = await apiClient.get('colors');
            return response.data.data;
        } catch (error) {
            throw error.response?.data || 'Failed to fetch colors.';
        }
    },
}

const indexApi = {
    getNewProducts: async (page, limit) => {
        const response = await apiClient.get('/products/news', {
            params: { page, limit },
        });
        return response.data;
    },
    getFeaturedProducts: async (page, limit) => {
        const response = await apiClient.get('/products/featureds', {
            params: { page, limit },
        });
        return response.data;
    },
};

const orderApi = {
    /**
     * Create a new order
     * @param {Object} orderData - Order details
     * @returns {Promise<Object>} - Created order response
     */
    createOrder: async (orderData) => {
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
     */
    getOrderById: async (orderId) => {
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
     */
    updateOrderStatus: async (orderId, status) => {
        try {
            const response = await apiClient.patch(`orders/${orderId}/status`, { status });
            return response.data;
        } catch (error) {
            throw error.response?.data || 'Failed to update order status.';
        }
    },

    /**
     * Cancel expired orders
     * @returns {Promise<Object>} - Response status
     */
    cancelExpiredOrders: async () => {
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
     */
    completeOrder: async (orderId) => {
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
     */
    deleteOrder: async (orderId) => {
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
     */
    getOrdersByUser: async ({ page = 1, limit = 10 }) => {
        try {
            const response = await apiClient.get(`orders/user`, {
                params: { page, limit }
            });
            return response.data;
        } catch (error) {
            throw error.response?.data || 'Không thể lấy danh sách đơn hàng.';
        }
    },

    getAllOrders: async ({
        page = 1,
        limit = 10,
        status,
        startDate,
        endDate,
        orderId,           // Thêm filter mã đơn hàng
        customerName,      // Thêm filter tên khách hàng  
        customerEmail,     // Thêm filter email
        customerPhone      // Thêm filter số điện thoại
    }) => {
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
 */
    sendOrderConfirmation: async (data) => {
        try {
            const response = await apiClient.post('orders/send-order-confirmation', data);
            return response.data;
        } catch (error) {
            throw error.response?.data || 'Không thể gửi email xác nhận đơn hàng.';
        }
    },
};

const paymentApi = {
    /**
     * Tạo thanh toán qua PayOS
     * @param {Object} paymentData - Dữ liệu thanh toán
     * @returns {Promise<Object>} - Thông tin thanh toán
     */
    createPayOSPayment: async (paymentData) => {
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
     */
    createCODPayment: async (codData) => {
        try {
            const response = await apiClient.post('payments/cod', codData);
            return response.data;
        } catch (error) {
            throw error.response?.data || 'Không thể tạo thanh toán COD.';
        }
    },

    updatePaymentStatus: async (statusData) => {
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
     */
    updatePaymentMethodStatus: async (statusData) => {
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
    getProductStocks: async () => {
        try {
            const response = await apiClient.get('product-stocks');
            return response.data;
        } catch (error) {
            throw error.response?.data || 'Failed to fetch product stocks.';
        }
    },

    updateStock: async (stockId, stockData) => {
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
    createCarrier: async (carrierData) => {
        try {
            const response = await apiClient.post('carriers', carrierData);
            return response.data;
        } catch (error) {
            throw error.response?.data || 'Failed to create carrier.';
        }
    },

    // Lấy danh sách nhà vận chuyển
    getCarriers: async (query = {}) => {
        try {
            const { page = 1, limit = 10 } = query;
            const queryString = new URLSearchParams({ page, limit }).toString();
            const response = await apiClient.get(`carriers?${queryString}`);
            return response.data;
        } catch (error) {
            throw error.response?.data || 'Failed to fetch carriers.';
        }
    },

    // Lấy chi tiết nhà vận chuyển
    getCarrierById: async (id) => {
        try {
            const response = await apiClient.get(`carriers/${id}`);
            return response.data;
        } catch (error) {
            throw error.response?.data || 'Failed to fetch carrier details.';
        }
    },

    // Cập nhật thông tin nhà vận chuyển
    updateCarrier: async (id, carrierData) => {
        try {
            const response = await apiClient.put(`carriers/${id}`, carrierData);
            return response.data;
        } catch (error) {
            throw error.response?.data || 'Failed to update carrier.';
        }
    },

    // Xóa nhà vận chuyển
    deleteCarrier: async (id) => {
        try {
            const response = await apiClient.delete(`carriers/${id}`);
            return response.data;
        } catch (error) {
            throw error.response?.data || 'Failed to delete carrier.';
        }
    },

    // Cập nhật trạng thái nhà vận chuyển
    updateCarrierStatus: async (id, status) => {
        try {
            const response = await apiClient.patch(`carriers/${id}/status`, { status });
            return response.data;
        } catch (error) {
            throw error.response?.data || 'Failed to update carrier status.';
        }
    }
};

const addressApi = {
    // Lấy danh sách địa chỉ của người dùng
    getAddresses: async () => {
        try {
            const response = await apiClient.get('addresses');
            return response.data;
        } catch (error) {
            throw error.response?.data || 'Không thể lấy danh sách địa chỉ.';
        }
    },

    // Tạo địa chỉ mới
    createAddress: async (addressData) => {
        try {
            const response = await apiClient.post('addresses', addressData);
            return response.data;
        } catch (error) {
            throw error.response?.data || 'Không thể tạo địa chỉ mới.';
        }
    },

    // Cập nhật địa chỉ
    updateAddress: async (addressId, addressData) => {
        try {
            const response = await apiClient.put(`addresses/${addressId}`, addressData);
            return response.data;
        } catch (error) {
            throw error.response?.data || 'Không thể cập nhật địa chỉ.';
        }
    },

    // Xóa địa chỉ
    deleteAddress: async (addressId) => {
        try {
            const response = await apiClient.delete(`addresses/${addressId}`);
            return response.data;
        } catch (error) {
            throw error.response?.data || 'Không thể xóa địa chỉ.';
        }
    },

    // Đặt địa chỉ làm mặc định
    setDefaultAddress: async (addressId) => {
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
    checkFavoriteStatus: async (productId) => {
        try {
            const response = await apiClient.get(`favorites/products/${productId}/favorite`);
            return response.data;
        } catch (error) {
            throw error.response?.data || 'Không thể kiểm tra trạng thái yêu thích.';
        }
    },

    // Lấy danh sách sản phẩm yêu thích
    getFavorites: async (page = 1, limit = 10) => {
        try {
            const response = await apiClient.get('favorites/favorites', {
                params: { page, limit }
            });
            return response.data;
        } catch (error) {
            throw error.response?.data || 'Không thể lấy danh sách yêu thích.';
        }
    },

    // Thêm sản phẩm vào danh sách yêu thích
    addToFavorite: async (productId) => {
        try {
            const response = await apiClient.post(`favorites/products/${productId}/favorite`);
            return response.data;
        } catch (error) {
            throw error.response?.data || 'Không thể thêm vào yêu thích.';
        }
    },

    // Xóa sản phẩm khỏi danh sách yêu thích
    removeFromFavorite: async (productId) => {
        try {
            const response = await apiClient.delete(`favorites/products/${productId}/favorite`);
            return response.data;
        } catch (error) {
            throw error.response?.data || 'Không thể xóa khỏi yêu thích.';
        }
    },

    // Chuyển danh sách yêu thích từ session sang tài khoản
    transferFavorites: async () => {
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
     */
    trackOrder: async (orderId, identifier) => {
        try {
            const response = await apiClient.get(`order-tracking/${orderId}`, {
                params: { identifier }
            });
            return response.data;
        } catch (error) {
            throw error.response?.data || 'Không thể tra cứu thông tin đơn hàng.';
        }
    }
};

const couponApi = {
    // Tạo mã giảm giá mới (Admin)
    createCoupon: async (couponData) => {
        try {
            const response = await apiClient.post('coupons', couponData);
            return response.data;
        } catch (error) {
            throw error.response?.data || 'Không thể tạo mã giảm giá.';
        }
    },

    // Lấy danh sách mã giảm giá (Admin)
    getAllCoupons: async (params = {}) => {
        try {
            const {
                page = 1,
                limit = 10,
                search,
                is_active,
                startDate,
                endDate,
                minAmount,
                maxAmount,
                sortBy = 'created_at',
                sortOrder = 'DESC'
            } = params;

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
    getCouponById: async (id) => {
        try {
            const response = await apiClient.get(`coupons/${id}`);
            return response.data;
        } catch (error) {
            throw error.response?.data || 'Không thể lấy thông tin mã giảm giá.';
        }
    },

    // Kiểm tra mã giảm giá (Public)
    validateCoupon: async (code, orderAmount) => {
        try {
            const response = await apiClient.post('coupons/validate', { code, orderAmount });
            return response.data;
        } catch (error) {
            throw error.response?.data || 'Mã giảm giá không hợp lệ.';
        }
    },

    // Áp dụng mã giảm giá (Public)
    applyCoupon: async (code, orderAmount) => {
        try {
            const response = await apiClient.post('coupons/apply', { code, orderAmount });
            return response.data;
        } catch (error) {
            throw error.response?.data || 'Không thể áp dụng mã giảm giá.';
        }
    },

    // Cập nhật mã giảm giá (Admin)
    updateCoupon: async (id, updateData) => {
        try {
            const response = await apiClient.put(`coupons/${id}`, updateData);
            return response.data;
        } catch (error) {
            throw error.response?.data || 'Không thể cập nhật mã giảm giá.';
        }
    },

    // Xóa mã giảm giá (Admin)
    deleteCoupon: async (id) => {
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
    getRevenueStats: async (filters = {}) => {
        try {
            const queryParams = new URLSearchParams();
            if (filters.startDate) {
                queryParams.append('startDate', filters.startDate);
            }
            if (filters.endDate) {
                queryParams.append('endDate', filters.endDate);
            }

            const response = await apiClient.get(`revenue/stats?${queryParams}`);
            return response;
        } catch (error) {
            throw error.response?.data || 'Không thể lấy thống kê doanh thu.';
        }
    },

    // Lấy doanh thu theo ngày
    getDailyRevenue: async (date) => {
        try {
            const response = await apiClient.get('revenue/daily', {
                params: { date }
            });
            return response;
        } catch (error) {
            throw error.response?.data || 'Không thể lấy doanh thu theo ngày.';
        }
    },

    // Lấy doanh thu theo tháng
    getMonthlyRevenue: async (year, month) => {
        try {
            const response = await apiClient.get('revenue/monthly', {
                params: { year, month }
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
    createInvoice: (orderData) => apiClient.post('/invoices/create', orderData),

    // Lấy chi tiết hóa đơn theo ID
    // GET /api/invoices/:id
    getInvoiceById: (id) => apiClient.get(`/invoices/${id}`),

    // Lấy tất cả hóa đơn với phân trang
    // GET /api/invoices?page=1&limit=10
    getAllInvoices: (params) => apiClient.get('/invoices', { params }),

    // Tìm kiếm hóa đơn
    // GET /api/invoices/search?invoiceNumber=IV&page=1&limit=10
    searchInvoices: (params) => apiClient.get('/invoices/search', { params }),

    // Tạo và tải file PDF cho hóa đơn
    // GET /api/invoices/:id/pdf
    generateInvoicePDF: async (id, orderId) => {
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

// export { apiClient, userApi, productApi, cartApi, reviewApi, productsByCategoryApi, colorsApi, indexApi, adminApi, orderApi, paymentApi, stockApi, carrierApi, addressApi, favoriteApi, orderTrackingApi, couponApi };
export {
    apiClient,
    userApi,
    productApi,
    cartApi,
    reviewApi,
    productsByCategoryApi,
    colorsApi,
    indexApi,
    adminApi,
    orderApi,
    paymentApi,
    stockApi,
    carrierApi,
    addressApi,
    favoriteApi,
    orderTrackingApi,
    couponApi,
    revenueApi,
    invoiceApi,
};

