import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar2';
import Banner from '../components/Banner';
import Link from 'next/link';

export default function Index() {
    const router = useRouter();

    const [newProducts, setNewProducts] = useState([]);
    const [featuredProducts, setFeaturedProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const pageSize = 10; // Default fetch size

    // Fetch new products
    const fetchNewProducts = async () => {
        try {
            const response = await axios.get('http://localhost:5551/api/products/new', {
                params: { page: 1, limit: pageSize },
            });
            setNewProducts(response.data.data.products || []);
        } catch (err) {
            console.error('Error fetching new products:', err);
            setError('Không thể tải sản phẩm mới');
        }
    };

    // Fetch featured products
    const fetchFeaturedProducts = async () => {
        try {
            const response = await axios.get('http://localhost:5551/api/products/featured', {
                params: { page: 1, limit: pageSize },
            });
            setFeaturedProducts(response.data.data.products || []);
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
                                        className="bg-white rounded shadow p-4 hover:shadow-lg transition cursor-pointer"
                                        onClick={() => handleProductClick(product.slug)}
                                    >
                                        <img
                                            src={
                                                product.productColors[0]?.ProductColor?.image ||
                                                'https://via.placeholder.com/150'
                                            }
                                            alt={product.product_name}
                                            className="w-full h-40 object-cover rounded sm:h-60 md:h-72"
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
