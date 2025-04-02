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


const AdminContent = ({ activeTab, loading }) => {
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
                return <Statistics />;
            case 'shipping':
                return <ShippingManagement />;
            case 'users':
                return <UserManagement />;
            case 'blogs':
                return <BlogManagement />;
            case 'coupons':
                return <CouponManagement />;
            case 'settings':
                return <SettingsManagement />;
            default:
                return <ProductManagement />;
        }
    };

    return (
        <main className="flex-1 p-8">
            <div className="bg-white rounded-lg shadow-md">
                {renderContent()}
            </div>
        </main>
    );
};

export default AdminContent;
