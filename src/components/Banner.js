import { useState, useEffect } from 'react';

const images = [
    'https://firebasestorage.googleapis.com/v0/b/red89-f8933.appspot.com/o/KLTN%2FBanner%2F109281170_p0.png?alt=media&token=e1154f49-b566-44ab-b222-3d4885718459',
    'https://firebasestorage.googleapis.com/v0/b/red89-f8933.appspot.com/o/KLTN%2FBanner%2F110380120_p0.png?alt=media&token=cd5686e5-a115-4f17-a851-875d0c375b6f',
    'https://firebasestorage.googleapis.com/v0/b/red89-f8933.appspot.com/o/KLTN%2FBanner%2F110649945_p0.png?alt=media&token=487bc2fa-22ee-4ba8-8e57-ad91a8915da7',
];


export default function Banner() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); // Change image every 3 seconds
        return () => clearInterval(interval); // Cleanup on unmount
    }, []);

    return (
        <div className="relative w-full h-[32rem] overflow-hidden">
            {images.map((image, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 w-full h-full transition-transform duration-700 ease-in-out transform ${
                        index === currentIndex
                            ? 'translate-x-0'
                            : index < currentIndex
                            ? '-translate-x-full'
                            : 'translate-x-full'
                    }`}
                >
                    <img
                        src={image}
                        alt={`Banner ${index + 1}`}
                        className="w-full h-full object-cover"
                    />
                </div>
            ))}

            {/* Pagination Dots */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-3 h-3 rounded-full ${
                            index === currentIndex
                                ? 'bg-white'
                                : 'bg-gray-400'
                        }`}
                    />
                ))}
            </div>
        </div>
    );
}
