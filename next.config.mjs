/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: '/login', // Đường dẫn cũ
                destination: '/account/login', // Đường dẫn mới
                permanent: true, // Sử dụng redirect 301 (permanent)
            },
        ];
    },
};

export default nextConfig;
