import Layout from '../components/Layout';
import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function VouchersPage() {
    const [copiedCode, setCopiedCode] = useState(null);

    const vouchersData = {
        "table": "coupons",
        "rows": [
            {
                "id": 1,
                "code": "SALE50",
                "description": "giảm 50,000 đơn từ 250,000",
                "discount_amount": 50000,
                "min_order_amount": 250000,
                "expiry_date": "2026-01-01 07:00:00",
                "total_quantity": 0,
                "used_quantity": 0,
                "is_active": 1,
                "created_at": "2025-03-12 20:06:02",
                "updated_at": "2025-03-13 16:35:04"
            },
            {
                "id": 2,
                "code": "SALE20", 
                "description": "giảm 20000 đơn từ 100,000",
                "discount_amount": 20000,
                "min_order_amount": 100000,
                "expiry_date": "2026-01-01 07:00:00",
                "total_quantity": 0,
                "used_quantity": 0,
                "is_active": 1,
                "created_at": "2025-03-13 16:35:34",
                "updated_at": "2025-03-13 16:35:34"
            },
            {
                "id": 3,
                "code": "SALE5",
                "description": "giảm 5000 đơn từ 50,000",
                "discount_amount": 5000,
                "min_order_amount": 50000,
                "expiry_date": "2025-12-31 07:00:00",
                "total_quantity": 0,
                "used_quantity": 0,
                "is_active": 1,
                "created_at": "2025-03-13 16:36:27",
                "updated_at": "2025-03-13 16:36:27"
            }
        ]
    };

    // Hàm format ngày giờ
    const formatDateTime = (dateString) => {
        return new Date(dateString).toLocaleString('vi-VN', {
            year: 'numeric',
            month: '2-digit', 
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    // Copy mã giảm giá
    const copyVoucherCode = (code) => {
        navigator.clipboard.writeText(code);
        setCopiedCode(code);
        
        toast.success(`Đã sao chép mã: ${code}`, {
            position: "top-center",
            autoClose: 2000
        });
        
        setTimeout(() => setCopiedCode(null), 2000);
    };

    // Tách giá trị đơn tối thiểu từ mô tả
    const extractMinOrderValue = (description) => {
        const match = description.match(/từ\s+([\d,.]+)/i);
        return match ? match[1] : null;
    };

    return (
        <Layout>
            <ToastContainer />
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-2xl font-bold mb-6 text-center">Mã giảm giá của bạn</h1>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {vouchersData.rows.map((voucher) => (
                        <div 
                            key={voucher.id}
                            className="border border-gray-200 rounded-lg overflow-hidden"
                        >
                            {/* Phần mã voucher */}
                            <div className="relative">
                                <div className="bg-[#1a56db] text-white p-4 text-center">
                                    <div className="absolute top-2 left-2 bg-white text-[#1a56db] text-xs font-medium px-2 py-1 rounded-md">
                                        Mã: {voucher.code}
                                    </div>
                                    
                                    <div className="my-3 pt-2">
                                        <div className="text-3xl font-bold">
                                            {voucher.discount_amount.toLocaleString()}đ
                                        </div>
                                        <div className="text-sm mt-1">
                                            Đơn tối thiểu {extractMinOrderValue(voucher.description)}đ
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Phần thông tin chi tiết */}
                            <div className="p-4 bg-white">
                                <h3 className="font-medium mb-2">Chi tiết ưu đãi:</h3>
                                <p className="text-gray-600 text-sm">{voucher.description}</p>
                                
                                <div className="flex justify-between items-center mt-4 text-sm text-gray-500">
                                    <span>Hạn sử dụng:</span>
                                    <span>{formatDateTime(voucher.expiry_date)}</span>
                                </div>
                            </div>
                            
                            {/* Button sao chép mã */}
                            <div className="p-4 bg-gray-50">
                                <button 
                                    className={`w-full py-2 rounded-md text-center font-medium transition-colors ${
                                        copiedCode === voucher.code
                                        ? 'bg-green-500 text-white'
                                        : 'bg-[#1a56db] text-white hover:bg-[#164bbd]'
                                    }`}
                                    onClick={() => copyVoucherCode(voucher.code)}
                                >
                                    {copiedCode === voucher.code ? 'Đã sao chép ✓' : 'Sao chép mã'}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                
                {vouchersData.rows.length === 0 && (
                    <div className="text-center py-12">
                        <div className="text-gray-300 text-5xl mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
                            </svg>
                        </div>
                        <p className="text-gray-500 text-lg">Bạn chưa có mã giảm giá nào</p>
                    </div>
                )}
            </div>
        </Layout>
    );
}
