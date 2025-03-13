import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import dynamic from 'next/dynamic';

// Import Leaflet map components dynamically (without SSR)
const MapContainer = dynamic(
    () => import('react-leaflet').then((mod) => mod.MapContainer),
    { ssr: false }
);
const TileLayer = dynamic(
    () => import('react-leaflet').then((mod) => mod.TileLayer),
    { ssr: false }
);
const Marker = dynamic(
    () => import('react-leaflet').then((mod) => mod.Marker),
    { ssr: false }
);
const Popup = dynamic(
    () => import('react-leaflet').then((mod) => mod.Popup),
    { ssr: false }
);

// Dữ liệu mẫu các cửa hàng
const storeLocations = [
    {
        id: 1,
        name: 'Fashion Store - Quận 1',
        address: '123 Nguyễn Huệ, Quận 1, TP. HCM',
        phone: '028.1234.5678',
        hours: '09:00 - 22:00 (Hàng ngày)',
        coordinates: { lat: 10.773, lng: 106.703 },
        region: 'Hồ Chí Minh',
    },
    {
        id: 2,
        name: 'Fashion Store - Quận 7',
        address: '456 Nguyễn Lương Bằng, Quận 7, TP. HCM',
        phone: '028.8765.4321',
        hours: '09:00 - 22:00 (Hàng ngày)',
        coordinates: { lat: 10.728, lng: 106.714 },
        region: 'Hồ Chí Minh',
    },
    {
        id: 3,
        name: 'Fashion Store - Hoàn Kiếm',
        address: '78 Hàng Bông, Hoàn Kiếm, Hà Nội',
        phone: '024.1234.5678',
        hours: '08:30 - 21:30 (Hàng ngày)',
        coordinates: { lat: 21.031, lng: 105.848 },
        region: 'Hà Nội',
    },
    {
        id: 4,
        name: 'Fashion Store - Cầu Giấy',
        address: '234 Xuân Thuỷ, Cầu Giấy, Hà Nội',
        phone: '024.8765.4321',
        hours: '08:30 - 21:30 (Hàng ngày)',
        coordinates: { lat: 21.039, lng: 105.793 },
        region: 'Hà Nội',
    },
    {
        id: 5,
        name: 'Fashion Store - Đà Nẵng',
        address: '56 Trần Phú, Hải Châu, Đà Nẵng',
        phone: '0236.123.456',
        hours: '09:00 - 21:00 (Hàng ngày)',
        coordinates: { lat: 16.068, lng: 108.221 },
        region: 'Đà Nẵng',
    },
];

const regions = ['Tất cả', 'Hồ Chí Minh', 'Hà Nội', 'Đà Nẵng'];

// Placeholder image từ nguồn bên ngoài để đảm bảo luôn có sẵn
const PLACEHOLDER_IMAGE = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjIwMCIgaGVpZ2h0PSIyMDAiIGZpbGw9IiNFNUU3RUIiLz48cGF0aCBkPSJNMTAwIDg2QzEwNS41MjMgODYgMTEwIDgxLjUyMjggMTEwIDc2QzExMCA3MC40NzcyIDEwNS41MjMgNjYgMTAwIDY2Qzk0LjQ3NzIgNjYgOTAgNzAuNDc3MiA5MCA3NkM5MCA4MS41MjI4IDk0LjQ3NzIgODYgMTAwIDg2WiIgZmlsbD0iIzk0QTNiOCIvPjxwYXRoIGQ9Ik0xMzUuNSAxNTUuNUg2NS41VjE1My45Mjg2QzY1LjUgMTMyLjQ3NyA4My4xMTkzIDExNSAxMDUgMTE1QzEyNi44MDcgMTE1IDE0NC41IDEzMi40NzcgMTQ0LjUgMTUzLjkyODZWMTU1LjVIMTM1LjVaIiBmaWxsPSIjOTRBM0I4Ii8+PHBhdGggZD0iTTEwMCAxMzNDMTExLjA0NiAxMzMgMTIwIDEyNC4wNDYgMTIwIDExM0MxMjAgMTAxLjk1NCAxMTEuMDQ2IDkzIDEwMCA5M0M4OC45NTQzIDkzIDgwIDEwMS45NTQgODAgMTEzQzgwIDEyNC4wNDYgODguOTU0MyAxMzMgMTAwIDEzM1oiIGZpbGw9IiM5NEEzQjgiLz48L3N2Zz4=';

