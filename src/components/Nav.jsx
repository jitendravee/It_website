import React from 'react'

const Nav = () => {
  return (
    <div className='flex flex-col md:flex-row items-center text-[#646a70] justify-between'>
     <div className='md:flex flex-row'>
      <h1 className='text-[39px] font-light flex text-wrap '>

        GT KARWIN LLP
      </h1>
      <p className=' mt-2 md:mt-5 px-3 text-[19px] font-extralight text-wrap'>
a one stop solution
      </p>
      </div>
      <button type='sumit' className='p-4 hidden md:block bg-orange-400 rounded-lg mt-2 text-white'>
        ✆ Call Us
      </button>
    </div>
  )
}

export default Nav