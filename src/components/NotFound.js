// components/NotFound.jsx
import React from 'react';
import Link from 'next/link'; // Changed to Next.js Link
import { useRouter } from 'next/router'; // Added for navigation

const NotFound = ({ 
    message = "Oops! Trang không tồn tại", 
    description = "Trang bạn đang tìm kiếm có thể đã bị xóa, đổi tên hoặc tạm thời không truy cập được."
}) => {
    const router = useRouter();

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="text-center px-4">
                <div className="mb-8">
                    <h1 className="text-9xl font-bold text-gray-800">404</h1>
                </div>
                
                <div className="mb-8">
                    <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-3">
                        {message}
                    </h2>
                    <p className="text-gray-600">
                        {description}
                    </p>
                </div>

                <div className="space-x-4">
                    <Link
                        href="/"
                        className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200"
                    >
                        Về Trang Chủ
                    </Link>
                    <button
                        onClick={() => router.back()}
                        className="inline-block px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition duration-200"
                    >
                        Quay Lại
                    </button>
                </div>

                <div className="mt-8 text-sm text-gray-500">
                    <p>
                        Cần hỗ trợ? Liên hệ{' '}
                        <a href="mailto:support@example.com" className="text-blue-600 hover:underline">
                            support@example.com
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default NotFound;
