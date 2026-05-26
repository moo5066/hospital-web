'use client'

import React from 'react'
import Link from 'next/link'
// import { FaArrowLeft } from "react-icons/fa";
import Image  from 'next/image'
import { MdOutlineMail } from "react-icons/md";
import { MdOutlinePassword } from "react-icons/md";
import { FiEye } from "react-icons/fi";
import { LuEyeClosed } from "react-icons/lu";
import { useState } from 'react';
const Login = () => {


const [showPassword, setShowPassword] =useState(false)


const handleToglePassword =()=>{
  setShowPassword((prev)=>!prev)
}





  return (
    <div className='flex flex-col justify-center bg-white p-5'>
     {/* <Link href='/' className='flex text-gray-400 items-center gap-2 cursor-pointer mx-auto my-20 hover:text-gray-700'>
      <span><FaArrowLeft/></span>
      <p className='text-xl '>Back to Home</p>
     </Link> */}

<div className='w-full mx-auto max-w-md min-h-200 bg-white  border border-gray-300 rounded-lg shadow-lg   mt-10 p-8'>
  <div>
<Link href='/' className='flex flex-col gap-2 items-center'>
        <Image src='/midical care Background Removed.png' alt='logo' width={120} height={120} />
<h1 className='text-2xl font-bold'>Welcome Back</h1>
<p className='text-md text-gray-500'>Sign in to access your dashboard</p>
</Link>

<div>
 

<form className='flex flex-col mt-15'>
  <label htmlFor='email' className='text-md text-gray-700 font-bold'>Email Address</label>
  <div className='flex items-center gap-3 w-full border border-gray-300 rounded-lg p-3 mt-2 mb-5 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent'>
    <MdOutlineMail size={20} className='text-gray-400'/>
  <input type='email' id='email' placeholder='doctor@medicare.com' required className='w-full focus:outline-none'/>

</div>

  <label htmlFor='password' className='text-md text-gray-700 font-bold'>Password</label>
  <div className='flex items-center gap-3 w-full border border-gray-300 rounded-lg p-3 mt-2 mb-5 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent'>
    <MdOutlinePassword size={20} className='text-gray-400'/>
  <input type={showPassword ? "text" : "password"} id='password' placeholder='Enter your password' required className='w-full focus:outline-none'/>

<button type='button' onClick={handleToglePassword} className='text-gray-400 focus:outline-none'>
{showPassword ? <LuEyeClosed/> : <FiEye/>}
</button>
</div>


<div className='flex justify-between'>
  <div>
  <input type="checkbox" id="remember" className='mr-2'/>
  <label htmlFor='remember' className=' text-black'>Remember me</label>
</div>
<p className='text-blue-600  hover:underline cursor-pointer'>Forgot Password?</p>
</div>


<div className='mt-10 mx-auto w-full'>
  <Link href='/dashboard' className='bg-blue-600 p-3 text-xl font-bold w-full text-white rounded-lg block text-center'>Sign In</Link>
</div>


<div className='mt-10 text-sm cursor-pointer flex flex-col gap-1 bg-blue-700/10 p-2 rounded-lg border border-blue-700/30'>
  <p>Demo Credentials</p>
  <p className='text-blue-600 '>email: doctor@medicare.com</p>
  <p className='text-blue-600 '>password: demo123</p>
</div>

<div className='w-full flex items-center my-4'>
  <span className="flex-1 border-t border-gray-300"></span>
  <span className="px-4 text-gray-500 font-sans text-lg font-medium tracking-wide">or</span>
  <span className="flex-1 border-t border-gray-300"></span>
</div>

<Link href='/dashboard' className='w-full text-center text-lg font-medium  border-2 border-gray-300 p-3 rounded-lg'>Continue as Guest</Link>

</form>

</div>



  </div>
</div>

<div className='m-10'>
  <p className='text-center'><span className='text-gray-500'>Don't have an account?</span> <span className='text-blue-600 font-bold'>Contact Administrator</span></p>

</div>

    </div>
  )
}

export default Login
