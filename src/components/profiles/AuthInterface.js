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
    error,
}) {
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
                    <form onSubmit={handleRegister}>
                        <div className="mb-4">
                            <label>Họ:</label>
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
                            <label>Tên:</label>
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
                                    <FontAwesomeIcon
                                        icon={passwordVisibility.password ? faEyeSlash : faEye}
                                    />
                                </button>
                            </div>
                        </div>
                        <div className="mb-4">
                            <label>Nhập lại mật khẩu:</label>
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
                            <label>Số điện thoại:</label>
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
                            <label>Chọn giới tinh:</label>
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
