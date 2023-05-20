import React from "react";
import linkedin from "../assets/linkedin.png";
import instagram from "../assets/instagram.png";
import twitter from "../assets/twitter.png";
import github from "../assets/github.png";
import Fade from "react-reveal/Fade";

const Footer = () => {
  return (
    <Fade>
      <div className="w-full max-w-1000xp flex flex-col justify-center items-center text-gray-300 font-bold pt-40 pb-10">
        <div className="p-4 flex justify-center items-center">
          <a
            href="https://www.linkedin.com/in/prathmesh-chhabra-51760719b/"
            target="_blank"
          >
            <img
              src={linkedin}
              className="w-10 mx-3 hover:-translate-y-1 duration-300"
              alt="logo"
            />
          </a>
          <a href="https://www.instagram.com/p_chhabra8/" target="_blank">
            <img
              src={instagram}
              className="w-10 mx-3 hover:-translate-y-1 duration-300"
              alt="logo"
            />
          </a>
          <a href="https://twitter.com/home" target="_blank">
            <img
              src={twitter}
              className="w-10 mx-3 hover:-translate-y-1 duration-300"
              alt="logo"
            />
          </a>
          <a href="https://github.com/p-chhabra" target="_blank">
            <img
              src={github}
              className="w-10 mx-3 hover:-translate-y-1 duration-300"
              alt="logo"
            />
          </a>
        </div>
        <div className="p-4">
          <p className="text-center">Some Rights Reserved @Prathmesh Chhabra</p>
        </div>
      </div>
    </Fade>
  );
};

export default Footer;
