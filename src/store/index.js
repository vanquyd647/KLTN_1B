import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../store/slices/userSlice';
import productReducer from '../store/slices/productSlice';
import cartReducer from '../store/slices/cartSlice';
import reviewsReducer from '../store/slices/reviewsSlice';  
import productsByCategoryReducer from '../store/slices/productsByCategorySlice';
import colorsReducer from '../store/slices/colorsSlice';

const store = configureStore({
    reducer: {
        auth: authReducer,
        products: productReducer,
        cart: cartReducer,
        reviews: reviewsReducer,
        productsByCategory: productsByCategoryReducer,
        colors: colorsReducer,
    },
});

export default store;
