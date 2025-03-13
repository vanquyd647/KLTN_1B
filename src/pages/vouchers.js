import Layout from '../components/Layout';

export default function VouchersPage() {
    const vouchersData = {
        "table": "coupons",
        "rows": [
            {
                "id": 1,
                "code": "SALE50",
                "description": "giảm 50,000 đơn từ 250,000",
                "discount_amount": 50000.00,
                "expiry_date": "2026-01-01 07:00:00",
                "total_quantity": 0,
                "used_quantity": 3,
                "is_active": 1,
                "created_at": "2025-03-12 20:06:02",
                "updated_at": "2025-03-13 16:35:04"
            },
            {
                "id": 2,
                "code": "SALE20", 
                "description": "giảm 20000 đơn từ 100,000",
                "discount_amount": 20000.00,
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
                "discount_amount": 5000.00,
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
        alert('Đã sao chép mã: ' + code);
    };

    return (
        <Layout>
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-2xl font-bold mb-6">Mã giảm giá của bạn</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {vouchersData.rows.map((voucher) => (
                        <div 
                            key={voucher.id}
                            className="bg-white border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                        >
                            {/* Header */}
                            <div className="bg-black-50 p-4 border-b">
                                <div className="flex justify-between items-center">
                                    <h3 className="font-bold text-lg text-black-700">{voucher.code}</h3>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-4">
                                <div className="mb-4">
                                    <p className="text-gray-600">{voucher.description}</p>
                                    <div className="mt-2 text-2xl font-bold text-red-600">
                                        -{voucher.discount_amount.toLocaleString()}đ
                                    </div>
                                </div>

                                {/* Details */}
                                <div className="space-y-2 text-sm text-gray-500">
                                    <div className="flex justify-between text-red-500 font-medium">
                                        <span>Hết hạn:</span>
                                        <span>{formatDateTime(voucher.expiry_date)}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Footer */}
                            <div className="bg-gray-50 p-4 border-t">
                                <button 
                                    className="w-full bg-gray-600 text-white py-2 px-4 rounded-md hover:bg-gray-700 transition-colors"
                                    onClick={() => copyVoucherCode(voucher.code)}
                                >
                                    Sao chép mã
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                
                {vouchersData.rows.length === 0 && (
                    <div className="text-center py-12">
                        <div className="text-gray-400 text-5xl mb-4">
                            <i className="fas fa-ticket-alt"></i>
                        </div>
                        <p className="text-gray-500 text-lg">
                            Bạn chưa có mã giảm giá nào
                        </p>
                    </div>
                )}
            </div>
        </Layout>
    );
}
