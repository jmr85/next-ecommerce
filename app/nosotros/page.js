'use client'
import { Button } from '@/components/ui/Button'
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
          className="text-center text-4xl text-blue-600
          text-bold my-4"
        >Nosotros</h1>
        <hr/>
        <Button onClick={() => router.back()}>
          Volver
        </Button>
        <p className="text-base mt-4">
          Occaecat et nostrud veniam fugiat exercitation mollit ad in mollit sint ad elit minim. Sit mollit cillum sint aute mollit non enim magna eu incididunt minim dolore. Officia culpa deserunt pariatur culpa officia laboris velit nisi. Exercitation ea laborum id sit cillum ad do cillum occaecat culpa.

Duis excepteur voluptate veniam velit esse cillum excepteur dolore eu exercitation. Et dolor nostrud incididunt velit ullamco. Ut duis ut veniam aute eiusmod ut reprehenderit et mollit nostrud. Eu ut quis duis ut commodo deserunt nulla laboris id. Quis pariatur fugiat veniam occaecat mollit amet nisi esse est sit pariatur qui exercitation ea.

Voluptate laboris ipsum culpa deserunt dolore proident excepteur duis sunt ad ex. Ea reprehenderit commodo eu in. Incididunt cupidatat dolore anim deserunt eiusmod qui Lorem nisi eiusmod irure ex est velit proident. Proident veniam adipisicing nostrud exercitation aute eiusmod proident commodo. Eiusmod cillum ut pariatur deserunt anim velit minim. Aliqua excepteur pariatur consectetur velit irure ea. Ex aute fugiat velit anim.

Id ea in ad ad in. Eiusmod excepteur est minim mollit nostrud ex amet velit adipisicing officia. Tempor enim enim dolore eiusmod. Eiusmod nisi ut qui id ipsum esse laboris adipisicing elit adipisicing ea labore et consectetur. Eiusmod commodo deserunt esse magna exercitation reprehenderit cupidatat do. Dolor qui ut officia mollit nostrud mollit cillum consequat excepteur minim veniam laborum ex. Est dolor ipsum velit anim dolore sunt ut amet officia ad cillum anim.

Occaecat ipsum commodo ipsum duis laboris duis. Nulla magna dolore ullamco magna ex laborum sit aute officia consectetur non. Eiusmod exercitation ex mollit ea mollit officia sit deserunt velit reprehenderit irure cillum sunt laboris. Pariatur aliqua Lorem pariatur quis et deserunt cupidatat cupidatat. Eu velit consectetur proident irure.
        </p>
      </main>
    </>
  )
}

export default Nosotros