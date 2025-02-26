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
            console.log('Calling fetchProductsByPagination with:', { page, limit });
            const paginatedProducts = await productApi.getProductsByPagination(page, limit);
            console.log('Response:', paginatedProducts);
            return paginatedProducts;
        } catch (error) {
            return rejectWithValue(error.response?.data || 'Failed to fetch products with pagination');
        }
    }
);


// Fetch new products with pagination
export const fetchNewProductsByPagination = createAsyncThunk(
    'products/fetchNewProductsByPagination',
    async ({ page, limit, sort, priceRange, colorIds }, { rejectWithValue }) => {
        try {
            const newProducts = await productApi.getNewProductsByPagination(page, limit, sort, priceRange, colorIds);
            return newProducts;
        } catch (error) {
            return rejectWithValue(error.response?.data || 'Failed to fetch new products');
        }
    }
);

export const fetchFeaturedProductsByPagination = createAsyncThunk(
    'products/fetchFeaturedProductsByPagination',
    async ({ page, limit, sort, priceRange, colorIds }, { rejectWithValue }) => {
        try {
            const featuredProducts = await productApi.getFeaturedProductsByPagination(page, limit, sort, priceRange, colorIds);
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

export const searchProductsByNameAndColor = createAsyncThunk(
    'products/searchProductsByNameAndColor',
    async ({ keyword, page, limit, sort }, { rejectWithValue }) => {
        try {
            const searchResults = await productApi.searchProductsByNameAndColor(keyword, {
                page,
                limit,
                sort
            });
            return searchResults;
        } catch (error) {
            return rejectWithValue(error.response?.data || 'Không thể tìm kiếm sản phẩm');
        }
    }
);

// **Slice**
const productSlice = createSlice({
    name: 'products',
    initialState: {
        newProducts: {
            items: [], // All new products
            pagination: {
                totalItems: 0,
                totalPages: 0,
                currentPage: 1,
                pageSize: 10,
            },
        },
        visibleNewProducts: [], // New products visible on the index page
        featuredProducts: {
            items: [], // All featured products
            pagination: {
                totalItems: 0,
                totalPages: 0,
                currentPage: 1,
                pageSize: 10,
            },
        },
        searchResults: {
            items: [],
            pagination: {
                totalItems: 0,
                totalPages: 0,
                currentPage: 1,
                pageSize: 10,
            },
        },
        visibleFeaturedProducts: [], // Featured products visible on the index page
        loading: false,
        fetchLoading: false,    // loading cho fetch data
        submitLoading: false,   // loading cho create/update/delete
        error: null,
    },
    reducers: {
        // Set visible products for index page
        setVisibleNewProducts: (state, action) => {
            state.visibleNewProducts = action.payload;
        },
        setVisibleFeaturedProducts: (state, action) => {
            state.visibleFeaturedProducts = action.payload;
        },
        // Clear product state
        clearProductState: (state) => {
            state.newProducts = {
                items: [],
                pagination: {
                    totalItems: 0,
                    totalPages: 0,
                    currentPage: 1,
                    pageSize: 10,
                },
            };
            state.visibleNewProducts = [];
            state.featuredProducts = {
                items: [],
                pagination: {
                    totalItems: 0,
                    totalPages: 0,
                    currentPage: 1,
                    pageSize: 10,
                },
            };
            state.searchResults = {
                items: [],
                pagination: {
                    totalItems: 0,
                    totalPages: 0,
                    currentPage: 1,
                    pageSize: 10,
                },
            };
            state.visibleFeaturedProducts = [];
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
                state.fetchLoading = true;
                state.error = null;
            })
            .addCase(fetchProductsByPagination.fulfilled, (state, action) => {
                const { products, pagination } = action.payload.data;
                state.pagination = {
                    items: products || [], // Lưu danh sách sản phẩm
                    totalItems: pagination.totalItems || 0,
                    totalPages: pagination.totalPages || 0,
                    currentPage: pagination.currentPage || 1,
                    pageSize: pagination.pageSize || 10,
                };
                state.fetchLoading = true;
            })
            .addCase(fetchProductsByPagination.rejected, (state, action) => {
                state.error = action.payload;
                state.fetchLoading = true;
            });

        // Fetch new products with pagination
        builder
            .addCase(fetchNewProductsByPagination.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchNewProductsByPagination.fulfilled, (state, action) => {
                const { products, pagination } = action.payload.data;

                if (pagination.currentPage === 1) {
                    // Thay thế toàn bộ danh sách sản phẩm nếu là trang đầu tiên
                    state.newProducts.items = products;
                } else {
                    // Thêm sản phẩm mới nếu không phải trang đầu tiên
                    const uniqueProducts = products.filter(
                        (product) => !state.newProducts.items.some((existing) => existing.id === product.id)
                    );
                    state.newProducts.items = [...state.newProducts.items, ...uniqueProducts];
                }

                state.newProducts.pagination = {
                    totalItems: pagination.totalItems || 0,
                    totalPages: pagination.totalPages || 0,
                    currentPage: pagination.currentPage || 1,
                    pageSize: pagination.pageSize || 10,
                };

                // Cập nhật sản phẩm hiển thị (có thể không cần thiết nếu không dùng `visibleNewProducts`)
                state.visibleNewProducts = state.newProducts.items.slice(
                    0,
                    state.newProducts.pagination.pageSize
                );

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

                if (pagination.currentPage === 1) {
                    // Thay thế toàn bộ danh sách sản phẩm nếu là trang đầu tiên
                    state.featuredProducts.items = products;
                } else {
                    // Thêm sản phẩm mới nếu không phải trang đầu tiên
                    const uniqueProducts = products.filter(
                        (product) => !state.featuredProducts.items.some((existing) => existing.id === product.id)
                    );
                    state.featuredProducts.items = [...state.featuredProducts.items, ...uniqueProducts];
                }

                state.featuredProducts.pagination = {
                    totalItems: pagination.totalItems || 0,
                    totalPages: pagination.totalPages || 0,
                    currentPage: pagination.currentPage || 1,
                    pageSize: pagination.pageSize || 10,
                };

                // Cập nhật sản phẩm hiển thị (nếu cần)
                state.visibleFeaturedProducts = state.featuredProducts.items.slice(
                    0,
                    state.featuredProducts.pagination.pageSize
                );

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
                state.submitLoading = true;
                state.error = null;
            })
            .addCase(createProduct.fulfilled, (state, action) => {
                // Kiểm tra cấu trúc response và cập nhật state phù hợp
                const newProduct = Array.isArray(action.payload.data)
                    ? action.payload.data[0]
                    : action.payload.data;

                if (state.items) {
                    state.items.push(newProduct);
                } else {
                    state.items = [newProduct];
                }
                state.submitLoading = false;
                state.error = null;
            })
            .addCase(createProduct.rejected, (state, action) => {
                state.error = action.payload;
                state.submitLoading = false;
            });
        // Update product
        builder
            .addCase(updateProduct.pending, (state) => {
                state.submitLoading = true;
                state.error = null;
            })
            .addCase(updateProduct.fulfilled, (state, action) => {
                // Cập nhật sản phẩm trong danh sách
                if (state.pagination && state.pagination.items) {
                    const index = state.pagination.items.findIndex(
                        item => item.slug === action.payload.data.slug
                    );
                    if (index !== -1) {
                        state.pagination.items[index] = action.payload.data;
                    }
                }
                state.submitLoading = false;
                state.error = null;
            })
            .addCase(updateProduct.rejected, (state, action) => {
                state.error = action.payload;
                state.submitLoading = false;
            });
        // Delete product
        builder
            .addCase(deleteProduct.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(deleteProduct.fulfilled, (state, action) => {
                // Kiểm tra và cập nhật pagination.items thay vì items
                if (state.pagination && state.pagination.items) {
                    state.pagination.items = state.pagination.items.filter(
                        (item) => item.slug !== action.meta.arg
                    );
                }
                state.loading = false;
            })
            .addCase(deleteProduct.rejected, (state, action) => {
                state.error = action.payload;
                state.loading = false;
            });
        // Trong phần extraReducers, thêm các cases xử lý search
        builder
            .addCase(searchProductsByNameAndColor.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(searchProductsByNameAndColor.fulfilled, (state, action) => {
                const { products, pagination } = action.payload.data;

                state.searchResults = {
                    items: products,
                    pagination: {
                        totalItems: pagination.totalItems || 0,
                        totalPages: pagination.totalPages || 0,
                        currentPage: pagination.currentPage || 1,
                        pageSize: pagination.pageSize || 10,
                    },
                };
                state.loading = false;
            })
            .addCase(searchProductsByNameAndColor.rejected, (state, action) => {
                state.error = action.payload;
                state.loading = false;
            });

    },
});

export const { setVisibleNewProducts, setVisibleFeaturedProducts, clearProductState } = productSlice.actions;
export default productSlice.reducer;
