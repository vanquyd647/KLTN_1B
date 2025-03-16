/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}', // Bao gồm tất cả file trong thư mục pages
        './components/**/*.{js,ts,jsx,tsx}', // Bao gồm tất cả file trong thư mục components
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}', // Bao gồm các file trong src/pages
        './src/components/**/*.{js,ts,jsx,tsx,mdx}', // Bao gồm các file trong src/components
        './src/app/**/*.{js,ts,jsx,tsx,mdx}', // Bao gồm các file trong src/app
    ],
    theme: {
        extend: {
            colors: {
                background: 'var(--background)', // Thêm màu nền tùy chỉnh
                foreground: 'var(--foreground)', // Thêm màu foreground tùy chỉnh
            },
            keyframes: {
                'slide-in-top': {
                    '0%': { transform: 'translateY(-100%)' },
                    '100%': { transform: 'translateY(0)' }
                },
                'fade-in': {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' }
                },
                'blink': {
                    '0%, 100%': { opacity: '1' },
                    '50%': { opacity: '0.3' },
                }
            },
            animation: {
                'slide-in-top': 'slide-in-top 0.3s ease-out',
                'fade-in': 'fade-in 0.2s ease-out',
                'blink': 'blink 1.5s infinite',
            }
        },
    },
    plugins: [],
};
