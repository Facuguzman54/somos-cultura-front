"use client"
import { useState } from "react"
import Link from "next/link"


export const Nav = () => {
    const [open, setOpen] = useState(true)
    const handleOpen = (e)=>{
        setOpen(prev => !prev)
    }
    const links = [
        { name: "Inicio", href: "/" },
        { name: "Eventos", href: "/events" },
        { name: "Nosotros", href: "/about" },
    ]
    return (
        <nav className="shadow-md w-full relative top-0 left-0">
            <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
                <div className="font-bold text-2xl cursor-pointer flex items-center text-gray-800">
                    <span>
                        Somos Cultura
                    </span>
      
                </div>
                <div>
                    <div className="text-3xl absolute right-8 top-[0.8rem] cursor-pointer md:hidden  ">
                    {
                        open ?
                        <div className="flex h-full"><span className="icon-[bi--x]" onClick={handleOpen}></span></div>
                        :  <div className="flex h-full"><span className="icon-[bi--list]" onClick={handleOpen}></span> </div>  
                    }
                    </div>
                    <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-[-1] z-10 left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-400 ease-in ${open ? "top-[4.02rem]":"top-[-490px]"}`}>
                        {links.map(link =>
                            <li className="md:ml-8 text-xl text-gray-800 md:my-0 md-8"
                                key={link.name}><Link href={link.href}>{link.name}</Link>
                            </li>)}
                    </ul>
                </div>
            </div>
        </nav>
    )
}
