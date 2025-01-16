import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { productApi } from '../../utils/apiClient'; // Import API client

// **Async Actions**

// Fetch all products
export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async (_, { rejectWithValue }) => {
        try {
            const products = await productApi.getProducts();
            return products;
        } catch (error) {
            return rejectWithValue(error.response?.data || 'Failed to fetch products');
        }
    }
);

// Fetch products with pagination
export const fetchProductsByPagination = createAsyncThunk(
    'products/fetchProductsByPagination',
    async ({ page, limit }, { rejectWithValue }) => {
        try {
            const paginatedProducts = await productApi.getProductsByPagination(page, limit);
            return paginatedProducts;
        } catch (error) {
            return rejectWithValue(error.response?.data || 'Failed to fetch products with pagination');
        }
    }
);

// Fetch new products with pagination
export const fetchNewProductsByPagination = createAsyncThunk(
    'products/fetchNewProductsByPagination',
    async ({ page, limit }, { rejectWithValue }) => {
        try {
            const newProducts = await productApi.getNewProductsByPagination(page, limit);
            return newProducts;
        } catch (error) {
            return rejectWithValue(error.response?.data || 'Failed to fetch new products');
        }
    }
);

// Fetch featured products with pagination
export const fetchFeaturedProductsByPagination = createAsyncThunk(
    'products/fetchFeaturedProductsByPagination',
    async ({ page, limit }, { rejectWithValue }) => {
        try {
            const featuredProducts = await productApi.getFeaturedProductsByPagination(page, limit);
            return featuredProducts;
        } catch (error) {
            return rejectWithValue(error.response?.data || 'Failed to fetch featured products');
        }
    }
);

// Fetch product details
export const fetchProductDetail = createAsyncThunk(
    'products/fetchProductDetail',
    async (slug, { rejectWithValue }) => {
        try {
            const product = await productApi.getProductDetail(slug);
            return product;
        } catch (error) {
            return rejectWithValue(error.response?.data || 'Failed to fetch product details');
        }
    }
);

// Create a new product
export const createProduct = createAsyncThunk(
    'products/createProduct',
    async (productData, { rejectWithValue }) => {
        try {
            const newProduct = await productApi.createProduct(productData);
            return newProduct;
        } catch (error) {
            return rejectWithValue(error.response?.data || 'Failed to create product');
        }
    }
);

// Update a product
export const updateProduct = createAsyncThunk(
    'products/updateProduct',
    async ({ slug, productData }, { rejectWithValue }) => {
        try {
            const updatedProduct = await productApi.updateProduct(slug, productData);
            return updatedProduct;
        } catch (error) {
            return rejectWithValue(error.response?.data || 'Failed to update product');
        }
    }
);

// Delete a product
export const deleteProduct = createAsyncThunk(
    'products/deleteProduct',
    async (slug, { rejectWithValue }) => {
        try {
            const result = await productApi.deleteProduct(slug);
            return result;
        } catch (error) {
            return rejectWithValue(error.response?.data || 'Failed to delete product');
        }
    }
);

// **Slice**
const productSlice = createSlice({
    name: 'products',
    initialState: {
        items: [], // All products
        currentProduct: null, // Current product details
        newProducts: {
            items: [], // New products
            pagination: {
                totalItems: 0,
                totalPages: 0,
                currentPage: 1,
                pageSize: 10,
            },
        },
        featuredProducts: {
            items: [], // Featured products
            pagination: {
                totalItems: 0,
                totalPages: 0,
                currentPage: 1,
                pageSize: 10,
            },
        },
        pagination: {
            items: [], // Paginated products
            totalItems: 0,
            totalPages: 0,
            currentPage: 1,
            pageSize: 10,
        },
        loading: false,
        error: null,
    },
    reducers: {
        clearProductState: (state) => {
            state.items = [];
            state.currentProduct = null;
            state.newProducts = {
                items: [],
                pagination: {
                    totalItems: 0,
                    totalPages: 0,
                    currentPage: 1,
                    pageSize: 10,
                },
            };
            state.featuredProducts = {
                items: [],
                pagination: {
                    totalItems: 0,
                    totalPages: 0,
                    currentPage: 1,
                    pageSize: 10,
                },
            };
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
        // Fetch all products
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

        // Fetch products with pagination
        builder
            .addCase(fetchProductsByPagination.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchProductsByPagination.fulfilled, (state, action) => {
                const { products, pagination } = action.payload.data;
                state.pagination = {
                    items: products || [],
                    totalItems: pagination.totalItems || 0,
                    totalPages: pagination.totalPages || 0,
                    currentPage: pagination.currentPage || 1,
                    pageSize: pagination.pageSize || 10,
                };
                state.loading = false;
            })
            .addCase(fetchProductsByPagination.rejected, (state, action) => {
                state.error = action.payload;
                state.loading = false;
            });

        // Fetch new products with pagination
        builder
            .addCase(fetchNewProductsByPagination.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchNewProductsByPagination.fulfilled, (state, action) => {
                const { products, pagination } = action.payload.data;
                state.newProducts.items = products || [];
                state.newProducts.pagination = {
                    totalItems: pagination.totalItems || 0,
                    totalPages: pagination.totalPages || 0,
                    currentPage: pagination.currentPage || 1,
                    pageSize: pagination.pageSize || 10,
                };
                state.loading = false;
            })
            .addCase(fetchNewProductsByPagination.rejected, (state, action) => {
                state.error = action.payload;
                state.loading = false;
            });

        // Fetch featured products with pagination
        builder
            .addCase(fetchFeaturedProductsByPagination.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchFeaturedProductsByPagination.fulfilled, (state, action) => {
                const { products, pagination } = action.payload.data;
                state.featuredProducts.items = products || [];
                state.featuredProducts.pagination = {
                    totalItems: pagination.totalItems || 0,
                    totalPages: pagination.totalPages || 0,
                    currentPage: pagination.currentPage || 1,
                    pageSize: pagination.pageSize || 10,
                };
                state.loading = false;
            })
            .addCase(fetchFeaturedProductsByPagination.rejected, (state, action) => {
                state.error = action.payload;
                state.loading = false;
            });

        // Fetch product details
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
