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
import { IoIosMenu } from "react-icons/io";




const Sidebar = () => {


function handleLogin(){
  alert("Also Coming Soon")
}

const [active, setActive] = useState("")

const [open, setOpen] = useState(false)


const list=[
    {
        icon:<MdDashboard/>,
        name:"Dashboard"
    },
    {
        icon:<FaPeopleRoof/>,
        name:"Patients"
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

    <div>
      <div className='flex justify-between items-center p-3 border-b border-gray-300'>
      <div className='flex flex-row items-center  gap-2'>
      <Image src='/midical care Background Removed.png' alt='logo' width={100} height={100} />
      <div>
        <h1 className='font-bold text-xl'>MediCare Hospital</h1>
        <p className='text-gray-500'>Advanced Healthcare Management</p>
      </div>
    </div>

<button>
  <span onClick={handleLogin} className='bg-blue-600 px-7 py-3 rounded-lg text-center text-white duration-150 transition-transform hover:scale-105 shadow-lg  text-xl'>Login</span>
</button>
</div>
</div>


<div>
    <div>
        {/* sidebar */}
        <div className='w-[60%] md:w-[40%] lg:w-[20%]  min-h-screen border border-r border-gray-300 pt-15 px-5'> 

<div>
    <span className='right-[83%] fixed absolute bg-gray-300 p-2 rounded-lg'><IoIosMenu size={30}/></span>
</div>




<div>
   {list.map((item, index) => (
    <div key={index}
        onClick={() => setActive(item.name)}
        className={`flex flex-row items-center p-7 gap-5 cursor-pointer ${
            active === item.name ? "bg-blue-600 text-white  rounded-lg" : "bg-[#ededed] text-gray-800"
        }`}
    >
        <div className='flex flex-row gap-4 '>
        <span style={{fontSize:"25px"}}>{item.icon}</span>
        <span className='text-xl font-semibold'>{item.name}</span>
    </div>
    </div>
))}
</div>
        </div>
    </div>
</div>



</div>
   
  )
}

export default Sidebar
