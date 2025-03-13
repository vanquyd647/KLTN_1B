// components/admin/CouponManagement.js
import React, { useState, useEffect } from 'react';
import { couponApi } from '../utils/apiClient';
import { format } from 'date-fns';
import { toast } from 'react-toastify';
import { min } from 'lodash';

const CouponManagement = () => {
    const [coupons, setCoupons] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const [modalMode, setModalMode] = useState('create');
    const [selectedCoupon, setSelectedCoupon] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [formData, setFormData] = useState({
        code: '',
        description: '',
        discount_amount: '',
        min_order_amount: '',
        expiry_date: '',
        total_quantity: 0,
        is_active: true
    });
    const [filters, setFilters] = useState({
        search: '',
        is_active: '',
        startDate: '',
        endDate: '',
        minAmount: '',
        maxAmount: '',
        sortBy: 'created_at',
        sortOrder: 'DESC'
    });

    useEffect(() => {
        fetchCoupons();
    }, [currentPage, filters]); 

    const fetchCoupons = async () => {
        try {
            setLoading(true);
            const response = await couponApi.getAllCoupons({
                page: currentPage,
                limit: 10,
                ...filters
            });
            setCoupons(response.data.coupons);
            setTotalPages(Math.ceil(response.data.total / 10));
        } catch (error) {
            toast.error('Không thể tải danh sách mã giảm giá');
        } finally {
            setLoading(false);
        }
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (modalMode === 'create') {
                await couponApi.createCoupon(formData);
                toast.success('Tạo mã giảm giá thành công');
            } else {
                await couponApi.updateCoupon(selectedCoupon.id, formData);
                toast.success('Cập nhật mã giảm giá thành công');
            }
            setShowModal(false);
            fetchCoupons();
        } catch (error) {
            toast.error(error.response?.data?.message || 'Có lỗi xảy ra');
        }
    };

    const handleDelete = async (id) => {
        if (window.confirm('Bạn có chắc chắn muốn xóa mã giảm giá này?')) {
            try {
                await couponApi.deleteCoupon(id);
                toast.success('Xóa mã giảm giá thành công');
                fetchCoupons();
            } catch (error) {
                toast.error('Không thể xóa mã giảm giá');
            }
        }
    };

    if (loading && !coupons.length) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
            </div>
        );
    }

    return (
        <div className="p-6 max-w-full mx-auto">
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800">Quản lý mã giảm giá</h2>
                <button
                    onClick={() => {
                        setModalMode('create');
                        setSelectedCoupon(null);
                        setFormData({
                            code: '',
                            description: '',
                            discount_amount: '',
                            min_order_amount: '',
                            expiry_date: '',
                            total_quantity: 0,
                            is_active: true
                        });
                        setShowModal(true);
                    }}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                    Thêm mã giảm giá
                </button>
            </div>

            <div className="mb-6 bg-white p-4 rounded-lg shadow">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {/* Search */}
                    <div>
                        <label className="block text-sm font-medium mb-1">Tìm kiếm</label>
                        <input
                            type="text"
                            value={filters.search}
                            onChange={(e) => setFilters(prev => ({ ...prev, search: e.target.value }))}
                            placeholder="Tìm theo mã hoặc mô tả"
                            className="w-full border rounded px-3 py-2"
                        />
                    </div>

                    {/* Status Filter */}
                    <div>
                        <label className="block text-sm font-medium mb-1">Trạng thái</label>
                        <select
                            value={filters.is_active}
                            onChange={(e) => setFilters(prev => ({ ...prev, is_active: e.target.value }))}
                            className="w-full border rounded px-3 py-2"
                        >
                            <option value="">Tất cả</option>
                            <option value="true">Đang hoạt động</option>
                            <option value="false">Không hoạt động</option>
                        </select>
                    </div>

                    {/* Date Range */}
                    <div className="grid grid-cols-2 gap-2">
                        <div>
                            <label className="block text-sm font-medium mb-1">Từ ngày</label>
                            <input
                                type="date"
                                value={filters.startDate}
                                onChange={(e) => setFilters(prev => ({ ...prev, startDate: e.target.value }))}
                                className="w-full border rounded px-3 py-2"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Đến ngày</label>
                            <input
                                type="date"
                                value={filters.endDate}
                                onChange={(e) => setFilters(prev => ({ ...prev, endDate: e.target.value }))}
                                className="w-full border rounded px-3 py-2"
                            />
                        </div>
                    </div>

                    {/* Amount Range */}
                    <div className="grid grid-cols-2 gap-2">
                        <div>
                            <label className="block text-sm font-medium mb-1">Giá trị từ</label>
                            <input
                                type="number"
                                value={filters.minAmount}
                                onChange={(e) => setFilters(prev => ({ ...prev, minAmount: e.target.value }))}
                                className="w-full border rounded px-3 py-2"
                                placeholder="VNĐ"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Đến</label>
                            <input
                                type="number"
                                value={filters.maxAmount}
                                onChange={(e) => setFilters(prev => ({ ...prev, maxAmount: e.target.value }))}
                                className="w-full border rounded px-3 py-2"
                                placeholder="VNĐ"
                            />
                        </div>
                    </div>

                    {/* Sort Options */}
                    <div className="grid grid-cols-2 gap-2">
                        <div>
                            <label className="block text-sm font-medium mb-1">Sắp xếp theo</label>
                            <select
                                value={filters.sortBy}
                                onChange={(e) => setFilters(prev => ({ ...prev, sortBy: e.target.value }))}
                                className="w-full border rounded px-3 py-2"
                            >
                                <option value="created_at">Ngày tạo</option>
                                <option value="expiry_date">Ngày hết hạn</option>
                                <option value="discount_amount">Giá trị giảm</option>
                                <option value="code">Mã giảm giá</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Thứ tự</label>
                            <select
                                value={filters.sortOrder}
                                onChange={(e) => setFilters(prev => ({ ...prev, sortOrder: e.target.value }))}
                                className="w-full border rounded px-3 py-2"
                            >
                                <option value="DESC">Giảm dần</option>
                                <option value="ASC">Tăng dần</option>
                            </select>
                        </div>
                    </div>

                    {/* Filter Actions */}
                    <div className="flex items-end space-x-2">
                        <button
                            onClick={() => {
                                setFilters({
                                    search: '',
                                    is_active: '',
                                    startDate: '',
                                    endDate: '',
                                    minAmount: '',
                                    maxAmount: '',
                                    sortBy: 'created_at',
                                    sortOrder: 'DESC'
                                });
                                setCurrentPage(1);
                            }}
                            className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
                        >
                            Đặt lại
                        </button>
                        {/* <button
                            onClick={() => {
                                setCurrentPage(1);
                                fetchCoupons();
                            }}
                            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                        >
                            Lọc
                        </button> */}
                    </div>
                </div>
            </div>

            {/* Table */}
            <div className="bg-white rounded-lg shadow overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Mã</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Mô tả</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Áp dụng cho đơn từ</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Giảm giá</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Số lượng</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Ngày hết hạn</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Trạng thái</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Thao tác</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {coupons.map((coupon) => (
                            <tr key={coupon.id}>
                                <td className="px-6 py-4 whitespace-nowrap">{coupon.code}</td>
                                <td className="px-6 py-4">{coupon.description}</td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    {Number(coupon.min_order_amount).toLocaleString()}đ
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    {Number(coupon.discount_amount).toLocaleString()}đ
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    {coupon.used_quantity}/{coupon.total_quantity || '∞'}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    {format(new Date(coupon.expiry_date), 'dd/MM/yyyy')}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <span className={`px-2 py-1 text-xs rounded-full ${coupon.is_active
                                        ? 'bg-green-100 text-green-800'
                                        : 'bg-red-100 text-red-800'
                                        }`}>
                                        {coupon.is_active ? 'Đang hoạt động' : 'Không hoạt động'}
                                    </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="flex space-x-2">
                                        <button
                                            onClick={() => {
                                                setModalMode('edit');
                                                setSelectedCoupon(coupon);
                                                setFormData({
                                                    code: coupon.code,
                                                    description: coupon.description,
                                                    discount_amount: coupon.discount_amount,
                                                    min_order_amount: coupon.min_order_amount,
                                                    expiry_date: format(new Date(coupon.expiry_date), 'yyyy-MM-dd'),
                                                    total_quantity: coupon.total_quantity,
                                                    is_active: coupon.is_active
                                                });
                                                setShowModal(true);
                                            }}
                                            className="text-blue-600 hover:text-blue-900"
                                        >
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                            </svg>
                                        </button>
                                        <button
                                            onClick={() => handleDelete(coupon.id)}
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
                            disabled={currentPage === totalPages}
                            className={`px-4 py-2 rounded ${currentPage === totalPages
                                ? 'bg-gray-100 text-gray-400'
                                : 'bg-blue-500 text-white hover:bg-blue-600'
                                }`}
                        >
                            Sau
                        </button>
                    </div>
                </div>
            )}

            {/* Modal */}
            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white rounded-lg p-6 w-full max-w-md">
                        <h3 className="text-lg font-bold mb-4">
                            {modalMode === 'create' ? 'Thêm mã giảm giá' : 'Sửa mã giảm giá'}
                        </h3>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium mb-1">Mã giảm giá</label>
                                <input
                                    type="text"
                                    value={formData.code}
                                    onChange={(e) => setFormData({ ...formData, code: e.target.value })}
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
                                <label className="block text-sm font-medium mb-1">Số tiền giảm</label>
                                <input
                                    type="number"
                                    value={formData.discount_amount}
                                    onChange={(e) => setFormData({ ...formData, discount_amount: e.target.value })}
                                    className="w-full border rounded px-3 py-2"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">Áp dụng cho đơn hàng từ</label>
                                <input
                                    type="number"
                                    value={formData.min_order_amount}
                                    onChange={(e) => setFormData({ ...formData, min_order_amount: e.target.value })}
                                    className="w-full border rounded px-3 py-2"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">Ngày hết hạn</label>
                                <input
                                    type="date"
                                    value={formData.expiry_date}
                                    onChange={(e) => setFormData({ ...formData, expiry_date: e.target.value })}
                                    className="w-full border rounded px-3 py-2"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">Số lượng (0 = không giới hạn)</label>
                                <input
                                    type="number"
                                    value={formData.total_quantity}
                                    onChange={(e) => setFormData({ ...formData, total_quantity: e.target.value })}
                                    className="w-full border rounded px-3 py-2"
                                    min="0"
                                />
                            </div>
                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                    checked={formData.is_active}
                                    onChange={(e) => setFormData({ ...formData, is_active: e.target.checked })}
                                    className="mr-2"
                                />
                                <label>Kích hoạt</label>
                            </div>
                            <div className="flex justify-end space-x-2">
                                <button
                                    type="button"
                                    onClick={() => setShowModal(false)}
                                    className="px-4 py-2 border rounded hover:bg-gray-100"
                                >
                                    Hủy
                                </button>
                                <button
                                    type="submit"
                                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                                >
                                    {modalMode === 'create' ? 'Thêm' : 'Cập nhật'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CouponManagement;
