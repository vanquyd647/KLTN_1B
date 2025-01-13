import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { registerUser, verifyOtp } from '../../store/slices/userSlice';
import { useRouter } from 'next/router';

export default function Register() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        firstname: '',
        lastname: '',
        phone: '',
        gender: '', // Thêm trường giới tính
    });
    const [otp, setOtp] = useState('');
    const [isOtpModalOpen, setOtpModalOpen] = useState(false);

    const dispatch = useDispatch();
    const router = useRouter();

    const { loading, error } = useSelector((state) => state.auth);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const result = await dispatch(registerUser(formData));
        if (result.meta.requestStatus === 'fulfilled') {
            setOtpModalOpen(true); // Mở modal nhập OTP
        }
    };

    const handleOtpSubmit = async () => {
        const result = await dispatch(verifyOtp({ email: formData.email, otp }));
        if (result.meta.requestStatus === 'fulfilled') {
            setOtpModalOpen(false); // Đóng modal sau khi xác thực
            router.push('/login'); // Chuyển hướng đến trang đăng nhập
        }
    };

    return (
        <div>
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>First Name:</label>
                    <input
                        type="text"
                        name="firstname"
                        value={formData.firstname}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Last Name:</label>
                    <input
                        type="text"
                        name="lastname"
                        value={formData.lastname}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Phone:</label>
                    <input
                        type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Gender:</label>
                    <select
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <button type="submit" disabled={loading}>
                    {loading ? 'Registering...' : 'Register'}
                </button>
            </form>
            {error && <p style={{ color: 'red' }}>{error.message || 'Registration failed'}</p>}

            {isOtpModalOpen && (
                <div className="otp-modal">
                    <h2>Enter OTP</h2>
                    <input
                        type="text"
                        placeholder="Enter OTP"
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                        required
                    />
                    <button onClick={handleOtpSubmit} disabled={loading}>
                        {loading ? 'Verifying...' : 'Verify OTP'}
                    </button>
                </div>
            )}
        </div>
    );
}
