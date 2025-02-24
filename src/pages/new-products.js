import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNewProductsByPagination } from '../store/slices/productSlice';
import { fetchColors } from '../store/slices/colorsSlice';
import { useRouter } from 'next/router';
import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar2';
import Banner from '../components/Banner';
import { HeartIcon as HeartOutline } from '@heroicons/react/24/outline';
import { HeartIcon as HeartSolid } from '@heroicons/react/24/solid';
import {
    addToFavorite,
    removeFromFavorite,
    getFavorites,
    selectFavoriteStatuses
} from '../store/slices/favoriteSlice';


export default function NewProducts() {
    const dispatch = useDispatch();
    const router = useRouter();
    const { newProducts, loading, error } = useSelector((state) => state.products);
    const { data: colors, loading: colorsLoading, error: colorsError } = useSelector((state) => state.colors);

    // Thêm vào phần khai báo selectors
    const favorites = useSelector(selectFavoriteStatuses);

    const [currentPage, setCurrentPage] = useState(1);
    const [sort, setSort] = useState('newest');
    const [priceRange, setPriceRange] = useState('');
    const [selectedColors, setSelectedColors] = useState([]);
    const pageSize = 10;

    useEffect(() => {
        dispatch(getFavorites({ page: 1, limit: 100 }));
    }, [dispatch]);

    // Fetch dữ liệu khi thay đổi trang, sắp xếp, khoảng giá hoặc màu sắc
    useEffect(() => {
        console.log('Dispatching fetchNewProductsByPagination with:', {
            page: currentPage,
            limit: pageSize,
            sort,
            priceRange,
            colorIds: selectedColors,
        });

        dispatch(
            fetchNewProductsByPagination({
                page: currentPage,
                limit: pageSize,
                sort,
                priceRange,
                colorIds: selectedColors,
            })
        );
    }, [dispatch, currentPage, sort, priceRange, selectedColors]);

    // Fetch dữ liệu màu sắc khi component mount
    useEffect(() => {
        dispatch(fetchColors());
    }, [dispatch]);

    // Reset về trang đầu tiên khi thay đổi bộ lọc
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


    return (
        <Layout>
            <Banner />
            <div className="mt-6 px-6">
                <div className="hidden md:flex justify-center gap-4">
                    <Sidebar />
                </div>
            </div>
            <div className="w-full px-4 py-6">
                <h1 className="text-2xl font-bold mb-6">Tất cả sản phẩm mới</h1>

                {error && <div className="text-red-500 text-center">{error}</div>}

                {/* Bộ lọc sắp xếp */}
                <div className="mb-6 flex items-center gap-2">
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

                {/* Bộ lọc giá */}
                <div className="mb-6 flex items-center gap-2">
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

                {/* Bộ lọc màu sắc */}
                <div className="mb-6">
                    <h3 className="text-lg font-bold mb-2">Màu sắc</h3>
                    <div className="flex flex-wrap gap-4">
                        {[...new Set(colors.map((color) => color.color))].map((colorName, index) => {
                            const color = colors.find((c) => c.color === colorName);
                            return (
                                <div key={index} className="flex items-center gap-2">
                                    <input
                                        type="checkbox"
                                        id={`color-${color.id}`}
                                        value={color.id}
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
                    {newProducts.items.map((product) => (
                        <div
                            key={product.id}
                            className="bg-white rounded shadow p-4 hover:shadow-lg transition cursor-pointer relative" // Thêm relative vào đây
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
                        </div>
                    ))}
                </div>

                {/* Nút tải thêm */}
                <div className="flex justify-center mt-6">
                    {newProducts.pagination &&
                        currentPage < newProducts.pagination.totalPages && (
                            <button
                                onClick={handleLoadMore}
                                className="px-4 py-2 rounded bg-gray-600 text-white hover:bg-gray-700"
                            >
                                Xem thêm
                            </button>
                        )}
                </div>

                {loading && <div className="text-center mt-4">Đang tải...</div>}
            </div>
        </Layout>
    );
}
