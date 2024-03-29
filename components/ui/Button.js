import React from 'react'

const Button = ({children, className="", ...args}) => {
  return (
    <button className={`rounded-xl py-2 px-3 my-2 mx-3 bg-blue-400 
        text-center text-white ${className}`}{...args}>
        {children}
    </button>
  )
}
// llegue hasta min 2:26 video 2.4 Aplicando Client Components-Nextjs
export default Button