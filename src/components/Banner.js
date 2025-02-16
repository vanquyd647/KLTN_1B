import { useState, useEffect } from 'react';

const images = [
    'https://firebasestorage.googleapis.com/v0/b/red89-f8933.appspot.com/o/KLTN%2FBanner%2FDALL%C2%B7E%202025-01-16%2017.46.23%20-%20A%20horizontal%20banner%20for%20the%20brand%20\'Fashion%20Store%2C\'%20designed%20to%20appeal%20to%20a%20diverse%20audience.%20The%20logo%20is%20prominently%20placed%20in%20the%20center%20of%20the%20banne.webp?alt=media&token=b2c95f9e-35c9-4da0-a5ba-1d293ec3f1ee',
    'https://firebasestorage.googleapis.com/v0/b/red89-f8933.appspot.com/o/KLTN%2FBanner%2FDALL%C2%B7E%202025-01-16%2017.35.06%20-%20A%20set%20of%20three%20horizontal%20banners%20for%20a%20clothing%20shop%2C%20each%20designed%20for%20a%20modern%2C%20stylish%20theme.%20The%20first%20banner%20features%20casual%20summer%20outfits%20in%20v.webp?alt=media&token=2aa6f64f-7efd-4bed-9373-1c388eaad463',
    'https://firebasestorage.googleapis.com/v0/b/red89-f8933.appspot.com/o/KLTN%2FBanner%2FDALL%C2%B7E%202025-01-16%2017.39.08%20-%20A%20horizontal%20banner%20for%20a%20clothing%20shop%20featuring%20a%20minimalistic%20streetwear%20theme%20for%20youth.%20The%20design%20showcases%20stylish%20hoodies%2C%20oversized%20t-shirts%2C.webp?alt=media&token=bda0c9ce-0cdd-4cfb-ab36-13a0a7455aea', 
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
        <div className="relative w-full h-[15rem] sm:h-[20rem] md:h-[35rem] lg:h-[50rem] overflow-hidden">
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
