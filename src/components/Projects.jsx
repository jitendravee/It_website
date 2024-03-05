import React from 'react'
import { FaProjectDiagram } from "react-icons/fa";


const Projects = () => {
  return (
    <div className='flex flex-col '>
      <h1 className='text-[19px] font-medium flex items-center justify-center'>Our Few best projects</h1>
      <div className='md:flex flex-col'>
<ul className='text-[15px] md:text-[22px] md:font-light md:mt-8 flex flex-col gap-3 md:flex-row md:gap-9'>
  <li className='flex flex-row items-center gap-2'><FaProjectDiagram />Commscope</li>
  <li className='flex flex-row items-center gap-2'><FaProjectDiagram />TCS E-block Gachiboli</li>
  <li className='flex flex-row items-center gap-2'><FaProjectDiagram />Vihan Kia Office</li>
<li className='flex flex-row items-center gap-2'><FaProjectDiagram />Sandur Power Pvt.Itd</li>
</ul>
<ul className='text-[15px] md:text-[22px] md:font-light md:mt-8 flex flex-col gap-3 md:flex-row md:gap-9'>

  <li className='flex flex-row items-center gap-2'><FaProjectDiagram />Sakshi</li>
  <li className='flex flex-row items-center gap-2'><FaProjectDiagram />Concrete lime light infra Projects</li>
  <li className='flex flex-row items-center gap-2'><FaProjectDiagram />AP CM Camp office</li>
<li className='flex flex-row items-center gap-2'><FaProjectDiagram />AP Secretariat and Raj Bhavan</li>
</ul>
      </div>
    </div>
  )
}

export default Projects