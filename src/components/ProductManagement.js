import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductsByPagination } from '@/store/slices/productSlice';
import ProductForm from './ProductForm';
import { stockApi } from '../utils/apiClient';


const ProductManagement = () => {
    const dispatch = useDispatch();
    const { pagination, loading, error } = useSelector((state) => state.products);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(5);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [editingProduct, setEditingProduct] = useState(null);
    const [stockData, setStockData] = useState({});
    const [editingStock, setEditingStock] = useState(null);
    const [reloadTrigger, setReloadTrigger] = useState(0);
    const [sortConfig, setSortConfig] = useState({
        key: null,
        direction: 'asc'
    });


    const handleEdit = (product) => {
        setEditingProduct(product);
    };

    useEffect(() => {
        dispatch(fetchProductsByPagination({
            page: currentPage,
            limit: itemsPerPage
        }));
    }, [dispatch, currentPage, itemsPerPage, reloadTrigger]);

    useEffect(() => {
        const fetchStockData = async () => {
            try {
                const response = await stockApi.getProductStocks();
                // Tổ chức lại dữ liệu theo product_id
                const stockByProduct = response.data.reduce((acc, stock) => {
                    if (!acc[stock.product_id]) {
                        acc[stock.product_id] = [];
                    }
                    acc[stock.product_id].push(stock);
                    return acc;
                }, {});
                setStockData(stockByProduct);
            } catch (error) {
                console.error('Error fetching stock data:', error);
            }
        };

        fetchStockData();
    }, [reloadTrigger]);

    const handleSort = (key) => {
        let direction = 'asc';
        if (sortConfig.key === key && sortConfig.direction === 'asc') {
            direction = 'desc';
        }
        setSortConfig({ key, direction });
    };

    const sortedProducts = React.useMemo(() => {
        if (!sortConfig.key) return pagination?.items;

        return [...(pagination?.items || [])].sort((a, b) => {
            if (sortConfig.key === 'product_name') {
                return sortConfig.direction === 'asc'
                    ? a.product_name.localeCompare(b.product_name)
                    : b.product_name.localeCompare(a.product_name);
            }
            if (sortConfig.key === 'price') {
                return sortConfig.direction === 'asc'
                    ? a.price - b.price
                    : b.price - a.price;
            }
            if (sortConfig.key === 'status') {
                return sortConfig.direction === 'asc'
                    ? a.status.localeCompare(b.status)
                    : b.status.localeCompare(a.status);
            }
            return 0;
        });
    }, [pagination?.items, sortConfig]);

    const handleUpdateStock = async (stock, newQuantity) => {
        try {
            // Gọi API cập nhật stock
            const updateResponse = await stockApi.updateStock(stock.id, {
                quantity: parseInt(newQuantity)
            });

            if (updateResponse.success) {
                // Gọi API lấy danh sách stock mới
                const stockResponse = await stockApi.getProductStocks();

                // Kiểm tra và tổ chức lại dữ liệu
                const stocks = stockResponse.data || []; // Đảm bảo luôn có một mảng
                const newStockData = stocks.reduce((acc, stock) => {
                    if (!acc[stock.product_id]) {
                        acc[stock.product_id] = [];
                    }
                    acc[stock.product_id].push(stock);
                    return acc;
                }, {});

                // Cập nhật state
                setStockData(newStockData);
                setEditingStock(null);

                // Có thể thêm thông báo thành công ở đây
                console.log('Cập nhật tồn kho thành công');
            }
        } catch (error) {
            console.error('Lỗi khi cập nhật tồn kho:', error);
            // Thêm xử lý lỗi ở đây (ví dụ: hiển thị thông báo lỗi)
        }
    };

    const handleViewDetails = (product) => {
        setSelectedProduct(product);
    };

    if (loading) return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
    );

    if (error) return (
        <div className="p-4 bg-red-100 border border-red-400 text-red-700 rounded">
            Lỗi: {error}
        </div>
    );

    return (
        <div className="p-6 max-w-full mx-auto">
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h2 className="text-2xl font-bold text-gray-800">Quản lý sản phẩm</h2>
                </div>
                <button
                    onClick={() => setIsAddModalOpen(true)}
                    className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors flex items-center"
                >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                    Thêm sản phẩm
                </button>
            </div>

            {/* Product Table */}
            <div className="bg-white rounded-lg shadow overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                                    onClick={() => handleSort('product_name')}
                                >
                                    <div className="flex items-center">
                                        Sản phẩm
                                        {sortConfig.key === 'product_name' && (
                                            <span className="ml-2">
                                                {sortConfig.direction === 'asc' ? '↑' : '↓'}
                                            </span>
                                        )}
                                    </div>
                                </th>
                                <th
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                                    onClick={() => handleSort('price')}
                                >
                                    <div className="flex items-center">
                                        Giá
                                        {sortConfig.key === 'price' && (
                                            <span className="ml-2">
                                                {sortConfig.direction === 'asc' ? '↑' : '↓'}
                                            </span>
                                        )}
                                    </div>
                                </th>
                                <th
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                                    onClick={() => handleSort('status')}
                                >
                                    <div className="flex items-center">
                                        Trạng thái
                                        {sortConfig.key === 'status' && (
                                            <span className="ml-2">
                                                {sortConfig.direction === 'asc' ? '↑' : '↓'}
                                            </span>
                                        )}
                                    </div>
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Thao tác
                                </th>
                            </tr>
                        </thead>

                        <tbody className="bg-white divide-y divide-gray-200">
                            {sortedProducts?.map((product) => (
                                <tr key={product.id} className="hover:bg-gray-50">
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="flex items-center">
                                            <div className="h-20 w-20 flex-shrink-0">
                                                <img
                                                    className="h-20 w-20 rounded-lg object-cover"
                                                    src={product.productColors[0]?.ProductColor?.image}
                                                    alt={product.product_name}
                                                />
                                            </div>
                                            <div className="ml-4">
                                                <div className="text-sm font-medium text-gray-900">{product.product_name}</div>
                                                <div className="text-sm text-gray-500">{product.categories.map(cat => cat.name).join(', ')}</div>
                                                <div className="flex gap-1 mt-1">
                                                    {product.productColors.map(color => (
                                                        <div
                                                            key={color.id}
                                                            className="w-4 h-4 rounded-full border border-gray-200"
                                                            style={{ backgroundColor: color.hex_code }}
                                                            title={color.color}
                                                        />
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm text-gray-900">{product.price.toLocaleString('vi-VN')}đ</div>
                                        {product.discount_price < product.price && (
                                            <div className="text-sm text-red-500">{product.discount_price.toLocaleString('vi-VN')}đ</div>
                                        )}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className={`px-2 py-1 text-xs font-semibold rounded-full ${product.status === 'available'
                                            ? 'bg-green-100 text-green-800'
                                            : 'bg-red-100 text-red-800'
                                            }`}>
                                            {product.status === 'available' ? 'Còn hàng' : 'Hết hàng'}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="flex items-center space-x-4">
                                            {/* Edit Icon */}
                                            <button
                                                onClick={() => handleEdit(product)}
                                                className="text-blue-600 hover:text-blue-900"
                                                title="Sửa"
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
                                            {/* View Details Icon */}
                                            <button
                                                onClick={() => handleViewDetails(product)}
                                                className="text-green-600 hover:text-green-900"
                                                title="Chi tiết"
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
                                                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                                    />
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                                    />
                                                </svg>
                                            </button>
                                            {/* Delete Icon */}
                                            <button
                                                className="text-red-600 hover:text-red-900"
                                                title="Xóa"
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
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Pagination */}
            {pagination && (
                <div className="mt-4 flex justify-between items-center">
                    <div className="text-sm text-gray-700">
                        Hiển thị{' '}
                        <span className="font-medium">
                            {(currentPage - 1) * itemsPerPage + 1}
                        </span>
                        {' '}-{' '}
                        <span className="font-medium">
                            {Math.min(currentPage * itemsPerPage, pagination.totalItems)}
                        </span>
                        {' '}trên{' '}
                        <span className="font-medium">{pagination.totalItems}</span> sản phẩm
                    </div>
                    <div className="flex space-x-2">
                        <button
                            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                            disabled={currentPage === 1}
                            className={`px-4 py-2 text-sm font-medium rounded-md ${currentPage === 1
                                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                                : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-300'
                                }`}
                        >
                            Trước
                        </button>

                        {/* Hiển thị các số trang */}
                        <div className="flex space-x-1">
                            {(() => {
                                const totalPages = Math.ceil(pagination.totalItems / itemsPerPage);
                                return [...Array(totalPages)].map((_, index) => (
                                    <button
                                        key={index + 1}
                                        onClick={() => setCurrentPage(index + 1)}
                                        className={`px-4 py-2 text-sm font-medium rounded-md ${currentPage === index + 1
                                            ? 'bg-blue-500 text-white'
                                            : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-300'
                                            }`}
                                    >
                                        {index + 1}
                                    </button>
                                ));
                            })()}
                        </div>

                        <button
                            onClick={() => {
                                const totalPages = Math.ceil(pagination.totalItems / itemsPerPage);
                                if (currentPage < totalPages) {
                                    setCurrentPage(prev => prev + 1);
                                }
                            }}
                            disabled={currentPage >= Math.ceil(pagination.totalItems / itemsPerPage)}
                            className={`px-4 py-2 text-sm font-medium rounded-md ${currentPage >= Math.ceil(pagination.totalItems / itemsPerPage)
                                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                                : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-300'
                                }`}
                        >
                            Sau
                        </button>
                    </div>
                </div>
            )}

            {/* Product Detail Modal */}
            {selectedProduct && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
                    <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                        <div className="p-6">
                            <div className="flex justify-between items-start mb-4">
                                <h3 className="text-xl font-bold">{selectedProduct.product_name}</h3>
                                <button
                                    onClick={() => setSelectedProduct(null)}
                                    className="text-gray-400 hover:text-gray-500"
                                >
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <img
                                        src={selectedProduct.productColors[0]?.ProductColor?.image}
                                        alt={selectedProduct.product_name}
                                        className="w-full h-64 object-cover rounded-lg"
                                    />
                                    <div className="flex gap-2 mt-2">
                                        {selectedProduct.productColors.map(color => (
                                            <div
                                                key={color.id}
                                                className="w-8 h-8 rounded-full border-2 border-gray-200 cursor-pointer"
                                                style={{ backgroundColor: color.hex_code }}
                                                title={color.color}
                                            />
                                        ))}
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <div>
                                        <h4 className="font-semibold text-gray-700">Mô tả</h4>
                                        <p className="text-gray-600">{selectedProduct.description}</p>
                                    </div>

                                    <div>
                                        <h4 className="font-semibold text-gray-700">Danh mục</h4>
                                        <div className="flex gap-2">
                                            {selectedProduct.categories.map(cat => (
                                                <span key={cat.id} className="px-2 py-1 bg-gray-100 rounded-full text-sm">
                                                    {cat.name}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <div>
                                        <h4 className="font-semibold text-gray-700">Kích thước</h4>
                                        <div className="flex gap-2">
                                            {selectedProduct.productSizes.map(size => (
                                                <span key={size.id} className="px-3 py-1 border rounded-md text-sm">
                                                    {size.size}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <div>
                                        <h4 className="font-semibold text-gray-700">Giá</h4>
                                        <div className="text-lg">
                                            <span className="text-gray-900 font-bold">
                                                {selectedProduct.discount_price.toLocaleString('vi-VN')}đ
                                            </span>
                                            {selectedProduct.discount_price < selectedProduct.price && (
                                                <span className="ml-2 text-gray-500 line-through">
                                                    {selectedProduct.price.toLocaleString('vi-VN')}đ
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                    {/* Thêm phần hiển thị tồn kho */}
                                    <div className="p-4">
                                        <h4 className="font-semibold text-gray-700 mb-2">Chi tiết tồn kho</h4>
                                        <div className="grid grid-cols-1 gap-2">
                                            {stockData[selectedProduct.id]?.map((stock, index) => (
                                                <div key={index} className="flex justify-between items-center p-2 bg-gray-50 rounded">
                                                    <div>
                                                        <span className="font-medium">
                                                            Size: {selectedProduct.productSizes.find(s => s.id === stock.size_id)?.size}
                                                        </span>
                                                        <span className="mx-2">|</span>
                                                        <span className="font-medium">
                                                            Màu: {selectedProduct.productColors.find(c => c.id === stock.color_id)?.color}
                                                        </span>
                                                    </div>
                                                    <div className="flex items-center gap-2">
                                                        {editingStock === stock.id ? (
                                                            <>
                                                                <input
                                                                    type="number"
                                                                    min="0"
                                                                    className="w-20 px-2 py-1 border rounded"
                                                                    defaultValue={stock.quantity}
                                                                    onKeyPress={(e) => {
                                                                        if (e.key === 'Enter') {
                                                                            handleUpdateStock(stock, e.target.value);
                                                                        }
                                                                    }}
                                                                />
                                                                <button
                                                                    onClick={() => setEditingStock(null)}
                                                                    className="text-gray-500 hover:text-gray-700"
                                                                >
                                                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                                                    </svg>
                                                                </button>
                                                            </>
                                                        ) : (
                                                            <>
                                                                <div className="text-blue-600 font-semibold">
                                                                    Số lượng: {stock.quantity}
                                                                </div>
                                                                <button
                                                                    onClick={() => setEditingStock(stock.id)}
                                                                    className="text-gray-500 hover:text-gray-700 ml-2"
                                                                >
                                                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                                                    </svg>
                                                                </button>
                                                            </>
                                                        )}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {/* Add Product Modal */}
            {isAddModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
                    <div className="bg-white rounded-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto">
                        <div className="flex justify-between items-center p-6 border-b">
                            <h3 className="text-xl font-bold">Thêm sản phẩm mới</h3>
                            <button
                                onClick={() => setIsAddModalOpen(false)}
                                className="text-gray-400 hover:text-gray-500"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        <ProductForm
                            onSuccess={() => {
                                setIsAddModalOpen(false);
                                setReloadTrigger(prev => prev + 1);
                            }}
                            onCancel={() => setIsAddModalOpen(false)}
                        />
                    </div>
                </div>
            )}

            {/* Edit Product Modal */}
            {editingProduct && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
                    <div className="bg-white rounded-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto">
                        <div className="flex justify-between items-center p-6 border-b">
                            <h3 className="text-xl font-bold">Sửa sản phẩm</h3>
                            <button
                                onClick={() => setEditingProduct(null)}
                                className="text-gray-400 hover:text-gray-500"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        <ProductForm
                            product={{
                                ...editingProduct,
                                ProductStocks: stockData[editingProduct.id]?.map(stock => ({
                                    id: stock.id,
                                    size_id: stock.size_id,
                                    color_id: stock.color_id,
                                    quantity: stock.quantity,
                                    // Thêm thông tin size và color để dễ hiển thị
                                    size: editingProduct.productSizes.find(s => s.id === stock.size_id)?.size,
                                    color: editingProduct.productColors.find(c => c.id === stock.color_id)?.color
                                })) || []
                            }}
                            onSuccess={() => {
                                setEditingProduct(null);
                                setReloadTrigger(prev => prev + 1);
                            }}
                            onCancel={() => setEditingProduct(null)}
                        />
                    </div>
                </div>
            )}


        </div>
    );
};

export default ProductManagement;
