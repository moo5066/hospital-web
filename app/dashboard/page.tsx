import  Sidebar  from "../components/Sidebar";
// import Header from "../components/Header"; 
import Navbar from "../components/Navbar";
import { BsPeopleFill } from "react-icons/bs";
import { FaRegCalendar } from "react-icons/fa6";
import { IoPersonCircleOutline } from "react-icons/io5";
import { IoIosTrendingUp } from "react-icons/io";
import { IoMdStopwatch } from "react-icons/io";
import { title } from "process";


export default function Layout( { children }: { children: React.ReactNode }) { 


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
  title:"Today's Appointments"
},

{
  listP:'Patient ',
  listD:'Doctor ',
  listT:'Time',
  listS:'Status'
},

  {
    patientName: "John Doe",
    doctorName: "Dr. Smith",
        icon: <IoMdStopwatch/>,
    time: "09:00 AM",
    department:"Cardiology",
    status: "Confirmed"
  },
  {
    patientName: "Maria Garcia",
    doctorName: "Dr. Michael Brown",
        icon: <IoMdStopwatch/>,
    time: "10:30 AM",
    department:"Pediatrics",
    status: "Confirmed"
  },
  {
    patientName: "John Doe",
    doctorName: "Dr. Sarah Lee",
     icon: <IoMdStopwatch/>,
    time: "11:00  AM",
       department:"Orthopedics",
    status: "Waiting"
  },
  {
    patientName: "John Doe",
    doctorName: "Dr. David Park",
    icon: <IoMdStopwatch/>,
    time: "02:00 AM",
    department:"Neurology",
    status: "In Progress"
  }
]








  return ( 
    <div className="min-h-screen bg-gray-100  "> 
      <div>
      <Navbar /> 
      {children}
</div>
<div className="flex">
<div>
  <Sidebar/>
  {children}
</div>

<div className="m-10">
   
<div>
  <h1 className="text-2xl font-bold">Dashboard</h1>
  <p className="text-gray-700">Welcome back! Here's what's happening today.</p>
</div>


<div className="mt-15">
 <div className="flex flex-col gap-5 md:grid md:grid-cols-2 md:gap-10 lg:flex lg:flex-row  mx-auto  w-full">
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
  <div className="bg-white lg:p-5  p-2 rounded-md mt-10 w-70 lg:w-full ">
    <h1 className="lg:text-xl sm:text-md md:text-lg text-sm font-bold  mb-5">{appointments[0].title}</h1>
<div className="flex justify-between items-center">
{appointments.slice(1).map((mo,index)=>(
  <div key={index} className="flex justify-between gap-5 items-center ">
    <h1 className="text-gray-500 lg:text-lg md:text-md text-xs">{mo.listP}</h1>
    <h1 className="text-gray-500 lg:text-lg md:text-md text-xs">{mo.listD}</h1>
    <h1 className="text-gray-500 lg:text-lg md:text-md text-xs">{mo.listT}</h1>
    <h1 className="text-gray-500 lg:text-lg md:text-md text-xs">{mo.listS}</h1>
  </div>
))}
</div>


  </div>
</div>



</div>







</div>

    </div> 
  );
}
