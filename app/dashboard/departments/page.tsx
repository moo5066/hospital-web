import React from 'react'
import { FcDepartment } from "react-icons/fc";
import { GoPeople } from "react-icons/go";
import { FcRating, } from "react-icons/fc";
import { FaHeart } from "react-icons/fa";
import { FaBrain } from "react-icons/fa";
import { FaHandsHoldingChild } from "react-icons/fa6";
import { PiBoneFill } from "react-icons/pi";
import { MdEmergencyShare } from "react-icons/md";
import { FaBriefcaseMedical } from "react-icons/fa6";

const page = () => {


const total=[
{
Icon:<FcDepartment size={20}/>,
color:"blue",
total:"total departments",
numberMembers:"6"
},
{
Icon:<GoPeople size={20}/>,
color:"purple",

total:"Total Doctors",
numberMembers:"65"
},
{
Icon:<FcRating size={20}/>,
color:"green",

total:"Total Beds",
numberMembers:"265"
},
]


const departments =[
  {
    Icon:<FaHeart size={30}/>,
    color:"red",
    department:"Cardiology",
    info:"Heart and cardiovascular care",
    DepartmentHead :"Dr. John Smith",
    Doctors:"8",
    Patients:"245",
    AvailableBeds:"45",
    button:"View Details"
  },

  
  {
    Icon:<FaBrain  size={30}/>,
    color:"purple",
    department:"Neurology",
    info:" Brain and nervous system treatment ",
    DepartmentHead :"Dr. David Parker",
    Doctors:"6",
    Patients:"178",
    AvailableBeds:"30",
    button:"View Details"
  },
    {
    Icon:<FaHandsHoldingChild size={30}/>,
    color:"blue",
    department:"Pediatrics",
    info:"Children's health and wellness",
    DepartmentHead :"Dr. Michael Brown",
    Doctors:"12",
    Patients:"420",
    AvailableBeds:"60",
    button:"View Details"
  },
    {
    Icon:<PiBoneFill size={30}/>,
    color:"yellow",
    department:"Orthopedics",
    info:"Bone and joint care",
    DepartmentHead :"Dr. Sarah Lee",
    Doctors:"10",
    Patients:"312",
    AvailableBeds:"50",
    button:"View Details"
  },

  {
    Icon:<MdEmergencyShare size={30}/>,
    color:"green",
    department:"Emergency",
    info:"24/7 emergency medical care",
    DepartmentHead :"Dr. James Wilson",
    Doctors:"15",
    Patients:"89",
    AvailableBeds:"25",
    button:"View Details"
  },
  {
    Icon:<FaBriefcaseMedical size={30}/>,
    color:"pink",
    department:"General Surgery",
    info:"Surgical procedures and care",
    DepartmentHead :"Dr. Patricia Kim",
    Doctors:"14",
    Patients:"198",
    AvailableBeds:"55",
    button:"View Details"
  },
]





  return (
    <div className='m-5'>
      <div>
        <h1 className='sm:text-2xl text-xl font-bold'>Hospital Departments</h1>
        <p className='text-gray-500'>Overview of all medical departments and facilities</p>
      </div>


<div className='grid grid-cols-3 gap-5 mt-5'>
   {total.map((map,index)=>(
    <div key={index} className='bg-white p-7 rounded-lg shadow-lg'>
        <div className=' flex flex-row items-center gap-3'>
<p className={`${map.color=== 'blue' ? 'text-blue-500 bg-blue-300 p-1 rounded-lg' : map.color === 'purple' ? 'text-purple-600 bg-purple-300 p-1 rounded-lg' : 'text-red-600 bg-red-300 p-1 rounded-lg'}`}>{map.Icon}</p>
<div className='flex flex-col gap-1'>
    <p className='text-gray-600'>{map.total}</p>
    <p className='text-2xl font-bold'>{map.numberMembers}</p>
</div>
    </div>
    </div>
   ))}
</div>


<div className='mt-10 grid grid-cols-2 gap-5 p-2'>
  {departments.map((map,index)=>(
    <div key={index} className='bg-white p-5 rounded-lg shadow-lg '>
<div className='flex flex-row gap-3 items-center mb-3'>
  <p className={`${map.color=== "red" ? "bg-red-300 p-1 rounded-lg text-red-500" : map.color === 'purple' ? "bg-purple-300 p-1 rounded-lg text-purple-500" :map.color === 'blue' ? "bg-blue-300 p-1 rounded-lg text-blue-500" : map.color === 'yellow' ? "bg-amber-200 p-1 rounded-lg text-amber-500" : map.color === 'green' ? "bg-green-300 p-1 rounded-lg text-green-500" : map.color === 'pink' ? "bg-pink-300 p-1 rounded-lg text-pink-500" : "bg-gray-500 text-gray-500" }`}>{map.Icon}</p>
  <div>
   <p className='text-lg font-bold'>{map.department}</p>  
    <p className='text-gray-600 text-sm'>{map.info}</p>
  </div>
</div>

<div className='flex flex-col gap-5 '>
  <p className='flex justify-between items-center'><span>Department Head:</span> <span>{map.DepartmentHead}</span></p>
 <p className='flex justify-between items-center'><span>Doctors:</span><span>{map.Doctors}</span></p>
<p className='flex justify-between items-center'><span>Patients:</span><span>{map.Patients}</span></p>
<p className='flex justify-between items-center'><span>Available Beds:</span><span>{map.AvailableBeds}</span></p>
</div>

<button className='w-full border border-gray-300 font-bold text-lg p-2 rounded-lg m-2'>{map.button}</button>




    </div>
  ))}
</div>


    </div>
  )
}

export default page
