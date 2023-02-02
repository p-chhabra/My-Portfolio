import React from "react";
import Fade from "react-reveal/Fade";

const Contact = () => {
  return (
    <Fade>
      <div
        name="contact"
        className="flex justify-center items-center p-4 w-full h-screen"
      >
        <form
          method="POST"
          action="https://getform.io/f/df38317b-b664-412f-ae8f-0d2e2492f224"
          className="flex flex-col w-full max-w-[600px]"
        >
          <div className="pb-8">
            <p className="text-4xl font-bold border-b-8 border-pink-600 text-gray-300">
              Contact
            </p>
            <p className="text-gray-300 py-4 font-bold">
              // Submit the form below or shoot me an email -
              p.chhabra2002@gmail.com
            </p>
          </div>
          <input
            required
            className="p-2 my-4 bg-[#ccd6f6]"
            type="text"
            placeholder="Name"
            name="name"
          />
          <input
            required
            className="p-2 my-4 bg-[#ccd6f6]"
            type="email"
            placeholder="Email"
            name="email"
          />
          <textarea
            required
            className="p-2 my-4 bg-[#ccd6f6]"
            placeholder="Type a Message"
            name="message"
            rows="10"
          ></textarea>
          <button className="px-4 py-3 my-8 border-2 border-gray-300 text-gray-300 font-bold mx-auto flex items-center hover:bg-pink-600 hover:border-pink-600 duration-300">
            Let's Collaborate
          </button>
        </form>
      </div>
    </Fade>
  );
};

export default Contact;
