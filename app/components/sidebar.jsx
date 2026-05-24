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



const Sidebar = () => {

  const [isOpen,setIsOpen]=useState(false)

function handleLogin(){
  alert("Also Coming Soon")
}

const [active, setActive] = useState("")

// const [open, setOpen] = useState(false)


const list=[
    {
        icon:<MdDashboard/>,
        name:"Dashboard",
        // href='/'
    },
    {
        icon:<FaPeopleRoof/>,
        name:"Patients",
        // href='/'

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
<p>hi from sidebar</p>
   </div>
  )
}

export default Sidebar
