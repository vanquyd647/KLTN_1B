import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { getUserInfo } from '../store/slices/userSlice'; // Import action getUserInfo
import { getToken, getUserId } from '../utils/storage';

export default function Dashboard() {
    const dispatch = useDispatch();
    const router = useRouter();
    const { user, loading, error } = useSelector((state) => state.auth);

    useEffect(() => {
        const fetchUserData = async () => {
            const token = getToken();
            const userId = getUserId();

            if (token && userId) {
                try {
                    // Dispatch action to get user info when the page reloads
                    await dispatch(getUserInfo()).unwrap(); // unwrap to handle success/failure directly
                } catch (error) {
                    console.error('Failed to fetch user info:', error);
                    router.push('/login'); // Redirect to login if there's an error
                }
            } else {
                router.push('/login'); // If there's no token, redirect to login
            }
        };

        fetchUserData(); // Call the async function
    }, [dispatch, router]); // Only re-run when dispatch or router changes

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }


    return (
        <div>
            <h1>Welcome {user?.name}</h1>
            <p>Email: {user?.email}</p>
            {/* Thông tin người dùng */}
        </div>
    );
}
