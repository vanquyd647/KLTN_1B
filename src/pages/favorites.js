import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Layout from '../components/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { getFavorites, removeFromFavorite } from '../store/slices/favoriteSlice';
import { HeartIcon as HeartSolid } from '@heroicons/react/24/solid';
import Banner from '@/components/Banner';
import Sidebar from '../components/Sidebar2';
import { ShoppingBagIcon } from '@heroicons/react/24/outline'; // Thêm icon giỏ hàng
import { stockApi } from '../utils/apiClient'; // Thêm import stockApi
import { getToken, getCartId } from '../utils/storage'; // Thêm import getToken và getCartId
import {
    createCartForGuest,
    createCartForUser,
    addItemToCart,
    getCartItems
} from '../store/slices/cartSlice'; // Thêm import từ cartSlice

export default function Favorites() {
    const router = useRouter();
    const dispatch = useDispatch();
    const { items, loading, error, pagination } = useSelector((state) => state.favorites);
    const { items: cartItems } = useSelector((state) => state.cart);
    const [currentPage, setCurrentPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    const [allFavorites, setAllFavorites] = useState([]);
    // Thêm states cho chức năng thêm vào giỏ hàng
    const [stocks, setStocks] = useState([]);
    const [productModal, setProductModal] = useState(null);
    const [selectedColor, setSelectedColor] = useState(null);
    const [selectedSize, setSelectedSize] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [stocksLoading, setStocksLoading] = useState(false);

    useEffect(() => {
        loadFavorites();
        loadStocks();

        // Tải thông tin giỏ hàng nếu có
        const cartId = getCartId();
        if (cartId) {
            dispatch(getCartItems(cartId));
        }
    }, []);

    const loadFavorites = async (page = 1) => {
        try {
            const result = await dispatch(getFavorites({
                page: page,
                limit: 10
            })).unwrap();

            if (page === 1) {
                setAllFavorites(result.data);
            } else {
                setAllFavorites(prev => [...prev, ...result.data]);
            }

            // Kiểm tra xem còn sản phẩm để tải không
            setHasMore(result.pagination.currentPage < result.pagination.totalPages);
            setCurrentPage(result.pagination.currentPage);
        } catch (error) {
            console.error('Error loading favorites:', error);
        }
    };

    // Thêm hàm fetch stocks
    const loadStocks = async () => {
        setStocksLoading(true);
        try {
            const response = await stockApi.getProductStocks();
            if (response.success) {
                setStocks(response.data);
            } else {
                console.error('Lỗi khi tải dữ liệu tồn kho');
            }
        } catch (err) {
            console.error('Error fetching stocks:', err);
        } finally {
            setStocksLoading(false);
        }
    };

    const handleRemoveFavorite = async (productId) => {
        try {
            await dispatch(removeFromFavorite(productId)).unwrap();
        } catch (error) {
            console.error('Error removing favorite:', error);
        }
    };

    const handleProductClick = (slug) => {
        router.push(`/productdetail/${slug}`);
    };

    // Thêm các hàm quản lý stock
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

    // Mở modal khi muốn thêm vào giỏ hàng
    const openProductModal = (product) => {
        setProductModal(product);
    };

    // Các hàm xử lý thêm giỏ hàng và mua ngay
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

    const handleLoadMore = () => {
        if (!loading && hasMore) {
            loadFavorites(currentPage + 1);
        }
    };


    // Modal để chọn màu, kích thước và số lượng
    const ProductModal = () => {
        if (!productModal) return null;

        // Tìm đối tượng màu đang được chọn hoặc sử dụng màu đầu tiên nếu chưa chọn màu nào
        const currentColorObject = selectedColor
            ? productModal.productColors.find(c => c.id === selectedColor.id)
            : productModal.productColors[0];

        // Lấy ảnh từ productColor
        const currentImage = currentColorObject?.ProductColor?.image || 'https://via.placeholder.com/150';

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

    if (loading || stocksLoading) {
        return (
            <Layout>
                <div className="container mx-auto px-4 py-8">
                    <div className="text-center">Đang tải...</div>
                </div>
            </Layout>
        );
    }

    if (error) {
        return (
            <Layout>
                <div className="container mx-auto px-4 py-8">
                    <div className="text-center text-red-500">{error}</div>
                </div>
            </Layout>
        );
    }

    return (
        <Layout>
            <Banner title="Sản phẩm yêu thích" />

            <div className="container mx-auto">
                <div className="mt-6 px-6">
                    <div className="hidden md:flex justify-center gap-4">
                        <Sidebar />
                    </div>
                </div>

                <h1 className="text-2xl font-bold mb-6 uppercase flex items-center mt-4 ml-4">
                    <span className="w-4 h-4 bg-red-500 rounded-full mr-3 inline-block animate-blink"></span>
                    Sản phẩm yêu thích ({pagination.total || 0})
                </h1>

                {items.length === 0 ? (
                    <div className="text-center text-gray-500">
                        Bạn chưa có sản phẩm yêu thích nào
                    </div>
                ) : (
                    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8 px-4">
                        {allFavorites.map((item) => {
                            // Kiểm tra item và item.product tồn tại
                            if (!item || !item.product) return null;

                            return (
                                <div
                                    key={item.id}
                                    className="bg-white rounded shadow p-4 hover:shadow-lg transition cursor-pointer relative flex flex-col h-full group"
                                    onClick={() => handleProductClick(item.product.slug)}
                                >
                                    <div className="relative">
                                        <img
                                            src={
                                                item.product.productColors?.[0]?.ProductColor?.image ||
                                                'https://via.placeholder.com/300'
                                            }
                                            alt={item.product.product_name}
                                            className="w-full h-40 object-cover rounded sm:h-60 md:h-72"
                                        />
                                        {item.product.discount_price < item.product.price ? (
                                            <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 text-xs font-semibold">
                                                -{Math.round(((item.product.price - item.product.discount_price) / item.product.price) * 100)}%
                                            </div>
                                        ) : item.product.is_new ? (
                                            <div className="absolute top-2 left-2 bg-green-500 text-white px-2 py-1 text-xs font-semibold">
                                                NEW
                                            </div>
                                        ) : null}
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                handleRemoveFavorite(item.product.id);
                                            }}
                                            className="absolute top-2 right-2 p-2 rounded-full bg-white shadow-md hover:bg-gray-100"
                                        >
                                            <HeartSolid className="h-6 w-6 text-red-500" />
                                        </button>
                                    </div>
                                    <h3 className="text-lg font-semibold mt-2">{item.product.product_name}</h3>

                                    <div className="mt-auto pt-2">
                                        <div className="flex gap-1 overflow-hidden">
                                            {item.product.productColors?.map((color) => (
                                                <div
                                                    key={color.id}
                                                    className="w-4 h-4 rounded-full border border-gray-300"
                                                    style={{ backgroundColor: color.hex_code }}
                                                    title={color.color}
                                                />
                                            ))}
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <div className="flex flex-col">
                                                {item.product.discount_price ? (
                                                    <>
                                                        <p className="text-red-500 font-bold">
                                                            {item.product.discount_price.toLocaleString('vi-VN')} đ
                                                        </p>
                                                        <p className="text-gray-500 line-through">
                                                            {item.product.price.toLocaleString('vi-VN')} đ
                                                        </p>
                                                    </>
                                                ) : (
                                                    <p className="text-gray-700 font-bold">
                                                        {item.product.price.toLocaleString('vi-VN')} đ
                                                    </p>
                                                )}

                                            </div>

                                            <button
                                                className="text-gray-700 hover:text-red-500 transition"
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    openProductModal(item.product);
                                                }}
                                            >
                                                <ShoppingBagIcon className="h-5 w-5" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}

                {/* Nút tải thêm sản phẩm yêu thích */}
                {items.length > 0 && hasMore && (
                    <div className="flex justify-center mt-6 mb-10 px-4">
                        <button
                            onClick={handleLoadMore}
                            className="px-6 py-2.5 rounded-md
                                                bg-white text-gray-600 
                                                border border-gray-600
                                                hover:bg-gray-50 
                                                transition duration-300 
                                                font-medium"
                            disabled={loading}
                        >
                            {loading ? "Đang tải..." : "Xem thêm sản phẩm"}
                        </button>
                    </div>
                )}
            </div>
            {/* Thêm modal */}
            <ProductModal />
        </Layout>
    );
}
