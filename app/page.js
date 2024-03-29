import Image from "next/image";
import CategoriesMenu from "@/components/products/CategoriesMenu";
import ProductsList from "@/components/products/ProductsList";

// Metadata estatica
export const metadata = {
  title: "Ecommerce App",
  description: "Ecommerce App made with Nextjs",
  keywords: ['Ecommerce', 'Nextjs', 'Argentina'],
  openGraph: {
    title: 'Ecommerce',
    description: 'The Ecommerce App',
    type: 'article',
    publishedTime: '2024-03-01T00:00:00.000Z',
    authors: ['@juan.martin.ruiz@gmail.com']
  }
}

// Metadata dimnamica
// export async function generateMetadata({params, searchParams}, parent){
//   const id = params.id

//   const product = await fetch(`https://....../${id}`).
//   then((res) => res.json())

//   return {
//     title: product.title,
//     description: product.description
//   }
// } 

export default function Home() {
  return (
    <>
      <main className="container m-auto">
        <h1 className="text-4xl text-blue-600 text-bold my-4">Nextjs</h1>
        <hr/>
        <p className="text-base mt-4">Bienvenidos al Ecommerce!</p>  
        <CategoriesMenu/>
        <ProductsList categoria={"todos"} />
      </main>
    </>
  );
}
