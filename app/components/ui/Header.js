import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const links = [
    {
        label: "Inicio",
        href: "/"
    },
    {
        label: "Nosotros",
        href: "/nosotros"
    },
    {
        label: "Contacto",
        href: "/contacto"
    }
]

export const Header = () => {
  return (
    <header className="W-full bg-gray-100">
        <div className="container m-auto py-6 flex justify-between items-center">
            <Link href={"/"}>
                <Image
                    src={"/logo.png"}
                    width={200}
                    height={200}
                    alt="ecommerce icon"
                />
            </Link>
            <nav className="flex justify-between gap-2">
                {
                    links.map(link => {
                        return <Link 
                          key={link.label}
                          href={link.href}
                          className={`text-base text-slate-600 p-3`}
                        >
                            {link.label}
                        </Link>
                    })
                }
            </nav>
        </div>
    </header>
  )
}
