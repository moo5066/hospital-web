
'use client'
// import { Sidebar } from 'lucide'
import React from 'react'

import Image  from 'next/image'
import Link from 'next/link'
import { MdPeople } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { BsGraphDownArrow } from "react-icons/bs";
import { HiOutlineArrowRight } from "react-icons/hi";import { FcDepartment } from "react-icons/fc";
import { FiCheckCircle } from "react-icons/fi";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";
import { IoMdSunny } from "react-icons/io";
import { useState } from 'react';

const page = () => {

const [darkMode, setDarkMode] =useState(false);




  return (
    <div>

       <div className={`min-h-screen   p-10 transition-colors duration-300 ${darkMode ? ' bg-black text-white' : "bg-gray-100 text-gray-900"}`}>

  <div>
        <button onClick={()=>setDarkMode(!darkMode)} className={`fixed top-0 right-0 px-3 py-2 m-5 bg-gray-200 rounded-lg shadow-md cursor-pointer ${darkMode ? "bg-gray-900" : "bg-gray-300"}`}>
        {darkMode ? <IoMdSunny size={20} className="text-white"/> : <IoMdSunny size={20} className="text-gray-900"/>}
        </button> 
      </div>







   <div>
    <div className='flex justify-between items-center p-5'>
      <div className='flex flex-row items-center  gap-2'>
      <Image src='/midical care Background Removed.png' alt='logo' width={100} height={100} />
      <div>
        <h1 className='font-bold text-xl'>MediCare Hospital</h1>
        <p className='text-gray-500'>Advanced Healthcare Management</p>
      </div>
    </div>

<button>
  <span className='bg-blue-600 px-7 py-3 rounded-lg text-center text-white duration-150 transition-transform hover:scale-105 shadow-lg  text-xl'>Login</span>
</button>
</div>

  <div className='m-7 flex flex-col gap-10 lg:flex-row lg:items-center justify-between'>
  <div className='flex flex-col gap-2 w-auto'>
  <div>
    <h1 className='text-5xl lg:text-4xl font-bold text-blue-600  rounded-lg'>Modern Hospital Management System</h1>
    <p className={`text-gray-600 :text-md max-w-3xl ${darkMode ? 'text-gray-700' : "text-gray-900"}`}>Streamline your hospital operations with our comprehensive patient management platform. From appointments to emergency care, manage everything in one place.</p>
  </div>

<div className='flex gap-5 items-center'>
  <div className='bg-blue-600 couser-pointer  text-white p-5 lg:p-3 lg:text-lg text-xl font-bold flex items-center gap-2 w-max rounded-lg shadow-md duration-150 transition-transform hover:scale-105'>
  <Link href='/'>Access Dashboard</Link><span><HiOutlineArrowRight/></span></div>
  <Link href='/' className='couser-pointer border border-blue-600 text-blue-600 p-5 lg:p-3 lg:text-lg text-xlfont-bold rounded-lg shadow-md duration-150 transition-transform hover:scale-105'>Learn More</Link>

</div>
</div>

<div className={`mt-10 p-10 p-5 lg:w-[50%] rounded-lg shadow-lg ${darkMode ? 'bg-black   border border-gray-900 shadow-lg' : "bg-white"}`}>
  <div className={`flex justify-between items-center p-3 rounded-lg ${darkMode ? 'bg-gray-900    border border-gray-900 shadow-lg' : "bg-gray-200"} `}>
  <div className='flex flex-col '>
    <p className='text-md text-gray-600'>Total patients</p>
    <h1 className='text-3xl font-bold'>1500</h1>
    </div>
<MdPeople size={40} color='blue'/>
  </div>
  <div className={`mt-10 flex justify-between items-center  p-3 rounded-lg ${darkMode ? 'bg-gray-900 border border-gray-900 shadow-lg' : "bg-gray-200"}`}>
  <div>
    <p className='text-md text-gray-600'>Appointments Today</p>
    <h1 className='text-3xl font-bold'>48</h1>
    </div>
<SlCalender size={40} color='green'/>
  </div>
  <div className={`mt-10 flex justify-between items-center  p-3 rounded-lg ${darkMode ? 'bg-gray-900 border border-gray-900 shadow-lg' : "bg-gray-200"}`}>
  <div>
    <p className='text-md text-gray-600'>Active Doctors</p>
    <h1 className='text-3xl font-bold'>86</h1>
    </div>
<BsGraphDownArrow size={40} color='purple'/>
  </div>
</div>
</div>

<div>
  <div className='mt-15 text-center'>
    <h1 className='text-3xl font-bold'>Powerful Features</h1>
    <p className={`${darkMode ? 'text-gray-700' : "text-gray-900"}`}>Everything you need to run a modern healthcare facility</p>
  </div>
</div>

{/* card. section */}

<div className={`grid grid-cols-2 lg:grid-cols-4 gap-10 p-10 mt-10 `}>
  <div className={` p-5 rounded-lg  flex flex-col gap-3 hover:shadow-lg ${darkMode ? 'bg-black   border border-gray-900 shadow-lg' : "bg-white"}`}>
    <span className='bg-blue-100 w-[12%] p-2 rounded-lg '><MdPeople size={20} color='blue'/></span>
    <h1 className='text-lg font-semibold'>Patient Management</h1>
    <p className='text-gray-600'>Comprehensive patient records and history.</p>
  </div>

  <div className={` p-5 rounded-lg hover:shadow-lg flex flex-col gap-5 ${darkMode ? 'bg-black   border border-gray-900 shadow-lg' : "bg-white"}`}>
    <span className='bg-blue-200 w-[12%] p-2 rounded-lg '><SlCalender size={20} color='blue'/></span>
    <h1 className='text-lg font-semibold'>Smart Scheduling</h1>
    <p className='text-gray-600'>Seamless multi-department collaboration.</p>
  </div>

  <div className={` p-5 rounded-lg hover:shadow-lg flex flex-col gap-5 ${darkMode ? 'bg-black   border border-gray-900 shadow-lg' : "bg-white"}`}>
    <span className='bg-blue-200 w-[12%] p-2 rounded-lg '><FcDepartment size={20} color='blue'/></span>
    <h1 className='text-xl font-bold'>Department Coordination</h1>
    <p className='text-gray-600'>Efficient management of hospital departments.</p>
  </div>

  <div className={` p-5 rounded-lg hover:shadow-lg flex flex-col gap-5 ${darkMode ? 'bg-black   border border-gray-900 shadow-lg' : "bg-white"}`}>
    <span className='bg-blue-200 w-[12%] p-2 rounded-lg '><BsGraphDownArrow size={20} color='blue'/></span>
    <h1 className='text-xl font-bold'>PEmergency Care</h1>
    <p className='text-gray-600'>24/7 critical care monitoring.</p>
  </div>

</div>


<div className={`m-20 p-7  flex flex-col gap-10 rounded-lg shadow-lg lg:flex-row lg:justify-around lg:items-center ${darkMode ? 'bg-black   border border-gray-900 shadow-lg' : "bg-white"}`}>
<div>
  <div>
    <h1 className='text-2xl font-bold'>Why Choose MediCare?</h1>
    <p className='w-100'>Our platform is designed by healthcare professionals for healthcare professionals. 
      We understand the unique challenges of hospital management and have built solutions that work.</p>
<div className='flex items-center gap-2 mt-5 duration-150 transition-transform hover:scale-105 w-max'>
      <Link href='/Dashboard' className='text-blue-600 text-lg font-semibold'>Get Started Now </Link>
  <span className='text-blue-600'><HiOutlineArrowRight size={20}/></span>
</div>
  </div>
</div>

<div className={`flex flex-col gap-3  `}>
  <div className='flex gap-3 mt-10'>
    <FiCheckCircle color='green'/>
     <p>Real-time patient tracking and updates</p>
  </div>
  <div className='flex gap-3'>
    <FiCheckCircle color='green'/>
   <p>Integrated appointment scheduling</p> 
  </div>
  <div className='flex gap-3'>
    <FiCheckCircle color='green'/>
   <p>Complete medical staff directory</p>
  </div>
  <div className='flex gap-3'>
    <FiCheckCircle color='green'/>
   <p>Emergency department management</p>
  </div>
  <div className='flex gap-3'>
    <FiCheckCircle color='green'/>
   <p>Department-wise analytics</p>
  </div>

  <div className='flex gap-3'>
    <FiCheckCircle color='green'/>
   <p>Secure patient data storage</p>
  </div>

</div>
</div>

<div className=' m-20'>
  <div className='bg-gradient-to-r from-blue-600 to-purple-600  p-7 rounded-lg text-white'>
    <h1 className='text-center text-3xl font-bold'>Ready to Transform Your Hospital?</h1>
    <p className='text-center'>Join hundreds of healthcare facilities already using MediCare</p>

<div className='lg:flex lg:flex-col lg:gap-10 mt-10 lg:items-center flex flex-col gap-5'>
<div className='lg:flex lg:flex-row gap-10 flex flex-col items-center'>
  <div className='flex mt-10 gap-3 items-center text-lg'>
    <IoCallOutline size={ 30}/>
  <p>+1 234-567-8900</p>
</div>

<div className='flex mt-10 gap-3 items-center text-lg'>
<MdOutlineEmail size={30}/>
<p>info@medicare.com</p>
</div>
</div>

<div className='flex mt-10 gap-3 items-center text-lg'>
  <CiLocationOn size={30}/>
  <p>123 Medical Plaza, New York</p>
</div>

</div>

<div className={` p-7 mt-10 rounded-lg  text-xl font-bold flex items-center justify-center gap-2 w-max mx-auto hover:shadow-lg duration-150 transition-transform hover:scale-105 ${darkMode ? 'bg-black text-white   border border-gray-900 shadow-lg' : "bg-white text-black"}`}>
  <Link href='/' className={`couser-pointer `}>Access Dashboard</Link>
  <span className={`text-blue-600 ${darkMode ? 'bg-black text-white   border border-gray-900 shadow-lg' : "bg-white text-black"}`}><HiOutlineArrowRight size={20}/></span>
</div>

  </div>
</div>





   
   </div>
   </div>
    </div>
  )
}

export default page