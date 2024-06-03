'use client'
import { createContext, useContext, useState } from 'react'
import useLocalStorage from '../hooks/useLocalStorage';

const CartContext = createContext();

export const useCartContext = () => useContext(CartContext)

export const CartProvider = ({children}) => {

    // "items" del hook que se pasa como key es el setCart de localStorage
    const [cart, setCart] = useLocalStorage([], "items");

    console.log(cart)

    const addToCart = (item) => {
        setCart([...cart, item]);
    }

    const isInCart = (slug) => {
        return cart.some(item => item.slug === slug)
    }

    const totalQty = () => {
        return cart.reduce((acumulador, item) => acumulador + item.quantity, 0)
    }

    /** currencyFormat(1234.56, 'es-AR', 'ARS') // Salida: $1,234.56
        currencyFormat(1234.56, 'en-US', 'USD') // Salida: $1,234.56
        currencyFormat(1234.56, 'de-DE', 'EUR') // Salida: 1.234,56 €
     */
    const currencyFormat = (value, country, currency) => {
        return new Intl.NumberFormat(`${country}`, {
          style: 'currency',
          currency: `${currency}`
        }).format(value);
      };

    const totalPrice = () => {      
        return cart.reduce((acumulador, item) => acumulador + item.quantity * item.price, 0);
    }

    const removeItem = (slug) => {
        setCart( cart.filter(i => i.slug !== slug) )
    }

    const emptyCart = () => {
        setCart([])
    }

    return (
        <CartContext.Provider value={{
                cart,
                addToCart,
                isInCart, 
                totalQty, 
                currencyFormat,
                totalPrice,
                removeItem, 
                emptyCart
            }}>
            {children}
        </CartContext.Provider> 
    )
}