'use client'
import Button from '../components/ui/Button'
import { useRouter } from 'next/navigation'

// "metadata" se usa principalmente para SSR (información para buscadores), surgiendo el conflicto
// export const metadata = {
//   title: 'Nosotros - Devbookstore',
//   description: 'Conoce nuestra historia'
// }

const Nosotros = () => {

  const router = useRouter()

  return (
    <>
      <main className="container m-auto">
        <h1
          className="text-4xl text-blue-600
          text-bold my-4"
        >Nosotros</h1>
        <hr/>
        <p className="text-base mt-4">
          Sitio en construccion
        </p>
        <Button onClick={() => router.back()}>
          Volver
        </Button>
      </main>
    </>
  )
}

export default Nosotros