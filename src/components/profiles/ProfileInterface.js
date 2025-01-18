export default function ProfileInterface({ user, handleLogout, selectedTab, setSelectedTab }) {
    return (
        <div className="container mx-auto px-4 py-6">
            <h1 className="text-2xl font-bold mb-4">Profile</h1>
            <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/4 bg-100 p-4 rounded shadow-md">
                    <button
                        className={`w-full text-left px-4 py-2 mb-2 rounded ${selectedTab === 'info' ? 'bg-blue-600 text-white' : 'bg-gray-200'
                            }`}
                        onClick={() => setSelectedTab('info')}
                    >
                        Personal Info
                    </button>
                    <button
                        className={`w-full text-left px-4 py-2 mb-2 rounded ${selectedTab === 'orders' ? 'bg-blue-600 text-white' : 'bg-gray-200'
                            }`}
                        onClick={() => setSelectedTab('orders')}
                    >
                        Orders
                    </button>
                    <button
                        className={`w-full text-left px-4 py-2 mb-2 rounded ${selectedTab === 'address' ? 'bg-blue-600 text-white' : 'bg-gray-200'
                            }`}
                        onClick={() => setSelectedTab('address')}
                    >
                        Address Book
                    </button>
                    <button
                        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition mt-6"
                        onClick={handleLogout}
                    >
                        Logout
                    </button>
                </div>
                <div className="md:w-3/4 bg-white p-6 rounded shadow-md">
                    {selectedTab === 'info' && user && (
                        <div>
                            <p className="mb-4">
                                <strong>First Name:</strong> {user.firstname || 'N/A'}
                            </p>
                            <p className="mb-4">
                                <strong>Last Name:</strong> {user.lastname || 'N/A'}
                            </p>
                            <p className="mb-4">
                                <strong>Email:</strong> {user.email || 'N/A'}
                            </p>
                            <p className="mb-4">
                                <strong>Phone:</strong> {user.phone || 'N/A'}
                            </p>
                            <p className="mb-4">
                                <strong>Gender:</strong> {user.gender || 'N/A'}
                            </p>
                            <p className="mb-4">
                                <strong>Joined:</strong>{' '}
                                {user.created_at
                                    ? new Date(user.created_at).toLocaleDateString()
                                    : 'N/A'}
                            </p>
                        </div>
                    )}
                    {selectedTab === 'orders' && <p>No orders available.</p>}
                    {selectedTab === 'address' && <p>No addresses available.</p>}
                </div>
            </div>
        </div>
    );
}
