import { useState } from 'react';

// Component hiển thị trạng thái đơn hàng
const StatusBadge = ({ status }) => {
    const getStatusColor = () => {
        switch (status?.toLowerCase()) {
            case 'pending':
                return 'bg-yellow-100 text-yellow-800';
            case 'processing':
                return 'bg-blue-100 text-blue-800';
            case 'shipping':
                return 'bg-indigo-100 text-indigo-800';
            case 'completed':
                return 'bg-green-100 text-green-800';
            case 'cancelled':
                return 'bg-red-100 text-red-800';
            default:
                return 'bg-gray-100 text-gray-800';
        }
    };

    const getStatusText = () => {
        switch (status?.toLowerCase()) {
            case 'pending':
                return 'Chờ xử lý';
            case 'processing':
                return 'Đang xử lý';
            case 'shipping':
                return 'Đang giao hàng';
            case 'completed':
                return 'Hoàn thành';
            case 'cancelled':
                return 'Đã hủy';
            default:
                return 'Không xác định';
        }
    };

    return (
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor()}`}>
            {getStatusText()}
        </span>
    );
};

// Component hiển thị trạng thái thanh toán
const PaymentStatusBadge = ({ status }) => {
    const getPaymentStatusColor = () => {
        switch (status?.toLowerCase()) {
            case 'paid':
                return 'bg-green-100 text-green-800';
            case 'pending':
                return 'bg-yellow-100 text-yellow-800';
            case 'failed':
                return 'bg-red-100 text-red-800';
            default:
                return 'bg-gray-100 text-gray-800';
        }
    };

    const getPaymentStatusText = () => {
        switch (status?.toLowerCase()) {
            case 'paid':
                return 'Đã thanh toán';
            case 'pending':
                return 'Chờ thanh toán';
            case 'failed':
                return 'Thanh toán thất bại';
            default:
                return 'Không xác định';
        }
    };

    return (
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPaymentStatusColor()}`}>
            {getPaymentStatusText()}
        </span>
    );
};

