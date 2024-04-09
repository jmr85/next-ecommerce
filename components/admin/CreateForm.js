"use client"

import { useState } from "react"
import { Button } from "../ui/Button"
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"
import { doc, setDoc } from "firebase/firestore"
import { db, storage } from "@/firebase/config"

// Esta función asíncrona recibe dos parámetros:
// 1. 'values' es un objeto que contiene los datos del producto a crear, como su título, descripción, precio, etc.
// 2. 'file' es el archivo de imagen que se asociará al producto.
const createProduct = async (values, file) => {
    const storageRef = ref(storage, values.slug)
    // Aquí se crea una referencia al archivo de almacenamiento (Firebase Storage) 
    // usando la propiedad 'slug' de los 'values' (que probablemente sea un identificador único del producto).
    const fileSnapshop = await uploadBytes(storageRef, file)
    // Se sube el archivo 'file' a la ubicación de almacenamiento especificada por 'storageRef'. 
    // La función 'uploadBytes' devuelve un 'snapshot' del archivo subido.
    const fileURL = await getDownloadURL(fileSnapshop.ref)
    // Después de subir el archivo, se obtiene la URL de descarga del mismo usando 
    // la función 'getDownloadURL' y el 'ref' del 'snapshot' del archivo.
    const docRef = doc(db, "productos", values.slug)
    return setDoc(docRef, {
        ...values,
        image: fileURL

    }).then(() => console.log("Producto creado exitosamente"))
    // Finalmente, se guarda el documento en Firestore, incluyendo todos 
    // los datos del 'values' objeto, y también la URL de la imagen. 
    // Si la operación se completa correctamente, se muestra un mensaje en la consola.
}

const CreateForm = () => {
    const [values, setValues] = useState({ 
        title: '', 
        description: '', 
        inStock: 0,
        price: 0, 
        type: '', 
        slug: '' 
    })

    const [file, setFile] = useState(null)

    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        await createProduct(values)
    }

    return (
        <div className="container m-auto mt-6 max-w-lg">
            <form onSubmit={handleSubmit} className="my-12">
                <label>Slug: </label>
                <input
                    type="text"
                    value={values.slug}
                    required
                    className="p-2 rounded w-full border border-blue-100 block my-4"
                    name="slug"
                    onChange={handleChange}
                />
                <label>Imagen: </label>
                <input
                    type="file"
                    onChange={(e) => setFile(e.target.files[0])}
                    className="p-2 rounded w-full border border-blue-100 block my-4"
                />
                <label>Nombre: </label>
                <input
                    type="text"
                    value={values.title}
                    required
                    className="p-2 rounded w-full border border-blue-100 block my-4"
                    name="title"
                    onChange={handleChange}
                />

                <label>Precio: </label>
                <input
                    type="number"
                    value={values.price}
                    required
                    className="p-2 rounded w-full border border-blue-100 block my-4"
                    name="price"
                    onChange={handleChange}
                />

                <label>Stock: </label>
                <input
                    type="number"
                    value={values.inStock}
                    required
                    className="p-2 rounded w-full border border-blue-100 block my-4"
                    name="inStock"
                    onChange={handleChange}
                />

                <label>Categoria: </label>
                <input
                    type="text"
                    value={values.type}
                    required
                    className="p-2 rounded w-full border border-blue-100 block my-4"
                    name="type"
                    onChange={handleChange}
                />

                <label>Descripción: </label>
                <textarea
                    value={values.description}
                    className="resize-none w-full h-24 p-2 rounded border block border-blue-100 my-4"
                    name="description"
                    onChange={handleChange}
                />

                <Button type="submit" variant={"outline"}>Enviar</Button>
            </form>
        </div>
    )
}

export default CreateForm