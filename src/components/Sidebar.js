export default function Sidebar() {
    const categories = [
        { id: 1, name: 'Áo Thun' },
        { id: 2, name: 'Quần Jeans' },
        { id: 3, name: 'Váy' },
        { id: 4, name: 'Áo Khoác' },
        { id: 5, name: 'Phụ Kiện' },
    ];

    return (
        <aside className="p-6">
            <h3 className="text-lg font-bold mb-4">Danh mục</h3>
            <ul className="space-y-4">
                {categories.map((category) => (
                    <li key={category.id}>
                        <a
                            href={`/category/productsByCategory?categoryId=${category.id}&categoryName=${category.name}`}
                            className="hover:underline block"
                        >
                            {category.name}
                        </a>
                    </li>
                ))}
            </ul>
        </aside>
    );
}
