import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFeaturedProductsByPagination } from '../store/slices/productSlice';
import { useRouter } from 'next/router';
import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar2';
import Banner from '../components/Banner';

export default function FeaturedProducts() {
    const router = useRouter();
    const dispatch = useDispatch();
    const { featuredProducts, loading, error } = useSelector((state) => state.products);

    const [currentPage, setCurrentPage] = useState(1); // Theo dõi trang hiện tại
    const pageSize = 10; // Mặc định tải 10 sản phẩm mỗi lần

    // Fetch dữ liệu sản phẩm nổi bật khi trang hoặc Redux thay đổi
    useEffect(() => {
        dispatch(fetchFeaturedProductsByPagination({ page: currentPage, limit: pageSize }));
    }, [dispatch, currentPage]);

    const handleLoadMore = () => {
        setCurrentPage((prevPage) => prevPage + 1); // Tăng số trang để tải thêm dữ liệu
    };

    const handleProductClick = (slug) => {
        router.push(`/productdetail/${slug}`);
    };

    return (
        <Layout>
            <Banner />
            {/* Sidebar dưới banner */}
            <div className="mt-6 px-6">
                <div className="hidden md:flex justify-center gap-4">
                    <Sidebar />
                </div>
            </div>

            {/* main content */}
            <div className="w-full px-4 py-6">
                <h1 className="text-2xl font-bold mb-6">Tất cả sản phẩm nổi bật</h1>

                {/* Hiển thị lỗi nếu có */}
                {error && <div className="text-red-500 text-center">{error}</div>}

                {/* Danh sách sản phẩm */}
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
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

                {/* Nút tải thêm */}
                <div className="flex justify-center mt-6">
                    {featuredProducts.pagination &&
                        currentPage < featuredProducts.pagination.totalPages && (
                            <button
                                onClick={handleLoadMore}
                                className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
                            >
                                Xem thêm
                            </button>
                        )}
                </div>

                {/* Hiển thị trạng thái tải */}
                {loading && <div className="text-center mt-4">Đang tải...</div>}
            </div>
        </Layout>
    );
}
