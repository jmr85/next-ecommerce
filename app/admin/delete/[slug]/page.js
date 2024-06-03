import Link from "next/link"

const DeletePage = async ({ params }) => {
  const { slug } = params
  const response = await fetch(`http://localhost:3000/api/product/${slug}`, {
    cache: 'no-store',
    method: 'DELETE',
  }).then(res => res.json())

  return (
    <div>
      <p className="p-1 m-10 text-center">
        {response}
      </p>
      <Link
        href={`/admin`}
        className="rounded bg-red-400 p-2 text-white text-center mb-20"
      >
        Volver al listado de productos
      </Link>
    </div>
  )
}

export default DeletePage