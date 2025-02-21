import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Layout from '../components/Layout';
import { favoriteApi } from '../utils/apiClient';
import { HeartIcon as HeartSolid } from '@heroicons/react/24/solid';

export default function Favorites() {
    const router = useRouter();
    const [favorites, setFavorites] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        loadFavorites();
    }, []);

    const loadFavorites = async () => {
        try {
            setLoading(true);
            const response = await favoriteApi.getFavorites();
            setFavorites(response.data);
            setLoading(false);
        } catch (error) {
            console.error('Error loading favorites:', error);
            setError('Không thể tải danh sách yêu thích');
            setLoading(false);
        }
    };

    const handleRemoveFavorite = async (productId) => {
        try {
            await favoriteApi.removeFromFavorite(productId);
            // Cập nhật lại danh sách sau khi xóa
            setFavorites(favorites.filter(item => item.product_id !== productId));
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
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-2xl font-bold mb-6">Sản phẩm yêu thích</h1>

                {favorites.length === 0 ? (
                    <div className="text-center text-gray-500">
                        Bạn chưa có sản phẩm yêu thích nào
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {favorites.map((item) => (
                            <div
                                key={item.id}
                                className="bg-white rounded-lg shadow-md overflow-hidden relative"
                                onClick={() => handleProductClick(item.product.slug)}
                            >
                                <div className="relative">
                                    <img
                                        src={item.product.productColors[0]?.ProductColor?.image ||
                                            'https://via.placeholder.com/300'}
                                        alt={item.product.product_name}
                                        className="w-full h-64 object-cover"
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
                                        {item.product.productColors.map((color) => (
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
                        ))}
                    </div>
                )}
            </div>
        </Layout>
    );
}
