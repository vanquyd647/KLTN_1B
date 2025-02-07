import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Layout from '../components/Layout';

const PaymentPage = () => {
    const router = useRouter();
    const [order, setOrder] = useState(null);

    useEffect(() => {
        const storedOrder = localStorage.getItem('orderDetails');
        if (storedOrder) {
            try {
                const parsedOrder = JSON.parse(storedOrder);
                
                // Check if parsed data has `orderId` instead of `id`
                if (parsedOrder && (parsedOrder.id || parsedOrder.orderId)) {
                    setOrder({
                        id: parsedOrder.id || parsedOrder.orderId, // Normalize the key
                        payment_method: parsedOrder.payment_method || "default",
                        final_price: parsedOrder.final_price || 0
                    });
                } else {
                    console.error('Invalid order data:', parsedOrder);
                }
            } catch (error) {
                console.error('Error parsing order details:', error);
            }
        } else {
            console.error('No order details found in localStorage.');
        }
    }, []);
    



    const handlePayment = async () => {
        try {
            const response = await fetch('http://localhost:5551/v1/api/payments', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ order_id: order?.id, payment_method: order?.payment_method }),
            });

            if (!response.ok) {
                throw new Error('Payment failed');
            }

            const result = await response.json();
            console.log('Payment successful:', result);
            router.push('/payment-success');
        } catch (error) {
            console.error('Error processing payment:', error);
        }
    };

    if (!order) return <div className="text-center py-10 text-xl">Loading payment details...</div>;

    return (
        <Layout>
            <div className="container mx-auto px-4 py-6">
                <h1 className="text-2xl font-bold mb-6">Payment</h1>
                <div className="bg-gray-100 p-4 rounded">
                    <h2 className="text-xl font-bold">Order Summary</h2>
                    <p>Final Price: <span className="font-bold text-red-500">{order.final_price.toLocaleString()} VND</span></p>
                </div>
                <button onClick={handlePayment} className="mt-6 w-full bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">
                    Confirm Payment
                </button>
            </div>
        </Layout>
    );
};

export default PaymentPage;
