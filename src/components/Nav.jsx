import React from 'react'
import image from './image.png'

const Nav = () => {
  return (
    <div className='flex flex-col md:flex-row items-center text-[#646a70] justify-between'>
     <div className='md:flex flex-row'>
      <h1 className='text-[39px] font-light flex text-wrap '>
   <img src={image} alt='logo' className='w-1/6 h-2/3 rounded-full mt-2'/>
     GT KARWIN LLP
      </h1>
      
      </div>
      <button type='sumit' className='p-4 hidden md:block bg-orange-400 rounded-lg mt-2 text-white'>
        ✆ Call Us
      </button>
    </div>
  )
}

export default Nav