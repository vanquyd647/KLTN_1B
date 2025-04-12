// Các import giữ nguyên
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { getToken, getCartId } from '../../utils/storage';
import { stockApi } from '../../utils/apiClient';
import { fetchProductDetail } from '../../store/slices/productSlice';
import {
    createCartForGuest,
    createCartForUser,
    addItemToCart,
    getCartItems
} from '../../store/slices/cartSlice';
import { fetchReviewsByProduct, fetchAverageRating, createReview } from '../../store/slices/reviewsSlice';
import Layout from '../../components/Layout';
import ProductReviews from '../../components/slugs/ProductReviews';
import ProductDescription from '../../components/slugs/ProductDescription';
import NotFound from '../../components/NotFound';
import { HeartIcon as HeartOutline } from '@heroicons/react/24/outline';
import { HeartIcon as HeartSolid } from '@heroicons/react/24/solid';
import {
    FaFacebook,
    FaPinterest,
    FaTruck,
    FaExchangeAlt,
    FaCheckCircle,
    FaMoneyBillWave,
    FaHeadset,
    FaStore
} from "react-icons/fa";
import {
    BsMessenger,
    BsTwitterX,
    BsLink45Deg
} from "react-icons/bs";
import {
    addToFavorite,
    removeFromFavorite,
    getFavorites,
    selectFavoriteStatuses
} from '../../store/slices/favoriteSlice';
import RecentlyViewed from '@/components/RecentlyViewed';


const RECENTLY_VIEWED_KEY = 'recently_viewed_products';
const MAX_RECENT_PRODUCTS = 10;


