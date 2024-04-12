"use client"
import CartItem from "@/components/cart/CartItem"
import { useCartContext } from "@/components/context/CartContext"
import { Button } from "@/components/ui/Button"


const CartList = () => {
    const { cart, totalPrice, currencyFormat, emptyCart } = useCartContext()

    return (
        <div>
            <ul>
                {
                    cart.map((item) => <CartItem item={item} key={item.slug}/>)
                }
            </ul>
            <div className="text-center my-8">
                <p className="text-2xl my-4 border-b pb-4">
                    Total: {currencyFormat(totalPrice(), 'es-AR', 'ARS')}
                </p>
                <Button variant={"outline"} onClick={() => emptyCart()}>Vaciar carrito</Button>
            </div>    
        </div>
    )
}

export default CartList