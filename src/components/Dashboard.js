// components/Dashboard.js
import React from 'react';

const Dashboard = () => {
    return (
        <div className="p-6">
            {/* Thống kê tổng quan */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                <DashboardCard
                    title="Tổng doanh thu"
                    value="120.500.000đ"
                    icon={<CurrencyIcon />}
                    trend="+15%"
                    color="bg-blue-500"
                />

                <DashboardCard
                    title="Đơn hàng mới"
                    value="48"
                    icon={<OrderIcon />}
                    trend="+12"
                    color="bg-green-500"
                />

                <DashboardCard
                    title="Khách hàng mới"
                    value="156"
                    icon={<UserIcon />}
                    trend="+24"
                    color="bg-purple-500"
                />

                <DashboardCard
                    title="Sản phẩm"
                    value="1,240"
                    icon={<ProductIcon />}
                    trend="+8"
                    color="bg-orange-500"
                />
            </div>

            {/* Biểu đồ và thống kê chi tiết */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow">
                    <h3 className="text-lg font-semibold mb-4">Doanh thu theo tháng</h3>
                    {/* Thêm biểu đồ doanh thu */}
                </div>

                <div className="bg-white p-6 rounded-lg shadow">
                    <h3 className="text-lg font-semibold mb-4">Top sản phẩm bán chạy</h3>
                    <div className="space-y-4">
                        {/* Danh sách sản phẩm bán chạy */}
                        <TopProductItem
                            name="Áo thun nam"
                            sold={124}
                            revenue="12.400.000đ"
                        />
                        {/* Thêm các sản phẩm khác */}
                    </div>
                </div>
            </div>

            {/* Đơn hàng gần đây */}
            <div className="mt-6 bg-white rounded-lg shadow">
                <div className="p-6">
                    <h3 className="text-lg font-semibold mb-4">Đơn hàng gần đây</h3>
                    <table className="w-full">
                        <thead>
                            <tr className="text-left border-b">
                                <th className="pb-3">Mã đơn</th>
                                <th className="pb-3">Khách hàng</th>
                                <th className="pb-3">Trạng thái</th>
                                <th className="pb-3">Tổng tiền</th>
                                <th className="pb-3">Thời gian</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* Thêm dữ liệu đơn hàng */}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

// Component Card thống kê
const DashboardCard = ({ title, value, icon, trend, color }) => (
    <div className="bg-white p-6 rounded-lg shadow">
        <div className="flex items-center justify-between mb-4">
            <div className={`p-3 rounded-full ${color}`}>
                {icon}
            </div>
            <span className={`text-sm ${trend.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
                {trend}
            </span>
        </div>
        <h3 className="text-gray-500 text-sm">{title}</h3>
        <p className="text-2xl font-bold">{value}</p>
    </div>
);

// Component hiển thị sản phẩm bán chạy
const TopProductItem = ({ name, sold, revenue }) => (
    <div className="flex items-center justify-between py-2">
        <div>
            <h4 className="font-medium">{name}</h4>
            <p className="text-sm text-gray-500">{sold} đã bán</p>
        </div>
        <span className="font-medium">{revenue}</span>
    </div>
);

// Icons
const CurrencyIcon = () => (
    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

const OrderIcon = () => (
    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
    </svg>
);

const UserIcon = () => (
    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
);

const ProductIcon = () => (
    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
    </svg>
);

export default Dashboard;
