import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../store/slices/userSlice';

const store = configureStore({
    reducer: {
        auth: authReducer,
    },
});

export default store;
