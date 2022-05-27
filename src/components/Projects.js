import React from 'react'
import WorkImg from '../assets/workImg.jpeg'

const Projects = () => {
  return (
    <div name="projects" className='w-full bg-[#0a192f] md:h-screen pt-32'>
        <div className='max-w-[1000px] p-4 mx-auto flex flex-col justify-center w-full h-full text-gray-300'>
            <div className='pb-8'>
                <p className='text-4xl font-bold border-b-8 border-pink-600 pb-4'>Projects</p>
                <p className='py-6'>// Check out some of my work</p>
            </div>

            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

                {/* Grid Item */}
                <div className='project-1 group shadow-lg shadow-[#040c16] container rounded-md flex justify-center items-center mx-auto'>

                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-80'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            ReactJs Application
                        </span>

                        <div className='pt-8 text-center'>
                            <a href="/">
                                <button className='px-4 py-3 m-2 bg-white text-center rounded-lg text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="/">
                                <button className='px-4 py-3 m-2 bg-white text-center rounded-lg text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>


                <div className='project-2 group shadow-lg shadow-[#040c16] container rounded-md flex justify-center items-center mx-auto'>

                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            ReactJs Application
                        </span>

                        <div className='pt-8 text-center'>
                            <a href="/">
                                <button className='px-4 py-3 m-2 bg-white text-center rounded-lg text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="/">
                                <button className='px-4 py-3 m-2 bg-white text-center rounded-lg text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>


                <div className='project-3 group shadow-lg shadow-[#040c16] container rounded-md flex justify-center items-center mx-auto'>

                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            ReactJs Application
                        </span>

                        <div className='pt-8 text-center'>
                            <a href="/">
                                <button className='px-4 py-3 m-2 bg-white text-center rounded-lg text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="/">
                                <button className='px-4 py-3 m-2 bg-white text-center rounded-lg text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>


                <div className='project-4 group shadow-lg shadow-[#040c16] container rounded-md flex justify-center items-center mx-auto'>

                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            ReactJs Application
                        </span>

                        <div className='pt-8 text-center'>
                            <a href="/">
                                <button className='px-4 py-3 m-2 bg-white text-center rounded-lg text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="/">
                                <button className='px-4 py-3 m-2 bg-white text-center rounded-lg text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Projects