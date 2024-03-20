import React from 'react'
import { Header } from '../components/ui/Header'

export const metadata = {
  title: 'Nosotros - Devbookstore',
  description: 'Conoce nuestra historia'
}

const Nosotros = () => {
  return (
    <>
      <Header/>
      <main className="container m-auto">
        <h1
          className="text-4xl text-blue-600
          text-bold my-4"
        >Nosotros</h1>
        <hr/>
        <p className="text-base mt-4">
          Nuestra historia...
        </p>
      </main>
    </>
  )
}

export default Nosotros