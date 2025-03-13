import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectAllVouchers, addVoucher, updateVoucher, deleteVoucher } from '../store/slices/voucherSlice';

const SettingsManagement = () => {
    const [activeTab, setActiveTab] = useState('general');

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-6">Cài đặt hệ thống</h1>

            <div className="border-b border-gray-200 mb-6">
                <ul className="flex flex-wrap -mb-px">
                    <li className="mr-2">
                        <button
                            onClick={() => setActiveTab('vouchers')}
                            className={`inline-block p-4 rounded-t-lg ${activeTab === 'vouchers'
                                ? 'text-blue-600 border-b-2 border-blue-600'
                                : 'hover:text-gray-600 hover:border-gray-300'}`}
                        >
                            Mã giảm giá
                        </button>
                    </li>
                    <li className="mr-2">
                        <button
                            onClick={() => setActiveTab('general')}
                            className={`inline-block p-4 rounded-t-lg ${activeTab === 'general'
                                ? 'text-blue-600 border-b-2 border-blue-600'
                                : 'hover:text-gray-600 hover:border-gray-300'}`}
                        >
                            Thông tin chung
                        </button>
                    </li>
                </ul>
            </div>

            {activeTab === 'general' && <GeneralSettings />}
        </div>
    );
};

const VoucherSettings = () => {
    const dispatch = useDispatch();
    const vouchers = useSelector(selectAllVouchers);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentVoucher, setCurrentVoucher] = useState(null);
    const [formData, setFormData] = useState({
        code: '',
        description: '',
        discount_amount: '',
        expiry_date: '',
        is_active: true
    });
    const [validationErrors, setValidationErrors] = useState({});

    const openModal = (voucher = null) => {
        setCurrentVoucher(voucher);
        if (voucher) {
            setFormData({
                id: voucher.id,
                code: voucher.code,
                description: voucher.description,
                discount_amount: voucher.discount_amount,
                expiry_date: voucher.expiry_date,
                is_active: voucher.is_active
            });
        } else {
            setFormData({
                code: '',
                description: '',
                discount_amount: '',
                expiry_date: '',
                is_active: true
            });
        }
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setCurrentVoucher(null);
        setValidationErrors({});
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const validateForm = () => {
        const errors = {};
        if (!formData.code.trim()) errors.code = 'Mã giảm giá không được để trống';
        if (!formData.description.trim()) errors.description = 'Mô tả không được để trống';
        if (!formData.discount_amount) errors.discount_amount = 'Số tiền giảm giá không được để trống';
        if (isNaN(formData.discount_amount) || parseInt(formData.discount_amount) <= 0) {
            errors.discount_amount = 'Số tiền giảm giá phải là số dương';
        }
        if (!formData.expiry_date) errors.expiry_date = 'Ngày hết hạn không được để trống';

        setValidationErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validateForm()) return;

        if (currentVoucher) {
            dispatch(updateVoucher({
                ...formData,
                discount_amount: parseInt(formData.discount_amount)
            }));
        } else {
            dispatch(addVoucher({
                ...formData,
                discount_amount: parseInt(formData.discount_amount)
            }));
        }
        closeModal();
    };

    const handleDelete = (id) => {
        if (window.confirm('Bạn có chắc muốn xóa mã giảm giá này?')) {
            dispatch(deleteVoucher(id));
        }
    };

    const formatDate = (dateString) => {
        const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
        return new Date(dateString).toLocaleDateString('vi-VN', options);
    };

    const formatCurrency = (amount) => {
        return new Intl.NumberFormat('vi-VN', {
            style: 'currency',
            currency: 'VND'
        }).format(amount);
    };

    return (
        <div>
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Quản lý mã giảm giá</h2>
                <button
                    onClick={() => openModal()}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                    Thêm mã giảm giá
                </button>
            </div>

            <div className="overflow-x-auto">
                <table className="min-w-full bg-white">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Mã
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Mô tả
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Giá trị
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Ngày hết hạn
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Trạng thái
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Thao tác
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {vouchers.map((voucher) => (
                            <tr key={voucher.id}>
                                <td className="px-6 py-4 whitespace-nowrap">{voucher.code}</td>
                                <td className="px-6 py-4">{voucher.description}</td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    {formatCurrency(voucher.discount_amount)}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    {formatDate(voucher.expiry_date)}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                                        ${voucher.is_active ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                                        {voucher.is_active ? 'Đang hoạt động' : 'Đã vô hiệu'}
                                    </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                    <button
                                        onClick={() => openModal(voucher)}
                                        className="text-indigo-600 hover:text-indigo-900 mr-4"
                                    >
                                        Sửa
                                    </button>
                                    <button
                                        onClick={() => handleDelete(voucher.id)}
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

            {isModalOpen && (
                <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
                    <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
                        <div className="mt-3">
                            <h3 className="text-lg font-medium leading-6 text-gray-900 mb-4">
                                {currentVoucher ? 'Chỉnh sửa mã giảm giá' : 'Thêm mã giảm giá mới'}
                            </h3>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2">
                                        Mã giảm giá
                                    </label>
                                    <input
                                        type="text"
                                        name="code"
                                        value={formData.code}
                                        onChange={handleChange}
                                        className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline 
                                            ${validationErrors.code ? 'border-red-500' : ''}`}
                                    />
                                    {validationErrors.code && (
                                        <p className="text-red-500 text-xs italic">{validationErrors.code}</p>
                                    )}
                                </div>

                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2">
                                        Mô tả
                                    </label>
                                    <textarea
                                        name="description"
                                        value={formData.description}
                                        onChange={handleChange}
                                        className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline 
                                            ${validationErrors.description ? 'border-red-500' : ''}`}
                                    />
                                    {validationErrors.description && (
                                        <p className="text-red-500 text-xs italic">{validationErrors.description}</p>
                                    )}
                                </div>

                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2">
                                        Số tiền giảm
                                    </label>
                                    <input
                                        type="number"
                                        name="discount_amount"
                                        value={formData.discount_amount}
                                        onChange={handleChange}
                                        className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline 
                                            ${validationErrors.discount_amount ? 'border-red-500' : ''}`}
                                    />
                                    {validationErrors.discount_amount && (
                                        <p className="text-red-500 text-xs italic">{validationErrors.discount_amount}</p>
                                    )}
                                </div>

                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2">
                                        Ngày hết hạn
                                    </label>
                                    <input
                                        type="date"
                                        name="expiry_date"
                                        value={formData.expiry_date}
                                        onChange={handleChange}
                                        className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline 
                                            ${validationErrors.expiry_date ? 'border-red-500' : ''}`}
                                    />
                                    {validationErrors.expiry_date && (
                                        <p className="text-red-500 text-xs italic">{validationErrors.expiry_date}</p>
                                    )}
                                </div>

                                <div className="mb-4">
                                    <label className="flex items-center">
                                        <input
                                            type="checkbox"
                                            name="is_active"
                                            checked={formData.is_active}
                                            onChange={handleChange}
                                            className="mr-2"
                                        />
                                        <span className="text-gray-700 text-sm font-bold">Kích hoạt</span>
                                    </label>
                                </div>

                                <div className="flex justify-end">
                                    <button
                                        type="button"
                                        onClick={closeModal}
                                        className="bg-gray-500 text-white px-4 py-2 rounded mr-2 hover:bg-gray-600"
                                    >
                                        Hủy
                                    </button>
                                    <button
                                        type="submit"
                                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                                    >
                                        {currentVoucher ? 'Cập nhật' : 'Thêm mới'}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

const GeneralSettings = () => {
    return (
        <div>
            <h2 className="text-xl font-semibold mb-4">Thông tin chung</h2>
            {/* Thêm nội dung cho phần cài đặt chung ở đây */}
        </div>
    );
};

export default SettingsManagement;
