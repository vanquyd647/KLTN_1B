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

export const forceUpdateFavorites = createAsyncThunk(
    'favorites/forceUpdate',
    async ({ page = 1, limit = 10 }, { dispatch, rejectWithValue }) => {
        try {
            const response = await favoriteApi.getFavorites(page, limit);
            return response;
        } catch (error) {
            console.error('Error fetching favorites:', error);
            return rejectWithValue(error);
        }
    }
);

// Thêm selector mới
export const selectFavoriteState = state => state.favorites;

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
    async (productId, { dispatch, rejectWithValue }) => {
        try {
            const response = await favoriteApi.addToFavorite(productId);
            await dispatch(forceUpdateFavorites({ page: 1, limit: 10 }));
            return { productId, ...response };
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

export const removeFromFavorite = createAsyncThunk(
    'favorites/remove',
    async (productId, { dispatch, rejectWithValue }) => {
        try {
            const response = await favoriteApi.removeFromFavorite(productId);
            await dispatch(forceUpdateFavorites({ page: 1, limit: 10 }));
            return { productId, ...response };
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

export const transferFavorites = createAsyncThunk(
    'favorites/transfer',
    async (_, { dispatch, rejectWithValue }) => {
        try {
            const response = await favoriteApi.transferFavorites();
            await dispatch(forceUpdateFavorites({ page: 1, limit: 10 }));
            return response;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

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

export const selectFavoriteCount = (state) => state.favorites.pagination.total || 0;
export const selectFavoriteItems = state => state.favorites.items;
export const selectFavoriteTotal = (state) => state.favorites.pagination.total || 0;

export const selectFavoriteStatuses = createSelector(
    [selectFavoriteItems],
    (items) => items.reduce((acc, item) => {
        acc[item.product_id] = true;
        return acc;
    }, {})
);

const favoriteSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        resetFavoriteState: () => initialState
    },
    extraReducers: (builder) => {
        builder
            .addCase(getFavorites.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getFavorites.fulfilled, (state, action) => {
                state.loading = false;
                state.items = action.payload.data;
                state.pagination = action.payload.pagination;
                state.error = null;
                // Cập nhật favoriteStatuses
                state.favoriteStatuses = action.payload.data.reduce((acc, item) => {
                    acc[item.product_id] = true;
                    return acc;
                }, {});
            })
            .addCase(getFavorites.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload?.message || 'Có lỗi xảy ra';
            })
            .addCase(forceUpdateFavorites.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(forceUpdateFavorites.fulfilled, (state, action) => {
                state.loading = false;
                state.items = action.payload.data;
                state.pagination = action.payload.pagination;
                state.error = null;
                // Cập nhật favoriteStatuses
                state.favoriteStatuses = action.payload.data.reduce((acc, item) => {
                    acc[item.product_id] = true;
                    return acc;
                }, {});
            })
            .addCase(forceUpdateFavorites.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload?.message || 'Failed to update favorites';
            })
            .addCase(checkFavoriteStatus.fulfilled, (state, action) => {
                state.favoriteStatuses[action.payload.productId] = action.payload.data;
            })
            .addCase(addToFavorite.fulfilled, (state, action) => {
                const newItem = {
                    product_id: action.payload.productId,
                };
                if (!state.items.find(item => item.product_id === newItem.product_id)) {
                    state.items.push(newItem);
                    state.favoriteStatuses[action.payload.productId] = true;
                    state.pagination.total += 1;
                }
            })
            .addCase(removeFromFavorite.fulfilled, (state, action) => {
                state.items = state.items.filter(item => item.product_id !== action.payload.productId);
                delete state.favoriteStatuses[action.payload.productId];
                state.pagination.total = Math.max(0, state.pagination.total - 1);
            });
    }
});

export const { resetFavoriteState } = favoriteSlice.actions;
export default favoriteSlice.reducer;
