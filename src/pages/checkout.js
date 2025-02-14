import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import Layout from '../components/Layout';
import { getCartId } from '@/utils/storage';
import { createOrder } from '../store/slices/orderSlice';

const CheckoutPage = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    
    // Đảm bảo error và message là string
    const { loading } = useSelector(state => state.order);
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');

    const [items, setItems] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    const [discountCode, setDiscountCode] = useState('');
    const [shippingFee, setShippingFee] = useState(0);
    const [discountAmount, setDiscountAmount] = useState(0);
    const [stockError, setStockError] = useState(null);

    useEffect(() => {
        const storedItems = localStorage.getItem('checkoutItems');
        if (storedItems) {
            setItems(JSON.parse(storedItems));
        }
    }, []);

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

    const calculateTotal = () => {
        return items.reduce((total, item) => total + (item.product?.discount_price || item.product?.price || 0) * item.quantity, 0);
    };

    const calculateFinalPrice = () => {
        return calculateTotal() + shippingFee - discountAmount;
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Reset all error states
        setStockError(null);
        setError('');
        setErrorMessage('');
        setMessage('');

        const orderData = {
            cart_id: getCartId(),
            carrier_id: 1,
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
            localStorage.setItem('orderDetails', JSON.stringify(result));
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

            // Đảm bảo error luôn là string
            const errorMessage = err?.message || 'Có lỗi xảy ra';
            setError(typeof errorMessage === 'string' ? errorMessage : JSON.stringify(errorMessage));
        }
    };

    // Component hiển thị lỗi tồn kho
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
                {/* Stock Error Message */}
                <div className="md:col-span-2">
                    <StockErrorAlert />
                </div>
                {/* Order Information Form */}
                <div className="bg-white p-6 rounded shadow-md">
                    <h1 className="text-2xl font-bold mb-4">Thông tin đặt hàng</h1>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <input type="text" name="name" placeholder="Họ và tên" className="border p-2 w-full" onChange={handleChange} required />
                        <input type="email" name="email" placeholder="Email" className="border p-2 w-full" onChange={handleChange} required />
                        <input type="text" name="phone" placeholder="Số điện thoại" className="border p-2 w-full" onChange={handleChange} required />
                        <input type="text" name="street" placeholder="Địa chỉ" className="border p-2 w-full" onChange={handleChange} required />
                        <input type="text" name="ward" placeholder="Phường/Xã" className="border p-2 w-full" onChange={handleChange} required />
                        <input type="text" name="district" placeholder="Quận/Huyện" className="border p-2 w-full" onChange={handleChange} required />
                        <input type="text" name="city" placeholder="Thành phố" className="border p-2 w-full" onChange={handleChange} required />
                        <input type="text" name="country" placeholder="Quốc gia" className="border p-2 w-full" onChange={handleChange} required />

                        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded w-full" disabled={loading}>
                            {loading ? 'Đang xử lý...' : 'Tiếp tục đến phương thức thanh toán'}
                        </button>
                    </form>
                </div>

                {/* Order Summary */}
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

                    <div className="border-t pt-2">
                        <p>Phí vận chuyển: <span className="font-bold">{shippingFee.toLocaleString()} VND</span></p>
                        <p>Giảm giá: <span className="font-bold text-green-500">-{discountAmount.toLocaleString()} VND</span></p>
                        <p className="text-xl font-bold mt-2">Tổng tiền: <span className="text-red-500">{calculateFinalPrice().toLocaleString()} VND</span></p>
                    </div>

                    {/* Apply Discount Code */}
                    <div className="mt-4">
                        <input
                            type="text"
                            placeholder="Nhập mã giảm giá"
                            className="border p-2 w-full mb-2"
                            value={discountCode}
                            onChange={(e) => setDiscountCode(e.target.value)}
                        />
                        <button 
                            onClick={handleApplyDiscount} 
                            className="bg-green-500 text-white px-4 py-2 rounded w-full hover:bg-green-600 transition-colors"
                        >
                            Áp dụng
                        </button>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default CheckoutPage;
