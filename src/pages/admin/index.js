import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loginAdmin, logoutAdmin } from '../../store/slices/adminUserSlice';
import { getUserInfo } from '../../store/slices/userSlice';
import { getToken, getRole } from '@/utils/storage';
import AdminSidebar from '@/components/admin/AdminSidebar';
import AdminHeader from '@/components/admin/AdminHeader';
import AdminContent from '@/components/admin/AdminContent';
import LoginModal from '@/components/admin/LoginModal';

const AdminDashboard = () => {
    const dispatch = useDispatch();
    const { adminInfo, error } = useSelector((state) => state.adminUser);
    const { user, loading } = useSelector((state) => state.auth);
    const [showLoginModal, setShowLoginModal] = useState(false);
    const [role, setRole] = useState(null);
    const [activeTab, setActiveTab] = useState('dashboard');

    useEffect(() => {
        const token = getToken();
        if (token) {
            const clientRole = getRole();
            if (clientRole === 'admin' || clientRole === 'superadmin') {
                setRole(clientRole);
                dispatch(getUserInfo());
            } else {
                setShowLoginModal(true);
            }
        } else {
            setShowLoginModal(true);
        }
    }, [dispatch, role]);

    const handleLogin = async (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        try {
            await dispatch(loginAdmin({ email, password })).unwrap();
            const clientRole = getRole();
            if (clientRole === 'admin' || clientRole === 'superadmin') {
                setRole(clientRole);
                setShowLoginModal(false);
                dispatch(getUserInfo());
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
        return <LoginModal onSubmit={handleLogin} error={error} />;
    }

    return (
        <div className="min-h-screen bg-gray-100 flex">
            <AdminSidebar 
                activeTab={activeTab} 
                setActiveTab={setActiveTab}
                role={role}
            />
            <div className="ml-64 flex-1 flex flex-col">
                <AdminHeader 
                    user={user}
                    role={role}
                    handleLogout={handleLogout}
                />
                <AdminContent 
                    activeTab={activeTab}
                    loading={loading}
                />
            </div>
        </div>
    );
};

export default AdminDashboard;
