// components/OrderManagement.js
import React, { useEffect, useState } from 'react';
import { orderApi, paymentApi } from '../utils/apiClient';


const OrderManagement = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [filters, setFilters] = useState({
    status: '',
    startDate: '',
    endDate: ''
  });

  const statusLabels = {
    'pending': 'Chờ xác nhận',
    'in_payment': 'Đang thanh toán',
    'in_progress': 'Đang xử lý',
    'shipping': 'Đang giao hàng',
    'completed': 'Hoàn thành',
    'cancelled': 'Đã hủy',
    'failed': 'Thất bại'
  };

  const statusColors = {
    'pending': 'bg-yellow-100 text-yellow-800',
    'in_payment': 'bg-blue-100 text-blue-800',
    'in_progress': 'bg-purple-100 text-purple-800',
    'shipping': 'bg-indigo-100 text-indigo-800',
    'completed': 'bg-green-100 text-green-800',
    'cancelled': 'bg-red-100 text-red-800',
    'failed': 'bg-gray-100 text-gray-800'
  };

  const paymentMethods = {
    'payos': 'PayOS',
    'cash_on_delivery': 'COD'
  };

  const paymentStatuses = {
    'pending': 'Chờ thanh toán',
    'processing': 'Đang xử lý',
    'paid': 'Đã thanh toán',
    'cancelled': 'Đã hủy'
  };

  const paymentStatusColors = {
    'pending': 'bg-yellow-100 text-yellow-800',
    'processing': 'bg-blue-100 text-blue-800',
    'paid': 'bg-green-100 text-green-800',
    'cancelled': 'bg-red-100 text-red-800'
  };

  useEffect(() => {
    fetchOrders();
  }, [currentPage, filters]);

  const fetchOrders = async () => {
    try {
      setLoading(true);
      const response = await orderApi.getAllOrders({
        page: currentPage,
        limit: 10,
        ...filters
      });
      setOrders(response.data.orders);
      setTotalPages(response.data.pagination.totalPages);
    } catch (error) {
      setError('Không thể tải danh sách đơn hàng');
    } finally {
      setLoading(false);
    }
  };

  const handleStatusChange = async (orderId, newStatus) => {
    try {
      await orderApi.updateOrderStatus(orderId, newStatus);
      fetchOrders();
    } catch (error) {
      setError('Không thể cập nhật trạng thái đơn hàng');
    }
  };

  const handlePaymentUpdate = async (orderId, paymentMethod, paymentStatus) => {
    try {
      console.log('Sending payment update:', {
        order_id: orderId,
        payment_method: paymentMethod,
        payment_status: paymentStatus
      });

      await paymentApi.updatePaymentMethodStatus({
        order_id: orderId, // Sửa tên field từ orderId thành order_id
        payment_method: paymentMethod,
        payment_status: paymentStatus
      });

      fetchOrders(); // Refresh danh sách đơn hàng
    } catch (error) {
      console.error('Payment update error:', error);
      setError('Không thể cập nhật thông tin thanh toán');
    }
  };


  const formatAddress = (address) => {
    return `${address.street}, ${address.ward}, ${address.district}, ${address.city}`;
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleString('vi-VN');
  };

  if (loading) return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
    </div>
  );

  return (
    <div className="p-6 max-w-full mx-auto">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Quản lý đơn hàng</h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <select
            name="status"
            value={filters.status}
            onChange={(e) => setFilters({ ...filters, status: e.target.value })}
            className="border rounded-lg px-3 py-2"
          >
            <option value="">Tất cả trạng thái</option>
            {Object.entries(statusLabels).map(([value, label]) => (
              <option key={value} value={value}>{label}</option>
            ))}
          </select>

          <input
            type="date"
            name="startDate"
            value={filters.startDate}
            onChange={(e) => setFilters({ ...filters, startDate: e.target.value })}
            className="border rounded-lg px-3 py-2"
          />

          <input
            type="date"
            name="endDate"
            value={filters.endDate}
            onChange={(e) => setFilters({ ...filters, endDate: e.target.value })}
            className="border rounded-lg px-3 py-2"
          />
        </div>
      </div>

      <div className="bg-white rounded-lg shadow overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Mã đơn</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Thông tin khách hàng</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Sản phẩm</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Tổng tiền</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Thanh toán</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Trạng thái</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Ngày đặt</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {orders.map((order) => (
              <tr key={order.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  #{order.id}
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm">
                    <p className="font-medium">{order.shipping.recipient.name}</p>
                    <p>{order.shipping.recipient.phone}</p>
                    <p className="text-gray-500">{order.shipping.recipient.email}</p>
                    <p className="text-gray-500 text-xs">
                      {formatAddress(order.shipping.recipient.address)}
                    </p>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm">
                    {order.items.map((item, index) => (
                      <div key={index} className="mb-2">
                        <p className="font-medium">{item.product.name}</p>
                        <p className="text-gray-500">
                          {item.variant.color.name} - {item.variant.size} x {item.quantity}
                        </p>
                      </div>
                    ))}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm">
                    <p className="font-medium">
                      {Number(order.pricing.final_price).toLocaleString('vi-VN')}đ
                    </p>
                    <p className="text-gray-500">
                      Phí ship: {order.shipping.shipping_fee.toLocaleString('vi-VN')}đ
                    </p>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm space-y-2">
                    {/* Dropdown chọn phương thức thanh toán */}
                    <select
                      value={order.payment.method}
                      onChange={(e) => handlePaymentUpdate(
                        order.id,
                        e.target.value,
                        order.payment.status
                      )}
                      className="block w-full border rounded px-2 py-1"
                    >
                      {Object.entries(paymentMethods).map(([value, label]) => (
                        <option key={value} value={value}>{label}</option>
                      ))}
                    </select>

                    {/* Dropdown chọn trạng thái thanh toán */}
                    <select
                      value={order.payment.status}
                      onChange={(e) => handlePaymentUpdate(
                        order.id,
                        order.payment.method,
                        e.target.value
                      )}
                      className={`block w-full rounded-full px-3 py-1 text-sm font-semibold ${paymentStatusColors[order.payment.status]
                        }`}
                    >
                      {Object.entries(paymentStatuses).map(([value, label]) => (
                        <option key={value} value={value}>{label}</option>
                      ))}
                    </select>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <select
                    value={order.status}
                    onChange={(e) => handleStatusChange(order.id, e.target.value)}
                    className={`rounded-full px-3 py-1 text-sm font-semibold ${statusColors[order.status]}`}
                  >
                    {Object.entries(statusLabels).map(([value, label]) => (
                      <option key={value} value={value}>{label}</option>
                    ))}
                  </select>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  {formatDate(order.dates.created_at)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="mt-4 flex justify-between items-center">
        <div>
          Trang {currentPage} / {totalPages}
        </div>
        <div className="flex space-x-2">
          <button
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className={`px-4 py-2 rounded ${currentPage === 1
              ? 'bg-gray-100 text-gray-400'
              : 'bg-blue-500 text-white hover:bg-blue-600'}`}
          >
            Trước
          </button>
          <button
            onClick={() => setCurrentPage(prev => prev + 1)}
            disabled={currentPage >= totalPages}
            className={`px-4 py-2 rounded ${currentPage >= totalPages
              ? 'bg-gray-100 text-gray-400'
              : 'bg-blue-500 text-white hover:bg-blue-600'}`}
          >
            Sau
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderManagement;
