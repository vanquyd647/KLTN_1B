import { useSelector, useDispatch } from 'react-redux';
import { setCurrentCategoryId, setSelectedCategoryId } from '../store/slices/categorySlice';
import { useRouter } from 'next/router';
import { GiTShirt, GiMonclerJacket, GiPoloShirt, GiTrousers } from 'react-icons/gi';
import { FaTshirt, FaRedhat } from 'react-icons/fa';
import { IoShirtOutline } from 'react-icons/io5';

export default function Sidebar() {
    const categories = [
        {
            id: 1,
            name: 'Áo',
            icon: <FaTshirt className="w-full h-full" />,
            subCategories: [
                { id: 101, name: 'Áo Thun' },
                { id: 102, name: 'Áo Sơ Mi' },
                { id: 103, name: 'Áo Polo' },
            ],
        },
        {
            id: 2,
            name: 'Quần',
            icon: <GiTrousers className="w-full h-full" />,
            subCategories: [
                { id: 201, name: 'Quần Jeans' },
                { id: 202, name: 'Quần Shorts' },
                { id: 203, name: 'Quần Tây' },
            ],
        },
        {
            id: 3,
            name: 'Áo Thun',
            icon: <GiTShirt className="w-full h-full" />,
            subCategories: [
                { id: 301, name: 'Áo Thun Nam' },
                { id: 302, name: 'Áo Thun Nữ' },
            ],
        },
        {
            id: 4,
            name: 'Áo Khoác',
            icon: <GiMonclerJacket className="w-full h-full" />,
            subCategories: [
                { id: 401, name: 'Áo Khoác Nam' },
                { id: 402, name: 'Áo Khoác Nữ' },
            ],
        },
        {
            id: 5,
            name: 'Phụ Kiện',
            icon: <FaRedhat className="w-full h-full" />,
            subCategories: [
                { id: 501, name: 'Mũ' },
                { id: 502, name: 'Thắt Lưng' },
                { id: 503, name: 'Ví' },
            ],
        },
        {
            id: 6,
            name: 'Áo Polo',
            icon: <GiPoloShirt className="w-full h-full" />,
            subCategories: [
                { id: 601, name: 'Polo Nam' },
                { id: 602, name: 'Polo Nữ' },
            ],
        },
        {
            id: 7,
            name: 'Áo Sơ Mi',
            icon: <IoShirtOutline className="w-full h-full" />,
            subCategories: [
                { id: 701, name: 'Sơ Mi Nam' },
                { id: 702, name: 'Sơ Mi Nữ' },
            ],
        },
    ];

    const dispatch = useDispatch();
    const router = useRouter();

    const { currentCategoryId, selectedCategoryId } = useSelector((state) => state.categories);

    const handleCategoryClick = (categoryId) => {
        dispatch(setCurrentCategoryId(currentCategoryId === categoryId ? null : categoryId));
    };

    const navigateToCategory = (categoryId, categoryName) => {
        router.push(`/category/productsByCategory?categoryId=${categoryId}&categoryName=${categoryName}`);
        dispatch(setSelectedCategoryId(categoryId));
        dispatch(setCurrentCategoryId(null));
    };

    return (
        <div className="w-full p-8 bg-white border border-gray-300">
            {/* Danh mục cha với icon */}
            <div className="flex justify-center">
                <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-x-12 gap-y-8 max-w-7xl w-full">
                    {categories.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => handleCategoryClick(category.id)}
                            className="flex flex-col items-center gap-4 transition-all"
                        >
                            <div className={`p-6 rounded-full border-2 ${
                                currentCategoryId === category.id || 
                                selectedCategoryId === category.id ||
                                category.subCategories.some((sub) => sub.id === selectedCategoryId)
                                ? 'bg-gray-100 border-gray-400'
                                : 'border-gray-300 hover:border-gray-400'
                            }`}>
                                <div className="w-12 h-12">
                                    {category.icon}
                                </div>
                            </div>
                            <span className="text-base font-medium text-gray-600 text-center">
                                {category.name}
                            </span>
                        </button>
                    ))}
                </div>
            </div>

            {/* Danh mục con */}
            {currentCategoryId && (
                <div className="mt-12">
                    <button
                        onClick={() =>
                            navigateToCategory(
                                categories.find((cat) => cat.id === currentCategoryId).id,
                                categories.find((cat) => cat.id === currentCategoryId).name
                            )
                        }
                        className="block w-full px-6 py-3 mb-6 text-left text-lg text-gray-600 font-semibold hover:underline"
                    >
                        Xem tất cả{' '}
                        {categories.find((cat) => cat.id === currentCategoryId)?.name}
                    </button>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {categories
                            .find((cat) => cat.id === currentCategoryId)
                            ?.subCategories.map((subCategory) => (
                                <button
                                    key={subCategory.id}
                                    onClick={() => navigateToCategory(subCategory.id, subCategory.name)}
                                    className={`block px-6 py-4 text-left text-base text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-500 transition ${
                                        selectedCategoryId === subCategory.id
                                        ? 'bg-gray-100 text-gray-500'
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
