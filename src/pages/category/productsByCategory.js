import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductsByCategory } from '../../store/slices/productsByCategorySlice';
import { fetchColors } from '../../store/slices/colorsSlice';
import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import Sidebar from '../../components/Sidebar2';
import Banner from '../../components/Banner';
import { HeartIcon as HeartOutline } from '@heroicons/react/24/outline';
import { HeartIcon as HeartSolid } from '@heroicons/react/24/solid';
import { ShoppingBagIcon } from '@heroicons/react/24/outline'; // Thêm icon giỏ hàng
import { getToken, getCartId } from '../../utils/storage'; // Thêm import này
import { stockApi } from '../../utils/apiClient'; // Thêm import stockApi
import {
    addToFavorite,
    removeFromFavorite,
    getFavorites,
    selectFavoriteStatuses
} from '../../store/slices/favoriteSlice';
// Thêm import từ cartSlice
import {
    createCartForGuest,
    createCartForUser,
    addItemToCart,
    getCartItems
} from '../../store/slices/cartSlice';


export default function ProductsByCategory() {
    const dispatch = useDispatch();
    const router = useRouter();

    const { products, totalPages, loading, error } = useSelector((state) => state.productsByCategory);
    const { data: colors, loading: colorsLoading, error: colorsError } = useSelector((state) => state.colors);
    const { items: cartItems } = useSelector((state) => state.cart); // Thêm cartItems

    const [currentPage, setCurrentPage] = useState(1);
    const [sort, setSort] = useState('newest');
    const [selectedColors, setSelectedColors] = useState([]);
    const [priceRange, setPriceRange] = useState('');

    const pageSize = 10;

    const { categoryId, categoryName } = router.query;
    const favorites = useSelector(selectFavoriteStatuses);

    // Thêm state mới
    const [stocks, setStocks] = useState([]);
    const [productModal, setProductModal] = useState(null);
    const [selectedColor, setSelectedColor] = useState(null);
    const [selectedSize, setSelectedSize] = useState(null);
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        dispatch(getFavorites({ page: 1, limit: 100 }));

        // Tải thông tin giỏ hàng nếu có
        const cartId = getCartId();
        if (cartId) {
            dispatch(getCartItems(cartId));
        }

        // Fetch stocks
        fetchStocks();
    }, [dispatch]);

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


    // Fetch products when filters change
    useEffect(() => {
        if (categoryId) {
            dispatch(fetchProductsByCategory({
                categoryId,
                page: currentPage,
                limit: pageSize,
                sort,
                priceRange,
                colorIds: selectedColors,
            }));
        }
    }, [dispatch, categoryId, currentPage, sort, priceRange, selectedColors]);

    // Fetch colors when component mounts
    useEffect(() => {
        dispatch(fetchColors());
    }, [dispatch]);

    // Reset to first page when filters change
    const resetFilters = () => {
        setCurrentPage(1);
    };

    const handleSortChange = (e) => {
        setSort(e.target.value);
        resetFilters();
    };

    const handlePriceRangeChange = (e) => {
        setPriceRange(e.target.value);
        resetFilters();
    };

    const handleColorChange = (colorId) => {
        setSelectedColors((prevColors) =>
            prevColors.includes(colorId)
                ? prevColors.filter((id) => id !== colorId)
                : [...prevColors, colorId]
        );
        resetFilters();
    };

    const handleProductClick = (slug) => {
        router.push(`/productdetail/${slug}`);
    };

    const handleLoadMore = () => {
        setCurrentPage((prevPage) => prevPage + 1);
    };

    const handleFavoriteClick = async (e, productId) => {
        e.stopPropagation();
        try {
            if (favorites[productId]) {
                await dispatch(removeFromFavorite(productId)).unwrap();
            } else {
                await dispatch(addToFavorite(productId)).unwrap();
            }
            await dispatch(getFavorites({ page: 1, limit: 100 }));
        } catch (error) {
            console.error('Error handling favorite:', error);
        }
    };

    // Thêm hàm để mở modal
    const openProductModal = (product) => {
        setProductModal(product);
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

    // Modal để chọn màu, kích thước và số lượng
    const ProductModal = () => {
        if (!productModal) return null;

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
        <Layout>
            <Banner />
            <div className="container mx-auto">
                <div className="mt-6 px-6">
                    <div className="hidden md:flex justify-center gap-4">
                        <Sidebar />
                    </div>
                </div>
                <div className="w-full px-4 py-6">
                    <h1 className="text-2xl font-bold mb-6">
                        {categoryName ? `Sản phẩm: ${categoryName}` : 'Sản phẩm'}
                    </h1>

                    {error && <div className="text-red-500 text-center">{error}</div>}

                    {/* Bộ lọc sắp xếp */}
                    <div className="mb-6 flex flex-wrap items-center gap-4">
                        <div className="flex items-center gap-2">
                            <label htmlFor="sortFilter" className="text-gray-700 font-semibold">
                                Sắp xếp theo:
                            </label>
                            <select
                                id="sortFilter"
                                value={sort}
                                onChange={handleSortChange}
                                className="border rounded p-2"
                            >
                                <option value="featured">Sản phẩm nổi bật</option>
                                <option value="price_asc">Giá: Tăng dần</option>
                                <option value="price_desc">Giá: Giảm dần</option>
                                <option value="name_asc">Tên: A-Z</option>
                                <option value="name_desc">Tên: Z-A</option>
                                <option value="oldest">Cũ nhất</option>
                                <option value="newest">Mới nhất</option>
                            </select>
                        </div>

                        <div className="flex items-center gap-2">
                            <label htmlFor="priceRangeFilter" className="text-gray-700 font-semibold">
                                Khoảng giá:
                            </label>
                            <select
                                id="priceRangeFilter"
                                value={priceRange}
                                onChange={handlePriceRangeChange}
                                className="border rounded p-2"
                            >
                                <option value="">Tất cả</option>
                                <option value="0-100000">Dưới 100.000 VND</option>
                                <option value="100000-500000">100.000 - 500.000 VND</option>
                                <option value="500000-1000000">500.000 - 1.000.000 VND</option>
                                <option value="1000000-">Trên 1.000.000 VND</option>
                            </select>
                        </div>
                    </div>

                    {/* Bộ lọc màu sắc */}
                    <div className="mb-6">
                        <h3 className="text-lg font-bold mb-2">Màu sắc</h3>
                        <div className="flex flex-wrap gap-4">
                            {colors && colors.length > 0 && [...new Set(colors.map((color) => color.color))].map((colorName, index) => {
                                const color = colors.find((c) => c.color === colorName);
                                return (
                                    <div key={index} className="flex items-center gap-2">
                                        <input
                                            type="checkbox"
                                            id={`color-${color.id}`}
                                            value={color.id}
                                            checked={selectedColors.includes(color.id)}
                                            onChange={() => handleColorChange(color.id)}
                                            className="cursor-pointer"
                                        />
                                        <label
                                            htmlFor={`color-${color.id}`}
                                            className="flex items-center gap-2 cursor-pointer"
                                        >
                                            <span
                                                className="block w-6 h-6 rounded border border-black"
                                                style={{ backgroundColor: color.hex_code }}
                                            ></span>
                                            {color.color}
                                        </label>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Danh sách sản phẩm */}
                    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
                        {products && products.length > 0 ? (
                            products.map((product) => (
                                <div
                                    key={product.id}
                                    className="bg-white rounded shadow p-4 hover:shadow-lg transition cursor-pointer relative flex flex-col h-full group"
                                    onClick={() => handleProductClick(product.slug)}
                                >
                                    <button
                                        onClick={(e) => handleFavoriteClick(e, product.id)}
                                        className="absolute top-2 right-2 z-10 p-2 rounded-full bg-white shadow-md hover:bg-gray-100"
                                    >
                                        {favorites[product.id] ? (
                                            <HeartSolid className="h-6 w-6 text-red-500" />
                                        ) : (
                                            <HeartOutline className="h-6 w-6 text-gray-400" />
                                        )}
                                    </button>
                                    <img
                                        src={
                                            product.productColors[0]?.ProductColor?.image ||
                                            'https://via.placeholder.com/150'
                                        }
                                        alt={product.product_name}
                                        className="w-full h-60 sm:h-72 md:h-80 object-cover rounded"
                                    />
                                    <h3 className="text-lg font-semibold mt-2">{product.product_name}</h3>
                                    <p className="text-gray-600">{product.description}</p>
                                    <p className="text-red-500 font-bold">
                                        {product.discount_price.toLocaleString('vi-VN')} VND
                                    </p>
                                    <p className="text-gray-500 line-through">
                                        {product.price.toLocaleString('vi-VN')} VND
                                    </p>
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

                                    {/* Thêm nút thêm vào giỏ hàng */}
                                    <div className="mt-auto pt-4 w-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
                            ))
                        ) : (
                            <div className="col-span-full text-center py-8">
                                {loading ? 'Đang tải...' : 'Không tìm thấy sản phẩm nào phù hợp.'}
                            </div>
                        )}
                    </div>

                    {/* Nút tải thêm */}
                    {totalPages > currentPage && (
                        <div className="flex justify-center mt-6">
                            <button
                                onClick={handleLoadMore}
                                className="px-4 py-2 rounded bg-gray-600 text-white hover:bg-gray-700"
                            >
                                Xem thêm
                            </button>
                        </div>
                    )}

                    {loading && <div className="text-center mt-4">Đang tải...</div>}
                </div>
            </div>
            {/* Thêm modal */}
            <ProductModal />
        </Layout>
    );
}
