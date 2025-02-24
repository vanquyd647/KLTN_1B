import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loginAdmin, logoutAdmin } from '../../store/slices/adminUserSlice';
import { getUserInfo } from '../../store/slices/userSlice';
import { getToken, getRole } from '@/utils/storage';
import Footer from '@/components/Footer';

const AdminDashboard = () => {
    const dispatch = useDispatch();
    const { adminInfo, error } = useSelector((state) => state.adminUser);
    const { user, loading } = useSelector((state) => state.auth);
    const [showLoginModal, setShowLoginModal] = useState(false);
    const [role, setRole] = useState(null);

    useEffect(() => {
        const token = getToken();
        if (token) {
            const clientRole = getRole(); // Lấy role từ localStorage
            if (clientRole === 'admin' || clientRole === 'superadmin') {
                setRole(clientRole); // Chỉ lưu role hợp lệ
                dispatch(getUserInfo()); // Gọi getUserInfo mỗi khi role thay đổi
            } else {
                setShowLoginModal(true); // Hiển thị modal nếu role không hợp lệ
            }
        } else {
            setShowLoginModal(true); // Hiển thị modal nếu không có token
        }
    }, [dispatch, role]); // Thêm `role` vào dependencies để gọi lại khi role thay đổi

    const handleLogin = async (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        try {
            await dispatch(loginAdmin({ email, password })).unwrap();
            const clientRole = getRole(); // Lấy role sau khi đăng nhập
            if (clientRole === 'admin' || clientRole === 'superadmin') {
                setRole(clientRole);
                setShowLoginModal(false);
                dispatch(getUserInfo()); // Gọi lại getUserInfo sau khi đăng nhập
            } else {
                throw new Error('Unauthorized role');
            }
        } catch (error) {
            console.error('Login failed:', error);
        }
    };

    const handleLogout = async () => {
        try {
            await dispatch(logoutAdmin()).unwrap();
            setRole(null);
            setShowLoginModal(true);
        } catch (err) {
            console.error('Failed to logout:', err);
        }
    };

    if (!role) {
        // Hiển thị modal đăng nhập khi không có role hợp lệ
        return (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-lg font-bold mb-4">Admin Login</h2>
                    {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
                    <form onSubmit={handleLogin}>
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            className="w-full p-2 mb-4 border rounded"
                            required
                        />
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            className="w-full p-2 mb-4 border rounded"
                            required
                        />
                        <button
                            type="submit"
                            className="w-full bg-gray-500 text-white py-2 rounded hover:bg-gray-600"
                        >
                            Login
                        </button>
                    </form>
                </div>
            </div>
        );
    }

    // Hiển thị giao diện nếu role hợp lệ
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col">
            <header className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
                <div className="text-2xl font-semibold text-gray-800">
                    Admin Dashboard - {role ? role.toUpperCase() : 'Unknown'}
                </div>
                <button
                    onClick={handleLogout}
                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                >
                    Logout
                </button>
            </header>

            <main className="flex-grow p-6">
                <div className="bg-white rounded-lg shadow-md p-4">
                    <h1 className="text-xl font-bold text-gray-800 mb-4">
                        Welcome, {user?.firstname || 'Guest'}!
                    </h1>
                    {loading ? (
                        <p className="text-gray-600">Loading user information...</p>
                    ) : user ? (
                        <div>
                            <p className="text-gray-600">
                                <strong>Email:</strong> {user.email}
                            </p>
                            <p className="text-gray-600">
                                <strong>Phone:</strong> {user.phone || 'N/A'}
                            </p>
                        </div>
                    ) : (
                        <p className="text-gray-600">User information not available.</p>
                    )}
                </div>
            </main>
        </div>
    );
};

export default AdminDashboard;
