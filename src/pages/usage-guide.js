import Layout from "@/components/Layout";
export default function UsageGuide() {
    return (
        <Layout>
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold mb-6">Hướng dẫn sử dụng và bảo quản</h1>
                <div className="prose max-w-none">
                    <h2 className="text-xl font-semibold mt-6 mb-4">Cách bảo quản quần áo</h2>
                    <ul className="space-y-4">
                        <li>Giặt riêng sản phẩm tối màu và sáng màu</li>
                        <li>Không giặt sản phẩm với nước nóng trên 30 độ C</li>
                        <li>Không sử dụng chất tẩy rửa mạnh</li>
                        <li>Phơi sản phẩm trong bóng râm</li>
                        <li>Ủi sản phẩm ở nhiệt độ thích hợp</li>
                    </ul>

                    <h2 className="text-xl font-semibold mt-8 mb-4">Thông tin liên hệ hỗ trợ</h2>
                    <div className="bg-gray-100 p-4 rounded-lg">
                        <p className="font-medium">FASHION STORE</p>
                        <p>Văn phòng: Tp. HCM</p>
                        <p>Hotline: 0999 999 999</p>
                        <p>Email: cskh@fashionstore.vn</p>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
