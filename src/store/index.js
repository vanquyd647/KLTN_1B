import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../store/slices/userSlice';
import productReducer from '../store/slices/productSlice';
import cartReducer from '../store/slices/cartSlice';
import reviewsReducer from '../store/slices/reviewsSlice';  

const store = configureStore({
    reducer: {
        auth: authReducer,
        products: productReducer,
        cart: cartReducer,
        reviews: reviewsReducer,
    },
});

export default store;
