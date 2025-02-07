import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import Layout from '../components/Layout';

const CheckoutPage = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    const [items, setItems] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

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
        payment_method: 'credit_card',
    });

    const calculateTotal = () => {
        return items.reduce((total, item) => total + (item.product?.discount_price || item.product?.price || 0) * item.quantity, 0);
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const orderData = {
            carrier_id: 1,
            discount_code: "DISCOUNT10",
            discount_amount: 10.00,
            original_price: calculateTotal(),
            discounted_price: calculateTotal() - 10.00,
            final_price: calculateTotal() - 10.00,
            payment_method: formData.payment_method,
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
        
        try {
            const response = await fetch('http://localhost:5551/v1/api/orders', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(orderData),
            });
            
            const result = await response.json();
            
            if (!response.ok) {
                if (result.status === 'error' && result.message.includes('Không đủ hàng trong kho')) {
                    setErrorMessage(result.message);
                    return;
                }
                throw new Error('Failed to submit order');
            }
            
            console.log('Order submitted successfully:', result);
            
            localStorage.setItem('orderDetails', JSON.stringify(result));
            
            router.push('/payment');
        } catch (error) {
            console.error('Error submitting order:', error);
        }
    };

    return (
        <Layout>
            <div className="container mx-auto px-4 py-6">
                <h1 className="text-2xl font-bold mb-6">Checkout</h1>
                {errorMessage && <p className="text-red-500 text-lg font-bold">{errorMessage}</p>}
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input type="text" name="name" placeholder="Full Name" className="border p-2 w-full" onChange={handleChange} required />
                    <input type="email" name="email" placeholder="Email" className="border p-2 w-full" onChange={handleChange} required />
                    <input type="text" name="phone" placeholder="Phone" className="border p-2 w-full" onChange={handleChange} required />
                    <input type="text" name="street" placeholder="Street" className="border p-2 w-full" onChange={handleChange} required />
                    <input type="text" name="ward" placeholder="Ward" className="border p-2 w-full" onChange={handleChange} required />
                    <input type="text" name="district" placeholder="District" className="border p-2 w-full" onChange={handleChange} required />
                    <input type="text" name="city" placeholder="City" className="border p-2 w-full" onChange={handleChange} required />
                    <input type="text" name="country" placeholder="Country" className="border p-2 w-full" onChange={handleChange} required />
                    
                    <div className="bg-gray-100 p-4 rounded">
                        <h2 className="text-xl font-bold">Order Summary</h2>
                        <p>Total Price: <span className="font-bold text-red-500">{calculateTotal().toLocaleString()} VND</span></p>
                        <ul>
                            {items.map(item => (
                                <li key={item.product.id} className="text-gray-700">
                                    {item.product.product_name} - {item.quantity} x {(item.product.discount_price || item.product.price).toLocaleString()} VND
                                </li>
                            ))}
                        </ul>
                    </div>
                    
                    <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded w-full">Place Order</button>
                </form>
            </div>
        </Layout>
    );
};

export default CheckoutPage;