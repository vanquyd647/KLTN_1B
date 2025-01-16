import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { fetchNewProductsByPagination, fetchFeaturedProductsByPagination } from '../store/slices/productSlice';
import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar2';
import Banner from '../components/Banner';

export default function Index() {
    const dispatch = useDispatch();
    const router = useRouter();

    const { newProducts, featuredProducts, loading: productsLoading, error: productsError } = useSelector(
        (state) => state.products
    );

    const [newProductsPage, setNewProductsPage] = useState(1);
    const [featuredProductsPage, setFeaturedProductsPage] = useState(1);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const pageSize = 10;

    useEffect(() => {
        dispatch(fetchNewProductsByPagination({ page: newProductsPage, limit: pageSize }));
    }, [dispatch, newProductsPage]);

    useEffect(() => {
        dispatch(fetchFeaturedProductsByPagination({ page: featuredProductsPage, limit: pageSize }));
    }, [dispatch, featuredProductsPage]);

    const handleProductClick = (slug) => {
        router.push(`/productdetail/${slug}`);
    };

    return (
        <Layout>
            <Banner />

            {/* Sidebar below the banner */}
            <div className="mt-6 px-6">
                <div className="md:hidden mb-4">
                    <button
                        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                        className="p-3 bg-blue-500 text-white text-lg font-bold rounded-lg shadow-md"
                    >
                        {isSidebarOpen ? 'Đóng Danh Mục' : 'Mở Danh Mục'}
                    </button>
                </div>

                <div
                    className={`${isSidebarOpen ? 'flex' : 'hidden'} md:flex justify-center gap-4`}
                >
                    <Sidebar />
                </div>
            </div>

            {/* Main Content */}
            <div className="w-full px-4 py-6">
                {productsLoading ? (
                    <div className="text-center py-10 text-xl">Loading products...</div>
                ) : productsError ? (
                    <div className="text-center text-red-500">{productsError}</div>
                ) : (
                    <div>
                        {/* New Products Section */}
                        <h3 className="text-lg font-bold mb-4">Sản phẩm mới</h3>
                        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
                            {newProducts.items.map((product) => (
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
                                        className="w-full h-40 object-cover rounded"
                                    />
                                    <h3 className="text-lg font-semibold mt-2">
                                        {product.product_name}
                                    </h3>
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

                        {/* Pagination for New Products */}
                        <div className="flex justify-center mt-6">
                            {Array.from(
                                { length: Math.ceil(newProducts.pagination.totalPages) },
                                (_, i) => (
                                    <button
                                        key={i + 1}
                                        className={`px-4 py-2 mx-1 rounded ${
                                            newProductsPage === i + 1
                                                ? 'bg-blue-600 text-white'
                                                : 'bg-gray-200 text-gray-800'
                                        }`}
                                        onClick={() => setNewProductsPage(i + 1)}
                                    >
                                        {i + 1}
                                    </button>
                                )
                            )}
                        </div>

                        {/* Featured Products Section */}
                        <h3 className="text-lg font-bold mb-4">Sản phẩm nổi bật</h3>
                        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                            {featuredProducts.items.map((product) => (
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
                                        className="w-full h-40 object-cover rounded"
                                    />
                                    <h3 className="text-lg font-semibold mt-2">
                                        {product.product_name}
                                    </h3>
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

                        {/* Pagination for Featured Products */}
                        <div className="flex justify-center mt-6">
                            {Array.from(
                                { length: Math.ceil(featuredProducts.pagination.totalPages) },
                                (_, i) => (
                                    <button
                                        key={i + 1}
                                        className={`px-4 py-2 mx-1 rounded ${
                                            featuredProductsPage === i + 1
                                                ? 'bg-blue-600 text-white'
                                                : 'bg-gray-200 text-gray-800'
                                        }`}
                                        onClick={() => setFeaturedProductsPage(i + 1)}
                                    >
                                        {i + 1}
                                    </button>
                                )
                            )}
                        </div>
                    </div>
                )}
            </div>
        </Layout>
    );
}
