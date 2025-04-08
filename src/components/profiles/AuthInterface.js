import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';

export default function AuthInterface({
    authStep,
    setAuthStep,
    formData,
    setFormData,
    handleChange,
    handleLogin,
    handleRegister,
    handleOtpSubmit,
    handleForgotPassword,
    handleResetPassword,
    otp,
    setOtp,
    passwordVisibility,
    togglePasswordVisibility,
    loading,
    error,
}) {
    // State để lưu lỗi validation cho từng trường
    const [validationErrors, setValidationErrors] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        confirmPassword: '',
        phone: '',
        gender: '',
    });

    // Validate từng trường khi người dùng thay đổi giá trị
    useEffect(() => {
        if (authStep === 'register') {
            validateField('firstname', formData.firstname);
            validateField('lastname', formData.lastname);
            validateField('email', formData.email);
            validateField('password', formData.password);
            validateField('confirmPassword', formData.confirmPassword);
            validateField('phone', formData.phone);
        }
    }, [formData, authStep]);

    // Hàm validate từng trường
    const validateField = (fieldName, value) => {
        let error = '';

        switch (fieldName) {
            case 'firstname':
                if (value && value.length < 2) {
                    error = 'Họ phải có ít nhất 2 ký tự';
                } else if (value && value.length > 20) {
                    error = 'Họ không được vượt quá 20 ký tự';
                } else if (value && !/^[a-zA-ZÀ-ỹ\s]+$/.test(value)) {
                    error = 'Họ chỉ được chứa chữ cái';
                }
                break;
            case 'lastname':
                if (value && value.length < 2) {
                    error = 'Tên phải có ít nhất 2 ký tự';
                } else if (value && value.length > 20) {
                    error = 'Tên không được vượt quá 20 ký tự';
                } else if (value && !/^[a-zA-ZÀ-ỹ\s]+$/.test(value)) {
                    error = 'Tên chỉ được chứa chữ cái';
                }
                break;
            case 'email':
                if (value && !/\S+@\S+\.\S+/.test(value)) {
                    error = 'Email không hợp lệ';
                }
                break;
            case 'password':
                if (value && value.length < 6) {
                    error = 'Mật khẩu phải có ít nhất 6 ký tự';
                } else if (value && value.length > 20) {
                    error = 'Mật khẩu không được vượt quá 20 ký tự';
                } else if (value && value.includes(' ')) {
                    error = 'Mật khẩu không được chứa khoảng trắng';
                } else if (value && !/[A-Z]/.test(value)) {
                    error = 'Mật khẩu phải chứa ít nhất một chữ cái viết hoa';
                } else if (value && !/[a-z]/.test(value)) {
                    error = 'Mật khẩu phải chứa ít nhất một chữ cái viết thường';
                } else if (value && !/[0-9]/.test(value)) {
                    error = 'Mật khẩu phải chứa ít nhất một chữ số';
                } else if (value && !/[!@#$%^&*]/.test(value)) {
                    error = 'Mật khẩu phải chứa ít nhất một ký tự đặc biệt';
                }
                break;
            case 'confirmPassword':
                if (value !== formData.password) {
                    error = 'Mật khẩu không khớp';
                }
                break;
            case 'phone':
                if (value && !/^\d{10}$/.test(value)) {
                    error = 'Số điện thoại không hợp lệ (10 chữ số)';
                }
                break;
            default:
                break;
        }

        setValidationErrors(prev => ({
            ...prev,
            [fieldName]: error
        }));

        return error;
    };

    // Xác thực toàn bộ form trước khi submit
    const validateForm = () => {
        let isValid = true;
        const errors = {};

        // Validate firstname
        const firstnameError = validateField('firstname', formData.firstname);
        if (firstnameError) {
            errors.firstname = firstnameError;
            isValid = false;
        }

        // Validate lastname
        const lastnameError = validateField('lastname', formData.lastname);
        if (lastnameError) {
            errors.lastname = lastnameError;
            isValid = false;
        }

        // Validate email
        const emailError = validateField('email', formData.email);
        if (emailError) {
            errors.email = emailError;
            isValid = false;
        }

        // Validate password
        const passwordError = validateField('password', formData.password);
        if (passwordError) {
            errors.password = passwordError;
            isValid = false;
        }

        // Validate confirm password
        const confirmPasswordError = validateField('confirmPassword', formData.confirmPassword);
        if (confirmPasswordError) {
            errors.confirmPassword = confirmPasswordError;
            isValid = false;
        }

        // Validate phone
        const phoneError = validateField('phone', formData.phone);
        if (phoneError) {
            errors.phone = phoneError;
            isValid = false;
        }

        // Validate gender
        if (!formData.gender) {
            errors.gender = 'Vui lòng chọn giới tính';
            isValid = false;
        }

        setValidationErrors(errors);
        return isValid;
    };

    // Ghi đè hàm handleRegister để thêm validation
    const handleRegisterWithValidation = async (e) => {
        e.preventDefault();
        if (validateForm()) {
            handleRegister(e);
        }
    };

    return (
        <div className="container mx-auto px-4 py-6">
            {authStep === 'login' && (
                <div className="bg-white p-6 rounded shadow-md max-w-md mx-auto">
                    <h2 className="text-2xl font-bold mb-4 text-center">Đăng nhập</h2>
                    {error && (
                        <div className="mb-4 p-3 bg-red-100 text-red-700 rounded">
                            {error.message === "User not found" || error.message === "Invalid password"
                                ? "Tài khoản hoặc mật khẩu không đúng"
                                : error.message}
                        </div>
                    )}
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
                            <label>Mật khẩu:</label>
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
                                    <FontAwesomeIcon icon={passwordVisibility.password ? faEyeSlash : faEye} />
                                </button>
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700 transition w-full"
                            disabled={loading}
                        >
                            {loading ? 'Đang đăng nhập...' : 'Đăng nhập'}
                        </button>
                    </form>
                    <p className="mt-4 text-center">
                        Bạn chưa có tài khoản?{' '}
                        <button
                            onClick={() => setAuthStep('register')}
                            className="text-blue-600 hover:underline"
                        >
                            Đăng ký
                        </button>
                        <p>
                            <button
                                onClick={() => setAuthStep('forgot-password')}
                                className="text-blue-600 hover:underline"
                            >
                                Quên mật khẩu?
                            </button>
                        </p>
                    </p>
                </div>
            )}
            {/* Thêm form quên mật khẩu */}
            {authStep === 'forgot-password' && (
                <div className="bg-white p-6 rounded shadow-md max-w-md mx-auto">
                    <h2 className="text-2xl font-bold mb-4 text-center">Quên mật khẩu</h2>
                    <form onSubmit={handleForgotPassword}>
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
                        <button
                            type="submit"
                            className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700 transition w-full"
                            disabled={loading}
                        >
                            {loading ? 'Đang gửi...' : 'Gửi mã OTP'}
                        </button>
                    </form>
                    <p className="mt-4 text-center">
                        <button
                            onClick={() => setAuthStep('login')}
                            className="text-blue-600 hover:underline"
                        >
                            Quay lại đăng nhập
                        </button>
                    </p>
                </div>
            )}
            {/* Thêm form reset mật khẩu */}
            {authStep === 'reset-password' && (
                <div className="bg-white p-6 rounded shadow-md max-w-md mx-auto">
                    <h2 className="text-2xl font-bold mb-4 text-center">Đặt lại mật khẩu</h2>
                    <form onSubmit={handleResetPassword}>
                        <div className="mb-4">
                            <label>Mã OTP:</label>
                            <input
                                type="text"
                                value={otp}
                                onChange={(e) => setOtp(e.target.value)}
                                className="w-full border p-2 rounded"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label>Mật khẩu mới:</label>
                            <div className="relative">
                                <input
                                    type={passwordVisibility.newPassword ? 'text' : 'password'}
                                    name="newPassword"
                                    value={formData.newPassword}
                                    onChange={handleChange}
                                    className="w-full border p-2 rounded"
                                    required
                                />
                                <button
                                    type="button"
                                    className="absolute right-2 top-2 text-gray-600"
                                    onClick={() => togglePasswordVisibility('newPassword')}
                                >
                                    <FontAwesomeIcon
                                        icon={passwordVisibility.newPassword ? faEyeSlash : faEye}
                                    />
                                </button>
                            </div>
                        </div>
                        <div className="mb-4">
                            <label>Xác nhận mật khẩu mới:</label>
                            <div className="relative">
                                <input
                                    type={passwordVisibility.confirmNewPassword ? 'text' : 'password'}
                                    name="confirmNewPassword"
                                    value={formData.confirmNewPassword}
                                    onChange={handleChange}
                                    className="w-full border p-2 rounded"
                                    required
                                />
                                <button
                                    type="button"
                                    className="absolute right-2 top-2 text-gray-600"
                                    onClick={() => togglePasswordVisibility('confirmNewPassword')}
                                >
                                    <FontAwesomeIcon
                                        icon={passwordVisibility.confirmNewPassword ? faEyeSlash : faEye}
                                    />
                                </button>
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700 transition w-full"
                            disabled={loading}
                        >
                            {loading ? 'Đang xử lý...' : 'Đặt lại mật khẩu'}
                        </button>
                    </form>
                </div>
            )}
            {authStep === 'register' && (
                <div className="bg-white p-6 rounded shadow-md max-w-md mx-auto">
                    <h2 className="text-2xl font-bold mb-4 text-center">Đăng ký</h2>
                    {error && (
                        <div className="mb-4 p-3 bg-red-100 text-red-700 rounded">
                            {error.message || error}
                        </div>
                    )}
                    <form onSubmit={handleRegisterWithValidation}>
                        <div className="mb-4">
                            <label>Họ:</label>
                            <input
                                type="text"
                                name="firstname"
                                value={formData.firstname}
                                onChange={handleChange}
                                className={`w-full border p-2 rounded ${validationErrors.firstname ? 'border-red-500' : ''}`}
                                required
                            />
                            {validationErrors.firstname && (
                                <p className="text-red-500 text-sm mt-1">{validationErrors.firstname}</p>
                            )}
                        </div>
                        <div className="mb-4">
                            <label>Tên:</label>
                            <input
                                type="text"
                                name="lastname"
                                value={formData.lastname}
                                onChange={handleChange}
                                className={`w-full border p-2 rounded ${validationErrors.lastname ? 'border-red-500' : ''}`}
                                required
                            />
                            {validationErrors.lastname && (
                                <p className="text-red-500 text-sm mt-1">{validationErrors.lastname}</p>
                            )}
                        </div>
                        <div className="mb-4">
                            <label>Email:</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className={`w-full border p-2 rounded ${validationErrors.email ? 'border-red-500' : ''}`}
                                required
                            />
                            {validationErrors.email && (
                                <p className="text-red-500 text-sm mt-1">{validationErrors.email}</p>
                            )}
                        </div>
                        <div className="mb-4">
                            <label>Mật khẩu:</label>
                            <div className="relative">
                                <input
                                    type={passwordVisibility.password ? 'text' : 'password'}
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    className={`w-full border p-2 rounded ${validationErrors.password ? 'border-red-500' : ''}`}
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
                            {validationErrors.password && (
                                <p className="text-red-500 text-sm mt-1">{validationErrors.password}</p>
                            )}
                        </div>
                        <div className="mb-4">
                            <label>Nhập lại mật khẩu:</label>
                            <div className="relative">
                                <input
                                    type={passwordVisibility.confirmPassword ? 'text' : 'password'}
                                    name="confirmPassword"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    className={`w-full border p-2 rounded ${validationErrors.confirmPassword ? 'border-red-500' : ''}`}
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
                            {validationErrors.confirmPassword && (
                                <p className="text-red-500 text-sm mt-1">{validationErrors.confirmPassword}</p>
                            )}
                        </div>
                        <div className="mb-4">
                            <label>Số điện thoại:</label>
                            <input
                                type="text"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className={`w-full border p-2 rounded ${validationErrors.phone ? 'border-red-500' : ''}`}
                                required
                            />
                            {validationErrors.phone && (
                                <p className="text-red-500 text-sm mt-1">{validationErrors.phone}</p>
                            )}
                        </div>
                        <div className="mb-4">
                            <label>Chọn giới tính:</label>
                            <select
                                name="gender"
                                value={formData.gender}
                                onChange={handleChange}
                                className={`w-full border p-2 rounded ${validationErrors.gender ? 'border-red-500' : ''}`}
                                required
                            >
                                <option value="">Chọn</option>
                                <option value="male">Nam</option>
                                <option value="female">Nữ</option>
                                <option value="other">Khác</option>
                            </select>
                            {validationErrors.gender && (
                                <p className="text-red-500 text-sm mt-1">{validationErrors.gender}</p>
                            )}
                        </div>
                        <button
                            type="submit"
                            className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700 transition w-full"
                            disabled={loading}
                        >
                            {loading ? 'Đang đăng ký...' : 'Đăng ký'}
                        </button>
                    </form>
                    <p className="mt-4 text-center">
                        Đã có tài khoản?{' '}
                        <button
                            onClick={() => setAuthStep('login')}
                            className="text-blue-600 hover:underline"
                        >
                            Đăng nhập
                        </button>
                    </p>
                </div>
            )}
            {authStep === 'otp' && (
                <div className="bg-white p-6 rounded shadow-md max-w-md mx-auto">
                    <h2 className="text-2xl font-bold mb-4 text-center">Xác nhận OTP</h2>
                    <p className="mb-4 text-center">Mã OTP đã được gửi đến email của bạn.</p>
                    <form onSubmit={handleOtpSubmit}>
                        <div className="mb-4">
                            <label>Nhập OTP:</label>
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
                            className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700 transition w-full"
                            disabled={loading}
                        >
                            {loading ? 'Đang xác thực...' : 'Xác thực OTP'}
                        </button>
                    </form>
                </div>
            )}
        </div>
    );
}
