import React, { useEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    createCartForGuest,
    createCartForUser,
    getCartItems,
    resetCartState,
    updateCartItemQuantity,
    removeCartItem,
} from '../store/slices/cartSlice';
import { getToken, getCartId } from '../utils/storage';
import { useRouter } from 'next/router';
import Layout from '../components/Layout';
import { stockApi } from '../utils/apiClient';

const CartPage = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    const { items: cartItems, loading, error } = useSelector((state) => state.cart);
    const [selectedItems, setSelectedItems] = useState([]);
    const [items, setItems] = useState([]); // Local state để quản lý items
    const [stocks, setStocks] = useState([]); // State để lưu trữ thông tin tồn kho
    const [outOfStockItems, setOutOfStockItems] = useState(new Set());
    const [notification, setNotification] = useState({
        show: false,
        message: '',
        type: ''
    });



    // Đồng bộ items từ redux store khi có thay đổi
    useEffect(() => {
        setItems(cartItems);
    }, [cartItems]);

    // Hàm kiểm tra và cập nhật số lượng theo stock
    const validateAndUpdateCartItems = useCallback(async (cartItems, stockData) => {
        const updates = [];
        const outOfStock = new Set();

        for (const item of cartItems) {
            // Kiểm tra null/undefined trước khi truy cập
            if (!item?.product?.id || !item?.size?.id || !item?.color?.id) {
                console.warn('Invalid item data:', item);
                continue;
            }

            const stockItem = stockData.find(stock =>
                stock.product_id === item.product.id &&
                stock.size_id === item.size.id &&
                stock.color_id === item.color.id
            );

            if (!stockItem || stockItem.quantity === 0) {
                outOfStock.add(item.id);
            } else if (item.quantity > stockItem.quantity) {
                updates.push({
                    itemId: item.id,
                    newQuantity: stockItem.quantity
                });
            }
        }

        setOutOfStockItems(outOfStock);

        // Xử lý cập nhật số lượng
        for (const update of updates) {
            try {
                await dispatch(updateCartItemQuantity({
                    itemId: update.itemId,
                    quantity: update.newQuantity
                })).unwrap();
            } catch (err) {
                console.error(`Failed to update quantity for item ${update.itemId}:`, err);
            }
        }
    }, [dispatch]);

    // Khởi tạo cart và kiểm tra stock
    // Tách riêng effect để khởi tạo cart
    useEffect(() => {
        const initializeCart = async () => {
            try {
                const cartId = getCartId();
                if (cartId && !getToken()) {
                    await dispatch(getCartItems(cartId));
                } else {
                    const cartResponse = await dispatch(
                        !getToken() ? createCartForGuest() : createCartForUser()
                    ).unwrap();

                    if (cartResponse?.id) {
                        await dispatch(getCartItems(cartResponse.id));
                    }
                }
            } catch (err) {
                console.error('Failed to initialize cart:', err);
            }
        };

        initializeCart();

        return () => {
            dispatch(resetCartState());
        };
    }, [dispatch]); // Chỉ phụ thuộc vào dispatch

    // Tách riêng effect để lấy stocks
    useEffect(() => {
        const fetchStocks = async () => {
            try {
                const stockResponse = await stockApi.getProductStocks();
                if (stockResponse.success && stockResponse.data) {
                    setStocks(stockResponse.data);
                }
            } catch (err) {
                console.error('Failed to fetch stocks:', err);
            }
        };

        fetchStocks();
    }, []); // Chỉ chạy một lần khi mount

    // Effect để validate cart items khi có stocks hoặc cartItems thay đổi
    useEffect(() => {
        if (stocks.length > 0 && cartItems.length > 0) {
            const validateItems = async () => {
                try {
                    await validateAndUpdateCartItems(cartItems, stocks);
                } catch (err) {
                    console.error('Failed to validate items:', err);
                }
            };
            validateItems();
        }
    }, [stocks, cartItems, validateAndUpdateCartItems]);

    // Effect để đồng bộ items local
    useEffect(() => {
        if (cartItems?.length > 0) {
            setItems(cartItems);
        }
    }, [cartItems]);
    // Chỉ phụ thuộc vào dispatch

    // Tách riêng effect để đồng bộ items local
    useEffect(() => {
        setItems(cartItems);
    }, [cartItems]);

    // Tách riêng effect để validate items khi có stocks mới
    useEffect(() => {
        if (stocks.length > 0 && cartItems.length > 0) {
            validateAndUpdateCartItems(cartItems, stocks);
        }
    }, [stocks, validateAndUpdateCartItems]);

    const handleQuantityChange = useCallback((itemId, newQuantity) => {
        const item = items.find(item => item.id === itemId);
        if (!item) return;

        const stockItem = stocks.find(stock =>
            stock.product_id === item.product.id &&
            stock.size_id === item.size.id &&
            stock.color_id === item.color.id
        );

        if (!stockItem || newQuantity <= 0) {
            showNotification('Không thể cập nhật số lượng', 'error');
            return;
        }

        // Giới hạn số lượng không vượt quá stock
        const finalQuantity = Math.min(newQuantity, stockItem.quantity);

        // Cập nhật state local
        setItems(prevItems =>
            prevItems.map(item =>
                item.id === itemId
                    ? { ...item, quantity: finalQuantity }
                    : item
            )
        );

        // Gọi API cập nhật
        dispatch(updateCartItemQuantity({ itemId, quantity: finalQuantity }))
            .unwrap()
            .then(() => {
                showNotification('Cập nhật số lượng thành công', 'success');
            })
            .catch((err) => {
                console.error('Failed to update quantity:', err);
                showNotification('Lỗi khi cập nhật số lượng', 'error');
                setItems(cartItems);
            });
    }, [dispatch, cartItems, items, stocks]);

    const handleRemoveItem = useCallback((itemId) => {
        setItems(prevItems => prevItems.filter(item => item.id !== itemId));
        setSelectedItems(prev => prev.filter(id => id !== itemId));

        dispatch(removeCartItem(itemId))
            .unwrap()
            .then(() => {
                showNotification('Đã xóa sản phẩm khỏi giỏ hàng', 'success');
            })
            .catch((err) => {
                console.error('Failed to remove item:', err);
                showNotification('Lỗi khi xóa sản phẩm', 'error');
                setItems(cartItems);
                setSelectedItems(prev => [...prev, itemId]);
            });
    }, [dispatch, cartItems]);

    const calculateTotal = () => {
        return selectedItems.reduce(
            (total, itemId) => {
                if (outOfStockItems.has(itemId)) return total;
                const item = items.find((i) => i.id === itemId);
                return total + (item?.product?.discount_price || item?.product?.price || 0) * item?.quantity;
            },
            0
        );
    };

    const handleProductClick = (slug) => {
        router.push(`/productdetail/${slug}`);
    };

    const toggleSelectItem = (itemId) => {
        setSelectedItems((prev) =>
            prev.includes(itemId) ? prev.filter((id) => id !== itemId) : [...prev, itemId]
        );
    };

    const toggleSelectAll = () => {
        // Lọc ra các sản phẩm còn hàng
        const availableItems = items.filter(item => !outOfStockItems.has(item.id));

        if (selectedItems.length === availableItems.length) {
            // Nếu đã chọn tất cả sản phẩm còn hàng thì bỏ chọn hết
            setSelectedItems([]);
        } else {
            // Nếu chưa chọn hết thì chọn tất cả sản phẩm còn hàng
            setSelectedItems(availableItems.map(item => item.id));
        }
    };


    if (loading) return <div className="text-center py-10 text-xl">Loading cart...</div>;

    if (error) return <div className="text-center text-red-500 py-10">{error}</div>;

    const showNotification = (message, type = 'warning') => {
        setNotification({ show: true, message, type });
        setTimeout(() => {
            setNotification({ show: false, message: '', type: '' });
        }, 3000);
    };


    const Notification = ({ message, type, onClose }) => {
        return (
            <div className={`fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg transform transition-all duration-300 
                ${type === 'success' ? 'bg-green-500' : type === 'error' ? 'bg-red-500' : 'bg-yellow-500'}`}>
                <div className="flex items-center gap-2 text-white">
                    <span>{message}</span>
                    <button onClick={onClose} className="ml-2 hover:opacity-80">×</button>
                </div>
            </div>
        );
    };


    return (
        <Layout>
            {notification.show && (
                <Notification
                    message={notification.message}
                    type={notification.type}
                    onClose={() => setNotification({ show: false, message: '', type: '' })}
                />
            )}
            <div className="container mx-auto px-4 py-6 flex flex-col lg:flex-row lg:gap-8">
                {/* Cart Items */}
                <div className="lg:w-2/3">
                    <h1 className="text-2xl font-bold mb-6 border-b pb-4">GIỎ HÀNG CỦA BẠN</h1>

                    {!items || items.length === 0 ? (
                        <p className="text-center text-lg">Giỏ hàng của bạn đang trống.</p>
                    ) : (
                        <>
                            {/* Select All Checkbox */}
                            <div className="mb-4">
                                <label className="flex items-center">
                                    <input
                                        type="checkbox"
                                        checked={selectedItems.length === items.filter(item => !outOfStockItems.has(item.id)).length}
                                        onChange={toggleSelectAll}
                                        className="mr-2"
                                    />
                                    Chọn tất cả
                                </label>
                            </div>

                            <ul className="space-y-4">
                                {items.map((item, index) => {
                                    const product = item.product || {};
                                    const color = item.color?.color || 'N/A';
                                    const size = item.size?.size || 'N/A';
                                    const isOutOfStock = outOfStockItems.has(item.id);

                                    const stockItem = stocks.find(stock =>
                                        stock.product_id === product.id &&
                                        stock.size_id === item.size?.id &&
                                        stock.color_id === item.color?.id
                                    );

                                    const selectedColorImage =
                                        product.productColors?.find(
                                            (colorItem) => colorItem.id === item.color?.id
                                        )?.ProductColor?.image ||
                                        'https://via.placeholder.com/100';

                                    return (
                                        <li key={`${item.id}-${index}`}
                                            className={`flex gap-4 items-center overflow-x-auto ${isOutOfStock ? 'opacity-50' : ''}`}
                                        >
                                            {/* Checkbox */}
                                            <input
                                                type="checkbox"
                                                checked={selectedItems.includes(item.id)}
                                                onChange={() => toggleSelectItem(item.id)}
                                                className="mr-1"
                                                disabled={isOutOfStock}
                                            />

                                            {/* Product Image */}
                                            <img
                                                src={selectedColorImage}
                                                alt={product.product_name || 'Product'}
                                                className="w-16 h-16 object-cover rounded border"
                                            />

                                            {/* Product Details */}
                                            <div className="flex-1 min-w-0" onClick={() => handleProductClick(product.slug)}>
                                                <h3 className="text-lg font-semibold">
                                                    {product.product_name || 'Unknown Product'}
                                                </h3>
                                                <p className="text-gray-700">
                                                    <span className="font-medium">{color} / {size}</span>
                                                </p>
                                                <p className="font-bold text-gray-500">
                                                    {(
                                                        product.discount_price ||
                                                        product.price ||
                                                        0
                                                    ).toLocaleString('vi-VN')}{' '}
                                                    VND
                                                </p>
                                                {isOutOfStock ? (
                                                    <p className="text-sm text-red-500 font-semibold">
                                                        Hết hàng
                                                    </p>
                                                ) : stockItem && (
                                                    <p className="text-sm text-gray-500">
                                                        Còn lại: {stockItem.quantity}
                                                    </p>
                                                )}
                                            </div>

                                            {/* Quantity Controls */}
                                            {/* Quantity Controls */}
                                            <div className="flex items-center gap-1">
                                                <button
                                                    onClick={() => {
                                                        if (item.quantity <= 1) {
                                                            showNotification('Số lượng không thể nhỏ hơn 1', 'warning');
                                                            return;
                                                        }
                                                        handleQuantityChange(item.id, item.quantity - 1);
                                                    }}
                                                    className="bg-gray-200 px-2 sm:px-3 py-1 rounded hover:bg-gray-300 min-w-[24px] text-sm sm:text-base
                                                                disabled:opacity-50 disabled:cursor-not-allowed"
                                                    disabled={item.quantity <= 1 || isOutOfStock}
                                                >
                                                    -
                                                </button>
                                                <span className="text-sm sm:text-lg font-medium w-6 sm:w-8 text-center">
                                                    {item.quantity}
                                                </span>
                                                <button
                                                    onClick={() => {
                                                        if (stockItem && item.quantity >= stockItem.quantity) {
                                                            showNotification(
                                                                `Số lượng không thể vượt quá ${stockItem.quantity} (số lượng trong kho)`,
                                                                'warning'
                                                            );
                                                            return;
                                                        }
                                                        handleQuantityChange(item.id, item.quantity + 1);
                                                    }}
                                                    className="bg-gray-200 px-2 sm:px-3 py-1 rounded hover:bg-gray-300 min-w-[24px] text-sm sm:text-base
                                                                disabled:opacity-50 disabled:cursor-not-allowed"
                                                    disabled={isOutOfStock || (stockItem && item.quantity >= stockItem.quantity)}
                                                >
                                                    +
                                                </button>
                                            </div>

                                            {/* Remove Button */}
                                            <button
                                                onClick={() => handleRemoveItem(item.id)}
                                                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-700"
                                            >
                                                ×
                                            </button>
                                        </li>
                                    );
                                })}
                            </ul>
                        </>
                    )}
                </div>

                {/* Order Summary */}
                <div className="w-full lg:w-1/3 bg-white p-4 rounded border self-start mt-10 lg:mt-0">
                    <h2 className="text-xl font-bold mb-4 border-b pb-4 text-center lg:text-left">
                        THÔNG TIN ĐƠN HÀNG
                    </h2>
                    <p className="text-lg text-center lg:text-left">
                        Tổng tiền:{' '}
                        <span className="font-bold text-red-500">
                            {calculateTotal().toLocaleString()} VND
                        </span>
                    </p>
                    <button
                        onClick={() => {
                            const selectedCheckoutItems = items
                                .filter(item => selectedItems.includes(item.id))
                                .map(item => {
                                    const selectedColorImage = item.color?.image ||
                                        item.product?.productColors?.find(colorItem => colorItem.id === item.color?.id)?.ProductColor?.image ||
                                        item.product.image;

                                    return {
                                        id: item.id,
                                        product: {
                                            id: item.product.id,
                                            product_name: item.product.product_name,
                                            price: item.product.price,
                                            discount_price: item.product.discount_price,
                                        },
                                        color: {
                                            id: item.color.id,
                                            name: item.color.color,
                                            image_url: selectedColorImage,
                                        },
                                        size: {
                                            id: item.size.id,
                                            name: item.size.size,
                                        },
                                        quantity: item.quantity
                                    };
                                });

                            localStorage.setItem('checkoutItems', JSON.stringify(selectedCheckoutItems));
                            router.push('/checkout');
                        }}
                        disabled={selectedItems.length === 0}
                        className="mt-6 w-full bg-gray-600 text-white px-4 py-2 rounded hover:bg-red-700 transition disabled:bg-gray-400 font-bold"
                    >
                        ĐẶT HÀNG
                    </button>
                </div>
            </div>

        </Layout>
    );
};

export default CartPage;
