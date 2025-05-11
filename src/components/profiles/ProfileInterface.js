import { useState, useEffect } from 'react';
import { addressApi } from '../../utils/apiClient';
import { FiEdit2 } from "react-icons/fi"; // Icon sửa
import { RiDeleteBinLine } from "react-icons/ri"; // Icon xóa
import { MdStars } from "react-icons/md"; // Icon mặc định
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { updateProfile } from '../../store/slices/userSlice';



// Component hiển thị trạng thái đơn hàng
const StatusBadge = ({ status }) => {
    const getStatusColor = () => {
        switch (status?.toLowerCase()) {
            case 'pending':
                return 'bg-yellow-100 text-yellow-800';
            case 'processing':
                return 'bg-gray-100 text-gray-800';
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
                return 'Thanh toán thất bại';
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
        <div className="border rounded-lg p-3 lg:p-4 hover:shadow-md transition duration-200">
            {/* Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start gap-2 mb-4">
                <div className="w-full sm:w-auto">
                    <p className="font-medium text-base lg:text-lg">Đơn hàng #{order.id}</p>
                    <p className="text-xs lg:text-sm text-gray-600">{formatDate(order.dates.created_at)}</p>
                </div>
                <StatusBadge status={order.status} />
            </div>

            {/* Preview sản phẩm */}
            <div className="space-y-3">
                {order.items.slice(0, 2).map((item, index) => (
                    <div key={index} className="flex items-start gap-2 lg:gap-4">
                        <img
                            src={item.variant.color.image}
                            className="w-14 h-14 lg:w-16 lg:h-16 object-cover rounded"
                            alt={item.product.name}
                        />
                        <div className="flex-1 min-w-0"> {/* Prevent text overflow */}
                            <p className="font-medium text-sm lg:text-base truncate">
                                {item.product.name}
                            </p>
                            <p className="text-xs lg:text-sm text-gray-600 truncate">
                                Màu: {item.variant.color.name} | Size: {item.variant.size}
                            </p>
                            <p className="text-xs lg:text-sm text-gray-600">
                                {item.quantity} x {formatPrice(item.price)}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Footer */}
            <div className="flex justify-between items-center border-t pt-3">
                <div>
                    <p className="text-sm text-gray-600">Tổng tiền</p>
                    <p className="font-medium text-lg text-gray-600">
                        {formatPrice(order.pricing.final_price)}
                    </p>
                </div>
                <button
                    onClick={() => onViewDetail(order)}
                    className="px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg transition"
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
                                <p className="text-sm text-gray-600">Họ và tên</p>
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
                                            Màu: {item.variant.color.name} | Size: {item.variant.size}
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
                            <p className="font-medium mb-2">{order.shipping.description}</p>
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
                            <p className="text-sm text-gray-600">Ngày thanh toán</p>
                            <p className="font-medium">
                                {order.payment.status === 'paid' ? formatDate(order.payment.payment_date) : 'Chưa thanh toán'}
                            </p>
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
                                <span className="text-gray-600">{formatPrice(order.pricing.final_price)}</span>
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
    const [provinces, setProvinces] = useState([]);
    const [districts, setDistricts] = useState([]);
    const [wards, setWards] = useState([]);
    const [selectedOrder, setSelectedOrder] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const [profileData, setProfileData] = useState({
        firstname: '',
        lastname: '',
        phone: '',
        gender: ''
    });
    const [updateLoading, setUpdateLoading] = useState(false);

    // Thêm state để quản lý lỗi validation
    const [validationErrors, setValidationErrors] = useState({
        firstname: '',
        lastname: '',
        phone: ''
    });

    const dispatch = useDispatch();

    useEffect(() => {
        if (user) {
            setProfileData({
                firstname: user.firstname || '',
                lastname: user.lastname || '',
                phone: user.phone || '',
                gender: user.gender || ''
            });
        }
    }, [user]);

    const handleProfileChange = (e) => {
        const { name, value } = e.target;
        setProfileData(prev => ({
            ...prev,
            [name]: value
        }));

        // Xóa lỗi validation khi người dùng nhập lại
        if (validationErrors[name]) {
            setValidationErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    // Hàm validate dữ liệu thông tin cá nhân
    const validateProfileData = () => {
        const errors = {};
        let isValid = true;

        // Kiểm tra họ
        if (!profileData.firstname) {
            errors.firstname = 'Vui lòng nhập họ';
            isValid = false;
        } else if (!/^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s]+$/.test(profileData.firstname)) {
            errors.firstname = 'Họ chỉ được chứa chữ cái';
            isValid = false;
        } else if (profileData.firstname.length < 2) {
            errors.firstname = 'Họ phải có ít nhất 2 ký tự';
            isValid = false;
        } else if (profileData.firstname.length > 20) {
            errors.firstname = 'Họ không được vượt quá 20 ký tự';
            isValid = false;
        }

        // Kiểm tra tên
        if (!profileData.lastname) {
            errors.lastname = 'Vui lòng nhập tên';
            isValid = false;
        } else if (!/^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s]+$/.test(profileData.lastname)) {
            errors.lastname = 'Tên chỉ được chứa chữ cái';
            isValid = false;
        } else if (profileData.lastname.length < 2) {
            errors.lastname = 'Tên phải có ít nhất 2 ký tự';
            isValid = false;
        } else if (profileData.lastname.length > 20) {
            errors.lastname = 'Tên không được vượt quá 20 ký tự';
            isValid = false;
        }

        // Kiểm tra số điện thoại
        if (profileData.phone && !/^\d{10}$/.test(profileData.phone)) {
            errors.phone = 'Số điện thoại không hợp lệ (cần đúng 10 chữ số)';
            isValid = false;
        }

        setValidationErrors(errors);
        return isValid;
    };

    // Thêm handler cho submit
    const handleUpdateProfile = async (e) => {
        e.preventDefault();

        // Kiểm tra validation trước khi gửi dữ liệu
        if (!validateProfileData()) {
            // Hiển thị thông báo lỗi chung nếu cần
            toast.error('Vui lòng điền đầy đủ thông tin hợp lệ.');
            return;
        }

        setUpdateLoading(true);
        try {
            // Tạo object data thay vì FormData
            const updateData = {
                firstname: profileData.firstname,
                lastname: profileData.lastname,
                phone: profileData.phone,
                gender: profileData.gender
            };

            const result = await dispatch(updateProfile(updateData)).unwrap();

            // Cập nhật state với dữ liệu mới
            setProfileData({
                firstname: result.firstname || '',
                lastname: result.lastname || '',
                phone: result.phone || '',
                gender: result.gender || ''
            });

            setIsEditing(false);
            toast.success('Cập nhật thông tin thành công!');
        } catch (error) {
            toast.error(error.message || 'Có lỗi xảy ra khi cập nhật thông tin');
        } finally {
            setUpdateLoading(false);
        }
    };

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

        // Validate địa chỉ đường
        const streetRegex = /^(?=.*\d)(?=.*[a-zA-Z]).+$/; // Phải chứa ít nhất 1 số và 1 chữ
        if (!streetRegex.test(addressFormData.street)) {
            alert('Địa chỉ phải bao gồm số nhà và tên đường');
            return;
        }

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
        const fetchProvinces = async () => {
            try {
                const response = await fetch('https://provinces.open-api.vn/api/?depth=3');
                const data = await response.json();
                setProvinces(data);
            } catch (error) {
                console.error('Failed to fetch provinces:', error);
            }
        };
        fetchProvinces();
    }, []);

    const handleProvinceChange = (e) => {
        const provinceCode = e.target.value;
        const selectedProvince = provinces.find(p => p.code === Number(provinceCode));

        setAddressFormData({
            ...addressFormData,
            city: selectedProvince?.name || '',
            district: '',
            ward: ''
        });

        setDistricts(selectedProvince?.districts || []);
        setWards([]);
    };

    const handleDistrictChange = (e) => {
        const districtCode = e.target.value;
        const selectedDistrict = districts.find(d => d.code === Number(districtCode));

        setAddressFormData({
            ...addressFormData,
            district: selectedDistrict?.name || '',
            ward: ''
        });

        setWards(selectedDistrict?.wards || []);
    };

    const handleWardChange = (e) => {
        const wardCode = e.target.value;
        const selectedWard = wards.find(w => w.code === Number(wardCode));

        setAddressFormData({
            ...addressFormData,
            ward: selectedWard?.name || ''
        });
    };


    useEffect(() => {
        if (selectedTab === 'address') {
            fetchAddresses();
        }
    }, [selectedTab]);


    return (
        <div className="container mx-auto px-4 py-6">
            <h1 className="text-2xl font-bold mb-4">Thông tin tài khoản</h1>
            <div className="flex flex-col md:flex-row gap-6">
                {/* Sidebar */}
                <div className="w-full lg:w-1/4 bg-white p-4 rounded shadow-md">
                    <button
                        className={`w-full text-left px-4 py-2 mb-2 rounded transition duration-200 
                            ${selectedTab === 'info'
                                ? 'bg-gray-600 text-white'
                                : 'bg-gray-100 hover:bg-gray-200'
                            }`}
                        onClick={() => setSelectedTab('info')}
                    >
                        Thông tin cá nhân
                    </button>
                    <button
                        className={`w-full text-left px-4 py-2 mb-2 rounded transition duration-200 
                            ${selectedTab === 'orders'
                                ? 'bg-gray-600 text-white'
                                : 'bg-gray-100 hover:bg-gray-200'
                            }`}
                        onClick={() => {
                            setSelectedTab('orders');
                            setIsEditing(false);
                        }}
                    >
                        Đơn hàng của tôi
                    </button>
                    <button
                        className={`w-full text-left px-4 py-2 mb-2 rounded transition duration-200 
                            ${selectedTab === 'address'
                                ? 'bg-gray-600 text-white'
                                : 'bg-gray-100 hover:bg-gray-200'
                            }`}
                        onClick={() => {
                            setSelectedTab('address');
                            setIsEditing(false);
                        }}
                    >
                        Sổ địa chỉ
                    </button>
                    <button
                        className="w-full bg-red-600 text-white px-4 py-2 rounded hover:bg-red-600 
                            transition duration-200 mt-6"
                        onClick={handleLogout}
                    >
                        Đăng xuất
                    </button>
                </div>

                {/* Main Content */}
                <div className="w-full lg:w-3/4 bg-white p-4 lg:p-6 rounded shadow-md">
                    {/* Personal Info Tab */}
                    {selectedTab === 'info' && (
                        <div>
                            <div className="flex justify-between items-center mb-6">
                                <h2 className="text-xl font-semibold">Thông tin cá nhân</h2>
                                {!isEditing && (
                                    <button
                                        onClick={() => setIsEditing(true)}
                                        className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                                    >
                                        <FiEdit2 className="w-5 h-5 text-gray-600 " />
                                    </button>
                                )}
                            </div>

                            {userLoading ? (
                                <div className="flex justify-center items-center h-40">
                                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-600"></div>
                                </div>
                            ) : user ? (
                                isEditing ? (
                                    // Form cập nhật với validation
                                    <form onSubmit={handleUpdateProfile} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {/* Họ */}
                                        <div className="space-y-2">
                                            <label className="block text-sm font-medium text-gray-700">
                                                Họ <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                name="firstname"
                                                value={profileData.firstname}
                                                onChange={handleProfileChange}
                                                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-gray-200 
                                                ${validationErrors.firstname ? 'border-red-500' : ''}`}
                                                required
                                                onInvalid={(e) => e.target.setCustomValidity("Không được để trống")}
                                                onInput={(e) => e.target.setCustomValidity("")}
                                            />
                                            {validationErrors.firstname && (
                                                <p className="text-red-500 text-xs mt-1">{validationErrors.firstname}</p>
                                            )}
                                        </div>

                                        {/* Tên */}
                                        <div className="space-y-2">
                                            <label className="block text-sm font-medium text-gray-700">
                                                Tên <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                name="lastname"
                                                value={profileData.lastname}
                                                onChange={handleProfileChange}
                                                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-gray-200
                                                ${validationErrors.lastname ? 'border-red-500' : ''}`}
                                                required
                                                onInvalid={(e) => e.target.setCustomValidity("Không được để trống")}
                                                onInput={(e) => e.target.setCustomValidity("")}
                                            />
                                            {validationErrors.lastname && (
                                                <p className="text-red-500 text-xs mt-1">{validationErrors.lastname}</p>
                                            )}
                                        </div>

                                        {/* Email - readonly */}
                                        <div className="space-y-2">
                                            <label className="block text-sm font-medium text-gray-700">Email</label>
                                            <input
                                                type="email"
                                                value={user.email}
                                                className="w-full px-4 py-2 border rounded-lg bg-gray-50"
                                                disabled
                                            />
                                        </div>

                                        {/* Số điện thoại với validation */}
                                        <div className="space-y-2">
                                            <label className="block text-sm font-medium text-gray-700">Số điện thoại</label>
                                            <input
                                                type="tel"
                                                name="phone"
                                                value={profileData.phone}
                                                onChange={handleProfileChange}
                                                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-gray-200
                                                ${validationErrors.phone ? 'border-red-500' : ''}`}
                                                placeholder="Nhập 10 chữ số"
                                                required
                                                onInvalid={(e) => e.target.setCustomValidity("Không được để trống")}
                                                onInput={(e) => e.target.setCustomValidity("")}
                                            />
                                            {validationErrors.phone && (
                                                <p className="text-red-500 text-xs mt-1">{validationErrors.phone}</p>
                                            )}
                                        </div>

                                        {/* Giới tính */}
                                        <div className="space-y-2">
                                            <label className="block text-sm font-medium text-gray-700">
                                                Giới tính <span className="text-red-500">*</span>
                                            </label>
                                            <select
                                                name="gender"
                                                value={profileData.gender}
                                                onChange={handleProfileChange}
                                                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-gray-200 transition-colors duration-200
                                                            ${!profileData.gender ? 'border-red-500' : 'border-gray-300'}`}
                                                required
                                            >
                                                <option value="" disabled>Chọn giới tính</option>
                                                <option value="male">Nam</option>
                                                <option value="female">Nữ</option>
                                                <option value="other">Khác</option>
                                            </select>
                                            {!profileData.gender && (
                                                <p className="text-red-500 text-sm mt-1 animate-[slideDown_0.2s_ease-in-out]">
                                                    Vui lòng chọn giới tính
                                                </p>
                                            )}
                                        </div>
                                        {/* Buttons */}
                                        <div className="md:col-span-2 flex justify-end gap-4">
                                            <button
                                                type="button"
                                                onClick={() => {
                                                    setIsEditing(false);
                                                    setValidationErrors({});
                                                    setProfileData({
                                                        firstname: user.firstname || '',
                                                        lastname: user.lastname || '',
                                                        phone: user.phone || '',
                                                        gender: user.gender || ''
                                                    });
                                                }}
                                                className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                                            >
                                                Hủy
                                            </button>
                                            <button
                                                type="submit"
                                                disabled={updateLoading}
                                                className={`px-6 py-2 rounded-lg text-white
                                                ${updateLoading ? 'bg-gray-400' : 'bg-green-600 hover:bg-green-700'}`}
                                            >
                                                {updateLoading ? 'Đang cập nhật...' : 'Lưu thay đổi'}
                                            </button>
                                        </div>
                                    </form>
                                ) : (
                                    // Giữ nguyên phần hiển thị thông tin
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <p className="text-sm font-medium text-gray-700">Họ</p>
                                            <p className="">{user.firstname || 'Chưa cập nhật'}</p>
                                        </div>
                                        <div className="space-y-2">
                                            <p className="text-sm font-medium text-gray-700">Tên</p>
                                            <p className="">{user.lastname || 'Chưa cập nhật'}</p>
                                        </div>
                                        <div className="space-y-2">
                                            <p className="text-sm font-medium text-gray-700">Email</p>
                                            <p className="">{user.email || 'Chưa cập nhật'}</p>
                                        </div>
                                        <div className="space-y-2">
                                            <p className="text-sm font-medium text-gray-700">Số điện thoại</p>
                                            <p className="">{user.phone || 'Chưa cập nhật'}</p>
                                        </div>
                                        <div className="space-y-2">
                                            <p className="text-sm font-medium text-gray-700">Giới tính</p>
                                            <p className="">
                                                {user.gender === "male" ? "Nam" :
                                                    user.gender === "female" ? "Nữ" :
                                                        user.gender === "other" ? "Khác" : "Chưa cập nhật"}
                                            </p>
                                        </div>
                                    </div>
                                )
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
                                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-600"></div>
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
                            <div className="flex justify-between items-center mb-6">
                                <h2 className="text-xl font-semibold">Sổ địa chỉ</h2>
                                <button
                                    onClick={() => {
                                        setShowAddressForm(true);
                                        setSelectedAddress(null);
                                    }}
                                    className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700"
                                >
                                    Thêm địa chỉ mới
                                </button>
                            </div>

                            {addressLoading ? (
                                <div className="flex justify-center items-center h-40">
                                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-600"></div>
                                </div>
                            ) : addresses.length > 0 ? (
                                /* Address List */
                                <div className="space-y-4">
                                    {addresses.map((address) => (
                                        <div key={address.id}
                                            className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition duration-200">
                                            <div className="flex flex-col sm:flex-row justify-between gap-4">
                                                {/* Address Information */}
                                                <div className="flex-1 min-w-0">
                                                    <div className="flex flex-wrap items-center gap-2 mb-3">
                                                        <span className="font-medium text-sm sm:text-base text-gray-800">
                                                            {address.address_type === 'home' ? 'Nhà riêng' :
                                                                address.address_type === 'office' ? 'Văn phòng' : 'Khác'}
                                                        </span>
                                                        {address.is_default && (
                                                            <span className="bg-gray-100 text-yellow-600 text-xs px-2.5 py-1 rounded-full 
                                                                font-medium flex items-center gap-1">
                                                                <MdStars className="w-4 h-4" />
                                                                Mặc định
                                                            </span>
                                                        )}
                                                    </div>

                                                    {/* Address Details */}
                                                    <div className="space-y-2 text-sm sm:text-base">
                                                        <div className="flex flex-col sm:flex-row sm:items-baseline">
                                                            <span className="text-gray-700 font-medium w-full sm:w-32 shrink-0">
                                                                Số nhà, Đường:
                                                            </span>
                                                            <span className="text-gray-600 break-words">
                                                                {address.street}
                                                            </span>
                                                        </div>

                                                        <div className="flex flex-col sm:flex-row sm:items-baseline">
                                                            <span className="text-gray-700 font-medium w-full sm:w-32 shrink-0">
                                                                Phường/Xã:
                                                            </span>
                                                            <span className="text-gray-600 break-words">
                                                                {address.ward}
                                                            </span>
                                                        </div>

                                                        <div className="flex flex-col sm:flex-row sm:items-baseline">
                                                            <span className="text-gray-700 font-medium w-full sm:w-32 shrink-0">
                                                                Quận/Huyện:
                                                            </span>
                                                            <span className="text-gray-600 break-words">
                                                                {address.district}
                                                            </span>
                                                        </div>

                                                        <div className="flex flex-col sm:flex-row sm:items-baseline">
                                                            <span className="text-gray-700 font-medium w-full sm:w-32 shrink-0">
                                                                Tỉnh/Thành phố:
                                                            </span>
                                                            <span className="text-gray-600 break-words">
                                                                {address.city}
                                                            </span>
                                                        </div>

                                                        <div className="flex flex-col sm:flex-row sm:items-baseline">
                                                            <span className="text-gray-700 font-medium w-full sm:w-32 shrink-0">
                                                                Quốc gia:
                                                            </span>
                                                            <span className="text-gray-600 break-words">
                                                                {address.country}
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Action Buttons */}
                                                <div className="flex sm:flex-col items-center gap-2">
                                                    <button
                                                        onClick={() => {
                                                            setSelectedAddress(address);
                                                            setAddressFormData(address);
                                                            setShowAddressForm(true);
                                                        }}
                                                        className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                                                        title="Sửa địa chỉ"
                                                    >
                                                        <FiEdit2 className="w-5 h-5 text-gray-600" />
                                                    </button>

                                                    <button
                                                        onClick={() => handleDeleteAddress(address.id)}
                                                        className="p-2 hover:bg-red-50 rounded-full transition-colors"
                                                        title="Xóa địa chỉ"
                                                    >
                                                        <RiDeleteBinLine className="w-5 h-5 text-red-600" />
                                                    </button>

                                                    {!address.is_default && (
                                                        <button
                                                            onClick={() => handleSetDefaultAddress(address.id)}
                                                            className="p-2 hover:bg-yellow-50 rounded-full transition-colors"
                                                            title="Đặt làm địa chỉ mặc định"
                                                        >
                                                            <MdStars className="w-5 h-5 text-yellow-600" />
                                                        </button>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="text-center py-8">
                                    <div className="text-gray-400 mb-3">
                                        <svg className="mx-auto h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                        </svg>
                                    </div>
                                    <p className="text-gray-500 text-lg">Chưa có địa chỉ nào được lưu</p>
                                </div>
                            )}

                            {/* Address Form Modal */}
                            {showAddressForm && (
                                <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
                                    <div className="bg-white rounded-lg w-full max-w-md max-h-[90vh] overflow-y-auto">
                                        {/* Header */}
                                        <div className="sticky top-0 bg-white px-6 py-4 border-b flex justify-between items-center">
                                            <h3 className="text-lg font-medium text-gray-900">
                                                {selectedAddress ? 'Cập nhật địa chỉ' : 'Thêm địa chỉ mới'}
                                            </h3>
                                            <button
                                                onClick={() => {
                                                    setShowAddressForm(false);
                                                    setSelectedAddress(null);
                                                }}
                                                className="text-gray-400 hover:text-gray-500 transition-colors"
                                            >
                                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                                </svg>
                                            </button>
                                        </div>

                                        <form onSubmit={handleAddressSubmit} className="p-6 space-y-4">
                                            {/* Address Type */}
                                            <div className="space-y-1">
                                                <label className="block text-sm font-medium text-gray-700">
                                                    Loại địa chỉ
                                                </label>
                                                <select
                                                    value={addressFormData.address_type}
                                                    onChange={(e) => setAddressFormData({
                                                        ...addressFormData,
                                                        address_type: e.target.value
                                                    })}
                                                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none 
                                                                focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                                                >
                                                    <option value="home">Nhà riêng</option>
                                                    <option value="office">Văn phòng</option>
                                                    <option value="other">Khác</option>
                                                </select>
                                            </div>

                                            {/* Street Address */}
                                            <div className="space-y-1">
                                                <label className="block text-sm font-medium text-gray-700">
                                                    Số nhà, Đường
                                                </label>
                                                <input
                                                    type="text"
                                                    value={addressFormData.street}
                                                    onChange={(e) => {
                                                        const value = e.target.value;
                                                        setAddressFormData({
                                                            ...addressFormData,
                                                            street: value
                                                        });
                                                        // Reset custom validity khi người dùng nhập
                                                        e.target.setCustomValidity("");
                                                    }}
                                                    onInvalid={(e) => {
                                                        const value = e.target.value;
                                                        if (!value) {
                                                            e.target.setCustomValidity("Không được để trống");
                                                        } else if (!/^(?=.*\d)(?=.*[a-zA-Z]).+$/.test(value)) {
                                                            e.target.setCustomValidity("Địa chỉ phải bao gồm số nhà và tên đường");
                                                        }
                                                    }}
                                                    onInput={(e) => e.target.setCustomValidity("")}
                                                    pattern="^(?=.*\d)(?=.*[a-zA-Z]).+$"
                                                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none 
                    focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                                                    required
                                                    placeholder="Ví dụ: 123 Đường Nguyễn Văn A"
                                                />
                                                <p className="text-xs text-gray-500">
                                                    *Địa chỉ phải bao gồm số nhà và tên đường
                                                </p>
                                            </div>

                                            {/* City */}
                                            <div className="space-y-1">
                                                <label className="block text-sm font-medium text-gray-700">
                                                    Tỉnh/Thành phố
                                                </label>
                                                <select
                                                    value={provinces.find(p => p.name === addressFormData.city)?.code || ''}
                                                    onChange={handleProvinceChange}
                                                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none 
                                                                focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                                                    required
                                                >
                                                    <option value="">Chọn Tỉnh/Thành phố</option>
                                                    {provinces.map(province => (
                                                        <option key={province.code} value={province.code}>
                                                            {province.name}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>

                                            {/* District */}
                                            <div className="space-y-1">
                                                <label className="block text-sm font-medium text-gray-700">
                                                    Quận/Huyện
                                                </label>
                                                <select
                                                    value={districts.find(d => d.name === addressFormData.district)?.code || ''}
                                                    onChange={handleDistrictChange}
                                                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none 
                                                                focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                                                    required
                                                    disabled={!addressFormData.city}
                                                >
                                                    <option value="">Chọn Quận/Huyện</option>
                                                    {districts.map(district => (
                                                        <option key={district.code} value={district.code}>
                                                            {district.name}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>

                                            {/* Ward */}
                                            <div className="space-y-1">
                                                <label className="block text-sm font-medium text-gray-700">
                                                    Phường/Xã
                                                </label>
                                                <select
                                                    value={wards.find(w => w.name === addressFormData.ward)?.code || ''}
                                                    onChange={handleWardChange}
                                                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none 
                                                                focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                                                    required
                                                    disabled={!addressFormData.district}
                                                >
                                                    <option value="">Chọn Phường/Xã</option>
                                                    {wards.map(ward => (
                                                        <option key={ward.code} value={ward.code}>
                                                            {ward.name}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>
                                            {/* Default Address Checkbox */}
                                            <div className="flex items-center">
                                                <input
                                                    type="checkbox"
                                                    id="is_default"
                                                    checked={addressFormData.is_default}
                                                    onChange={(e) => setAddressFormData({
                                                        ...addressFormData,
                                                        is_default: e.target.checked
                                                    })}
                                                    className="h-4 w-4 text-gray-600 focus:ring-gray-500 border-gray-300 rounded"
                                                />
                                                <label htmlFor="is_default" className="ml-2 text-sm text-gray-700">
                                                    Đặt làm địa chỉ mặc định
                                                </label>
                                            </div>
                                            {/* Form Actions */}
                                            <div className="flex justify-end gap-3 pt-4 border-t">
                                                <button
                                                    type="button"
                                                    onClick={() => {
                                                        setShowAddressForm(false);
                                                        setSelectedAddress(null);
                                                    }}
                                                    className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-500 
                                                                transition-colors"
                                                >
                                                    Hủy
                                                </button>
                                                <button
                                                    type="submit"
                                                    className="px-4 py-2 bg-gray-600 text-white text-sm font-medium rounded-lg 
                                                                hover:bg-gray-700 transition-colors"
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
        </div >
    );
}
