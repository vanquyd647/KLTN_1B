import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { getUserInfo, logoutUser, loginUser, registerUser, verifyOtp } from '../../store/slices/userSlice';
import { getToken } from '../../utils/storage';
import Layout from '../../components/Layout';
import AuthInterface from '../../components/profiles/AuthInterface';
import ProfileInterface from '../../components/profiles/ProfileInterface';

export default function Profile() {
    const dispatch = useDispatch();
    const router = useRouter();

    const { user, loading } = useSelector((state) => state.auth);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [authStep, setAuthStep] = useState('login');
    const [selectedTab, setSelectedTab] = useState('info');
    const [otp, setOtp] = useState('');
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

    const handleLogout = async () => {
        try {
            await dispatch(logoutUser()).unwrap();
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
            dispatch(getUserInfo());
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
            />
        </Layout>
    );
}
