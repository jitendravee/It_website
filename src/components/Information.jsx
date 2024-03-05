import React from 'react'
import { FiBox, FiDivideCircle } from "react-icons/fi";


const Information = () => {
  return (
    <div className='flex items-center justify-center flex-col bg-blue-200 p-2'>
      <h1 className='text-[18px] font-bold'>Our Key Features</h1>
      <p className='text-[14px] mt-2 font-light'>Explore the Top features from IT and Network Services</p>
      <div className=''>

        <ul className='text-[17px] font-extralight md:flex flex-row md:p-7 md:gap-4'>
          <li className='bg-white p-3 mt-3 rounded-lg'>
            <h2 className='text-[19px] font-medium flex flex-row items-center gap-2'><FiBox />IT Infrastructure Management</h2>
            <p>Efficiently manage your IT infrastructure to ensure smooth operations</p>
          </li>
          <li className='bg-white p-3 mt-3 rounded-lg'><h2 className='text-[19px] font-medium flex flex-row items-center gap-2'><FiBox />Network Security Solutions</h2>
          <p>Protexxr your network from cyber threats with advanced security solutions</p>
          </li>
          </ul>
          <ul className='text-[17px] font-extralight md:flex flex-row md:p-7 md:gap-4'>
          <li className='bg-white p-3 mt-3 rounded-lg'>
            <h2 className='text-[19px] font-medium flex flex-row items-center gap-2'><FiBox />Cloud Services Integration</h2>
            <p>Integrate cloud services seamlessly for enhanced scalability and flexibility</p>
          </li>
          <li className='bg-white p-3 mt-3 rounded-lg mb-3'>
            <h2 className='text-[19px] font-medium flex flex-row items-center gap-2'><FiBox />24/7 IT Support</h2>
          <p>Get round-the-clock support for all your IT needs to minimize downtime</p>
          </li>
        </ul>

      </div>
    </div>
  )
}

export default Information