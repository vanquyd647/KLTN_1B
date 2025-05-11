import Layout from "@/components/Layout";
export default function ShippingPayment() {
    return (
        <Layout>
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold mb-6">Quy trình giao nhận và thanh toán</h1>
                <div className="prose max-w-none">
                    <h2 className="text-xl font-semibold mt-6 mb-4">Phương thức thanh toán</h2>
                    <ul className="space-y-3">
                        <li>Thanh toán khi nhận hàng (COD)</li>
                        <li>Chuyển khoản ngân hàng</li>
                    </ul>

                    <h2 className="text-xl font-semibold mt-8 mb-4">Thời gian giao hàng</h2>
                    <ul className="space-y-3">
                        <li>Nội thành TP.HCM: 1-2 ngày</li>
                        <li>Các tỉnh miền Nam: 2-3 ngày</li>
                        <li>Các tỉnh miền Trung và miền Bắc: 3-5 ngày</li>
                    </ul>

                    <h2 className="text-xl font-semibold mt-8 mb-4">Phí vận chuyển</h2>
                    <ul className="space-y-3">
                        <li>Miễn phí cho đơn hàng từ 200.000đ</li>
                        <li>Nội thành TP.HCM: 2.000đ</li>
                        <li>Các tỉnh khác: 2.000đ - 2.000đ</li>
                    </ul>

                    <div className="mt-8">
                        <h2 className="text-xl font-semibold mb-4">Thông tin liên hệ</h2>
                        <div className="bg-gray-100 p-4 rounded-lg">
                            <p className="font-medium">FASHION STORE</p>
                            <p>Văn phòng: Tp. HCM</p>
                            <p>Hotline: 0999 999 999</p>
                            <p>Email: cskh@fashionstore.vn</p>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
