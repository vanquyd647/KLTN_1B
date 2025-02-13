// pages/payment/success.js
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { paymentApi } from '../../utils/apiClient';

const PaymentSuccess = () => {
    const router = useRouter();
    const { code, orderCode, status, method } = router.query;
    const [message, setMessage] = useState('Đang xử lý thanh toán...');
    const [isSuccess, setIsSuccess] = useState(false);

    useEffect(() => {
        if (!router.isReady) return;

        const updatePaymentStatus = async () => {
            try {
                if (method === 'cod') {
                    // Xử lý thanh toán COD
                    if (code === '00' && status === 'PAID') {
                        setIsSuccess(true);
                        setMessage('Đặt hàng thành công!');
                        localStorage.removeItem('orderDetails');
                        localStorage.removeItem('checkoutItems');
                        setTimeout(() => router.push('/'), 3000);
                    } else {
                        setIsSuccess(false);
                        setMessage('Đặt hàng thất bại!');
                        setTimeout(() => router.push('/checkout'), 3000);
                    }
                } else {
                    // Xử lý thanh toán VietQR
                    await paymentApi.updatePaymentStatus({
                        orderCode: Number(orderCode),
                        status: status === 'CANCELLED' ? 'cancelled' : 'paid',
                        transactionId: Date.now().toString()
                    });

                    if (code === '00' && status === 'PAID') {
                        setIsSuccess(true);
                        setMessage('Thanh toán thành công!');
                        localStorage.removeItem('orderDetails');
                        localStorage.removeItem('checkoutItems');
                        setTimeout(() => router.push('/'), 3000);
                    } else {
                        setIsSuccess(false);
                        setMessage('Thanh toán thất bại!');
                        setTimeout(() => router.push('/checkout'), 3000);
                    }
                }
            } catch (error) {
                console.error('Lỗi cập nhật trạng thái:', error);
                setIsSuccess(false);
                setMessage('Có lỗi xảy ra khi cập nhật trạng thái');
            }
        };

        updatePaymentStatus();
    }, [router.isReady, code, orderCode, status, method]);

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
                                Cảm ơn bạn đã thanh toán. Đơn hàng của bạn đang được xử lý.
                            </p>
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
                                Đã có lỗi xảy ra trong quá trình thanh toán. Vui lòng thử lại.
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
