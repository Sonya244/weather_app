import { useState, useEffect } from 'react';

export function useDeboounce<T>(value: T, delay: number = 500): T {
    const [debounceValue, setDebaouncedValue] = useState(value);
    useEffect(() => {
        const handler = setTimeout(() => {
            setDebaouncedValue(value);
        }, delay);
        return () => clearTimeout(handler);
    }, [value, delay]);
    return debounceValue;
}