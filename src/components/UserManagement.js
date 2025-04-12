// components/UserManagement.js
import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { debounce } from 'lodash';
import { adminApi } from '../utils/apiClient';
import { toast } from 'react-toastify';
import UserFormModal from './UserFormModal';
import DeleteConfirmModal from './DeleteConfirmModal';

const UserManagement = () => {
    // States
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [filters, setFilters] = useState({
        email: '',
        phone: '',
        name: ''
    });
    const [showModal, setShowModal] = useState(false);
    const [modalMode, setModalMode] = useState('create');
    const [selectedUser, setSelectedUser] = useState(null);
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        gender: 'male',
        password: '',
        roles: ['customer']
    });
    const [showConfirmDelete, setShowConfirmDelete] = useState(false);
    const [userToDelete, setUserToDelete] = useState(null);
    const [localFilters, setLocalFilters] = useState({
        email: '',
        phone: '',
        name: ''
    });

    // Memoized constants
    const roleLabels = useMemo(() => ({
        'superadmin': 'Super Admin',
        'admin': 'Admin',
        'customer': 'Khách hàng'
    }), []);

    const roleColors = useMemo(() => ({
        'superadmin': 'bg-purple-100 text-purple-800',
        'admin': 'bg-blue-100 text-blue-800',
        'customer': 'bg-green-100 text-green-800'
    }), []);

    const genderLabels = useMemo(() => ({
        'male': 'Nam',
        'female': 'Nữ',
        'other': 'Khác'
    }), []);

    // Callbacks
    const fetchUsers = useCallback(async () => {
        setLoading(true);
        try {
            const response = await adminApi.getAllUsers({
                page: currentPage,
                limit: 10,
                ...filters
            });
            setUsers(response.data.users);
            setTotalPages(response.data.pagination.totalPages);
        } catch (err) {
            setError('Không thể tải danh sách người dùng');
            toast.error('Không thể tải danh sách người dùng');
        } finally {
            setLoading(false);
        }
    }, [currentPage, filters]);

    const debouncedSetFilters = useCallback(
        debounce((newFilters) => {
            setFilters(newFilters);
        }, 500),
        []
    );

    const handleInputChange = useCallback((e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    }, []);

    const handleRoleChange = useCallback((role) => {
        setFormData(prev => ({
            ...prev,
            roles: prev.roles.includes(role)
                ? prev.roles.filter(r => r !== role)
                : [...prev.roles, role]
        }));
    }, []);

    const handleFilterChange = useCallback((e) => {
        const { name, value } = e.target;
        setLocalFilters(prev => ({
            ...prev,
            [name]: value
        }));
        debouncedSetFilters(prev => ({
            ...prev,
            [name]: value
        }));
    }, [debouncedSetFilters]);

    // Effects
    useEffect(() => {
        fetchUsers();
    }, [fetchUsers]);

    useEffect(() => {
        return () => {
            debouncedSetFilters.cancel();
        };
    }, [debouncedSetFilters]);

    // CRUD Operations
    const handleCreateUser = async (userData) => {
        setLoading(true);
        try {
            await adminApi.createUser(userData);
            setShowModal(false);
            fetchUsers();
            toast.success('Tạo người dùng mới thành công');
        } catch (error) {
            setError(error.message || 'Có lỗi xảy ra khi tạo người dùng');
            toast.error('Không thể tạo người dùng mới');
        } finally {
            setLoading(false);
        }
    };

    const handleUpdateUser = async (userId, userData) => {
        setLoading(true);
        try {
            await adminApi.updateUser(userId, userData);
            setShowModal(false);
            fetchUsers();
            toast.success('Cập nhật người dùng thành công');
        } catch (error) {
            setError(error.message || 'Có lỗi xảy ra khi cập nhật người dùng');
            toast.error('Không thể cập nhật người dùng');
        } finally {
            setLoading(false);
        }
    };

    const handleDeleteUser = async (userId) => {
        setLoading(true);
        try {
            await adminApi.deleteUser(userId);
            setShowConfirmDelete(false);
            fetchUsers();
            toast.success('Xóa người dùng thành công');
        } catch (error) {
            setError(error.message || 'Có lỗi xảy ra khi xóa người dùng');
            toast.error('Không thể xóa người dùng');
        } finally {
            setLoading(false);
        }
    };

    const handleSubmit = useCallback(async (e) => {
        e.preventDefault();
        let error = '';

        // Validate firstname
        if (!formData.firstname) {
            setError('Vui lòng nhập họ');
            return;
        } else if (formData.firstname.length < 2) {
            setError('Họ phải có ít nhất 2 ký tự');
            return;
        } else if (formData.firstname.length > 20) {
            setError('Họ không được vượt quá 20 ký tự');
            return;
        } else if (!/^[\p{L}\s]+$/u.test(formData.firstname)) {
            setError('Họ chỉ được chứa chữ cái');
            return;
        }

        // Validate lastname
        if (!formData.lastname) {
            setError('Vui lòng nhập tên');
            return;
        } else if (formData.lastname.length < 2) {
            setError('Tên phải có ít nhất 2 ký tự');
            return;
        } else if (formData.lastname.length > 20) {
            setError('Tên không được vượt quá 20 ký tự');
            return;
        } else if (!/^[a-zA-ZÀ-ỹ\s]+$/.test(formData.lastname)) {
            setError('Tên chỉ được chứa chữ cái');
            return;
        }

        // Validate email
        if (!formData.email) {
            setError('Vui lòng nhập email');
            return;
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            setError('Email không hợp lệ');
            return;
        }

        // Validate phone
        if (!formData.phone) {
            setError('Vui lòng nhập số điện thoại');
            return;
        } else if (!/^\d{10}$/.test(formData.phone)) {
            setError('Số điện thoại không hợp lệ (10 chữ số)');
            return;
        }

        const userData = {
            firstname: formData.firstname,
            lastname: formData.lastname,
            email: formData.email,
            phone: formData.phone,
            gender: formData.gender,
            roles: formData.roles
        };

        // Validate password
        if (modalMode === 'create' || formData.password) {
            if (!formData.password) {
                setError('Vui lòng nhập mật khẩu');
                return;
            } else if (formData.password.length < 6) {
                setError('Mật khẩu phải có ít nhất 6 ký tự');
                return;
            } else if (formData.password.length > 20) {
                setError('Mật khẩu không được vượt quá 20 ký tự');
                return;
            } else if (formData.password.includes(' ')) {
                setError('Mật khẩu không được chứa khoảng trắng');
                return;
            } else if (!/[A-Z]/.test(formData.password)) {
                setError('Mật khẩu phải chứa ít nhất một chữ cái viết hoa');
                return;
            } else if (!/[a-z]/.test(formData.password)) {
                setError('Mật khẩu phải chứa ít nhất một chữ cái viết thường');
                return;
            } else if (!/[0-9]/.test(formData.password)) {
                setError('Mật khẩu phải chứa ít nhất một chữ số');
                return;
            } else if (!/[!@#$%^&*]/.test(formData.password)) {
                setError('Mật khẩu phải chứa ít nhất một ký tự đặc biệt');
                return;
            }
            userData.password = formData.password;
        }

        try {
            if (modalMode === 'create') {
                await handleCreateUser(userData);
            } else {
                await handleUpdateUser(selectedUser.id, userData);
            }
        } catch (error) {
            console.error('Failed to submit:', error);
            setError('Đã có lỗi xảy ra. Vui lòng thử lại.');
        }
    }, [formData, modalMode, selectedUser]);


    const openCreateModal = useCallback(() => {
        setModalMode('create');
        setFormData({
            firstname: '',
            lastname: '',
            email: '',
            phone: '',
            gender: 'male',
            password: '',
            roles: ['customer']
        });
        setShowModal(true);
        setError(null);
    }, []);

    const openEditModal = useCallback((user) => {
        setModalMode('edit');
        setSelectedUser(user);
        setFormData({
            firstname: user.firstname,
            lastname: user.lastname,
            email: user.email,
            phone: user.phone,
            gender: user.gender,
            roles: user.roles,
            password: ''
        });
        setShowModal(true);
        setError(null);
    }, []);

    if (loading && !users.length) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
            </div>
        );
    }

    return (
        <div className="p-6 max-w-full mx-auto">
            {/* Header */}
            <div className="mb-6">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-2xl font-bold text-gray-800">Quản lý người dùng</h2>
                    <button
                        onClick={openCreateModal}
                        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    >
                        Thêm người dùng
                    </button>
                </div>

                {/* Filters */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <input
                        type="text"
                        name="email"
                        placeholder="Tìm theo email"
                        value={localFilters.email}
                        onChange={handleFilterChange}
                        className="border rounded-lg px-3 py-2"
                    />
                    <input
                        type="text"
                        name="phone"
                        placeholder="Tìm theo số điện thoại"
                        value={localFilters.phone}
                        onChange={handleFilterChange}
                        className="border rounded-lg px-3 py-2"
                    />
                    <input
                        type="text"
                        name="name"
                        placeholder="Tìm theo tên"
                        value={localFilters.name}
                        onChange={handleFilterChange}
                        className="border rounded-lg px-3 py-2"
                    />
                </div>
                <div>
                    <button
                        onClick={() => {
                            setLocalFilters({
                                email: '',
                                phone: '',
                                name: ''
                            });
                            setFilters({
                                email: '',
                                phone: '',
                                name: ''
                            });
                        }}
                        className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
                    >
                        Đặt lại
                    </button>
                </div>
            </div>

            {/* Table */}
            <div className="bg-white rounded-lg shadow overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">ID</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Họ tên</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Email</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Số điện thoại</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Giới tính</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Vai trò</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Thao tác</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {users.map((user) => (
                            <tr key={user.id}>
                                <td className="px-6 py-4 whitespace-nowrap">#{user.id}</td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    {user.firstname} {user.lastname}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">{user.email}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{user.phone}</td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    {genderLabels[user.gender]}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="flex flex-wrap gap-1">
                                        {user.roles.map((role) => (
                                            <span
                                                key={role}
                                                className={`px-2 py-1 text-xs rounded-full ${roleColors[role]}`}
                                            >
                                                {roleLabels[role]}
                                            </span>
                                        ))}
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="flex space-x-2">
                                        <button
                                            onClick={() => openEditModal(user)}
                                            className="text-blue-600 hover:text-blue-900"
                                        >
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                    d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                            </svg>
                                        </button>
                                        <button
                                            onClick={() => {
                                                setUserToDelete(user.id);
                                                setShowConfirmDelete(true);
                                            }}
                                            className="text-red-600 hover:text-red-900"
                                        >
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                            </svg>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
                <div className="mt-4 flex justify-between items-center">
                    <div>
                        Trang {currentPage} / {totalPages}
                    </div>
                    <div className="flex space-x-2">
                        <button
                            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                            disabled={currentPage === 1}
                            className={`px-4 py-2 rounded ${currentPage === 1
                                ? 'bg-gray-100 text-gray-400'
                                : 'bg-blue-500 text-white hover:bg-blue-600'
                                }`}
                        >
                            Trước
                        </button>
                        <button
                            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                            disabled={currentPage >= totalPages}
                            className={`px-4 py-2 rounded ${currentPage >= totalPages
                                ? 'bg-gray-100 text-gray-400'
                                : 'bg-blue-500 text-white hover:bg-blue-600'
                                }`}
                        >
                            Sau
                        </button>
                    </div>
                </div>
            )}

            {/* Modals */}
            {showModal && (
                <UserFormModal
                    modalMode={modalMode}
                    formData={formData}
                    error={error}
                    loading={loading}
                    handleInputChange={handleInputChange}
                    handleRoleChange={handleRoleChange}
                    handleSubmit={handleSubmit}
                    setShowModal={setShowModal}
                    setError={setError}
                    roleLabels={roleLabels}
                    genderLabels={genderLabels}
                />
            )}
            {showConfirmDelete && (
                <DeleteConfirmModal
                    onClose={() => setShowConfirmDelete(false)}
                    onDelete={() => handleDeleteUser(userToDelete)}
                    loading={loading}
                />
            )}
        </div>
    );
};

export default UserManagement;
