import { useRouter } from 'next/router';

export default function Sidebar() {
    // Danh sách danh mục với id và name
    const categories = [
        { id: 1, name: 'Áo Thun' },
        { id: 2, name: 'Quần Jeans' },
        { id: 3, name: 'Váy' },
        { id: 4, name: 'Áo Khoác' },
        { id: 5, name: 'Phụ Kiện' },
    ];

    const router = useRouter();
    const { categoryId } = router.query;

    return (
        <div className="flex flex-wrap justify-center gap-6 p-6 bg-white rounded-lg shadow-lg">
            {categories.map((category) => (
                <button
                    key={category.id}
                    onClick={() => router.push(`/category/productsByCategory?categoryId=${category.id}&categoryName=${category.name}`)}
                    className={`px-6 py-3 text-lg font-semibold rounded-lg border-2 transition-all ${
                        parseInt(categoryId, 10) === category.id
                            ? 'bg-blue-500 text-white border-blue-500 shadow-md'
                            : 'bg-gray-100 text-gray-700 border-gray-300 hover:bg-blue-100 hover:border-blue-400'
                    }`}
                >
                    {category.name}
                </button>
            ))}
        </div>
    );
}
