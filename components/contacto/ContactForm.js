"use client"
import { useState } from "react"
import { Button } from "../ui/Button"


const ContactForm = () => {
    const [values, setValues] = useState({
        email: '',
        text: ''
    })

    const handleChange = (e) => { 
        setValues({ 
            ...values, 
            [e.target.name]: e.target.value
        })
     }

    const handleSubmit = async (e) => {
        e.preventDefault()

        console.log(values)

        await fetch('http://${process.env.VERCEL_URL}/api/contacto', {
            method: 'POST',
            body: JSON.stringify(values)
        })
    }

    return (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 my-12">
                {/* <div className="flex items-center"> */}
                <input
                    type="email"
                    required
                    placeholder="Tu email"
                    className="p-2 rounded  border border-blue-100 block my-4 mx-80"
                    name="email"
                    onChange={handleChange}
                />
                <textarea
                    required
                    placeholder="Déjanos un mensaje"
                    className="resize-none  h-24 p-2 rounded border block border-blue-100 my-4 mx-80"
                    name="text"
                    onChange={handleChange}
                />

                <Button type="submit" variant={"outline"} className="mx-80">Enviar</Button>
                {/* </div> */}
            </form>
    )
}

export default ContactForm