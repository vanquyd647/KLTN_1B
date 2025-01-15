import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { getUserInfo, logoutUser } from '../../store/slices/userSlice';
import { getToken } from '../../utils/storage';
import Layout from '../../components/Layout';

export default function Profile() {
    const dispatch = useDispatch();
    const router = useRouter();

    const { user, loading } = useSelector((state) => state.auth);
    const [selectedTab, setSelectedTab] = useState('info');

    useEffect(() => {
        const token = getToken();

        // Kiểm tra token, nếu không có điều hướng đến login
        if (!token) {
            router.push('/account/login');
            return;
        }

        // Lấy thông tin người dùng
        dispatch(getUserInfo())
            .unwrap()
            .catch(() => {
                router.push('/account/login'); // Điều hướng nếu không thể lấy thông tin
            });
    }, [dispatch, router]);

    const handleLogout = async () => {
        try {
            await dispatch(logoutUser()).unwrap();
            router.push('/account/login');
        } catch (err) {
            console.error('Failed to logout:', err);
        }
    };

    if (loading) {
        return <div className="text-center py-10 text-xl">Loading profile...</div>;
    }

    if (!user) {
        return <div className="text-center py-10 text-xl">User not found</div>;
    }

    return (
        <Layout>
            <div className="container mx-auto px-4 py-6">
                <h1 className="text-2xl font-bold mb-4">Profile</h1>

                <div className="flex flex-col md:flex-row gap-6">
                    {/* Sidebar */}
                    <div className="md:w-1/4 bg-gray-100 p-4 rounded shadow-md">
                        <button
                            className={`w-full text-left px-4 py-2 mb-2 rounded ${
                                selectedTab === 'info' ? 'bg-blue-600 text-white' : 'bg-gray-200'
                            }`}
                            onClick={() => setSelectedTab('info')}
                        >
                            Personal Info
                        </button>
                        <button
                            className={`w-full text-left px-4 py-2 mb-2 rounded ${
                                selectedTab === 'orders' ? 'bg-blue-600 text-white' : 'bg-gray-200'
                            }`}
                            onClick={() => setSelectedTab('orders')}
                        >
                            Orders
                        </button>
                        <button
                            className={`w-full text-left px-4 py-2 mb-2 rounded ${
                                selectedTab === 'address' ? 'bg-blue-600 text-white' : 'bg-gray-200'
                            }`}
                            onClick={() => setSelectedTab('address')}
                        >
                            Address Book
                        </button>

                        <button
                            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition mt-6"
                            onClick={handleLogout}
                        >
                            Logout
                        </button>
                    </div>

                    {/* Content */}
                    <div className="md:w-3/4 bg-white p-6 rounded shadow-md">
                        {selectedTab === 'info' && (
                            <div>
                                <p className="mb-4">
                                    <strong>First Name:</strong> {user.firstname}
                                </p>
                                <p className="mb-4">
                                    <strong>Last Name:</strong> {user.lastname}
                                </p>
                                <p className="mb-4">
                                    <strong>Email:</strong> {user.email}
                                </p>
                                <p className="mb-4">
                                    <strong>Phone:</strong> {user.phone}
                                </p>
                                <p className="mb-4">
                                    <strong>Gender:</strong> {user.gender}
                                </p>
                                <p className="mb-4">
                                    <strong>Joined:</strong>{' '}
                                    {new Date(user.created_at).toLocaleDateString()}
                                </p>
                            </div>
                        )}

                        {selectedTab === 'orders' && (
                            <div>
                                <h2 className="text-lg font-semibold mb-4">Order History</h2>
                                <p>No orders available.</p>
                            </div>
                        )}

                        {selectedTab === 'address' && (
                            <div>
                                <h2 className="text-lg font-semibold mb-4">Address Book</h2>
                                <p>No addresses available.</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </Layout>
    );
}
