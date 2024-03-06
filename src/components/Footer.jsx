import React from 'react'
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoCall } from "react-icons/io5";


const Footer = () => {
  return (
<footer className="bg-gray-800 text-white py-6 mt-5 ">
  <h1 className='text-[22px] p-2 '>Contact Us</h1>
      <div className="container mx-auto text-center flex flex-col gap-3">
        
        <p>Contact No: 1234567890</p>
        <p>Address: 12h Dhids Shjsc 422340</p>
        <ul className='flex gap-3 '>
          <li><FaFacebookSquare /></li>
          <li><FaInstagram /></li>
          <li><FaTwitter /></li>
          <li><IoCall /></li>
        </ul>
        <p>&copy; GT Karwin LLP</p>
      </div>
    </footer>
  )
}

export default Footer