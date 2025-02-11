import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../store/slices/userSlice';
import productReducer from '../store/slices/productSlice';
import cartReducer from '../store/slices/cartSlice';
import reviewsReducer from '../store/slices/reviewsSlice';  
import productsByCategoryReducer from '../store/slices/productsByCategorySlice';
import colorsReducer from '../store/slices/colorsSlice';
import categoryReducer from '../store/slices/categorySlice';
import adminUserReducer from '../store/slices/adminUserSlice';
import orderReducer from '../store/slices/orderSlice';

const store = configureStore({
    reducer: {
        auth: authReducer,
        products: productReducer,
        cart: cartReducer,
        reviews: reviewsReducer,
        productsByCategory: productsByCategoryReducer,
        colors: colorsReducer,
        categories: categoryReducer,
        adminUser: adminUserReducer,
        order: orderReducer,
    },
});

export default store;
