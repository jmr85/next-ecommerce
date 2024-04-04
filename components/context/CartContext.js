'use client'
import { createContext, useContext } from 'react'

const CartContext = createContext();

export  const useCartContext = () => useCartContext(CartContext)

export const CartProvider = ({children}) => {
    return (
        <CartContext.CartProvider>
            {children}
        </CartContext.CartProvider> 
    )
}