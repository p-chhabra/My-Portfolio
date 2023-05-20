import React from "react";
import Fade from "react-reveal/Fade";
import ProjectCard from "../Items/ProjectCard";
import SemDetailIMG from "../assets/home.png";
import MealStoreIMG from "../assets/MealStore.png";
import TravelEliteIMG from "../assets/all_users.png";
import RFIDModelIMG from "../assets/download.jpeg";
import MaptyIMG from "../assets/Mapty.png";

const projectData = [
  {
    id: 1,
    title: "TravelELite",
    img: TravelEliteIMG,
    tech: "React | Express | MongoDB",
    desc: "TravelElite is a web application based on the MERN-(MongoDB, ExpressJS, ReactJS, NodeJS) tech stack. This application aims to connect people who like to travel and allows them store their captured memories on the site. A user can create his/her profile and upload the photos of pictures they have visited along with some relevant information about it.",
    link: "https://github.com/p-chhabra/TravelELite",
  },
  {
    id: 2,
    title: "SemDetail",
    img: SemDetailIMG,
    tech: "NextJS | MongoDB| Tailwind",
    desc: "Semester Detail Website is an online platform where a student can access the details related to different courses of all semesters with comfort and ease. It contains information on various fronts for all courses in a user friendly and easy to navigate manner",
    link: "https://github.com/p-chhabra/Semester-Detail-Website/tree/dev",
  },
  {
    id: 3,
    title: "RFID Model",
    img: RFIDModelIMG,
    tech: "Arduino | NodeJS | ReactJS",
    desc: "The RFID Attendance System is a project that allows you to track the attendance of students using RFID technology. This system uses an Arduino board, Node.js, Express, Mongoose, and React to capture RFID data, store it in a database, and display a list of present students in a web interface.",
    link: "https://github.com/p-chhabra/RFID-Attendance-system",
  },
  {
    id: 4,
    title: "Meal Store",
    img: MealStoreIMG,
    tech: "ReactJS | Firebase",
    desc: "A Real-Time physically-based rendering engine. Written in C++ and OpenGL. The engine supports direct lighting and image based indirect lighting using the 'Cook-Torrance' model. Additionally supports normal mapping and skybox rendering.",
    link: "https://github.com/p-chhabra/Food-Order-App",
  },
  {
    id: 5,
    title: "Mapty",
    img: MaptyIMG,
    tech: "ReactJS | LeafletJS",
    desc: "A map workout application which allows users to mark their workout location on the map and save it. The application uses the LeafletJS library to display the map. The application also uses the local storage to store the data of the user.",
    link: "https://github.com/p-chhabra/Map-Workout-Application",
  },
];

const Projects = () => {
  console.log(projectData[0].img);
  return (
    <Fade>
      <div name="projects" className="w-full h-full">
        <div className="max-w-[1100px] p-4 mx-auto flex flex-col justify-center w-full h-full text-gray-300">
          <div className="pb-8">
            <p className="text-4xl font-bold border-b-8 border-pink-600 pb-4">
              Projects
            </p>
            <p className="py-6 font-bold">// Check out some of my work</p>
          </div>
          <div className="cards">
            {projectData.map((item) => {
              return <ProjectCard {...item} key={item.id} />;
            })}
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default Projects;
