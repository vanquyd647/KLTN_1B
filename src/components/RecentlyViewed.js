// components/RecentlyViewed.js
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { HeartIcon as HeartOutline } from '@heroicons/react/24/outline';
import { HeartIcon as HeartSolid } from '@heroicons/react/24/solid';
import { ShoppingBagIcon } from '@heroicons/react/24/outline';
import { formatDistanceToNow } from 'date-fns';
import { vi } from 'date-fns/locale';
import {
    addToFavorite,
    removeFromFavorite,
    getFavorites,
    selectFavoriteStatuses
} from '../store/slices/favoriteSlice';
import {
    createCartForGuest,
    createCartForUser,
    addItemToCart,
    getCartItems
} from '../store/slices/cartSlice';
import { indexApi, stockApi } from '../utils/apiClient';
import { getToken, getCartId } from '../utils/storage';

const RECENTLY_VIEWED_KEY = 'recently_viewed_products';

export default function RecentlyViewed({
}) {
    const [recentProducts, setRecentProducts] = useState([]);
    const router = useRouter();
    const dispatch = useDispatch();

    const favorites = useSelector(selectFavoriteStatuses);
    const { items: cartItems } = useSelector((state) => state.cart);

    const [loading, setLoading] = useState(true);
    const [stocks, setStocks] = useState([]); // Thêm state stock
    const [productModal, setProductModal] = useState(null); // Modal cho chọn sản phẩm
    const [selectedColor, setSelectedColor] = useState(null);
    const [selectedSize, setSelectedSize] = useState(null);
    const [quantity, setQuantity] = useState(1);

    // Thêm hàm fetch stocks
    const fetchStocks = async () => {
        try {
            const response = await stockApi.getProductStocks();
            if (response.success) {
                setStocks(response.data);
            } else {
                console.error('Lỗi khi tải dữ liệu tồn kho');
            }
        } catch (err) {
            console.error('Error fetching stocks:', err);
        }
    };

    // Cập nhật trạng thái khi chọn sản phẩm
    useEffect(() => {
        if (productModal && stocks.length > 0) {
            const firstAvailableColor = productModal.productColors.find(color =>
                isColorAvailable(productModal.id, color.id)
            );
            setSelectedColor(firstAvailableColor || null);
            setSelectedSize(null);
            setQuantity(1);
        }
    }, [productModal, stocks]);

    useEffect(() => {
        if (selectedColor && productModal?.productSizes && stocks.length > 0) {
            const firstAvailableSize = productModal.productSizes.find(size =>
                isSizeAvailable(productModal.id, selectedColor.id, size.id)
            );
            setSelectedSize(firstAvailableSize || null);
            setQuantity(1);
        }
    }, [selectedColor, productModal, stocks]);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                await Promise.all([
                    fetchStocks(), // Thêm fetch stocks
                    dispatch(getFavorites({ page: 1, limit: 100 })).unwrap()
                ]);

                // Tải thông tin giỏ hàng nếu có
                const cartId = getCartId();
                if (cartId) {
                    dispatch(getCartItems(cartId));
                }
            } catch (error) {
                console.error('Error loading initial data:', error);
                setError('Có lỗi xảy ra khi tải dữ liệu');
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [dispatch]);


    useEffect(() => {
        try {
            const products = JSON.parse(localStorage.getItem(RECENTLY_VIEWED_KEY) || '[]');
            setRecentProducts(products);
        } catch (error) {
            console.error('Error loading recently viewed products:', error);
        }
    }, []);

    const handleProductClick = (slug) => {
        router.push(`/productdetail/${slug}`);
    };

    if (recentProducts.length === 0) {
        return null;
    }

    const handleFavoriteClick = async (e, productId) => {
        e.stopPropagation();
        try {
            if (favorites[productId]) {
                await dispatch(removeFromFavorite(productId)).unwrap();
            } else {
                await dispatch(addToFavorite(productId)).unwrap();
            }
        } catch (error) {
            console.error('Error handling favorite:', error);
        }
    };

    // Thêm các hàm quản lý stock từ [slug].js
    const getStockQuantity = (productId, colorId, sizeId) => {
        const stock = stocks.find(
            stock => stock.product_id === productId &&
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

    const isColorAvailable = (productId, colorId) => {
        return stocks.some(
            stock => stock.product_id === productId &&
                stock.color_id === colorId &&
                stock.quantity > 0
        );
    };

    const isSizeAvailable = (productId, colorId, sizeId) => {
        return stocks.some(
            stock => stock.product_id === productId &&
                stock.color_id === colorId &&
                stock.size_id === sizeId &&
                stock.quantity > 0
        );
    };

    const getMaxAvailableQuantity = (productId) => {
        if (!selectedColor || !selectedSize) return 0;

        const stockQuantity = getStockQuantity(productId, selectedColor.id, selectedSize.id);
        const cartQuantity = getCartItemQuantity(
            productId,
            selectedColor.id,
            selectedSize.id
        );

        return Math.max(0, stockQuantity - cartQuantity);
    };

    const handleAddToCart = async (showAlert = true) => {
        if (!selectedColor || !selectedSize) {
            alert('Vui lòng chọn màu và kích thước.');
            return;
        }

        const stockQuantity = getStockQuantity(productModal.id, selectedColor.id, selectedSize.id);
        const cartQuantity = getCartItemQuantity(
            productModal.id,
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
            let activeCartId = getCartId();

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
                        product_id: productModal.id,
                        color_id: selectedColor.id,
                        size_id: selectedSize.id,
                        quantity,
                    },
                })
            ).unwrap();

            dispatch(getCartItems(activeCartId));
            localStorage.setItem('cartId', activeCartId);

            setProductModal(null); // Đóng modal
            if (showAlert) {
                alert('Sản phẩm đã được thêm vào giỏ hàng!');
            }
        } catch (error) {
            alert('Có lỗi xảy ra khi thêm vào giỏ hàng!');
            console.error(error);
        }
    };

    const handleBuyNow = async () => {
        try {
            await handleAddToCart(false);
            router.push('/cart');
        } catch (error) {
            alert('Có lỗi xảy ra khi thêm vào giỏ hàng!');
        }
    };

    const increaseQuantity = () => {
        const availableQuantity = getMaxAvailableQuantity(productModal?.id);
        if (quantity >= availableQuantity) {
            alert(`Chỉ còn ${availableQuantity} sản phẩm có thể thêm vào giỏ hàng.`);
            return;
        }
        setQuantity(prev => prev + 1);
    };

    const decreaseQuantity = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

    const openProductModal = (product) => {
        setProductModal(product);
        console.log('product', product);
    };

    const ProductModal = () => {
        if (!productModal) return null;

        // Tìm đối tượng màu đang được chọn hoặc sử dụng màu đầu tiên nếu chưa chọn màu nào
        const currentColorObject = selectedColor
            ? productModal.productColors.find(c => c.id === selectedColor.id)
            : productModal.productColors[0];

        // Lấy ảnh từ productColor
        const currentImage = currentColorObject?.image || 'https://via.placeholder.com/150';

        return (
            <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50 p-4">
                <div className="bg-white rounded-lg p-6 max-w-md w-full max-h-[90vh] overflow-y-auto">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-lg font-bold">{productModal.product_name}</h3>
                        <button
                            onClick={() => setProductModal(null)}
                            className="text-gray-500 hover:text-gray-700"
                        >
                            &times;
                        </button>
                    </div>

                    {/* Hiển thị ảnh theo màu được chọn */}
                    <div className="mb-4">
                        <img
                            src={currentImage}
                            alt={`${productModal.product_name} - ${currentColorObject?.color || 'Màu mặc định'}`}
                            className="w-full h-64 object-contain rounded mb-4 border"
                        />
                    </div>

                    <div className="mb-4">
                        <h4 className="font-semibold mb-2">Chọn màu:</h4>
                        <div className="flex flex-wrap gap-2">
                            {productModal.productColors.map((color) => {
                                const hasStock = isColorAvailable(productModal.id, color.id);
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

                    <div className="mb-4">
                        <h4 className="font-semibold mb-2">Chọn kích thước:</h4>
                        <div className="flex flex-wrap gap-2">
                            {productModal.productSizes.map((size) => {
                                const isAvailable = selectedColor && isSizeAvailable(productModal.id, selectedColor.id, size.id);
                                return (
                                    <button
                                        key={size.id}
                                        className={`
                                            px-4 py-1 border rounded relative
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

                    <div className="mb-4">
                        <h4 className="font-semibold mb-2">Số lượng:</h4>
                        <div className="flex items-center gap-2">
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
                                max={getMaxAvailableQuantity(productModal.id)}
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
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mt-4">
                        <button
                            className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700 transition w-full sm:w-auto"
                            onClick={() => handleAddToCart()}
                            disabled={!selectedSize || !selectedColor || getMaxAvailableQuantity(productModal.id) === 0}
                        >
                            Thêm vào giỏ hàng
                        </button>
                        <button
                            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition w-full sm:w-auto"
                            onClick={handleBuyNow}
                            disabled={!selectedSize || !selectedColor || getMaxAvailableQuantity(productModal.id) === 0}
                        >
                            Mua ngay
                        </button>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-2xl font-bold mb-6 text-center">Sản phẩm đã xem gần đây</h2>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {recentProducts.map((product) => (
                    <div
                        key={product.id}
                        className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow relative"
                    >
                        <div className="relative overflow-hidden aspect-[3/4]" onClick={() => handleProductClick(product.slug)}>
                            <img
                                src={product.mainImage || 'https://via.placeholder.com/300'}
                                alt={product.product_name}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />

                            {/* Badge giảm giá */}
                            {product.discount_price < product.price && (
                                <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 text-xs font-semibold">
                                    -{Math.round(((product.price - product.discount_price) / product.price) * 100)}%
                                </div>
                            )}
                        </div>

                        <div className="p-3">
                            <div className="flex justify-between items-start">
                                <h3
                                    className="text-sm md:text-base font-medium mb-1 line-clamp-1 hover:text-red-500 cursor-pointer"
                                    onClick={() => handleProductClick(product.slug)}
                                >
                                    {product.product_name}
                                </h3>
                                <button
                                    className="text-gray-700 hover:text-red-500 transition"
                                    onClick={(e) => handleFavoriteClick(e, product.id)}
                                >
                                    {favorites[product.id] ? (
                                        <HeartSolid className="h-5 w-5 text-red-500" />
                                    ) : (
                                        <HeartOutline className="h-5 w-5" />
                                    )}
                                </button>
                            </div>

                            <div className="flex items-center gap-2 mb-2">
                                <div className="flex gap-1 overflow-hidden">
                                    {product.productColors && product.productColors.length > 0 ? (
                                        product.productColors.slice(0, 3).map((color, index) => (
                                            <div
                                                key={index}
                                                className="w-4 h-4 rounded-full border"
                                                style={{ backgroundColor: color.hex_code }}
                                                title={color.color}
                                            />
                                        ))
                                    ) : (
                                        <span className="text-xs text-gray-500">No colors available</span>
                                    )}
                                    {product.colors && product.colors.length > 3 && (
                                        <span className="text-xs">+{product.colors.length - 3}</span>
                                    )}
                                </div>
                            </div>

                            <div className="flex items-end justify-between">
                                <div>
                                    <div className="flex flex-col">
                                        <p className="text-red-500 font-bold text-sm md:text-base">
                                            {product.discount_price.toLocaleString('vi-VN')} đ
                                        </p>
                                        <p className="text-gray-500 line-through text-xs">
                                            {product.price.toLocaleString('vi-VN')} đ
                                        </p>
                                    </div>
                                </div>
                                <button
                                    className="text-gray-700 hover:text-red-500 transition"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        openProductModal(product);
                                    }}
                                >
                                    <ShoppingBagIcon className="h-5 w-5" />
                                </button>
                            </div>
                            <p className="text-xs text-gray-500 mt-2">
                                Đã xem {formatDistanceToNow(new Date(product.timestamp), {
                                    addSuffix: true,
                                    locale: vi
                                })}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            <ProductModal />
        </div>
    );
}
