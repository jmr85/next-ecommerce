import { NextResponse } from "next/server";
import { doc, getDoc, deleteDoc } from "firebase/firestore";
import { deleteObject, ref } from "firebase/storage";
import { db, storage } from "@/firebase/config";

export async function GET(_, { params }){
  const {slug} = params

  const docRef = doc(db, "productos", slug)

  const docSnapshot = await getDoc(docRef)

  return NextResponse.json(docSnapshot.data());
}

export async function DELETE(_, { params }){
  const {slug} = params

  try {
    //Elimina el documento del producto de Firestore
    await deleteDoc(doc(db, "productos", slug));

    //Elimina la imagen del producto de Firebase Storage
    const imageRef = ref(storage, `${slug}.jpg`);
    await deleteObject(imageRef);

    console.log("Producto y imagen eliminados correctamente");
  } catch (error) {
    console.error("Error al eliminar el producto y la imagen:", error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
  return NextResponse.json("Producto eliminado correctamente", { status: 200 });
}