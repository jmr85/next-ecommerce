"use client"
import Link from "next/link"
import { useState } from "react"
import Counter from "../ui/Counter"
import { Button } from "../ui/Button"
import { useCartContext } from "../context/CartContext"

const QtySelector = ({ item }) => {
    const {addToCart, isInCart} = useCartContext();
    const [quantity, setQuantity] = useState(1)

    const handleAdd = () => {
            addToCart({
                ...item,
                quantity
            })
    }

    return (
        <div className="flex flex-col gap-5 mt-6">
            {
                isInCart(item.slug)
                    ?   <Link
                            href={"/cart"}
                            className="rounded-lg py-2 px-4 bg-blue-600 text-white text-center">
                            Terminar mi compra
                        </Link>
                    :   <>
                            <Counter max={item.inStock} counter={quantity} setCounter={setQuantity} />
                            <Button className="w-full hover:bg-blue-600" onClick={handleAdd}>Agregar al carrito</Button>
                        </>
            }
        </div>
    )
}

export default QtySelector