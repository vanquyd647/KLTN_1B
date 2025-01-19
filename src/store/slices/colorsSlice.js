import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { colorsApi } from '../../utils/apiClient'; // Adjust the path based on your project structure

// Async thunk to fetch colors
export const fetchColors = createAsyncThunk('colors/fetchColors', async (_, { rejectWithValue }) => {
    try {
        const colors = await colorsApi.getColors();
        return colors;
    } catch (error) {
        return rejectWithValue(error);
    }
});

// Colors slice
const colorsSlice = createSlice({
    name: 'colors',
    initialState: {
        data: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchColors.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchColors.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchColors.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || 'Failed to fetch colors.';
            });
    },
});

export default colorsSlice.reducer;