export default function Slug() {
    // Redux setup
    const dispatch = useDispatch();
    const router = useRouter();
    const { slug } = router.query;
    const cartId = getCartId();

    // Redux selectors
    const { currentProduct, loading: productLoading, error: productError } = useSelector((state) => state.products);
    const { reviews, averageRating, pagination, reviewsError } = useSelector((state) => state.reviews);
    const { items: cartItems } = useSelector((state) => state.cart);

    // Thêm vào phần Redux selectors
    const favorites = useSelector(selectFavoriteStatuses);
    const [isUpdatingFavorite, setIsUpdatingFavorite] = useState(false);

    // Local state
    const [selectedColor, setSelectedColor] = useState(null);
    const [selectedSize, setSelectedSize] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [reviewText, setReviewText] = useState('');
    const [reviewRating, setReviewRating] = useState(5);
    const [activeTab, setActiveTab] = useState('reviews');
    const [stocks, setStocks] = useState([]);
    const [stocksLoading, setStocksLoading] = useState(true);
    const [stocksError, setStocksError] = useState(null);

    useEffect(() => {
        dispatch(getFavorites({ page: 1, limit: 100 }));
    }, [dispatch]);


    // API Calls
    useEffect(() => {
        if (slug) {
            dispatch(fetchProductDetail(slug));
        }
    }, [dispatch, slug]);

    // Cập nhật useEffect fetch stocks
    useEffect(() => {
        const fetchStocks = async () => {
            setStocksLoading(true);
            try {
                const response = await stockApi.getProductStocks();
                if (response.success) {
                    setStocks(response.data);
                } else {
                    throw new Error('Failed to fetch stocks');
                }
            } catch (error) {
                setStocksError(error.message);
            } finally {
                setStocksLoading(false);
            }
        };
        fetchStocks();
    }, []);

    const handleFavoriteClick = async (e) => {
        e.stopPropagation();

        if (isUpdatingFavorite) return;
        setIsUpdatingFavorite(true);

        try {
            if (favorites[currentProduct.id]) {
                await dispatch(removeFromFavorite(currentProduct.id)).unwrap();
            } else {
                await dispatch(addToFavorite(currentProduct.id)).unwrap();
            }
            await dispatch(getFavorites({ page: 1, limit: 100 }));
        } catch (error) {
            console.error('Error handling favorite:', error);
        } finally {
            setIsUpdatingFavorite(false);
        }
    };


    // Stock Management Functions
    const getStockQuantity = (colorId, sizeId) => {
        const stock = stocks.find(
            stock => stock.product_id === currentProduct.id &&
                stock.color_id === colorId &&
                stock.size_id === sizeId
        );
        return stock ? stock.quantity : 0;
    };

    const getCartItemQuantity = (productId, colorId, sizeId) => {
        const existingItem = cartItems?.find(item =>
            item.product_id === productId &&
            item.color_id === colorId &&
            item.size_id === sizeId
        );
        return existingItem?.quantity || 0;
    };

    const isColorAvailable = (colorId) => {
        return stocks.some(
            stock => stock.product_id === currentProduct.id &&
                stock.color_id === colorId &&
                stock.quantity > 0
        );
    };

    const isSizeAvailable = (sizeId) => {
        return stocks.some(
            stock => stock.product_id === currentProduct.id &&
                stock.color_id === selectedColor?.id &&
                stock.size_id === sizeId &&
                stock.quantity > 0
        );
    };

    const getMaxAvailableQuantity = () => {
        if (!selectedColor || !selectedSize) return 0;

        const stockQuantity = getStockQuantity(selectedColor.id, selectedSize.id);
        const cartQuantity = getCartItemQuantity(
            currentProduct.id,
            selectedColor.id,
            selectedSize.id
        );

        return Math.max(0, stockQuantity - cartQuantity);
    };

    const checkTotalStock = () => {
        if (!stocks.length) return false;

        const totalStock = stocks
            .filter(stock => stock.product_id === currentProduct.id)
            .reduce((sum, stock) => sum + stock.quantity, 0);
        return totalStock > 0;
    };

    // Selection Management
    useEffect(() => {
        if (currentProduct && stocks.length > 0) {
            const firstAvailableColor = currentProduct.productColors.find(color =>
                stocks.some(stock =>
                    stock.product_id === currentProduct.id &&
                    stock.color_id === color.id &&
                    stock.quantity > 0
                )
            );
            setSelectedColor(firstAvailableColor || null);
            setSelectedSize(null);
            setQuantity(1);
        }
    }, [currentProduct, stocks]);

    useEffect(() => {
        if (selectedColor && currentProduct?.productSizes && stocks.length > 0) {
            const firstAvailableSize = currentProduct.productSizes.find(size =>
                stocks.some(stock =>
                    stock.product_id === currentProduct.id &&
                    stock.color_id === selectedColor.id &&
                    stock.size_id === size.id &&
                    stock.quantity > 0
                )
            );
            setSelectedSize(firstAvailableSize || null);
            setQuantity(1);
        }
    }, [selectedColor, currentProduct, stocks]);

    // Cart Functions
    const handleAddToCart = async (showAlert = true) => {
        if (!selectedColor || !selectedSize) {
            alert('Vui lòng chọn màu và kích thước.');
            return;
        }

        const stockQuantity = getStockQuantity(selectedColor.id, selectedSize.id);
        const cartQuantity = getCartItemQuantity(
            currentProduct.id,
            selectedColor.id,
            selectedSize.id
        );

        if (cartQuantity + quantity > stockQuantity) {
            const remainingQuantity = stockQuantity - cartQuantity;
            if (remainingQuantity <= 0) {
                alert('Sản phẩm đã hết hàng hoặc đã có trong giỏ hàng với số lượng tối đa.');
                return;
            }
            alert(`Chỉ còn ${remainingQuantity} sản phẩm có thể thêm vào giỏ hàng.`);
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

            dispatch(getCartItems(activeCartId));
            localStorage.setItem('cartId', activeCartId);

            if (showAlert) {
                alert('Sản phẩm đã được thêm vào giỏ hàng!');
            }
        } catch (error) {
            throw error; // Ném lỗi để xử lý ở hàm gọi
        }
    };

    const handleBuyNow = async () => {
        try {
            await handleAddToCart(false); // Thêm tham số để kiểm soát việc hiển thị alert
            router.push('/cart');
        } catch (error) {
            alert('Có lỗi xảy ra khi thêm vào giỏ hàng!');
        }
    };

    // Quantity Management
    const increaseQuantity = () => {
        const availableQuantity = getMaxAvailableQuantity();
        if (quantity >= availableQuantity) {
            alert(`Chỉ còn ${availableQuantity} sản phẩm có thể thêm vào giỏ hàng.`);
            return;
        }
        setQuantity(prev => prev + 1);
    };

    const decreaseQuantity = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

    // Review Management
    useEffect(() => {
        if (currentProduct?.id) {
            dispatch(fetchReviewsByProduct({ productId: currentProduct.id, page: 1, limit: 5 }));
            dispatch(fetchAverageRating(currentProduct.id));
        }
    }, [dispatch, currentProduct]);

    const addToRecentlyViewed = (product) => {
        try {
            const recentProducts = JSON.parse(localStorage.getItem(RECENTLY_VIEWED_KEY) || '[]');

            // Chuẩn bị thông tin màu sắc
            const colors = product.productColors.map(color => ({
                id: color.id,
                color: color.color,
                hex_code: color.hex_code,
                image: color.ProductColor?.image,
            }));

            // Chuẩn bị thông tin size
            const sizes = product.productSizes.map(size => ({
                id: size.id,
                size: size.size,
            }));

            // Tạo object chứa thông tin đầy đủ của sản phẩm
            const productToSave = {
                id: product.id,
                product_name: product.product_name,
                price: product.price,
                discount_price: product.discount_price,
                description: product.description,
                slug: product.slug,
                productColors: colors,
                productSizes: sizes,
                mainImage: product.productColors[0]?.ProductColor?.image,
                timestamp: new Date().getTime(),
            };

            // Kiểm tra sản phẩm đã tồn tại
            const existingIndex = recentProducts.findIndex(p => p.id === product.id);
            if (existingIndex > -1) {
                recentProducts.splice(existingIndex, 1);
            }

            // Thêm vào đầu danh sách
            recentProducts.unshift(productToSave);

            // Giới hạn số lượng
            if (recentProducts.length > MAX_RECENT_PRODUCTS) {
                recentProducts.pop();
            }

            localStorage.setItem(RECENTLY_VIEWED_KEY, JSON.stringify(recentProducts));
        } catch (error) {
            console.error('Error saving recently viewed product:', error);
        }
    };

    useEffect(() => {
        if (currentProduct) {
            addToRecentlyViewed(currentProduct);
        }
    }, [currentProduct]);


    const handleSubmitReview = async () => {
        if (!reviewText.trim()) {
            alert('Vui lòng nhập nội dung đánh giá');
            return;
        }

        console.log('reviewRating', reviewRating);
        console.log('reviewText', reviewText);

        try {
            await dispatch(
                createReview({
                    productId: currentProduct.id,
                    reviewText: reviewText,
                    rating: reviewRating,
                })
            ).unwrap();

            setReviewText('');
            setReviewRating(5);
            dispatch(fetchReviewsByProduct({ productId: currentProduct.id, page: 1, limit: 5 }));
            dispatch(fetchAverageRating(currentProduct.id));
        } catch (error) {
            alert('Gửi đánh giá thất bại!');
        }
    };

    const handlePageChange = (newPage) => {
        dispatch(
            fetchReviewsByProduct({
                productId: currentProduct.id,
                page: newPage,
                limit: 5,
            })
        );
    };

    // Loading States
    if (productLoading || stocksLoading) return <div>Đang tải...</div>;
    if (productError || !currentProduct) {
        return (
            <Layout>
                <NotFound 
                    message="Không tìm thấy sản phẩm" 
                    description="Sản phẩm bạn đang tìm kiếm không tồn tại hoặc đã bị xóa."
                />
            </Layout>
        );
    }
    if (stocksError) return <div>Lỗi khi tải dữ liệu tồn kho: {stocksError}</div>;
    if (!currentProduct) return <div>Không tìm thấy sản phẩm.</div>;

    return (
        <Layout>
            <div className="container mx-auto px-4 py-6">
                {/* Breadcrumb Navigation */}
                <div className="flex items-center text-sm text-gray-600 mb-6">
                    <Link href="/" className="hover:text-gray-900">
                        Trang chủ
                    </Link>
                    <span className="mx-2">/</span>
                    <span className="text-gray-900">{currentProduct.product_name}</span>
                </div>

                <div className="flex flex-col md:flex-row gap-6">
                    {/* Product Image */}
                    <div className="md:w-1/2 flex flex-col items-center">
                        <div className="relative w-full lg:h-[700px] md:h-[600px] sm:h-[500px]">
                            <img
                                src={
                                    // Nếu có màu được chọn thì hiển thị ảnh của màu đó
                                    selectedColor?.ProductColor?.image ||
                                    // Nếu không có màu được chọn, lấy ảnh của màu đầu tiên trong danh sách
                                    currentProduct.productColors[0]?.ProductColor?.image ||
                                    // Nếu không có ảnh nào thì hiển thị ảnh mặc định
                                    'https://via.placeholder.com/500'
                                }
                                alt={currentProduct.product_name}
                                className="w-full h-full object-contain rounded"
                            />
                        </div>

                        <div className="flex gap-2 mt-4 overflow-x-auto">
                            {currentProduct.productColors.map((color) => {
                                const hasStock = isColorAvailable(color.id);

                                return (
                                    <div
                                        key={color.id}
                                        className={`
                                            w-16 h-16 rounded overflow-hidden border-2 relative
                                            ${selectedColor?.id === color.id ? 'ring-2 ring-gray-500 border-gray-500' : 'border-gray-300'}
                                            ${!hasStock ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
                                        `}
                                        onClick={() => hasStock && setSelectedColor(color)}
                                    >
                                        <img
                                            src={color.ProductColor?.image || 'https://via.placeholder.com/100'}
                                            alt={color.color}
                                            className="w-full h-full object-cover"
                                        />
                                        {!hasStock && (
                                            <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-50">
                                                <span className="text-xs text-red-500 font-bold">Hết hàng</span>
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    <div className="hidden md:block border-l border-gray-300"></div>
                    {/* Product Details */}
                    <div className="md:w-1/2">
                        <h1 className="text-2xl font-bold mb-4 font-sans uppercase tracking-wide">
                            {currentProduct.product_name}
                        </h1>
                        <button
                            onClick={handleFavoriteClick}
                            disabled={isUpdatingFavorite}
                            className={`
                p-2 rounded-full hover:bg-gray-100 transition-colors
                ${isUpdatingFavorite ? 'opacity-50 cursor-not-allowed' : ''}
            `}
                        >
                            {isUpdatingFavorite ? (
                                <div className="w-6 h-6 border-2 border-gray-300 border-t-gray-500 rounded-full animate-spin" />
                            ) : favorites[currentProduct.id] ? (
                                <HeartSolid className="h-6 w-6 text-red-500" />
                            ) : (
                                <HeartOutline className="h-6 w-6 text-gray-400" />
                            )}
                        </button>
                        <div className="mb-4">
                            <span className="text-lg font-semibold">TÌNH TRẠNG: </span>
                            <span className={`font-bold ${checkTotalStock() ? 'text-green-500' : 'text-red-500'}`}>
                                {checkTotalStock() ? 'Còn hàng' : 'Hết hàng'}
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
                            {/* Thêm phần trăm giảm giá */}
                            <span className="bg-red-500 text-white px-2 py-1 rounded-md text-sm">
                                -{Math.round(((currentProduct.price - currentProduct.discount_price) / currentProduct.price) * 100)}%
                            </span>
                        </div>
                        {/* Sizes */}
                        <div className="mb-4">
                            <h2 className="text-lg font-semibold mb-2">KÍCH THƯỚC:</h2>
                            <div className="flex gap-2">
                                {currentProduct.productSizes.map((size) => {
                                    const isAvailable = selectedColor && isSizeAvailable(size.id);
                                    const stockQuantity = selectedColor ? getStockQuantity(selectedColor.id, size.id) : 0;

                                    return (
                                        <button
                                            key={size.id}
                                            className={`
                                                px-8 py-2 border rounded relative
                                                ${selectedSize?.id === size.id ? 'bg-gray-100' : ''}
                                                ${!isAvailable ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-100'}
                                            `}
                                            onClick={() => isAvailable && setSelectedSize(size)}
                                            disabled={!isAvailable}
                                        >
                                            <span>{size.size}</span>
                                        </button>
                                    );
                                })}
                            </div>
                        </div>
                        {/* Colors */}
                        <div className="mb-4">
                            <h2 className="text-lg font-semibold mb-2">MÀU SẮC:</h2>
                            <div className="flex gap-2">
                                {currentProduct.productColors.map((color) => {
                                    const hasStock = isColorAvailable(color.id);

                                    return (
                                        <div
                                            key={color.id}
                                            className={`
                                                w-8 h-8 rounded-full border relative
                                                ${selectedColor?.id === color.id ? 'ring-2 ring-gray-500' : ''}
                                                ${!hasStock ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer hover:shadow-md'}
                                            `}
                                            style={{ backgroundColor: color.hex_code }}
                                            title={`${color.color}${!hasStock ? ' (Hết hàng)' : ''}`}
                                            onClick={() => hasStock && setSelectedColor(color)}
                                        >
                                            {!hasStock && (
                                                <div className="absolute inset-0 flex items-center justify-center">
                                                    <div className="w-full h-0.5 bg-gray-400 transform rotate-45"></div>
                                                </div>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                        {/* Quantity */}
                        <div className="mb-4">
                            <h2 className="text-lg font-semibold mb-2">CHỌN SỐ LƯỢNG:</h2>
                            <div className="flex items-center gap-4">
                                <button
                                    className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                                    onClick={decreaseQuantity}
                                    disabled={!selectedSize || !selectedColor}
                                >
                                    -
                                </button>
                                <input
                                    type="number"
                                    className="w-16 px-2 py-1 border rounded text-center"
                                    min="1"
                                    max={getMaxAvailableQuantity()}
                                    value={quantity}
                                    readOnly
                                />
                                <button
                                    className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                                    onClick={increaseQuantity}
                                    disabled={!selectedSize || !selectedColor}
                                >
                                    +
                                </button>
                                <span className="text-sm text-gray-500">
                                    (Còn {getMaxAvailableQuantity()} sản phẩm)
                                </span>
                            </div>
                        </div>
                        {/* Add to Cart and Buy Now Buttons */}
                        <div className="flex flex-wrap gap-4 mt-4 sm:flex-nowrap sm:gap-4 sm:justify-start">
                            <button
                                className="bg-gray-600 text-white text-xl px-6 py-3 rounded hover:bg-gray-700 transition transform scale-100 hover:scale-105 w-full sm:w-auto"
                                onClick={handleAddToCart}
                                disabled={!selectedSize || !selectedColor || getMaxAvailableQuantity() === 0}
                            >
                                THÊM VÀO GIỎ
                            </button>
                            <button
                                className="bg-red-600 text-white text-xl px-6 py-3 rounded hover:bg-red-700 transition transform scale-100 hover:scale-105 w-full sm:w-auto"
                                onClick={handleBuyNow}
                                disabled={!selectedSize || !selectedColor || getMaxAvailableQuantity() === 0}
                            >
                                MUA NGAY
                            </button>
                        </div>
                        {/* Social Share Buttons */}
                        {/* Social Share Buttons */}
                        <div className="flex items-center gap-2 mb-4 mt-8">
                            <span className="text-gray-600">Chia sẻ:</span>
                            <div className="flex gap-2">
                                {/* Facebook */}
                                <a
                                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-8 h-8 flex items-center justify-center bg-blue-600 rounded-full hover:bg-blue-700 transition-colors"
                                >
                                    <FaFacebook className="w-4 h-4 text-white" />
                                </a>

                                {/* Messenger */}
                                <a
                                    href={`fb-messenger://share/?link=${encodeURIComponent(window.location.href)}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-8 h-8 flex items-center justify-center bg-blue-500 rounded-full hover:bg-blue-600 transition-colors"
                                >
                                    <BsMessenger className="w-4 h-4 text-white" />
                                </a>

                                {/* Twitter/X */}
                                <a
                                    href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-8 h-8 flex items-center justify-center bg-black rounded-full hover:bg-gray-800 transition-colors"
                                >
                                    <BsTwitterX className="w-4 h-4 text-white" />
                                </a>

                                {/* Pinterest */}
                                <a
                                    href={`https://pinterest.com/pin/create/button/?url=${encodeURIComponent(window.location.href)}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-8 h-8 flex items-center justify-center bg-red-600 rounded-full hover:bg-red-700 transition-colors"
                                >
                                    <FaPinterest className="w-4 h-4 text-white" />
                                </a>

                                {/* Copy Link */}
                                <button
                                    onClick={() => {
                                        navigator.clipboard.writeText(window.location.href);
                                        toast.success('Đã sao chép liên kết!');
                                    }}
                                    className="w-8 h-8 flex items-center justify-center bg-gray-500 rounded-full hover:bg-gray-600 transition-colors"
                                >
                                    <BsLink45Deg className="w-4 h-4 text-white" />
                                </button>
                            </div>
                        </div>

                        {/* Store Policies */}
                        <div className="mt-8 border-t pt-6">
                            <h3 className="text-lg font-medium mb-4">Chính sách cửa hàng</h3>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                {[
                                    {
                                        icon: <FaTruck />,
                                        title: "Miễn phí giao hàng",
                                        desc: "Cho đơn hàng từ 200K"
                                    },
                                    {
                                        icon: <FaExchangeAlt />,
                                        title: "Đổi sản phẩm dễ dàng",
                                        desc: "Trong vòng 7 ngày khi còn nguyên tem mác"
                                    },
                                    {
                                        icon: <FaCheckCircle />,
                                        title: "Hàng chính hãng",
                                        desc: "Hàng phân phối chính hãng 100%"
                                    },
                                    {
                                        icon: <FaMoneyBillWave />,
                                        title: "Thanh toán COD",
                                        desc: "Kiểm tra, thanh toán khi nhận hàng"
                                    },
                                    {
                                        icon: <FaHeadset />,
                                        title: "Tổng đài hỗ trợ 24/7",
                                        desc: "0999999999"
                                    },
                                    {
                                        icon: <FaStore />,
                                        title: "Hỗ trợ đổi trả",
                                        desc: "Tại tất cả store"
                                    }
                                ].map((policy, index) => (
                                    <div key={index} className="flex items-start gap-2 p-3 border rounded-lg">
                                        <div className="text-blue-600 text-xl">
                                            {policy.icon}
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-sm">{policy.title}</h4>
                                            <p className="text-gray-600 text-xs">{policy.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                {/* Tabs */}
                <div className="mt-8">
                    <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-2 sm:space-y-0">
                        <button
                            className={`w-full sm:w-auto px-4 py-2 border text-base sm:text-lg font-bold ${activeTab === 'reviews'
                                ? 'bg-white border-gray-600 text-gray-600'
                                : 'bg-white border-gray-300 text-gray-500'
                                } rounded-md`}
                            onClick={() => setActiveTab('reviews')}
                        >
                            ĐÁNH GIÁ
                        </button>
                        <button
                            className={`w-full sm:w-auto px-4 py-2 border text-base sm:text-lg font-bold ${activeTab === 'description'
                                ? 'bg-white border-gray-600 text-gray-600'
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
            <RecentlyViewed />
        </Layout>
    );
}
