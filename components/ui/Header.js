'use client'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger
  } from "@/components/ui/navigation-menu"
import CartWidget from './CartWidget'
import { useAuthContext } from "@/components/context/AuthContext"

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
        label: "Posts",
        href: "/posts"
    },
    {
        label: "",
        href: "/cart"
    }
]


export const Header = () => {

  const pathname = usePathname();
  const {user} = useAuthContext()

  return (
    <header className="w-full bg-gray-100">
        <div className="container mx-auto py-1 mt-0 flex flex-col md:flex-row justify-between items-center">
            <Link href={"/"}>
                <Image
                    src={"/logo.png"}
                    width={150}
                    height={50}
                    alt="ecommerce icon"
                />
            </Link>
            {/* <SearchBox input={"laptop"}/> */}
            <nav className="flex flex-col md:flex-row justify-between gap-2 w-full md:w-auto">
                {
                    links.map(link => {
                        return <Link 
                          key={link.label}
                          href={link.href}
                          className={`${pathname === 
                          link.href ? 'font-bold' : link.href === '/cart'? 'text-base text-slate-100 p-3 flex items-center': ''}
                          text-base text-slate-600 p-3`}
                        >
                            {link.label}
                            {
                                link.href === '/cart' && <CartWidget/>
                            }
                        </Link>
                    })                        
                }
                {
                    user.logged && 
                    <Link 
                        href="/admin/orders" 
                        className={`${pathname === '/admin/orders' ? 'font-bold' : ''} text-base text-slate-600 p-3`}
                    >
                        Ordenes
                    </Link>
                }
                  <NavigationMenu className="ml-auto my-0 md:ml-0 flex flex-col md:flex-row justify-between items-center">
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>Tu cuenta</NavigationMenuTrigger>
                            <NavigationMenuContent>
                            <Link href={"/admin"}>
                                <NavigationMenuLink>
                                <ul className="grid w-[100px] gap-3 p-4 md:w-[200px] md:grid-cols-2 lg:w-[600px] ">
                                    Admin
                                    <Image
                                            src={"/login.svg"}
                                            width={20}
                                            height={20}
                                            alt="ecommerce icon"
                                            className="flex "
                                        />
                                   </ul>     
                                </NavigationMenuLink>
                              </Link>  
                            </NavigationMenuContent>

                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu> 
            </nav> 
        </div> 
    </header>
  )
}
