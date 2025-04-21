import React, { memo, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const UserFormModal = memo(({
    modalMode,
    formData,
    error,
    loading,
    handleInputChange,
    handleRoleChange,
    handleSubmit,
    setShowModal,
    setError,
    roleLabels,
    genderLabels
}) => {
    const [passwordVisibility, setPasswordVisibility] = useState({
        password: false,
    });

    const [fieldErrors, setFieldErrors] = useState({
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        password: '',
        roles: ''
    });

    const validateField = (name, value) => {
        switch(name) {
            case 'firstname':
                if (!value) return 'Vui lòng nhập họ';
                if (value.length < 2) return 'Họ phải có ít nhất 2 ký tự';
                if (value.length > 20) return 'Họ không được vượt quá 20 ký tự';
                if (!/^[\p{L}\s]+$/u.test(value)) return 'Họ chỉ được chứa chữ cái';
                return '';

            case 'lastname':
                if (!value) return 'Vui lòng nhập tên';
                if (value.length < 2) return 'Tên phải có ít nhất 2 ký tự';
                if (value.length > 20) return 'Tên không được vượt quá 20 ký tự';
                if (!/^[a-zA-ZÀ-ỹ\s]+$/.test(value)) return 'Tên chỉ được chứa chữ cái';
                return '';

            case 'email':
                if (!value) return 'Vui lòng nhập email';
                if (!/\S+@\S+\.\S+/.test(value)) return 'Email không hợp lệ';
                return '';

            case 'phone':
                if (!value) return 'Vui lòng nhập số điện thoại';
                if (!/^\d{10}$/.test(value)) return 'Số điện thoại không hợp lệ (10 chữ số)';
                return '';

            case 'password':
                if (modalMode === 'create' && !value) return 'Vui lòng nhập mật khẩu';
                if (value) {
                    if (value.length < 6) return 'Mật khẩu phải có ít nhất 6 ký tự';
                    if (value.length > 20) return 'Mật khẩu không được vượt quá 20 ký tự';
                    if (value.includes(' ')) return 'Mật khẩu không được chứa khoảng trắng';
                    if (!/[A-Z]/.test(value)) return 'Mật khẩu phải chứa ít nhất một chữ cái viết hoa';
                    if (!/[a-z]/.test(value)) return 'Mật khẩu phải chứa ít nhất một chữ cái viết thường';
                    if (!/[0-9]/.test(value)) return 'Mật khẩu phải chứa ít nhất một chữ số';
                    if (!/[!@#$%^&*]/.test(value)) return 'Mật khẩu phải chứa ít nhất một ký tự đặc biệt';
                }
                return '';
            default:
                return '';
        }
    };

    const handleFieldChange = (e) => {
        const { name, value } = e.target;
        handleInputChange(e);
        setFieldErrors(prev => ({
            ...prev,
            [name]: validateField(name, value)
        }));
    };

    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
            <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
                <div className="mt-3">
                    <h3 className="text-lg font-medium">
                        {modalMode === 'create' ? 'Thêm người dùng mới' : 'Cập nhật người dùng'}
                    </h3>
                    <form onSubmit={handleSubmit} className="mt-4">
                        {error && (
                            <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
                                {error}
                            </div>
                        )}

                        <div className="grid gap-4">
                            {/* Firstname Input */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Họ</label>
                                <input
                                    name="firstname"
                                    value={formData.firstname}
                                    onChange={handleFieldChange}
                                    className={`mt-1 block w-full border rounded-md shadow-sm p-2 
                                        ${fieldErrors.firstname ? 'border-red-500' : 'border-gray-300'}`}
                                />
                                {fieldErrors.firstname && (
                                    <p className="mt-1 text-sm text-red-600">{fieldErrors.firstname}</p>
                                )}
                            </div>

                            {/* Lastname Input */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Tên</label>
                                <input
                                    name="lastname"
                                    value={formData.lastname}
                                    onChange={handleFieldChange}
                                    className={`mt-1 block w-full border rounded-md shadow-sm p-2 
                                        ${fieldErrors.lastname ? 'border-red-500' : 'border-gray-300'}`}
                                />
                                {fieldErrors.lastname && (
                                    <p className="mt-1 text-sm text-red-600">{fieldErrors.lastname}</p>
                                )}
                            </div>

                            {/* Email Input */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleFieldChange}
                                    className={`mt-1 block w-full border rounded-md shadow-sm p-2 
                                        ${fieldErrors.email ? 'border-red-500' : 'border-gray-300'}`}
                                />
                                {fieldErrors.email && (
                                    <p className="mt-1 text-sm text-red-600">{fieldErrors.email}</p>
                                )}
                            </div>

                            {/* Phone Input */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Số điện thoại</label>
                                <input
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleFieldChange}
                                    className={`mt-1 block w-full border rounded-md shadow-sm p-2 
                                        ${fieldErrors.phone ? 'border-red-500' : 'border-gray-300'}`}
                                />
                                {fieldErrors.phone && (
                                    <p className="mt-1 text-sm text-red-600">{fieldErrors.phone}</p>
                                )}
                            </div>

                            {/* Gender Select */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Giới tính</label>
                                <select
                                    name="gender"
                                    value={formData.gender}
                                    onChange={handleInputChange}
                                    className="mt-1 block w-full border rounded-md shadow-sm p-2"
                                >
                                    {Object.entries(genderLabels).map(([value, label]) => (
                                        <option key={value} value={value}>{label}</option>
                                    ))}
                                </select>
                            </div>

                            {/* Password Input */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Mật khẩu</label>
                                <div className="relative">
                                    <input
                                        type={passwordVisibility.password ? "text" : "password"}
                                        name="password"
                                        value={formData.password}
                                        onChange={handleFieldChange}
                                        className={`mt-1 block w-full border rounded-md shadow-sm p-2 pr-10 
                                            ${fieldErrors.password ? 'border-red-500' : 'border-gray-300'}`}
                                    />
                                    <button
                                        type="button"
                                        className="absolute inset-y-0 right-0 px-3 flex items-center"
                                        onClick={() => setPasswordVisibility(prev => ({
                                            ...prev,
                                            password: !prev.password
                                        }))}
                                    >
                                        <FontAwesomeIcon
                                            icon={passwordVisibility.password ? faEyeSlash : faEye}
                                            className="text-gray-500 hover:text-gray-700 cursor-pointer"
                                        />
                                    </button>
                                </div>
                                {fieldErrors.password && (
                                    <p className="mt-1 text-sm text-red-600">{fieldErrors.password}</p>
                                )}
                            </div>

                            {/* Roles Checkboxes */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Vai trò</label>
                                <div className={`mt-2 space-y-2 ${formData.roles.length === 0 ? 'border-red-500 border rounded p-2' : ''}`}>
                                    {Object.entries(roleLabels).map(([role, label]) => (
                                        <label key={role} className="flex items-center">
                                            <input
                                                type="checkbox"
                                                checked={formData.roles.includes(role)}
                                                onChange={() => {
                                                    handleRoleChange(role);
                                                    setFieldErrors(prev => ({
                                                        ...prev,
                                                        roles: formData.roles.length === 0 ? 'Vui lòng chọn ít nhất một vai trò' : ''
                                                    }));
                                                }}
                                                className="mr-2"
                                            />
                                            <span>{label}</span>
                                        </label>
                                    ))}
                                </div>
                                {fieldErrors.roles && (
                                    <p className="mt-1 text-sm text-red-600">{fieldErrors.roles}</p>
                                )}
                            </div>
                        </div>

                        {/* Form Actions */}
                        <div className="mt-6 flex justify-end space-x-3">
                            <button
                                type="button"
                                onClick={() => {
                                    setShowModal(false);
                                    setError(null);
                                }}
                                className="px-4 py-2 border text-gray-700 rounded-md hover:bg-gray-50"
                            >
                                Hủy
                            </button>
                            <button
                                type="submit"
                                disabled={loading || Object.values(fieldErrors).some(error => error !== '')}
                                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600
                                    disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {loading ? 'Đang xử lý...' : (modalMode === 'create' ? 'Thêm' : 'Cập nhật')}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
});

UserFormModal.displayName = 'UserFormModal';
export default UserFormModal;
