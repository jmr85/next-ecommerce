import ContactForm from "@/components/contacto/ContactForm"

export const metadata = {
  title: 'Contacto - Devbookstore',
  description: 'Contacto de Devbookstore'
}

const Contacto = () => {
  return (
    <>
        <main className="container m-auto">
            <h1 
                className="text-center text-4xl text-blue-600
            font-bold my-4">
                Contacto
            </h1>
            <ContactForm/>
            <hr/>
            <div className="flex justify-center items-center">
              <iframe 
                  src={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6567.44116259644!2d-58.38411544669613!3d-34.6112265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccad40c133643%3A0xcebf82b5b9a99e10!2sMicrocentro%20de%20Contacto%20Sa!5e0!3m2!1sen!2sar!4v1711401890395!5m2!1sen!2sar"} 
                  className="mt-5 mx-10 mb-10 w-100"
                  allowfullscreen={""} loading={"lazy"} 
                  referrerpolicy="no-referrer-when-downgrade"
                  >
              </iframe> 
            </div>
        </main>
    </>
  )
}

export default Contacto