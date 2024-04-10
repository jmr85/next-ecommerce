'use client'
import { useAuthContext } from "@/components/context/AuthContext"

// Parallel Routes allows you to simultaneously or conditionally render one or more pages within the same layout. 
// They are useful for highly dynamic sections of an app, such as dashboards and feeds on social sites.
// Parallel routes are created using named slots. Slots are defined with the @folder
// folder -> @login/page.js (slot)
// Slots are passed as props to the shared parent layout.
// https://nextjs.org/docs/app/building-your-application/routing/parallel-routes

const AdminLayout = ({children, login}) => {
    const {user} = useAuthContext()
  return (
    <>
        {
            user.logged
            ? children
            : login
        }
    </>
  )
}

export default AdminLayout