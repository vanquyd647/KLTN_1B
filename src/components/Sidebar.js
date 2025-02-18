export default function Sidebar({ isMobile }) {
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

    return (
        <aside className={`${isMobile ? 'py-2' : 'p-6'}`}>
            <h3 className="text-lg font-semibold text-gray-800 mb-4 px-4">Danh mục sản phẩm</h3>
            <ul className="space-y-1">
                {categories.map((category) => (
                    <li key={category.id} className="group">
                        {/* Danh mục cha */}
                        <a
                            href={`/category/productsByCategory?categoryId=${category.id}&categoryName=${category.name}`}
                            className="flex items-center px-4 py-2.5 text-gray-700 hover:bg-blue-50 
                                     transition-colors duration-200 font-medium group-hover:text-blue-600"
                        >
                            <span>{category.name}</span>
                            <svg 
                                className="ml-auto w-5 h-5 text-gray-400 group-hover:text-blue-600"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                            </svg>
                        </a>
                        {/* Danh mục con */}
                        <ul className="">
                            {category.subCategories.map((subCategory) => (
                                <li key={subCategory.id}>
                                    <a
                                        href={`/category/productsByCategory?categoryId=${subCategory.id}&categoryName=${subCategory.name}`}
                                        className="block px-8 py-2 text-sm text-gray-600 hover:bg-blue-50 
                                                 hover:text-blue-600 transition-colors duration-200"
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
    );
}
