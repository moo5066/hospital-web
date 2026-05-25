'use client'


import React from 'react'
import Image  from 'next/image'
import { MdDashboard } from "react-icons/md";
import { FaPeopleRoof } from "react-icons/fa6";
import { SiGooglemeet } from "react-icons/si";
import { FaUserDoctor } from "react-icons/fa6";
import { FaBuilding } from "react-icons/fa";
import { TbEmergencyBed } from "react-icons/tb";
import { useState } from 'react';
import Link from 'next/link';
import { IoMdMenu } from "react-icons/io";
import { useState } from 'react';
import { CiMenuBurger } from "react-icons/ci";



const Sidebar = () => {

  const [isOpen,setIsOpen]=useState(false)



function handleOpen() {

    setIsOpen(!isOpen)
}



function handleLogin(){
  alert("Also Coming Soon")
}

const [active, setActive] = useState("")

// const [open, setOpen] = useState(false)


const list=[
    {
        icon:<MdDashboard/>,
        name:"Dashboard",
    },
    {
        icon:<FaPeopleRoof/>,
        name:"Patients",

    },
    {
        icon:<SiGooglemeet/>,
        name:"Appointments"
    },
    {
        icon:<FaUserDoctor/>,
        name:"Doctors"
    },
    {

        icon:<FaBuilding/>,
        name:"Deparments"
    },
    {
        icon:<TbEmergencyBed/>,
        name:"Emergency"
    }
]



  return (

   <div>

<div className='flex flex-col space-y-5'> 
<div className='flex items-center gap-2 cursor-pointer' onClick={handleOpen}>
  <CiMenuBurger size={25}/>
  <span className='text-lg font-bold'>MediCare</span>
</div>

<div className='flex flex-col gap-5 mt-10'>
    {
        list.map((item,index)=>(
            <div key={index} className={`flex items-center gap-3 text-md font-medium cursor-pointer ${active===item.name && "text-blue-600"}`} onClick={()=>setActive(item.name)}>
                <span>{item.icon}</span>
                <span>{item.name}</span>
            </div>
        ))
    }
</div>

<div className='mt-auto'>
    <button onClick={handleLogin} className='bg-blue-600 w-full p-3 text-white rounded-lg'>Login</button>
</div>

<div>

</div>
    
</div>


   </div>
  )
}

export default Sidebar
