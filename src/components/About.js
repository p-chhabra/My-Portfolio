import React from "react";
import Fade from "react-reveal/Fade";

const About = () => {
  return (
    <Fade>
      <div name="about" className="w-full h-screen text-gray-300 ">
        <div className="w-full h-full flex flex-col justify-center items-center ">
          <div className="max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8">
            <div className="sm:text-right pb-8 pl-4">
              <p className="text-4xl font-bold inline border-b-8 border-pink-600">
                About
              </p>
            </div>
            <div></div>
          </div>
          <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
            <div className="sm:text-right font-bold text-4xl">
              <p>
                Hi! I'm Prathmesh. Nice to meet you. Please take a look around.
              </p>
            </div>
            <div className="">
              <p>
                I am a full-stack developer with a passion for building web
                applications and learning new technologies. I am currently
                pursuing my B.Tech in Computer Science and Engineering from
                National Institute of Technology, Hamirpur. I am a quick learner
                and a team player. I am always looking for opportunities to
                learn and grow.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default About;
