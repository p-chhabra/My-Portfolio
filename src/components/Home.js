import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

const Home = () => {
  return (
    <div name = "home" className='w-full h-screen bg-[#0a192f] text-gray-300'>

      {/* Container */}
      <div className='h-full mx-auto px-8 max-w-[1000px] flex flex-col justify-center '>
        <p className='text-pink-600 font-bold'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Prathmesh Chhabra</h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a student</h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur, 
          tenetur recusandae animi voluptatum harum doloremque reprehenderit ratione 
          vitae eaque quia, sed eveniet nam incidunt, placeat dolore impedit ea eum ab.
        </p>

        {/* Button */}
      <div>
        <button className='text-white group font-bold px-5 py-4 my-2 border-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>View Work 
        <span className='ml-3 group-hover:rotate-90 duration-300'>
        <HiArrowNarrowRight/>
        </span>
        </button>
      </div>
      </div>
    </div>
  )
}

export default Home