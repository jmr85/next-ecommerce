import { Button } from "../ui/Button"
import Image from "next/image"

const CartItem = ({item}) => {
  return (
        <li className="shadow flex justify-between items-center max-w-xl gap-6 p-4 my-4">
            <Image
                src={`/imgs/products/${item.image}`}
                alt={item.title}
                width={80}                
                height={80}                
            />
            <div>
                <h3>{item.title}</h3>
                <p className="text-sm font-semibold">${item.price * item.quantity}</p>
                <p className="text-sm">Cantidad: {item.quantity}</p>
            </div>

            <Button className="bg-red-600">
                <Image
                    src={'/icons/trash-icon.svg'}
                    alt="Trash icon"
                    width={30}
                    height={30}
                />
            </Button>
        </li>
  )
}

export default CartItem