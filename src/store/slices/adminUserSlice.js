import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { adminApi } from '../../utils/apiClient';
import { userApi } from '../../utils/apiClient';

// Async Thunk để gọi API login admin
export const loginAdmin = createAsyncThunk(
    'admin/login',
    async (credentials, { rejectWithValue }) => {
        try {
            const response = await adminApi.loginForAdmin(credentials);
            return {
                user: response.user,
                role: response.role, // Vai trò từ API
            };
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

// Async Thunk để gọi API logout
export const logoutAdmin = createAsyncThunk(
    'admin/logout',
    async (_, { rejectWithValue }) => {
        try {
            await userApi.logout(); // Gọi API logout
            return true;
        } catch (error) {
            return rejectWithValue(error.response?.data || error.message);
        }
    }
);

// Slice cho quản lý trạng thái admin
const adminSlice = createSlice({
    name: 'admin',
    initialState: {
        token: null, // Token
        adminInfo: null, // Thông tin admin
        role: null, // Vai trò
        loading: false, // Trạng thái loading
        error: null, // Lỗi
        accessDenied: false, // Theo dõi quyền truy cập
    },
    reducers: {
        resetAdminState: (state) => {
            state.adminInfo = null;
            state.role = null;
            state.token = null;
            state.loading = false;
            state.error = null;
            state.accessDenied = false;
        },
    },
    extraReducers: (builder) => {
        builder
            // Login
            .addCase(loginAdmin.pending, (state) => {
                state.loading = true;
                state.error = null;
                state.accessDenied = false;
            })
            .addCase(loginAdmin.fulfilled, (state, action) => {
                const { role } = action.payload;
                state.loading = false;
                state.adminInfo = action.payload.user;
                state.role = role;
                state.token = action.payload.accessToken;
                state.error = null;
                state.accessDenied = role !== 'admin' && role !== 'superadmin'; // Đánh dấu quyền truy cập
            })
            .addCase(loginAdmin.rejected, (state, action) => {
                state.loading = false;
                state.error =
                    typeof action.payload === 'object' && action.payload.message
                        ? action.payload.message
                        : action.payload || 'Đăng nhập thất bại!';
            })            
            // Logout
            .addCase(logoutAdmin.pending, (state) => {
                state.loading = true;
            })
            .addCase(logoutAdmin.fulfilled, (state) => {
                state.adminInfo = null;
                state.role = null;
                state.token = null;
                state.loading = false;
                state.accessDenied = false;
            })
            .addCase(logoutAdmin.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export const { resetAdminState } = adminSlice.actions;
export default adminSlice.reducer;
