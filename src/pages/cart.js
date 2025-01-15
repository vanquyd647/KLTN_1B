import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    createCartForGuest,
    createCartForUser,
    getCartItems,
    resetCartState,
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
                        // Tạo giỏ hàng cho khách
                        cartResponse = await dispatch(createCartForGuest()).unwrap();
                    } else {
                        // Tạo giỏ hàng cho người dùng đã đăng nhập
                        cartResponse = await dispatch(createCartForUser()).unwrap();
                    }

                    // Lấy danh sách sản phẩm trong giỏ hàng
                    if (cartResponse?.id) {
                        await dispatch(getCartItems(cartResponse.id));
                    }
                } else {
                    // Lấy danh sách sản phẩm trong giỏ hàng hiện tại
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

    const handleCheckout = () => {
        if (!getToken()) {
            alert('Please log in to proceed to checkout.');
            router.push('/login');
        } else {
            router.push('/checkout');
        }
    };

    if (loading) return <div className="text-center py-10 text-xl">Loading cart...</div>;

    if (error) return <div className="text-center text-red-500 py-10">{error}</div>;

    return (
        <Layout>
            <div className="container mx-auto px-4 py-6">
                <h1 className="text-2xl font-bold mb-6">Your Cart</h1>
                {!items || items.length === 0 ? (
                    <p className="text-center text-lg">Your cart is empty.</p>
                ) : (
                    <ul className="space-y-4">
                        {items.map((item) => {
                            const product = item.product || {};
                            const productColors = product.productColors || [];
                            const selectedColor = productColors.find(
                                (color) => color.id === item.color?.id
                            );

                            return (
                                <li
                                    key={item.id}
                                    className="flex gap-4 p-4 border rounded shadow-md"
                                >
                                    <img
                                        src={
                                            selectedColor?.ProductColor?.image ||
                                            'https://via.placeholder.com/100'
                                        }
                                        alt={product.product_name || 'Product'}
                                        className="w-24 h-24 object-cover rounded"
                                    />
                                    <div className="flex-1">
                                        <h3 className="text-lg font-semibold">
                                            {product.product_name || 'Unknown Product'}
                                        </h3>
                                        <p className="text-gray-700">
                                            {product.description || 'No description available.'}
                                        </p>
                                        <p className="font-bold text-red-500">
                                            Price: {product.discount_price || product.price || 'N/A'}{' '}
                                            VND
                                        </p>
                                        <p>Quantity: {item.quantity}</p>
                                        <p>Size: {item.size?.size || 'N/A'}</p>
                                        <p>Color: {item.color?.color || 'N/A'}</p>
                                        <p>
                                            Stock: {item.stock?.quantity || 'Out of stock'}
                                        </p>
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                )}
                <button
                    onClick={handleCheckout}
                    disabled={!items || items.length === 0}
                    className="mt-6 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition disabled:bg-gray-400"
                >
                    Proceed to Checkout
                </button>
            </div>
        </Layout>
    );
};

export default CartPage;
