import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { userApi } from '../../utils/apiClient.js';

// Async actions
export const registerUser = createAsyncThunk(
    'auth/registerUser',
    async (userData, { rejectWithValue }) => {
        try {
            const response = await userApi.register(userData);
            return response;
        } catch (error) {
            return rejectWithValue(error.response?.data || error.message);
        }
    }
);

export const verifyOtp = createAsyncThunk(
    'auth/verifyOtp',
    async (otpData, { rejectWithValue }) => {
        try {
            const response = await userApi.verifyOtp(otpData);
            return response;
        } catch (error) {
            return rejectWithValue(error.response?.data || error.message);
        }
    }
);

export const loginUser = createAsyncThunk(
    'auth/loginUser',
    async (credentials, { rejectWithValue }) => {
        try {
            const response = await userApi.login(credentials);
            return response;
        } catch (error) {
            return rejectWithValue(error.response?.data || error.message);
        }
    }
);

export const logoutUser = createAsyncThunk(
    'auth/logoutUser',
    async (_, { rejectWithValue }) => {
        try {
            await userApi.logout();
            return true;
        } catch (error) {
            return rejectWithValue(error.response?.data || error.message);
        }
    }
);

export const getUserInfo = createAsyncThunk(
    'auth/getUserInfo',
    async (_, { rejectWithValue }) => {
        try {
            const response = await userApi.getUserProfile(); // Use getUserProfile instead of getUser
            return response;
        } catch (error) {
            return rejectWithValue(error.response?.data || error.message);
        }
    }
);


// Slice
const userSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null,
        token: null,
        loading: false,
        error: null,
    },
    reducers: {
        resetAuthState: (state) => {
            state.user = null;
            state.token = null;
            state.loading = false;
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        // Register
        builder.addCase(registerUser.pending, (state) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(registerUser.fulfilled, (state, action) => {
            state.loading = false;
            state.user = action.payload.user;
        });
        builder.addCase(registerUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        });
        // Verify OTP
        builder.addCase(verifyOtp.pending, (state) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(verifyOtp.fulfilled, (state, action) => {
            state.loading = false;
            state.user = action.payload.user;
        });
        builder.addCase(verifyOtp.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        });

        // Login
        builder.addCase(loginUser.pending, (state) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(loginUser.fulfilled, (state, action) => {
            state.loading = false;
            state.user = action.payload.user;
            state.token = action.payload.accessToken; // Đảm bảo tên thuộc tính đúng
        });
        builder.addCase(loginUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        });

        // Logout
        builder.addCase(logoutUser.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(logoutUser.fulfilled, (state) => {
            state.user = null;
            state.token = null;
            state.loading = false;
        });
        builder.addCase(logoutUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        });

        // Get User Info
        builder.addCase(getUserInfo.pending, (state) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(getUserInfo.fulfilled, (state, action) => {
            state.loading = false;
            state.user = action.payload;
        });
        builder.addCase(getUserInfo.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        });
    },
});

// Export actions và reducer
export const { resetAuthState } = userSlice.actions;
export default userSlice.reducer;
