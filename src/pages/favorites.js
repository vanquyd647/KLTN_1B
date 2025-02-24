import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Layout from '../components/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { getFavorites, removeFromFavorite } from '../store/slices/favoriteSlice';
import { HeartIcon as HeartSolid } from '@heroicons/react/24/solid';
import Banner from '@/components/Banner';

export default function Favorites() {
    const router = useRouter();
    const dispatch = useDispatch();
    const { items, loading, error, pagination } = useSelector((state) => state.favorites);

    useEffect(() => {
        loadFavorites();
    }, []);

    const loadFavorites = async () => {
        try {
            await dispatch(getFavorites({ page: 1, limit: 10 })).unwrap();
        } catch (error) {
            console.error('Error loading favorites:', error);
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

    if (loading) {
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
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-2xl font-bold mb-6">
                    Sản phẩm yêu thích ({pagination.total || 0})
                </h1>

                {items.length === 0 ? (
                    <div className="text-center text-gray-500">
                        Bạn chưa có sản phẩm yêu thích nào
                    </div>
                ) : (
                    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
                        {items.map((item) => {
                            // Kiểm tra item và item.product tồn tại
                            if (!item || !item.product) return null;

                            return (
                                <div
                                    key={item.id}
                                    className="bg-white rounded shadow p-4 hover:shadow-lg transition cursor-pointer relative"
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
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                handleRemoveFavorite(item.product_id);
                                            }}
                                            className="absolute top-2 right-2 p-2 rounded-full bg-white shadow-md hover:bg-gray-100"
                                        >
                                            <HeartSolid className="h-6 w-6 text-red-500" />
                                        </button>
                                    </div>

                                    <div className="p-4">
                                        <h3 className="text-lg font-semibold mb-2">
                                            {item.product.product_name}
                                        </h3>
                                        <p className="text-gray-600 text-sm mb-2 line-clamp-2">
                                            {item.product.description}
                                        </p>
                                        <div className="mt-2">
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

                                        <div className="flex gap-2 mt-3">
                                            {item.product.productColors?.map((color) => (
                                                <div
                                                    key={color.id}
                                                    className="w-4 h-4 rounded-full border border-gray-300"
                                                    style={{ backgroundColor: color.hex_code }}
                                                    title={color.color}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>
        </Layout>
    );
}
