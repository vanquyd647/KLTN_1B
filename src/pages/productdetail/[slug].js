import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { getToken, getCartId } from '../../utils/storage';
import { fetchProductDetail } from '../../store/slices/productSlice';
import { createCartForGuest, createCartForUser} from '../../store/slices/cartSlice';
import { addItemToCart } from '../../store/slices/cartSlice';

import Layout from '../../components/Layout';

export default function Slug() {
    const dispatch = useDispatch();
    const router = useRouter();
    const { slug } = router.query;
    const cartId = getCartId();
    const { currentProduct, loading, error } = useSelector((state) => state.products);
    const [selectedColor, setSelectedColor] = useState(null);
    const [selectedSize, setSelectedSize] = useState(null);
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        if (slug) {
            dispatch(fetchProductDetail(slug));
        }
    }, [dispatch, slug]);

    useEffect(() => {
        if (currentProduct && currentProduct.productColors.length > 0) {
            setSelectedColor(currentProduct.productColors[0]);
        }
        if (currentProduct && currentProduct.productSizes.length > 0) {
            setSelectedSize(currentProduct.productSizes[0]);
        }
    }, [currentProduct]);

    const handleAddToCart = async () => {
        if (!selectedColor || !selectedSize) {
            alert('Please select a color and size.');
            return;
        }

        try {
            let activeCartId = cartId;

            // Tự động tạo giỏ hàng nếu chưa có
            if (!activeCartId) {
                console.warn('No cart found. Attempting to create a new cart.');

                let cartResponse;
                if (!getToken()) {
                    // Tạo giỏ hàng cho khách
                    cartResponse = await dispatch(createCartForGuest()).unwrap();
                } else {
                    // Tạo giỏ hàng cho người dùng đã đăng nhập
                    cartResponse = await dispatch(createCartForUser()).unwrap();
                }

                if (cartResponse?.id) {
                    activeCartId = cartResponse.id;
                } else {
                    throw new Error('Failed to create cart.');
                }
            }

            const cartItemData = {
                cart_id: activeCartId,
                product_id: currentProduct?.id,
                color_id: selectedColor?.id,
                size_id: selectedSize?.id,
                quantity,
            };

            console.log('Cart ID in handleAddToCart:', activeCartId);
            console.log('Cart item data:', cartItemData);

            // Thêm sản phẩm vào giỏ hàng
            await dispatch(addItemToCart({ cartId: activeCartId, itemData: cartItemData })).unwrap();
            alert('Item added to cart successfully!');
        } catch (error) {
            console.error('Failed to add item to cart:', error);
            alert(`Failed to add item to cart: ${error.message || 'An error occurred'}`);
        }
    };



    const increaseQuantity = () => setQuantity((prev) => prev + 1);
    const decreaseQuantity = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

    if (loading) {
        return <div className="text-center py-10 text-xl">Loading product details...</div>;
    }

    if (error) {
        return <div className="text-center text-red-500 py-10">{error}</div>;
    }

    if (!currentProduct) {
        return <div className="text-center py-10 text-xl">Product not found</div>;
    }

    return (
        <Layout>
            <div className="container mx-auto px-4 py-6">
                <div className="flex flex-col md:flex-row gap-6">
                    {/* Product Image */}
                    <div className="md:w-1/2 max-h-96 overflow-hidden">
                        <img
                            src={
                                selectedColor?.ProductColor?.image ||
                                'https://via.placeholder.com/500'
                            }
                            alt={currentProduct.product_name}
                            className="w-full h-full object-contain rounded"
                        />
                    </div>

                    {/* Product Details */}
                    <div className="md:w-1/2">
                        <h1 className="text-2xl font-bold mb-4">{currentProduct.product_name}</h1>
                        <p className="text-gray-700 mb-4 line-clamp-3">{currentProduct.description}</p>
                        <p className="text-red-500 font-bold text-xl mb-2">
                            {currentProduct.discount_price.toLocaleString('vi-VN')} VND
                        </p>
                        <p className="text-gray-500 line-through mb-4">
                            {currentProduct.price.toLocaleString('vi-VN')} VND
                        </p>

                        <div className="mb-4">
                            <h2 className="text-lg font-semibold mb-2">Available Sizes:</h2>
                            <div className="flex gap-2">
                                {currentProduct.productSizes.map((size) => (
                                    <button
                                        key={size.id}
                                        className={`px-4 py-2 border rounded hover:bg-gray-100 transition ${selectedSize?.id === size.id ? 'bg-blue-100' : ''
                                            }`}
                                        onClick={() => setSelectedSize(size)}
                                    >
                                        {size.size}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="mb-4">
                            <h2 className="text-lg font-semibold mb-2">Available Colors:</h2>
                            <div className="flex gap-2">
                                {currentProduct.productColors.map((color) => (
                                    <div
                                        key={color.id}
                                        className={`w-8 h-8 rounded-full border cursor-pointer hover:shadow-md ${selectedColor?.id === color.id ? 'ring-2 ring-blue-500' : ''
                                            }`}
                                        style={{ backgroundColor: color.hex_code }}
                                        title={color.color}
                                        onClick={() => setSelectedColor(color)}
                                    ></div>
                                ))}
                            </div>
                        </div>

                        <div className="mb-4">
                            <h2 className="text-lg font-semibold mb-2">Quantity:</h2>
                            <div className="flex items-center gap-4">
                                <button
                                    className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                                    onClick={decreaseQuantity}
                                >
                                    -
                                </button>
                                <input
                                    type="number"
                                    className="w-16 px-2 py-1 border rounded text-center"
                                    min="1"
                                    value={quantity}
                                    readOnly
                                />
                                <button
                                    className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                                    onClick={increaseQuantity}
                                >
                                    +
                                </button>
                            </div>
                        </div>

                        <button
                            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                            onClick={handleAddToCart}
                        >
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
