import React from 'react'
import { CiFilter } from "react-icons/ci";
import { CiCalendar } from "react-icons/ci";
import { IoMdTime } from "react-icons/io";

const page = () => {

const appiont= [

{
    icon:<IoMdTime size={20}/>,
    name:"John Smith",
    result:"Follow-up",
    doctor:"Dr. Emily Johnson",
    time:"10:00 AM",
    department:"Cardiology",
    status:"Confirmed",
    view:"View Details"
},
{
        icon:<IoMdTime size={20}/>,
    name:"Maria Garcia",
        result:"Consultation",
    doctor:"Dr. Michael Brown",
    time:"10:00 AM",
    department:"Pediatrics",
    status:"Confirmed",
    view:"View Details"
},
{
        icon:<IoMdTime size={20}/>,
    name:"Lisa Anderson",
        result:"Check-up",
    doctor:"Dr. David Park",
    time:"02:00 PM",
    department:"Neurology",
    status:"In Progress",
    view:"View Details"
},
{
        icon:<IoMdTime size={20}/>,
    name:"Robert Johnson",
        result:"Check-up",
    doctor:"Dr. Sarah Lee",
    time:"11:00 AM",
    department:"Orthopedics",
    status:"Waiting",
    view:"View Details"
}


]


const upcoming=[
    {
        name:"Michael Chen",
        doctor:"Dr. Jennifer Wu",
        date:"2026-05-05",
        time:"09:30 AM",
        department:"Sports Medicine",
        status:"Scheduled",
        view:"Reschedule"
    },
    {
        name:"Sarah Williams",
        doctor:"Dr. Robert Martinez",
        date:"2026-05-05",
        time:"09:30 AM",
        department:"Dermatology",
        status:"Scheduled",
        view:"Reschedule"
    }
]








  return (
    <div className='m-5'>
    <div className='flex justify-between items-center'>
        <div>
            <h2 className='font-bold lg:text-2xl text-xl'>Appointments</h2>
            <p className='lg:text-lg md:tex-md sm:text-xs text-gray-500'>Schedule and manage patient appointments</p>
        </div>

<div className='flex gap-5 items-center'>
    <p className='flex items-center gap-1 border border-gray-300 p-2 rounded-lg font-semibold lg:text-lg md:text-md sm:text-sm'><span><CiFilter size={20}/></span> Filter</p>
    <p className='flex items-center gap-1 border border-gray-300 p-2 rounded-lg hover:bg-blue-600 hover:text-white font-bold cursor-pointer lg:text-lg md:text-md sm:text-sm'>+ New Appointment</p>
</div>

    </div>

<div className='mt-10 flex flex-col gap-5 bg-white p-5 rounded-lg shadow-md'>

    <div className='flex gap-2 items-center p-5 bg-white rounded-lg shadow-md'>
<CiCalendar size={30}/>
<p className='font-bold text-lg'>Today's Appointments</p>
<p className='font-bold text-lg border border-gray-300 p-2 rounded-full w-7 h-7 flex items-center justify-center'>4</p>
    </div>


{appiont.map((appiont,index)=>(
    <div key={index} className=''>


   <div className='lg:flex lg:justify-between grid grid-cols-1 md:grid-cols-1 gap-5 items-center p-5 bg-white rounded-lg  border border-gray-300'>  

    <div className='flex justify-between gap-10 items-center'>
    <div className='flex flex-col items-center gap-1'>

        <div className='flex items-center gap-1.5'>
<p className='bg-blue-300 p-2 rounded-full'>{appiont.icon}</p> 
<p className='text-gray-400 hover:text-gray-700'>{appiont.name}</p>
<p className='text-gray-400 hover:text-gray-700'>.     {appiont.result}</p>
        </div>
<p className='text-gray-400 hover:text-gray-700'>{appiont.doctor}</p>
</div>
<p className='text-gray-400 hover:text-gray-700'>{appiont.time}</p>
<p className='text-gray-400 hover:text-gray-700'>{appiont.department}</p>
</div>
<div className='flex justify-between items-center gap-5'>
<p className={`${appiont.status === 'Confirmed' ? 'bg-green-400 p-1.5 text-white font-semibold rounded-lg' : appiont.status ==='Waiting'? 'bg-amber-400 text-white font-semibold rounded-lg p-1.5': "bg-blue-400 p-1.5 text-white font-semibold rounded-lg"}`}>{appiont.status}</p>
<p className='text-blue-600 font-semibold'>{appiont.view}</p>
   </div>
    </div>
    </div> 
))}


</div>


<div className='mt-10 flex flex-col gap-5 bg-white p-5 rounded-lg shadow-md'>

<div className='flex gap-2 items-center'>
    <p className='text-purple-500'><CiCalendar size={30}/></p>
    <p className='text-purple-500 text-lg'>Upcoming Appointments</p>
    <p className='bg-purple-500 px-2 rounded-full text-white'>2</p>
</div>


   {upcoming.map((upcoming,index)=>(
    <div key={index} className='flex justify-between items-center p-5 bg-white rounded-lg  border border-gray-300'>
        <div className='flex justify-between'>
        <div className='flex flex-col'>
      <p className='text-black font-bold w-1/5 text-lg'>{upcoming.name}</p>  
     <p className='text-gray-700 hover:text-gray-900  text-sm'>{upcoming.doctor}</p>   
     </div>
        <p className='text-gray-700 hover:text-gray-900 w-1/7 text-sm'>{upcoming.date}</p>
        <p className='text-gray-700 hover:text-gray-900 w-1/7 text-sm'>{upcoming.time}</p>
        <p className='text-gray-700 hover:text-gray-900 w-1/7 text-sm'>{upcoming.department}</p>
        </div>
        <div className='flex flex-row  gap-5 items-center'>
        <p className='text-gray-700 hover:text-gray-900  text-sm'>{upcoming.status}</p>
        <p className='text-blue-600 font-semibold  text-sm'>{upcoming.view}</p>
    </div>
    </div>
))
   
}
</div>


    </div>
  )
}

export default page
