'use client'
import { useEffect } from 'react'
import { Button } from "@/components/ui/Button"

export default function Error({error, reset}) {
    useEffect(() => {
        console.log(error)
    }, [error])

    return (
        <div className="container m-auto mt-6">
            <h2 className="text-xl"> Algo no salio bien </h2>
            <hr className="my-6"/>
            <Button variant={"outline"} className="my-4" onClick={() => reset()}>Intentar nuevamente</Button>
        </div>
    )
}