import { useState, useRef, useEffect } from 'react';
import { debounce } from 'lodash';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { searchProductsByNameAndColor } from '../store/slices/productSlice';

export default function SearchBar() {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const searchInputRef = useRef(null);
    const dispatch = useDispatch();
    const router = useRouter();

    // Tách logic tìm kiếm
    const performSearch = async (term) => {
        if (term.trim().length >= 2) {
            try {
                const result = await dispatch(searchProductsByNameAndColor({
                    keyword: term.trim(),
                    page: 1,
                    limit: 10,
                    sort: 'newest',
                }));
                if (result.payload?.data?.products) {
                    setSearchResults(result.payload.data.products);
                }
            } catch (error) {
                console.error('Search error:', error);
                setSearchResults([]);
            }
        } else {
            setSearchResults([]);
        }
    };

    // Debounce search
    const debouncedSearch = useRef(debounce((term) => performSearch(term), 300)).current;

    useEffect(() => {
        debouncedSearch(searchTerm);
        return () => debouncedSearch.cancel();
    }, [searchTerm]);

    const handleSearchInput = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            if (searchTerm.trim().length >= 2) {
                router.push(`/search?keyword=${encodeURIComponent(searchTerm.trim())}`);
                setSearchTerm('');
                setSearchResults([]);
            }
        }
    };

    return (
        <div className="relative">
            <input
                ref={searchInputRef}
                type="search"
                placeholder="Tìm kiếm sản phẩm..."
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-500 text-black"
                value={searchTerm}
                onChange={handleSearchInput}
                onKeyDown={handleKeyDown}
                autoComplete="off"
            />
            <div className="absolute bg-white shadow-lg rounded-lg z-50 mt-2 w-full">
                {searchResults.map((product) => (
                    <div key={product.id} className="p-2 hover:bg-gray-100">
                        {product.product_name}
                    </div>
                ))}
            </div>
        </div>
    );
}
