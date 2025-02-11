import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import Layout from '../components/Layout';

const PaymentPage = () => {
    const router = useRouter();
    const [order, setOrder] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        // Lấy thông tin đơn hàng từ query params hoặc localStorage
        const initializeOrder = () => {
            try {
                const storedOrder = localStorage.getItem('orderDetails');
                if (storedOrder) {
                    const parsedOrder = JSON.parse(storedOrder);
                    if (parsedOrder && (parsedOrder.id || parsedOrder.orderId)) {
                        setOrder({
                            id: parsedOrder.id || parsedOrder.orderId,
                            payment_method: "payos",
                            final_price: parsedOrder.final_price || parsedOrder.amount || 2000,
                            email: parsedOrder.email || "customer@example.com"
                        });
                    }
                } else {
                    setError("Không tìm thấy thông tin đơn hàng");
                }
            } catch (error) {
                console.error('❌ Error initializing order:', error);
                setError("Lỗi khi đọc thông tin đơn hàng");
            }
        };

        if (router.isReady) {
            initializeOrder();
        }
    }, [router.isReady]);

    const handlePayment = async () => {
        if (!order) {
            setError("Không tìm thấy thông tin đơn hàng.");
            return;
        }

        setLoading(true);
        setError("");

        try {
            const response = await fetch('http://localhost:5551/v1/api/payments/payos', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    order_id: order.id,
                    amount: order.final_price,
                    email: order.email
                }),
            });
        
            const paymentData = await response.json();
            
            console.log("PayOS Response:", paymentData);
        
            if (!response.ok) {
                throw new Error('Không thể khởi tạo thanh toán với PayOS');
            }
        
            // Lưu thông tin thanh toán vào localStorage
            localStorage.setItem('paymentInfo', JSON.stringify({
                orderCode: paymentData.orderCode,
                paymentLinkId: paymentData.paymentLinkId,
                amount: paymentData.amount,
                status: paymentData.status
            }));
        
            // Kiểm tra và chuyển hướng
            if (!paymentData.checkoutUrl) {
                throw new Error('URL thanh toán không hợp lệ');
            }
        
            console.log("✅ Chuyển hướng đến:", paymentData.checkoutUrl);
            
            // Chuyển hướng đến trang thanh toán PayOS
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
        <Layout>
            <div className="container mx-auto px-4 py-6">
                <h1 className="text-2xl font-bold mb-6">Thanh toán với PayOS</h1>

                {error && (
                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                        <p>{error}</p>
                    </div>
                )}

                {order && (
                    <div className="bg-gray-100 p-4 rounded mb-4">
                        <h2 className="font-semibold mb-2">Thông tin đơn hàng:</h2>
                        <p>Mã đơn hàng: {order.id}</p>
                        <p>Số tiền: {order.final_price.toLocaleString('vi-VN')} VNĐ</p>
                        <p>Email: {order.email}</p>
                    </div>
                )}

                <button
                    onClick={handlePayment}
                    className={`mt-6 w-full px-4 py-2 rounded transition duration-200 ${loading
                        ? 'bg-gray-400 cursor-not-allowed'
                        : 'bg-green-600 hover:bg-green-700 text-white'
                        }`}
                    disabled={loading || !order}
                >
                    {loading ? (
                        <div className="flex items-center justify-center">
                            <span className="mr-2">Đang xử lý...</span>
                        </div>
                    ) : (
                        "Thanh toán với PayOS"
                    )}
                </button>
            </div>
        </Layout>
    );
};

export default dynamic(() => Promise.resolve(PaymentPage), {
    ssr: false
});
