import { NextResponse } from "next/server";

export async function POST(request, {params}) {
    const formData = await request.json()
    console.log(formData)

    return NextResponse.json("Dara recibida correctamente");
}