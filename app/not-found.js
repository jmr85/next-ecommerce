'use client'
import Image from "next/image"
import {Button} from "@/components/ui/Button"
import { useRouter } from "next/navigation"

export default function NotFound(){

    const router = useRouter()
    return (
        <>
            <main className="container m-auto">
                <Button variant={"outline"} onClick={() => router.back()}>
                    Volver
                </Button>
                <h1 className="text-center text-4xl text-blue-600 my-4">
                    Página no encontrada
                </h1>
                <hr/>
                
                <p className="text-base mt-4">
                    La ruta a la que intentas acceder no existe
                </p>
                <div class="flex justify-center items-center h-screen">
                    <Image
                        src={"/not-found.webp"}
                        width={660}
                        height={360}
                        alt="Not Found Image"
                        className="max-w-full max-h-full"
                    >

                    </Image>
                </div>
            </main>
        </>
    )

}