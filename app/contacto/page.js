import React from 'react'
import { Header } from '../components/ui/Header'

export const metadata = {
  title: 'Contacto - Devbookstore',
  description: 'Contacto de Devbookstore'
}

const Contacto = () => {
  return (
    <>
        <Header/>
        <main className="container m-auto">
            <h1 
                className="text-4xl text-blue-600
            font-bold my-4">
                Contacto
            </h1>
        <hr/>
        <p>Pagina de contacto</p>
        </main>
    </>
  )
}

export default Contacto