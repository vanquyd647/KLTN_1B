import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import { indexApi, favoriteApi } from '../utils/apiClient'; // Import API client
import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar2';
import Banner from '../components/Banner';
import Link from 'next/link';
import { HeartIcon as HeartOutline } from '@heroicons/react/24/outline';
import { HeartIcon as HeartSolid } from '@heroicons/react/24/solid';

export default function Index() {
    const router = useRouter();

    const [newProducts, setNewProducts] = useState([]);
    const [featuredProducts, setFeaturedProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [favorites, setFavorites] = useState({});
    const [error, setError] = useState(null);

    const pageSize = 10; // Default fetch size


    const fetchNewProducts = async () => {
        try {
            const data = await indexApi.getNewProducts(1, pageSize);
            setNewProducts(data.data.products || []);
        } catch (err) {
            console.error('Error fetching new products:', err);
            setError('Không thể tải sản phẩm mới');
        }
    };

    // Fetch featured products
    const fetchFeaturedProducts = async () => {
        try {
            const data = await indexApi.getFeaturedProducts(1, pageSize);
            setFeaturedProducts(data.data.products || []);
        } catch (err) {
            console.error('Error fetching featured products:', err);
            setError('Không thể tải sản phẩm nổi bật');
        }
    };

    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true);
            await Promise.all([fetchNewProducts(), fetchFeaturedProducts()]);
            setLoading(false);
        };
        fetchProducts();
    }, []);

    const handleProductClick = (slug) => {
        router.push(`/productdetail/${slug}`);
    };

    const handleFavoriteClick = async (e, productId) => {
        e.stopPropagation(); // Ngăn bubble up tới card
        try {
            if (favorites[productId]) {
                await favoriteApi.removeFromFavorite(productId);
            } else {
                await favoriteApi.addToFavorite(productId);
            }
            setFavorites(prev => ({
                ...prev,
                [productId]: !prev[productId]
            }));
        } catch (error) {
            console.error('Error handling favorite:', error);
        }
    };

    // Thêm useEffect để load trạng thái yêu thích
    useEffect(() => {
        const loadFavoriteStatus = async () => {
            try {
                const response = await favoriteApi.getFavorites();
                // Chuyển đổi mảng favorites thành object với key là product_id
                const favoritesMap = {};
                // Sửa từ response.data.items thành response.data
                response.data.forEach(item => {
                    favoritesMap[item.product_id] = true;
                });
                setFavorites(favoritesMap);
            } catch (error) {
                console.error('Error loading favorite status:', error);
            }
        };
        loadFavoriteStatus();
    }, []);

    const hasNoProducts = !newProducts.length && !featuredProducts.length;

    return (
        <Layout>
            <Banner />

            {/* Sidebar below banner */}
            <div className="mt-6 px-6">
                <div className="hidden md:flex justify-center gap-4">
                    <Sidebar />
                </div>
            </div>

            {/* Main Content */}
            <div className="w-full px-4 py-6">
                {loading ? (
                    <div className="text-center text-gray-500">Đang tải...</div>
                ) : hasNoProducts ? (
                    <div className="text-center text-gray-500 text-lg">Không có sản phẩm</div>
                ) : (
                    <>
                        {/* Section for New Products */}
                        <h3 className="text-lg font-bold mb-4">Sản phẩm mới</h3>
                        {newProducts.length > 0 ? (
                            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
                                {newProducts.map((product) => (
                                    <div
                                        key={product.id}
                                        className="bg-white rounded shadow p-4 hover:shadow-lg transition cursor-pointer relative"
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
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <p className="text-center text-gray-500">Không có sản phẩm mới.</p>
                        )}
                        <div className="flex justify-center mt-6">
                            <Link href="/new-products" className="px-4 py-2 rounded bg-blue-600 text-white">
                                Xem tất cả
                            </Link>
                        </div>

                        {/* Section for Featured Products */}
                        <h3 className="text-lg font-bold mt-10 mb-4">Sản phẩm nổi bật</h3>
                        {featuredProducts.length > 0 ? (
                            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                                {featuredProducts.map((product) => (
                                    <div
                                        key={product.id}
                                        className="bg-white rounded shadow p-4 hover:shadow-lg transition cursor-pointer"
                                        onClick={() => handleProductClick(product.slug)}
                                    >
                                        <img
                                            src={
                                                product.productColors[0]?.ProductColor?.image ||
                                                'https://via.placeholder.com/150'
                                            }
                                            alt={product.product_name}
                                            className="w-full h-60 sm:h-72 md:h-80 object-cover rounded"
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
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <p className="text-center text-gray-500">Không có sản phẩm nổi bật.</p>
                        )}
                        <div className="flex justify-center mt-6">
                            <Link href="/featured-products" className="px-4 py-2 rounded bg-blue-600 text-white">
                                Xem tất cả
                            </Link>
                        </div>
                    </>
                )}
            </div>
        </Layout>
    );
}
