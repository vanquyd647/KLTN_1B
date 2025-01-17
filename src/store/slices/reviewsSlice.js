import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { reviewApi } from '../../utils/apiClient';

// Async thunks for API calls
// Async thunk for fetching reviews with pagination
export const fetchReviewsByProduct = createAsyncThunk(
    'reviews/fetchReviewsByProduct',
    async ({ productId, page , limit }, thunkAPI) => {
        try {
            // API call to fetch paginated reviews
            const response = await reviewApi.getReviewsByProduct(productId, page, limit);

            // Ensure response matches the structure from `getProductReviewsHandler`
            if (response.status === 'success') {
                return {
                    reviews: response.data,
                    meta: response.meta,
                };
            } else {
                throw new Error('Unexpected API response');
            }
        } catch (error) {
            return thunkAPI.rejectWithValue(
                error.response?.data?.message || 'Failed to fetch reviews'
            );
        }
    }
);

export const fetchAverageRating = createAsyncThunk(
    'reviews/fetchAverageRating',
    async (productId, thunkAPI) => {
        try {
            const response = await reviewApi.getAverageRating(productId);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response?.data || 'Failed to fetch average rating');
        }
    }
);

export const createReview = createAsyncThunk(
    'reviews/createReview',
    async (reviewData, thunkAPI) => {
        try {
            const response = await reviewApi.createReview(reviewData);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response?.data || 'Failed to create review');
        }
    }
);

export const deleteReview = createAsyncThunk(
    'reviews/deleteReview',
    async (reviewId, thunkAPI) => {
        try {
            const response = await reviewApi.deleteReview(reviewId);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response?.data || 'Failed to delete review');
        }
    }
);

// Initial state
const initialState = {
    reviews: [],
    averageRating: 0,
    isLoading: false,
    error: null,
    pagination: {
        totalReviews: 0,
        totalPages: 1,
        currentPage: 1,
    },
};

// Reviews slice
const reviewsSlice = createSlice({
    name: 'reviews',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // Handle `fetchReviewsByProduct`
        builder
            .addCase(fetchReviewsByProduct.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchReviewsByProduct.fulfilled, (state, action) => {
                state.isLoading = false;
                state.reviews = action.payload.reviews || [];
                state.pagination = {
                    totalReviews: action.payload.meta?.totalReviews || 0,
                    totalPages: action.payload.meta?.totalPages || 1,
                    currentPage: action.payload.meta?.currentPage || 1,
                };
            })
            .addCase(fetchReviewsByProduct.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });

        // Fetch average rating
        builder
            .addCase(fetchAverageRating.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchAverageRating.fulfilled, (state, action) => {
                state.isLoading = false;
                state.averageRating = action.payload?.averageRating || 0;
            })
            .addCase(fetchAverageRating.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });

        // Create review
        builder
            .addCase(createReview.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(createReview.fulfilled, (state, action) => {
                state.isLoading = false;
                state.reviews.unshift(action.payload);
                state.pagination.totalReviews += 1;
                if (state.reviews.length > 10) {
                    state.reviews.pop(); // Ensure review list doesn't grow beyond the limit
                }
            })
            .addCase(createReview.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });

        // Delete review
        builder
            .addCase(deleteReview.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(deleteReview.fulfilled, (state, action) => {
                state.isLoading = false;
                state.reviews = state.reviews.filter((review) => review.id !== action.meta.arg);
                state.pagination.totalReviews = Math.max(0, state.pagination.totalReviews - 1);
            })
            .addCase(deleteReview.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export default reviewsSlice.reducer;
