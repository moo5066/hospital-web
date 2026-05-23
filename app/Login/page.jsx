import React from 'react'
import Link from 'next/link'
import { FaArrowLeft } from "react-icons/fa";
import Image  from 'next/image'
import { MdOutlineMail } from "react-icons/md";
import { MdOutlinePassword } from "react-icons/md";
import { FiEye } from "react-icons/fi";
import { LuEyeClosed } from "react-icons/lu";

const Login = () => {
  return (
    <div className='flex flex-col justify-center bg-white'>
     <Link href='/' className='flex text-gray-400 items-center gap-2 cursor-pointer mx-auto my-20 hover:text-gray-700'>
      <span><FaArrowLeft/></span>
      <p className='text-xl '>Back to Home</p>
     </Link>

<div className='w-full mx-auto max-w-md min-h-200 bg-white  border border-gray-300 rounded-lg shadow-lg   mb-5  p-8'>
  <div>
<div className='flex flex-col gap-2 items-center'>
        <Image src='/midical care Background Removed.png' alt='logo' width={120} height={120} />
<h1 className='text-2xl font-bold'>Welcome Back</h1>
<p className='text-md text-gray-500'>Sign in to access your dashboard</p>
</div>

<div>
 

<form className='flex flex-col mt-15'>
  <label htmlFor='email' className='text-md text-gray-700 font-bold'>Email Address</label>
  <div className='flex items-center gap-3 w-full border border-gray-300 rounded-lg p-3 mt-2 mb-5 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent'>
    <MdOutlineMail size={20} className='text-gray-400'/>
  <input type='email' id='email' placeholder='doctor@medicare.com' className='w-full focus:outline-none'/>

</div>

  <label htmlFor='email' className='text-md text-gray-700 font-bold'>Password</label>
  <div className='flex items-center gap-3 w-full border border-gray-300 rounded-lg p-3 mt-2 mb-5 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent'>
    <MdOutlinePassword size={20} className='text-gray-400'/>
  <input type='password' id='password' placeholder='Enter your password' className='w-full focus:outline-none'/>

</div>


</form>


</div>



  </div>
</div>



    </div>
  )
}

export default Login
