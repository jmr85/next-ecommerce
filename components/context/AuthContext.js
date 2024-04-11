'use client'
import { createContext, useContext, useState } from 'react'
import { auth } from '@/firebase/config'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'

const AuthContext = createContext()

export const useAuthContext = () => useContext(AuthContext)


export const AuthProvider = ({children}) => {
    const [user, setUser] = useState({
        logged: false,
        email: null,
        uid: null
    })

    const registerUser = async(values) => {
       const userCredential = await createUserWithEmailAndPassword(auth, values.email, values.password)
       console.log(userCredential)

       const user = userCredential.user

       setUser({
            logged: true,
            email: user.email,
            uid: user.uid
       })
    }

    const loginUser = async(values) => {
        const userCredentialLogin = await signInWithEmailAndPassword(auth, values.email, values.password)
        const user = userCredentialLogin.user

        setUser({
            logged: true,
            email: user.email,
            uid: user.uid
        })
    }
  
    return (
        <AuthContext.Provider value={{
            registerUser,
            loginUser,
            user
        }}>
            {children}
        </AuthContext.Provider>
  )
}