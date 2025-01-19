import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { productsByCategoryApi } from '../../utils/apiClient';

export const fetchProductsByCategory = createAsyncThunk(
    'productsByCategory/fetchProductsByCategory',
    async ({ categoryId, page, limit, sort, priceRange, colorIds }, { rejectWithValue }) => {
        try {
            const data = await productsByCategoryApi.getProductsByCategory(
                categoryId,
                page,
                limit,
                sort,
                priceRange,
                colorIds
            );
            return data;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);


const productsByCategorySlice = createSlice({
    name: 'productsByCategory',
    initialState: {
        products: [], // Danh sách sản phẩm
        totalPages: 0,
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProductsByCategory.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchProductsByCategory.fulfilled, (state, action) => {
                state.loading = false;
                const { products, totalPages } = action.payload.data;

                if (action.meta.arg.page > 1) {
                    // Nối sản phẩm nếu không phải trang đầu tiên
                    state.products = [...state.products, ...products];
                } else {
                    // Ghi đè sản phẩm nếu là trang đầu tiên
                    state.products = products;
                }

                state.totalPages = totalPages;
            })
            .addCase(fetchProductsByCategory.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || 'Failed to fetch products by category';
            });
    },
});

export default productsByCategorySlice.reducer;
