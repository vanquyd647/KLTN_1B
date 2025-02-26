// ShippingManagement.js
import React, { useEffect, useState } from 'react';
import { carrierApi } from '../utils/apiClient';

const ShippingManagement = () => {
    const [carriers, setCarriers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [editingCarrier, setEditingCarrier] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        contact_email: '',
        contact_phone: '',
        website: '',
        price: '',
        status: 'active'
    });

    // Fetch carriers
    useEffect(() => {
        fetchCarriers();
    }, []);

    const fetchCarriers = async () => {
        try {
            setLoading(true);
            const response = await carrierApi.getCarriers();
            // Điều chỉnh để lấy dữ liệu từ response.data.rows
            setCarriers(response.data.rows);
            setLoading(false);
        } catch (error) {
            setError('Không thể tải danh sách nhà vận chuyển');
            setLoading(false);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (editingCarrier) {
                await carrierApi.updateCarrier(editingCarrier.id, formData);
            } else {
                await carrierApi.createCarrier(formData);
            }
            fetchCarriers();
            setIsAddModalOpen(false);
            setEditingCarrier(null);
            setFormData({
                name: '',
                description: '',
                contact_email: '',
                contact_phone: '',
                website: '',
                price: '',
                status: 'active'
            });
        } catch (error) {
            setError('Có lỗi xảy ra khi lưu thông tin');
        }
    };

    const handleDelete = async (id) => {
        if (window.confirm('Bạn có chắc chắn muốn xóa nhà vận chuyển này?')) {
            try {
                await carrierApi.deleteCarrier(id);
                fetchCarriers();
            } catch (error) {
                setError('Không thể xóa nhà vận chuyển');
            }
        }
    };

    const handleStatusChange = async (id, newStatus) => {
        try {
            await carrierApi.updateCarrierStatus(id, newStatus);
            fetchCarriers();
        } catch (error) {
            setError('Không thể cập nhật trạng thái');
        }
    };

    if (loading) return <div className="flex items-center justify-center p-8">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
    </div>;

    if (error) return <div className="text-red-500 p-4">{error}</div>;

    return (
        <div className="p-6">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Quản lý vận chuyển</h2>
                <button
                    onClick={() => setIsAddModalOpen(true)}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                    Thêm nhà vận chuyển
                </button>
            </div>

            {/* Carriers Table */}
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Tên</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Mô tả</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Liên hệ</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Giá</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Trạng thái</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Thao tác</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {carriers.map((carrier) => (
                            <tr key={carrier.id}>
                                <td className="px-6 py-4">{carrier.name}</td>
                                <td className="px-6 py-4">{carrier.description}</td>
                                <td className="px-6 py-4">
                                    {carrier.contact_phone && <div>SĐT: {carrier.contact_phone}</div>}
                                    {carrier.contact_email && <div>Email: {carrier.contact_email}</div>}
                                    {carrier.website && <div>Web: {carrier.website}</div>}
                                </td>
                                <td className="px-6 py-4">{carrier.price.toLocaleString('vi-VN')}đ</td>
                                <td className="px-6 py-4">
                                    <select
                                        value={carrier.status}
                                        onChange={(e) => handleStatusChange(carrier.id, e.target.value)}
                                        className="border rounded px-2 py-1"
                                    >
                                        <option value="active">Hoạt động</option>
                                        <option value="inactive">Không hoạt động</option>
                                    </select>
                                </td>
                                <td className="px-6 py-4">
                                    <button
                                        onClick={() => {
                                            setEditingCarrier(carrier);
                                            setFormData(carrier);
                                            setIsAddModalOpen(true);
                                        }}
                                        className="text-blue-600 hover:text-blue-900 mr-3"
                                    >
                                        <svg
                                            className="w-5 h-5"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                                            />
                                        </svg>
                                    </button>
                                    <button
                                        onClick={() => handleDelete(carrier.id)}
                                        className="text-red-600 hover:text-red-900"
                                    >
                                        <svg
                                            className="w-5 h-5"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                            />
                                        </svg>
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Add/Edit Modal */}
            {isAddModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white p-6 rounded-lg w-96">
                        <h3 className="text-lg font-bold mb-4">
                            {editingCarrier ? 'Sửa nhà vận chuyển' : 'Thêm nhà vận chuyển'}
                        </h3>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium mb-1">Tên</label>
                                <input
                                    type="text"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full border rounded px-3 py-2"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">Mô tả</label>
                                <textarea
                                    value={formData.description}
                                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                    className="w-full border rounded px-3 py-2"
                                    rows="3"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">Email liên hệ</label>
                                <input
                                    type="email"
                                    value={formData.contact_email}
                                    onChange={(e) => setFormData({ ...formData, contact_email: e.target.value })}
                                    className="w-full border rounded px-3 py-2"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">Số điện thoại</label>
                                <input
                                    type="text"
                                    value={formData.contact_phone}
                                    onChange={(e) => setFormData({ ...formData, contact_phone: e.target.value })}
                                    className="w-full border rounded px-3 py-2"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">Website</label>
                                <input
                                    type="url"
                                    value={formData.website}
                                    onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                                    className="w-full border rounded px-3 py-2"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">Giá</label>
                                <input
                                    type="number"
                                    value={formData.price}
                                    onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                                    className="w-full border rounded px-3 py-2"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">Trạng thái</label>
                                <select
                                    value={formData.status}
                                    onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                                    className="w-full border rounded px-3 py-2"
                                >
                                    <option value="active">Hoạt động</option>
                                    <option value="inactive">Không hoạt động</option>
                                </select>
                            </div>
                            <div className="flex justify-end space-x-3">
                                <button
                                    type="button"
                                    onClick={() => {
                                        setIsAddModalOpen(false);
                                        setEditingCarrier(null);
                                        setFormData({
                                            name: '',
                                            description: '',
                                            contact_email: '',
                                            contact_phone: '',
                                            website: '',
                                            price: '',
                                            status: 'active'
                                        });
                                    }}
                                    className="px-4 py-2 border rounded hover:bg-gray-100"
                                >
                                    Hủy
                                </button>
                                <button
                                    type="submit"
                                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                                >
                                    {editingCarrier ? 'Cập nhật' : 'Thêm'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ShippingManagement;
