'use client'

import { createContext, useContext, useState } from 'react'

const AuthContext = createContext()

export const useAuthContext = () => useContext(AuthContext)


export const AuthProvider = ({children}) => {
    
    const [user, setUser] = useState({
        logged: false,
        emai: null,
        uid: null
    })
  
  
    return (
        <AuthContext.Provider value={{
            user
        }}>
            {children}
        </AuthContext.Provider>
  )
}