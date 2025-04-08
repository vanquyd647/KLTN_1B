// utils/adminMenuItems.js
import React from 'react';

export const menuItems = [
    {
        id: 'dashboard',
        label: 'Tổng quan',
        icon: <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
        </svg>
    },
    {
        id: 'products',
        label: 'Quản lý sản phẩm',
        icon: <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>,
        subItems: [
            { id: 'product-list', label: 'Danh sách sản phẩm' },
            { id: 'add-product', label: 'Thêm sản phẩm' },
            { id: 'categories', label: 'Danh mục' }
        ]
    },
    {
        id: 'orders',
        label: 'Quản lý đơn hàng',
        icon: <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>,
        subItems: [
            { id: 'order-list', label: 'Danh sách đơn hàng' },
            { id: 'pending-orders', label: 'Đơn hàng chờ xử lý' },
            { id: 'completed-orders', label: 'Đơn hàng đã hoàn thành' }
        ]
    },
    {
        id: 'users',
        label: 'Quản lý người dùng',
        icon: <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>,
        subItems: [
            { id: 'user-list', label: 'Danh sách người dùng' },
            { id: 'add-user', label: 'Thêm người dùng' },
            { id: 'user-roles', label: 'Phân quyền' }
        ]
    },
    {
        id: 'statistics',
        label: 'Thống kê',
        icon: <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>,
        subItems: [
            { id: 'sales-stats', label: 'Thống kê doanh số' },
            { id: 'product-stats', label: 'Thống kê sản phẩm' },
            { id: 'user-stats', label: 'Thống kê người dùng' }
        ]
    },
    {
        id: 'coupons',
        label: 'Quản lý mã giảm giá',
        icon: <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
        </svg>,
        subItems: [
            { id: 'coupon-list', label: 'Danh sách mã giảm giá' },
            { id: 'add-coupon', label: 'Thêm mã giảm giá' },
            { id: 'coupon-stats', label: 'Thống kê sử dụng' }
        ]
    },
    {
        id: 'shipping',
        label: 'Quản lý vận chuyển',
        icon: <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
        </svg>,
        subItems: [
            { id: 'shipping-methods', label: 'Phương thức vận chuyển' },
            { id: 'shipping-zones', label: 'Khu vực vận chuyển' },
            { id: 'shipping-rates', label: 'Phí vận chuyển' }
        ]
    },
    // {
    //     id: 'blogs',
    //     label: 'Quản lý bài viết',
    //     icon: <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    //         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
    //     </svg>,
    //     subItems: [
    //         { id: 'post-list', label: 'Danh sách bài viết' },
    //         { id: 'add-post', label: 'Thêm bài viết' },
    //         { id: 'post-categories', label: 'Danh mục bài viết' }
    //     ]
    // },
    {
        id: 'settings',
        label: 'Cài đặt',
        icon: <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>,
        path: '/admin'
    },
    {
        id: 'reports',
        label: 'Báo cáo',
        icon: <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>,
        subItems: [
            { id: 'sales-report', label: 'Báo cáo doanh số' },
            { id: 'inventory-report', label: 'Báo cáo kho' },
            { id: 'customer-report', label: 'Báo cáo khách hàng' }
        ]
    },
    
];

export const getMenuItemById = (id) => {
    return menuItems.find(item => item.id === id) || null;
};

export const getAllowedMenuItems = (userRole) => {
    // Có thể thêm logic để lọc menu items dựa trên role người dùng
    return menuItems;
};
