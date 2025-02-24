import React from 'react';

export default function ProductReviews({
    reviews,
    averageRating,
    pagination,
    reviewsError,
    handlePageChange,
    handleSubmitReview,
    reviewRating,
    setReviewRating,
    reviewText,
    setReviewText,
    getToken,
    router,
}) {
    return (
        <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Đánh giá sản phẩm</h2>
            <div className="mb-4">
                <h3 className="text-lg font-semibold mb-2">
                    ĐIỂM ĐÁNH GIÁ {averageRating || 0}/5 DỰA TRÊN {pagination.totalReviews} ĐÁNH GIÁ
                </h3>
                {reviewsError ? (
                    <p className="text-red-500">Failed to fetch reviews.</p>
                ) : (
                    <div className="flex flex-col gap-4">
                        {reviews?.map((review) => (
                            <div key={review.id} className="border p-4 rounded shadow-sm bg-white hover:shadow-md">
                                <div className="flex items-center gap-2 mb-2">
                                    <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            className="w-6 h-6 text-gray-500"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M12 2a10 10 0 100 20 10 10 0 000-20zM8.25 9a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM5.95 16.86a7.5 7.5 0 0112.1 0 8.5 8.5 0 10-12.1 0z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </div>
                                    <p className="font-semibold">{review.user}</p>
                                </div>
                                <div className="flex items-center mb-2">
                                    {[1, 2, 3, 4, 5].map((rating) => (
                                        <svg
                                            key={rating}
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill={rating <= review.rating ? 'currentColor' : 'none'}
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            className={`w-6 h-6 ${rating <= review.rating ? 'text-yellow-500' : 'text-gray-300'
                                                }`}
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M12 3.172l2.828 5.734 6.337.919-4.582 4.46 1.081 6.312L12 17.711 6.336 20.597l1.08-6.312-4.582-4.46 6.337-.919L12 3.172z"
                                            />
                                        </svg>
                                    ))}
                                </div>
                                <p>{review.review_text}</p>
                            </div>
                        ))}
                        {reviews?.length === 0 && <p>No reviews available for this product.</p>}
                    </div>
                )}
            </div>
            <div className="flex flex-wrap justify-center items-center gap-2 mt-4">
                <button
                    className={`px-2 py-1 text-sm border rounded ${pagination.currentPage <= 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-100'
                        }`}
                    disabled={pagination.currentPage <= 1}
                    onClick={() => handlePageChange(1)}
                >
                    First
                </button>
                <button
                    className={`px-2 py-1 text-sm border rounded ${pagination.currentPage <= 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-100'
                        }`}
                    disabled={pagination.currentPage <= 1}
                    onClick={() => handlePageChange(pagination.currentPage - 1)}
                >
                    Previous
                </button>
                {Array.from({ length: pagination.totalPages }, (_, index) => index + 1)
                    .filter((page) => Math.abs(page - pagination.currentPage) <= 1)
                    .map((page) => (
                        <button
                            key={page}
                            className={`px-2 py-1 text-sm border rounded ${pagination.currentPage === page ? 'bg-gray-600 text-white' : 'hover:bg-gray-100'
                                }`}
                            onClick={() => handlePageChange(page)}
                        >
                            {page}
                        </button>
                    ))}
                <button
                    className={`px-2 py-1 text-sm border rounded ${pagination.currentPage >= pagination.totalPages ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-100'
                        }`}
                    disabled={pagination.currentPage >= pagination.totalPages}
                    onClick={() => handlePageChange(pagination.currentPage + 1)}
                >
                    Next
                </button>
                <button
                    className={`px-2 py-1 text-sm border rounded ${pagination.currentPage >= pagination.totalPages ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-100'
                        }`}
                    disabled={pagination.currentPage >= pagination.totalPages}
                    onClick={() => handlePageChange(pagination.totalPages)}
                >
                    Last
                </button>
            </div>
            <div className="mt-6">
                <h3 className="text-lg font-semibold mb-2">THÊM ĐÁNH GIÁ</h3>
                {!getToken() ? (
                    <button
                        onClick={() => router.push('/account/profile')}
                        className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700 transition"
                    >
                        Vui lòng đăng nhập để đánh giá sản phẩm
                    </button>
                ) : (
                    <>
                        <form id="product-review-form" onSubmit={(e) => {
                            e.preventDefault();
                            handleSubmitReview();
                        }}>
                            <div className="flex items-center mb-4">
                                {[1, 2, 3, 4, 5].map((rating) => (
                                    <svg
                                        key={rating}
                                        id={`rating-star-${rating}`}
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill={rating <= reviewRating ? 'currentColor' : 'none'}
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        className={`w-8 h-8 cursor-pointer ${rating <= reviewRating ? 'text-yellow-500' : 'text-gray-300'
                                            }`}
                                        onClick={() => setReviewRating(rating)}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                                        />
                                    </svg>
                                ))}
                            </div>

                            <textarea
                                id="review-text-area"
                                value={reviewText}
                                onChange={(e) => setReviewText(e.target.value)}
                                className="w-full border p-2 rounded mb-4"
                                rows="4"
                                placeholder="Write your review here..."
                            ></textarea>
                            <button
                                id="submit-review-button"
                                type="submit"
                                className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700 transition"
                            >
                                Submit Review
                            </button>
                        </form>

                    </>
                )}
            </div>
        </div>
    );
}
