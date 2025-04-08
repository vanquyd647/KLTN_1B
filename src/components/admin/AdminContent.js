// components/admin/AdminContent.js
import React from 'react';
import ProductManagement from '../ProductManagement';
import OrderManagement from '../OrderManagement';
import Statistics from '../Statistics';
import ShippingManagement from '../ShippingManagement';
import UserManagement from '../UserManagement';
import BlogManagement from '../BlogManagement';
import CouponManagement from '../CouponManagement';
import SettingsManagement from '../SettingsManagement';
import Dashboard from '../Dashboard';


const AdminContent = ({ activeTab, loading, role }) => {  // Thêm role vào props
    const renderContent = () => {
        if (loading) {
            return <div className="p-4">Loading...</div>;
        }

        switch (activeTab) {
            case 'dashboard':
                return <Dashboard />;
            case 'products':
                return <ProductManagement />;
            case 'orders':
                return <OrderManagement />;
            case 'statistics':
                return role === 'superadmin' ? (
                    <Statistics />
                ) : (
                    <div className="p-4 text-red-500">
                        Bạn không có quyền truy cập !
                    </div>
                );
            case 'shipping':
                return role === 'superadmin' ? (
                    <ShippingManagement />
                ) : (
                    <div className="p-4 text-red-500">
                        Bạn không có quyền truy cập !
                    </div>
                );
            case 'users':
                // Chỉ hiển thị UserManagement khi role là superadmin
                return role === 'superadmin' ? (
                    <UserManagement />
                ) : (
                    <div className="p-4 text-red-500">
                        Bạn không có quyền truy cập !
                    </div>
                );
            // case 'blogs':
            //     return <BlogManagement />;
            case 'coupons':
                return role === 'superadmin' ? (
                    <CouponManagement />
                ) : (
                    <div className="p-4 text-red-500">
                        Bạn không có quyền truy cập !
                    </div>
                );
            case 'settings':
                return role === 'superadmin' ? (
                    <SettingsManagement />
                ) : (
                    <div className="p-4 text-red-500">
                        Bạn không có quyền truy cập !
                    </div>
                );
            default:
                return <Dashboard />;
        }
    };

    return (
        <main className="flex-1 p-8">
            <div className="bg-white rounded-lg shadow">
                {renderContent()}
            </div>
        </main>
    );
};

export default AdminContent;
