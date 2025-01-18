import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import {
    fetchNewProductsByPagination,
    fetchFeaturedProductsByPagination,
    setVisibleNewProducts,
    setVisibleFeaturedProducts,
} from '../store/slices/productSlice';
import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar2';
import Banner from '../components/Banner';
import Link from 'next/link';

export default function Index() {
    const dispatch = useDispatch();
    const router = useRouter();

    const {
        visibleNewProducts,
        visibleFeaturedProducts,
        newProducts,
        featuredProducts,
        loading: productsLoading,
        error: productsError,
    } = useSelector((state) => state.products);

    const pageSize = 10; // Default fetch size

    // Fetch new products data
    useEffect(() => {
        if (newProducts.items.length === 0) {
            dispatch(fetchNewProductsByPagination({ page: 1, limit: pageSize }));
        } else {
            dispatch(setVisibleNewProducts(newProducts.items.slice(0, pageSize)));
        }
    }, [dispatch, newProducts.items]);

    // Fetch featured products data
    useEffect(() => {
        if (featuredProducts.items.length === 0) {
            dispatch(fetchFeaturedProductsByPagination({ page: 1, limit: pageSize }));
        } else {
            dispatch(setVisibleFeaturedProducts(featuredProducts.items.slice(0, pageSize)));
        }
    }, [dispatch, featuredProducts.items]);

    const handleProductClick = (slug) => {
        router.push(`/productdetail/${slug}`);
    };

    const hasNoProducts =
        (!visibleNewProducts.length && !visibleFeaturedProducts.length) ||
        (!!productsError && visibleNewProducts.length === 0 && visibleFeaturedProducts.length === 0);

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
                {hasNoProducts ? (
                    <div className="text-center text-gray-500 text-lg">
                        Không có sản phẩm
                    </div>
                ) : (
                    <>
                        {/* Section for New Products */}
                        <h3 className="text-lg font-bold mb-4">Sản phẩm mới</h3>
                        {visibleNewProducts.length > 0 ? (
                            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
                                {visibleNewProducts.map((product) => (
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
                            <p className="text-center text-gray-500">Không có sản phẩm mới.</p>
                        )}
                        <div className="flex justify-center mt-6">
                            <Link href="/new-products" className="px-4 py-2 rounded bg-blue-600 text-white">
                                Xem tất cả
                            </Link>
                        </div>

                        {/* Section for Featured Products */}
                        <h3 className="text-lg font-bold mt-10 mb-4">Sản phẩm nổi bật</h3>
                        {visibleFeaturedProducts.length > 0 ? (
                            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                                {visibleFeaturedProducts.map((product) => (
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
