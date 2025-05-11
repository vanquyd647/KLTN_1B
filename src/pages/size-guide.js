import Layout from "@/components/Layout";
const sizeGuides = {
    shirt: {
        title: 'Bảng Size Áo',
        headers: ['Size', 'Chiều cao (cm)', 'Cân nặng (kg)', 'Ngực (cm)', 'Vai (cm)', 'Dài tay (cm)'],
        data: [
            ['S', '150-160', '45-52', '82-86', '36-38', '58-60'],
            ['M', '155-165', '53-60', '86-90', '38-40', '60-62'],
            ['L', '160-170', '61-68', '90-94', '40-42', '62-64'],
            ['XL', '165-175', '69-76', '94-98', '42-44', '64-66'],
        ]
    },
    pants: {
        title: 'Bảng Size Quần',
        headers: ['Size', 'Chiều cao (cm)', 'Cân nặng (kg)', 'Vòng eo (cm)', 'Vòng mông (cm)', 'Dài quần (cm)'],
        data: [
            ['S', '150-160', '45-52', '64-68', '86-90', '95-97'],
            ['M', '155-165', '53-60', '68-72', '90-94', '97-99'],
            ['L', '160-170', '61-68', '72-76', '94-98', '99-101'],
            ['XL', '165-175', '69-76', '76-80', '98-102', '101-103'],
        ]
    },
    shoes: {
        title: 'Bảng Size Giày',
        headers: ['Size US', 'Size EU', 'Size UK', 'Chiều dài chân (cm)'],
        data: [
            ['6', '39', '5.5', '24.5'],
            ['7', '40', '6.5', '25.5'],
            ['8', '41', '7.5', '26.5'],
            ['9', '42', '8.5', '27.5'],
            ['10', '43', '9.5', '28.5'],
        ]
    }
};

const SizeTable = ({ headers, data }) => {
    return (
        <div className="overflow-x-auto">
            <table className="min-w-full bg-white border">
                <thead>
                    <tr className="bg-gray-100">
                        {headers.map((header, index) => (
                            <th key={index} className="border p-3 text-sm">
                                {header}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            {row.map((cell, cellIndex) => (
                                <td key={cellIndex} className="border p-3 text-center">
                                    {cell}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default function SizeGuide() {
    return (
        <Layout>
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold mb-6">Hướng dẫn chọn size</h1>

                {/* Hướng dẫn đo */}
                <div className="mb-8">
                    <h2 className="text-xl font-semibold mb-4">Cách đo size chính xác</h2>
                    <div className="bg-gray-50 p-4 rounded-lg">
                        <ul className="space-y-2">
                            <li>• Vòng ngực: Đo vòng quanh phần đầy đặn nhất của ngực</li>
                            <li>• Vòng eo: Đo vòng quanh eo tại vị trí nhỏ nhất</li>
                            <li>• Vòng mông: Đo vòng quanh phần đầy đặn nhất của mông</li>
                            <li>• Chiều dài tay: Đo từ vai đến cổ tay</li>
                            <li>• Chiều dài chân: Đo từ đáy chân đến mắt cá chân</li>
                        </ul>
                    </div>
                </div>

                {/* Bảng Size Áo */}
                <div className="mb-8">
                    <h2 className="text-xl font-semibold mb-4">{sizeGuides.shirt.title}</h2>
                    <SizeTable headers={sizeGuides.shirt.headers} data={sizeGuides.shirt.data} />
                </div>

                {/* Bảng Size Quần */}
                <div className="mb-8">
                    <h2 className="text-xl font-semibold mb-4">{sizeGuides.pants.title}</h2>
                    <SizeTable headers={sizeGuides.pants.headers} data={sizeGuides.pants.data} />
                </div>

                {/* Bảng Size Giày */}
                <div className="mb-8">
                    <h2 className="text-xl font-semibold mb-4">{sizeGuides.shoes.title}</h2>
                    <SizeTable headers={sizeGuides.shoes.headers} data={sizeGuides.shoes.data} />
                </div>

                {/* Lưu ý */}
                <div className="mt-8">
                    <h2 className="text-xl font-semibold mb-4">Lưu ý khi chọn size</h2>
                    <div className="bg-yellow-50 p-4 rounded-lg">
                        <ul className="space-y-2 text-yellow-800">
                            <li>• Các số đo trong bảng chỉ mang tính chất tham khảo</li>
                            <li>• Tùy thuộc vào mẫu sản phẩm, size có thể sẽ có sự chênh lệch nhỏ</li>
                            <li>• Nếu bạn đang cân nhắc giữa hai size, nên chọn size lớn hơn</li>
                        </ul>
                    </div>
                </div>

                {/* Thông tin liên hệ */}
                <div className="mt-8">
                    <h2 className="text-xl font-semibold mb-4">Thông tin liên hệ hỗ trợ</h2>
                    <div className="bg-gray-100 p-4 rounded-lg">
                        <p className="font-medium">FASHION STORE</p>
                        <p>Văn phòng: Tp. HCM</p>
                        <p>Hotline: 0999 999 999</p>
                        <p>Email: cskh@fashionstore.vn</p>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
