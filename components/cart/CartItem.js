import { Button } from "../ui/Button"
import Image from "next/image"
import { useCartContext } from "../context/CartContext"

const CartItem = ({item}) => {

  const {removeItem, currencyFormat} = useCartContext()
    
  return (
        <div className="container text-center"> 
            <li className="shadow flex justify-between items-center max-w-xl gap-6 p-4 my-4">
                <Image
                    src={`/imgs/products/${item.image}`}
                    alt={item.title}
                    width={80}                
                    height={80}                
                />
                <div>
                    <h3>{item.title}</h3>
                    <p className="text-sm font-semibold">{currencyFormat(item.price * item.quantity, 'es-AR', 'ARS')}</p>
                    <p className="text-sm">Cantidad: {item.quantity}</p>
                </div>

                <Button 
                    onClick={() => removeItem(item.slug)}
                    className="bg-red-600">
                    <Image
                        src={'/icons/trash-icon.svg'}
                        alt="Trash icon"
                        width={30}
                        height={30}
                    />
                </Button>
            </li>
        </div>
  )
}

export default CartItem