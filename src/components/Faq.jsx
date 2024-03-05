import React from 'react'
import { GoDotFill } from "react-icons/go";

const Faq = () => {
  return (
    <div className='mt-3 bg-blue-200'>
<ul className='flex flex-col gap-2 md:p-3'>
  <li className='flex flex-col gap-2 mt-3 bg-white p-2'>
    <h1 className='text-[17px] font-medium md:text-[24px] flex flex-row items-center'>
   <GoDotFill /> What services do you offer?
</h1>
    <p className='text-[14px] font-light md:text-[19px]'>
    We offer a wide range of IT and network services including network setup and configuration, cybersecurity solutions, cloud computing services, data backup and recovery, software development, and IT consulting.
    </p>
  </li>
  <li className='flex flex-col gap-2 mt-3 bg-white p-2'>
    <h1 className='text-[17px] font-medium md:text-[24px] flex flex-row items-center'>
   <GoDotFill /> How can your services benefit my business?
</h1>
    <p className='text-[14px] font-light md:text-[19px]  bg-white p-2'>
    Our services are designed to optimize your business operations, enhance productivity, improve security measures, streamline communication channels, and provide scalable solutions that adapt to your growing business needs.    </p>
  </li>
  <li className='flex flex-col gap-2 mt-3 bg-white p-2'>
    <h1 className='text-[17px] font-medium md:text-[24px] flex flex-row items-center'>
   <GoDotFill /> Do you provide ongoing support ?


</h1>
    <p className='text-[14px] font-light md:text-[19px] '>
    Yes, we offer comprehensive support and maintenance packages to ensure that your systems run smoothly and efficiently at all times. Our team of experts is available round-the-clock to address any issues, perform routine maintenance tasks, and provide timely assistance whenever required.
    </p>
  </li>
  <li className='flex flex-col gap-2 mt-3 bg-white p-2 mb-3'>
    <h1 className='text-[17px] font-medium md:text-[24px] flex flex-row items-center'>
   <GoDotFill /> How do you ensure data security ?


</h1>
    <p className='text-[14px] font-light md:text-[19px]  '>
    We prioritize data security and confidentiality by implementing robust security measures, including encryption protocols, firewalls, intrusion detection systems, access controls, and regular security audits. Additionally, we adhere to industry best practices and compliance standards to safeguard your sensitive information.
    </p>
  </li>
  
</ul>
    </div>
  )
}

export default Faq