import React from 'react'
import WorkImg from '../assets/workImg.jpeg'

const Projects = () => {
  return (
    <div name="projects" className='w-full bg-[#0a192f] md:h-screen'>
        <div className='max-w-[1000px] p-4 mx-auto flex flex-col justify-center w-full h-full text-gray-300'>
            <div className='pb-8'>
                <p className='text-4xl font-bold border-b-8 border-pink-600 pb-4'>Projects</p>
                <p className='py-6 font-bold'>// Check out some of my work</p>
            </div>

            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

                {/* Grid Item */}
                <div className='project-1 group shadow-lg shadow-[#040c16] container rounded-md flex justify-center items-center mx-auto my-4 border-b-8 border-[#17ce4e] hover:-translate-y-1 hover:border-2 hover:border-b-4 duration-500'>

                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-80 text-center'>
                        <span className='text-2xl font-bold text-white'>
                            Natours - Sass Design Project
                        </span>

                        <div className='pt-8 text-center'>
                            <a href="https://natours-1518.netlify.app/" target="_blank">
                                <button className='px-4 py-3 m-2 bg-white text-center rounded-lg text-gray-700 font-bold text-lg hover:scale-110 duration-300'>Demo</button>
                            </a>
                            <a href="https://github.com/p-chhabra/Natours" >
                                <button className='px-4 py-3 m-2 bg-white text-center rounded-lg text-gray-700 font-bold text-lg hover:scale-110 duration-300'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>


                <div className='project-2 group shadow-lg shadow-[#040c16] container rounded-md flex justify-center items-center mx-auto my-4 border-b-8 border-[#1251b1] hover:-translate-y-1 hover:border-2 hover:border-b-4  duration-500'>

                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100 text-center'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            WildPreserve - Custom CSS Design Project
                        </span>

                        <div className='pt-8 text-center'>
                            <a href="https://wildpreserve.netlify.app/" target="_blank">
                                <button className='px-4 py-3 m-2 bg-white text-center rounded-lg text-gray-700 font-bold text-lg hover:scale-110 duration-300'>Demo</button>
                            </a>
                            <a href="https://github.com/p-chhabra/Wild-Preserve-website" target="_blank">
                                <button className='px-4 py-3 m-2 bg-white text-center rounded-lg text-gray-700 font-bold text-lg hover:scale-110 duration-300'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>


                <div className='project-3 group shadow-lg shadow-[#040c16] container rounded-md flex justify-center items-center mx-auto my-4 border-b-8 border-[#e7f521] hover:-translate-y-1 hover:border-2 hover:border-b-4 duration-500'>

                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100 text-center'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Bankist - Vanilla JS functional project
                        </span>

                        <div className='pt-8 text-center'>
                            <a href="https://bankist-web-application.netlify.app/" target="_blank">
                                <button className='px-4 py-3 m-2 bg-white text-center rounded-lg text-gray-700 font-bold text-lg hover:scale-110 duration-300'>Demo</button>
                            </a>
                            <a href="https://github.com/p-chhabra/Bankist-Account-APP" target="_blank">
                                <button className='px-4 py-3 m-2 bg-white text-center rounded-lg text-gray-700 font-bold text-lg hover:scale-110 duration-300'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>


                <div className='project-4 group shadow-lg shadow-[#040c16] container rounded-md flex justify-center items-center mx-auto my-4 border-b-8 border-[#e7e7e7] hover:-translate-y-1 hover:border-2 hover:border-b-4 duration-500'>

                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100 text-center'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Mapty - Workout Tracking Project using map API
                        </span>

                        <div className='pt-8 text-center'>
                            <a href="https://map-workout-app.netlify.app/" target="_blank">
                                <button className='px-4 py-3 m-2 bg-white text-center rounded-lg text-gray-700 font-bold text-lg hover:scale-110 duration-300'>Demo</button>
                            </a>
                            <a href="https://github.com/p-chhabra/Map-Workout-Application" target="_blank">
                                <button className='px-4 py-3 m-2 bg-white text-center rounded-lg text-gray-700 font-bold text-lg hover:scale-110 duration-300'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>


                <div className='project-5 group shadow-lg shadow-[#040c16] container rounded-md flex justify-center items-center mx-auto my-4 border-b-8 border-[#ce1797] hover:-translate-y-1 hover:border-2 hover:border-b-4 duration-500'>

                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100 text-center'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Pig Game - A multiplayer 1v1 Dice Game
                        </span>

                        <div className='pt-8'>
                            <a href="https://dice-game-1v1.netlify.app/" target="_blank">
                                <button className='px-4 py-3 m-2 bg-white text-center rounded-lg text-gray-700 font-bold text-lg hover:scale-110 duration-300'>Demo</button>
                            </a>
                            <a href="https://github.com/p-chhabra/Pig-Game" target="_blank">
                                <button className='px-4 py-3 m-2 bg-white text-center rounded-lg text-gray-700 font-bold text-lg hover:scale-110 duration-300'>Code</button>
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