import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Sidebar() {
    const categories = [
        {
            id: 1,
            name: 'Áo',
            subCategories: [
                { id: 101, name: 'Áo Thun' },
                { id: 102, name: 'Áo Sơ Mi' },
                { id: 103, name: 'Áo Polo' },
            ],
        },
        {
            id: 2,
            name: 'Quần',
            subCategories: [
                { id: 201, name: 'Quần Jeans' },
                { id: 202, name: 'Quần Shorts' },
                { id: 203, name: 'Quần Tây' },
            ],
        },
        {
            id: 3,
            name: 'Giày Dép',
            subCategories: [
                { id: 301, name: 'Giày Thể Thao' },
                { id: 302, name: 'Giày Lười' },
                { id: 303, name: 'Dép Sandals' },
            ],
        },
        {
            id: 4,
            name: 'Phụ Kiện',
            subCategories: [
                { id: 401, name: 'Mũ' },
                { id: 402, name: 'Thắt Lưng' },
                { id: 403, name: 'Balo' },
            ],
        },
    ];

    const [currentCategoryId, setCurrentCategoryId] = useState(null); // ID danh mục cha đang mở
    const [selectedCategoryId, setSelectedCategoryId] = useState(null); // ID danh mục cha hoặc con được chọn
    const router = useRouter();

    const handleCategoryClick = (categoryId) => {
        setCurrentCategoryId(currentCategoryId === categoryId ? null : categoryId);
    };

    const navigateToCategory = (categoryId, categoryName) => {
        router.push(`/category/productsByCategory?categoryId=${categoryId}&categoryName=${categoryName}`);
        setSelectedCategoryId(categoryId); // Lưu danh mục cha hoặc con được chọn
        setCurrentCategoryId(null); // Đóng danh mục con
    };

    return (
        <div className="w-full p-4 bg-white border border-gray-300">
            {/* Hiển thị danh mục cha theo chiều ngang */}
            <div className="flex gap-6 overflow-x-auto pb-4">
                {categories.map((category) => (
                    <button
                        key={category.id}
                        onClick={() => handleCategoryClick(category.id)}
                        className={`px-6 py-3 text-lg font-semibold border transition-all ${
                            currentCategoryId === category.id ||
                            selectedCategoryId === category.id ||
                            category.subCategories.some((sub) => sub.id === selectedCategoryId)
                                ? 'bg-blue-500 text-white border-blue-500'
                                : 'text-gray-700 border-gray-300 hover:bg-blue-100 hover:border-blue-400'
                        }`}
                    >
                        {category.name}
                    </button>
                ))}
            </div>

            {/* Hiển thị danh mục con (khi danh mục cha được chọn) */}
            {currentCategoryId && (
                <div className="mt-4">
                    <button
                        onClick={() =>
                            navigateToCategory(
                                categories.find((cat) => cat.id === currentCategoryId).id,
                                categories.find((cat) => cat.id === currentCategoryId).name
                            )
                        }
                        className="block w-full px-4 py-2 mb-2 text-left text-blue-600 font-semibold hover:underline"
                    >
                        Xem tất cả{' '}
                        {categories.find((cat) => cat.id === currentCategoryId)?.name}
                    </button>
                    <div className="grid grid-cols-2 gap-4">
                        {categories
                            .find((cat) => cat.id === currentCategoryId)
                            ?.subCategories.map((subCategory) => (
                                <button
                                    key={subCategory.id}
                                    onClick={() => navigateToCategory(subCategory.id, subCategory.name)}
                                    className={`block px-4 py-2 text-left text-gray-700 bg-white border border-gray-300 rounded hover:bg-blue-100 hover:text-blue-500 transition ${
                                        selectedCategoryId === subCategory.id
                                            ? 'bg-blue-100 text-blue-500'
                                            : ''
                                    }`}
                                >
                                    {subCategory.name}
                                </button>
                            ))}
                    </div>
                </div>
            )}
        </div>
    );
}
