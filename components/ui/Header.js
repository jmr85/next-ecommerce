'use client'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
    {
        label: "Inicio",
        href: "/"
    },
    {
        label: "Tienda",
        href: "/productos/todos"
    },
    {
        label: "Nosotros",
        href: "/nosotros"
    },
    {
        label: "Contacto",
        href: "/contacto"
    },
    {
        label: "Admin",
        href: "/admin"
    }
]

export const Header = () => {

    const pathname = usePathname();

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
            {/* <SearchBox input={"laptop"}/> */}
            <nav className="flex justify-between gap-2">
                {
                    links.map(link => {
                        return <Link 
                          key={link.label}
                          href={link.href}
                          className={`${pathname === 
                          link.href ? 'font-bold' : ''}
                          text-base text-slate-600 p-3`}
                        >
                            {link.label}
                            {/* {
                                link.label === 'Admin' && <Image
                                    src={"/login.svg"}
                                    width={20}
                                    height={20}
                                    alt="ecommerce icon"
                                    className="flex "
                                />
                            } */}
                        </Link>
                    })
                }
            </nav>
        </div>
    </header>
  )
}
