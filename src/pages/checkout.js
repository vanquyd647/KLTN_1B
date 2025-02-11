import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import Layout from '../components/Layout';
import { getCartId } from '@/utils/storage';
import { createOrder } from '../store/slices/orderSlice';

const CheckoutPage = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    const { loading, error, message } = useSelector(state => state.order);
    
    const [items, setItems] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    const [discountCode, setDiscountCode] = useState('');
    const [shippingFee, setShippingFee] = useState(30000); // Assume a shipping fee of 30,000 VND
    const [discountAmount, setDiscountAmount] = useState(0);

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
            setDiscountAmount(10000); // Discount 10,000 VND if code is "DISCOUNT10"
        } else {
            setDiscountAmount(0);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

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

        console.log('Submitting order:', orderData);

        dispatch(createOrder(orderData))
            .unwrap()
            .then((result) => {
                console.log('Order submitted successfully:', result);
                localStorage.setItem('orderDetails', JSON.stringify(result));
                router.push('/payment');
            })
            .catch((err) => {
                console.error('Error submitting order:', err);
                setErrorMessage(err.message || 'Failed to submit order.');
            });
    };

    return (
        <Layout>
            <div className="container mx-auto px-4 py-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Order Information Form */}
                <div className="bg-white p-6 rounded shadow-md">
                    <h1 className="text-2xl font-bold mb-4">Thông tin đặt hàng</h1>
                    {errorMessage && <p className="text-red-500">{errorMessage}</p>}
                    {error && <p className="text-red-500">{error}</p>}
                    {message && <p className="text-green-500">{message}</p>}
                    
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
                            {loading ? 'Processing...' : 'Tiếp tục đến phương thức thanh toán'}
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
                        <button onClick={handleApplyDiscount} className="bg-green-500 text-white px-4 py-2 rounded w-full">Áp dụng</button>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default CheckoutPage;
