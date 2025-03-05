import Layout from '../components/Layout';

export default function About() {
    return (
        <Layout>
            <div className="max-w-4xl mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold text-gray-800 mb-8">Giới thiệu Fashion Store</h1>

                {/* Phần tầm nhìn */}
                <section className="mb-12">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">Tầm nhìn</h2>
                    <p className="text-gray-600 leading-relaxed">
                        Fashion Store ra đời với sứ mệnh mang đến những sản phẩm thời trang chất lượng cao,
                        thiết kế hiện đại và phù hợp với xu hướng, giúp khách hàng thể hiện phong cách
                        cá nhân một cách tự tin và độc đáo.
                    </p>
                </section>

                {/* Phần giá trị cốt lõi */}
                <section className="mb-12">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">Giá trị cốt lõi</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="p-6 bg-gray-50 rounded-lg">
                            <h3 className="font-semibold text-gray-800 mb-2">Chất lượng</h3>
                            <p className="text-gray-600">
                                Cam kết mang đến những sản phẩm chất lượng cao với nguồn gốc rõ ràng
                            </p>
                        </div>
                        <div className="p-6 bg-gray-50 rounded-lg">
                            <h3 className="font-semibold text-gray-800 mb-2">Sáng tạo</h3>
                            <p className="text-gray-600">
                                Không ngừng đổi mới và cập nhật xu hướng thời trang mới nhất
                            </p>
                        </div>
                        <div className="p-6 bg-gray-50 rounded-lg">
                            <h3 className="font-semibold text-gray-800 mb-2">Tận tâm</h3>
                            <p className="text-gray-600">
                                Luôn đặt trải nghiệm và sự hài lòng của khách hàng lên hàng đầu
                            </p>
                        </div>
                    </div>
                </section>

                {/* Phần câu chuyện */}
                <section className="mb-12">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">Câu chuyện của chúng tôi</h2>
                    <div className="prose max-w-none text-gray-600">
                        <p className="mb-4">
                            Fashion Store được thành lập vào năm 2020, bắt đầu từ một cửa hàng nhỏ tại
                            Thành phố Hồ Chí Minh. Với niềm đam mê thời trang và khát khao mang đến những
                            sản phẩm chất lượng cho khách hàng Việt Nam, chúng tôi đã không ngừng phát triển
                            và mở rộng hệ thống.
                        </p>
                        <p className="mb-4">
                            Hiện nay, Fashion Store đã có mặt tại nhiều tỉnh thành trên cả nước với hơn
                            20 cửa hàng. Chúng tôi tự hào là điểm đến tin cậy của hàng nghìn khách hàng
                            mỗi ngày.
                        </p>
                    </div>
                </section>

                {/* Phần cam kết */}
                <section className="mb-12">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">Cam kết của chúng tôi</h2>
                    <ul className="list-disc list-inside space-y-3 text-gray-600">
                        <li>100% sản phẩm chính hãng</li>
                        <li>Chính sách đổi trả linh hoạt trong 30 ngày</li>
                        <li>Tư vấn nhiệt tình, chuyên nghiệp</li>
                        <li>Giao hàng nhanh chóng toàn quốc</li>
                        <li>Bảo hành sản phẩm theo quy định của nhà sản xuất</li>
                    </ul>
                </section>

                {/* Phần liên hệ */}
                <section>
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">Liên hệ</h2>
                    <div className="bg-gray-50 p-6 rounded-lg">
                        <div className="space-y-3 text-gray-600">
                            <p className="flex items-center">
                                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                123 Nguyễn Văn A, Quận 1, TP.HCM
                            </p>
                            <p className="flex items-center">
                                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                support@fashionstore.com
                            </p>
                            <p className="flex items-center">
                                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                0999 999 999
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </Layout>
    );
}
