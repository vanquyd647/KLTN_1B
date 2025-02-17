import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { getCartItems } from '../store/slices/cartSlice';
import { getCartId } from '../utils/storage';

export default function useFetchCartData(isCartPage) {
    const dispatch = useDispatch();
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
}
