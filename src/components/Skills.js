import React from "react";
import Fade from "react-reveal/Fade";
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import Node from "../assets/node.png";
import GitHub from "../assets/github.png";
import Tailwind from "../assets/tailwind.png";
import Mongo from "../assets/mongo.png";
import CPP from "../assets/c++.png";
import Bootstrap from "../assets/bootstrap.png";
import Linux from "../assets/linux.png";
import Git from "../assets/git.png";
import SQL from "../assets/SQL.png";
import TypeScript from "../assets/Typescript.png";
import Next from "../assets/Next.png";
import Express from "../assets/Express.png";

const Skills = () => {
  return (
    <Fade>
      <div name="skills" className="bg-[#0a192f] h-full mb-48">
        {/* Container */}
        <div className="w-full h-full flex flex-col justify-center max-w-[1000px] mx-auto p-4 text-gray-300">
          <div>
            <p className="text-4xl font-bold text-gray-300 py-4 border-b-8 border-pink-600">
              Skills
            </p>
            <p className="py-4 font-bold">
              // These are the technologies I have worked with
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8 w-full text-gray-300">
            <div className="group shadow-md shadow-[#040c16] hover:shadow-pink-600 hover:scale-110 duration-500">
              <img className="w-20 mx-auto" src={HTML} alt="HTML img" />
              <p className="my-4 group-hover:text-pink-400">HTML</p>
            </div>
            <div className="group shadow-md shadow-[#040c16] hover:shadow-pink-600 hover:scale-110 duration-500">
              <img className="w-20 mx-auto" src={CSS} alt="HTML img" />
              <p className="my-4 group-hover:text-pink-400">CSS</p>
            </div>
            <div className="group shadow-md shadow-[#040c16] hover:shadow-pink-600 hover:scale-110 duration-500">
              <img className="w-20 mx-auto" src={Tailwind} alt="HTML img" />
              <p className="my-4 group-hover:text-pink-400">Tailwind</p>
            </div>
            <div className="group shadow-md shadow-[#040c16] hover:shadow-pink-600 hover:scale-110 duration-500">
              <img className="w-20 mx-auto" src={Bootstrap} alt="HTML img" />
              <p className="my-4 group-hover:text-pink-400">Bootstrap</p>
            </div>
            <div className="group shadow-md shadow-[#040c16] hover:shadow-pink-600 hover:scale-110 duration-500">
              <img className="w-20 mx-auto" src={CPP} alt="HTML img" />
              <p className="my-4 group-hover:text-pink-400">C++</p>
            </div>
            <div className="group shadow-md shadow-[#040c16] hover:shadow-pink-600 hover:scale-110 duration-500">
              <img className="w-20 mx-auto" src={JavaScript} alt="HTML img" />
              <p className="my-4 group-hover:text-pink-400">JavaScript</p>
            </div>
            <div className="group shadow-md shadow-[#040c16] hover:shadow-pink-600 hover:scale-110 duration-500">
              <img className="w-20 mx-auto" src={TypeScript} alt="HTML img" />
              <p className="my-4 group-hover:text-pink-400">TypeScript</p>
            </div>
            <div className="group shadow-md shadow-[#040c16] hover:shadow-pink-600 hover:scale-110 duration-500">
              <img className="w-20 mx-auto" src={ReactImg} alt="HTML img" />
              <p className="my-4 group-hover:text-pink-400">React</p>
            </div>
            <div className="group shadow-md shadow-[#040c16] hover:shadow-pink-600 hover:scale-110 duration-500">
              <img className="w-20 mx-auto" src={Next} alt="HTML img" />
              <p className="my-4 group-hover:text-pink-400">Next.js</p>
            </div>
            <div className="group shadow-md shadow-[#040c16] hover:shadow-pink-600 hover:scale-110 duration-500">
              <img className="w-20 mx-auto" src={Node} alt="HTML img" />
              <p className="my-4 group-hover:text-pink-400">Node.js</p>
            </div>
            <div className="group shadow-md shadow-[#040c16] hover:shadow-pink-600 hover:scale-110 duration-500">
              <img className="w-20 mx-auto" src={Express} alt="HTML img" />
              <p className="my-4 group-hover:text-pink-400">Express.js</p>
            </div>
            <div className="group shadow-md shadow-[#040c16] hover:shadow-pink-600 hover:scale-110 duration-500">
              <img className="w-20 mx-auto" src={Mongo} alt="Next img" />
              <p className="my-4 group-hover:text-pink-400">Mongodb</p>
            </div>
            <div className="group shadow-md shadow-[#040c16] hover:shadow-pink-600 hover:scale-110 duration-500">
              <img className="w-20 mx-auto" src={SQL} alt="HTML img" />
              <p className="my-4 group-hover:text-pink-400">SQL</p>
            </div>
            <div className="group shadow-md shadow-[#040c16] hover:shadow-pink-600 hover:scale-110 duration-500">
              <img className="w-20 mx-auto" src={Git} alt="HTML img" />
              <p className="my-4 group-hover:text-pink-400">Git</p>
            </div>
            <div className="group shadow-md shadow-[#040c16] hover:shadow-pink-600 hover:scale-110 duration-500">
              <img className="w-20 mx-auto" src={GitHub} alt="HTML img" />
              <p className="my-4 group-hover:text-pink-400">Github</p>
            </div>
            <div className="group shadow-md shadow-[#040c16] hover:shadow-pink-600 hover:scale-110 duration-500">
              <img className="w-20 mx-auto" src={Linux} alt="HTML img" />
              <p className="my-4 group-hover:text-pink-400">Linux</p>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default Skills;
