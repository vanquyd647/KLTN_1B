import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { cartApi } from '../../utils/apiClient';;

// **Async thunks**

// Tạo giỏ hàng cho khách
export const createCartForGuest = createAsyncThunk(
    'cart/createCartForGuest',
    async (cartData, { rejectWithValue }) => {
        try {
            const response = await cartApi.createCartForGuest(cartData);
            return response.data;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

// Tạo hoặc lấy giỏ hàng cho người dùng đã đăng nhập
export const createCartForUser = createAsyncThunk(
    'cart/createCartForUser',
    async (_, { rejectWithValue }) => {
        try {
            const response = await cartApi.createCartForUser();
            return response.data;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

// Lấy chi tiết giỏ hàng theo ID
export const getCartById = createAsyncThunk(
    'cart/getCartById',
    async (cartId, { rejectWithValue }) => {
        try {
            const response = await cartApi.getCartById(cartId);
            return response.data;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

// Thêm sản phẩm vào giỏ hàng
export const addItemToCart = createAsyncThunk(
    'cart/addItemToCart',
    async ({ cartId, itemData }, { rejectWithValue }) => {
        try {
            const response = await cartApi.addItemToCart(cartId, itemData);
            return response.data;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

    

// Xóa sản phẩm khỏi giỏ hàng
export const removeCartItem = createAsyncThunk(
    'cart/removeCartItem',
    async (itemId, { rejectWithValue }) => {
        try {
            const response = await cartApi.removeCartItem(itemId);
            return response;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

// Lấy tất cả sản phẩm trong giỏ hàng
export const getCartItems = createAsyncThunk(
    'cart/getCartItems',
    async (cartId, { rejectWithValue }) => {
        try {
            const response = await cartApi.getCartItems(cartId);
            return response.data; // Lấy phần `data` từ kết quả API
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

// **Slice**
const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: null,
        items: [],
        loading: false,
        error: null,
    },
    reducers: {
        resetCartState: (state) => {
            state.cart = null;
            state.items = [];
            state.loading = false;
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder
            // Create cart for guest
            .addCase(createCartForGuest.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(createCartForGuest.fulfilled, (state, action) => {
                state.loading = false;
                state.cart = action.payload;
            })
            .addCase(createCartForGuest.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            // Create or retrieve cart for user
            .addCase(createCartForUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(createCartForUser.fulfilled, (state, action) => {
                state.loading = false;
                state.cart = action.payload;
            })
            .addCase(createCartForUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            // Get cart by ID
            .addCase(getCartById.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getCartById.fulfilled, (state, action) => {
                state.loading = false;
                state.cart = action.payload;
            })
            .addCase(getCartById.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            // Add item to cart
            .addCase(addItemToCart.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(addItemToCart.fulfilled, (state, action) => {
                state.loading = false;
                state.items.push(action.payload);
            })
            .addCase(addItemToCart.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            // Remove item from cart
            .addCase(removeCartItem.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(removeCartItem.fulfilled, (state, action) => {
                state.loading = false;
                state.items = state.items.filter((item) => item.id !== action.meta.arg);
            })
            .addCase(removeCartItem.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            // Get cart items
            .addCase(getCartItems.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getCartItems.fulfilled, (state, action) => {
                state.loading = false;
                state.items = action.payload;
            })
            .addCase(getCartItems.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

// Export actions and reducer
export const { resetCartState } = cartSlice.actions;
export default cartSlice.reducer;