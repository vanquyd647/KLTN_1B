import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import { paymentApi } from '../utils/apiClient';


const PaymentPage = () => {
    const router = useRouter();
    const [order, setOrder] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [paymentMethod, setPaymentMethod] = useState(""); // cod hoặc vietqr
    const [timeLeft, setTimeLeft] = useState(null);

    useEffect(() => {
        const initializeOrder = () => {
            try {
                const storedOrder = localStorage.getItem('orderDetails');
                if (storedOrder) {
                    const parsedOrder = JSON.parse(storedOrder);
                    if (parsedOrder && parsedOrder.data) {
                        setOrder({
                            id: parsedOrder.data.order_id,
                            payment_method: "",
                            final_price: parsedOrder.data.amount,
                            email: parsedOrder.data.email,
                            // Thêm các trường mới
                            shipping_fee: parsedOrder.data.shipping_fee,
                            discount_amount: parsedOrder.data.discount_amount,
                            subtotal: parsedOrder.data.amount, // giá trước khi tính ship và giảm giá
                            expires_at: parsedOrder.data.expires_at,
                            formData: parsedOrder.data.formData,
                        });
                    } else {
                        setError("Không tìm thấy thông tin đơn hàng");
                    }
                }
            } catch (error) {
                console.error('❌ Error:', error);
                setError("Lỗi khi đọc thông tin đơn hàng");
            }
        };

        if (router.isReady) {
            initializeOrder();
        }
    }, [router.isReady]);

    const calculateTimeLeft = (expiryTime) => {
        const now = new Date().getTime();
        const expiryDate = new Date(expiryTime).getTime();
        const difference = expiryDate - now;

        if (difference <= 0) {
            return null;
        }

        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        return {
            minutes: minutes,
            seconds: seconds
        };
    };


    useEffect(() => {
        if (!order?.expires_at) return;

        const timer = setInterval(() => {
            const timeLeft = calculateTimeLeft(order.expires_at);

            if (!timeLeft) {
                clearInterval(timer);
                localStorage.removeItem('orderDetails');
                localStorage.removeItem('checkoutItems');
                router.push('/cart');
                return;
            }

            setTimeLeft(timeLeft);
        }, 1000);

        return () => clearInterval(timer);
    }, [order?.expires_at, router]);


    const handlePaymentMethodSelect = (method) => {
        setPaymentMethod(method);
        setError("");
    };

    const handleCompletePayment = async () => {
        if (!paymentMethod) {
            setError("Vui lòng chọn phương thức thanh toán");
            return;
        }

        if (paymentMethod === "cod") {
            try {
                setLoading(true);
                const result = await paymentApi.createCODPayment({
                    order_id: order.id,
                    amount: order.final_price,
                    email: order.email
                });

                // Lưu thông tin thanh toán
                localStorage.setItem('paymentInfo', JSON.stringify({
                    orderId: order.id,
                    paymentId: result.payment_id,
                    amount: result.amount,
                    method: result.payment_method
                }));

                // Xóa thông tin đơn hàng cũ
                localStorage.removeItem('orderDetails');

                // Chuyển hướng với query params
                router.push({
                    pathname: '/payment/success',
                    query: {
                        code: '00',
                        orderCode: order.id,
                        status: 'PAID',
                        method: 'cod'
                    }
                });

            } catch (error) {
                console.error('❌ Lỗi thanh toán COD:', error);
                router.push({
                    pathname: '/payment/success',
                    query: {
                        code: '99',
                        orderCode: order.id,
                        status: 'CANCELLED',
                        method: 'cod'
                    }
                });
            } finally {
                setLoading(false);
            }
        } else if (paymentMethod === "vietqr") {
            handleVietQRPayment();
        }
    };


    const handleVietQRPayment = async () => {
        if (!order) {
            setError("Không tìm thấy thông tin đơn hàng.");
            return;
        }

        setLoading(true);
        setError("");

        try {
            const paymentData = await paymentApi.createPayOSPayment({
                order_id: order.id,
                amount: order.final_price,
                email: order.email
            });

            localStorage.setItem('paymentInfo', JSON.stringify({
                orderCode: paymentData.orderCode,
                paymentLinkId: paymentData.paymentLinkId,
                amount: paymentData.amount,
                status: paymentData.status
            }));

            if (!paymentData.checkoutUrl) {
                throw new Error('URL thanh toán không hợp lệ');
            }

            window.location.href = paymentData.checkoutUrl.checkoutUrl;

        } catch (error) {
            console.error('❌ Lỗi thanh toán:', error);
            setError("Thanh toán thất bại, vui lòng thử lại!");
        } finally {
            setLoading(false);
        }
    };

    if (!router.isReady) {
        return <div>Đang tải...</div>;
    }

    return (
            <div className="container mx-auto px-4 py-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Phần bên trái - Thông tin đơn hàng và phương thức thanh toán */}
                <div className="bg-white p-6 rounded shadow-md">
                    <h1 className="text-2xl font-bold mb-6">Thanh toán đơn hàng</h1>

                    {error && (
                        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                            <p>{error}</p>
                        </div>
                    )}

                    {order && (
                        <div className="bg-gray-100 p-4 rounded mb-6">
                            <h2 className="font-semibold mb-2">Thông tin đơn hàng:</h2>
                            <p className="mb-1">Mã đơn hàng: {order.id}</p>

                            <div className="border-t border-gray-300 my-3"></div>

                            <h3 className="font-semibold mb-2">Thông tin người nhận:</h3>
                            <p className="mb-1">Họ tên: {order.formData.name}</p>
                            <p className="mb-1">Email: {order.formData.email}</p>
                            <p className="mb-1">Số điện thoại: {order.formData.phone}</p>

                            <div className="border-t border-gray-300 my-3"></div>

                            <h3 className="font-semibold mb-2">Địa chỉ giao hàng:</h3>
                            <p className="mb-1">Đường: {order.formData.street}</p>
                            <p className="mb-1">Phường/Xã: {order.formData.ward}</p>
                            <p className="mb-1">Quận/Huyện: {order.formData.district}</p>
                            <p className="mb-1">Tỉnh/Thành phố: {order.formData.city}</p>
                            <p className="mb-1">Quốc gia: {order.formData.country}</p>

                            {/* Bộ đếm ngược */}
                            {timeLeft && (
                                <div className="mt-3 pt-3 border-t border-gray-300">
                                    <p className="text-red-600 font-semibold">
                                        Thời gian còn lại để thanh toán: {timeLeft.minutes}:{timeLeft.seconds < 10 ? `0${timeLeft.seconds}` : timeLeft.seconds}
                                    </p>
                                </div>
                            )}
                        </div>
                    )}


                    <div className="space-y-4">
                        <h2 className="text-xl font-semibold">Chọn phương thức thanh toán:</h2>

                        <div className="space-y-3">
                            <div
                                className={`p-4 border rounded cursor-pointer ${paymentMethod === 'cod' ? 'border-blue-500 bg-blue-50' : 'border-gray-200'
                                    }`}
                                onClick={() => handlePaymentMethodSelect('cod')}
                            >
                                <h3 className="font-semibold">Thanh toán khi nhận hàng (COD)</h3>
                                <p className="text-sm text-gray-600">Thanh toán bằng tiền mặt khi nhận hàng</p>
                            </div>

                            <div
                                className={`p-4 border rounded cursor-pointer ${paymentMethod === 'vietqr' ? 'border-blue-500 bg-blue-50' : 'border-gray-200'
                                    }`}
                                onClick={() => handlePaymentMethodSelect('vietqr')}
                            >
                                <h3 className="font-semibold">Chuyển khoản qua VietQR</h3>
                                <p className="text-sm text-gray-600">Thanh toán bằng mã QR qua ứng dụng ngân hàng</p>
                            </div>
                        </div>

                        <button
                            onClick={handleCompletePayment}
                            className={`w-full px-4 py-2 rounded transition duration-200 ${loading || !paymentMethod
                                ? 'bg-red-600 cursor-not-allowed'
                                : 'bg-green-600 hover:bg-green-700 text-white'
                                }`}
                            disabled={loading || !paymentMethod}
                        >
                            {loading ? (
                                <div className="flex items-center justify-center">
                                    <span className="mr-2">Đang xử lý...</span>
                                </div>
                            ) : (
                                "Hoàn tất đơn hàng"
                            )}
                        </button>
                    </div>
                </div>

                {/* Phần bên phải - Chi tiết sản phẩm */}
                <div className="bg-gray-100 p-6 rounded shadow-md">
                    <h2 className="text-xl font-bold mb-4">Chi tiết đơn hàng</h2>

                    {order && (
                        <>
                            <div className="mb-4">
                                {/* Lấy items từ localStorage */}
                                {JSON.parse(localStorage.getItem('checkoutItems'))?.map(item => (
                                    <div key={item.id} className="flex items-center gap-4 border-b pb-4 mb-4">
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
                                    </div>
                                ))}
                            </div>

                            <div className="border-t pt-4">
                                <p className="flex justify-between mb-2">
                                    <span>Tạm tính:</span>
                                    <span>{order.subtotal?.toLocaleString()} VND</span>
                                </p>
                                <p className="flex justify-between mb-2">
                                    <span>Phí vận chuyển:</span>
                                    <span>{order.shipping_fee?.toLocaleString()} VND</span>
                                </p>
                                <p className="flex justify-between mb-2">
                                    <span>Giảm giá:</span>
                                    <span>-{order.discount_amount?.toLocaleString()} VND</span>
                                </p>
                                <p className="flex justify-between font-bold text-xl mt-4">
                                    <span>Tổng cộng:</span>
                                    <span className="text-red-500">
                                        {order.final_price?.toLocaleString()} VND
                                    </span>
                                </p>
                            </div>

                        </>
                    )}
                </div>
            </div>
    );
};

export default dynamic(() => Promise.resolve(PaymentPage), {
    ssr: false
});
