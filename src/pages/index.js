import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { getUserInfo } from '../store/slices/userSlice';
import { fetchProducts } from '../store/slices/productSlice';
import { getToken, getUserId } from '../utils/storage';
import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar';

export default function Dashboard() {
    const dispatch = useDispatch();
    const router = useRouter();

    const { user, loading: userLoading, error: userError } = useSelector((state) => state.auth);
    const { items: products, loading: productsLoading, error: productsError } = useSelector(
        (state) => state.products
    );

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    useEffect(() => {
        const fetchUserData = async () => {
            const token = getToken();
            const userId = getUserId();

            if (token && userId) {
                try {
                    await dispatch(getUserInfo()).unwrap();
                } catch (error) {
                    console.error('Failed to fetch user info:', error);
                    router.push('/account/login');
                }
            } else {
                router.push('/account/login');
            }
        };

        fetchUserData();
    }, [dispatch, router]);

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    if (userLoading) {
        return <div className="text-center py-10 text-xl">Loading user data...</div>;
    }

    if (userError) {
        return <div className="text-center text-red-500 py-10">{userError}</div>;
    }

    return (
        <Layout>
            <div className="flex flex-col md:flex-row gap-4">
                {/* Toggle Button for Mobile Sidebar */}
                {/* Sidebar */}
                <aside
                    className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ${
                        isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
                    } md:relative md:translate-x-0`}
                >
                    {/* Close Button */}
                    <button
                        className="absolute top-4 right-4 text-blue-600 focus:outline-none md:hidden"
                        onClick={() => setIsSidebarOpen(false)}
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                    <Sidebar />
                </aside>

                {/* Main Content */}
                <div className="w-full md:w-3/4">
                    <h2 className="text-xl font-bold mb-4">Danh sách sản phẩm</h2>

                    {productsLoading ? (
                        <div className="text-center py-10 text-xl">Loading products...</div>
                    ) : productsError ? (
                        <div className="text-center text-red-500">{productsError}</div>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                            {products.map((product) => (
                                <div
                                    key={product.id}
                                    className="bg-white rounded shadow p-4 hover:shadow-lg transition"
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
                                    <button
                                        className="bg-blue-500 text-white py-2 px-4 rounded mt-4 hover:bg-blue-600 transition"
                                        onClick={() =>
                                            alert(`Thêm ${product.product_name} vào giỏ hàng!`)
                                        }
                                    >
                                        Thêm vào giỏ hàng
                                    </button>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </Layout>
    );
}
