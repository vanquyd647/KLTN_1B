import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { getCartItems } from '../store/slices/cartSlice';
import { getCartId } from '../utils/storage';
import Header from './Header';
import Footer from './Footer';
import BackToTop from './BackToTop';
import ServiceFeatures from './ServiceFeatures';

export default function Layout({ children }) {
    const dispatch = useDispatch();
    const router = useRouter();
    const isCartPage = router.pathname === '/cart';
    const hasFetchedCart = useRef(false); // Trạng thái đã gọi API

    useEffect(() => {
        const fetchCartData = async () => {
            const cartId = getCartId();
            if (cartId && !isCartPage && !hasFetchedCart.current) {
                hasFetchedCart.current = true; // Đánh dấu đã gọi API
                await dispatch(getCartItems(cartId));
            }
        };

        if (!isCartPage) {
            fetchCartData();
        }
    }, [dispatch, isCartPage]);

    console.log('hehe'); // Log này sẽ chỉ xuất hiện một lần nếu logic được tối ưu
    

    return (
        <div className="min-h-screen flex flex-col">
            <Header isCartPage={isCartPage} />
            <main className="flex-grow container mx-auto px-4 py-6">
                {children}
            </main>
            <BackToTop />
            <ServiceFeatures />
            <Footer />
        </div>
    );
}
