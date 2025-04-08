import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createProduct, updateProduct } from '../store/slices/productSlice';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from '../configs/firebaseConfig';

const ProductForm = ({ product, onSuccess, onCancel }) => {
    const dispatch = useDispatch();
    const { submitLoading, error } = useSelector((state) => state.products);
    const formTitle = product ? 'Sửa sản phẩm' : 'Thêm sản phẩm mới';

    const [formData, setFormData] = useState({
        product_name: '',
        description: '',
        price: '',
        discount_price: '',
        status: 'available',
        is_new: false,
        is_featured: false,
        categories: [],
        colors: [],
        sizes: [],
        stock: []
    });

    console.log('formData:', formData);

    const [tempCategory, setTempCategory] = useState('');
    const [tempColor, setTempColor] = useState({ color: '', hex_code: '', image: '' });
    const [tempSize, setTempSize] = useState('');
    const [tempStock, setTempStock] = useState({ size: '', color: '', quantity: 0 });
    // Thêm states mới
    const [uploading, setUploading] = useState(false);
    const [uploadProgress, setUploadProgress] = useState(0);

    // Thêm hàm xử lý upload
    const handleImageUpload = async (file) => {
        // Kiểm tra kích thước file (giới hạn 5MB)
        if (file.size > 5 * 1024 * 1024) {
            alert('File quá lớn! Vui lòng chọn file nhỏ hơn 5MB');
            return;
        }

        // Kiểm tra loại file
        if (!file.type.startsWith('image/')) {
            alert('Vui lòng chọn file ảnh!');
            return;
        }

        setUploading(true);
        setUploadProgress(0);

        try {
            // Tạo tên file unique
            const fileName = `${Date.now()}-${file.name.replace(/[^a-zA-Z0-9.]/g, '_')}`;
            const storageRef = ref(storage, `products/${fileName}`);

            // Tạo upload task
            const uploadTask = uploadBytesResumable(storageRef, file);

            // Theo dõi tiến trình upload
            uploadTask.on('state_changed',
                // Progress handler
                (snapshot) => {
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    setUploadProgress(Math.round(progress));
                },
                // Error handler
                (error) => {
                    console.error('Upload error:', error);
                    alert('Lỗi khi tải ảnh lên! Vui lòng thử lại.');
                    setUploading(false);
                },
                // Complete handler
                async () => {
                    try {
                        const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
                        setTempColor(prev => ({ ...prev, image: downloadURL }));
                        alert('Tải ảnh lên thành công!');
                    } catch (error) {
                        console.error('Error getting download URL:', error);
                        alert('Lỗi khi lấy URL ảnh!');
                    } finally {
                        setUploading(false);
                        setUploadProgress(0);
                    }
                }
            );
        } catch (error) {
            console.error('Upload setup error:', error);
            alert('Có lỗi xảy ra khi chuẩn bị tải ảnh!');
            setUploading(false);
        }
    };

    // Handlers for form inputs
    const handleBasicInfoChange = (e) => {
        const { name, value, type, checked } = e.target;

        if (name === 'price' || name === 'discount_price') {
            // Chuyển đổi sang số và kiểm tra
            const numValue = Number(value);

            // Kiểm tra nếu discount_price lớn hơn price
            if (name === 'discount_price' && numValue > formData.price) {
                alert('Giá khuyến mãi không được lớn hơn giá gốc');
                return;
            }
        }

        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };


    // Handler for categories
    const handleAddCategory = () => {
        if (tempCategory && !formData.categories.includes(tempCategory)) {
            setFormData(prev => ({
                ...prev,
                categories: [...prev.categories, tempCategory]
            }));
            setTempCategory('');
        }
    };

    // Handler for colors
    const handleAddColor = () => {
        if (tempColor.color && tempColor.hex_code && tempColor.image) {
            const colorExists = formData.colors.some(c =>
                c.color.toLowerCase() === tempColor.color.toLowerCase()
            );

            if (colorExists) {
                alert('Màu sắc này đã tồn tại!');
                return;
            }

            setFormData(prev => ({
                ...prev,
                colors: [...prev.colors, { ...tempColor }]
            }));
            setTempColor({ color: '', hex_code: '', image: '' });
        } else {
            alert('Vui lòng điền đầy đủ thông tin màu sắc!');
        }
    };

    // Handler for sizes
    const handleAddSize = () => {
        if (tempSize && !formData.sizes.includes(tempSize)) {
            setFormData(prev => ({
                ...prev,
                sizes: [...prev.sizes, tempSize]
            }));
            setTempSize('');
        }
    };

    // Handler for stock
    const handleAddStock = () => {
        if (tempStock.size && tempStock.color && tempStock.quantity > 0) {
            // Kiểm tra size và color có tồn tại
            const sizeExists = formData.sizes.includes(tempStock.size);
            const colorExists = formData.colors.some(c => c.color === tempStock.color);

            if (!sizeExists || !colorExists) {
                alert('Size hoặc màu sắc không hợp lệ!');
                return;
            }

            // Kiểm tra combination đã tồn tại
            const stockExists = formData.stock.some(
                s => s.size === tempStock.size && s.color === tempStock.color
            );

            if (stockExists) {
                alert('Combination của size và màu này đã tồn tại!');
                return;
            }

            // Tìm size_id và color_id từ product nếu đang trong chế độ edit
            const size_id = product?.productSizes?.find(s => s.size === tempStock.size)?.id;
            const color_id = product?.productColors?.find(c => c.color === tempStock.color)?.id;

            setFormData(prev => ({
                ...prev,
                stock: [...prev.stock, {
                    size: tempStock.size,
                    color: tempStock.color,
                    quantity: Number(tempStock.quantity),
                    size_id: size_id || null,
                    color_id: color_id || null
                }]
            }));
            setTempStock({ size: '', color: '', quantity: 0 });
        } else {
            alert('Vui lòng điền đầy đủ thông tin tồn kho!');
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Validate giá
            if (!formData.price || Number(formData.price) < 2000) {
                alert('Giá sản phẩm phải lớn hơn hoặc bằng 2.000đ!');
                return;
            }
            // Validate giá khuyến mãi nếu có
            if (formData.discount_price) {
                const discountPrice = Number(formData.discount_price);
                if (discountPrice < 2000) {
                    alert('Giá khuyến mãi phải lớn hơn hoặc bằng 2.000đ!');
                    return;
                }
                if (discountPrice > Number(formData.price)) {
                    alert('Giá khuyến mãi phải nhỏ hơn giá gốc!');
                    return;
                }
            }
            if (!formData.product_name  || formData.price <= 0) {
                alert('Vui lòng điền đầy đủ thông tin sản phẩm!');
                return;
            }

            if (formData.categories.length === 0) {
                alert('Vui lòng thêm ít nhất một danh mục!');
                return;
            }

            if (formData.colors.length === 0) {
                alert('Vui lòng thêm ít nhất một màu sắc!');
                return;
            }

            if (formData.sizes.length === 0) {
                alert('Vui lòng thêm ít nhất một kích thước!');
                return;
            }

            if (formData.stock.length === 0) {
                alert('Vui lòng thêm ít nhất một tồn kho!');
                return;
            }

            const productPayload = {
                product_name: formData.product_name,
                description: formData.description,
                price: Number(formData.price),
                discount_price: Number(formData.discount_price),
                is_new: formData.is_new,
                is_featured: formData.is_featured,
                status: formData.status,
                categories: formData.categories,
                colors: formData.colors.map(color => ({
                    color: color.color,
                    hex_code: color.hex_code,
                    image: color.image
                })),
                sizes: formData.sizes,
                stock: formData.stock.map(item => ({
                    id: item.id, // Giữ lại id nếu là stock đã tồn tại
                    size_id: item.size_id,
                    color_id: item.color_id,
                    size: item.size,
                    color: item.color,
                    quantity: Number(item.quantity)
                }))
            };

            console.log('Sending data:', productPayload);

            if (product) {
                await dispatch(updateProduct({
                    slug: product.slug,
                    productData: productPayload
                })).unwrap();
            } else {
                await dispatch(createProduct(productPayload)).unwrap();
            }
            onSuccess();
        } catch (error) {
            console.error('Error:', error);
            alert('Có lỗi xảy ra khi lưu sản phẩm!');
        }
    };

    useEffect(() => {
        if (product) {
            setFormData({
                product_name: product.product_name || '',
                description: product.description || '',
                price: product.price || 0,
                discount_price: product.discount_price || 0,
                status: product.status || 'available',
                is_new: product.is_new || false,
                is_featured: product.is_featured || false,
                categories: product.categories?.map(cat => cat.name) || [],
                colors: product.productColors?.map(color => ({
                    color: color.color,
                    hex_code: color.hex_code,
                    image: color.ProductColor?.image,
                    id: color.id
                })) || [],
                sizes: product.productSizes?.map(size => size.size) || [],
                stock: product.ProductStocks?.map(stock => ({
                    id: stock.id,
                    size_id: stock.size_id,
                    color_id: stock.color_id,
                    size: stock.size || product.productSizes.find(s => s.id === stock.size_id)?.size,
                    color: stock.color || product.productColors.find(c => c.id === stock.color_id)?.color,
                    quantity: stock.quantity
                })) || []
            });
        }
    }, [product]);


    return (
        <form onSubmit={handleSubmit} className="space-y-6 max-w-4xl mx-auto p-6">
            <h2 className="text-2xl font-bold mb-6">{formTitle}</h2>

            {/* Basic Information */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold">Thông tin cơ bản</h3>
                <div className="grid grid-cols-2 gap-4">
                    <input
                        type="text"
                        name="product_name"
                        placeholder="Tên sản phẩm"
                        value={formData.product_name}
                        onChange={handleBasicInfoChange}
                        className="border rounded-lg p-2"
                    />
                    <div>
                        <input
                            type="number"
                            name="price"
                            placeholder="Giá"
                            value={formData.price}
                            onChange={handleBasicInfoChange}
                            min="2000"
                            className="border rounded-lg p-2 w-full"
                        />
                        {formData.price && (
                            <div className="text-sm text-gray-500 mt-1">
                                {Number(formData.price).toLocaleString('vi-VN')}đ
                            </div>
                        )}
                    </div>
                    <div>
                        <input
                            type="number"
                            name="discount_price"
                            placeholder="Giá khuyến mãi"
                            value={formData.discount_price}
                            onChange={handleBasicInfoChange}
                            min="2000"
                            className="border rounded-lg p-2 w-full"
                        />
                        {formData.discount_price && (
                            <div className="text-sm text-gray-500 mt-1">
                                {Number(formData.discount_price).toLocaleString('vi-VN')}đ
                            </div>
                        )}
                    </div>
                    <textarea
                        name="description"
                        placeholder="Mô tả"
                        value={formData.description}
                        onChange={handleBasicInfoChange}
                        className="border rounded-lg p-2"
                    />
                    <div className="col-span-2">
                        <select
                            name="status"
                            value={formData.status}
                            onChange={handleBasicInfoChange}
                            className="w-full border rounded-lg p-2"
                        >
                            <option value="available">Còn hàng</option>
                            <option value="out_of_stock">Hết hàng</option>
                            <option value="discontinued">Ngừng kinh doanh</option>
                        </select>
                    </div>
                    <div className="flex items-center gap-4">
                        <label className="flex items-center gap-2">
                            <input
                                type="checkbox"
                                name="is_new"
                                checked={formData.is_new}
                                onChange={handleBasicInfoChange}
                            />
                            Sản phẩm mới
                        </label>
                        <label className="flex items-center gap-2">
                            <input
                                type="checkbox"
                                name="is_featured"
                                checked={formData.is_featured}
                                onChange={handleBasicInfoChange}
                            />
                            Sản phẩm nổi bật
                        </label>
                    </div>
                </div>
            </div>

            {/* Categories */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold">Danh mục</h3>
                <div className="flex gap-2">
                    <input
                        type="text"
                        value={tempCategory}
                        onChange={(e) => setTempCategory(e.target.value)}
                        placeholder="Thêm danh mục"
                        className="border rounded-lg p-2"
                    />
                    <button
                        type="button"
                        onClick={handleAddCategory}
                        className="px-4 py-2 bg-blue-500 text-white rounded-lg"
                    >
                        Thêm
                    </button>
                </div>
                <div className="flex flex-wrap gap-2">
                    {formData.categories.map((category, index) => (
                        <span key={index} className="px-3 py-1 bg-gray-100 rounded-full">
                            {category}
                            <button
                                type="button"
                                onClick={() => {
                                    setFormData(prev => ({
                                        ...prev,
                                        categories: prev.categories.filter((_, i) => i !== index)
                                    }));
                                }}
                                className="ml-2 text-red-500"
                            >
                                ×
                            </button>
                        </span>
                    ))}
                </div>
            </div>

            {/* Colors */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold">Màu sắc</h3>
                <div className="grid grid-cols-3 gap-4">
                    <input
                        type="text"
                        value={tempColor.color}
                        onChange={(e) => setTempColor(prev => ({ ...prev, color: e.target.value }))}
                        placeholder="Tên màu"
                        className="border rounded-lg p-2"
                    />
                    <input
                        type="text"
                        value={tempColor.hex_code}
                        onChange={(e) => setTempColor(prev => ({ ...prev, hex_code: e.target.value }))}
                        placeholder="Mã màu (hex)"
                        className="border rounded-lg p-2"
                    />
                    <div className="space-y-2">
                        <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => {
                                const file = e.target.files[0];
                                if (file) {
                                    handleImageUpload(file);
                                }
                            }}
                            className="block w-full text-sm text-gray-500
                                        file:mr-4 file:py-2 file:px-4
                                        file:rounded-full file:border-0
                                        file:text-sm file:font-semibold
                                        file:bg-blue-50 file:text-blue-700
                                        hover:file:bg-blue-100"
                            disabled={uploading}
                        />
                        {uploading && (
                            <div className="flex items-center gap-2 text-sm text-gray-500">
                                <svg className="animate-spin h-5 w-5 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                <span>Đang tải ảnh... {uploadProgress}%</span>
                            </div>
                        )}
                        {tempColor.image && (
                            <div className="flex items-center gap-2">
                                <img
                                    src={tempColor.image}
                                    alt="Preview"
                                    className="w-20 h-20 object-cover rounded"
                                />
                                <div className="flex flex-col gap-1">
                                    <a
                                        href={tempColor.image}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-sm text-blue-500 hover:underline"
                                    >
                                        Xem ảnh
                                    </a>
                                    <button
                                        type="button"
                                        onClick={() => {
                                            setTempColor(prev => ({ ...prev, image: '' }));
                                        }}
                                        className="text-sm text-red-500 hover:underline"
                                    >
                                        Xóa ảnh
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                <button
                    type="button"
                    onClick={handleAddColor}
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg"
                >
                    Thêm màu
                </button>
                <div className="grid grid-cols-2 gap-4">
                    {formData.colors.map((color, index) => (
                        <div key={index} className="flex items-center gap-4 p-3 border rounded-lg">
                            <div className="flex items-center gap-2">
                                <div
                                    className="w-6 h-6 rounded-full border"
                                    style={{ backgroundColor: color.hex_code }}
                                />
                                <span className="font-medium">{color.color}</span>
                            </div>

                            {color.image && (
                                <div className="flex-1">
                                    <img
                                        src={color.image}
                                        alt={`Màu ${color.color}`}
                                        className="w-20 h-20 object-cover rounded-lg"
                                    />
                                </div>
                            )}

                            <div className="flex items-center gap-2">
                                <a
                                    href={color.image}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm text-blue-500 hover:underline"
                                >
                                    Xem ảnh
                                </a>
                                <button
                                    type="button"
                                    onClick={() => {
                                        setFormData(prev => ({
                                            ...prev,
                                            colors: prev.colors.filter((_, i) => i !== index)
                                        }));
                                    }}
                                    className="text-red-500 hover:text-red-700"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Sizes */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold">Kích thước</h3>
                <div className="flex gap-2">
                    <input
                        type="text"
                        value={tempSize}
                        onChange={(e) => setTempSize(e.target.value)}
                        placeholder="Thêm kích thước"
                        className="border rounded-lg p-2"
                    />
                    <button
                        type="button"
                        onClick={handleAddSize}
                        className="px-4 py-2 bg-blue-500 text-white rounded-lg"
                    >
                        Thêm
                    </button>
                </div>
                <div className="flex flex-wrap gap-2">
                    {formData.sizes.map((size, index) => (
                        <span key={index} className="px-3 py-1 bg-gray-100 rounded-full">
                            {size}
                            <button
                                type="button"
                                onClick={() => {
                                    setFormData(prev => ({
                                        ...prev,
                                        sizes: prev.sizes.filter((_, i) => i !== index)
                                    }));
                                }}
                                className="ml-2 text-red-500"
                            >
                                ×
                            </button>
                        </span>
                    ))}
                </div>
            </div>

            {/* Stock */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold">Tồn kho</h3>
                <div className="grid grid-cols-3 gap-4">
                    <select
                        value={tempStock.size}
                        onChange={(e) => setTempStock(prev => ({ ...prev, size: e.target.value }))}
                        className="border rounded-lg p-2"
                    >
                        <option value="">Chọn kích thước</option>
                        {formData.sizes.map((size, index) => (
                            <option key={index} value={size}>{size}</option>
                        ))}
                    </select>
                    <select
                        value={tempStock.color}
                        onChange={(e) => setTempStock(prev => ({ ...prev, color: e.target.value }))}
                        className="border rounded-lg p-2"
                    >
                        <option value="">Chọn màu</option>
                        {formData.colors.map((color, index) => (
                            <option key={index} value={color.color}>{color.color}</option>
                        ))}
                    </select>
                    <input
                        type="number"
                        min="0"
                        value={tempStock.quantity}
                        onChange={(e) => setTempStock(prev => ({ ...prev, quantity: parseInt(e.target.value) || 0 }))}
                        placeholder="Số lượng"
                        className="border rounded-lg p-2"
                    />
                </div>
                <button
                    type="button"
                    onClick={handleAddStock}
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg"
                >
                    Thêm tồn kho
                </button>

                {/* Hiển thị danh sách stock */}
                <div className="grid grid-cols-2 gap-4 mt-4">
                    {formData.stock.map((item, index) => (
                        <div key={index} className="flex items-center justify-between p-2 border rounded-lg">
                            <span>
                                {item.size} - {item.color}: {item.quantity}
                            </span>
                            <button
                                type="button"
                                onClick={() => {
                                    setFormData(prev => ({
                                        ...prev,
                                        stock: prev.stock.filter((_, i) => i !== index)
                                    }));
                                }}
                                className="text-red-500"
                            >
                                ×
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-end gap-4 mt-6">
                <button
                    type="button"
                    onClick={onCancel}
                    disabled={submitLoading}
                    className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
                >
                    Hủy
                </button>
                <button
                    type="submit"
                    disabled={submitLoading}
                    className="px-6 py-2 bg-blue-500 text-white rounded-lg disabled:bg-gray-400 hover:bg-blue-600"
                >
                    {submitLoading ? 'Đang xử lý...' : product ? 'Cập nhật' : 'Thêm sản phẩm'}
                </button>
            </div>

            {error && (
                <div className="text-red-500 mt-4">
                    {error}
                </div>
            )}
        </form>
    );
};

export default ProductForm;
