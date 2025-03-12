import React from 'react';

export default function ProductDescription({
    description,
    productType = 'clothing', // 'clothing', 'accessory', 'footwear'
    material,
    careInstructions,
    features
}) {
    // Mô tả mặc định theo loại sản phẩm
    const getDefaultDescription = () => {
        const descriptions = {
            clothing: `Sản phẩm thời trang cao cấp được thiết kế theo xu hướng mới nhất, mang đến vẻ ngoài hiện đại và phong cách. Được may từ chất liệu chọn lọc, tạo cảm giác thoải mái khi mặc và dễ dàng phối với nhiều trang phục khác nhau.`,

            accessory: `Phụ kiện thời trang tinh tế, là điểm nhấn hoàn hảo cho trang phục của bạn. Thiết kế hiện đại, dễ dàng kết hợp với nhiều phong cách khác nhau, giúp tôn lên vẻ đẹp cá nhân và thể hiện gu thẩm mỹ độc đáo.`,

            footwear: `Giày dép thời trang được thiết kế tỉ mỉ, kết hợp giữa phong cách hiện đại và sự thoải mái. Đế giày chắc chắn, hỗ trợ tốt cho bàn chân trong mọi hoạt động hàng ngày.`
        };

        return descriptions[productType] || descriptions.clothing;
    };

    // Hướng dẫn bảo quản mặc định
    const getDefaultCareInstructions = () => {
        const instructions = {
            clothing: [
                "Giặt máy ở nhiệt độ thấp hoặc giặt tay nhẹ nhàng",
                "Không sử dụng chất tẩy mạnh",
                "Phơi trong bóng râm để tránh phai màu",
                "Ủi ở nhiệt độ thấp hoặc trung bình",
                "Không vắt mạnh"
            ],

            accessory: [
                "Tránh tiếp xúc với nước và hóa chất",
                "Lau nhẹ nhàng bằng khăn mềm",
                "Bảo quản trong hộp hoặc túi riêng",
                "Tránh va đập mạnh",
                "Không để dưới ánh nắng trực tiếp"
            ],

            footwear: [
                "Làm sạch bằng bàn chải mềm",
                "Để khô tự nhiên, tránh các nguồn nhiệt trực tiếp",
                "Sử dụng xi đánh giày phù hợp với chất liệu",
                "Không giặt máy",
                "Bảo quản ở nơi khô ráo, thoáng mát"
            ]
        };

        return instructions[productType] || instructions.clothing;
    };

    return (
        <div className="space-y-6">
            <section>
                <h2 className="text-2xl font-bold mb-4">Mô tả sản phẩm</h2>
                <div className="prose prose-lg max-w-none text-gray-700">
                    {description || getDefaultDescription()}
                </div>
            </section>

            {material && (
                <section>
                    <h3 className="text-xl font-semibold mb-2">Chất liệu</h3>
                    <p className="text-gray-700">{material}</p>
                </section>
            )}

            {features && features.length > 0 && (
                <section>
                    <h3 className="text-xl font-semibold mb-2">Đặc điểm nổi bật</h3>
                    <ul className="list-disc pl-5 text-gray-700 space-y-1">
                        {features.map((feature, index) => (
                            <li key={index}>{feature}</li>
                        ))}
                    </ul>
                </section>
            )}

            <section>
                <h3 className="text-xl font-semibold mb-2">Hướng dẫn bảo quản</h3>
                <ul className="list-disc pl-5 text-gray-700 space-y-1">
                    {(careInstructions || getDefaultCareInstructions()).map((instruction, index) => (
                        <li key={index}>{instruction}</li>
                    ))}
                </ul>
            </section>

            {productType === 'clothing' && (
                <section className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold mb-2">Lưu ý khi chọn size</h3>
                    <p className="text-gray-700">
                        Vui lòng tham khảo bảng size để chọn được sản phẩm phù hợp nhất.
                        Nếu bạn đang cân nhắc giữa hai kích cỡ, nên chọn size lớn hơn để thoải mái hơn.
                    </p>
                </section>
            )}
        </div>
    );
}
