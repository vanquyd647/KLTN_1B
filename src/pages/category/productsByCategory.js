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
import {
    addToFavorite,
    removeFromFavorite,
    getFavorites,
    selectFavoriteStatuses
} from '../../store/slices/favoriteSlice';


export default function ProductsByCategory() {
    const dispatch = useDispatch();
    const router = useRouter();

    const { products, totalPages, loading, error } = useSelector((state) => state.productsByCategory);
    const { data: colors, loading: colorsLoading, error: colorsError } = useSelector((state) => state.colors);

    const [currentPage, setCurrentPage] = useState(1);
    const [sort, setSort] = useState('newest');
    const [selectedColors, setSelectedColors] = useState([]);
    const [priceRange, setPriceRange] = useState('');

    const pageSize = 10;

    const { categoryId, categoryName } = router.query;
    const favorites = useSelector(selectFavoriteStatuses);

    useEffect(() => {
        dispatch(getFavorites({ page: 1, limit: 100 }));
    }, [dispatch]);


    // Fetch products when filters or pagination change
    useEffect(() => {
        if (categoryId) {
            dispatch(
                fetchProductsByCategory({
                    categoryId,
                    page: currentPage,
                    limit: pageSize,
                    sort,
                    colorIds: selectedColors.join(','), // Pass selected colors
                    priceRange, // Pass price range
                })
            );
        }
    }, [dispatch, categoryId, currentPage, sort, selectedColors, priceRange]);

    // Fetch colors on component mount
    useEffect(() => {
        dispatch(fetchColors());
    }, [dispatch]);

    const handleColorChange = (colorId) => {
        setSelectedColors((prevColors) =>
            prevColors.includes(colorId)
                ? prevColors.filter((id) => id !== colorId)
                : [...prevColors, colorId]
        );
        setCurrentPage(1); // Reset to the first page when filters change
    };

    const handlePriceRangeChange = (e) => {
        setPriceRange(e.target.value);
        setCurrentPage(1); // Reset to the first page when filters change
    };

    const handleSortChange = (e) => {
        setSort(e.target.value);
        setCurrentPage(1); // Reset to the first page when filters change
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
            <div className="container mx-auto">
                <div className="mt-6 px-6">
                    <div className="hidden md:flex justify-center gap-4">
                        <Sidebar />
                    </div>
                </div>

                <div className="w-full px-4 py-6">
                    <h1 className="text-2xl font-bold mb-6">{categoryName}</h1>

                    {error && <div className="text-red-500 text-center">{error}</div>}

                    {/* Dropdown lọc */}
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

                    {/* Price Range Filter */}
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

                    {/* Color filter */}
                    <div className="mb-6">
                        <h3 className="text-lg font-bold mb-2">Màu sắc</h3>
                        <div className="flex flex-wrap gap-4">
                            {colors.map((color) => (
                                <div key={color.id} className="flex items-center gap-2">
                                    <input
                                        type="checkbox"
                                        id={`color-${color.id}`}
                                        value={color.id}
                                        onChange={() => handleColorChange(color.id)}
                                        className="cursor-pointer"
                                    />
                                    <label htmlFor={`color-${color.id}`} className="flex items-center gap-2 cursor-pointer">
                                        <span
                                            className="block w-6 h-6 rounded border border-black"
                                            style={{ backgroundColor: color.hex_code }}
                                        ></span>
                                        {color.color}
                                    </label>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Product Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
                        {products.map((product) => (
                            <div
                                key={product.id}
                                className="bg-white rounded shadow p-4 hover:shadow-lg transition cursor-pointer relative"
                                onClick={() => router.push(`/productdetail/${product.slug}`)}
                            >
                                {/* Thêm nút favorite */}
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

                                {/* Phần còn lại của card giữ nguyên */}
                                <img
                                    src={product.productColors[0]?.ProductColor?.image || 'https://via.placeholder.com/150'}
                                    alt={product.product_name}
                                    className="w-full h-80 object-cover rounded"
                                />
                                <h3 className="text-lg font-semibold mt-2">{product.product_name}</h3>
                                <p className="text-gray-600">{product.description}</p>
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
                            </div>
                        ))}
                    </div>


                    <div className="flex justify-center mt-6">
                        {currentPage < totalPages && (
                            <button
                                onClick={() => setCurrentPage((prevPage) => prevPage + 1)}
                                className="px-4 py-2 rounded bg-gray-600 text-white hover:bg-gray-700"
                            >
                                Xem thêm
                            </button>
                        )}
                    </div>

                    {loading && <div className="text-center mt-4">Đang tải...</div>}
                </div>
            </div>
        </Layout>
    );
}
