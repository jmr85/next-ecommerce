import Link from "next/link"
import ProductsTable from "@/components/admin/ProductsTable"
import LogoutButton from "@/components/admin/LogoutButton"

export const metadata = {
  title: 'Panel Admin - Devbookstore',
  description: 'Panel de Administracion'
}

const Admin = () => {
  return (
    <div className="container m-auto mt-6"> 
      <LogoutButton/>
      <Link
        href={"/admin/orders"}
        className="rounded bg-blue-600 p-2 text-white m-4"
      >
        Ver ordenes
      </Link> 
      <h2 className="text-2xl my-10 border-b pb-4">
        Panel Administración
      </h2>
      <ProductsTable />
    </div>
  )
}

export default Admin