// pages/search.js
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { searchProductsByNameAndColor } from '../store/slices/productSlice';
import Layout from '../components/Layout';
import Banner from '../components/Banner';

export default function SearchPage() {
    const router = useRouter();
    const dispatch = useDispatch();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [loadingMore, setLoadingMore] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    const [totalProducts, setTotalProducts] = useState(0);
    const { keyword } = router.query;
    const ITEMS_PER_PAGE = 12;

    useEffect(() => {
        const fetchProducts = async () => {
            if (keyword) {
                setLoading(true);
                try {
                    const result = await dispatch(searchProductsByNameAndColor({
                        keyword,
                        page: 1,
                        limit: ITEMS_PER_PAGE,
                        sort: 'newest'
                    }));

                    if (result.payload?.data) {
                        setProducts(result.payload.data.products);
                        setTotalProducts(result.payload.data.pagination.totalItems);
                        setHasMore(result.payload.data.products.length >= ITEMS_PER_PAGE);
                    }
                } catch (error) {
                    console.error('Error fetching products:', error);
                }
                setLoading(false);
            }
        };

        setProducts([]);
        setCurrentPage(1);
        setHasMore(true);
        setTotalProducts(0);
        fetchProducts();
    }, [keyword, dispatch]);

    const loadMore = async () => {
        if (loadingMore) return;

        setLoadingMore(true);
        try {
            const nextPage = currentPage + 1;
            const result = await dispatch(searchProductsByNameAndColor({
                keyword,
                page: nextPage,
                limit: ITEMS_PER_PAGE,
                sort: 'newest'
            }));

            if (result.payload?.data) {
                const newProducts = result.payload.data.products;
                setProducts(prev => [...prev, ...newProducts]);
                setCurrentPage(nextPage);
                setHasMore(newProducts.length >= ITEMS_PER_PAGE);
            }
        } catch (error) {
            console.error('Error loading more products:', error);
        }
        setLoadingMore(false);
    };

    const handleProductClick = (slug) => {
        router.push(`/productdetail/${slug}`);
    };

    if (loading) {
        return (
            <Layout>
                <Banner />
                <div className="container mx-auto px-4 py-8">
                    <div className="flex justify-center items-center h-64">
                        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
                    </div>
                </div>
            </Layout>
        );
    }

    return (
        <Layout>
            <Banner />
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-2xl font-bold mb-6">
                    Kết quả tìm kiếm cho &quot;{keyword}&quot; ({totalProducts} sản phẩm)
                </h1>

                {products.length === 0 ? (
                    <div className="text-center py-8">
                        <p className="text-gray-500">Không tìm thấy sản phẩm phù hợp</p>
                    </div>
                ) : (
                    <>
                        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
                            {products.map((product) => (
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

                        {hasMore && (
                            <div className="flex justify-center mt-8">
                                <button
                                    onClick={loadMore}
                                    disabled={loadingMore}
                                    className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
                                >
                                    {loadingMore ? (
                                        <span className="flex items-center">
                                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Đang tải...
                                        </span>
                                    ) : (
                                        'Tải thêm sản phẩm'
                                    )}
                                </button>
                            </div>
                        )}
                    </>
                )}
            </div>
        </Layout>
    );
}
