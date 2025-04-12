import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { getCartItems } from '../store/slices/cartSlice';
import { forceUpdateFavorites, transferFavorites } from '../store/slices/favoriteSlice';
import { getCartId } from '../utils/storage';
import Header from './Header';
import Footer from './Footer';
import BackToTop from './BackToTop';
import ServiceFeatures from './ServiceFeatures';

export default function Layout({ children }) {
    const dispatch = useDispatch();
    const router = useRouter();
    const isCartPage = router.pathname === '/cart';
    const hasFetchedCart = useRef(false);
    const hasFetchedFavorites = useRef(false);

    // Initial fetch favorites và transfer
    useEffect(() => {
        const initializeFavorites = async () => {
            if (!hasFetchedFavorites.current) {
                try {
                    // Đầu tiên thực hiện transfer favorites
                    await dispatch(transferFavorites()).unwrap();

                    // Sau đó fetch dữ liệu mới
                    await dispatch(forceUpdateFavorites({ page: 1, limit: 10 })).unwrap();

                    hasFetchedFavorites.current = true;
                } catch (error) {
                    console.error('Failed to initialize favorites:', error);
                    hasFetchedFavorites.current = false;
                }
            }
        };

        initializeFavorites();
    }, [dispatch]);

    // Route change với transfer và update
    useEffect(() => {
        let timeoutId;
        const handleRouteChange = async () => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(async () => {
                try {
                    // Transfer trước khi update
                    await dispatch(transferFavorites()).unwrap();
                    await dispatch(forceUpdateFavorites({ page: 1, limit: 10 })).unwrap();
                } catch (error) {
                    console.error('Failed to update favorites on route change:', error);
                }
            }, 300000);
        };

        router.events.on('routeChangeComplete', handleRouteChange);
        return () => {
            router.events.off('routeChangeComplete', handleRouteChange);
            clearTimeout(timeoutId);
        };
    }, [dispatch, router.events]);

    // Cart logic giữ nguyên
    useEffect(() => {
        const cartId = getCartId();
        if (cartId && !isCartPage && !hasFetchedCart.current) {
            hasFetchedCart.current = true;
            dispatch(getCartItems(cartId));
        }
        return () => {
            hasFetchedCart.current = false;
        };
    }, [dispatch, isCartPage]);

    useEffect(() => {
        const updateFavorites = async () => {
            try {
                await dispatch(transferFavorites()).unwrap();
                await dispatch(forceUpdateFavorites({ page: 1, limit: 10 })).unwrap();
            } catch (error) {
                console.error('Failed to update favorites:', error);
            }
        };

        updateFavorites();
    }, [dispatch]);

    return (
        <div className="min-h-screen flex flex-col">
            <Header isCartPage={isCartPage} />

            <main className="flex-grow">
                {children}
            </main>
            <BackToTop />
            <ServiceFeatures />
            <Footer />
        </div>
    );
}
