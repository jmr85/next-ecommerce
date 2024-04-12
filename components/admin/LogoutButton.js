'use client'
import { useAuthContext } from "../context/AuthContext"
import { Button } from "../ui/Button"

const LogoutButton = () => {
    const {logout} = useAuthContext()  
    return (
        <Button className="bg-red-500" onClick={logout}>
            Cerrar sesión
        </Button>
    )
}

export default LogoutButton