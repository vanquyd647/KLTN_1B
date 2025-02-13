import { useEffect } from 'react';
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

    // Quản lý cart ở cấp Layout
    useEffect(() => {
        const fetchCartData = async () => {
            const cartId = getCartId();
            if (cartId && !isCartPage) {
                await dispatch(getCartItems(cartId));
            }
        };
        fetchCartData();
    }, [dispatch, isCartPage]);

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
