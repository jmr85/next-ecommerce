import LogoutButton from "@/components/admin/LogoutButton"
import { db } from "@/firebase/config"
import { collection, getDocs } from "firebase/firestore"

const getOrders = async () => {
    const ordersRef = collection(db, "orders")
    const querySnapshot = await getDocs(ordersRef)
    const docs = querySnapshot.docs.map(doc => ({...doc.data(), id: doc.id}))
    return docs
}

const Orders = async () => {
    const orders = await getOrders()
    return (
        <div className="container m-auto mt-6">
            <LogoutButton />
            <h2 className="text-2xl my-10 border-b pb-4">Ordenes</h2>
            <ul>
                {
                    orders.map(order => (
                        <li key={order.id}>
                            <p>Comprador: {order.client.nombre}</p>
                            <p>Fecha: {new Date(`${order.client.date}`)}</p>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Orders