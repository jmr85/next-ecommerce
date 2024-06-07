import EditForm from "@/components/admin/EditForm"

const EditPage = async ({params}) => {
  const { slug } = params  
  const product = await fetch(`http://${process.env.VERCEL_URL}/api/product/${slug}.json`, {
    cache: 'no-store' 
  }).then(res => res.json())
  return (
    <div>
        <EditForm item={product}/>
    </div>
  )
}

export default EditPage