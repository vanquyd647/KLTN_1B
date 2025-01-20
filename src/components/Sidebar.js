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

    return (
        <aside className="p-6">
            <h3 className="text-lg font-bold mb-4">Danh mục</h3>
            <ul className="space-y-4">
                {categories.map((category) => (
                    <li key={category.id}>
                        {/* Danh mục cha */}
                        <a
                            href={`/category/productsByCategory?categoryId=${category.id}&categoryName=${category.name}`}
                            className="hover:underline block font-bold"
                        >
                            {category.name}
                        </a>
                        {/* Danh mục con */}
                        <ul className="pl-4 mt-2 space-y-2">
                            {category.subCategories.map((subCategory) => (
                                <li key={subCategory.id}>
                                    <a
                                        href={`/category/productsByCategory?categoryId=${subCategory.id}&categoryName=${subCategory.name}`}
                                        className="hover:underline text-gray-600 block"
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
