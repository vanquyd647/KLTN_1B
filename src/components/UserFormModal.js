// components/modals/UserFormModal.js
import React, { memo } from 'react';
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
    const [passwordVisibility, setPasswordVisibility] = React.useState({
        password: false,
    });

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
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Tên</label>
                                <input
                                    name="firstname"
                                    value={formData.firstname}
                                    onChange={handleInputChange}
                                    className="mt-1 block w-full border rounded-md shadow-sm p-2"
                                    required
                                    onInvalid={(e) => e.target.setCustomValidity("Không được để trống")}
                                    onInput={(e) => e.target.setCustomValidity("")}
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700">Họ</label>
                                <input
                                    name="lastname"
                                    value={formData.lastname}
                                    onChange={handleInputChange}
                                    className="mt-1 block w-full border rounded-md shadow-sm p-2"
                                    required
                                    onInvalid={(e) => e.target.setCustomValidity("Không được để trống")}
                                    onInput={(e) => e.target.setCustomValidity("")}
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className="mt-1 block w-full border rounded-md shadow-sm p-2"
                                    required
                                    onInvalid={(e) => e.target.setCustomValidity("Không được để trống")}
                                    onInput={(e) => e.target.setCustomValidity("")}
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700">Số điện thoại</label>
                                <input
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    className="mt-1 block w-full border rounded-md shadow-sm p-2"
                                    required
                                    onInvalid={(e) => e.target.setCustomValidity("Không được để trống")}
                                    onInput={(e) => e.target.setCustomValidity("")}
                                />
                            </div>

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

                            {/* {modalMode === 'create' && ( */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Mật khẩu</label>
                                <div className="relative">
                                    <input
                                        type={passwordVisibility.password ? "text" : "password"}
                                        name="password"
                                        value={formData.password}
                                        onChange={handleInputChange}
                                        className="mt-1 block w-full border rounded-md shadow-sm p-2 pr-10"
                                        required={modalMode === 'create'}
                                        minLength="6"
                                        onInvalid={(e) => e.target.setCustomValidity("Không được để trống")}
                                        onInput={(e) => e.target.setCustomValidity("")}
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
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700">Vai trò</label>
                                <div className="mt-2 space-y-2">
                                    {Object.entries(roleLabels).map(([role, label]) => (
                                        <label key={role} className="flex items-center">
                                            <input
                                                type="checkbox"
                                                checked={formData.roles.includes(role)}
                                                onChange={() => handleRoleChange(role)}
                                                className="mr-2"
                                            />
                                            <span>{label}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>
                        </div>

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
                                disabled={loading}
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
