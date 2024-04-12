import EditForm from "@/components/admin/EditForm"

const EditPage = async ({params}) => {
  const { slug } = params  
  const product = await fetch(`http://localhost:3000/api/product/${slug}`, {
    cache: 'no-store'
  }).then(res => res.json())
  return (
    <div>
        <EditForm item={product}/>
    </div>
  )
}

export default EditPage