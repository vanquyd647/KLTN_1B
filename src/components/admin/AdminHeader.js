// components/admin/AdminHeader.js
import React from 'react';

const AdminHeader = ({ user, role, handleLogout }) => {
    // Function để format tên người dùng
    const getFullName = () => {
        if (user?.firstname && user?.lastname) {
            const formattedFirstName = user.firstname.charAt(0).toUpperCase() + user.firstname.slice(1).toLowerCase();
            const formattedLastName = user.lastname.charAt(0).toUpperCase() + user.lastname.slice(1).toLowerCase();
            return `${formattedFirstName} ${formattedLastName}`;
        }
        return 'Loading...';
    };

    // Function để hiển thị role phù hợp
    const displayRole = () => {
        switch(role?.toLowerCase()) {
            case 'superadmin':
                return 'MANAGER';
            case 'admin':
                return 'STAFF';
            default:
                return role?.toUpperCase() || '';
        }
    };

    return (
        <header className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
            <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-500">{displayRole()}</span>
            </div>
            <div className="flex items-center space-x-4">
                <div className="flex items-center">
                    <div className="flex flex-col mr-4">
                        <span className="text-sm text-gray-600 font-medium">
                            {getFullName()}
                        </span>
                        <span className="text-xs text-gray-500">
                            {user?.email}
                        </span>
                    </div>
                    <button
                        onClick={handleLogout}
                        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-200"
                    >
                        Đăng xuất
                    </button>
                </div>
            </div>
        </header>
    );
};

export default AdminHeader;
