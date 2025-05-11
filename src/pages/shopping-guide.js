import Layout from '../components/Layout';
export default function ShoppingGuide() {
    return (
        <Layout>
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">Hướng dẫn mua hàng</h1>
            <div className="prose max-w-none">
                <h2 className="text-xl font-semibold mt-6 mb-4">Các bước mua hàng tại FASHION STORE</h2>
                <ol className="list-decimal pl-6 space-y-4">
                    <li>
                        <p className="font-medium">Chọn sản phẩm</p>
                        <p>Truy cập website FASHION STORE, tìm và chọn sản phẩm bạn muốn mua</p>
                    </li>
                    <li>
                        <p className="font-medium">Thêm vào giỏ hàng</p>
                        <p>Chọn size, màu sắc và số lượng phù hợp, sau đó click &quot;Thêm vào giỏ hàng&quot;</p>
                    </li>
                    <li>
                        <p className="font-medium">Kiểm tra giỏ hàng</p>
                        <p>Xem lại sản phẩm, số lượng và giá tiền trong giỏ hàng</p>
                    </li>
                    <li>
                        <p className="font-medium">Thanh toán</p>
                        <p>Điền thông tin giao hàng và chọn phương thức thanh toán</p>
                    </li>
                </ol>

                <h2 className="text-xl font-semibold mt-8 mb-4">Thông tin liên hệ</h2>
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
