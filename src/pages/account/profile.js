import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { getUserInfo, logoutUser, loginUser, registerUser, verifyOtp } from '../../store/slices/userSlice';
import { getToken, getCartId } from '../../utils/storage';
import { orderApi, userApi } from '../../utils/apiClient';
import Layout from '../../components/Layout';
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

    useEffect(() => {
        const token = getToken(); // Lấy token từ storage
        if (token) {
            setIsAuthenticated(true);
            dispatch(getUserInfo())
                .then(() => {
                    setError(null); // Đặt lại lỗi nếu thành công
                })
                .catch((err) => {
                    console.error('Failed to get user info:', err);
                    setError(err.message || 'Failed to authenticate'); // Lưu lỗi
                    setIsAuthenticated(false); // Đặt lại trạng thái
                });
        }
        return () => controller.abort();
    }, [dispatch]);

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
        } catch (err) {
            console.error('Failed to logout:', err);
        }
    };


    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        const result = await dispatch(loginUser({ email: formData.email, password: formData.password }));
        if (result.meta.requestStatus === 'fulfilled') {
            setIsAuthenticated(true);
            await dispatch(getUserInfo());
            // Thêm dispatch để lấy cart items mới sau khi login
            const cartId = getCartId();
            if (cartId) {
                await dispatch(getCartItems(cartId));
            }
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

        if (formData.password !== formData.confirmPassword) {
            alert('Passwords do not match. Please try again.');
            return;
        }

        const result = await dispatch(registerUser(formData));
        if (result.meta.requestStatus === 'fulfilled') {
            setAuthStep('otp');
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
