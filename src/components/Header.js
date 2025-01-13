import { useState, useEffect } from 'react';
import Link from 'next/link';
import Sidebar from './Sidebar';

export default function Header() {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    // Close Drawer Sidebar on resize when moving to desktop size
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setIsDrawerOpen(false); // Close the Drawer Sidebar
            }
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

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
                            <li>
                                <Link href="/search" className="hover:underline">
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
                                </Link>
                            </li>

                            {/* User Icon */}
                            <li>
                                <Link href="/account" className="hover:underline">
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

                            {/* Cart Icon */}
                            <li>
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
}
