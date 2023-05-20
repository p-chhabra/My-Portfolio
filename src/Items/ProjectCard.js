import React from "react";
import styles from "./ProjectCard.module.css";

const ProjectCard = (props) => {
  return (
    <>
      <div className={styles.card}>
        <div className="flex flex-row">
          <h1 className={`${styles.title} hover:text-pink-600 duration-300`}>
            {props.title}
          </h1>
          <button
            onClick={() => {
              window.location.href = `${props.link}`;
            }}
            className="px-3 py-1 border-2 bg-[#111] border-[#987] text-[#987] font-bold flex items-center hover:text-pink-600  duration-300"
          >
            Github
          </button>
        </div>
        <div className={styles.imgCont}>
          <img src={props.img} alt="img" />
          <div className={styles.caption}>{props.tech}</div>
          <div className={styles.desc}>
            <p>{props.desc}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
