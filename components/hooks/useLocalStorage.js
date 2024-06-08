'use client'
import { useState, useEffect } from 'react'

const useLocalStorage = (defaultValue, key) => {
    const [value, setValue] = useState(defaultValue);

    useEffect(() => {
        // Este efecto solo se ejecuta en el cliente
        const saved = localStorage.getItem(key);
        if (saved !== null) {
            setValue(JSON.parse(saved));
        }
    }, [key]);

    useEffect(() => {
        // Este efecto también solo se ejecuta en el cliente
        if (typeof window !== "undefined") {
            localStorage.setItem(key, JSON.stringify(value));
        }
    }, [key, value]);

    return [value, setValue];
}

export default useLocalStorage;