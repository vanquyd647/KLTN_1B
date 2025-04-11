// components/Dashboard.js
import React, { useState, useEffect } from 'react';
import { orderApi, adminApi, revenueApi, productApi } from '../utils/apiClient';
import { motion } from 'framer-motion';

// Import Chart.js
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip as ChartTooltip,
    Legend,
    ArcElement
} from 'chart.js';
import { Bar, Doughnut } from 'react-chartjs-2';

// Đăng ký các components cho Chart.js
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    ChartTooltip,
    Legend,
    ArcElement
);

const Dashboard = ({ setActiveTab }) => {
    const [orders, setOrders] = useState([]);
    const [users, setUsers] = useState([]);
    const [revenue, setRevenue] = useState({
        totalRevenue: 0,
        count: 0
    });
    const [products, setProducts] = useState({
        total: 0,
        newCount: 0
    });

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchOrders();
        fetchUsers();
        fetchRevenue();
        fetchProducts();
    }, []);


    const fetchOrders = async () => {
        try {
            const response = await orderApi.getAllOrders({
                page: 1,
                limit: 5
            });
            if (response.code === 200) {
                setOrders(response.data.orders);
            }
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    const fetchUsers = async () => {
        try {
            const response = await adminApi.getAllUsers({
                page: 1,
                limit: 10
            });
            if (response.code === 200) {
                setUsers(response.data.users);
            }
        } catch (err) {
            console.error(err);
        }
    };

    const fetchRevenue = async () => {
        try {
            const response = await revenueApi.getRevenueStats();
            console.log('Full response:', response);

            if (response?.data?.code === 200) {
                const totalRevenue = response.data.data.totalRevenue || 0;
                const count = response.data.data.count || 0;
                console.log('Fetched revenue:', { totalRevenue, count });

                setRevenue({
                    totalRevenue: totalRevenue,
                    count: count
                });
            } else {
                console.warn('Invalid response format:', response);
            }
        } catch (err) {
            console.error('Error in fetchRevenue:', err);
        }
    };

    const fetchProducts = async () => {
        try {
            const response = await productApi.getProductsByPagination();
            if (response?.code === 200) {
                const totalProducts = response.data.pagination.totalItems;
                const newProducts = response.data.products.filter(p => p.is_new).length;

                setProducts({
                    total: totalProducts,
                    newCount: newProducts
                });
            }
        } catch (err) {
            console.error('Error fetching products:', err);
        }
    };

    const handleViewAllOrders = () => {
        setActiveTab('orders');
    };

    // Function để chuyển đổi trạng thái đơn hàng sang tiếng Việt
    const getOrderStatusText = (status) => {
        switch (status) {
            case 'completed': return 'Hoàn thành';
            case 'shipping': return 'Đang giao';
            case 'cancelled': return 'Đã hủy';
            default: return 'Chờ xác nhận';
        }
    }

    // Function để lấy màu cho trạng thái
    const getOrderStatusColor = (status) => {
        switch (status) {
            case 'completed': return 'bg-green-100 text-green-800';
            case 'shipping': return 'bg-blue-100 text-blue-800';
            case 'cancelled': return 'bg-red-100 text-red-800';
            default: return 'bg-yellow-100 text-yellow-800';
        }
    }

    // Function xử lý dữ liệu cho biểu đồ tròn phân bổ đơn hàng
    const getOrderStatusDistribution = (orders) => {
        const statusCounts = {
            completed: 0,
            shipping: 0,
            cancelled: 0,
            pending: 0
        };

        orders.forEach(order => {
            if (statusCounts.hasOwnProperty(order.status)) {
                statusCounts[order.status]++;
            } else {
                // Nếu là trạng thái khác mặc định
                statusCounts.pending++;
            }
        });

        return {
            labels: ['Hoàn thành', 'Đang giao', 'Đã hủy', 'Chờ xác nhận'],
            datasets: [
                {
                    data: [
                        statusCounts.completed,
                        statusCounts.shipping,
                        statusCounts.cancelled,
                        statusCounts.pending
                    ],
                    backgroundColor: [
                        'rgba(75, 192, 92, 0.7)',
                        'rgba(54, 162, 235, 0.7)',
                        'rgba(255, 99, 132, 0.7)',
                        'rgba(255, 206, 86, 0.7)'
                    ],
                    borderColor: [
                        'rgba(75, 192, 92, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 99, 132, 1)',
                        'rgba(255, 206, 86, 1)'
                    ],
                    borderWidth: 1,
                },
            ],
        };
    };

    // Component biểu đồ cột doanh thu
    const getRevenueChartData = (orders) => {
        const months = ['T1', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'T8', 'T9', 'T10', 'T11', 'T12'];

        // Tính tổng doanh thu cho tháng hiện tại (từ đơn hàng có status là completed)
        const completedOrders = orders.filter(order => order.status === 'completed');

        const revenueData = Array(12).fill(0);

        // Xử lý dữ liệu doanh thu theo tháng
        completedOrders.forEach(order => {
            const orderDate = new Date(order.dates.created_at);
            const orderMonth = orderDate.getMonth();
            revenueData[orderMonth] += parseFloat(order.pricing.final_price);
        });

        return {
            labels: months,
            datasets: [
                {
                    label: 'Doanh thu (VND)',
                    data: revenueData,
                    backgroundColor: 'rgba(53, 162, 235, 0.5)',
                    borderColor: 'rgba(53, 162, 235, 1)',
                    borderWidth: 1,
                }
            ]
        };
    };

    return (
        <div className="p-6 bg-gray-50 min-h-screen">
            <h1 className="text-2xl font-bold text-gray-800 mb-6">Tổng quan hệ thống</h1>

            {/* Thống kê tổng quan */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {loading ? (
                    // Skeleton loading
                    Array(4).fill().map((_, index) => (
                        <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 animate-pulse">
                            <div className="flex items-center justify-between mb-4">
                                <div className="h-4 bg-gray-200 rounded w-1/3"></div>
                                <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                            </div>
                            <div className="h-8 bg-gray-200 rounded w-1/2 mb-2"></div>
                            <div className="h-3 bg-gray-200 rounded w-1/4"></div>
                        </div>
                    ))
                ) : (
                    <>
                        <DashboardCard
                            title="Tổng doanh thu"
                            value={new Intl.NumberFormat('vi-VN', {
                                style: 'currency',
                                currency: 'VND'
                            }).format(revenue.totalRevenue)}
                            icon={<CurrencyIcon />}
                            trend={`${revenue.count} đơn thành công`}
                            color="bg-gradient-to-r from-blue-500 to-blue-600"
                        />

                        <DashboardCard
                            title="Tổng đơn hàng"
                            value={orders.length.toString()}
                            icon={<OrderIcon />}
                            trend={`${orders.filter(o => o.status === 'completed').length} hoàn thành`}
                            color="bg-gradient-to-r from-green-500 to-green-600"
                        />

                        <DashboardCard
                            title="Người dùng"
                            value={users.length.toString()}
                            icon={<UserIcon />}
                            trend={`${users.filter(u => u.roles.includes('customer')).length} khách hàng`}
                            color="bg-gradient-to-r from-purple-500 to-purple-600"
                        />

                        <DashboardCard
                            title="Sản phẩm"
                            value={products.total.toString()}
                            icon={<ProductIcon />}
                            trend={`${products.newCount} sản phẩm mới`}
                            color="bg-gradient-to-r from-orange-500 to-orange-600"
                        />
                    </>
                )}
            </div>

            {/* Đơn hàng gần đây */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 mb-8">
                <div className="p-6">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-xl font-bold text-gray-800">Đơn hàng gần đây</h2>
                        <button className="text-sm text-blue-600 hover:text-blue-800 transition-colors flex items-center"
                            onClick={handleViewAllOrders}>
                            Xem tất cả
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="min-w-full">
                            <thead>
                                <tr className="bg-gray-50 border-b border-gray-200">
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Mã ĐH</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Khách hàng</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tổng tiền</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Trạng thái</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ngày đặt</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                {loading ? (
                                    // Skeleton loading cho bảng
                                    Array(5).fill().map((_, index) => (
                                        <tr key={index}>
                                            <td colSpan="6" className="px-6 py-4">
                                                <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
                                            </td>
                                        </tr>
                                    ))
                                ) : orders.length === 0 ? (
                                    <tr>
                                        <td colSpan="6" className="px-6 py-4 text-center text-gray-500">
                                            Không có đơn hàng nào
                                        </td>
                                    </tr>
                                ) : (
                                    orders.map((order) => (
                                        <motion.tr
                                            key={order.id}
                                            className="hover:bg-gray-50 transition-colors"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <td className="px-6 py-4 whitespace-nowrap font-medium">#{order.id}</td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="flex items-center">
                                                    <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 mr-2">
                                                        {order.shipping.recipient.name.charAt(0)}
                                                    </div>
                                                    <span>{order.shipping.recipient.name}</span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-800">
                                                {new Intl.NumberFormat('vi-VN', {
                                                    style: 'currency',
                                                    currency: 'VND'
                                                }).format(order.pricing.final_price)}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span className={`px-3 py-1 rounded-full text-xs font-medium ${getOrderStatusColor(order.status)}`}>
                                                    {getOrderStatusText(order.status)}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-gray-600">
                                                {new Date(order.dates.created_at).toLocaleDateString('vi-VN')}
                                            </td> 
                                        </motion.tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* Phần biểu đồ thống kê */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <h3 className="text-lg font-semibold mb-4">Doanh thu theo tháng</h3>
                    <div className="h-80">
                        {loading ? (
                            <div className="h-full flex items-center justify-center">
                                <div className="w-16 h-16 border-4 border-gray-200 border-t-blue-500 rounded-full animate-spin"></div>
                            </div>
                        ) : (
                            <Bar
                                data={getRevenueChartData(orders)}
                                options={{
                                    responsive: true,
                                    maintainAspectRatio: false,
                                    plugins: {
                                        legend: {
                                            position: 'top',
                                        },
                                        title: {
                                            display: false
                                        },
                                    },
                                    scales: {
                                        y: {
                                            beginAtZero: true,
                                            ticks: {
                                                callback: function (value) {
                                                    return new Intl.NumberFormat('vi-VN', {
                                                        style: 'currency',
                                                        currency: 'VND',
                                                        maximumFractionDigits: 0
                                                    }).format(value);
                                                }
                                            }
                                        }
                                    }
                                }}
                            />
                        )}
                    </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <h3 className="text-lg font-semibold mb-4">Phân bổ đơn hàng</h3>
                    <div className="h-80">
                        {loading ? (
                            <div className="h-full flex items-center justify-center">
                                <div className="w-16 h-16 border-4 border-gray-200 border-t-blue-500 rounded-full animate-spin"></div>
                            </div>
                        ) : orders.length > 0 ? (
                            <Doughnut
                                data={getOrderStatusDistribution(orders)}
                                options={{
                                    responsive: true,
                                    maintainAspectRatio: false,
                                    plugins: {
                                        legend: {
                                            position: 'right',
                                            labels: {
                                                font: {
                                                    family: 'Inter, system-ui, sans-serif',
                                                    size: 12
                                                },
                                                padding: 20,
                                                usePointStyle: true,
                                                pointStyle: 'circle'
                                            }
                                        },
                                        tooltip: {
                                            callbacks: {
                                                label: function (context) {
                                                    const label = context.label || '';
                                                    const value = context.raw || 0;
                                                    const total = context.dataset.data.reduce((acc, val) => acc + val, 0);
                                                    const percentage = Math.round((value / total) * 100);
                                                    return `${label}: ${value} đơn (${percentage}%)`;
                                                }
                                            }
                                        }
                                    }
                                }}
                            />
                        ) : (
                            <div className="h-full flex items-center justify-center text-gray-500">
                                Không có dữ liệu
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

// Components
const DashboardCard = ({ title, value, icon, trend, color }) => {
    return (
        <motion.div
            className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
        >
            <div className="flex items-center justify-between mb-4">
                <h3 className="text-gray-600 text-sm font-medium">{title}</h3>
                <span className={`p-3 rounded-full ${color} text-white`}>
                    {icon}
                </span>
            </div>
            <div className="flex flex-col">
                <div className="text-3xl font-bold mb-2 text-gray-800">{value}</div>
                <div className="text-xs text-gray-500 flex items-center">
                    <span className="mr-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        </svg>
                    </span>
                    {trend}
                </div>
            </div>
        </motion.div>
    );
};

// Icons
const CurrencyIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

const OrderIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
    </svg>
);

const UserIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
);

const ProductIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
    </svg>
);

export default Dashboard;
