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
        },
    },
    plugins: [],
};
