import React from 'react';

export default function ProductDescription({ description }) {
    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">Mô tả sản phẩm</h2>
            <p>{description}</p>
        </div>
    );
}
