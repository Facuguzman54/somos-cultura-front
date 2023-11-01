import TableCategories from '@/components/DataTable/TableCategories'
import React from 'react'

export default function Categories() {
  return (
    <section className='grow w-full p-8 m-4 bg-white max-h-[90vh] rounded-lg shadow-sm'>
      <h3 className="font-semibold">Categorias</h3>
      <TableCategories/>
    </section>
  )
}
