'use client'
import { createContext, useContext, useState } from 'react'

const CartContext = createContext();

export const useCartContext = () => useContext(CartContext)

export const CartProvider = ({children}) => {

    const [cart, setCart] = useState([])
    console.log(cart)

    const addToCart = (item) => {
        setCart([...cart, item]);
    }

    return (
        <CartContext.Provider value={{addToCart}}>
            {children}
        </CartContext.Provider> 
    )
}