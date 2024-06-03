'use client'
import { useState, useEffect } from 'react'

const useLocalStorage = (defaultValue, key) => {
    const [value, setValue] = useState(() => {
        if (typeof window !== "undefined") {
            const saved = window.localStorage.getItem(key);
            return saved !== null
                ?
                JSON.parse(saved)
                :
                defaultValue
        }
    });

    useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

    return [value, setValue];
}

export default useLocalStorage;