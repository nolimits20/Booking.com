import React from 'react';
import { HiOutlineQuestionMarkCircle } from "react-icons/hi2";
import { LiaBedSolid } from "react-icons/lia";
import { FaPlane } from "react-icons/fa";
import { FaCar } from "react-icons/fa";
import { MdAttractions } from "react-icons/md";
import { BsTaxiFrontFill } from "react-icons/bs";

const Header = () => {
  return (
    <body>
      <nav className='bg-[#023e8a] w-full h-auto py-4'>
        <div className='px-96'>
          <div className='flex items-center justify-between'>
            <h1 className='text-2xl text-white font-bold'>Booking.com</h1>
            <div className='flex items-center space-x-4'>
              <select className='bg-[#023e8a] outline-none text-white' name="Language" id="Language">
                <option value="ENG">ENG</option>
                <option value="ENG">ENG</option>
              </select>
              <div className='flex items-center text-white'>
                <HiOutlineQuestionMarkCircle className='mr-2.5 text-lg font-bold' title="Contact Customer Support" />
                <div className='space-x-3'>
                  <button className='text-lg font-semibold'>List your property</button>
                  <button className='text-blue-700 bg-white p-1.5 rounded-lg border-2 border-blue-700'>Register</button>
                  <button className='text-blue-700 bg-white p-1.5 rounded-lg border-2 border-blue-700'>Sign in</button>
                </div>
              </div>
            </div>
          </div>
          <ul className='flex space-x-6 mt-4 text-[16px] text-white'>
            <li className='flex items-center space-x-2 p-3 hover:bg-blue-500 hover:rounded-3xl cursor-pointer'><LiaBedSolid /><span>Stays</span></li>
            <li className='flex items-center space-x-2 p-3 hover:bg-blue-500 hover:rounded-3xl cursor-pointer'><FaPlane /><span>Flights</span></li>
            <li className='flex items-center space-x-2 p-3 hover:bg-blue-500 hover:rounded-3xl cursor-pointer'><FaCar /><span>Car Rentals</span></li>
            <li className='flex items-center space-x-2 p-3 hover:bg-blue-500 hover:rounded-3xl cursor-pointer'><MdAttractions /><span>Attractions</span></li>
            <li className='flex items-center space-x-2 p-3 hover:bg-blue-500 hover:rounded-3xl cursor-pointer'><BsTaxiFrontFill /><span>Airport Taxis</span></li>
          </ul>
        </div>
      </nav>
    </body>
  );
}

export default Header;
