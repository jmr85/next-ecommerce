"use client"
import { useState } from "react"
import { Button } from "../ui/Button"
import { useCartContext } from "../context/CartContext"
import { useAuthContext } from "../context/AuthContext"
import { db } from "@/firebase/config"
import { setDoc, doc, Timestamp, getDoc, writeBatch } from "firebase/firestore"


const createOrder = async (values, items) => {
    //items es cart (array)
    const docsPromises = items.map((item)=>{
        const docRef = doc(db, "productos", item.slug)
        return getDoc(docRef) // devuelve promesa, me parece que deberia devolver  un array
    })

    const docs = await Promise.all(docsPromises)
    const batch = writeBatch(db)
    const outOfStock = []

    docs.forEach(doc => {
       const {inStock, slug} = doc.data()
       const itemInCart = items.find(item => item.slug === slug)
       
       if(itemInCart.quantity <= inStock){
           batch.update(doc.ref, {inStock: inStock - itemInCart.quantity})
       }else{
           outOfStock.push(itemInCart)
       }
    })

    if(outOfStock.length > 0) return outOfStock

    const order = {
        client: values,
        items: items.map(item => ({
            title: item.title,
            price: item.price,
            slug: item.slug,
            quantity: item.quantity
        })),
        date: Timestamp.fromDate(new Date())
    }

    const docId = Timestamp.fromDate(new Date()).toMillis()
    const orderRef = doc(db, "orders", String(docId))
    await batch.commit()
    await setDoc(orderRef, order)

    return docId
}

const ClientForm = () => {

    const { user } = useAuthContext()
    const { cart } = useCartContext()

    const [values, setValues] = useState({
        email: user.email,
        direccion: '',
        nombre: user.displayName
    })

    const handleChange = (e) => { 
        setValues({ 
            ...values, 
            [e.target.name]: e.target.value
        })
     }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const result = await createOrder(values, cart)
        console.log("RESULT ---->>>>>>>>>>> ", result)
    }

    return (
        <form onSubmit={handleSubmit} className="my-12">
            <input
                type="nombre"
                required
                placeholder="Tu nombre"
                className="p-2 rounded w-1/2 border border-blue-100 block my-4"
                name="nombre"
                onChange={handleChange}
            />
            <input
                type="direccion"
                required
                placeholder="Tu dirección"
                className="p-2 rounded w-1/2 border border-blue-100 block my-4"
                name="direccion"
                onChange={handleChange}
            />
            <input
                type="email"
                required
                placeholder="Tu email"
                className="p-2 rounded w-1/2 border border-blue-100 block my-4"
                name="email"
                onChange={handleChange}
            />

            <Button type="submit">Terminar mi compra</Button>
        </form>
    )
}

export default ClientForm