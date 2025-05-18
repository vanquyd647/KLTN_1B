import React, { useState, useEffect } from 'react';
import { revenueApi } from '../utils/apiClient';
import { Line, Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const Statistics = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [viewMode, setViewMode] = useState('all'); // all, daily, monthly
    const [salesStats, setSalesStats] = useState({
        overall: [],
        byDate: []
    });

    const [stats, setStats] = useState({
        overall: {
            revenues: [],
            totalRevenue: 0,
            count: 0
        },
        daily: {
            date: '',
            revenues: [],
            totalAmount: 0,
            count: 0
        },
        monthly: {
            year: 0,
            month: 0,
            revenues: [],
            totalAmount: 0,
            count: 0
        }
    });

    const [dateFilter, setDateFilter] = useState(() => {
        const today = new Date();
        const startOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
        return {
            startDate: startOfMonth.toISOString().split('T')[0],
            endDate: today.toISOString().split('T')[0]
        };
    });

    const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
    const [selectedMonth, setSelectedMonth] = useState({
        year: new Date().getFullYear(),
        month: new Date().getMonth() + 1
    });

    // Utility functions
    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleString('vi-VN', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    const formatCurrency = (amount) => {
        return new Intl.NumberFormat('vi-VN', {
            style: 'currency',
            currency: 'VND'
        }).format(amount || 0);
    };

    const paymentMethodLabels = {
        'cash_on_delivery': 'Thanh toán khi nhận hàng',
        'payos': 'PayOS'
    };

    // Fetch functions
    const fetchAllStats = async () => {
        try {
            setLoading(true);
            setError(null);

            let responses;

            switch (viewMode) {
                case 'daily':
                    responses = await revenueApi.getDailyRevenue(selectedDate);
                    if (responses.data.code === 200) {
                        setStats(prev => ({
                            ...prev,
                            daily: {
                                date: selectedDate,
                                revenues: responses.data.data.revenues || [],
                                totalAmount: responses.data.data.totalAmount || 0,
                                count: responses.data.data.count || 0
                            }
                        }));
                    }
                    break;

                case 'monthly':
                    responses = await revenueApi.getMonthlyRevenue(
                        selectedMonth.year,
                        selectedMonth.month
                    );
                    if (responses.data.code === 200) {
                        setStats(prev => ({
                            ...prev,
                            monthly: {
                                year: selectedMonth.year,
                                month: selectedMonth.month,
                                revenues: responses.data.data.revenues || [],
                                totalAmount: responses.data.data.totalAmount || 0,
                                count: responses.data.data.count || 0
                            }
                        }));
                    }
                    break;

                default: // 'all'
                    responses = await revenueApi.getRevenueStats({
                        startDate: dateFilter.startDate,
                        endDate: dateFilter.endDate
                    });
                    if (responses.data.code === 200) {
                        setStats(prev => ({
                            ...prev,
                            overall: {
                                revenues: responses.data.data.revenues || [],
                                totalRevenue: responses.data.data.totalRevenue || 0,
                                count: responses.data.data.count || 0
                            }
                        }));
                    }
                    break;
            }
        } catch (error) {
            console.error('Error fetching stats:', error);
            setError(error.message || 'Không thể tải dữ liệu thống kê');
        } finally {
            setLoading(false);
        }
    };

    const fetchSalesStats = async () => {
        try {
            if (viewMode === 'all') {
                const response = await revenueApi.getSalesStatistics();
                setSalesStats(prev => ({
                    ...prev,
                    overall: response.data || []
                }));
            } else {
                const response = await revenueApi.getSalesByDateRange(
                    dateFilter.startDate,
                    dateFilter.endDate
                );
                setSalesStats(prev => ({
                    ...prev,
                    byDate: response.data || []
                }));
            }
        } catch (error) {
            console.error('Error fetching sales stats:', error);
            setError(error.message);
        }
    };

    useEffect(() => {
        Promise.all([fetchAllStats(), fetchSalesStats()]);
    }, [viewMode, dateFilter, selectedDate, selectedMonth]);

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setDateFilter(prev => {
            const newFilter = {
                ...prev,
                [name]: value
            };

            if (name === 'startDate' && newFilter.startDate > newFilter.endDate) {
                newFilter.endDate = newFilter.startDate;
            }
            if (name === 'endDate' && newFilter.endDate < newFilter.startDate) {
                newFilter.startDate = newFilter.endDate;
            }

            return newFilter;
        });
    };

    // Chart data functions
    const getChartData = () => {
        let data;
        switch (viewMode) {
            case 'daily':
                data = stats.daily.revenues;
                break;
            case 'monthly':
                data = stats.monthly.revenues;
                break;
            default:
                data = stats.overall.revenues;
        }

        return {
            labels: data.map(r => formatDate(r.created_at)),
            datasets: [{
                label: 'Doanh thu',
                data: data.map(r => parseFloat(r.amount)),
                borderColor: 'rgb(59, 130, 246)',
                backgroundColor: 'rgba(59, 130, 246, 0.1)',
                tension: 0.1,
                fill: true
            }]
        };
    };

    const getMonthlyChartData = () => {
        const monthlyData = {};
        
        stats.overall.revenues.forEach(revenue => {
            const date = new Date(revenue.created_at);
            const monthKey = `${date.getFullYear()}-${date.getMonth() + 1}`;
            
            if (!monthlyData[monthKey]) {
                monthlyData[monthKey] = 0;
            }
            monthlyData[monthKey] += parseFloat(revenue.amount);
        });

        const sortedMonths = Object.keys(monthlyData).sort();

        return {
            labels: sortedMonths.map(month => {
                const [year, monthNum] = month.split('-');
                return `Tháng ${monthNum}/${year}`;
            }),
            datasets: [{
                label: 'Doanh thu theo tháng',
                data: sortedMonths.map(month => monthlyData[month]),
                borderColor: 'rgb(59, 130, 246)',
                backgroundColor: '#1e40af',
                tension: 0.1,
                fill: true
            }]
        };
    };

    // Component for Sales Statistics
    const SalesStatisticsSection = () => {
        const data = viewMode === 'all' ? salesStats.overall : salesStats.byDate;

        return (
            <div className="bg-white rounded-lg shadow overflow-hidden mt-6">
                <div className="p-6">
                    <h3 className="text-lg font-semibold mb-4">Thống kê sản phẩm bán chạy</h3>
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                                        Sản phẩm
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                                        Danh mục
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                                        Màu sắc
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                                        Kích thước
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                                        Số lượng bán
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                                        Doanh thu
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {data.map((item, index) => (
                                    <tr key={`${item.product_id}-${item.color.name}-${item.size}`} 
                                        className="hover:bg-gray-50">
                                        <td className="px-6 py-4">
                                            <div className="flex items-center">
                                                {item.color.image && (
                                                    <img 
                                                        src={item.color.image} 
                                                        alt={item.product_name}
                                                        className="w-12 h-12 object-cover rounded mr-3"
                                                    />
                                                )}
                                                <div>
                                                    <div className="font-medium">{item.product_name}</div>
                                                    <div className="text-sm text-gray-500">{item.product_slug}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            {item.categories.join(', ')}
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center">
                                                <div 
                                                    className="w-4 h-4 rounded-full mr-2" 
                                                    style={{ backgroundColor: item.color.hex_code }}
                                                />
                                                {item.color.name}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">{item.size}</td>
                                        <td className="px-6 py-4 font-medium">
                                            {item.total_quantity}
                                        </td>
                                        <td className="px-6 py-4 font-medium">
                                            {formatCurrency(item.total_revenue)}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
            </div>
        );
    }

    if (error) {
        return <div className="text-red-500 p-4">{error}</div>;
    }

    return (
        <div className="space-y-6 p-6">
            {/* View Mode Tabs */}
            <div className="flex space-x-4 mb-6">
                <button
                    onClick={() => setViewMode('all')}
                    className={`px-4 py-2 rounded ${viewMode === 'all' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                >
                    Tổng quan
                </button>
                <button
                    onClick={() => setViewMode('daily')}
                    className={`px-4 py-2 rounded ${viewMode === 'daily' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                >
                    Theo ngày
                </button>
                <button
                    onClick={() => setViewMode('monthly')}
                    className={`px-4 py-2 rounded ${viewMode === 'monthly' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                >
                    Theo tháng
                </button>
            </div>

            {/* Filters */}
            {viewMode === 'all' && (
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <h2 className="text-2xl font-bold">Thống kê doanh thu</h2>
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="flex flex-col">
                            <label className="text-sm text-gray-600 mb-1">Từ ngày</label>
                            <input
                                type="date"
                                name="startDate"
                                value={dateFilter.startDate}
                                onChange={handleFilterChange}
                                className="border rounded-lg px-3 py-2"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label className="text-sm text-gray-600 mb-1">Đến ngày</label>
                            <input
                                type="date"
                                name="endDate"
                                value={dateFilter.endDate}
                                onChange={handleFilterChange}
                                className="border rounded-lg px-3 py-2"
                            />
                        </div>
                    </div>
                </div>
            )}

            {viewMode === 'daily' && (
                <div className="mb-6">
                    <label className="block text-sm font-medium mb-2">Chọn ngày:</label>
                    <input
                        type="date"
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                        className="border rounded px-3 py-2"
                    />
                </div>
            )}

            {viewMode === 'monthly' && (
                <div className="mb-6 flex space-x-4">
                    <div>
                        <label className="block text-sm font-medium mb-2">Năm:</label>
                        <select
                            value={selectedMonth.year}
                            onChange={(e) => setSelectedMonth(prev => ({ ...prev, year: parseInt(e.target.value) }))}
                            className="border rounded px-3 py-2"
                        >
                            {Array.from({ length: 5 }, (_, i) => new Date().getFullYear() - i).map(year => (
                                <option key={year} value={year}>{year}</option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-2">Tháng:</label>
                        <select
                            value={selectedMonth.month}
                            onChange={(e) => setSelectedMonth(prev => ({ ...prev, month: parseInt(e.target.value) }))}
                            className="border rounded px-3 py-2"
                        >
                            {Array.from({ length: 12 }, (_, i) => i + 1).map(month => (
                                <option key={month} value={month}>{month}</option>
                            ))}
                        </select>
                    </div>
                </div>
            )}

            {/* Statistics Summary */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow">
                    <h3 className="text-lg font-semibold mb-2">
                        {viewMode === 'daily' ? 'Doanh thu ngày' :
                            viewMode === 'monthly' ? `Doanh thu tháng ${selectedMonth.month}/${selectedMonth.year}` :
                                'Tổng doanh thu'}
                    </h3>
                    <p className="text-3xl font-bold text-blue-600">
                        {viewMode === 'daily' ? formatCurrency(stats.daily.totalAmount) :
                            viewMode === 'monthly' ? formatCurrency(stats.monthly.totalAmount) :
                                formatCurrency(stats.overall.totalRevenue)}
                    </p>
                    <p className="text-sm text-gray-500 mt-2">
                        {viewMode === 'daily' ? `${stats.daily.count} đơn hàng` :
                            viewMode === 'monthly' ? `${stats.monthly.count} đơn hàng` :
                                `${stats.overall.count} đơn hàng`}
                    </p>
                </div>
            </div>

            {/* Revenue Charts */}
            <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-semibold mb-4">Biểu đồ doanh thu</h3>
                <div className="h-[400px]">
                    <Line
                        data={getChartData()}
                        options={{
                            responsive: true,
                            maintainAspectRatio: false,
                            plugins: {
                                legend: {
                                    position: 'top',
                                },
                                title: {
                                    display: true,
                                    text: 'Biểu đồ doanh thu theo thời gian'
                                }
                            },
                            scales: {
                                y: {
                                    beginAtZero: true,
                                    ticks: {
                                        callback: function(value) {
                                            return formatCurrency(value);
                                        }
                                    }
                                }
                            }
                        }}
                    />
                </div>
            </div>

            {/* Monthly Revenue Chart (Only for 'all' view) */}
            {viewMode === 'all' && (
                <div className="bg-white p-6 rounded-lg shadow">
                    <h3 className="text-lg font-semibold mb-4">Biểu đồ doanh thu theo tháng</h3>
                    <div className="h-[400px]">
                        <Bar
                            data={getMonthlyChartData()}
                            options={{
                                responsive: true,
                                maintainAspectRatio: false,
                                plugins: {
                                    legend: {
                                        position: 'top',
                                    },
                                    title: {
                                        display: true,
                                        text: 'Doanh thu theo tháng'
                                    }
                                },
                                scales: {
                                    y: {
                                        beginAtZero: true,
                                        ticks: {
                                            callback: function(value) {
                                                return formatCurrency(value);
                                            }
                                        }
                                    }
                                }
                            }}
                        />
                    </div>
                </div>
            )}

            {/* Sales Statistics Section */}
            <SalesStatisticsSection />

            {/* Transaction Details */}
            <div className="bg-white rounded-lg shadow overflow-hidden">
                <div className="flex justify-between items-center p-6">
                    <h3 className="text-lg font-semibold">Chi tiết giao dịch</h3>
                    <p className="text-sm text-gray-500">
                        {viewMode === 'daily' ? `${stats.daily.revenues.length} giao dịch` :
                            viewMode === 'monthly' ? `${stats.monthly.revenues.length} giao dịch` :
                                `${stats.overall.revenues.length} giao dịch`}
                    </p>
                </div>
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                                    Thời gian
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                                    Mã đơn hàng
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                                    Số tiền
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                                    Phương thức
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                                    Trạng thái
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {(viewMode === 'daily' ? stats.daily.revenues :
                                viewMode === 'monthly' ? stats.monthly.revenues :
                                    stats.overall.revenues).map((revenue) => (
                                        <tr key={revenue.id} className="hover:bg-gray-50">
                                            <td className="px-6 py-4 whitespace-nowrap text-sm">
                                                {formatDate(revenue.created_at)}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm">
                                                #{revenue.order?.id}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                                {formatCurrency(revenue.amount)}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm">
                                                {paymentMethodLabels[revenue.payment?.payment_method] || 'N/A'}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span className={`px-2 py-1 text-xs font-semibold rounded-full 
                                                    ${revenue.payment?.payment_status === 'paid'
                                                        ? 'bg-green-100 text-green-800'
                                                        : 'bg-yellow-100 text-yellow-800'
                                                    }`}>
                                                    {revenue.payment?.payment_status === 'paid' ? 'Đã thanh toán' : 'Chờ thanh toán'}
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Statistics;
