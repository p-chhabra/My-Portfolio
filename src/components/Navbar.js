import React from 'react';
import {useState} from 'react'
import logo from '../assets/software-development.png';
import {FaBars, FaTimes} from 'react-icons/fa'

const Navbar = () => {

    const [nav, setNav] = useState(false);
    const handleClick = () => {
        setNav(!nav)
    }

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
        <div>
            <img src={logo} alt="logo img" style={{width: "50px"}}/>
        </div>

        {/* Menu */}        
            <ul className='hidden md:flex'>
                <li>Home</li>
                <li>About</li>
                <li>Skills</li>
                <li>Projects</li>
                <li>Contact</li>
            </ul>

        {/* Hamburger */}
        <div onClick = {handleClick} className='md:hidden z-10'>
            {!nav ? <FaBars/> : <FaTimes/>}
        </div>

        {/* Mobile Menu */}
        <ul className={ !nav ? "hidden" : "absolute top-0 left-0 w-full h-screen flex flex-col justify-center items-center bg-[#0a192f]"}>
            <li className='py-6 text-4xl'>Home</li>
            <li className='py-6 text-4xl'>About</li>
            <li className='py-6 text-4xl'>Skills</li>
            <li className='py-6 text-4xl'>Projects</li>
            <li className='py-6 text-4xl'>Contact</li>
        </ul>

        {/* Social Icons */}
        <div className='hidden'></div>
    </div>
  )
}

export default Navbar