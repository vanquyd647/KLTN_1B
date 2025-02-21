import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { createSelector } from '@reduxjs/toolkit';
import { favoriteApi } from '../../utils/apiClient';

// Async Thunks
export const getFavorites = createAsyncThunk(
    'favorites/getFavorites',
    async ({ page = 1, limit = 10 }, { rejectWithValue }) => {
        try {
            const response = await favoriteApi.getFavorites(page, limit);
            return response;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

export const checkFavoriteStatus = createAsyncThunk(
    'favorites/checkStatus',
    async (productId, { rejectWithValue }) => {
        try {
            const response = await favoriteApi.checkFavoriteStatus(productId);
            return { productId, ...response };
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

export const addToFavorite = createAsyncThunk(
    'favorites/add',
    async (productId, { rejectWithValue }) => {
        try {
            const response = await favoriteApi.addToFavorite(productId);
            return { productId, ...response };
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

export const removeFromFavorite = createAsyncThunk(
    'favorites/remove',
    async (productId, { rejectWithValue }) => {
        try {
            const response = await favoriteApi.removeFromFavorite(productId);
            return { productId, ...response };
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

export const transferFavorites = createAsyncThunk(
    'favorites/transfer',
    async (_, { rejectWithValue }) => {
        try {
            const response = await favoriteApi.transferFavorites();
            return response;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

// Initial state
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
    favoriteStatuses: {} // Lưu trạng thái yêu thích của từng sản phẩm
};

export const selectFavoriteCount = (state) => state.favorites.pagination.total || 0;
export const selectFavoriteItems = state => state.favorites.items;

export const selectFavoriteStatuses = createSelector(
    [selectFavoriteItems],
    (items) => items.reduce((acc, item) => {
        acc[item.product_id] = true;
        return acc;
    }, {})
);

// Slice
const favoriteSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        resetFavoriteState: (state) => {
            return initialState;
        }
    },
    extraReducers: (builder) => {
        builder
            // getFavorites
            .addCase(getFavorites.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getFavorites.fulfilled, (state, action) => {
                state.loading = false;
                state.items = action.payload.data;
                state.pagination = action.payload.pagination;
                state.error = null;
            })
            .addCase(getFavorites.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload?.message || 'Có lỗi xảy ra';
            })

            // checkFavoriteStatus
            .addCase(checkFavoriteStatus.fulfilled, (state, action) => {
                state.favoriteStatuses[action.payload.productId] = action.payload.data;
            })

            // addToFavorite
            .addCase(addToFavorite.fulfilled, (state, action) => {
                // Thêm item mới vào danh sách
                state.items.push({
                    product_id: action.payload.productId,
                    // Thêm các thông tin khác nếu cần
                });
                state.favoriteStatuses[action.payload.productId] = true;
                state.pagination.total += 1;
            })

            // removeFromFavorite
            .addCase(removeFromFavorite.fulfilled, (state, action) => {
                // Xóa khỏi items và cập nhật status
                state.items = state.items.filter(item => item.product_id !== action.payload.productId);
                delete state.favoriteStatuses[action.payload.productId]; // Xóa status thay vì set false
                state.pagination.total = Math.max(0, state.pagination.total - 1);
            })

            // transferFavorites
            .addCase(transferFavorites.fulfilled, (state) => {
                // Có thể cập nhật state nếu cần
            });
    }
});

export const { resetFavoriteState } = favoriteSlice.actions;
export default favoriteSlice.reducer;
