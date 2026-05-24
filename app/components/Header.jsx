import React from 'react'
import Image  from 'next/image'
import Link from 'next/link'
const Header = () => {
  return (
    <div>
          <div>
      <div className='flex justify-between items-center p-3 border-b border-gray-300  bg-white '>
      <div className='flex flex-row items-center  gap-2'>
      <Image src='/midical care Background Removed.png' alt='logo' width={100} height={100} />
      <div>
        <h1 className='font-bold text-xl'>MediCare Hospital</h1>
        <p className='text-gray-500'>Advanced Healthcare Management</p>
      </div>
    </div>

<Link href='/login'>
  <span className='bg-blue-600 lg:px-7 md:px-5 px-4 md:py-3 lg:py-3 py-2 rounded-lg text-center text-white duration-150 transition-transform hover:scale-105 shadow-lg  md:text-lg lg:text-xl'>Login</span>
</Link>
</div>
</div>
    </div>
  )
}

export default Header
