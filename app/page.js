import { Header } from "./components/ui/Header";

export default function Home() {
  return (
    <>
      <Header/>
      <main className="container m-auto">
        <h1 className="text-4xl text-blue-600 text-bold my-4">Nextjs</h1>
        <hr/>
        <p className="text-base mt-4">Bienvenidos al Ecommerce!</p>  
      </main>
    </>
  );
}
