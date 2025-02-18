import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

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
}) {
    return (
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
                                    <FontAwesomeIcon icon={passwordVisibility.password ? faEyeSlash : faEye} />
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
                            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition w-full"
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
                            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition w-full"
                            disabled={loading}
                        >
                            {loading ? 'Đang xử lý...' : 'Đặt lại mật khẩu'}
                        </button>
                    </form>
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
                                <option value="">Chọn</option>
                                <option value="male">Nam</option>
                                <option value="female">Nữ</option>
                                <option value="other">Khác</option>
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
                        Have an account?{' '}
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
    );
}
