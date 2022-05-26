import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-[#0a192f] text-gray-300'>
        <div className='w-full h-full flex flex-col justify-center items-center '>
            <div className='max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-8 border-pink-600'>About</p>
                </div>
                <div>

                </div>
            </div>
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='sm:text-right font-bold text-4xl'>
                        <p>Hi! I'm Prathmesh. Nice to meet you. Please take a look around.</p>
                    </div>
                    <div className=''>
                        <p>I'm passionate about building software that improves the lives 
                            of those around me. I specialize in creating software for clients 
                            ranging from individuals to small-businesses all the way to large 
                            enterprise corporations. What would you do if you had a software expert
                            available at your fingertips.
                        </p>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default About