import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { fetchProductDetail } from '../store/slices/productSlice';
import Layout from '../components/Layout';

export default function ProductDetail() {
    const dispatch = useDispatch();
    const router = useRouter();
    const { slug } = router.query;

    const { currentProduct, loading, error } = useSelector((state) => state.products);

    useEffect(() => {
        if (slug) {
            dispatch(fetchProductDetail(slug));
        }
    }, [dispatch, slug]);

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
                                currentProduct.productColors[0]?.ProductColor?.image ||
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

                        <button
                            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                            onClick={() => alert('Add to cart functionality not implemented')}
                        >
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
