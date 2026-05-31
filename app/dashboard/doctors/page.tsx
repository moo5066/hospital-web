import React from 'react'
import { CiSearch } from "react-icons/ci";
import { GoPeople } from "react-icons/go";
import { FaStar } from "react-icons/fa";

const page = () => {

const doctors = [


  {
    icon:<GoPeople/>,
    name:"Dr. Emily Chen",
    department:"Cardiology",
    rating:"450 patients",
    experience :"15 years experience",
    contact:"+1 234-567-8910",
    gmail:"e.chen@medicare.com",
    Status: "Available",
    view:"Book Appointment" 

  },
  {
    icon:<GoPeople/>,
    name:"Dr. Michael Brown",
    department:"Pediatrics",
    rating:"520 patients",
    experience:"12 years experience",
    contact:"+1 234-567-8911",
    gmail:"m.brown@medicare.com",
    Status: "Busy",
    view:"Book Appointment"

  },
  {
    icon:<GoPeople/>,
    name:"Dr. Sarah Lee",
    department:"Orthopedics",
    rating:"450 patients",
    experience:"18 years experience",
    contact:"+1 234-567-8912",
    gmail:"s.lee@medicare.com",
    Status: "Available",
    view:"Book Appointment"

  },
  {
    icon:<GoPeople/>,
    name:"Dr. David Park",
    department:"Neurology",
    rating:"380 patients",
    experience:"20 years experience",
    contact:"+1 234-567-8913",
    gmail:"d.park@medicare.com",
    Status: "Available",
    view:"Book Appointment"

  },
  {
    icon:<GoPeople/>,
    name:"Dr. Jennifer Wu",
    department:"Sports Medicine",
    rating:"450 patients",
    experience:"10 years experience",
    contact:"+1 234-567-8910",
    gmail:"j.wu@medicare.com",
    Status: "On Leave",
    view:"Book Appointment"

  },
  {
    icon:<GoPeople/>,
    name:"Dr. Robert Martinez",
    department:"Dermatology",
    rating:"410 patients",
    experience:"14 years experience",
    contact:"+1 234-567-8915",
    gmail:"r.martinez@medicare.com",
    Status: "Available",
    view:"Book Appointment"

  },
]












  return (
    <div className='m-5'>
      <div>
        <h1 className='sm:text-2xl text-xl font-bold'>Medical Staff</h1>
        <p className='text-gray-500 sm:text-md text-sm'>Directory of all doctors and specialists</p>
      </div>



<div className='bg-white p-5 rounded-lg mt-10'> 
  <div className='flex space-x-1 p-2 items-center border border-gray-300 hover:border-2 hover:border-blue-500 rounded-md    w-full'>
<CiSearch size={20}/>
<input type="text" placeholder='Search doctors by name, specialty, or department...' className=' outline-none  rounded-md w-full'/>
  </div>
</div>


  <div className='mt-15 lg:grid lg:grid-cols-3  md:grid md:grid-cols-2  gap-10'>
{doctors.map((doctor,index)=>(

<div key={index} className='bg-white rounded-lg p-5 shadow-md border border-gray-100'>
  <div className='flex flex-col gap-2 items-center p-3'>
<p className='bg-purple-600 text-purple-200 p-3 rounded-full'>{doctor.icon}</p>
<p className='font-bold text-xl'>{doctor.name}</p>
<p className='text-blue-600'>{doctor.department}</p>
<p className='flex gap-2 items-center'><span className='text-yellow-500'><FaStar/></span> <span className='font-bold'>4.9</span> <span className='text-gray-500'>({doctor.rating})</span></p>
  </div>

<div className='mt-3 flex flex-col gap-2 text-gray-500'>
 <p>{doctor.experience}</p>
 <p>{doctor.contact}</p>
 <p>{doctor.gmail}</p>
 </div>
 <p className='flex justify-between'><span className='text-gray-500'>Status:</span> <span  className={`${doctor.Status==="Available" ? "bg-green-200 text-green-600 p-1 rounded-lg" : doctor.Status==="Busy" ? "bg-red-200 text-red-600 p-1 rounded-lg" : "bg-gray-300 text-black p-1 rounded-lg"}`}>{doctor.Status}</span></p>


<button className='bg-blue-600 text-white p-3 mt-5 w-full rounded-lg text-lg font-bold text-center '>{doctor.view}</button>


</div>


))}
  </div>


    </div>
  )
}

export default page
