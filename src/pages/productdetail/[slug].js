import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { getToken, getCartId } from '../../utils/storage';
import { fetchProductDetail } from '../../store/slices/productSlice';
import { createCartForGuest, createCartForUser, addItemToCart } from '../../store/slices/cartSlice';
import { fetchReviewsByProduct, fetchAverageRating, createReview } from '../../store/slices/reviewsSlice';

import Layout from '../../components/Layout';
import ProductReviews from '../../components/slugs/ProductReviews';
import ProductDescription from '../../components/slugs/ProductDescription';

export default function Slug() {
    const dispatch = useDispatch();
    const router = useRouter();
    const { slug } = router.query;
    const cartId = getCartId();

    const { currentProduct, loading: productLoading, error: productError } = useSelector((state) => state.products);
    const { reviews, averageRating, pagination, reviewsError } = useSelector((state) => state.reviews);

    const [selectedColor, setSelectedColor] = useState(null);
    const [selectedSize, setSelectedSize] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [reviewText, setReviewText] = useState('');
    const [reviewRating, setReviewRating] = useState(5);
    const [activeTab, setActiveTab] = useState('reviews');

    useEffect(() => {
        if (slug) {
            dispatch(fetchProductDetail(slug));
        }
    }, [dispatch, slug]);

    useEffect(() => {
        if (currentProduct?.id) {
            dispatch(fetchReviewsByProduct({ productId: currentProduct.id, page: 1, limit: 5 }));
            dispatch(fetchAverageRating(currentProduct.id));
        }
    }, [dispatch, currentProduct]);

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
            alert('Vui lòng chọn màu và kích thước.');
            return;
        }

        try {
            let activeCartId = cartId;

            if (!activeCartId) {
                const cartResponse = getToken()
                    ? await dispatch(createCartForUser()).unwrap()
                    : await dispatch(createCartForGuest()).unwrap();
                activeCartId = cartResponse?.id;
            }

            await dispatch(
                addItemToCart({
                    cartId: activeCartId,
                    itemData: {
                        product_id: currentProduct.id,
                        color_id: selectedColor.id,
                        size_id: selectedSize.id,
                        quantity,
                    },
                })
            ).unwrap();

            alert('Sản phẩm đã được thêm vào giỏ hàng!');
        } catch (error) {
            alert('Thêm vào giỏ hàng thất bại!');
        }
    };

    const handleSubmitReview = async () => {
        if (!reviewText.trim()) {
            alert('Đánh giá không được để trống.');
            return;
        }

        try {
            await dispatch(
                createReview({
                    productId: currentProduct.id,
                    rating: reviewRating,
                    reviewText,
                })
            ).unwrap();

            setReviewText('');
            setReviewRating(5);
            dispatch(fetchReviewsByProduct({ productId: currentProduct.id, page: pagination.currentPage, limit: 5 }));
            dispatch(fetchAverageRating(currentProduct.id));
        } catch (error) {
            alert('Gửi đánh giá thất bại!');
        }
    };

    const handlePageChange = (newPage) => {
        if (currentProduct?.id && newPage !== pagination.currentPage) {
            dispatch(fetchReviewsByProduct({ productId: currentProduct.id, page: newPage, limit: 5 }));
        }
    };

    const increaseQuantity = () => setQuantity((prev) => prev + 1);
    const decreaseQuantity = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

    if (productLoading) return <div>Đang tải...</div>;
    if (productError) return <div>Đã xảy ra lỗi: {productError}</div>;
    if (!currentProduct) return <div>Không tìm thấy sản phẩm.</div>;

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
                            <span className="text-lg font-semibold">GIÁ:</span>
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
                                THÊM VÀO GIỎ
                            </button>
                            {/* Buy Now Button */}
                            <button
                                className="bg-red-600 text-white text-xl px-6 py-3 rounded hover:bg-red-700 transition transform scale-100 hover:scale-105 w-full sm:w-auto"
                                onClick={() => alert('Mua ngay!')}
                            >
                                MUA NGAY
                            </button>
                        </div>

                    </div>
                </div>
                {/* Tabs */}
                <div className="mt-8">
                    <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-2 sm:space-y-0">
                        <button
                            className={`w-full sm:w-auto px-4 py-2 border text-base sm:text-lg font-bold ${activeTab === 'reviews'
                                    ? 'bg-white border-blue-600 text-blue-600'
                                    : 'bg-white border-gray-300 text-gray-500'
                                } rounded-md`}
                            onClick={() => setActiveTab('reviews')}
                        >
                            ĐÁNH GIÁ
                        </button>
                        <button
                            className={`w-full sm:w-auto px-4 py-2 border text-base sm:text-lg font-bold ${activeTab === 'description'
                                    ? 'bg-white border-blue-600 text-blue-600'
                                    : 'bg-white border-gray-300 text-gray-500'
                                } rounded-md`}
                            onClick={() => setActiveTab('description')}
                        >
                            MÔ TẢ SẢN PHẨM
                        </button>
                    </div>
                    {/* Tab Content */}
                    <div className="mt-6">
                        {activeTab === 'description' && <ProductDescription description={currentProduct.description} />}
                        {activeTab === 'reviews' && (
                            <ProductReviews
                                reviews={reviews}
                                averageRating={averageRating}
                                pagination={pagination}
                                reviewsError={reviewsError}
                                handlePageChange={handlePageChange}
                                handleSubmitReview={handleSubmitReview}
                                reviewRating={reviewRating}
                                setReviewRating={setReviewRating}
                                reviewText={reviewText}
                                setReviewText={setReviewText}
                                getToken={getToken}
                                router={router}
                            />
                        )}
                    </div>
                </div>
            </div>
        </Layout>
    );
}
