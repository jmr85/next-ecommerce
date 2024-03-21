export default function ContactoLayout ({children}){
  return (
    <>
        {children}
        <footer className="bg-gray-200 w-full">
            <div className="container m-auto py-4 flex
            items-center gap-4">
                <h4 className="text-2xl
                font-bold">Siguenos en nuestras redes</h4>
                <a>IG</a>
                <a>LinkedIn</a>
                <a>Facebook</a>
            </div>
        </footer>
    </>
  )
}