// Component hiển thị thông tin đơn hàng dạng card
const OrderCard = ({ order, onViewDetail }) => {
    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('vi-VN', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    const formatPrice = (price) => {
        return new Intl.NumberFormat('vi-VN', {
            style: 'currency',
            currency: 'VND'
        }).format(price);
    };

    return (
        <div className="border rounded-lg p-4 hover:shadow-md transition duration-200">
            {/* Header */}
            <div className="flex justify-between items-start mb-4">
                <div>
                    <p className="font-medium text-lg">Đơn hàng #{order.id}</p>
                    <p className="text-sm text-gray-600">{formatDate(order.dates.created_at)}</p>
                </div>
                <StatusBadge status={order.status} />
            </div>

            {/* Preview sản phẩm */}
            <div className="mb-4">
                {order.items.slice(0, 2).map((item, index) => (
                    <div key={index} className="flex items-center gap-4 mb-2">
                        <img
                            src={item.variant.color.image}
                            className="w-16 h-16 object-cover rounded"
                            alt={item.product.name}
                        />
                        <div className="flex-1">
                            <p className="font-medium truncate">{item.product.name}</p>
                            <p className="text-sm text-gray-600">
                                Size: {item.variant.size} | Màu: {item.variant.color.name}
                            </p>
                            <p className="text-sm text-gray-600">
                                {item.quantity} x {formatPrice(item.price)}
                            </p>
                        </div>
                    </div>
                ))}
                {order.items.length > 2 && (
                    <p className="text-sm text-gray-500 mt-2">
                        +{order.items.length - 2} sản phẩm khác
                    </p>
                )}
            </div>

            {/* Footer */}
            <div className="flex justify-between items-center border-t pt-3">
                <div>
                    <p className="text-sm text-gray-600">Tổng tiền</p>
                    <p className="font-medium text-lg text-blue-600">
                        {formatPrice(order.pricing.final_price)}
                    </p>
                </div>
                <button
                    onClick={() => onViewDetail(order)}
                    className="px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-lg transition"
                >
                    Xem chi tiết
                </button>
            </div>
        </div>
    );
};

// Component Modal chi tiết đơn hàng
const OrderDetail = ({ order, onClose }) => {
    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('vi-VN', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    const formatPrice = (price) => {
        return new Intl.NumberFormat('vi-VN', {
            style: 'currency',
            currency: 'VND'
        }).format(price);
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
            <div className="bg-white rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto m-4">
                {/* Header */}
                <div className="sticky top-0 bg-white p-4 border-b flex justify-between items-center">
                    <div>
                        <h3 className="text-lg font-medium">Chi tiết đơn hàng #{order.id}</h3>
                        <StatusBadge status={order.status} />
                    </div>
                    <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                <div className="p-6 space-y-6">
                    {/* Thông tin người nhận */}
                    <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-medium mb-3">Thông tin người nhận</h4>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <p className="text-sm text-gray-600">Họ tên</p>
                                <p className="font-medium">{order.shipping.recipient.name}</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-600">Số điện thoại</p>
                                <p className="font-medium">{order.shipping.recipient.phone}</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-600">Email</p>
                                <p className="font-medium">{order.shipping.recipient.email}</p>
                            </div>
                            <div className="col-span-2">
                                <p className="text-sm text-gray-600">Địa chỉ</p>
                                <p className="font-medium">
                                    {`${order.shipping.recipient.address.street}, ${order.shipping.recipient.address.ward}, 
                                    ${order.shipping.recipient.address.district}, ${order.shipping.recipient.address.city}`}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Danh sách sản phẩm */}
                    <div>
                        <h4 className="font-medium mb-3">Sản phẩm</h4>
                        <div className="space-y-3">
                            {order.items.map((item, index) => (
                                <div key={index} className="flex gap-4 p-3 bg-gray-50 rounded">
                                    <img
                                        src={item.variant.color.image}
                                        className="w-20 h-20 object-cover rounded"
                                        alt={item.product.name}
                                    />
                                    <div className="flex-1">
                                        <p className="font-medium">{item.product.name}</p>
                                        <p className="text-sm text-gray-600">
                                            Size: {item.variant.size} | Màu: {item.variant.color.name}
                                        </p>
                                        <div className="flex justify-between mt-2">
                                            <p className="text-sm">Số lượng: {item.quantity}</p>
                                            <p className="font-medium">{formatPrice(item.price)}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Thông tin vận chuyển và thanh toán */}
                    <div className="grid grid-cols-2 gap-6">
                        <div className="bg-gray-50 p-4 rounded-lg">
                            <h4 className="font-medium mb-3">Thông tin vận chuyển</h4>
                            <p className="text-sm text-gray-600">Đơn vị vận chuyển</p>
                            <p className="font-medium mb-2">{order.shipping.carrier}</p>
                            <p className="text-sm text-gray-600">Phí vận chuyển</p>
                            <p className="font-medium">{formatPrice(order.shipping.shipping_fee)}</p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg">
                            <h4 className="font-medium mb-3">Thông tin thanh toán</h4>
                            <p className="text-sm text-gray-600">Phương thức</p>
                            <p className="font-medium mb-2">
                                {order.payment.method === 'cash_on_delivery' ? 'Thanh toán khi nhận hàng' : order.payment.method}
                            </p>
                            <p className="text-sm text-gray-600">Trạng thái</p>
                            <PaymentStatusBadge status={order.payment.status} />
                        </div>
                    </div>

                    {/* Tổng quan giá */}
                    <div className="border-t pt-4">
                        <div className="space-y-2">
                            <div className="flex justify-between">
                                <span className="text-gray-600">Tổng tiền hàng</span>
                                <span>{formatPrice(order.pricing.original_price)}</span>
                            </div>
                            {parseFloat(order.pricing.discount_amount) > 0 && (
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Giảm giá</span>
                                    <span className="text-red-600">
                                        -{formatPrice(order.pricing.discount_amount)}
                                    </span>
                                </div>
                            )}
                            <div className="flex justify-between">
                                <span className="text-gray-600">Phí vận chuyển</span>
                                <span>{formatPrice(order.shipping.shipping_fee)}</span>
                            </div>
                            <div className="flex justify-between font-medium text-lg pt-2 border-t">
                                <span>Tổng cộng</span>
                                <span className="text-blue-600">{formatPrice(order.pricing.final_price)}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Component chính ProfileInterface
export default function ProfileInterface({
    user,
    handleLogout,
    selectedTab,
    setSelectedTab,
    orders,
    orderLoading
}) {
    const [selectedOrder, setSelectedOrder] = useState(null);

    return (
        <div className="container mx-auto px-4 py-6">
            <h1 className="text-2xl font-bold mb-4">Hồ sơ của tôi</h1>
            <div className="flex flex-col md:flex-row gap-6">
                {/* Sidebar */}
                <div className="md:w-1/4 bg-white p-4 rounded shadow-md">
                    <button
                        className={`w-full text-left px-4 py-2 mb-2 rounded transition duration-200 
                            ${selectedTab === 'info'
                                ? 'bg-blue-600 text-white'
                                : 'bg-gray-100 hover:bg-gray-200'
                            }`}
                        onClick={() => setSelectedTab('info')}
                    >
                        Thông tin cá nhân
                    </button>
                    <button
                        className={`w-full text-left px-4 py-2 mb-2 rounded transition duration-200 
                            ${selectedTab === 'orders'
                                ? 'bg-blue-600 text-white'
                                : 'bg-gray-100 hover:bg-gray-200'
                            }`}
                        onClick={() => setSelectedTab('orders')}
                    >
                        Đơn hàng của tôi
                    </button>
                    <button
                        className={`w-full text-left px-4 py-2 mb-2 rounded transition duration-200 
                            ${selectedTab === 'address'
                                ? 'bg-blue-600 text-white'
                                : 'bg-gray-100 hover:bg-gray-200'
                            }`}
                        onClick={() => setSelectedTab('address')}
                    >
                        Sổ địa chỉ
                    </button>
                    <button
                        className="w-full bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 
                            transition duration-200 mt-6"
                        onClick={handleLogout}
                    >
                        Đăng xuất
                    </button>
                </div>

                {/* Main Content */}
                <div className="md:w-3/4 bg-white p-6 rounded shadow-md">
                    {/* Personal Info Tab */}
                    {selectedTab === 'info' && user && (
                        <div className="space-y-4">
                            <h2 className="text-xl font-semibold mb-6">Thông tin cá nhân</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <p className="text-gray-600">Họ</p>
                                    <p className="font-medium">{user.firstname || 'Chưa cập nhật'}</p>
                                </div>
                                <div className="space-y-2">
                                    <p className="text-gray-600">Tên</p>
                                    <p className="font-medium">{user.lastname || 'Chưa cập nhật'}</p>
                                </div>
                                <div className="space-y-2">
                                    <p className="text-gray-600">Email</p>
                                    <p className="font-medium">{user.email || 'Chưa cập nhật'}</p>
                                </div>
                                <div className="space-y-2">
                                    <p className="text-gray-600">Số điện thoại</p>
                                    <p className="font-medium">{user.phone || 'Chưa cập nhật'}</p>
                                </div>
                                <div className="space-y-2">
                                    <p className="text-gray-600">Giới tính</p>
                                    <p className="font-medium">{user.gender || 'Chưa cập nhật'}</p>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Orders Tab */}
                    {selectedTab === 'orders' && (
                        <div>
                            <h2 className="text-xl font-semibold mb-6">Đơn hàng của tôi</h2>
                            {orderLoading ? (
                                <div className="flex justify-center items-center h-40">
                                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                                </div>
                            ) : orders?.data?.orders?.length > 0 ? (
                                <div className="space-y-4">
                                    {orders.data.orders.map((order) => (
                                        <OrderCard
                                            key={order.id}
                                            order={order}
                                            onViewDetail={setSelectedOrder}
                                        />
                                    ))}
                                </div>
                            ) : (
                                <div className="text-center py-8 text-gray-500">
                                    <p>Bạn chưa có đơn hàng nào</p>
                                </div>
                            )}

                            {selectedOrder && (
                                <OrderDetail
                                    order={selectedOrder}
                                    onClose={() => setSelectedOrder(null)}
                                />
                            )}
                        </div>
                    )}

                    {/* Address Tab */}
                    {selectedTab === 'address' && (
                        <div>
                            <h2 className="text-xl font-semibold mb-6">Sổ địa chỉ</h2>
                            <div className="text-center py-8 text-gray-500">
                                <p>Chưa có địa chỉ nào được lưu</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
