import React from 'react';
import { menuItems } from '../../utils/adminMenuItems';

const AdminSidebar = ({ activeTab, setActiveTab, role }) => {
    return (
        <div className="w-64 bg-white shadow-md h-screen fixed">
            <div className="p-4 border-b">
                <h1 className="text-xl font-bold">Admin Dashboard</h1>
            </div>
            <nav className="p-4">
                {menuItems.map((item) => (
                    <button
                        key={item.id}
                        onClick={() => setActiveTab(item.id)}
                        className={`w-full text-left p-2 rounded mb-2 flex items-center 
                            ${activeTab === item.id ? 'bg-gray-100' : 'hover:bg-gray-50'}`}
                    >
                        {item.icon}
                        {item.label}
                    </button>
                ))}
            </nav>
        </div>
    );
};

export default AdminSidebar;
