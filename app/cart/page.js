"use client"
import { mockData } from "../../data/products"
import CartItem from "@/components/cart/CartItem"

const CartPage = () => {

  const cart = mockData;//solo imprime todo el listado por ahora

  return (
    <main className="container m-auto">
    <h2 className="text-2xl my-10 border-b pb-4">Tu compra</h2>
    <ul>
      {/* <CartItem item={item} key={item.slug}/> */}
      {
        cart.map((item) => <CartItem item={item} key={item.slug}/>)
      }
    </ul>
</main>
  )
}

export default CartPage