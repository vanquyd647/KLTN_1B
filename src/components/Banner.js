import { useState, useEffect } from 'react';

const images = [
    'https://firebasestorage.googleapis.com/v0/b/red89-f8933.appspot.com/o/KLTN%2FBanner%2Fslide_1_img.webp?alt=media&token=cf8df529-e70a-4bb3-8b02-885929d11191',
    'https://firebasestorage.googleapis.com/v0/b/red89-f8933.appspot.com/o/KLTN%2FBanner%2Fms_banner_img2.webp?alt=media&token=08b2caf2-4860-499e-9322-899097d13c2d',
    'https://firebasestorage.googleapis.com/v0/b/red89-f8933.appspot.com/o/KLTN%2FBanner%2Ftask_1109_1910x770__pc___1_.webp?alt=media&token=c5af3dfb-e564-4665-a0ce-711102dfdc4c'
    
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
        <div className="relative w-screen h-[15rem] sm:h-[20rem] md:h-[35rem] lg:h-[60rem] overflow-hidden -mx-[calc(50vw-50%)] left-[calc(50%-50vw)]">
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
