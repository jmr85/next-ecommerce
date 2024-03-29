import CategoriesMenu from '@/components/products/CategoriesMenu'
// import ProductsList from '../components/products/ProductsList'
import ProductsList from '@/components/products/ProductsList';

export async function generateMetadata({params, searchParams}, parent) {
    return {
        title: `Devbookstore - ${params.categoria}`
    }
}

const Productos = ({params}) => {
    console.log(`params: ${params}`);

    const { categoria } = params

    return (
        <main className="container m-auto">
            <h2 className="text-2xl my-10 border-b pb-4">Productos</h2>
            <div className="flex gap-10">
                <CategoriesMenu/>
                <ProductsList categoria={categoria} />
            </div>
        </main>
        // <div>
        //     Estas viendo: {params.categoria}
        // </div>
  )
}

export default Productos