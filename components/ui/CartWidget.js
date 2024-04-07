"use client"
import Link from "next/link"
import { useCartContext } from "../context/CartContext"
import Image from "next/image"

const CartWidget = () => {
    const { totalQty } = useCartContext()

    return (
        <>
        {/* <Link href={"/cart"} className={`text-base text-slate-100 p-3 flex items-center`}> */}
            <Image 
                src={"/icons/shopping-cart.svg"}
                alt="Cart icon"
                width={30}
                height={30}
            />
            <span>{totalQty() !== 0 && totalQty()}</span>
        {/* </Link> */}
        </>
    )
}

export default CartWidget