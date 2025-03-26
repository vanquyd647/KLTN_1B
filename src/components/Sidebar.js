import React from 'react'
import Link from 'next/link';

export default function Sidebar({ isMobile }) {
    const categories = [
        {
            id: 8,
            name: 'Thời Trang Nam',
            subCategories: [
                
            ],
        },
        {
            id: 9,
            name: 'Thời Trang Nữ',
            subCategories: [
                
            ],
        },
        {
            id: 1,
            name: 'Áo',
            subCategories: [
                { id: 2, name: 'Áo Thun' },
                { id: 13, name: 'Áo Sơ Mi' },
                { id: 10, name: 'Áo Polo' },
                { id: 32, name: 'Áo Nam' },
                { id: 33, name: 'Áo Nữ' },
            ],
        },
        {
            id: 15,
            name: 'Quần',
            subCategories: [
                { id: 18, name: 'Quần Jeans' },
                { id: 20, name: 'Quần Shorts' },
                { id: 28, name: 'Quần Tây' },
                { id: 39, name: 'Quần Nam' },
                { id: 30, name: 'Quần Nữ' },
            ],
        },
        {
            id: 2,
            name: 'Áo Thun',
            subCategories: [
                { id: 4, name: 'Áo Thun Nam' },
                { id: 6, name: 'Áo Thun Nữ' },
            ],
        },
        {
            id: 10,
            name: 'Áo Polo',
            subCategories: [
                { id: 11, name: 'Áo Polo Nam' },
                { id: 12, name: 'Áo Polo Nữ' },
            ],
        },
        {
            id: 24,
            name: 'Áo Khoác',
            subCategories: [
                { id: 34, name: 'Áo Khoác Nam' },
                { id: 25, name: 'Áo Khoác Nữ' },
            ],
        },
        {
            id: 13,
            name: 'Áo Sơ Mi',
            subCategories: [
                { id: 14, name: 'Áo Sơ Mi Nam' },
                { id: 26, name: 'Áo Sơ Mi Nữ' },
            ],
        },
        {
            id: 38,
            name: 'Phụ Kiện',
            subCategories: [
                { id: 35, name: 'Mũ' },
                { id: 36, name: 'Thắt Lưng' },
                { id: 37, name: 'Ví' },
            ],
        },
    ];

    return (
        <div className={`
            ${isMobile
                ? 'fixed inset-0 z-50 bg-white overflow-y-auto h-screen pt-16'
                : 'hidden md:block w-64'
            }
        `}>
            <aside className={`${isMobile ? 'py-2' : 'p-6'}`}>
                <h3 className="text-lg font-semibold text-gray-800 mb-4 px-4">Danh mục sản phẩm</h3>
                <ul className="space-y-1">
                    {categories.map((category) => (
                        <li key={category.id} className="group">
                            {/* Danh mục cha */}
                            <a
                                href={`/category/productsByCategory?categoryId=${category.id}&categoryName=${category.name}`}
                                className="flex items-center px-4 py-2.5 text-gray-700 hover:bg-gray-50 
                                        transition-colors duration-200 font-medium group-hover:text-gray-600"
                            >
                                <span>{category.name}</span>
                            </a>
                            {/* Danh mục con */}
                            <ul className="">
                                {category.subCategories.map((subCategory) => (
                                    <li key={subCategory.id}>
                                        <a
                                            href={`/category/productsByCategory?categoryId=${subCategory.id}&categoryName=${subCategory.name}`}
                                            className="block px-8 py-2 text-sm text-gray-600 hover:bg-gray-50 
                                                    hover:text-gray-600 transition-colors duration-200"
                                        >
                                            {subCategory.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>
            </aside>
            <nav className="py-2">
                <Link
                    href="/TrackOrder"
                    className="flex items-center px-4 py-2.5 text-gray-700 hover:bg-gray-50 hover:text-gray-600"

                >
                    <svg className="w-5 h-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                    </svg>
                    Tra cứu đơn hàng
                </Link>
                <Link
                    href="/store-locations"
                    className="flex items-center px-4 py-2.5 text-gray-700 hover:bg-gray-50 hover:text-gray-600"

                >
                    <svg className="w-5 h-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Hệ thống cửa hàng
                </Link>
                <Link
                    href="/user-guide"
                    className="flex items-center px-4 py-2.5 text-gray-700 hover:bg-gray-50 hover:text-gray-600"

                >
                    <svg className="w-5 h-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                    Hướng dẫn sử dụng
                </Link>
                <Link
                    href="/warranty-policy"
                    className="flex items-center px-4 py-2.5 text-gray-700 hover:bg-gray-50 hover:text-gray-600"

                >
                    <svg className="w-5 h-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    Chính sách bảo hành
                </Link>
            </nav>
        </div>
    );
}
