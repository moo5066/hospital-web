import React from 'react'
import Image  from 'next/image'
import { IoPersonCircleOutline } from "react-icons/io5";


import Link from 'next/link'
const Header = () => {
  return (
    <div>
          <div>
      <div className='flex justify-between items-center p-3 border-b border-gray-300  bg-white '>
      <div className='flex flex-row items-center  gap-2'>
      <Image src='/midical care Background Removed.png' alt='logo' width={70} height={70} />
      <div>
        <h1 className='font-bold text-lg'>MediCare Hospital</h1>
        <p className='text-gray-500 text-sm'>Patient Management System</p>
      </div>
    </div>

<div className='flex gap-3'>
  <div className='flex flex-col'>
  <h1 className='text-md'>Dr.Sarah Johson</h1>
  <p className='text-gray-400 text-sm'>Administrator</p>
  </div>
  <IoPersonCircleOutline size={40} className='text-blue-600 bg-blue-300 p-2 rounded-full'/>

</div>
</div>
</div>
    </div>
  )
}

export default Header
