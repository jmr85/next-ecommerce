import { Suspense } from 'react';
import CategoriesMenu from '@/components/products/CategoriesMenu'
import ProductsList from '@/components/products/ProductsList';

export async function generateMetadata({params, searchParams}, parent) {
    return {
        title: `Devbookstore - ${params.categoria}`
    }
}

export function generateStaticParams(){
    return [
        {categoria: 'todos'},
        {categoria: 'tvs'},
        {categoria: 'heladeras'},
        {categoria: 'aires'}
    ]
}

export const revalidate = 3600; //una hora

const Productos = ({params}) => {
    console.log(`params: ${params}`);

    const { categoria } = params

    return (
        <main className="container m-auto">
            <h2 className="text-2xl my-10 border-b pb-4">Productos</h2>
            <div className="flex gap-10">
                <CategoriesMenu/>
                <Suspense fallback={<div>Cargando...</div>}>
                    <ProductsList categoria={categoria} />
                </Suspense>
            </div>
        </main>
  )
}

export default Productos