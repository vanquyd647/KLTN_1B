import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import { getUserInfo, logoutUser, loginUser, registerUser, verifyOtp } from '../../store/slices/userSlice';
import { getToken, getCartId } from '../../utils/storage';
import { orderApi, userApi } from '../../utils/apiClient';
// Dynamic import
const Layout = dynamic(() => import('../../components/Layout'), {
    ssr: false
});
import AuthInterface from '../../components/profiles/AuthInterface';
import ProfileInterface from '../../components/profiles/ProfileInterface';
import {
    createCartForGuest,
    createCartForUser,
    getCartItems,
    resetCartState,
} from '../../store/slices/cartSlice';

export default function Profile() {
    const dispatch = useDispatch();
    const router = useRouter();
    const { user, loading } = useSelector((state) => state.auth);

    const [isMounted, setIsMounted] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [authStep, setAuthStep] = useState('login');
    const [selectedTab, setSelectedTab] = useState('info');
    const [otp, setOtp] = useState('');
    const [orders, setOrders] = useState([]);
    const [orderLoading, setOrderLoading] = useState(false);
    const [passwordVisibility, setPasswordVisibility] = useState({
        password: false,
        confirmPassword: false,
    });
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: '',
        firstname: '',
        lastname: '',
        phone: '',
        gender: '',
        newPassword: '',
        confirmNewPassword: '',
    });
    const [error, setError] = useState(null);
    const controller = new AbortController();
    const [mounted, setMounted] = useState(false);

    // Mounted effect
    useEffect(() => {
        setIsMounted(true);
    }, []);

    // Authentication effect
    useEffect(() => {
        const initializeAuth = async () => {
            const token = getToken();
            if (token) {
                setIsAuthenticated(true);
                try {
                    await dispatch(getUserInfo()).unwrap();
                    setError(null);
                } catch (err) {
                    console.error('Failed to get user info:', err);
                    setError(err.message || 'Failed to authenticate');
                    setIsAuthenticated(false);
                }
            }
        };

        if (isMounted) {
            initializeAuth();
        }
    }, [dispatch, isMounted]);

    // Thêm function để lấy orders
    const fetchOrders = async () => {
        try {
            setOrderLoading(true);
            const response = await orderApi.getOrdersByUser({ page: 1, limit: 10 });
            setOrders(response);
        } catch (error) {
            console.error('Failed to fetch orders:', error);
        } finally {
            setOrderLoading(false);
        }
    };

    // Thêm useEffect để gọi API khi tab orders được chọn
    useEffect(() => {
        if (selectedTab === 'orders') {
            fetchOrders();
        }
    }, [selectedTab]);

    const handleLogout = async () => {
        try {
            await dispatch(logoutUser()).unwrap();
            // Thêm dispatch resetCartState để xóa state cart cũ
            dispatch(resetCartState());
            setIsAuthenticated(false);
            window.location.reload();
        } catch (err) {
            console.error('Failed to logout:', err);
        }
    };


    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        setError(null); // Reset error state

        try {
            const result = await dispatch(loginUser({
                email: formData.email,
                password: formData.password
            })).unwrap();

            if (result.status === 'success') {
                setIsAuthenticated(true);
                await dispatch(getUserInfo());
                const cartId = getCartId();
                if (cartId) {
                    await dispatch(getCartItems(cartId));
                } else {
                    const cartResponse = await dispatch(
                        !getToken() ? createCartForGuest() : createCartForUser()
                    ).unwrap();

                    if (cartResponse?.id) {
                        await dispatch(getCartItems(cartResponse.id));
                        window.location.reload();
                    }
                }
            }
        } catch (err) {
            setError(err);
            console.error('Login error:', err);
        }
    };


    // Thêm hàm xử lý quên mật khẩu
    const handleForgotPassword = async (e) => {
        e.preventDefault();
        try {
            await userApi.forgotPassword({ email: formData.email });
            alert('Mã OTP đã được gửi đến email của bạn');
            setAuthStep('reset-password');
        } catch (error) {
            alert(error.message || 'Có lỗi xảy ra');
        }
    };

    // Thêm hàm xử lý reset mật khẩu
    const handleResetPassword = async (e) => {
        e.preventDefault();
        if (formData.newPassword !== formData.confirmNewPassword) {
            alert('Mật khẩu mới không khớp');
            return;
        }
        try {
            await userApi.resetPassword({
                email: formData.email,
                otp: otp,
                newPassword: formData.newPassword
            });
            alert('Đặt lại mật khẩu thành công');
            setAuthStep('login');
            setFormData({
                ...formData,
                newPassword: '',
                confirmNewPassword: ''
            });
            setOtp('');
        } catch (error) {
            alert(error.message || 'Có lỗi xảy ra');
        }
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        setError(null); // Reset error state before attempting registration

        if (!formData.email || !formData.password || !formData.firstname || !formData.lastname) {
            setError('Vui lòng điền đầy đủ thông tin.');
            return;
        }

        if (formData.password.length < 6) {
            setError('Mật khẩu phải có ít nhất 6 ký tự.');
            return;
        }

        if (!/\S+@\S+\.\S+/.test(formData.email)) {
            setError('Email không hợp lệ. Vui lòng nhập lại.');
            return;
        }

        if (!/^\d{10}$/.test(formData.phone)) {
            setError('Số điện thoại không hợp lệ. Vui lòng nhập lại.');
            return;
        }
        if (!/^[a-zA-Z]+$/.test(formData.firstname) || !/^[a-zA-Z]+$/.test(formData.lastname)) {
            setError('Tên và họ chỉ được chứa chữ cái.');
            return;
        }

        if (formData.firstname.length < 2 || formData.lastname.length < 2) {
            setError('Tên và họ phải có ít nhất 2 ký tự.');
            return;
        }
        
        if (formData.firstname.length > 20 || formData.lastname.length > 20) {
            setError('Tên và họ không được vượt quá 20 ký tự.');
            return;
        }

        if (formData.password.length > 20) {
            setError('Mật khẩu không được vượt quá 20 ký tự.');
            return;
        }

        if (formData.password.includes(' ')) {
            setError('Mật khẩu không được chứa khoảng trắng.');
            return;
        }

        if (!/[A-Z]/.test(formData.password)) {
            setError('Mật khẩu phải chứa ít nhất một chữ cái viết hoa.');
            return;
        }

        if (!/[a-z]/.test(formData.password)) {
            setError('Mật khẩu phải chứa ít nhất một chữ cái viết thường.');
            return;
        }

        if (!/[0-9]/.test(formData.password)) {
            setError('Mật khẩu phải chứa ít nhất một chữ số.');
            return;
        }

        if (!/[!@#$%^&*]/.test(formData.password)) {
            setError('Mật khẩu phải chứa ít nhất một ký tự đặc biệt.');
            return;
        }

        if (formData.password !== formData.confirmPassword) {
            setError('Mật khẩu không khớp. Vui lòng thử lại.');
            return;
        }

        try {
            const result = await dispatch(registerUser(formData)).unwrap();
            if (result.status === 'success') {
                setAuthStep('otp');
            }
        } catch (err) {
            setError(err); // Lưu lỗi vào state
            console.error('Registration error:', err);
        }
    };


    const handleOtpSubmit = async (e) => {
        e.preventDefault();
        const result = await dispatch(verifyOtp({ email: formData.email, otp }));
        if (result.meta.requestStatus === 'fulfilled') {
            alert('Verification successful! You can now log in.');
            setAuthStep('login');
        } else {
            alert('Invalid OTP. Please try again.');
        }
    };

    const togglePasswordVisibility = (field) => {
        setPasswordVisibility({
            ...passwordVisibility,
            [field]: !passwordVisibility[field],
        });
    };

    if (!isMounted) {
        return null;
    }

    if (!isAuthenticated) {
        return (
            <Layout>
                <AuthInterface
                    authStep={authStep}
                    setAuthStep={setAuthStep}
                    formData={formData}
                    setFormData={setFormData}
                    handleChange={handleChange}
                    handleLogin={handleLogin}
                    handleRegister={handleRegister}
                    handleOtpSubmit={handleOtpSubmit}
                    handleForgotPassword={handleForgotPassword}
                    handleResetPassword={handleResetPassword}
                    otp={otp}
                    setOtp={setOtp}
                    passwordVisibility={passwordVisibility}
                    togglePasswordVisibility={togglePasswordVisibility}
                    loading={loading}
                    error={error}
                />
            </Layout>
        );
    }

    return (
        <Layout>
            <ProfileInterface
                user={user}
                selectedTab={selectedTab}
                setSelectedTab={setSelectedTab}
                handleLogout={handleLogout}
                orders={orders}
                orderLoading={orderLoading}
                userLoading={loading}
            />
        </Layout>
    );
}
