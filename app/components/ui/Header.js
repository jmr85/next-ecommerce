import React from 'react'
import Image from 'next/image'

export const Header = () => {
  return (
    <header className="W-full bg-gray-600">
        <div className="container m-auto py-6 flex justify-between items-center">
            <Image
                src={"/ecommerce_icon.png"}
                width={100}
                height={100}
                alt="ecommerce icon"
            />
            <nav className="flex justify-between gap-2">
                <a href="#" className="text-base text-slate-100 p-3">
                    Enlace 1
                </a>
                <a href="#" className="text-base text-slate-100 p-3">
                    Enlace 2
                </a>
                <a href="#" className="text-base text-slate-100 p-3">
                    Enlace 3
                </a>
            </nav>
        </div>
    </header>
  )
}
