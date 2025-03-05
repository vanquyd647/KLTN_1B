// components/Footer.js
import Link from "next/link";
export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Về chúng tôi */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">FASHION STORE</h3>
                        <p className="text-gray-300 mb-4">
                            Hệ thống thời trang hàng đầu Việt Nam, hướng tới phong cách lịch lãm và trẻ trung.
                        </p>
                        <div className="space-y-2">
                            <p className="flex items-center">
                                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                </svg>
                                Văn phòng: Tp. HCM
                            </p>
                            <p className="flex items-center">
                                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                0999 999 999
                            </p>
                            <p className="flex items-center">
                                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                cskh@fashionstore.vn
                            </p>
                        </div>
                        <div className="flex space-x-4 mt-4">
                            <a href="#" className="hover:text-blue-400">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                </svg>
                            </a>
                            <a href="#" className="hover:text-blue-400">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Chính sách */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Chính sách</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-blue-400">Tìm kiếm</a></li>
                            <li>
                                <Link href="/about" className="hover:text-blue-400">
                                    Giới thiệu
                                </Link>
                            </li>
                            <li><a href="#" className="hover:text-blue-400">Cơ hội việc làm</a></li>
                        </ul>
                    </div>

                    {/* Hỗ trợ khách hàng */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Hỗ trợ khách hàng</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-blue-400">Hướng dẫn mua hàng</a></li>
                            <li><a href="#" className="hover:text-blue-400">Hướng dẫn sử dụng</a></li>
                            <li><a href="#" className="hover:text-blue-400">Chi tiết kích cỡ</a></li>
                            <li><a href="#" className="hover:text-blue-400">Chính sách đổi trả & bảo hành</a></li>
                            <li><a href="#" className="hover:text-blue-400">Quy trình giao nhận và thanh toán</a></li>
                            <li>
                                <Link href="/TrackOrder" className="hover:text-blue-400">Tra cứu đơn hàng</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Phương thức thanh toán */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Phương thức thanh toán</h3>
                        <div className="mb-4">
                            <div className="grid grid-cols-2 gap-4">
                                {/* VietQR */}
                                <div className="bg-white p-2 rounded">
                                    <img
                                        src="https://firebasestorage.googleapis.com/v0/b/red89-f8933.appspot.com/o/KLTN%2Fdownload%20(1).png?alt=media&token=511aa9a9-ee31-4052-b34c-33678688b64a"
                                        alt="VietQR"
                                        className="h-12 object-contain mx-auto"
                                    />
                                </div>

                                {/* COD */}
                                <div className="bg-white p-2 rounded">
                                    <img
                                        src="https://firebasestorage.googleapis.com/v0/b/red89-f8933.appspot.com/o/KLTN%2Fdownload.png?alt=media&token=2864ee90-34ec-45a7-a3a7-90cb82e7639e"
                                        alt="COD"
                                        className="h-12 object-contain mx-auto"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-700 mt-8 pt-8 text-center">
                    <p className="text-sm text-gray-400">
                        &copy; 2025 Fashion Store. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
