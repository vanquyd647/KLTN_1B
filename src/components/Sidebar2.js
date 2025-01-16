import { useRouter } from 'next/router';

export default function Sidebar() {
    const categories = ['Áo Thun', 'Quần Jeans', 'Váy', 'Áo Khoác', 'Phụ Kiện'];
    const router = useRouter();
    const { category: activeCategory } = router.query;

    return (
        <div className="flex flex-wrap justify-center gap-6 p-6 bg-white rounded-lg shadow-lg">
            {categories.map((category, index) => (
                <button
                    key={index}
                    onClick={() => router.push(`/products?category=${category}`)}
                    className={`px-6 py-3 text-lg font-semibold rounded-lg border-2 transition-all ${
                        category === activeCategory
                            ? 'bg-blue-500 text-white border-blue-500 shadow-md'
                            : 'bg-gray-100 text-gray-700 border-gray-300 hover:bg-blue-100 hover:border-blue-400'
                    }`}
                >
                    {category}
                </button>
            ))}
        </div>
    );
}
