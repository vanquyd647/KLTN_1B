import React, { useState, useEffect } from 'react';

export default function AnnouncementBar() {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const announcementHidden = localStorage.getItem('hideShippingAnnouncement');
        if (announcementHidden && new Date().getTime() < parseInt(announcementHidden)) {
            setIsVisible(false);
        }
    }, []);

    const hideAnnouncement = () => {
        const expireTime = new Date().getTime() + 24 * 60 * 60 * 1000;
        localStorage.setItem('hideShippingAnnouncement', expireTime.toString());
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="bg-gray-800 text-white relative">
            <div className="flex items-center justify-center py-2 px-4">
                <span className="mr-2">🚚</span>
                <p className="text-sm font-medium text-center">MIỄN PHÍ VẬN CHUYỂN CHO ĐƠN HÀNG TỪ 200K</p>
            </div>
            <button
                onClick={hideAnnouncement}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-200"
                aria-label="Đóng thông báo"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
            </button>
        </div>
    );
}
