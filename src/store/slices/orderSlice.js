import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { orderApi } from '../../utils/apiClient';

// 📌 Async Thunks

// Create an order
export const createOrder = createAsyncThunk(
    'order/createOrder',
    async (orderData, { rejectWithValue }) => {
        try {
            const response = await orderApi.createOrder(orderData);
            return response;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

// Get order by ID
export const getOrderById = createAsyncThunk(
    'order/getOrderById',
    async (orderId, { rejectWithValue }) => {
        try {
            const response = await orderApi.getOrderById(orderId);
            return response;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

// Update order status
export const updateOrderStatus = createAsyncThunk(
    'order/updateOrderStatus',
    async ({ orderId, status }, { rejectWithValue }) => {
        try {
            const response = await orderApi.updateOrderStatus(orderId, status);
            return response;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

// Complete order
export const completeOrder = createAsyncThunk(
    'order/completeOrder',
    async (orderId, { rejectWithValue }) => {
        try {
            const response = await orderApi.completeOrder(orderId);
            return response;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

// Delete order
export const deleteOrder = createAsyncThunk(
    'order/deleteOrder',
    async (orderId, { rejectWithValue }) => {
        try {
            const response = await orderApi.deleteOrder(orderId);
            return response;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

// Cancel expired orders
export const cancelExpiredOrders = createAsyncThunk(
    'order/cancelExpiredOrders',
    async (_, { rejectWithValue }) => {
        try {
            const response = await orderApi.cancelExpiredOrders();
            return response;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

// 📌 Order Slice
const orderSlice = createSlice({
    name: 'order',
    initialState: {
        orders: [],
        currentOrder: null,
        loading: false,
        error: null,
        message: null
    },
    reducers: {
        clearOrderState: (state) => {
            state.orders = [];
            state.currentOrder = null;
            state.loading = false;
            state.error = null;
            state.message = null;
        }
    },
    extraReducers: (builder) => {
        builder
            // Create Order
            .addCase(createOrder.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(createOrder.fulfilled, (state, action) => {
                state.loading = false;
                state.orders.push(action.payload);
                state.message = 'Order created successfully';
            })
            .addCase(createOrder.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            // Get Order by ID
            .addCase(getOrderById.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getOrderById.fulfilled, (state, action) => {
                state.loading = false;
                state.currentOrder = action.payload;
            })
            .addCase(getOrderById.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            // Update Order Status
            .addCase(updateOrderStatus.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(updateOrderStatus.fulfilled, (state, action) => {
                state.loading = false;
                state.message = 'Order status updated successfully';
            })
            .addCase(updateOrderStatus.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            // Complete Order
            .addCase(completeOrder.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(completeOrder.fulfilled, (state, action) => {
                state.loading = false;
                state.message = 'Order completed successfully';
            })
            .addCase(completeOrder.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            // Delete Order
            .addCase(deleteOrder.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(deleteOrder.fulfilled, (state, action) => {
                state.loading = false;
                state.message = 'Order deleted successfully';
            })
            .addCase(deleteOrder.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            // Cancel Expired Orders
            .addCase(cancelExpiredOrders.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(cancelExpiredOrders.fulfilled, (state, action) => {
                state.loading = false;
                state.message = 'Expired orders cancelled successfully';
            })
            .addCase(cancelExpiredOrders.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    }
});

export const { clearOrderState } = orderSlice.actions;
export default orderSlice.reducer;
