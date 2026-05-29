import React from 'react'
import { CiSearch } from "react-icons/ci";
import { GoPeople } from "react-icons/go";

const page = () => {


const cards=[

    {
        name:"John Smith",
        ID:'P001',
        age:35,
        gender:"Male",
        contact:"123-456-7890",
        gmail:'6M0dX@example.com',
        location:"123 Main St, New York",
        LastVisit:"2024-05-15",
        Condition:"Hypertension",
        status:"Active"

    },
    {
        name:"John Smith",
        ID:'P001',
        age:35,
        gender:"Male",
        contact:"123-456-7890",
        gmail:'6M0dX@example.com',
        location:"123 Main St, New York",
        LastVisit:"2024-05-15",
        Condition:"Hypertension",
        status:"Inactive"

    },
    {
        name:"John Smith",
        ID:'P001',
        age:35,
        gender:"Male",
        contact:"123-456-7890",
        gmail:'6M0dX@example.com',
        location:"123 Main St, New York",
        LastVisit:"2024-05-15",
        Condition:"Hypertension",
                status:"Active"


    },
    {
        name:"John Smith",
        ID:'P001',
        age:35,
        gender:"Male",
        contact:"123-456-7890",
        gmail:'6M0dX@example.com',
        location:"123 Main St, New York",
        LastVisit:"2024-05-15",
        Condition:"Hypertension",
                status:"Active"


    },
    {
        name:"John Smith",
        ID:'P001',
        age:35,
        gender:"Male",
        contact:"123-456-7890",
        gmail:'6M0dX@example.com',
        location:"123 Main St, New York",
        LastVisit:"2024-05-15",
        Condition:"Hypertension",
                status:"Inactive"


    }
]










  return (
    <div className='p-5 flex flex-col gap-5'>

      <div className='flex justify-between items-center '>
        <div>
            <h1 className='lg:text-2xl text-xl font-bold'>Patient Management</h1>
            <p className='lg:text-md text-sm font-base text-gray-500'>Manage and view all patient records</p>
        </div>

        <button className='bg-blue-600 p-2 text-white font-bold hover:bg-blue-700 rounded-md'>
            + Add New Patient
        </button>

      </div>


<div className='bg-white border border-gray-300 p-5 rounded-lg m-5'>
    <div>
        <div className='flex items-center gap-1.5 bg-white border-2 border-gray-300 text-gray-500 rounded-md p-2 hover:border-blue-600 focus-within:border-blue-600'>
<span><CiSearch size={20}/></span>
<input type="text" placeholder='Search patients by name or ID...' className='outline-none w-full' />
        </div>
    </div>
</div>




{/* cards */}

<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
    {cards.map((card,index)=>(
        <div key={index} className='bg-white border border-gray-300 p-5 rounded-lg'>

{/* Header */}

<div className='flex items-center gap-3 mb-3'>

<span><GoPeople size={20}/></span>
<span>{card.name}</span>
<span>{card.ID}</span>

</div>


{/* Body */}


<div className='flex flex-col gap-1 text-sm text-gray-600 '>
    <span>age:{card.age} | gender:{card.gender}</span>
    <p>{card.contact}</p>
    <p>{card.gmail}</p>
    <p>{card.location}</p>
    <p>Last Visit:{card.LastVisit}</p>
    <p>Condition:{card.Condition}</p>
</div>

{/* status */}

<div className='mt-3'>
    <span className={`text-xs font-bold px-3 py-1 rounded-full ${card.status === "Active" ? "bg-green-600 text-white" : "bg-red-600 text-white"}`}>{card.status}</span>
</div>




        </div>
    ))}
</div>







    </div>
  )
}

export default page
