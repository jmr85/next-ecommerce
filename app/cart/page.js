"use client"
import CartItem from "@/components/cart/CartItem"
import { useCartContext } from "@/components/context/CartContext"
import { Button } from "@/components/ui/Button"
import Link from "next/link"

const CartPage = () => {

  const {cart, currencyFormat,totalPrice, emptyCart} = useCartContext()

  return (
    <>
      {
        cart.length > 0 ?
          <main className="container m-auto">
            <h2 className="text-2xl my-10 border-b pb-4">Tu compra</h2>
            <ul>
              {
                cart.map((item) => <CartItem item={item} key={item.slug}/>)
              }
            </ul>
            <div className="text-center my-8">
                <label className="mx-4">Total price: {currencyFormat(totalPrice(),'es-AR', 'ARS')}</label>
                <Button variant={"outline"} onClick={() => emptyCart()}>Vaciar carrito</Button>
            </div>
          </main>
      :
        <main className="container m-auto">
          <h2 className="text-2xl text-center my-10 border-b pb-4">
            ¿No sabés qué comprar? ¡Miles de productos te esperan!
          </h2>
          <div className="container my-8 text-center">
              <Link href={"/"}>
                <Button variant="outline">Descubrir Broductos</Button>
              </Link>
          </div>
        </main>
      }
    </>
  )
}

export default CartPage