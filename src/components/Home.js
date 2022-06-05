import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen text-gray-300">
      {/* Container */}
      <div className="h-full mx-auto px-8 max-w-[1000px] flex flex-col justify-center slideIn">
        <p className="text-pink-600 font-bold ">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Prathmesh Chhabra
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I'm an Engineering Undergrad
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          I'm currently pursuing B.Tech in Computer Science and Engineering from
          NIT Hamirpur. I'm Executive Member at CSEC (Computer Science
          Engineer's Community) NITH which is a technical society of the
          Computer Science department of NITH.
        </p>

        {/* Button */}
        <div>
          <Link to="projects" smooth={true} duration={500}>
            <button className="text-white group font-bold px-5 py-4 my-2 border-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
              View Work
              <span className="ml-3 group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
