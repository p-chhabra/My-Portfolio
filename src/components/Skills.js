import React from 'react'

import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';
import FireBase from '../assets/firebase.png';
import AWS from '../assets/aws.png';
import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';
import Mongo from '../assets/mongo.png';
import CPP from '../assets/c++.png';
import Bootstrap from '../assets/bootstrap.png'
import Linux from '../assets/linux.png';
import Sass from '../assets/sass.png'
import Git from '../assets/git.png'


const Skills = () => {
  return (
    <div name="sills" className="bg-[#0a192f] w-full h-screen">
        {/* Container */}
        <div className='w-full h-full flex flex-col justify-center max-w-[1000px] mx-auto p-4 text-gray-300'>
            <div>
                <p className='text-4xl text-gray-300 py-4 border-b-4 border-pink-600'>Skills</p>
                <p className='py-4'>These are the technologies I have worked with</p>
            </div>

        <div className='grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8 w-full text-gray-300'>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={HTML} alt="HTML img" />
                <p className='my-4'>HTML</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={CSS} alt="HTML img" />
                <p className='my-4'>CSS</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={JavaScript} alt="HTML img" />
                <p className='my-4'>JavaScript</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={ReactImg} alt="HTML img" />
                <p className='my-4'>React</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={Node} alt="HTML img" />
                <p className='my-4'>Node.js</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={Tailwind} alt="HTML img" />
                <p className='my-4'>Tailwind</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={GitHub} alt="HTML img" />
                <p className='my-4'>Github</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={CPP} alt="HTML img" />
                <p className='my-4'>C++</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={Bootstrap} alt="HTML img" />
                <p className='my-4'>Bootstrap</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={Linux} alt="HTML img" />
                <p className='my-4'>Linux</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={Sass} alt="HTML img" />
                <p className='my-4'>Sass</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={Git} alt="HTML img" />
                <p className='my-4'>Git</p>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Skills