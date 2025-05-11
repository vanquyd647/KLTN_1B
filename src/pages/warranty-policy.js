import Layout from "@/components/Layout";
export default function WarrantyPolicy() {
    return (
        <Layout>
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold mb-6">Chính sách đổi trả & bảo hành</h1>
                <div className="prose max-w-none">
                    <h2 className="text-xl font-semibold mt-6 mb-4">Điều kiện đổi trả</h2>
                    <ul className="space-y-3">
                        <li>Sản phẩm còn nguyên tem mác, chưa qua sử dụng</li>
                        <li>Thời gian đổi trả trong vòng 7 ngày kể từ ngày nhận hàng</li>
                        <li>Sản phẩm không bị hư hỏng, bẩn, có mùi lạ</li>
                    </ul>

                    <h2 className="text-xl font-semibold mt-8 mb-4">Quy trình đổi trả</h2>
                    <ol className="list-decimal pl-6 space-y-3">
                        <li>Liên hệ với FASHION STORE qua hotline hoặc email</li>
                        <li>Cung cấp mã đơn hàng và lý do đổi trả</li>
                        <li>Nhận hướng dẫn đóng gói và gửi hàng</li>
                        <li>Hoàn tiền hoặc đổi sản phẩm mới</li>
                    </ol>

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
