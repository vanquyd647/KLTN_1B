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
                    <div className="md:w-1/2 flex flex-col items-center">
                        {/* Ảnh chính */}
                        <div className="w-full max-h-96 overflow-hidden">
                            <img
                                src={selectedColor?.ProductColor?.image || 'https://via.placeholder.com/500'}
                                alt={currentProduct.product_name}
                                className="w-full h-full object-contain rounded"
                            />
                        </div>
                        {/* Ảnh thu nhỏ */}
                        <div className="flex gap-2 mt-4 overflow-x-auto">
                            {currentProduct.productColors.map((color) => (
                                <div
                                    key={color.id}
                                    className={`w-16 h-16 rounded overflow-hidden border-2 cursor-pointer ${selectedColor?.id === color.id ? 'ring-2 ring-blue-500 border-blue-500' : 'border-gray-300'
                                        }`}
                                    onClick={() => setSelectedColor(color)}
                                >
                                    <img
                                        src={color.ProductColor?.image || 'https://via.placeholder.com/100'}
                                        alt={color.color}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="hidden md:block border-l border-gray-300"></div>
                    {/* Product Details */}
                    <div className="md:w-1/2">
                        <h1 className="text-2xl font-bold mb-4">{currentProduct.product_name}</h1>
                        {/* Tình trạng còn hàng */}
                        <div className="mb-4">
                            <span className="text-lg font-semibold">TÌNH TRẠNG: </span>
                            <span
                                className={`font-bold ${currentProduct.status === 'available'
                                    ? 'text-green-500'
                                    : currentProduct.status === 'out_of_stock'
                                        ? 'text-red-500'
                                        : 'text-gray-500'
                                    }`}
                            >
                                {currentProduct.status === 'available'
                                    ? 'Còn hàng'
                                    : currentProduct.status === 'out_of_stock'
                                        ? 'Hết hàng'
                                        : 'Ngừng kinh doanh'}
                            </span>
                        </div>
                        <div className="flex items-center space-x-4 mb-4">
                            <span className="text-lg font-semibold">GÍA:</span>
                            <p className="text-red-500 font-bold text-xl">
                                {currentProduct.discount_price.toLocaleString('vi-VN')} VND
                            </p>
                            <p className="text-gray-500 line-through">
                                {currentProduct.price.toLocaleString('vi-VN')} VND
                            </p>
                        </div>
                        {/* Sizes */}
                        <div className="mb-4">
                            <h2 className="text-lg font-semibold mb-2">KÍCH THƯỚC:</h2>
                            <div className="flex gap-2">
                                {currentProduct.productSizes.map((size) => (
                                    <button
                                        key={size.id}
                                        className={`px-8 py-2 border rounded hover:bg-gray-100 transition ${selectedSize?.id === size.id ? 'bg-blue-100' : ''}`}
                                        onClick={() => setSelectedSize(size)}
                                    >
                                        {size.size}
                                    </button>
                                ))}
                            </div>
                        </div>
                        {/* Colors */}
                        <div className="mb-4">
                            <h2 className="text-lg font-semibold mb-2">MÀU SẮC:</h2>
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
                            <h2 className="text-lg font-semibold mb-2">CHỌN SỐ LƯỢNG:</h2>
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
                        {/* Add to Cart and Buy Now Buttons */}
                        <div className="flex flex-wrap gap-4 mt-4 sm:flex-nowrap sm:gap-4 sm:justify-start">
                            {/* Add to Cart Button */}
                            <button
                                className="bg-blue-600 text-white text-xl px-6 py-3 rounded hover:bg-blue-700 transition transform scale-100 hover:scale-105 w-full sm:w-auto"
                                onClick={handleAddToCart}
                            >
                                Thêm vào giỏ
                            </button>
                            {/* Buy Now Button */}
                            <button
                                className="bg-red-600 text-white text-xl px-6 py-3 rounded hover:bg-red-700 transition transform scale-100 hover:scale-105 w-full sm:w-auto"
                                onClick={() => alert('Mua ngay!')}
                            >
                                Mua Ngay
                            </button>
                        </div>

                    </div>
                </div>
                <div>
                    thêm thông tin sản phẩm
                </div>
                {/* Reviews Section */}
                <div className="mt-8">
                    <h2 className="text-2xl font-bold mb-4">Đánh giá sản phẩm</h2>
                    <div className="mb-4">
                        <h3 className="text-lg font-semibold mb-2">ĐIỂM ĐÁNH GIÁ {averageRating || 0}/5 DỰA TRÊN {pagination.totalReviews} ĐÁNH GIÁ</h3>
                        {reviewsError ? (
                            <p className="text-red-500">Failed to fetch reviews.</p>
                        ) : (
                            <div className="flex flex-col gap-4">
                                {reviews?.map((review) => (
                                    <div
                                        key={review.id}
                                        className="border p-4 rounded shadow-sm bg-white hover:shadow-md"
                                    >
                                        {/* Avatar Icon và tên người dùng */}
                                        <div className="flex items-center gap-2 mb-2">
                                            {/* Icon Avatar */}
                                            <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 24 24"
                                                    fill="currentColor"
                                                    className="w-6 h-6 text-gray-500"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M12 2a10 10 0 100 20 10 10 0 000-20zM8.25 9a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM5.95 16.86a7.5 7.5 0 0112.1 0 8.5 8.5 0 10-12.1 0z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </div>
                                            {/* Tên người dùng */}
                                            <p className="font-semibold">{review.user}</p>
                                        </div>
                                        {/* Hiển thị đánh giá bằng ngôi sao */}
                                        <div className="flex items-center mb-2">
                                            {[1, 2, 3, 4, 5].map((rating) => (
                                                <svg
                                                    key={rating}
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 24 24"
                                                    fill={rating <= review.rating ? 'currentColor' : 'none'}
                                                    stroke="currentColor"
                                                    strokeWidth={2}
                                                    className={`w-6 h-6 ${rating <= review.rating
                                                        ? 'text-yellow-500'
                                                        : 'text-gray-300'
                                                        }`}
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M12 3.172l2.828 5.734 6.337.919-4.582 4.46 1.081 6.312L12 17.711 6.336 20.597l1.08-6.312-4.582-4.46 6.337-.919L12 3.172z"
                                                    />
                                                </svg>
                                            ))}
                                        </div>
                                        <p>{review.review_text}</p>
                                    </div>
                                ))}
                                {reviews?.length === 0 && (
                                    <p>No reviews available for this product.</p>
                                )}
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
