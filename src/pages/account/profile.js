import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { getUserInfo, logoutUser, loginUser, registerUser, verifyOtp } from '../../store/slices/userSlice';
import { getToken } from '../../utils/storage';
import Layout from '../../components/Layout';

export default function Profile() {
    const dispatch = useDispatch();
    const router = useRouter();

    const { user, loading, error } = useSelector((state) => state.auth);
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

    useEffect(() => {
        const token = getToken();
        if (token) {
            setIsAuthenticated(true);
            dispatch(getUserInfo()).catch(() => setIsAuthenticated(false));
        } else {
            setIsAuthenticated(false);
        }
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
                <div className="container mx-auto px-4 py-6">
                    {authStep === 'login' && (
                        <div className="bg-white p-6 rounded shadow-md max-w-md mx-auto">
                            <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
                            <form onSubmit={handleLogin}>
                                <div className="mb-4">
                                    <label>Email:</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full border p-2 rounded"
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <label>Password:</label>
                                    <div className="relative">
                                        <input
                                            type={passwordVisibility.password ? 'text' : 'password'}
                                            name="password"
                                            value={formData.password}
                                            onChange={handleChange}
                                            className="w-full border p-2 rounded"
                                            required
                                        />
                                        <button
                                            type="button"
                                            className="absolute right-2 top-2 text-gray-600"
                                            onClick={() => togglePasswordVisibility('password')}
                                        >
                                            <FontAwesomeIcon
                                                icon={passwordVisibility.password ? faEyeSlash : faEye}
                                            />
                                        </button>
                                    </div>
                                </div>
                                <button
                                    type="submit"
                                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition w-full"
                                    disabled={loading}
                                >
                                    {loading ? 'Logging in...' : 'Login'}
                                </button>
                            </form>
                            <p className="mt-4 text-center">
                                Don&apos;t have an account?{' '}
                                <button
                                    onClick={() => setAuthStep('register')}
                                    className="text-blue-600 hover:underline"
                                >
                                    Register
                                </button>
                            </p>
                        </div>
                    )}
                    {authStep === 'register' && (
                        <div className="bg-white p-6 rounded shadow-md max-w-md mx-auto">
                            <h2 className="text-2xl font-bold mb-4 text-center">Register</h2>
                            <form onSubmit={handleRegister}>
                                <div className="mb-4">
                                    <label>First Name:</label>
                                    <input
                                        type="text"
                                        name="firstname"
                                        value={formData.firstname}
                                        onChange={handleChange}
                                        className="w-full border p-2 rounded"
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <label>Last Name:</label>
                                    <input
                                        type="text"
                                        name="lastname"
                                        value={formData.lastname}
                                        onChange={handleChange}
                                        className="w-full border p-2 rounded"
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <label>Email:</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full border p-2 rounded"
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <label>Password:</label>
                                    <div className="relative">
                                        <input
                                            type={passwordVisibility.password ? 'text' : 'password'}
                                            name="password"
                                            value={formData.password}
                                            onChange={handleChange}
                                            className="w-full border p-2 rounded"
                                            required
                                        />
                                        <button
                                            type="button"
                                            className="absolute right-2 top-2 text-gray-600"
                                            onClick={() => togglePasswordVisibility('password')}
                                        >
                                            <FontAwesomeIcon
                                                icon={passwordVisibility.password ? faEyeSlash : faEye}
                                            />
                                        </button>
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <label>Confirm Password:</label>
                                    <div className="relative">
                                        <input
                                            type={passwordVisibility.confirmPassword ? 'text' : 'password'}
                                            name="confirmPassword"
                                            value={formData.confirmPassword}
                                            onChange={handleChange}
                                            className="w-full border p-2 rounded"
                                            required
                                        />
                                        <button
                                            type="button"
                                            className="absolute right-2 top-2 text-gray-600"
                                            onClick={() => togglePasswordVisibility('confirmPassword')}
                                        >
                                            <FontAwesomeIcon
                                                icon={passwordVisibility.confirmPassword ? faEyeSlash : faEye}
                                            />
                                        </button>
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <label>Phone:</label>
                                    <input
                                        type="text"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full border p-2 rounded"
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <label>Gender:</label>
                                    <select
                                        name="gender"
                                        value={formData.gender}
                                        onChange={handleChange}
                                        className="w-full border p-2 rounded"
                                        required
                                    >
                                        <option value="">Select</option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                                <button
                                    type="submit"
                                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition w-full"
                                    disabled={loading}
                                >
                                    {loading ? 'Registering...' : 'Register'}
                                </button>
                            </form>
                            <p className="mt-4 text-center">
                                Already have an account?{' '}
                                <button
                                    onClick={() => setAuthStep('login')}
                                    className="text-blue-600 hover:underline"
                                >
                                    Login
                                </button>
                            </p>
                        </div>
                    )}
                    {authStep === 'otp' && (
                        <div className="bg-white p-6 rounded shadow-md max-w-md mx-auto">
                            <h2 className="text-2xl font-bold mb-4 text-center">Verify OTP</h2>
                            <form onSubmit={handleOtpSubmit}>
                                <div className="mb-4">
                                    <label>Enter OTP:</label>
                                    <input
                                        type="text"
                                        value={otp}
                                        onChange={(e) => setOtp(e.target.value)}
                                        className="w-full border p-2 rounded"
                                        required
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition w-full"
                                    disabled={loading}
                                >
                                    {loading ? 'Verifying...' : 'Verify OTP'}
                                </button>
                            </form>
                        </div>
                    )}
                </div>
            </Layout>
        );
    }
    // Giao diện Profile nếu đã đăng nhập
    return (
        <Layout>
            <div className="container mx-auto px-4 py-6">
                <h1 className="text-2xl font-bold mb-4">Profile</h1>
                <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/4 bg-100 p-4 rounded shadow-md">
                        <button
                            className={`w-full text-left px-4 py-2 mb-2 rounded ${selectedTab === 'info' ? 'bg-blue-600 text-white' : 'bg-gray-200'
                                }`}
                            onClick={() => setSelectedTab('info')}
                        >
                            Personal Info
                        </button>
                        <button
                            className={`w-full text-left px-4 py-2 mb-2 rounded ${selectedTab === 'orders' ? 'bg-blue-600 text-white' : 'bg-gray-200'
                                }`}
                            onClick={() => setSelectedTab('orders')}
                        >
                            Orders
                        </button>
                        <button
                            className={`w-full text-left px-4 py-2 mb-2 rounded ${selectedTab === 'address' ? 'bg-blue-600 text-white' : 'bg-gray-200'
                                }`}
                            onClick={() => setSelectedTab('address')}
                        >
                            Address Book
                        </button>
                        <button
                            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition mt-6"
                            onClick={handleLogout}
                        >
                            Logout
                        </button>
                    </div>
                    <div className="md:w-3/4 bg-white p-6 rounded shadow-md">
                        {selectedTab === 'info' && user && (
                            <div>
                                <p className="mb-4">
                                    <strong>First Name:</strong> {user.firstname || 'N/A'}
                                </p>
                                <p className="mb-4">
                                    <strong>Last Name:</strong> {user.lastname || 'N/A'}
                                </p>
                                <p className="mb-4">
                                    <strong>Email:</strong> {user.email || 'N/A'}
                                </p>
                                <p className="mb-4">
                                    <strong>Phone:</strong> {user.phone || 'N/A'}
                                </p>
                                <p className="mb-4">
                                    <strong>Gender:</strong> {user.gender || 'N/A'}
                                </p>
                                <p className="mb-4">
                                    <strong>Joined:</strong>{' '}
                                    {user.created_at
                                        ? new Date(user.created_at).toLocaleDateString()
                                        : 'N/A'}
                                </p>
                            </div>
                        )}
                        {selectedTab === 'orders' && <p>No orders available.</p>}
                        {selectedTab === 'address' && <p>No addresses available.</p>}
                    </div>
                </div>
            </div>
        </Layout>
    );
}
