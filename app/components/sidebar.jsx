'use client'


import React from 'react'
import { MdDashboard } from "react-icons/md";
import { FaPeopleRoof } from "react-icons/fa6";
import { SiGooglemeet } from "react-icons/si";
import { FaUserDoctor } from "react-icons/fa6";
import { FaBuilding } from "react-icons/fa";
import { TbEmergencyBed } from "react-icons/tb";
import { useState } from 'react';
import Link from 'next/link';
import { CiMenuBurger } from "react-icons/ci";
import { usePathname } from 'next/navigation';



const Sidebar = () => {

  const [isOpen,setIsOpen]=useState(false)
  const pathname=usePathname()





const list=[
    {
        icon:<MdDashboard/>,
        name:"Dashboard",
        href:"/dashboard"
    },
    {
        icon:<FaPeopleRoof/>,
        name:"Patients",
        href:"/dashboard/patients"
    },
    {
        icon:<SiGooglemeet/>,
        name:"Appointments",
        href:"/dashboard/appointments"
    },
    {
        icon:<FaUserDoctor/>,
        name:"Doctors",
        href:"/dashboard/doctors"
    },
    {

        icon:<FaBuilding/>,
        name:"Departments",
        href:"/dashboard/departments"
    },
    {
        icon:<TbEmergencyBed/>,
        name:"Emergency",
        href:"/dashboard/emergency"
    }
]



  return (

 <div className={` border-r border-gray-300 h-full p-5 bg-white ${isOpen?"w-64":"w-20"}`}>
    

<div className='flex flex-col '>
<div className='flex justify-between gap-2 items-center mb-5'>
{isOpen&&<h1 className='text-lg font-bold text-blue-600 hover:text-blue-800'>Hospital Dashboard</h1>}
<CiMenuBurger size={20} onClick={()=>setIsOpen(!isOpen)} className='cursor-pointer mx-auto'/>

</div>
<hr className='-mx-5 text-gray-300 mt-3' />

</div>

<div>
    <div className='flex flex-col gap-5 mt-5'>
        {list.map((item,index)=>(
            <Link href={item.href} key={index} className={`flex items-center gap-2 p-3 rounded-lg text-gray-700 hover:bg-blue-300 
                ${pathname==item.href ? "bg-blue-600 text-white" : "text-gray-700 hover:bg-blue-300"}
            ${isOpen?"justify-start":"justify-center"}`}>
                <span className={`text-2xl ${isOpen?"text-white":""}`}>{item.icon}</span>
                {isOpen&&<span className='text-lg font-bold '>{item.name}</span>}
            </Link>
        ))}
    </div>
</div>


 </div>
  )
}

export default Sidebar
