import { useState, useEffect } from 'react';
import { addressApi } from '../../utils/apiClient';
import { FiEdit2 } from "react-icons/fi"; // Icon sửa
import { RiDeleteBinLine } from "react-icons/ri"; // Icon xóa
import { MdStars } from "react-icons/md"; // Icon mặc định


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
    userLoading,
    handleLogout,
    selectedTab,
    setSelectedTab,
    orders,
    orderLoading
}) {
    // Thêm vào component ProfileInterface
    const [addresses, setAddresses] = useState([]);
    const [addressLoading, setAddressLoading] = useState(false);
    const [showAddressForm, setShowAddressForm] = useState(false);
    const [selectedAddress, setSelectedAddress] = useState(null);
    const [addressFormData, setAddressFormData] = useState({
        street: '',
        ward: '',
        district: '',
        city: '',
        country: 'Vietnam',
        address_type: 'home',
        is_default: false
    });
    const [selectedOrder, setSelectedOrder] = useState(null);

    // Fetch addresses
    const fetchAddresses = async () => {
        try {
            setAddressLoading(true);
            const response = await addressApi.getAddresses();
            setAddresses(response.data);
        } catch (error) {
            console.error('Failed to fetch addresses:', error);
        } finally {
            setAddressLoading(false);
        }
    };

    // Handle form submission
    const handleAddressSubmit = async (e) => {
        e.preventDefault();
        try {
            if (selectedAddress) {
                await addressApi.updateAddress(selectedAddress.id, addressFormData);
            } else {
                await addressApi.createAddress(addressFormData);
            }
            fetchAddresses();
            setShowAddressForm(false);
            setSelectedAddress(null);
            setAddressFormData({
                street: '',
                ward: '',
                district: '',
                city: '',
                country: 'Vietnam',
                address_type: 'home',
                is_default: false
            });
        } catch (error) {
            console.error('Failed to save address:', error);
        }
    };

    // Handle address deletion
    const handleDeleteAddress = async (addressId) => {
        if (window.confirm('Bạn có chắc chắn muốn xóa địa chỉ này?')) {
            try {
                await addressApi.deleteAddress(addressId);
                fetchAddresses();
            } catch (error) {
                console.error('Failed to delete address:', error);
            }
        }
    };

    // Handle setting default address
    const handleSetDefaultAddress = async (addressId) => {
        try {
            await addressApi.setDefaultAddress(addressId);
            fetchAddresses();
        } catch (error) {
            console.error('Failed to set default address:', error);
        }
    };

    useEffect(() => {
        if (selectedTab === 'address') {
            fetchAddresses();
        }
    }, [selectedTab]);


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
                    {/* Personal Info Tab */}
                    {selectedTab === 'info' && (
                        <div>
                            <h2 className="text-xl font-semibold mb-6">Thông tin cá nhân</h2>
                            {userLoading ? (
                                <div className="flex justify-center items-center h-40">
                                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                                </div>
                            ) : user ? (
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
                            ) : (
                                <div className="text-center py-8 text-gray-500">
                                    <p>Không thể tải thông tin người dùng</p>
                                </div>
                            )}
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
                    {/* Address Tab */}
                    {selectedTab === 'address' && (
                        <div>
                            <div className="flex justify-between items-center mb-6">
                                <h2 className="text-xl font-semibold">Sổ địa chỉ</h2>
                                <button
                                    onClick={() => {
                                        setShowAddressForm(true);
                                        setSelectedAddress(null);
                                    }}
                                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                                >
                                    Thêm địa chỉ mới
                                </button>
                            </div>

                            {addressLoading ? (
                                <div className="flex justify-center items-center h-40">
                                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                                </div>
                            ) : addresses.length > 0 ? (
                                <div className="space-y-4">
                                    {addresses.map((address) => (
                                        <div key={address.id} className="border rounded-lg p-4 relative">
                                            <div className="flex justify-between items-start">
                                                <div>
                                                    <div className="flex items-center gap-2 mb-2">
                                                        <span className="font-medium">
                                                            {address.address_type === 'home' ? 'Nhà riêng' :
                                                                address.address_type === 'office' ? 'Văn phòng' : 'Khác'}
                                                        </span>
                                                        {address.is_default && (
                                                            <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                                                                Mặc định
                                                            </span>
                                                        )}
                                                    </div>
                                                    <div className="space-y-2 font-roboto">
                                                        <p className="flex">
                                                            <span className="text-gray-700 font-semibold w-32">Số nhà, Đường:</span>
                                                            <span className="text-gray-600 font-normal">{address.street}</span>
                                                        </p>
                                                        <p className="flex">
                                                            <span className="text-gray-700 font-semibold w-32">Phường/Xã:</span>
                                                            <span className="text-gray-600 font-normal">{address.ward}</span>
                                                        </p>
                                                        <p className="flex">
                                                            <span className="text-gray-700 font-semibold w-32">Quận/Huyện:</span>
                                                            <span className="text-gray-600 font-normal">{address.district}</span>
                                                        </p>
                                                        <p className="flex">
                                                            <span className="text-gray-700 font-semibold w-32">Tỉnh/Thành phố:</span>
                                                            <span className="text-gray-600 font-normal">{address.city}</span>
                                                        </p>
                                                        <p className="flex">
                                                            <span className="text-gray-700 font-semibold w-32">Quốc gia:</span>
                                                            <span className="text-gray-600 font-normal">{address.country}</span>
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="space-x-4">
                                                    <button
                                                        onClick={() => {
                                                            setSelectedAddress(address);
                                                            setAddressFormData(address);
                                                            setShowAddressForm(true);
                                                        }}
                                                        className="text-black-600 hover:text-black-800 p-1 rounded-full hover:bg-black-50 transition-colors"
                                                        title="Sửa địa chỉ"
                                                    >
                                                        <FiEdit2 className="w-5 h-5" />
                                                    </button>

                                                    <button
                                                        onClick={() => handleDeleteAddress(address.id)}
                                                        className="text-red-600 hover:text-red-800 p-1 rounded-full hover:bg-red-50 transition-colors"
                                                        title="Xóa địa chỉ"
                                                    >
                                                        <RiDeleteBinLine className="w-5 h-5" />
                                                    </button>

                                                    {!address.is_default && (
                                                        <button
                                                            onClick={() => handleSetDefaultAddress(address.id)}
                                                            className="text-yellow-600 hover:text-yellow-800 p-1 rounded-full hover:bg-gray-50 transition-colors"
                                                            title="Đặt làm địa chỉ mặc định"
                                                        >
                                                            <MdStars className="w-5 h-5" />
                                                        </button>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="text-center py-8 text-gray-500">
                                    <p>Chưa có địa chỉ nào được lưu</p>
                                </div>
                            )}

                            {/* Address Form Modal */}
                            {showAddressForm && (
                                <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
                                    <div className="bg-white rounded-lg p-6 max-w-md w-full">
                                        <h3 className="text-lg font-medium mb-4">
                                            {selectedAddress ? 'Cập nhật địa chỉ' : 'Thêm địa chỉ mới'}
                                        </h3>
                                        <form onSubmit={handleAddressSubmit} className="space-y-4">
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                                    Loại địa chỉ
                                                </label>
                                                <select
                                                    value={addressFormData.address_type}
                                                    onChange={(e) => setAddressFormData({
                                                        ...addressFormData,
                                                        address_type: e.target.value
                                                    })}
                                                    className="w-full border rounded-md p-2"
                                                >
                                                    <option value="home">Nhà riêng</option>
                                                    <option value="office">Văn phòng</option>
                                                    <option value="other">Khác</option>
                                                </select>
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                                    Số nhà, Đường
                                                </label>
                                                <input
                                                    type="text"
                                                    value={addressFormData.street}
                                                    onChange={(e) => setAddressFormData({
                                                        ...addressFormData,
                                                        street: e.target.value
                                                    })}
                                                    className="w-full border rounded-md p-2"
                                                    required
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                                    Phường/Xã
                                                </label>
                                                <input
                                                    type="text"
                                                    value={addressFormData.ward}
                                                    onChange={(e) => setAddressFormData({
                                                        ...addressFormData,
                                                        ward: e.target.value
                                                    })}
                                                    className="w-full border rounded-md p-2"
                                                    required
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                                    Quận/Huyện
                                                </label>
                                                <input
                                                    type="text"
                                                    value={addressFormData.district}
                                                    onChange={(e) => setAddressFormData({
                                                        ...addressFormData,
                                                        district: e.target.value
                                                    })}
                                                    className="w-full border rounded-md p-2"
                                                    required
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                                    Tỉnh/Thành phố
                                                </label>
                                                <input
                                                    type="text"
                                                    value={addressFormData.city}
                                                    onChange={(e) => setAddressFormData({
                                                        ...addressFormData,
                                                        city: e.target.value
                                                    })}
                                                    className="w-full border rounded-md p-2"
                                                    required
                                                />
                                            </div>
                                            <div className="flex items-center">
                                                <input
                                                    type="checkbox"
                                                    id="is_default"
                                                    checked={addressFormData.is_default}
                                                    onChange={(e) => setAddressFormData({
                                                        ...addressFormData,
                                                        is_default: e.target.checked
                                                    })}
                                                    className="mr-2"
                                                />
                                                <label htmlFor="is_default" className="text-sm text-gray-700">
                                                    Đặt làm địa chỉ mặc định
                                                </label>
                                            </div>
                                            <div className="flex justify-end space-x-2 pt-4">
                                                <button
                                                    type="button"
                                                    onClick={() => {
                                                        setShowAddressForm(false);
                                                        setSelectedAddress(null);
                                                    }}
                                                    className="px-4 py-2 text-gray-600 hover:text-gray-800"
                                                >
                                                    Hủy
                                                </button>
                                                <button
                                                    type="submit"
                                                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                                                >
                                                    {selectedAddress ? 'Cập nhật' : 'Thêm mới'}
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
