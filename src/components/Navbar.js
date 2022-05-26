import React from 'react';
import logo from '../assets/software-development.png';
import {FaBars, FaTimes} from 'react-icons/fa'

const Navbar = () => {
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
        <div>
            <img src={logo} alt="logo img" style={{width: "50px"}}/>
        </div>

        {/* Menu */}
        <div className='hidden md:flex'>
            <ul className='hidden md:flex'>
                <li>Home</li>
                <li>About</li>
                <li>Skills</li>
                <li>Projects</li>
                <li>Contact</li>
            </ul>
        </div>

        {/* Hamburger */}
        <div className='md:hidden z-10'>
            <FaBars/>
        </div>

        {/* Mobile Menu */}
        <ul className='absolute top-0 left-0 w-full h-screen flex flex-col justify-center items-center bg-[#0a192f]'>
            <li className='py-6 text-4xl'>Home</li>
            <li className='py-6 text-4xl'>About</li>
            <li className='py-6 text-4xl'>Skills</li>
            <li className='py-6 text-4xl'>Projects</li>
            <li className='py-6 text-4xl'>Contact</li>
        </ul>

        {/* Social Icons */}
        <div></div>
    </div>
  )
}

export default Navbar