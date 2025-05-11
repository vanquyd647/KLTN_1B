// components/ContactLinks.js
import { FaFacebook, FaInstagram, FaEnvelope } from 'react-icons/fa';

export default function ContactLinks() {
    return (
        <div className="fixed bottom-20 right-4 flex flex-col gap-3 z-50">
            <a
                href="https://www.facebook.com/yourpage"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white p-3 rounded-full shadow-md hover:bg-blue-700 transition"
                aria-label="Facebook"
            >
                <FaFacebook />
            </a>
            <a
                href="https://www.instagram.com/yourpage"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-pink-500 text-white p-3 rounded-full shadow-md hover:bg-pink-600 transition"
                aria-label="Instagram"
            >
                <FaInstagram />
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
