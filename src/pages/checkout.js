import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import Layout from '../components/Layout';
import { getCartId } from '@/utils/storage';
import { createOrder } from '../store/slices/orderSlice';
import { carrierApi } from '@/utils/apiClient';
import { getUserInfo } from '../store/slices/userSlice';
import { getToken } from '../utils/storage';
import { addressApi } from '../utils/apiClient';


const CheckoutPage = () => {
    const dispatch = useDispatch();
    const router = useRouter();

    const { loading } = useSelector(state => state.order);
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');

    const [items, setItems] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    const [discountCode, setDiscountCode] = useState('');
    const [discountAmount, setDiscountAmount] = useState(0);
    const [stockError, setStockError] = useState(null);
    const [carriers, setCarriers] = useState([]);
    const [selectedCarrier, setSelectedCarrier] = useState(null);
    const [addresses, setAddresses] = useState([]);
    const [selectedAddress, setSelectedAddress] = useState(null);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        street: '',
        ward: '',
        district: '',
        city: '',
        country: '',
    });

    useEffect(() => {
        const loadUserData = async () => {
            const token = getToken();
            console.log("Token:", token); // Kiểm tra token

            if (token) {
                try {
                    console.log("Fetching user info..."); // Log trước khi gọi API
                    const userInfo = await dispatch(getUserInfo()).unwrap();
                    console.log("User info received:", userInfo); // Log kết quả

                    if (userInfo) {
                        const firstname = userInfo.firstname || '';
                        const lastname = userInfo.lastname || '';
                        const fullname = [firstname, lastname].filter(Boolean).join(' ');

                        setFormData(prev => ({
                            ...prev,
                            name: fullname || '',
                            email: userInfo.email || '',
                            phone: userInfo.phone?.toString() || ''
                        }));

                        try {
                            console.log("Fetching addresses..."); // Log trước khi gọi API address
                            const addressResponse = await addressApi.getAddresses();
                            console.log("Address response:", addressResponse); // Log kết quả

                            if (addressResponse.status === "success" && addressResponse.data) {
                                setAddresses(addressResponse.data);

                                const defaultAddress = addressResponse.data.find(addr => addr.is_default);
                                if (defaultAddress) {
                                    setSelectedAddress(defaultAddress);
                                    setFormData(prev => ({
                                        ...prev,
                                        street: defaultAddress.street || '',
                                        ward: defaultAddress.ward || '',
                                        district: defaultAddress.district || '',
                                        city: defaultAddress.city || '',
                                        country: defaultAddress.country || ''
                                    }));
                                }
                            }
                        } catch (addressError) {
                            console.error('Error fetching addresses:', addressError);
                        }
                    }
                } catch (error) {
                    console.error('Error loading user data:', error);
                }
            } else {
                console.log("No token found"); // Log khi không có token
            }
        };

        loadUserData();
    }, []);  // Xóa dispatch từ dependencies nếu không cần thiết


    useEffect(() => {
        const storedItems = localStorage.getItem('checkoutItems');
        if (storedItems) {
            setItems(JSON.parse(storedItems));
        }
    }, []);

    // Cập nhật phần useEffect cho carriers
    useEffect(() => {
        const loadCarriers = async () => {
            try {
                const response = await carrierApi.getCarriers({ status: 'active' });

                // Kiểm tra response và lấy data từ rows
                if (response.success && response.data.rows) {
                    setCarriers(response.data.rows);

                    const subtotal = calculateTotal();
                    const freeShippingCarrier = response.data.rows.find(carrier => carrier.price === 0);
                    const standardCarrier = response.data.rows.find(carrier => carrier.price > 0);

                    if (subtotal >= 200000 && freeShippingCarrier) {
                        setSelectedCarrier(freeShippingCarrier);
                    } else if (standardCarrier) {
                        setSelectedCarrier(standardCarrier);
                    }
                } else {
                    throw new Error('Không thể tải thông tin vận chuyển');
                }
            } catch (error) {
                console.error('Error loading carriers:', error);
                setErrorMessage('Không thể tải danh sách đơn vị vận chuyển');
            }
        };

        loadCarriers();
    }, [items]);

    const calculateTotal = () => {
        return items.reduce((total, item) =>
            total + (item.product?.discount_price || item.product?.price || 0) * item.quantity, 0
        );
    };

    const calculateFinalPrice = () => {
        const subtotal = calculateTotal();
        const shipping = selectedCarrier?.price || 0;
        const discount = discountAmount || 0;
        return subtotal + shipping - discount;
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleApplyDiscount = () => {
        if (discountCode === 'DISCOUNT10') {
            setDiscountAmount(10000);
        } else {
            setDiscountAmount(0);
        }
    };

    const AddressSelection = () => {
        if (!addresses.length) return null;

        return (
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    Chọn địa chỉ giao hàng
                </label>
                <div className="space-y-2">
                    {addresses.map((address) => (
                        <div
                            key={address.id}
                            className={`p-3 border rounded cursor-pointer transition-colors
                            ${selectedAddress?.id === address.id
                                    ? 'border-blue-500 bg-blue-50'
                                    : 'hover:border-gray-400'}`}
                            onClick={() => {
                                setSelectedAddress(address);
                                setFormData(prev => ({
                                    ...prev,
                                    street: address.street || '',
                                    ward: address.ward || '',
                                    district: address.district || '',
                                    city: address.city || '',
                                    country: address.country || ''
                                }));
                            }}
                        >
                            <div className="flex justify-between items-center">
                                <div>
                                    <p className="font-medium">
                                        {address.address_type === 'home' ? 'Nhà riêng' : 'Văn phòng'}
                                    </p>
                                    <p className="text-sm text-gray-600">
                                        {address.street}, {address.ward}, {address.district}
                                    </p>
                                    <p className="text-sm text-gray-600">
                                        {address.city}, {address.country}
                                    </p>
                                </div>
                                {address.is_default && (
                                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                                        Mặc định
                                    </span>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    };

    // Cập nhật component CarrierSelection
    const CarrierSelection = () => {
        const subtotal = calculateTotal();

        return (
            <div className="mt-4 border-t pt-4">
                <h3 className="text-lg font-semibold mb-3">Phương thức vận chuyển</h3>
                {subtotal >= 200000 && (
                    <p className="text-green-600 mb-2">
                        Đơn hàng trên 200,000 VND được miễn phí vận chuyển!
                    </p>
                )}
                <div className="space-y-2">
                    {carriers.map((carrier) => {
                        // Ẩn carrier miễn phí nếu đơn hàng dưới 200k
                        if (carrier.price === 0 && subtotal < 200000) return null;
                        // Ẩn carrier có phí nếu đơn hàng trên 200k
                        if (subtotal >= 200000 && carrier.price > 0) return null;

                        return (
                            <div
                                key={carrier.id}
                                className={`p-3 border rounded cursor-pointer transition-colors
                                ${selectedCarrier?.id === carrier.id
                                        ? 'border-blue-500 bg-blue-50'
                                        : 'hover:border-gray-400'}`}
                                onClick={() => setSelectedCarrier(carrier)}
                            >
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="font-medium">{carrier.name}</p>
                                        <p className="text-sm text-gray-600">
                                            {carrier.description}
                                        </p>
                                        {carrier.contact_phone && (
                                            <p className="text-xs text-gray-500">
                                                Hotline: {carrier.contact_phone}
                                            </p>
                                        )}
                                    </div>
                                    <div className="text-right">
                                        <p className="font-semibold">
                                            {carrier.price === 0
                                                ? 'Miễn phí'
                                                : `${carrier.price.toLocaleString()} VND`}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    };


    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!selectedCarrier) {
            setErrorMessage('Vui lòng chọn phương thức vận chuyển');
            return;
        }

        setStockError(null);
        setError('');
        setErrorMessage('');
        setMessage('');

        const orderData = {
            cart_id: getCartId(),
            carrier_id: selectedCarrier.id,
            discount_code: discountCode,
            discount_amount: discountAmount,
            original_price: calculateTotal(),
            discounted_price: calculateTotal() - discountAmount,
            final_price: calculateFinalPrice(),
            items: items.map(item => ({
                product_id: item.product.id,
                size_id: item.size.id,
                color_id: item.color.id,
                quantity: item.quantity,
                price: item.product.discount_price || item.product.price
            })),
            ...formData,
            address_id: null,
        };

        try {
            const result = await dispatch(createOrder(orderData)).unwrap();
            console.log('Order submitted successfully:', result);
            const orderDetails = {
                ...result,
                data: {
                    ...result.data,
                    shipping_fee: selectedCarrier?.price || 0,    // Lấy giá shipping từ carrier đã chọn
                    discount_amount: discountAmount || 0,          // Lấy giá trị discount đã áp dụng
                    formData: formData,                             // Lưu thông tin người mua
                }
            };

            localStorage.setItem('orderDetails', JSON.stringify(orderDetails));
            setMessage('Đơn hàng đã được tạo thành công');
            router.push('/payment');
        } catch (err) {
            console.error('Error submitting order:', err);

            if (err?.data) {
                if (err.data.outOfStockItems?.length > 0 || err.data.notFoundItems?.length > 0) {
                    setStockError({
                        message: typeof err.message === 'string' ? err.message : 'Lỗi kiểm tra tồn kho',
                        outOfStockItems: err.data.outOfStockItems || [],
                        notFoundItems: err.data.notFoundItems || []
                    });
                } else {
                    setErrorMessage(typeof err.message === 'string' ? err.message : 'Không thể tạo đơn hàng');
                }
            } else {
                setErrorMessage('Có lỗi xảy ra khi tạo đơn hàng');
            }

            const errorMessage = err?.message || 'Có lỗi xảy ra';
            setError(typeof errorMessage === 'string' ? errorMessage : JSON.stringify(errorMessage));
        }
    };

    const StockErrorAlert = () => {
        if (!stockError) return null;

        return (
            <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-4">
                <div className="flex flex-col">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <svg className="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <div className="ml-3">
                            <h3 className="text-red-800 font-medium">{stockError.message}</h3>
                        </div>
                    </div>

                    <div className="mt-2 text-sm text-red-700">
                        {stockError.outOfStockItems.map((item, index) => (
                            <div key={`out-${index}`} className="mt-1">
                                Sản phẩm &quot;{item.product_name}&quot; ({item.size}, {item.color}):
                                Yêu cầu {item.requested}, còn lại {item.available}
                            </div>
                        ))}
                        {stockError.notFoundItems.map((item, index) => (
                            <div key={`not-${index}`} className="mt-1">
                                Sản phẩm không tồn tại: &quot;{item.product_name}&quot; ({item.size}, {item.color})
                            </div>
                        ))}
                    </div>

                    <div className="mt-4">
                        <button
                            onClick={() => router.push('/cart')}
                            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                        >
                            Trở về giỏ hàng
                        </button>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <Layout>
            <div className="container mx-auto px-4 py-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                    <StockErrorAlert />
                </div>

                <div className="bg-white p-6 rounded shadow-md">
                    <h1 className="text-2xl font-bold mb-4">Thông tin đặt hàng</h1>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <AddressSelection />

                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            placeholder="Họ và tên"
                            className="border p-2 w-full"
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            placeholder="Email"
                            className="border p-2 w-full"
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="text"
                            name="phone"
                            value={formData.phone}
                            placeholder="Số điện thoại"
                            className="border p-2 w-full"
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="text"
                            name="street"
                            value={formData.street}
                            placeholder="Địa chỉ"
                            className="border p-2 w-full"
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="text"
                            name="ward"
                            value={formData.ward}
                            placeholder="Phường/Xã"
                            className="border p-2 w-full"
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="text"
                            name="district"
                            value={formData.district}
                            placeholder="Quận/Huyện"
                            className="border p-2 w-full"
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="text"
                            name="city"
                            value={formData.city}
                            placeholder="Thành phố"
                            className="border p-2 w-full"
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="text"
                            name="country"
                            value={formData.country}
                            placeholder="Quốc gia"
                            className="border p-2 w-full"
                            onChange={handleChange}
                            required
                        />

                        <button
                            type="submit"
                            className="bg-blue-600 text-white px-4 py-2 rounded w-full"
                            disabled={loading}
                        >
                            {loading ? 'Đang xử lý...' : 'Tiếp tục đến phương thức thanh toán'}
                        </button>
                    </form>

                </div>

                <div className="bg-gray-100 p-6 rounded shadow-md">
                    <h2 className="text-xl font-bold mb-4">Thông tin đơn hàng</h2>
                    <ul className="mb-4">
                        {items.map(item => (
                            <li key={item.id} className="flex items-center gap-4 border-b pb-2 relative">
                                <div className="relative">
                                    <img
                                        src={item.color.image_url}
                                        alt={item.product.product_name}
                                        className="w-20 h-20 object-cover rounded"
                                    />
                                    <span className="absolute top-0 right-0 bg-red-600 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center translate-x-1/2 -translate-y-1/2">
                                        {item.quantity}
                                    </span>
                                </div>
                                <div>
                                    <p className="font-bold">{item.product.product_name}</p>
                                    <p>Màu sắc: <span className="text-gray-700">{item.color.name}</span></p>
                                    <p>Kích thước: <span className="text-gray-700">{item.size.name}</span></p>
                                    <p>{(item.product.discount_price || item.product.price).toLocaleString()} VND</p>
                                </div>
                            </li>
                        ))}
                    </ul>

                    <CarrierSelection />

                    <div className="border-t pt-2 mt-4">
                        <p>Tạm tính: <span className="font-bold">
                            {calculateTotal().toLocaleString()} VND
                        </span></p>
                        <p>Phí vận chuyển: <span className="font-bold">
                            {(selectedCarrier?.price || 0).toLocaleString()} VND
                        </span></p>
                        <p>Giảm giá: <span className="font-bold text-green-500">
                            -{discountAmount.toLocaleString()} VND
                        </span></p>
                        <p className="text-xl font-bold mt-2">
                            Tổng tiền: <span className="text-red-500">
                                {calculateFinalPrice().toLocaleString()} VND
                            </span>
                        </p>
                    </div>

                    <div className="mt-4">
                        <div className="flex gap-2">
                            <input
                                type="text"
                                value={discountCode}
                                onChange={(e) => setDiscountCode(e.target.value)}
                                placeholder="Nhập mã giảm giá"
                                className="border p-2 flex-grow"
                            />
                            <button
                                onClick={handleApplyDiscount}
                                className="bg-blue-500 text-white px-4 py-2 rounded"
                            >
                                Áp dụng
                            </button>
                        </div>
                    </div>

                    {errorMessage && (
                        <div className="text-red-500 mt-4">{errorMessage}</div>
                    )}
                </div>
            </div>
        </Layout>
    );
};

export default CheckoutPage;
