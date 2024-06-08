"use client"
import { useCartContext } from "../context/CartContext"
import Image from "next/image"

const CartWidget = () => {
    const { totalQty, isCartLoaded } = useCartContext()

    return (
        <>
        {/* <Link href={"/cart"} className={`text-base text-slate-100 p-3 flex items-center`}> */}
            <Image 
                src={"/icons/shopping-cart.svg"}
                alt="Cart icon"
                width={30}
                height={30}
            />
           
            {isCartLoaded && totalQty() > 0 && (
                <span>{totalQty()}</span>
            )}
        {/* </Link> */}
        </>
    )
}

export default CartWidget