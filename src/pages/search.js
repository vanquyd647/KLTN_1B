// pages/search.js
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { searchProductsByNameAndColor } from '../store/slices/productSlice';
import Layout from '../components/Layout';
import Banner from '../components/Banner';
import { useSelector } from 'react-redux';
import { HeartIcon as HeartOutline } from '@heroicons/react/24/outline';
import { HeartIcon as HeartSolid } from '@heroicons/react/24/solid';
import { ShoppingBagIcon } from '@heroicons/react/24/outline'; // Thêm icon giỏ hàng
import { addToFavorite, removeFromFavorite, selectFavoriteStatuses } from '../store/slices/favoriteSlice';
import { stockApi } from '../utils/apiClient'; // Thêm import stockApi
import { getToken, getCartId } from '../utils/storage'; // Thêm import getToken và getCartId
import {
    createCartForGuest,
    createCartForUser,
    addItemToCart,
    getCartItems
} from '../store/slices/cartSlice'; // Thêm import từ cartSlice

export default function SearchPage() {
    const router = useRouter();
    const dispatch = useDispatch();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [loadingMore, setLoadingMore] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    const [totalProducts, setTotalProducts] = useState(0);
    const { keyword } = router.query;
    const ITEMS_PER_PAGE = 12;

    // Thêm states cho chức năng thêm vào giỏ hàng
    const [stocks, setStocks] = useState([]);
    const [productModal, setProductModal] = useState(null);
    const [selectedColor, setSelectedColor] = useState(null);
    const [selectedSize, setSelectedSize] = useState(null);
    const [quantity, setQuantity] = useState(1);

    const favoriteStatuses = useSelector(selectFavoriteStatuses);
    const { items: cartItems } = useSelector((state) => state.cart); // Thêm cartItems

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

    useEffect(() => {
        const fetchProducts = async () => {
            if (keyword) {
                setLoading(true);
                try {
                    const result = await dispatch(searchProductsByNameAndColor({
                        keyword,
                        page: 1,
                        limit: ITEMS_PER_PAGE,
                        sort: 'newest'
                    }));

                    if (result.payload?.data) {
                        setProducts(result.payload.data.products);
                        setTotalProducts(result.payload.data.pagination.totalItems);
                        setHasMore(result.payload.data.products.length >= ITEMS_PER_PAGE);
                    }

                    // Fetch stocks khi có dữ liệu sản phẩm
                    await fetchStocks();

                    // Tải thông tin giỏ hàng nếu có
                    const cartId = getCartId();
                    if (cartId) {
                        dispatch(getCartItems(cartId));
                    }
                } catch (error) {
                    console.error('Error fetching products:', error);
                }
                setLoading(false);
            }
        };

        setProducts([]);
        setCurrentPage(1);
        setHasMore(true);
        setTotalProducts(0);
        fetchProducts();
    }, [keyword, dispatch]);

    const loadMore = async () => {
        if (loadingMore) return;

        setLoadingMore(true);
        try {
            const nextPage = currentPage + 1;
            const result = await dispatch(searchProductsByNameAndColor({
                keyword,
                page: nextPage,
                limit: ITEMS_PER_PAGE,
                sort: 'newest'
            }));

            if (result.payload?.data) {
                const newProducts = result.payload.data.products;
                setProducts(prev => [...prev, ...newProducts]);
                setCurrentPage(nextPage);
                setHasMore(newProducts.length >= ITEMS_PER_PAGE);
            }
        } catch (error) {
            console.error('Error loading more products:', error);
        }
        setLoadingMore(false);
    };

    const handleProductClick = (slug) => {
        router.push(`/productdetail/${slug}`);
    };

    const handleFavoriteClick = async (e, productId) => {
        e.stopPropagation();
        try {
            if (favoriteStatuses[productId]) {
                await dispatch(removeFromFavorite(productId)).unwrap();
            } else {
                await dispatch(addToFavorite(productId)).unwrap();
            }
        } catch (error) {
            console.error('Error handling favorite:', error);
        }
    };

    // Thêm các hàm quản lý stock từ [slug].js và index.js
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

    const openProductModal = (product) => {
        setProductModal(product);
    };

    // Component ProductCard và ProductModal
    const ProductCard = ({ product }) => (
        <div
            className="bg-white rounded shadow p-4 hover:shadow-lg transition cursor-pointer relative flex flex-col h-full group"
            onClick={() => handleProductClick(product.slug)}
        >
            <button
                onClick={(e) => handleFavoriteClick(e, product.id)}
                className="absolute top-2 right-2 z-10 p-2 rounded-full bg-white shadow-md hover:bg-gray-100"
            >
                {favoriteStatuses[product.id] ? (
                    <HeartSolid className="h-6 w-6 text-red-500" />
                ) : (
                    <HeartOutline className="h-6 w-6 text-gray-400" />
                )}
            </button>
    
            <img
                src={product.productColors[0]?.ProductColor?.image || 'https://via.placeholder.com/150'}
                alt={product.product_name}
                className="w-full h-40 object-cover rounded sm:h-60 md:h-72"
            />
            <h3 className="text-lg font-semibold mt-2">{product.product_name}</h3>
            <p className="text-gray-600 line-clamp-2">{product.description}</p>
            <div className="mt-2">
                {product.discount_price ? (
                    <>
                        <p className="text-red-500 font-bold">
                            {product.discount_price.toLocaleString('vi-VN')} đ
                        </p>
                        <p className="text-gray-500 line-through">
                            {product.price.toLocaleString('vi-VN')} đ
                        </p>
                    </>
                ) : (
                    <p className="text-gray-700 font-bold">
                        {product.price.toLocaleString('vi-VN')} đ
                    </p>
                )}
            </div>
            <div className="flex gap-1 mt-2">
                {product.productColors.map((color) => (
                    <div
                        key={color.id}
                        className="w-4 h-4 rounded-full border border-gray-300"
                        style={{ backgroundColor: color.hex_code }}
                        title={color.color}
                    />
                ))}
            </div>
            
            {/* Nút "Thêm vào giỏ" chỉ hiện khi hover */}
            <div className="mt-auto pt-4 w-full absolute left-0 bottom-4 px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button 
                    className="bg-gray-600 text-white py-2 px-3 rounded text-sm hover:bg-gray-700 flex items-center w-full justify-center"
                    onClick={(e) => {
                        e.stopPropagation();
                        openProductModal(product);
                    }}
                >
                    <ShoppingBagIcon className="h-4 w-4 mr-1" /> Thêm vào giỏ
                </button>
            </div>
        </div>
    );
    
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

    if (loading) {
        return (
            <Layout>
                <Banner />
                <div className="container mx-auto px-4 py-8">
                    <div className="flex justify-center items-center h-64">
                        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
                    </div>
                </div>
            </Layout>
        );
    }

    return (
        <Layout>
            <Banner />
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-2xl font-bold mb-6">
                    Kết quả tìm kiếm cho &quot;{keyword}&quot; ({totalProducts} sản phẩm)
                </h1>

                {products.length === 0 ? (
                    <div className="text-center py-8">
                        <p className="text-gray-500">Không tìm thấy sản phẩm phù hợp</p>
                    </div>
                ) : (
                    <>
                        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
                            {products.map((product) => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </div>

                        {hasMore && (
                            <div className="flex justify-center mt-8">
                                <button
                                    onClick={loadMore}
                                    disabled={loadingMore}
                                    className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
                                >
                                    {loadingMore ? (
                                        <span className="flex items-center">
                                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Đang tải...
                                        </span>
                                    ) : (
                                        'Tải thêm sản phẩm'
                                    )}
                                </button>
                            </div>
                        )}
                    </>
                )}
            </div>
            
            {/* Thêm modal */}
            <ProductModal />
        </Layout>
    );
}
