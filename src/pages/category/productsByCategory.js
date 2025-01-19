import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductsByCategory } from '../../store/slices/productsByCategorySlice';
import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import Sidebar from '../../components/Sidebar2';
import Banner from '../../components/Banner';
import axios from 'axios';

export default function ProductsByCategory() {
    const dispatch = useDispatch();
    const router = useRouter();
    const { products, totalPages, loading, error } = useSelector(
        (state) => state.productsByCategory
    );

    const [currentPage, setCurrentPage] = useState(1);
    const [sort, setSort] = useState('newest');
    const [selectedColors, setSelectedColors] = useState([]);
    const [priceRange, setPriceRange] = useState('');
    const [colors, setColors] = useState([]); // Store colors fetched from API
    const pageSize = 10;

    const { categoryId, categoryName } = router.query;

    // Fetch products when filters change
    useEffect(() => {
        if (categoryId) {
            dispatch(
                fetchProductsByCategory({
                    categoryId,
                    page: currentPage,
                    limit: pageSize,
                    sort,
                    colorIds: selectedColors.join(','),
                    priceRange,
                })
            );
        }
    }, [dispatch, categoryId, currentPage, sort, selectedColors, priceRange]);

    // Fetch colors from API
    useEffect(() => {
        const fetchColors = async () => {
            try {
                const response = await axios.get('http://localhost:5551/api/colors');
                setColors(response.data.data); // Set colors from API response
            } catch (error) {
                console.error('Error fetching colors:', error);
            }
        };
        fetchColors();
    }, []);

    const handleColorChange = (colorId) => {
        setSelectedColors((prevColors) =>
            prevColors.includes(colorId)
                ? prevColors.filter((id) => id !== colorId)
                : [...prevColors, colorId]
        );
        setCurrentPage(1);
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
                <h1 className="text-2xl font-bold mb-6">Sản phẩm theo danh mục {categoryName}</h1>

                {error && <div className="text-red-500 text-center">{error}</div>}

                {/* Dropdown lọc */}
                <div className="mb-6 flex items-center gap-2">
                    <label htmlFor="sortFilter" className="text-gray-700 font-semibold">
                        Sắp xếp theo:
                    </label>
                    <select
                        id="sortFilter"
                        value={sort}
                        onChange={(e) => setSort(e.target.value)}
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
                        onChange={(e) => {
                            setPriceRange(e.target.value);
                            setCurrentPage(1);
                        }}
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
                            className="bg-white rounded shadow p-4 hover:shadow-lg transition cursor-pointer"
                            onClick={() => router.push(`/productdetail/${product.slug}`)}
                        >
                            <img
                                src={
                                    product.productColors[0]?.ProductColor?.image ||
                                    'https://via.placeholder.com/150'
                                }
                                alt={product.product_name}
                                className="w-full h-80 object-cover rounded"
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

                <div className="flex justify-center mt-6">
                    {currentPage < totalPages && (
                        <button
                            onClick={() => setCurrentPage((prevPage) => prevPage + 1)}
                            className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
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
