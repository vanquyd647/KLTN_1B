// components/modals/DeleteConfirmModal.js
import React, { memo } from 'react';

const DeleteConfirmModal = memo(({ onClose, onDelete, loading }) => {
    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
            <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
                <h3 className="text-lg font-medium mb-4">Xác nhận xóa</h3>
                <p>Bạn có chắc chắn muốn xóa người dùng này?</p>
                <div className="mt-4 flex justify-end space-x-2">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
                    >
                        Hủy
                    </button>
                    <button
                        onClick={onDelete}
                        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                        disabled={loading}
                    >
                        {loading ? 'Đang xử lý...' : 'Xóa'}
                    </button>
                </div>
            </div>
        </div>
    );
});

DeleteConfirmModal.displayName = 'DeleteConfirmModal';
export default DeleteConfirmModal;
