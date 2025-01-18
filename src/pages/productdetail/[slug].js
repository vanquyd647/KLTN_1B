import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { getToken, getCartId } from '../../utils/storage';
import { fetchProductDetail } from '../../store/slices/productSlice';
import { createCartForGuest, createCartForUser, addItemToCart } from '../../store/slices/cartSlice';
import { fetchReviewsByProduct, fetchAverageRating, createReview } from '../../store/slices/reviewsSlice';

import Layout from '../../components/Layout';

export default function Slug() {
    const dispatch = useDispatch();
    const router = useRouter();
    const { slug } = router.query;
    const cartId = getCartId();

    const { currentProduct, loading: productLoading, error: productError } = useSelector((state) => state.products);
    const { reviews, averageRating, isLoading: reviewsLoading, error: reviewsError, pagination } = useSelector((state) => state.reviews);

    const [selectedColor, setSelectedColor] = useState(null);
    const [selectedSize, setSelectedSize] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [reviewText, setReviewText] = useState('');
    const [reviewRating, setReviewRating] = useState(5);

    // Fetch product details
    useEffect(() => {
        if (slug) {
            dispatch(fetchProductDetail(slug));
        }
    }, [dispatch, slug]);

    // Fetch reviews and average rating when product details are loaded
    useEffect(() => {
        if (currentProduct?.id) {
            dispatch(fetchReviewsByProduct({ productId: currentProduct.id, page: 1, limit: 5 }));
            dispatch(fetchAverageRating(currentProduct.id));
        }
    }, [dispatch, currentProduct]);

    // Set default color and size
    useEffect(() => {
        if (currentProduct?.productColors?.length > 0) {
            setSelectedColor(currentProduct.productColors[0]);
        }
        if (currentProduct?.productSizes?.length > 0) {
            setSelectedSize(currentProduct.productSizes[0]);
        }
    }, [currentProduct]);

    const handleAddToCart = async () => {
        if (!selectedColor || !selectedSize) {
            alert('Please select a color and size.');
            return;
        }

        try {
            let activeCartId = cartId;

            if (!activeCartId) {
                let cartResponse;
                if (!getToken()) {
                    cartResponse = await dispatch(createCartForGuest()).unwrap();
                } else {
                    cartResponse = await dispatch(createCartForUser()).unwrap();
                }

                if (cartResponse?.id) {
                    activeCartId = cartResponse.id;
                } else {
                    throw new Error('Failed to create cart.');
                }
            }

            const cartItemData = {
                cart_id: activeCartId,
                product_id: currentProduct?.id,
                color_id: selectedColor?.id,
                size_id: selectedSize?.id,
                quantity,
            };

            await dispatch(addItemToCart({ cartId: activeCartId, itemData: cartItemData })).unwrap();
            alert('Item added to cart successfully!');
        } catch (error) {
            console.error('Failed to add item to cart:', error);
            alert(`Failed to add item to cart: ${error.message || 'An error occurred'}`);
        }
    };

    const handleSubmitReview = async () => {
        if (!reviewText.trim()) {
            alert('Review text cannot be empty.');
            return;
        }

        try {
            const reviewData = {
                productId: currentProduct?.id,
                rating: reviewRating,
                reviewText,
            };

            await dispatch(createReview(reviewData)).unwrap();
            // alert('Review submitted successfully!');
            setReviewText('');
            setReviewRating(5);
            dispatch(fetchReviewsByProduct({ productId: currentProduct.id, page: pagination.currentPage, limit: 5 }));
            dispatch(fetchAverageRating(currentProduct.id));
        } catch (error) {
            console.error('Failed to submit review:', error);
            alert(`Failed to submit review: ${error.message || 'An error occurred'}`);
        }
    };

    const handlePageChange = (newPage) => {
        if (currentProduct?.id && newPage !== pagination.currentPage) {
            dispatch(fetchReviewsByProduct({ productId: currentProduct.id, page: newPage, limit: 5 }));
        }
    };

    const increaseQuantity = () => setQuantity((prev) => prev + 1);
    const decreaseQuantity = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

    if (productLoading) {
        return <div className="text-center py-10 text-xl">Loading product details...</div>;
    }

    if (productError) {
        return <div className="text-center text-red-500 py-10">{productError}</div>;
    }

    if (!currentProduct) {
        return <div className="text-center py-10 text-xl">Product not found</div>;
    }

    return (
        <Layout>
            <div className="container mx-auto px-4 py-6">
                <div className="flex flex-col md:flex-row gap-6">
                    {/* Product Image */}
                    <div className="md:w-1/2 max-h-96 overflow-hidden">
                        <img
                            src={selectedColor?.ProductColor?.image || 'https://via.placeholder.com/500'}
                            alt={currentProduct.product_name}
                            className="w-full h-full object-contain rounded"
                        />
                    </div>

                    {/* Product Details */}
                    <div className="md:w-1/2">
                        <h1 className="text-2xl font-bold mb-4">{currentProduct.product_name}</h1>
                        <p className="text-red-500 font-bold text-xl mb-2">
                            {currentProduct.discount_price.toLocaleString('vi-VN')} VND
                        </p>
                        <p className="text-gray-500 line-through mb-4">
                            {currentProduct.price.toLocaleString('vi-VN')} VND
                        </p>

                        {/* Sizes */}
                        <div className="mb-4">
                            <h2 className="text-lg font-semibold mb-2">Available Sizes:</h2>
                            <div className="flex gap-2">
                                {currentProduct.productSizes.map((size) => (
                                    <button
                                        key={size.id}
                                        className={`px-4 py-2 border rounded hover:bg-gray-100 transition ${selectedSize?.id === size.id ? 'bg-blue-100' : ''}`}
                                        onClick={() => setSelectedSize(size)}
                                    >
                                        {size.size}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Colors */}
                        <div className="mb-4">
                            <h2 className="text-lg font-semibold mb-2">Available Colors:</h2>
                            <div className="flex gap-2">
                                {currentProduct.productColors.map((color) => (
                                    <div
                                        key={color.id}
                                        className={`w-8 h-8 rounded-full border cursor-pointer hover:shadow-md ${selectedColor?.id === color.id ? 'ring-2 ring-blue-500' : ''}`}
                                        style={{ backgroundColor: color.hex_code }}
                                        title={color.color}
                                        onClick={() => setSelectedColor(color)}
                                    ></div>
                                ))}
                            </div>
                        </div>

                        {/* Quantity */}
                        <div className="mb-4">
                            <h2 className="text-lg font-semibold mb-2">Quantity:</h2>
                            <div className="flex items-center gap-4">
                                <button
                                    className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                                    onClick={decreaseQuantity}
                                >
                                    -
                                </button>
                                <input
                                    type="number"
                                    className="w-16 px-2 py-1 border rounded text-center"
                                    min="1"
                                    value={quantity}
                                    readOnly
                                />
                                <button
                                    className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                                    onClick={increaseQuantity}
                                >
                                    +
                                </button>
                            </div>
                        </div>

                        {/* Add to Cart */}
                        <button
                            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                            onClick={handleAddToCart}
                        >
                            Add to Cart
                        </button>
                    </div>
                </div>

                <div>
                    thêm thông tin sản phẩm 
                </div>

                {/* Reviews Section */}
                <div className="mt-8">
                    <h2 className="text-2xl font-bold mb-4">Reviews</h2>

                    <div className="mb-4">
                        <h3 className="text-lg font-semibold mb-2">Average Rating: {averageRating || 0}/5</h3>
                        {reviewsError ? (
                            <p className="text-red-500">Failed to fetch reviews.</p>
                        ) : (
                            <div className="flex flex-col gap-4">
                                {reviews?.map((review) => (
                                    <div key={review.id} className="border p-4 rounded shadow-sm bg-white hover:shadow-md">
                                        <p className="font-semibold">User: {review.user}</p>
                                        <p className="text-yellow-500 font-semibold">Rating: {review.rating}/5</p>
                                        <p>{review.review_text}</p>
                                    </div>
                                ))}
                                {reviews?.length === 0 && <p>No reviews available for this product.</p>}
                            </div>
                        )}
                    </div>

                    {/* Pagination Controls */}
                    <div className="flex flex-wrap justify-center items-center gap-2 mt-4">
                        <button
                            className={`px-2 py-1 text-sm border rounded ${pagination.currentPage <= 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-100'}`}
                            disabled={pagination.currentPage <= 1}
                            onClick={() => handlePageChange(1)} // Go to the first page
                        >
                            First
                        </button>
                        <button
                            className={`px-2 py-1 text-sm border rounded ${pagination.currentPage <= 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-100'}`}
                            disabled={pagination.currentPage <= 1}
                            onClick={() => handlePageChange(pagination.currentPage - 1)} // Go to the previous page
                        >
                            Previous
                        </button>

                        {Array.from({ length: pagination.totalPages }, (_, index) => index + 1)
                            .filter((page) => {
                                if (
                                    page === 1 || // Always show the first page
                                    page === pagination.totalPages || // Always show the last page
                                    Math.abs(page - pagination.currentPage) <= 1 // Show one page before and after the current page
                                ) {
                                    return true;
                                }
                                return false;
                            })
                            .map((page, index, pages) => {
                                const isEllipsis =
                                    index > 0 && page - pages[index - 1] > 1; // Add ellipsis if there is a gap between pages
                                return (
                                    <span key={page}>
                                        {isEllipsis && <span className="px-2 text-sm">...</span>}
                                        <button
                                            className={`px-2 py-1 text-sm border rounded ${pagination.currentPage === page ? 'bg-blue-600 text-white' : 'hover:bg-gray-100'}`}
                                            onClick={() => handlePageChange(page)}
                                        >
                                            {page}
                                        </button>
                                    </span>
                                );
                            })}

                        <button
                            className={`px-2 py-1 text-sm border rounded ${pagination.currentPage >= pagination.totalPages ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-100'}`}
                            disabled={pagination.currentPage >= pagination.totalPages}
                            onClick={() => handlePageChange(pagination.currentPage + 1)} // Go to the next page
                        >
                            Next
                        </button>
                        <button
                            className={`px-2 py-1 text-sm border rounded ${pagination.currentPage >= pagination.totalPages ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-100'}`}
                            disabled={pagination.currentPage >= pagination.totalPages}
                            onClick={() => handlePageChange(pagination.totalPages)} // Go to the last page
                        >
                            Last
                        </button>
                    </div>

                    {/* Add a Review Section */}
                    <div className="mt-6">
                        <h3 className="text-lg font-semibold mb-2">Add a Review</h3>

                        {/* Rating Stars */}
                        <div className="flex items-center mb-4">
                            {[1, 2, 3, 4, 5].map((rating) => (
                                <svg
                                    key={rating}
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill={rating <= reviewRating ? "currentColor" : "none"}
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    className={`w-8 h-8 cursor-pointer ${rating <= reviewRating ? "text-yellow-500" : "text-gray-300"}`}
                                    onClick={() => setReviewRating(rating)}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M12 3.172l2.828 5.734 6.337.919-4.582 4.46 1.081 6.312L12 17.711 6.336 20.597l1.08-6.312-4.582-4.46 6.337-.919L12 3.172z"
                                    />
                                </svg>
                            ))}
                        </div>

                        {/* Review Text Area */}
                        <textarea
                            value={reviewText}
                            onChange={(e) => setReviewText(e.target.value)}
                            className="w-full border p-2 rounded mb-4"
                            rows="4"
                            placeholder="Write your review here..."
                        ></textarea>

                        {/* Submit Button */}
                        <button
                            onClick={handleSubmitReview}
                            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                        >
                            Submit Review
                        </button>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
