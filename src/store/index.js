import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../store/slices/userSlice';
import productReducer from '../store/slices/productSlice';

const store = configureStore({
    reducer: {
        auth: authReducer,
        products: productReducer,
    },
});

export default store;
