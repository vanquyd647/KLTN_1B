import { createSlice } from '@reduxjs/toolkit';

const categorySlice = createSlice({
    name: 'categories',
    initialState: {
        currentCategoryId: null,
        selectedCategoryId: null,
    },
    reducers: {
        setCurrentCategoryId(state, action) {
            state.currentCategoryId = action.payload;
        },
        setSelectedCategoryId(state, action) {
            state.selectedCategoryId = action.payload;
        },
    },
});

export const { setCurrentCategoryId, setSelectedCategoryId } = categorySlice.actions;

export default categorySlice.reducer;
