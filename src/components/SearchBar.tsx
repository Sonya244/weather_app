import React, { useState } from 'react';
import { useDebounce } from '../useDebounce';

type SearchBarProps = {
    onSearch: (city: string) => void;
}

const [suggestions, setSuggestions] = useState<string[]>([]);

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
    const [inputValue, setInputValue] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!inputValue.trim()) return;

        onSearch(inputValue);
        setInputValue(''); 
    }

    
    return (
        <form onSubmit={handleSubmit}>
            <input
                className='mt-10 outline-none text-white text-center bg-[#262429] opacity-40 rounded-xl p-[4px]'
                type='text'
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder='enter city name'
            />
        </form>
    )

}

export default SearchBar;
