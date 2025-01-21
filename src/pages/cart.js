import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    createCartForGuest,
    createCartForUser,
    getCartItems,
    resetCartState,
    updateCartItemQuantity,
} from '../store/slices/cartSlice';
import { getToken, getCartId } from '../utils/storage';
import { useRouter } from 'next/router';

import Layout from '../components/Layout';

const CartPage = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    const { items, loading, error } = useSelector((state) => state.cart);

    useEffect(() => {
        const initializeCart = async () => {
            try {
                let cartResponse;

                if (!getCartId()) {
                    if (!getToken()) {
                        cartResponse = await dispatch(createCartForGuest()).unwrap();
                    } else {
                        cartResponse = await dispatch(createCartForUser()).unwrap();
                    }

                    if (cartResponse?.id) {
                        await dispatch(getCartItems(cartResponse.id));
                    }
                } else {
                    await dispatch(getCartItems(getCartId()));
                }
            } catch (err) {
                console.error('Failed to initialize cart:', err);
            }
        };

        initializeCart();

        return () => {
            dispatch(resetCartState());
        };
    }, [dispatch]);

    const handleQuantityChange = (itemId, newQuantity) => {
        if (newQuantity > 0) {
            dispatch(updateCartItemQuantity({ itemId, quantity: newQuantity }))
                .unwrap()
                .then(() => {
                    console.log('Quantity updated successfully');
                })
                .catch((err) => {
                    console.error('Failed to update quantity:', err);
                });
        }
    };

    const calculateTotal = () => {
        return items.reduce(
            (total, item) =>
                total +
                (item.product?.discount_price || item.product?.price || 0) * item.quantity,
            0
        );
    };

    if (loading) return <div className="text-center py-10 text-xl">Loading cart...</div>;

    if (error) return <div className="text-center text-red-500 py-10">{error}</div>;

    return (
        <Layout>
            <div className="container mx-auto px-4 py-6 flex flex-col lg:flex-row lg:gap-8">
                {/* Cart Items */}
                <div className="lg:w-2/3">
                    <h1 className="text-2xl font-bold mb-6 border-b pb-4">GIỎ HÀNG CỦA BẠN</h1>
                    {!items || items.length === 0 ? (
                        <p className="text-center text-lg">Your cart is empty.</p>
                    ) : (
                        <ul className="space-y-4">
                            {items.map((item) => {
                                const product = item.product || {};
                                const color = item.color?.color || 'N/A';
                                const size = item.size?.size || 'N/A';

                                return (
                                    <li key={item.id} className="flex gap-4">
                                        {/* Product Image */}
                                        <img
                                            src={
                                                product.productColors?.[0]?.ProductColor?.image ||
                                                'https://via.placeholder.com/100'
                                            }
                                            alt={product.product_name || 'Product'}
                                            className="w-24 h-24 object-cover rounded border"
                                        />
                                        {/* Product Details */}
                                        <div className="flex-1">
                                            <h3 className="text-lg font-semibold">
                                                {product.product_name || 'Unknown Product'}
                                            </h3>
                                            <p className="text-gray-700">
                                                Color: <span className="font-medium">{color}</span>
                                            </p>
                                            <p className="text-gray-700">
                                                Size: <span className="font-medium">{size}</span>
                                            </p>
                                            <p className="font-bold text-red-500">
                                                Price:{' '}
                                                {product.discount_price || product.price || 'N/A'} VND
                                            </p>
                                            <div className="flex items-center gap-2 mt-2">
                                                <button
                                                    onClick={() =>
                                                        handleQuantityChange(item.id, item.quantity - 1)
                                                    }
                                                    className="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300"
                                                >
                                                    -
                                                </button>
                                                <span className="text-lg font-medium">
                                                    {item.quantity}
                                                </span>
                                                <button
                                                    onClick={() =>
                                                        handleQuantityChange(item.id, item.quantity + 1)
                                                    }
                                                    className="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300"
                                                >
                                                    +
                                                </button>
                                            </div>
                                        </div>
                                    </li>
                                );
                            })}
                        </ul>
                    )}
                </div>

                {/* Order Summary */}
                <div className="w-full lg:w-1/3 bg-white p-4 rounded shadow-md self-start">
                    <h2 className="text-xl font-bold mb-4 border-b pb-4 text-center lg:text-left">
                        THÔNG TIN ĐƠN HÀNG
                    </h2>
                    <p className="text-lg text-center lg:text-left">
                        Total:{' '}
                        <span className="font-semibold">
                            {calculateTotal().toLocaleString()} VND
                        </span>
                    </p>
                    <button
                        onClick={() => router.push('/checkout')}
                        disabled={!items || items.length === 0}
                        className="mt-6 w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-red-700 transition disabled:bg-gray-400"
                    >
                        THANH TOÁN
                    </button>
                </div>
            </div>
        </Layout>
    );
};

export default CartPage;
