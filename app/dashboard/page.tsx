import React from 'react'
import { BsPeopleFill } from "react-icons/bs";
import { FaRegCalendar } from "react-icons/fa6";
import { IoPersonCircleOutline } from "react-icons/io5";
import { IoIosTrendingUp } from "react-icons/io";

const page = () => {

  const tableHeader=['Patient','Doctor','Time','Department','Status']

    const cards =[
  {
    title: "Total Patients",
    value: "1,234",
    percentage: "+12%",
    icon: <BsPeopleFill/>,
    span:'vs last month'
  },
  {
    title: "Appointments Today",
    value: "48",
    percentage: "+5%",
    icon: <FaRegCalendar/>,
    span:'vs last month'
  },
  {
    title: "Active Doctors",
    value: "86",
    percentage: "+2%",
    icon: <IoPersonCircleOutline/>,
    span:'vs last month'
  },
  {
    title: "Emergency Cases",
    value: "3",
    percentage: "-25%",
    icon: <IoIosTrendingUp/>,
    span:'vs last month'
  },


]


const appointments =[





  {
    patientName: "John Doe",
    doctorName: "Dr. Smith",
    time: "09:00 AM",
    department:"Cardiology",
    status: "Confirmed"
  },
  {
    patientName: "Maria Garcia",
    doctorName: "Dr. Michael Brown",
    time: "10:30 AM",
    department:"Pediatrics",
    status: "Confirmed"
  },
  {
    patientName: "John Doe",
    doctorName: "Dr. Sarah Lee",
    time: "11:00  AM",
       department:"Orthopedics",
    status: "Waiting"
  },
  {
    patientName: "John Doe",
    doctorName: "Dr. David Park",
    time: "02:00 AM",
    department:"Neurology",
    status: "In Progress"
  }
]




  return (
    <div>
      <div className="m-10">
   
<div>
  <h1 className="text-2xl font-bold">Dashboard</h1>
  <p className="text-gray-700">Welcome back! Here's what's happening today.</p>
</div>


<div className="mt-15">
 <div className="flex flex-col gap-5 md:grid md:grid-cols-2 md:gap-5 lg:flex lg:flex-row  mx-auto  w-full">
  { cards.map((card,index)=>(
    <div key={index} className="bg-white p-4 rounded-lg shadow-md flex flex-col md:w-70 h-45 ">
      <div className="flex justify-between  items-center"> 
      <div className="flex flex-col gap-3 items-start p-5"> 
<h1 className="text-md text-gray-500">{card.title}</h1>
<p className="text-2xl font-bold">{card.value}</p>
<p className={`text-sm font-medium ${card.percentage.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
  {card.percentage}
  <span className="text-gray-500 text-sm"> {card.span}</span>
</p>
</div>
<div>
<span className="lg:text-3xl text-2xl bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center">{card.icon}</span>

</div>

</div>
    </div>
  ))}
 </div>
</div>




<div>
  <div className='bg-white rounded-lg p-5 mt-10'>

<h1 className='text-xl font-bold mb-5'>Today's Appointments</h1>

<div className='flex justify-between  items-center p-3 bg-gray-100 rounded-lg mb-2'>
{tableHeader.map((header,index)=>(
  <h1 key={index} className='text-gray-500 font-bold text-sm sm:w-1/5'>{header}</h1>
))}
</div>

<div>
{appointments.map((map,index)=>(
  <div key={index} className='flex justify-between items-center p-3 border-b border-gray-100'>
<h1 className='text-gray-700 text-sm w-1/5'>{map.patientName}</h1>
<h1 className='text-gray-700 text-sm w-1/5'>{map.doctorName}</h1>
<h1 className='text-gray-700 text-sm w-1/5'>{map.time}</h1>
<h1 className='text-gray-700 text-sm w-1/5'>{map.department}</h1>
<h1 className={`text-sm font-bold w-1/5 ${map.status ==="Confirmed" ? "text-green-500" : map.status==="Waiting" ? "text-yellow-500" : "text-blue-500"}`}>
  {map.status}
</h1>
  </div>
))}
</div>


  </div>
</div>

</div>
    </div>
  )
}

export default page
