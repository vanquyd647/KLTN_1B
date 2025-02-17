import React, { memo } from 'react';
import { useState, useEffect, useRef } from 'react';
import { debounce } from 'lodash';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { searchProductsByNameAndColor } from '../store/slices/productSlice';
import Sidebar from './Sidebar';

const Header = memo(function Header({ ...props }) {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const { items } = useSelector((state) => state.cart);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const searchRef = useRef(null);
    const searchInputRef = useRef(null);
    const dispatch = useDispatch();
    const router = useRouter();

    // Tính toán số lượng item trong giỏ hàng
    const totalItems = items?.reduce((sum, item) => {
        if (item && typeof item.quantity === 'number') {
            return sum + item.quantity;
        }
        return sum;
    }, 0) || 0;

    // Xử lý drawer sidebar
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setIsDrawerOpen(false);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Xử lý click outside để đóng search
    useEffect(() => {
        function handleClickOutside(event) {
            if (searchRef.current && !searchRef.current.contains(event.target)) {
                setIsSearchOpen(false);
                setSearchTerm('');
                setSearchResults([]);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // Tách riêng logic search
    const performSearch = async (term) => {
        if (term.trim().length >= 2) {
            try {
                const result = await dispatch(searchProductsByNameAndColor({
                    keyword: term.trim(),
                    page: 1,
                    limit: 10,
                    sort: 'newest'
                }));
                if (result.payload?.data?.products) {
                    setSearchResults(result.payload.data.products);
                }
            } catch (error) {
                console.error('Search error:', error);
                setSearchResults([]);
            }
        } else {
            setSearchResults([]);
        }
    };
    
    // Sử dụng debounce
    const debouncedSearch = useRef(debounce((term) => performSearch(term), 300)).current;
    
    useEffect(() => {
        debouncedSearch(searchTerm);
        return () => debouncedSearch.cancel();
    }, [searchTerm]);

    // Handler cho việc mở search
    const handleSearchClick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsSearchOpen(!isSearchOpen);
        if (!isSearchOpen && searchInputRef.current) {
            setTimeout(() => {
                searchInputRef.current.focus();
            }, 100);
        }
    };

    // Handler cho việc nhập search
    const handleSearchInput = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setSearchTerm(e.target.value);
    };

    // Handler cho phím Enter
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault(); // Ngăn chặn reload trang
            e.stopPropagation();
    
            if (searchTerm.trim().length >= 2) {
                router.push(`/search?keyword=${encodeURIComponent(searchTerm.trim())}`);
                setIsSearchOpen(false);
                setSearchTerm('');
                setSearchResults([]);
            }
        }
    };
    
    // Handler cho việc đóng drawer
    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    const searchSection = (
        <li className="relative" ref={searchRef}>
            <button
                type="button"
                onClick={handleSearchClick}
                className="hover:underline focus:outline-none"
                aria-label="Search"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 21l-4.35-4.35M10 18a8 8 0 100-16 8 8 0 000 16z"
                    />
                </svg>
            </button>

            {isSearchOpen && (
                <div className="absolute right-0 mt-2 w-96 bg-white rounded-lg shadow-xl z-50">
                    <div className="p-4">
                        <div id="header-search-container">
                            <input
                                ref={searchInputRef}
                                type="search"
                                placeholder="Tìm kiếm sản phẩm..."
                                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 text-black"
                                value={searchTerm}
                                onChange={handleSearchInput}
                                onKeyDown={handleKeyDown}
                                autoComplete="off"
                            />
                        </div>


                        <div className="max-h-[400px] overflow-y-auto mt-2">
                            {searchResults.slice(0, 4).map((product) => (
                                <Link
                                    key={product.id}
                                    href={`/productdetail/${product.slug}`}
                                    className="flex items-center space-x-4 p-2 hover:bg-gray-50 rounded-lg"
                                    onClick={() => {
                                        setIsSearchOpen(false);
                                        setSearchTerm('');
                                        setSearchResults([]);
                                    }}
                                >
                                    <img
                                        src={product.productColors[0]?.ProductColor?.image || '/placeholder-image.jpg'}
                                        alt={product.product_name}
                                        className="w-12 h-12 object-cover rounded"
                                    />
                                    <div>
                                        <p className="text-sm font-medium text-black">
                                            {product.product_name}
                                        </p>
                                        <div className="flex items-center gap-2">
                                            {product.discount_price ? (
                                                <>
                                                    <p className="text-sm line-through text-gray-400">
                                                        {product.price.toLocaleString('vi-VN')}đ
                                                    </p>
                                                    <p className="text-sm font-medium text-red-500">
                                                        {product.discount_price.toLocaleString('vi-VN')}đ
                                                    </p>
                                                </>
                                            ) : (
                                                <p className="text-sm text-gray-500">
                                                    {product.price.toLocaleString('vi-VN')}đ
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                </Link>
                            ))}

                            {searchResults.length > 4 && (
                                <Link
                                    href={`/search?keyword=${encodeURIComponent(searchTerm.trim())}`}
                                    className="block w-full text-center py-2 mt-2 text-blue-600 hover:text-blue-700 font-medium border-t"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        e.stopPropagation();
                                        setIsSearchOpen(false);
                                        setSearchTerm('');
                                        setSearchResults([]);
                                        router.push(`/search?keyword=${encodeURIComponent(searchTerm.trim())}`);
                                    }}
                                >
                                    Xem thêm sản phẩm
                                </Link>
                            )}

                            {searchTerm.trim().length >= 2 && searchResults.length === 0 && (
                                <div className="mt-4 text-center text-gray-500">
                                    Không tìm thấy sản phẩm phù hợp
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </li>
    );

    return (
        <>
            <header className="bg-blue-600 text-white p-4 shadow">
                <div className="container mx-auto flex justify-between items-center">
                    {/* Drawer Toggle Button for Sidebar */}
                    <button
                        className="md:hidden block focus:outline-none mr-4"
                        onClick={toggleDrawer}
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16m-7 6h7"
                            />
                        </svg>
                    </button>

                    {/* Logo */}
                    <Link href="/" className="text-2xl font-bold flex-shrink-0">
                        Fashion Store
                    </Link>

                    {/* Navigation Links */}
                    <nav className="hidden md:flex space-x-6 ml-auto">
                        <Link href="/store-locations" className="hover:underline">
                            Hệ thống cửa hàng
                        </Link>
                        <Link href="/user-guide" className="hover:underline">
                            Hướng dẫn sử dụng
                        </Link>
                        <Link href="/warranty-policy" className="hover:underline">
                            Chính sách bảo hành
                        </Link>
                    </nav>

                    {/* Navigation Icons */}
                    <nav className="flex space-x-6 md:ml-auto">
                        <ul className="flex space-x-4 items-center">
                            {/* Search Icon */}
                            {searchSection}

                            {/* User Icon */}
                            <li>
                                <Link href="/account/profile" className="hover:underline">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm-6 7c0-3.31 2.69-6 6-6s6 2.69 6 6H6z"
                                        />
                                    </svg>
                                </Link>
                            </li>

                            {/* Cart Icon with Counter */}
                            <li className="relative">
                                <Link href="/cart" className="hover:underline">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-1.5 6m12.5-6l1.5 6m-10-1h8"
                                        />
                                    </svg>
                                    {totalItems > 0 && (
                                        <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                                            {totalItems}
                                        </span>
                                    )}
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>

            {/* Drawer Sidebar */}
            <div
                className={`fixed inset-0 z-50 bg-gray-800 bg-opacity-50 transition-opacity duration-300 ${isDrawerOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                    }`}
                onClick={toggleDrawer}
            ></div>
            <div
                className={`fixed top-0 left-0 w-64 h-full bg-white shadow-lg z-50 transform transition-transform duration-300 ${isDrawerOpen ? 'translate-x-0' : '-translate-x-full'
                    }`}
            >
                {/* Close Button */}
                <button
                    className="absolute top-4 right-4 text-blue-600 focus:outline-none"
                    onClick={toggleDrawer}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </button>

                {/* Sidebar Content */}
                <Sidebar />
                <nav className="p-4">
                    <Link href="/store-locations" className="block py-2 hover:underline">
                        Hệ thống cửa hàng
                    </Link>
                    <Link href="/user-guide" className="block py-2 hover:underline">
                        Hướng dẫn sử dụng
                    </Link>
                    <Link href="/warranty-policy" className="block py-2 hover:underline">
                        Chính sách bảo hành
                    </Link>
                </nav>
            </div>
        </>
    );
});
export default Header;