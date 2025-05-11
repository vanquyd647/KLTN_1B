import Layout from "@/components/Layout";
export default function PrivacyPolicy() {
    return (
        <Layout>
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold mb-6">Chính Sách Bảo Mật Thông Tin</h1>

                {/* Giới thiệu */}
                <div className="prose max-w-none">
                    <div className="mb-8">
                        <p className="text-gray-600">
                            FASHION STORE cam kết bảo mật thông tin cá nhân của khách hàng và đảm bảo thông tin sẽ được sử dụng đúng mục đích, phù hợp với quy định của pháp luật.
                        </p>
                    </div>

                    {/* Thông tin thu thập */}
                    <div className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">1. Thông Tin Chúng Tôi Thu Thập</h2>
                        <div className="bg-gray-50 p-6 rounded-lg">
                            <ul className="space-y-3">
                                <li>• Họ tên</li>
                                <li>• Địa chỉ email</li>
                                <li>• Số điện thoại</li>
                                <li>• Địa chỉ giao hàng</li>
                                <li>• Thông tin đơn hàng</li>
                                <li>• Lịch sử mua hàng</li>
                                <li>• Thông tin thanh toán (được mã hóa)</li>
                            </ul>
                        </div>
                    </div>

                    {/* Mục đích sử dụng */}
                    <div className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">2. Mục Đích Sử Dụng Thông Tin</h2>
                        <div className="space-y-4">
                            <div className="bg-white p-4 border rounded-lg">
                                <h3 className="font-medium mb-2">Xử lý đơn hàng</h3>
                                <p className="text-gray-600">
                                    Thông tin được sử dụng để xử lý, vận chuyển và theo dõi đơn hàng của bạn
                                </p>
                            </div>
                            <div className="bg-white p-4 border rounded-lg">
                                <h3 className="font-medium mb-2">Chăm sóc khách hàng</h3>
                                <p className="text-gray-600">
                                    Hỗ trợ và giải đáp thắc mắc của khách hàng về sản phẩm và dịch vụ
                                </p>
                            </div>
                            <div className="bg-white p-4 border rounded-lg">
                                <h3 className="font-medium mb-2">Cải thiện dịch vụ</h3>
                                <p className="text-gray-600">
                                    Phân tích và cải thiện chất lượng sản phẩm, dịch vụ của chúng tôi
                                </p>
                            </div>
                            <div className="bg-white p-4 border rounded-lg">
                                <h3 className="font-medium mb-2">Marketing</h3>
                                <p className="text-gray-600">
                                    Gửi thông tin về chương trình khuyến mãi, sản phẩm mới (chỉ khi được sự đồng ý)
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Bảo mật thông tin */}
                    <div className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">3. Cam Kết Bảo Mật</h2>
                        <div className="bg-blue-50 p-6 rounded-lg">
                            <ul className="space-y-3 text-blue-800">
                                <li>• Mã hóa thông tin thanh toán theo tiêu chuẩn SSL/TLS</li>
                                <li>• Không chia sẻ thông tin với bên thứ ba khi chưa được sự đồng ý</li>
                                <li>• Áp dụng các biện pháp bảo mật tiên tiến để bảo vệ dữ liệu</li>
                                <li>• Giới hạn quyền truy cập thông tin khách hàng</li>
                                <li>• Thường xuyên cập nhật và nâng cấp hệ thống bảo mật</li>
                            </ul>
                        </div>
                    </div>

                    {/* Quyền của người dùng */}
                    <div className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">4. Quyền Của Khách Hàng</h2>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="bg-white p-4 border rounded-lg">
                                <h3 className="font-medium mb-2">Truy cập thông tin</h3>
                                <p className="text-gray-600">
                                    Quyền xem và kiểm tra thông tin cá nhân của bạn
                                </p>
                            </div>
                            <div className="bg-white p-4 border rounded-lg">
                                <h3 className="font-medium mb-2">Chỉnh sửa thông tin</h3>
                                <p className="text-gray-600">
                                    Quyền yêu cầu cập nhật hoặc sửa đổi thông tin
                                </p>
                            </div>
                            <div className="bg-white p-4 border rounded-lg">
                                <h3 className="font-medium mb-2">Xóa thông tin</h3>
                                <p className="text-gray-600">
                                    Quyền yêu cầu xóa thông tin cá nhân
                                </p>
                            </div>
                            <div className="bg-white p-4 border rounded-lg">
                                <h3 className="font-medium mb-2">Từ chối marketing</h3>
                                <p className="text-gray-600">
                                    Quyền từ chối nhận thông tin quảng cáo
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Cookie */}
                    <div className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">5. Chính Sách Cookie</h2>
                        <div className="bg-gray-50 p-6 rounded-lg">
                            <p className="mb-4">
                                Website của chúng tôi sử dụng cookie để cải thiện trải nghiệm người dùng. Cookie là các tệp nhỏ được lưu trữ trên thiết bị của bạn để:
                            </p>
                            <ul className="space-y-2">
                                <li>• Ghi nhớ thông tin đăng nhập</li>
                                <li>• Phân tích hành vi người dùng</li>
                                <li>• Cá nhân hóa trải nghiệm mua sắm</li>
                                <li>• Cải thiện hiệu suất website</li>
                            </ul>
                        </div>
                    </div>

                    {/* Liên hệ */}
                    <div className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">6. Thông Tin Liên Hệ</h2>
                        <div className="bg-gray-100 p-6 rounded-lg">
                            <p className="mb-4">
                                Nếu bạn có bất kỳ thắc mắc nào về chính sách bảo mật của chúng tôi, vui lòng liên hệ:
                            </p>
                            <div className="space-y-2">
                                <p className="font-medium">FASHION STORE</p>
                                <p>Văn phòng: Tp. HCM</p>
                                <p>Hotline: 0999 999 999</p>
                                <p>Email: cskh@fashionstore.vn</p>
                            </div>
                        </div>
                    </div>

                    {/* Cập nhật chính sách */}
                    <div className="bg-yellow-50 p-6 rounded-lg">
                        <h2 className="text-xl font-semibold mb-4">Cập Nhật Chính Sách</h2>
                        <p className="text-yellow-800">
                            Chính sách bảo mật này có thể được cập nhật định kỳ. Chúng tôi sẽ thông báo cho bạn về những thay đổi quan trọng thông qua email hoặc thông báo trên website.
                        </p>
                        <p className="text-yellow-800 mt-2">
                            Cập nhật lần cuối: 11/05/2025
                        </p>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
