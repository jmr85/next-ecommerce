'use client'
import CartList from "@/components/cart/CartList"
import ClientForm from "@/components/cart/ClientForm"
import { useCartContext } from "@/components/context/CartContext"
import { Button } from "@/components/ui/Button"
import Link from "next/link"

const CartPage = () => {
  const { cart } = useCartContext()
    return (
      <>
        { 
          cart.length ?
            <main className="container m-auto">
                <h2 className="text-2xl my-10 border-b pb-4">Tu compra</h2>
                <CartList />
                <ClientForm />
            </main>
          :
            <main className="container m-auto">
              <h2 className="text-2xl text-center my-10 border-b pb-4">
                ¿No sabés qué comprar? ¡Miles de productos te esperan!
              </h2>
              <div className="container my-8 text-center">
                  <Link href={"/"}>
                    <Button variant={"outline"}>Descubrir Broductos</Button>
                  </Link>
              </div>
            </main>
        } 
      </>
    )
}

export default CartPage