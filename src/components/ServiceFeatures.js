// components/ServiceFeatures.js
const ServiceFeatures = () => {
    const features = [
        {
            id: 1,
            title: 'Miễn phí vận chuyển',
            description: 'Áp dụng cho mọi đơn hàng từ 500k',
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
            )
        },
        {
            id: 2,
            title: 'Đổi hàng dễ dàng',
            description: '7 ngày đổi hàng vì bất kì lí do gì',
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
                </svg>
            )
        },
        {
            id: 3,
            title: 'Hỗ trợ nhanh chóng',
            description: 'HOTLINE 24/7: 0999999999',
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
            )
        },
        {
            id: 4,
            title: 'Thanh toán đa dạng',
            description: 'Thanh toán khi nhận hàng, VietQR, Chuyển Khoản',
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path>
                </svg>
            )
        }
    ];

    return (
        <div className="bg-gray-50 py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature) => (
                        <div
                            key={feature.id}
                            className="bg-white p-6 rounded-lg shadow-md 
                                     hover:shadow-lg transition-shadow duration-300
                                     flex flex-col items-center text-center"
                        >
                            <div className="text-gray-600 mb-4">
                                {feature.icon}
                            </div>
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">
                                {feature.title}
                            </h3>
                            <p className="text-gray-600">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ServiceFeatures;
