import ProductCard from "./ProductCard"

const ProductsList = async({categoria}) => {
    const items = await fetch(`http:localhost:3000/api/productos/${categoria}`, {
            cache: "force-cache",
            next:{
                tags:['productos']
            } 
        }).then( r => r.json())

    console.log(items)
    
    return (
        <section className="container m-auto flex justify-center items-center gap-12 flex-wrap">
            {
                items.map(item => 
                    <ProductCard key={item.slug} item={item}/>
                )  
            }
        </section>
    )
}

export default ProductsList