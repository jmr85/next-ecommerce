export async function generateMetadata({params, searchParams}, parent) {
    return {
        title: `Devbookstore - ${params.categoria}`
    }
}

const Productos = ({params}) => {
    console.log(`params: ${params}`);
    return (
        <div>
            Estas viendo: {params.categoria}
        </div>
  )
}

export default Productos