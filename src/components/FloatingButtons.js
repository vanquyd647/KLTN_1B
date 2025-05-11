import { useState, useEffect } from 'react';
import { FaFacebook, FaInstagram, FaEnvelope, FaArrowUp } from 'react-icons/fa';

export default function FloatingButtons() {
    const [showScroll, setShowScroll] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowScroll(window.pageYOffset > 300);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="fixed bottom-4 right-4 flex flex-col items-center gap-3 z-50">
            {showScroll && (
                <button
                    onClick={scrollToTop}
                    className="bg-gray-600 hover:bg-gray-700 text-white p-3 rounded-full shadow-md transition"
                    aria-label="Về đầu trang"
                >
                    <FaArrowUp />
                </button>
            )}

            <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white p-3 rounded-full shadow-md hover:bg-blue-700 transition"
                aria-label="Facebook"
            >
                <FaFacebook />
            </a>

            <a
                href="mailto:contact@example.com"
                className="bg-gray-700 text-white p-3 rounded-full shadow-md hover:bg-gray-800 transition"
                aria-label="Email"
            >
                <FaEnvelope />
            </a>
        </div>
    );
}
