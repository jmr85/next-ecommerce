const Productos = ({params}) => {
    console.log(`params: ${params}`);
    return (
        <div>
            Estas viendo: {params.categoria}
        </div>
  )
}

export default Productos