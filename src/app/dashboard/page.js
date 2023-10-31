import { Sidenav } from '@/components/Sidenav'
export default function Dashboard() {
  return (
    <main className='min-h-screen flex relative gap-4'>
      <Sidenav />
      <section className='grow p-4'>
          <span className='font-medium text-2xl'>Acá van las tablas</span>
      </section>
    </main>
  )
}

