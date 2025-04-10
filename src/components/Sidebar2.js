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
                { id: 2, name: 'Áo Thun' },
                { id: 13, name: 'Áo Sơ Mi' },
                { id: 10, name: 'Áo Polo' },
                { id: 33, name: 'Áo Nam' },
                { id: 32, name: 'Áo Nữ' },
            ],
        },
        {
            id: 15,
            name: 'Quần',
            icon: <GiTrousers className="w-full h-full" />,
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
            icon: <GiTShirt className="w-full h-full" />,
            subCategories: [
                { id: 4, name: 'Áo Thun Nam' },
                { id: 6, name: 'Áo Thun Nữ' },
            ],
        },
        {
            id: 24,
            name: 'Áo Khoác',
            icon: <GiMonclerJacket className="w-full h-full" />,
            subCategories: [
                { id: 34, name: 'Áo Khoác Nam' },
                { id: 25, name: 'Áo Khoác Nữ' },
            ],
        },
        {
            id: 10,
            name: 'Áo Polo',
            icon: <GiPoloShirt className="w-full h-full" />,
            subCategories: [
                { id: 11, name: 'Áo Polo Nam' },
                { id: 12, name: 'Áo Polo Nữ' },
            ],
        },
        {
            id: 13,
            name: 'Áo Sơ Mi',
            icon: <IoShirtOutline className="w-full h-full" />,
            subCategories: [
                { id: 14, name: 'Áo Sơ Mi Nam' },
                { id: 26, name: 'Áo Sơ Mi Nữ' },
            ],
        },
        {
            id: 38,
            name: 'Phụ Kiện',
            icon: <FaRedhat className="w-full h-full" />,
            subCategories: [
                { id: 35, name: 'Mũ' },
                { id: 36, name: 'Thắt Lưng' },
                { id: 37, name: 'Ví' },
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
        <div className="w-full p-8 bg-white">
            <h2 className="text-3xl font-bold text-center mb-8 uppercase relative w-fit mx-auto">
                Danh mục sản phẩm
            </h2>
            {/* Danh mục cha với icon */}
            <div className="flex justify-center">
                <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-x-12 gap-y-8 max-w-7xl w-full">
                    {categories.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => handleCategoryClick(category.id)}
                            className="flex flex-col items-center gap-4 transition-all"
                        >
                            <div className={`p-6 rounded-full border-2 ${currentCategoryId === category.id ||
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
                                    className={`block px-6 py-4 text-left text-base text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-500 transition ${selectedCategoryId === subCategory.id
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
