// pages/TrackOrder.jsx
import React, { useState } from 'react';
import { orderTrackingApi } from '../utils/apiClient';
import { toast } from 'react-toastify';
import Layout from '@/components/Layout';

const OrderStatus = {
    pending: 'Chờ xác nhận',
    completed: 'Hoàn thành',
    cancelled: 'Đã hủy',
    failed: 'Thất bại',
    in_payment: 'Đang thanh toán',
    in_progress: 'Đang xử lý',
    shipping: 'Đang giao hàng'
};


const StatusBadge = ({ status }) => {
    const getStatusColor = (status) => {
        switch (status) {
            case 'pending':
                return 'bg-yellow-100 text-yellow-800';
            case 'completed':
                return 'bg-green-100 text-green-800';
            case 'cancelled':
                return 'bg-red-100 text-red-800';
            case 'failed':
                return 'bg-red-100 text-red-800';
            case 'in_payment':
                return 'bg-blue-100 text-blue-800';
            case 'in_progress':
                return 'bg-purple-100 text-purple-800';
            case 'shipping':
                return 'bg-indigo-100 text-indigo-800';
            default:
                return 'bg-gray-100 text-gray-800';
        }
    };

    return (
        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(status)}`}>
            {OrderStatus[status]}
        </span>
    );
};

const TrackOrder = () => {
    const [orderId, setOrderId] = useState('');
    const [identifier, setIdentifier] = useState('');
    const [orderData, setOrderData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({
        orderId: '',
        identifier: ''
    });

    const validateForm = () => {
        let isValid = true;
        const newErrors = {
            orderId: '',
            identifier: ''
        };

        // Validate mã đơn hàng
        if (!orderId.trim()) {
            newErrors.orderId = 'Vui lòng nhập mã đơn hàng';
            isValid = false;
        }

        // Validate email hoặc số điện thoại
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneRegex = /(84|0[3|5|7|8|9])+([0-9]{8})\b/;

        if (!identifier.trim()) {
            newErrors.identifier = 'Vui lòng nhập email hoặc số điện thoại';
            isValid = false;
        } else if (!emailRegex.test(identifier) && !phoneRegex.test(identifier)) {
            newErrors.identifier = 'Email hoặc số điện thoại không hợp lệ';
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        setLoading(true);
        try {
            const response = await orderTrackingApi.trackOrder(orderId, identifier);
            if (response.success) {
                setOrderData(response.data);
                toast.success(response.message);
            } else {
                toast.error(response.message);
            }
        } catch (error) {
            toast.error('Không thể tra cứu đơn hàng');
            setOrderData(null);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Layout>
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-2xl font-bold text-center mb-8">Tra Cứu Đơn Hàng</h1>

                <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-8">
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2">Mã đơn hàng</label>
                        <input
                            type="text"
                            value={orderId}
                            onChange={(e) => {
                                setOrderId(e.target.value);
                                if (errors.orderId) setErrors({ ...errors, orderId: '' });
                            }}
                            className={`w-full px-3 py-2 border rounded ${errors.orderId ? 'border-red-500' : ''}`}
                            required
                            onInvalid={(e) => e.target.setCustomValidity("Không được để trống")}
                            onInput={(e) => e.target.setCustomValidity("")}
                        />
                        {errors.orderId && (
                            <p className="text-red-500 text-sm mt-1">{errors.orderId}</p>
                        )}
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2">Email hoặc Số điện thoại</label>
                        <input
                            type="text"
                            value={identifier}
                            onChange={(e) => {
                                setIdentifier(e.target.value);
                                if (errors.identifier) setErrors({ ...errors, identifier: '' });
                            }}
                            className={`w-full px-3 py-2 border rounded ${errors.identifier ? 'border-red-500' : ''}`}
                            required
                            onInvalid={(e) => e.target.setCustomValidity("Không được để trống")}
                            onInput={(e) => e.target.setCustomValidity("")}
                        />
                        {errors.identifier && (
                            <p className="text-red-500 text-sm mt-1">{errors.identifier}</p>
                        )}
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-blue-700 text-white py-2 rounded hover:bg-blue-900 disabled:bg-gray-400"
                    >
                        {loading ? 'Đang tra cứu...' : 'Tra cứu'}
                    </button>
                </form>

                {orderData && (
                    <div className="max-w-6xl mx-auto bg-white rounded-lg shadow">
                        <h2 className="text-xl font-semibold p-6 border-b">
                            Thông tin đơn hàng #{orderData.orderInfo.orderId}
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Cột trái: Thông tin đơn hàng & người nhận */}
                            <div className="p-6 border-r">
                                {/* Thông tin đơn hàng */}
                                <div className="mb-8">
                                    <div className="space-y-4">
                                        <div>
                                            <p className="text-gray-600 mb-1">Trạng thái:</p>
                                            <StatusBadge status={orderData.orderInfo.orderStatus} />
                                        </div>
                                        <div>
                                            <p className="text-gray-600 mb-1">Ngày đặt:</p>
                                            <p className="font-medium">
                                                {new Date(orderData.orderInfo.orderDate).toLocaleDateString('vi-VN')}
                                            </p>
                                        </div>
                                        <div>
                                            <p className="text-gray-600 mb-1">Gía sản phẩm:</p>
                                            <p className="font-medium">
                                                {Number(orderData.orderInfo.originalPrice).toLocaleString('vi-VN')}đ
                                            </p>
                                        </div>
                                        {orderData.orderInfo.discountAmount > 0 && (
                                            <div>
                                                <p className="text-gray-600 mb-1">Giảm giá:</p>
                                                <p className="font-medium">
                                                    {Number(orderData.orderInfo.discountAmount).toLocaleString('vi-VN')}đ
                                                    {orderData.orderInfo.discountCode && ` (${orderData.orderInfo.discountCode})`}
                                                </p>
                                            </div>
                                        )}
                                        <div>
                                            <p className="text-gray-600 mb-1">Phí giao hàng:</p>
                                            <p className="font-medium">
                                                {Number(orderData.orderInfo.shippingFee).toLocaleString('vi-VN')}đ
                                            </p>
                                        </div>
                                        <div>
                                            <p className="text-gray-600 mb-1">Tổng thanh toán:</p>
                                            <p className="font-medium text-red-600">
                                                {Number(orderData.orderInfo.finalPrice).toLocaleString('vi-VN')}đ
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Thông tin người nhận */}
                                <div>
                                    <h3 className="font-semibold mb-4">Thông tin người nhận</h3>
                                    <div className="bg-gray-50 p-4 rounded space-y-2">
                                        <p><span className="text-gray-600">Họ tên:</span> {orderData.customerInfo.name}</p>
                                        <p><span className="text-gray-600">Email:</span> {orderData.customerInfo.email}</p>
                                        <p><span className="text-gray-600">Số điện thoại:</span> {orderData.customerInfo.phone}</p>
                                        <p><span className="text-gray-600">Địa chỉ:</span> {`${orderData.customerInfo.address.street}, 
                                            ${orderData.customerInfo.address.ward}, 
                                            ${orderData.customerInfo.address.district}, 
                                            ${orderData.customerInfo.address.city}, 
                                            ${orderData.customerInfo.address.country}`}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Cột phải: Danh sách sản phẩm */}
                            <div className="p-6">
                                <h3 className="font-semibold mb-4">Sản phẩm đã đặt</h3>
                                <div className="space-y-4">
                                    {orderData.items.map((item, index) => {
                                        const selectedColorImage = item.product.availableColors.find(
                                            color => color.id === item.selectedColor.id
                                        )?.image;

                                        return (
                                            <div key={index} className="border-b pb-4">
                                                <div className="flex items-center gap-4">
                                                    <img
                                                        src={selectedColorImage}
                                                        alt={item.product.name}
                                                        className="w-20 h-20 object-cover rounded"
                                                    />
                                                    <div className="flex-1">
                                                        <p className="font-medium">{item.product.name}</p>
                                                        <p className="text-sm text-gray-600">
                                                            Màu: {item.selectedColor.color} |
                                                            Size: {item.selectedSize.size}
                                                        </p>
                                                        <p className="text-sm">
                                                            {Number(item.orderedPrice).toLocaleString('vi-VN')}đ x
                                                            {item.orderedQuantity}
                                                        </p>
                                                        <p className="text-sm font-medium text-red-600">
                                                            = {(Number(item.orderedPrice) * item.orderedQuantity).toLocaleString('vi-VN')}đ
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </Layout>
    );
};

export default TrackOrder;
