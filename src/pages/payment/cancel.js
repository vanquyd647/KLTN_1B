// pages/payment/cancel.js
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const PaymentCancel = () => {
    const router = useRouter();
    const { code, orderCode, status } = router.query;
    const [message, setMessage] = useState('Đang xử lý hủy thanh toán...');

    useEffect(() => {
        if (!router.isReady) return;

        const updatePaymentStatus = async () => {
            try {
                // Gọi API webhook để cập nhật trạng thái
                const response = await fetch('http://localhost:5551/v1/api/payments/payos-webhook', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        orderCode: Number(orderCode),
                        status: status === 'PAID' ? 'paid' : 'cancelled',
                        transactionId: Date.now().toString() // hoặc lấy từ response PayOS nếu có
                    }),
                });

                if (!response.ok) {
                    throw new Error('Không thể cập nhật trạng thái thanh toán');
                }

                setMessage('Đã hủy thanh toán');

                localStorage.removeItem('orderDetails');

                // Chuyển về trang checkout sau 3 giây
                setTimeout(() => {
                    router.push('/checkout');
                }, 3000);

            } catch (error) {
                console.error('Lỗi cập nhật trạng thái:', error);
                setMessage('Có lỗi xảy ra khi cập nhật trạng thái');
            }
        };

        updatePaymentStatus();
    }, [router.isReady, orderCode]);

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="max-w-md w-full bg-white rounded-lg shadow-md p-8">
                <div className="text-center">
                    <div className="mb-4">
                        <svg
                            className="mx-auto h-12 w-12 text-yellow-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                            />
                        </svg>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">
                        {message}
                    </h2>
                    <p className="text-gray-600">
                        Bạn đã hủy quá trình thanh toán.
                    </p>
                    <p className="text-gray-600 mt-2">
                        Vui lòng thử lại hoặc chọn phương thức thanh toán khác.
                    </p>
                    <p className="text-sm text-gray-500 mt-4">
                        Tự động chuyển về trang thanh toán sau 3 giây...
                    </p>
                </div>
            </div>
        </div>
    );
};

export default PaymentCancel;