const StoreLocations = () => {
    const [selectedRegion, setSelectedRegion] = useState('Tất cả');
    const [filteredStores, setFilteredStores] = useState(storeLocations);
    const [selectedStore, setSelectedStore] = useState(null);
    const [mapCenter, setMapCenter] = useState({ lat: 16.463, lng: 107.590 }); // Trung tâm Việt Nam
    const [mapZoom, setMapZoom] = useState(6);
    const [mapLoaded, setMapLoaded] = useState(false);

    // Effect để xác nhận component được mount ở client-side
    useEffect(() => {
        setMapLoaded(true);
    }, []);

    // Filter stores by region
    useEffect(() => {
        if (selectedRegion === 'Tất cả') {
            setFilteredStores(storeLocations);
        } else {
            setFilteredStores(storeLocations.filter(store => store.region === selectedRegion));
        }

        // Adjust map center and zoom based on selected region
        if (selectedRegion === 'Hồ Chí Minh') {
            setMapCenter({ lat: 10.773, lng: 106.703 });
            setMapZoom(12);
        } else if (selectedRegion === 'Hà Nội') {
            setMapCenter({ lat: 21.031, lng: 105.848 });
            setMapZoom(12);
        } else if (selectedRegion === 'Đà Nẵng') {
            setMapCenter({ lat: 16.068, lng: 108.221 });
            setMapZoom(13);
        } else {
            setMapCenter({ lat: 16.463, lng: 107.590 });
            setMapZoom(6);
        }
    }, [selectedRegion]);

    // Highlight store on map when selected from list
    const handleStoreSelect = (store) => {
        setSelectedStore(store);
        setMapCenter(store.coordinates);
        setMapZoom(15);
    };

    // Find nearest store (simulated function)
    const findNearestStore = () => {
        alert('Tính năng đang được phát triển. Xin vui lòng sử dụng tính năng lọc theo khu vực.');
    };

    return (
        <>
            <Head>
                <title>Hệ Thống Cửa Hàng | Fashion Store</title>
                <meta name="description" content="Danh sách các cửa hàng Fashion Store trên toàn quốc" />
                {/* Add Leaflet CSS */}
                <link
                    rel="stylesheet"
                    href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
                    integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
                    crossOrigin=""
                />
            </Head>

            <Header />

            <main className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold mb-8 text-center">Hệ Thống Cửa Hàng</h1>

                <div className="bg-blue-50 p-6 rounded-lg mb-8">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                        <div>
                            <h2 className="text-xl font-semibold mb-2">Tìm cửa hàng gần bạn</h2>
                            <p className="text-gray-600">Hiện tại Fashion Store có {storeLocations.length} cửa hàng trên toàn quốc</p>
                        </div>
                        <button
                            onClick={findNearestStore}
                            className="mt-4 md:mt-0 bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-full transition-colors duration-200 flex items-center"
                        >
                            <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            Tìm cửa hàng gần nhất
                        </button>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-6">
                        {regions.map((region) => (
                            <button
                                key={region}
                                className={`px-4 py-2 rounded-full ${selectedRegion === region
                                        ? 'bg-blue-600 text-white'
                                        : 'bg-white text-gray-700 hover:bg-gray-100'
                                    }`}
                                onClick={() => setSelectedRegion(region)}
                            >
                                {region}
                            </button>
                        ))}
                    </div>

                    {/* Map Container */}
                    <div style={{ height: '500px', width: '100%', borderRadius: '8px', overflow: 'hidden' }}>
                        {mapLoaded && (
                            <MapContainer
                                center={[mapCenter.lat, mapCenter.lng]}
                                zoom={mapZoom}
                                style={{ height: '100%', width: '100%' }}
                                key={`${mapCenter.lat}-${mapCenter.lng}-${mapZoom}`}
                            >
                                <TileLayer
                                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                />
                                {filteredStores.map((store) => (
                                    <Marker
                                        key={store.id}
                                        position={[store.coordinates.lat, store.coordinates.lng]}
                                    >
                                        <Popup>
                                            <div className="p-1">
                                                <h3 className="font-bold">{store.name}</h3>
                                                <p className="text-sm">{store.address}</p>
                                                <p className="text-sm">{store.phone}</p>
                                            </div>
                                        </Popup>
                                    </Marker>
                                ))}
                            </MapContainer>
                        )}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredStores.map(store => (
                        <div
                            key={store.id}
                            className={`border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-200 ${selectedStore?.id === store.id ? 'ring-2 ring-blue-500' : ''
                                }`}
                            onClick={() => handleStoreSelect(store)}
                        >
                            <div className="h-48 overflow-hidden bg-gray-100 flex items-center justify-center">
                                {/* Sử dụng placeholder SVG cố định thay vì load từ file */}
                                <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                                    <div className="text-gray-500 flex flex-col items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                        </svg>
                                        <span className="text-sm font-medium">{store.name}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="p-4">
                                <h3 className="text-lg font-bold text-gray-900 mb-2">{store.name}</h3>
                                <div className="flex items-start mb-2">
                                    <svg className="w-5 h-5 text-gray-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    <span className="text-gray-600 text-sm">{store.address}</span>
                                </div>
                                <div className="flex items-center mb-2">
                                    <svg className="w-5 h-5 text-gray-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                    <span className="text-gray-600 text-sm">{store.phone}</span>
                                </div>
                                <div className="flex items-center">
                                    <svg className="w-5 h-5 text-gray-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span className="text-gray-600 text-sm">{store.hours}</span>
                                </div>
                                <button
                                    className="mt-4 w-full py-2 bg-gray-800 hover:bg-gray-700 text-white rounded transition-colors duration-200"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        window.open(`https://www.google.com/maps?q=${store.coordinates.lat},${store.coordinates.lng}`, '_blank');
                                    }}
                                >
                                    Chỉ đường
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {filteredStores.length === 0 && (
                    <div className="text-center py-8">
                        <p className="text-gray-600">Không tìm thấy cửa hàng nào trong khu vực này.</p>
                    </div>
                )}
            </main>

            <Footer />
        </>
    );
};

export default StoreLocations;
