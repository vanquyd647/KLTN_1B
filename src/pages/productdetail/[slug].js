import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { fetchProductDetail } from '../../store/slices/productSlice';
import Layout from '../../components/Layout';

export default function Slug() {
    const dispatch = useDispatch();
    const router = useRouter();
    const { slug } = router.query;

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

    const handleAddToCart = () => {
        if (!selectedColor || !selectedSize) {
            alert('Please select a color and size.');
            return;
        }
        const cartItem = {
            productId: currentProduct.id,
            productName: currentProduct.product_name,
            color: selectedColor.color,
            size: selectedSize.size,
            quantity,
            price: currentProduct.discount_price,
        };
        console.log('Adding to cart:', cartItem);
        alert('Item added to cart!');
    };

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
                    <div className="md:w-1/2">
                        <img
                            src={
                                selectedColor?.ProductColor?.image ||
                                'https://via.placeholder.com/500'
                            }
                            alt={currentProduct.product_name}
                            className="w-full h-auto object-cover rounded"
                        />
                    </div>

                    {/* Product Details */}
                    <div className="md:w-1/2">
                        <h1 className="text-2xl font-bold mb-4">{currentProduct.product_name}</h1>
                        <p className="text-gray-700 mb-4">{currentProduct.description}</p>
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
                                        className={`px-4 py-2 border rounded hover:bg-gray-100 transition ${
                                            selectedSize?.id === size.id ? 'bg-blue-100' : ''
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
                                        className={`w-8 h-8 rounded-full border cursor-pointer hover:shadow-md ${
                                            selectedColor?.id === color.id ? 'ring-2 ring-blue-500' : ''
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
                            <input
                                type="number"
                                className="w-16 px-2 py-1 border rounded"
                                min="1"
                                value={quantity}
                                onChange={(e) => setQuantity(Number(e.target.value))}
                            />
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
