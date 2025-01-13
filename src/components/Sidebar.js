export default function Sidebar() {
    const categories = ['Áo Thun', 'Quần Jeans', 'Váy', 'Áo Khoác', 'Phụ Kiện'];

    return (
        <aside className="p-6">
            <h3 className="text-lg font-bold mb-4">Danh mục</h3>
            <ul className="space-y-4">
                {categories.map((category, index) => (
                    <li key={index}>
                        <a href={`/products?category=${category}`} className="hover:underline block">
                            {category}
                        </a>
                    </li>
                ))}
            </ul>
        </aside>
    );
}
