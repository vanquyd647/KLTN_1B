// components/CategoryManagement.js
import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { categoriesApi } from '../utils/apiClient';

const CategoryManagement = () => {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [formData, setFormData] = useState({ name: '', description: '' });
    const [editingId, setEditingId] = useState(null);

    useEffect(() => {
        fetchCategories();
    }, []);

    const fetchCategories = async () => {
        try {
            setLoading(true);
            const result = await categoriesApi.getAllCategories();
            
            if (result.success) {
                setCategories(result.data || []);
            } else {
                toast.error(result.message || 'Không thể tải danh sách danh mục');
            }
        } catch (error) {
            console.error('Lỗi khi lấy danh mục:', error);
            toast.error(
                error?.message || 
                (typeof error === 'string' ? error : 'Không thể tải danh sách danh mục')
            );
        } finally {
            setLoading(false);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.name.trim()) {
            toast.error('Tên danh mục không được để trống');
            return;
        }

        try {
            if (editingId) {
                const result = await categoriesApi.updateCategory(editingId, formData);
                if (result.success) {
                    toast.success('Cập nhật danh mục thành công!');
                } else {
                    toast.error(result.message || 'Có lỗi xảy ra khi cập nhật danh mục');
                }
            } else {
                const result = await categoriesApi.createCategory(formData);
                if (result.success) {
                    toast.success('Thêm danh mục thành công!');
                } else {
                    toast.error(result.message || 'Có lỗi xảy ra khi thêm danh mục');
                }
            }
            
            setFormData({ name: '', description: '' });
            setEditingId(null);
            fetchCategories();
        } catch (error) {
            console.error('Lỗi:', error);
            toast.error(
                error?.message || 
                (typeof error === 'string' ? error : 'Có lỗi xảy ra khi lưu danh mục')
            );
        }
    };

    const handleEdit = async (categoryId) => {
        try {
            const result = await categoriesApi.getCategoryById(categoryId);
            if (result.success) {
                const category = result.data;
                setEditingId(category.id);
                setFormData({
                    name: category.name,
                    description: category.description || ''
                });
            } else {
                toast.error(result.message || 'Không thể lấy thông tin danh mục');
            }
        } catch (error) {
            console.error('Lỗi khi lấy thông tin danh mục:', error);
            toast.error(
                error?.message || 
                (typeof error === 'string' ? error : 'Không thể lấy thông tin danh mục')
            );
        }
    };

    const handleDelete = async (id) => {
        if (!window.confirm('Bạn có chắc muốn xóa danh mục này?')) return;
        
        try {
            const result = await categoriesApi.deleteCategory(id);
            if (result.success) {
                toast.success('Xóa danh mục thành công!');
                fetchCategories();
            } else {
                toast.error(result.message || 'Không thể xóa danh mục');
            }
        } catch (error) {
            console.error('Lỗi khi xóa:', error);
            
            // Xử lý cụ thể cho lỗi khi xóa danh mục đang chứa sản phẩm
            if (error?.code === 400 && error?.message) {
                toast.error(error.message);
            } else {
                toast.error(
                    error?.message || 
                    (typeof error === 'string' ? error : 'Có lỗi xảy ra khi xóa danh mục')
                );
            }
        }
    };

    const cancelEdit = () => {
        setEditingId(null);
        setFormData({ name: '', description: '' });
    };

    return (
        <div className="p-6 max-w-full mx-auto">
            <h2 className="text-2xl font-bold text-gray-800">Quản lý danh mục</h2>
            
            <div className="bg-white p-6 rounded-lg shadow mb-6">
                <h3 className="text-lg font-medium mb-4">
                    {editingId ? 'Sửa danh mục' : 'Thêm danh mục mới'}
                </h3>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2">Tên danh mục</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded px-3 py-2"
                            placeholder="Nhập tên danh mục"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2">Mô tả</label>
                        <textarea
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded px-3 py-2"
                            placeholder="Mô tả danh mục (không bắt buộc)"
                            rows="3"
                        ></textarea>
                    </div>
                    <div className="flex gap-2">
                        <button
                            type="submit"
                            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                        >
                            {editingId ? 'Cập nhật' : 'Thêm mới'}
                        </button>
                        {editingId && (
                            <button
                                type="button"
                                onClick={cancelEdit}
                                className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                            >
                                Hủy
                            </button>
                        )}
                    </div>
                </form>
            </div>

            <div className="bg-white rounded-lg shadow overflow-hidden">
                <h3 className="text-lg font-medium p-6 border-b">Danh sách danh mục</h3>
                
                {loading ? (
                    <div className="p-6 text-center">Đang tải dữ liệu...</div>
                ) : categories.length === 0 ? (
                    <div className="p-6 text-center text-gray-500">Chưa có danh mục nào</div>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tên danh mục</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Mô tả</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ngày tạo</th>
                                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Thao tác</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {categories.map((category) => (
                                    <tr key={category.id}>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{category.id}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{category.name}</td>
                                        <td className="px-6 py-4 text-sm text-gray-500">{category.description || '—'}</td>
                                        <td className="px-6 py-4 text-sm text-gray-500">
                                            {new Date(category.createdAt).toLocaleDateString('vi-VN')}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                            <button
                                                onClick={() => handleEdit(category.id)}
                                                className="text-indigo-600 hover:text-indigo-900 mr-3"
                                            >
                                                Sửa
                                            </button>
                                            <button
                                                onClick={() => handleDelete(category.id)}
                                                className="text-red-600 hover:text-red-900"
                                            >
                                                Xóa
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CategoryManagement;
