import React, { memo } from 'react';
import { useState, useEffect, useRef } from 'react';
import { debounce } from 'lodash';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { productApi } from '../utils/apiClient';
import { selectFavoriteTotal, forceUpdateFavorites } from '../store/slices/favoriteSlice';
import Sidebar from './Sidebar';

const Header = memo(function Header({ isCartPage }) {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const { items } = useSelector((state) => state.cart);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const searchRef = useRef(null);
    const searchInputRef = useRef(null);
    const router = useRouter();

    // Tính toán số lượng item trong giỏ hàng
    const totalItems = items?.reduce((sum, item) => {
        if (item && typeof item.quantity === 'number') {
            return sum + item.quantity;
        }
        return sum;
    }, 0) || 0;

    const dispatch = useDispatch();

    // Lấy trực tiếp total từ selector 
    const favoriteCount = useSelector(selectFavoriteTotal);

    // Thêm effect để tự động cập nhật
    useEffect(() => {
        // Cập nhật ngay khi mount
        dispatch(forceUpdateFavorites({ page: 1, limit: 10 }));

        // Cập nhật định kỳ mỗi 30s
        const interval = setInterval(() => {
            dispatch(forceUpdateFavorites({ page: 1, limit: 10 }));
        }, 30000);

        return () => clearInterval(interval);
    }, [dispatch]);
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
                const result = await productApi.searchProductsByNameAndColor(term.trim(), {
                    page: 1,
                    limit: 10,
                    sort: 'newest'
                });

                if (result.data?.products) {
                    setSearchResults(result.data.products);
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
        <li className="relative w-6 h-6" ref={searchRef}>
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
                <div className="fixed md:absolute top-0 md:top-full left-0 md:left-auto right-0 md:right-0 h-screen md:h-auto w-full md:w-96 bg-white md:rounded-lg shadow-xl z-[60] md:mt-2">
                    <div className="p-4">
                        <div className="flex items-center justify-between p-4 md:hidden border-b border-gray-200">
                            <h2 className="text-lg font-medium text-gray-900">Tìm kiếm</h2>
                            <button
                                onClick={() => {
                                    setIsSearchOpen(false);
                                    setSearchTerm('');
                                    setSearchResults([]);
                                }}
                                className="p-2 -mr-2"
                            >
                                <svg
                                    className="w-5 h-5 text-gray-500"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path d="M6 18L18 6M6 6l12 12"></path>
                                </svg>
                            </button>
                        </div>
                        <div id="header-search-container">
                            <input
                                ref={searchInputRef}
                                type="search"
                                placeholder="Tìm kiếm sản phẩm..."
                                className="w-full p-4 md:p-3 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-500 text-gray-900 text-base"
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
                                    className="block w-full text-center py-2 mt-2 text-gray-600 hover:text-gray-700 font-medium border-t"
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
            <header className="bg-gray-800 text-white p-4 shadow">
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
                    <nav className="hidden md:flex space-x-8 ml-auto text-base font-medium tracking-wide">
                        <Link
                            href="/user-guide"
                            className="hover:underline hover:text-blue-600 transition-colors duration-200 font-sans"
                            style={{ fontSize: '15px' }}
                        >
                            Sale
                        </Link>
                        <Link
                            href="/warranty-policy"
                            className="hover:underline hover:text-blue-600 transition-colors duration-200 font-sans"
                            style={{ fontSize: '15px' }}
                        >
                            Khuyến mãi
                        </Link>
                        <Link
                            href="/store-locations"
                            className="hover:underline hover:text-blue-600 transition-colors duration-200 font-sans"
                            style={{ fontSize: '15px' }}
                        >
                            Hệ thống cửa hàng
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
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                        />
                                    </svg>
                                </Link>
                            </li>

                            {/* Favorites Icon with Counter */}
                            <li className="relative">
                                <Link href="/favorites" className="hover:underline">
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
                                            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                        />
                                    </svg>
                                    {favoriteCount > 0 && (
                                        <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                                            {favoriteCount}
                                        </span>
                                    )}
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
                    className="absolute top-4 right-4 text-gray-600 focus:outline-none"
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
                <div className="divide-y divide-gray-200">
                    <Sidebar isMobile={true} />

                    {/* Additional Links */}
                    <nav className="py-2">
                        <Link
                            href="/TrackOrder"
                            className="flex items-center px-4 py-2.5 text-gray-700 hover:bg-gray-50 hover:text-gray-600"
                            onClick={toggleDrawer}
                        >
                            <svg className="w-5 h-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                            </svg>
                            Tra cứu đơn hàng
                        </Link>
                        <Link
                            href="/store-locations"
                            className="flex items-center px-4 py-2.5 text-gray-700 hover:bg-gray-50 hover:text-gray-600"
                            onClick={toggleDrawer}
                        >
                            <svg className="w-5 h-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            Hệ thống cửa hàng
                        </Link>
                        <Link
                            href="/user-guide"
                            className="flex items-center px-4 py-2.5 text-gray-700 hover:bg-gray-50 hover:text-gray-600"
                            onClick={toggleDrawer}
                        >
                            <svg className="w-5 h-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                            </svg>
                            Hướng dẫn sử dụng
                        </Link>
                        <Link
                            href="/warranty-policy"
                            className="flex items-center px-4 py-2.5 text-gray-700 hover:bg-gray-50 hover:text-gray-600"
                            onClick={toggleDrawer}
                        >
                            <svg className="w-5 h-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                            Chính sách bảo hành
                        </Link>
                    </nav>
                </div>
            </div>
        </>
    );
});

export default Header;
