import QuickAccessCard from "@/components/QuickAccessCard";

export default function Dashboard() {
  return (
    <>
      <section className='grow w-full p-4 m-4 bg-white h-1/2 rounded-lg shadow-sm'>
        <h3 className="font-semibold">Acceso Rápido</h3>
        <div className="grid md:grid-cols-3 mt-3 w-full gap-5 p-4 ">
          <QuickAccessCard title={"Publicar nuevo evento"} events={"0"} />
          <QuickAccessCard title={"Añadir Categoria"} categories={"0"} />
          <QuickAccessCard title={"Dar de alta usuario"} users={"0"} />
        </div>
      </section>
    </>
  )
}

