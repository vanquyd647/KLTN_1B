// pages/payment/success.js
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { paymentApi, orderApi } from '../../utils/apiClient';

const PaymentSuccess = () => {
    const router = useRouter();
    const { code, orderCode, status, method } = router.query;
    const [message, setMessage] = useState('Đang xử lý thanh toán...');
    const [isSuccess, setIsSuccess] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        if (!router.isReady) return;

        const updatePaymentStatus = async () => {
            try {
                // Lấy thông tin đơn hàng từ localStorage
                const orderDetails = JSON.parse(localStorage.getItem('orderDetails'));
                const checkoutItems = JSON.parse(localStorage.getItem('checkoutItems'));

                // Kiểm tra null
                if (!orderDetails || !checkoutItems) {
                    console.error('Không tìm thấy thông tin đơn hàng');
                    setIsSuccess(false);
                    setMessage('Có lỗi xảy ra');
                    setErrorMessage('Không tìm thấy thông tin đơn hàng');
                    setTimeout(() => router.push('/checkout'), 3000);
                    return;
                }

                // Format lại checkoutItems theo cấu trúc yêu cầu
                const formattedCheckoutItems = checkoutItems.map(item => ({
                    product: {
                        product_name: item.product.product_name,
                        price: item.product.discount_price
                    },
                    quantity: item.quantity,
                    size: {
                        name: item.size.name
                    },
                    color: {
                        name: item.color.name,
                        image_url: item.color.image_url
                    }
                }));

                const emailData = {
                    checkoutItems: formattedCheckoutItems,
                    orderDetails: {
                        data: {
                            order_id: orderDetails.data.order_id,
                            email: orderDetails.data.email,
                            original_price: orderDetails.data.original_price,
                            amount: orderDetails.data.amount,
                            shipping_fee: orderDetails.data.shipping_fee,
                            discount_amount: orderDetails.data.discount_amount || 0,
                            expires_at: orderDetails.data.expires_at,
                            formData: orderDetails.data.formData
                        }
                    }
                };

                if (method === 'cod') {
                    if (code === '00' && status === 'PAID') {
                        try {
                            // Gửi email trước
                            await orderApi.sendOrderConfirmation(emailData);
                            
                            setIsSuccess(true);
                            setMessage('Đặt hàng thành công!');
                            
                            // Xóa localStorage sau khi gửi email thành công
                            localStorage.removeItem('orderDetails');
                            localStorage.removeItem('checkoutItems');
                            
                            setTimeout(() => router.push('/'), 3000);
                        } catch (emailError) {
                            console.error('Lỗi gửi email xác nhận:', emailError);
                            setIsSuccess(true); // Vẫn xem như thành công vì đơn hàng đã được tạo
                            setMessage('Đặt hàng thành công!');
                            setErrorMessage('Không gửi được email xác nhận, nhưng đơn hàng đã được ghi nhận');
                            
                            setTimeout(() => router.push('/'), 3000);
                        }
                    } else {
                        setIsSuccess(false);
                        setMessage('Đặt hàng thất bại!');
                        setErrorMessage('Vui lòng thử lại hoặc liên hệ hỗ trợ');
                        setTimeout(() => router.push('/checkout'), 3000);
                    }
                } else {
                    try {
                        // Xử lý thanh toán VietQR
                        await paymentApi.updatePaymentStatus({
                            orderCode: Number(orderCode),
                            status: status === 'CANCELLED' ? 'cancelled' : 'paid',
                            transactionId: Date.now().toString()
                        });

                        if (code === '00' && status === 'PAID') {
                            try {
                                // Gửi email trước
                                await orderApi.sendOrderConfirmation(emailData);
                                
                                setIsSuccess(true);
                                setMessage('Thanh toán thành công!');
                                
                                // Xóa localStorage sau khi gửi email thành công
                                localStorage.removeItem('orderDetails');
                                localStorage.removeItem('checkoutItems');
                                
                                setTimeout(() => router.push('/'), 3000);
                            } catch (emailError) {
                                console.error('Lỗi gửi email xác nhận:', emailError);
                                setIsSuccess(true);
                                setMessage('Thanh toán thành công!');
                                setErrorMessage('Không gửi được email xác nhận, nhưng thanh toán đã được ghi nhận');
                                
                                localStorage.removeItem('orderDetails');
                                localStorage.removeItem('checkoutItems');
                                
                                setTimeout(() => router.push('/'), 3000);
                            }
                        } else {
                            setIsSuccess(false);
                            setMessage('Thanh toán thất bại!');
                            setErrorMessage('Vui lòng thử lại hoặc chọn phương thức thanh toán khác');
                            setTimeout(() => router.push('/checkout'), 3000);
                        }
                    } catch (error) {
                        console.error('Lỗi cập nhật trạng thái:', error);
                        setIsSuccess(false);
                        setMessage('Có lỗi xảy ra');
                        setErrorMessage('Không thể cập nhật trạng thái thanh toán. Vui lòng liên hệ hỗ trợ');
                        setTimeout(() => router.push('/checkout'), 3000);
                    }
                }
            } catch (error) {
                console.error('Lỗi xử lý:', error);
                setIsSuccess(false);
                setMessage('Có lỗi xảy ra');
                setErrorMessage(error.message || 'Vui lòng thử lại sau');
                setTimeout(() => router.push('/checkout'), 3000);
            }
        };

        updatePaymentStatus();
    }, [router.isReady, code, orderCode, status, method, router]);

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="max-w-md w-full bg-white rounded-lg shadow-md p-8">
                <div className="text-center">
                    {isSuccess ? (
                        <>
                            <div className="mb-4">
                                <svg
                                    className="mx-auto h-12 w-12 text-green-500"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M5 13l4 4L19 7"
                                    />
                                </svg>
                            </div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-2">
                                {message}
                            </h2>
                            <p className="text-gray-600">
                                Cảm ơn bạn đã đặt hàng. Đơn hàng của bạn đang được xử lý.
                            </p>
                            {errorMessage && (
                                <p className="text-yellow-600 mt-2">{errorMessage}</p>
                            )}
                            <p className="text-sm text-gray-500 mt-4">
                                Tự động chuyển hướng sau 3 giây...
                            </p>
                        </>
                    ) : (
                        <>
                            <div className="mb-4">
                                <svg
                                    className="mx-auto h-12 w-12 text-red-500"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-2">
                                {message}
                            </h2>
                            <p className="text-gray-600">
                                {errorMessage || 'Đang trong quá trình xử lý. Vui lòng chờ.'}
                            </p>
                            <p className="text-sm text-gray-500 mt-4">
                                Đang chuyển về trang thanh toán...
                            </p>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default PaymentSuccess;
