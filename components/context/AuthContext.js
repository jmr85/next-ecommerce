'use client'
import { createContext, useContext, useState, useEffect } from 'react'
import { auth, googleAuthProvider } from '@/firebase/config'
import { 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword,
    signInWithPopup, 
    onAuthStateChanged, 
    signOut 
} 
from 'firebase/auth'

const AuthContext = createContext()

export const useAuthContext = () => useContext(AuthContext)

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState({
        logged: false,
        email: null,
        uid: null
    })

    const registerUser = async(values) => {
        await createUserWithEmailAndPassword(auth, values.email, values.password)
    }

    const loginUser = async(values) => {
        await signInWithEmailAndPassword(auth, values.email, values.password)
    }

    const logout = async() => {
        await signOut(auth)
    }

    const googleLogin = async() => {
        await signInWithPopup(auth, googleAuthProvider)
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            console.log(user)
            if(user){
                setUser({
                    logged: true,
                    email: user.email,
                    uid: user.uid
               })
            }else{
                setUser({
                    logged: false,
                    email: null,
                    uid: null
               })
            }
        })
    }, [])

    return (
        <AuthContext.Provider value={{
            user,
            registerUser,
            loginUser,
            googleLogin,
            logout
        }}>
            {children}
        </AuthContext.Provider>
  )
}