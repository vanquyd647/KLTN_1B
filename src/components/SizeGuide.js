// components/SizeGuide.js
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'

export default function SizeGuide({ isOpen, closeModal }) {
    const [activeTab, setActiveTab] = useState('shirt');

    const tabs = [
        { id: 'shirt', label: 'Áo' },
        { id: 'pants', label: 'Quần' },
        { id: 'shoes', label: 'Giày' },
    ];

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

    const currentGuide = sizeGuides[activeTab];

    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-50" onClose={closeModal}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black bg-opacity-25" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel className="w-full max-w-3xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900 mb-4">
                                    Hướng dẫn chọn size
                                </Dialog.Title>

                                {/* Tabs */}
                                <div className="border-b border-gray-200 mb-4">
                                    <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                                        {tabs.map((tab) => (
                                            <button
                                                key={tab.id}
                                                onClick={() => setActiveTab(tab.id)}
                                                className={`
                          ${activeTab === tab.id
                                                        ? 'border-blue-500 text-blue-600'
                                                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                                    }
                          whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm
                        `}
                                            >
                                                {tab.label}
                                            </button>
                                        ))}
                                    </nav>
                                </div>

                                <div className="mt-2 overflow-x-auto">
                                    <table className="min-w-full border-collapse border border-gray-200">
                                        <thead>
                                            <tr>
                                                {currentGuide.headers.map((header, index) => (
                                                    <th key={index} className="border border-gray-200 px-4 py-2 bg-gray-50">
                                                        {header}
                                                    </th>
                                                ))}
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {currentGuide.data.map((row, rowIndex) => (
                                                <tr key={rowIndex}>
                                                    {row.map((cell, cellIndex) => (
                                                        <td key={cellIndex} className="border border-gray-200 px-4 py-2 text-center">
                                                            {cell}
                                                        </td>
                                                    ))}
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>

                                    <div className="mt-4 space-y-2 text-sm text-gray-600">
                                        <p className="font-medium">Cách đo:</p>
                                        {activeTab === 'shirt' && (
                                            <ul className="list-disc pl-5 space-y-1">
                                                <li>Ngực: Đo vòng ngực tại điểm rộng nhất</li>
                                                <li>Vai: Đo từ đầu vai trái đến đầu vai phải</li>
                                                <li>Dài tay: Đo từ đầu vai đến cổ tay</li>
                                            </ul>
                                        )}
                                        {activeTab === 'pants' && (
                                            <ul className="list-disc pl-5 space-y-1">
                                                <li>Vòng eo: Đo vòng eo tại vị trí thon nhất</li>
                                                <li>Vòng mông: Đo vòng mông tại điểm rộng nhất</li>
                                                <li>Dài quần: Đo từ eo đến mắt cá chân</li>
                                            </ul>
                                        )}
                                        {activeTab === 'shoes' && (
                                            <ul className="list-disc pl-5 space-y-1">
                                                <li>Đo chiều dài chân vào cuối ngày</li>
                                                <li>Đứng thẳng khi đo</li>
                                                <li>Nên chọn size lớn hơn 0.5-1cm so với chiều dài chân</li>
                                            </ul>
                                        )}
                                        <p className="mt-4 text-yellow-600">* Bảng size chỉ mang tính chất tham khảo</p>
                                    </div>
                                </div>

                                <div className="mt-4">
                                    <button
                                        type="button"
                                        className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none"
                                        onClick={closeModal}
                                    >
                                        Đóng
                                    </button>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    )
}
