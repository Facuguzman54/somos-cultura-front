"use client"
import Link from 'next/link';
import { useState } from 'react';

export const Sidenav = () => {
  const [open, setOpen] = useState(true)
  const MENUS = [
    { title: "Eventos", src: "/BiFileRichtextFill.svg", href:"/dashboard/events" },
    { title: "Categorias", src: "/BiTagsFill.svg", href:"/dashboard/categories"},
    { title: "Usuarios", src: "/BiPersonFillGear.svg", href:"/dashboard/users",gap:true},

  ]
  return (
    <>
      <div className={`${open ? "w-72" : "w-20"} duration-300 h-screen bg-blue-500 relative p-5 pt-8`}>
        <img
          src="/BiArrowLeftCircleFill.svg"
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-2 border-blue-500 bg-blue-500 rounded-full ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className='flex gap-x-4 items-center'>
          <img src="/BiCompass.svg" className={`cursor-pointer duration-500 max-w-[35px] p-2 bg-blue-600 rounded-lg ${open && "rotate-[360deg]"}`} alt="panel-de-control-icono" />
          <h1 className={`text-white origin-left font-medium text-xl duration-300 ${!open && "scale-0"}`}>Panel de Control</h1>
        </div>
        <ul className='pt-6'>
          {MENUS.map((menu) => (
            <li key={menu.title} className={`text-gray-200 text-sm cursor-pointer p-2 hover:bg-blue-900 rounded-md ${menu.gap ? "mt-9" : "mt-2"}`}>
              <Link href={menu.href} className='flex items-center gap-x-4 '>              
              <img src={menu.src} className='max-w-[30px]' />
              <span className={`${!open && "hidden"} origin-left duration-200`}>{menu.title}</span>
              </Link>
            </li>

          ))}
        </ul>
      </div>
    </>

  );
}
