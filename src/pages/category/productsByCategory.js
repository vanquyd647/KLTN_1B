import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductsByCategory } from '../../store/slices/productsByCategorySlice';
import { fetchColors } from '../../store/slices/colorsSlice';
import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import Link from 'next/link';
import { HeartIcon as HeartOutline } from '@heroicons/react/24/outline';
import { HeartIcon as HeartSolid } from '@heroicons/react/24/solid';
import { ShoppingBagIcon, ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';
import { getToken, getCartId } from '../../utils/storage';
import { stockApi } from '../../utils/apiClient';
import {
    addToFavorite,
    removeFromFavorite,
    getFavorites,
    selectFavoriteStatuses
} from '../../store/slices/favoriteSlice';
import {
    createCartForGuest,
    createCartForUser,
    addItemToCart,
    getCartItems
} from '../../store/slices/cartSlice';

export default function ProductsByCategory() {
    const dispatch = useDispatch();
    const router = useRouter();

    const { products, totalPages, loading, error, total } = useSelector((state) => state.productsByCategory);
    const { data: colors, loading: colorsLoading, error: colorsError } = useSelector((state) => state.colors);
    const { items: cartItems } = useSelector((state) => state.cart);

    const [currentPage, setCurrentPage] = useState(1);
    const [sort, setSort] = useState('newest');
    const [selectedColors, setSelectedColors] = useState([]);
    const [selectedSizes, setSelectedSizes] = useState([]);
    const [priceRange, setPriceRange] = useState('0-3000000');
    const [priceValue, setPriceValue] = useState(3000000);
    const [expandedCategories, setExpandedCategories] = useState({
        aoNam: false,
        quanNam: false,
        boSuuTap: false
    });

    // Trạng thái hiển thị/ẩn các bộ lọc
    const [showFilters, setShowFilters] = useState({
        category: true,
        price: true,
        color: true,
        size: true
    });

    const pageSize = 10;

    const { categoryId, categoryName } = router.query;
    const favorites = useSelector(selectFavoriteStatuses);

    // State cho modal sản phẩm
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

    // Hàm fetch stocks
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
                sizes: selectedSizes,
            }));
        }
    }, [dispatch, categoryId, currentPage, sort, priceRange, selectedColors, selectedSizes]);

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

    const handlePriceRangeChange = (value) => {
        setPriceValue(value);
        setPriceRange(`0-${value}`);
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

    const handleSizeChange = (size) => {
        setSelectedSizes((prevSizes) =>
            prevSizes.includes(size)
                ? prevSizes.filter((s) => s !== size)
                : [...prevSizes, size]
        );
        resetFilters();
    };

    const toggleCategory = (category) => {
        setExpandedCategories(prev => ({
            ...prev,
            [category]: !prev[category]
        }));
    };

    const toggleFilter = (filterName) => {
        setShowFilters(prev => ({
            ...prev,
            [filterName]: !prev[filterName]
        }));
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

    // Hàm để mở modal
    const openProductModal = (product) => {
        setProductModal(product);
    };

    // Các hàm quản lý stock
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
        <Layout>
            <div className="container mx-auto px-4 py-6">
                {/* Breadcrumb */}
                <div className="mb-4 text-sm mt-4" >
                    <Link href="/" className="hover:text-gray-900">
                        Trang chủ
                    </Link> /
                    <span className="font-medium"> {categoryName}</span>
                </div>

                <div className="flex flex-col md:flex-row gap-6">
                    {/* Bộ lọc bên trái */}
                    <div className="w-full md:w-1/4">
                        <div className="sticky top-6">
                            <h2 className="text-xl font-bold mb-4">Bộ lọc</h2>

                            {/* Danh mục sản phẩm */}
                            <div className="mb-6 border-b pb-4">
                                <div
                                    className="flex justify-between items-center cursor-pointer"
                                    onClick={() => toggleFilter('category')}
                                >
                                    <h3 className="font-semibold mb-2">Danh mục sản phẩm</h3>
                                    {showFilters.category ? <ChevronUpIcon className="h-5 w-5" /> : <ChevronDownIcon className="h-5 w-5" />}
                                </div>

                                {showFilters.category && (
                                    <div className="mt-2">
                                        <ul className="space-y-2">
                                            <li>
                                                <Link
                                                    href="/new-products"
                                                    className="text-gray-600 hover:text-black"
                                                >
                                                    Sản phẩm mới
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    href="/featured-products"
                                                    className="text-gray-600 hover:text-black"
                                                >
                                                    Sản phẩm nổi bật
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    href="/onsale"
                                                    className="text-gray-600 hover:text-black"
                                                >
                                                    Sale
                                                </Link>
                                            </li>
                                            <li>
                                                <div
                                                    className="flex items-center justify-between cursor-pointer"
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        toggleCategory('aoNam');
                                                    }}
                                                >
                                                    <Link
                                                        href="/category/productsByCategory?categoryId=1&categoryName=Áo"
                                                        className="text-gray-600 hover:text-black"
                                                    >
                                                        Áo
                                                    </Link>
                                                    {expandedCategories.aoNam ? <ChevronUpIcon className="h-4 w-4" /> : <ChevronDownIcon className="h-4 w-4" />}
                                                </div>
                                                {expandedCategories.aoNam && (
                                                    <ul className="pl-4 mt-1 space-y-1">
                                                        <li>
                                                            <Link
                                                                href="/category/productsByCategory?categoryId=2&categoryName=Áo%20Thun"
                                                                className="text-gray-500 hover:text-black text-sm"
                                                            >
                                                                Áo thun
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link
                                                                href="/category/productsByCategory?categoryId=4&categoryName=Áo%20Thun%20Nam"
                                                                className="text-gray-500 hover:text-black text-sm"
                                                            >
                                                                Áo thun nam
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link
                                                                href="/category/productsByCategory?categoryId=6&categoryName=Áo%20Thun%20Nữ"
                                                                className="text-gray-500 hover:text-black text-sm"
                                                            >
                                                                Áo thun nữ
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link
                                                                href="/category/productsByCategory?categoryId=10&categoryName=Áo%20Polo"
                                                                className="text-gray-500 hover:text-black text-sm"
                                                            >
                                                                Áo polo
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link
                                                                href="/category/productsByCategory?categoryId=13&categoryName=Áo%20Sơ%20Mi"
                                                                className="text-gray-500 hover:text-black text-sm"
                                                            >
                                                                Áo sơ mi
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link
                                                                href="/category/productsByCategory?categoryId=14&categoryName=Áo%20Sơ%20Mi%20Nam"
                                                                className="text-gray-500 hover:text-black text-sm"
                                                            >
                                                                Áo sơ mi nam
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link
                                                                href="/category/productsByCategory?categoryId=26&categoryName=Áo%20Sơ%20Mi%20Nữ"
                                                                className="text-gray-500 hover:text-black text-sm"
                                                            >
                                                                Áo sơ mi nữ
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link
                                                                href="/category/productsByCategory?categoryId=33&categoryName=Áo%20Nam"
                                                                className="text-gray-500 hover:text-black text-sm"
                                                            >
                                                                Áo Nam
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link
                                                                href="/category/productsByCategory?categoryId=32&categoryName=Áo%20Nữ"
                                                                className="text-gray-500 hover:text-black text-sm"
                                                            >
                                                                Áo Nữ
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                )}
                                            </li>
                                            <li>
                                                <div
                                                    className="flex items-center justify-between cursor-pointer"
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        toggleCategory('quanNam');
                                                    }}
                                                >
                                                    <Link
                                                        href="/category/productsByCategory?categoryId=15&categoryName=Quần"
                                                        className="text-gray-600 hover:text-black"
                                                    >
                                                        Quần
                                                    </Link>
                                                    {expandedCategories.quanNam ? <ChevronUpIcon className="h-4 w-4" /> : <ChevronDownIcon className="h-4 w-4" />}
                                                </div>
                                                {expandedCategories.quanNam && (
                                                    <ul className="pl-4 mt-1 space-y-1">
                                                        <li>
                                                            <Link
                                                                href="/category/productsByCategory?categoryId=18&categoryName=Quần%20Jeans"
                                                                className="text-gray-500 hover:text-black text-sm"
                                                            >
                                                                Quần jeans
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link
                                                                href="/category/productsByCategory?categoryId=20&categoryName=Quần%20Shorts"
                                                                className="text-gray-500 hover:text-black text-sm"
                                                            >
                                                                Quần shorts
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link
                                                                href="/category/productsByCategory?categoryId=28&categoryName=Quần%20Tây"
                                                                className="text-gray-500 hover:text-black text-sm"
                                                            >
                                                                Quần tây
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link
                                                                href="/category/productsByCategory?categoryId=39&categoryName=Quần%20Nam"
                                                                className="text-gray-500 hover:text-black text-sm"
                                                            >
                                                                Quần nam
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link
                                                                href="/category/productsByCategory?categoryId=30&categoryName=Quần%20Nữ"
                                                                className="text-gray-500 hover:text-black text-sm"
                                                            >
                                                                Quần nữ
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                )}
                                            </li>
                                            <li>
                                                <div
                                                    className="flex items-center justify-between cursor-pointer"
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        toggleCategory('boSuuTap');
                                                    }}
                                                >
                                                    <Link
                                                        href="#"
                                                        className="text-gray-600 hover:text-black"
                                                    >
                                                        Bộ sưu tập
                                                    </Link>
                                                    {expandedCategories.boSuuTap ? <ChevronUpIcon className="h-4 w-4" /> : <ChevronDownIcon className="h-4 w-4" />}
                                                </div>
                                                {expandedCategories.boSuuTap && (
                                                    <ul className="pl-4 mt-1 space-y-1">
                                                        <li>
                                                            <Link
                                                                href="/category/productsByCategory?categoryId=8&categoryName=Thời%20Trang%20Nam"
                                                                className="text-gray-500 hover:text-black text-sm"
                                                            >
                                                                Thời trang nam
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link
                                                                href="/category/productsByCategory?categoryId=9&categoryName=Thời%20Trang%20Nữ"
                                                                className="text-gray-500 hover:text-black text-sm"
                                                            >
                                                                Thời trang Nữ
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                )}
                                            </li>
                                            <li>
                                                <Link
                                                    href="#"
                                                    className="text-gray-600 hover:text-black"
                                                >
                                                    Ưu đãi
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                )}
                            </div>

                            {/* Khoảng giá */}
                            <div className="mb-6 border-b pb-4">
                                <div
                                    className="flex justify-between items-center cursor-pointer"
                                    onClick={() => toggleFilter('price')}
                                >
                                    <h3 className="font-semibold mb-2">Khoảng giá</h3>
                                    {showFilters.price ? <ChevronUpIcon className="h-5 w-5" /> : <ChevronDownIcon className="h-5 w-5" />}
                                </div>

                                {showFilters.price && (
                                    <div className="mt-2">
                                        <div className="flex justify-between mb-2 text-sm">
                                            <span>0đ</span>
                                            <span>{new Intl.NumberFormat('vi-VN').format(priceValue)}đ</span>
                                        </div>
                                        <input
                                            type="range"
                                            min="100000"
                                            max="3000000"
                                            step="100000"
                                            className="w-full"
                                            value={priceValue}
                                            onChange={(e) => handlePriceRangeChange(parseInt(e.target.value))}
                                        />
                                    </div>
                                )}
                            </div>

                            {/* Màu sắc */}
                            <div className="mb-6 border-b pb-4">
                                <div
                                    className="flex justify-between items-center cursor-pointer"
                                    onClick={() => toggleFilter('color')}
                                >
                                    <h3 className="font-semibold mb-2">Màu sắc</h3>
                                    {showFilters.color ? <ChevronUpIcon className="h-5 w-5" /> : <ChevronDownIcon className="h-5 w-5" />}
                                </div>

                                {showFilters.color && (
                                    <div className="mt-2 flex flex-wrap gap-3">
                                        {colors && colors.length > 0 && [...new Set(colors.map((color) => color.color))].map((colorName, index) => {
                                            const color = colors.find((c) => c.color === colorName);
                                            return (
                                                <div
                                                    key={index}
                                                    className={`w-8 h-8 rounded-full border cursor-pointer ${selectedColors.includes(color.id) ? 'ring-2 ring-black' : ''
                                                        }`}
                                                    style={{ backgroundColor: color.hex_code }}
                                                    onClick={() => handleColorChange(color.id)}
                                                    title={color.color}
                                                ></div>
                                            );
                                        })}
                                    </div>
                                )}
                            </div>

                            {/* Size */}
                            <div className="mb-6">
                                <div
                                    className="flex justify-between items-center cursor-pointer"
                                    onClick={() => toggleFilter('size')}
                                >
                                    <h3 className="font-semibold mb-2">Size</h3>
                                    {showFilters.size ? <ChevronUpIcon className="h-5 w-5" /> : <ChevronDownIcon className="h-5 w-5" />}
                                </div>

                                {showFilters.size && (
                                    <div className="mt-2">
                                        <div className="grid grid-cols-4 gap-2">
                                            {['S', 'M', 'L', 'XL'].map((size) => (
                                                <button
                                                    key={size}
                                                    className={`border py-1 px-2 text-center hover:bg-gray-100 ${selectedSizes.includes(size) ? 'bg-gray-200' : ''
                                                        }`}
                                                    onClick={() => handleSizeChange(size)}
                                                >
                                                    {size}
                                                </button>
                                            ))}
                                        </div>
                                        {/* <div className="grid grid-cols-4 gap-2 mt-2">
                                            {['36', '37', '38', '39'].map((size) => (
                                                <button
                                                    key={size}
                                                    className={`border py-1 px-2 text-center hover:bg-gray-100 ${selectedSizes.includes(size) ? 'bg-gray-200' : ''
                                                        }`}
                                                    onClick={() => handleSizeChange(size)}
                                                >
                                                    {size}
                                                </button>
                                            ))}
                                        </div> */}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Phần danh sách sản phẩm */}
                    <div className="w-full md:w-3/4">
                        <div className="mb-4">
                            <h1 className="text-xl font-bold mb-2">
                                {categoryName}
                                {/* {products?.length > 0 && <span className="text-sm font-normal ml-2">({products.length} sản phẩm)</span>} */}
                            </h1>
                        </div>

                        {/* Thanh sắp xếp và điều khiển */}
                        <div className="mb-6">
                            <div className="flex flex-wrap items-center justify-between gap-4">
                                <div className="text-sm text-gray-600">
                                    {total || 0} sản phẩm
                                </div>
                                <div className="flex items-center gap-2">
                                    <label htmlFor="sortOrder" className="text-sm">Sắp xếp theo:</label>
                                    <select
                                        id="sortOrder"
                                        className="border px-3 py-1 text-sm rounded"
                                        value={sort}
                                        onChange={handleSortChange}
                                    >
                                        <option value="price_asc">Giá: Tăng dần</option>
                                        <option value="price_desc">Giá: Giảm dần</option>
                                        <option value="name_asc">Tên: A-Z</option>
                                        <option value="name_desc">Tên: Z-A</option>
                                        <option value="newest">Mới nhất</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        {/* Danh sách sản phẩm */}
                        {loading ? (
                            <div className="flex justify-center items-center h-60">
                                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
                            </div>
                        ) : error ? (
                            <div className="text-center text-red-500 p-4">
                                Đã xảy ra lỗi khi tải sản phẩm. Vui lòng thử lại sau.
                            </div>
                        ) : products?.length > 0 ? (
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                                {products.map((product) => (
                                    <div
                                        key={product.id}
                                        className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow relative"
                                    >
                                        <div className="relative overflow-hidden aspect-[3/4]" onClick={() => handleProductClick(product.slug)}>
                                            {product ? (
                                                <img
                                                    src={product.productColors[0]?.ProductColor?.image}
                                                    alt={product.product_name}
                                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                                />
                                            ) : (
                                                <div className="bg-gray-200 w-full h-full flex items-center justify-center">
                                                    <span className="text-gray-400">No image</span>
                                                </div>
                                            )}

                                            {/* Badge giảm giá nếu có */}
                                            {product.discount_price < product.price ? (
                                                <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 text-xs font-semibold">
                                                    -{Math.round(((product.price - product.discount_price) / product.price) * 100)}%
                                                </div>
                                            ) : product.is_new ? (
                                                <div className="absolute top-2 left-2 bg-green-500 text-white px-2 py-1 text-xs font-semibold">
                                                    NEW
                                                </div>
                                            ) : null}
                                        </div>

                                        <div className="p-3">
                                            <div className="flex justify-between items-start">
                                                <h3
                                                    className="text-sm md:text-base font-medium mb-1 line-clamp-1 hover:text-red-500 cursor-pointer"
                                                    onClick={() => handleProductClick(product.slug)}
                                                >
                                                    {product.product_name}
                                                </h3>
                                                {/* Yêu thích */}
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
                                                {/* Hiển thị màu sắc có sẵn */}
                                                <div className="flex gap-1 overflow-hidden">
                                                    {product.productColors && product.productColors.length > 0 ? (
                                                        product.productColors.slice(0, 3).map((color, index) => (
                                                            <div
                                                                key={index}
                                                                className="w-4 h-4 rounded-full border"
                                                                style={{ backgroundColor: color.hex_code }}
                                                                title={color.color}
                                                            ></div>
                                                        ))
                                                    ) : (
                                                        <span className="text-xs text-gray-500">No colors available</span>
                                                    )}
                                                    {product.productColors && product.productColors.length > 3 && (
                                                        <span className="text-xs">+{product.productColors.length - 3}</span>
                                                    )}
                                                </div>
                                            </div>

                                            <div className="flex items-end justify-between">
                                                <div>
                                                    {/* Giá sản phẩm */}
                                                    <div className="flex flex-col">
                                                        <p className="text-red-500 font-bold text-sm md:text-base">
                                                            {product.discount_price.toLocaleString('vi-VN')} đ
                                                        </p>
                                                        <p className="text-gray-500 line-through text-xs">
                                                            {product.price.toLocaleString('vi-VN')} đ
                                                        </p>
                                                    </div>
                                                </div>


                                                {/* Nút thêm vào giỏ */}
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
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="text-center p-8">
                                <p className="text-gray-600">Không tìm thấy sản phẩm phù hợp với bộ lọc đã chọn.</p>
                                <button
                                    className="mt-4 bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded transition"
                                    onClick={() => {
                                        setSelectedColors([]);
                                        setSelectedSizes([]);
                                        setPriceRange('0-3000000');
                                        setPriceValue(3000000);
                                        setSort('newest');
                                    }}
                                >
                                    Xóa bộ lọc
                                </button>
                            </div>
                        )}

                        {/* Phân trang/Load more */}
                        {!loading && products?.length > 0 && currentPage < totalPages && (
                            <div className="flex justify-center mt-8">
                                <button
                                    className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-2 rounded transition flex items-center gap-2"
                                    onClick={handleLoadMore}
                                >
                                    Xem thêm sản phẩm
                                    {/* <span className="ml-1">{`(${products.length}/${totalPages * pageSize})`}</span> */}
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Modal sản phẩm */}
            <ProductModal />
        </Layout>
    );
}
