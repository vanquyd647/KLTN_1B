import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'; 
import { productApi } from '../../utils/apiClient'; // Import productApi

// **Async Actions**
// Lấy danh sách sản phẩm
export const fetchProducts = createAsyncThunk('products/fetchProducts', async (_, { rejectWithValue }) => {
    try {
        const products = await productApi.getProducts();
        return products;
    } catch (error) {
        return rejectWithValue(error.response?.data || 'Lỗi khi lấy danh sách sản phẩm');
    }
});

// Lấy sản phẩm với phân trang
export const fetchProductsByPagination = createAsyncThunk('products/fetchProductsByPagination', async ({ page, limit }, { rejectWithValue }) => {
    try {
        const paginatedProducts = await productApi.getProductsByPagination(page, limit);
        return paginatedProducts;
    } catch (error) {
        return rejectWithValue(error.response?.data || 'Lỗi khi lấy sản phẩm với phân trang');
    }
});

// Lấy chi tiết sản phẩm
export const fetchProductDetail = createAsyncThunk('products/fetchProductDetail', async (slug, { rejectWithValue }) => {
    try {
        const product = await productApi.getProductDetail(slug);
        return product;
    } catch (error) {
        return rejectWithValue(error.response?.data || 'Lỗi khi lấy chi tiết sản phẩm');
    }
});

// Tạo sản phẩm mới
export const createProduct = createAsyncThunk('products/createProduct', async (productData, { rejectWithValue }) => {
    try {
        const newProduct = await productApi.createProduct(productData);
        return newProduct;
    } catch (error) {
        return rejectWithValue(error.response?.data || 'Lỗi khi tạo sản phẩm');
    }
});

// Cập nhật sản phẩm
export const updateProduct = createAsyncThunk('products/updateProduct', async ({ slug, productData }, { rejectWithValue }) => {
    try {
        const updatedProduct = await productApi.updateProduct(slug, productData);
        return updatedProduct;
    } catch (error) {
        return rejectWithValue(error.response?.data || 'Lỗi khi cập nhật sản phẩm');
    }
});

// Xóa sản phẩm
export const deleteProduct = createAsyncThunk('products/deleteProduct', async (slug, { rejectWithValue }) => {
    try {
        const result = await productApi.deleteProduct(slug);
        return result;
    } catch (error) {
        return rejectWithValue(error.response?.data || 'Lỗi khi xóa sản phẩm');
    }
});

// **Slice**
const productSlice = createSlice({
    name: 'products',
    initialState: {
        items: [], // Danh sách sản phẩm
        currentProduct: null, // Chi tiết sản phẩm hiện tại
        pagination: {
            items: [], // Sản phẩm phân trang
            totalItems: 0,
            totalPages: 0,
            currentPage: 1,
            pageSize: 10,
        },
        loading: false, // Trạng thái tải
        error: null, // Lỗi
    },
    reducers: {
        clearProductState: (state) => {
            state.items = [];
            state.currentProduct = null;
            state.pagination = {
                items: [],
                totalItems: 0,
                totalPages: 0,
                currentPage: 1,
                pageSize: 10,
            };
            state.loading = false;
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        // Fetch products
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.items = action.payload;
                state.loading = false;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.error = action.payload;
                state.loading = false;
            });

        // Fetch products by pagination
        builder
            .addCase(fetchProductsByPagination.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchProductsByPagination.fulfilled, (state, action) => {
                state.pagination = {
                    items: action.payload.products,
                    totalItems: action.payload.pagination.totalItems,
                    totalPages: action.payload.pagination.totalPages,
                    currentPage: action.payload.pagination.currentPage,
                    pageSize: action.payload.pagination.pageSize,
                };
                state.loading = false;
            })
            .addCase(fetchProductsByPagination.rejected, (state, action) => {
                state.error = action.payload;
                state.loading = false;
            });

        // Fetch product detail
        builder
            .addCase(fetchProductDetail.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchProductDetail.fulfilled, (state, action) => {
                state.currentProduct = action.payload;
                state.loading = false;
            })
            .addCase(fetchProductDetail.rejected, (state, action) => {
                state.error = action.payload;
                state.loading = false;
            });

        // Create product
        builder
            .addCase(createProduct.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(createProduct.fulfilled, (state, action) => {
                state.items.push(action.payload);
                state.loading = false;
            })
            .addCase(createProduct.rejected, (state, action) => {
                state.error = action.payload;
                state.loading = false;
            });

        // Update product
        builder
            .addCase(updateProduct.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(updateProduct.fulfilled, (state, action) => {
                const index = state.items.findIndex((item) => item.slug === action.payload.slug);
                if (index !== -1) {
                    state.items[index] = action.payload;
                }
                state.loading = false;
            })
            .addCase(updateProduct.rejected, (state, action) => {
                state.error = action.payload;
                state.loading = false;
            });

        // Delete product
        builder
            .addCase(deleteProduct.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(deleteProduct.fulfilled, (state, action) => {
                state.items = state.items.filter((item) => item.slug !== action.meta.arg);
                state.loading = false;
            })
            .addCase(deleteProduct.rejected, (state, action) => {
                state.error = action.payload;
                state.loading = false;
            });
    },
});

export const { clearProductState } = productSlice.actions;
export default productSlice.reducer;
