import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { indexApi } from '../utils/apiClient';
import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar2';
import Banner from '../components/Banner';
import Link from 'next/link';
import { HeartIcon as HeartOutline } from '@heroicons/react/24/outline';
import { HeartIcon as HeartSolid } from '@heroicons/react/24/solid';
import { 
    addToFavorite, 
    removeFromFavorite,
    getFavorites,
    selectFavoriteStatuses 
} from '../store/slices/favoriteSlice';

export default function Index() {
    const router = useRouter();
    const dispatch = useDispatch();
    
    const favorites = useSelector(selectFavoriteStatuses);

    const [newProducts, setNewProducts] = useState([]);
    const [featuredProducts, setFeaturedProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const pageSize = 10;

    const fetchNewProducts = async () => {
        try {
            const data = await indexApi.getNewProducts(1, pageSize);
            setNewProducts(data.data.products || []);
        } catch (err) {
            console.error('Error fetching new products:', err);
            setError('Không thể tải sản phẩm mới');
        }
    };

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
        const fetchData = async () => {
            setLoading(true);
            try {
                await Promise.all([
                    fetchNewProducts(),
                    fetchFeaturedProducts(),
                    dispatch(getFavorites({ page: 1, limit: 100 })).unwrap()
                ]);
            } catch (error) {
                console.error('Error loading initial data:', error);
                setError('Có lỗi xảy ra khi tải dữ liệu');
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [dispatch]);

    const handleProductClick = (slug) => {
        router.push(`/productdetail/${slug}`);
    };

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

    const ProductCard = ({ product }) => (
        <div
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
        </div>
    );

    return (
        <Layout>
            <Banner />
            <div className="mt-6 px-6">
                <div className="hidden md:flex justify-center gap-4">
                    <Sidebar />
                </div>
            </div>

            <div className="w-full px-4 py-6">
                {loading ? (
                    <div className="text-center text-gray-500">Đang tải...</div>
                ) : error ? (
                    <div className="text-center text-red-500">{error}</div>
                ) : (
                    <>
                        <section>
                            <h3 className="text-lg font-bold mb-4">Sản phẩm mới</h3>
                            {newProducts.length > 0 ? (
                                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
                                    {newProducts.map(product => (
                                        <ProductCard key={product.id} product={product} />
                                    ))}
                                </div>
                            ) : (
                                <p className="text-center text-gray-500">Không có sản phẩm mới.</p>
                            )}
                            <div className="flex justify-center mt-6">
                                <Link href="/new-products" className="px-4 py-2 rounded bg-gray-600 text-white hover:bg-gray-700">
                                    Xem tất cả
                                </Link>
                            </div>
                        </section>

                        <section className="mt-12">
                            <h3 className="text-lg font-bold mb-4">Sản phẩm nổi bật</h3>
                            {featuredProducts.length > 0 ? (
                                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                                    {featuredProducts.map(product => (
                                        <ProductCard key={product.id} product={product} />
                                    ))}
                                </div>
                            ) : (
                                <p className="text-center text-gray-500">Không có sản phẩm nổi bật.</p>
                            )}
                            <div className="flex justify-center mt-6">
                                <Link href="/featured-products" className="px-4 py-2 rounded bg-gray-600 text-white hover:bg-gray-700">
                                    Xem tất cả
                                </Link>
                            </div>
                        </section>
                    </>
                )}
            </div>
        </Layout>
    );
}
