import React from 'react'

export const Header = () => {
  return (
    <header className="W-full bg-gray-600">
        <div className="container m-auto py-6 flex justify-between items-center">
            <p className="text-4xl text-bold text-slate-100">
                Ecommerce
            </p>
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
