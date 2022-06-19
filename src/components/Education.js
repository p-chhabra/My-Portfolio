import React from "react";
import { FaRegBell } from "react-icons/fa";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Education = () => {
  return (
    <div
      name="education"
      className="h-full mx-auto mb-48 w-full max-w-[1000px] p-4"
    >
      <p className="text-4xl font-bold text-gray-300 border-b-8 border-pink-600 py-4">
        Education
      </p>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2020 - present"
          dateClassName="text-gray-300 font-bold"
          intersectionObserverProps={1}
          contentStyle={{
            background: "#0a192f",
            borderBottom: "solid rgb(209, 213, 219)",
          }}
          iconStyle={{
            background: "rgb(219, 39, 119)",
            color: "rgb(209, 213, 219)",
          }}
        >
          <div className="flex flex-col text-gray-300 ">
            <h1 className="text-2xl py-1 font-bold">NIT Hamirpur</h1>
            <h3 className="py-3 font-bold">Bachelor of Technology</h3>
            <p>Branch: Computer Science and Engineering</p>
            <p>Grade: 9.11</p>
          </div>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2018 - 2020"
          dateClassName="text-gray-300 font-bold"
          intersectionObserverProps={1}
          contentStyle={{
            background: "#0a192f",
            borderBottom: "solid rgb(209, 213, 219)",
          }}
          iconStyle={{ background: "rgb(219, 39, 119)", color: "#fff" }}
        >
            <div className="flex flex-col text-gray-300 ">
            <h1 className="text-2xl py-1 font-bold">Partap World School</h1>
            <h3 className="py-3 font-bold">Sr. Secondary Education</h3>
            <p>Jee Mains Percentile: 98.92</p>
            <p>Grade: 96.3%</p>
          </div>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2016 - 2018"
          dateClassName="text-gray-300 font-bold"
          intersectionObserverProps={1}
          contentStyle={{
            background: "#0a192f",
            borderBottom: "solid rgb(209, 213, 219)",
          }}
          iconStyle={{ background: "rgb(219, 39, 119)", color: "#fff" }}
        >
            <div className="flex flex-col text-gray-300">
            <h1 className="text-2xl py-1 font-bold">Partap World School</h1>
            <h3 className="py-3 font-bold">Secondary Education</h3>
            <p>Educare Space Olympiad: State Rank 4</p>
            <p>Grade: 93.2%</p>
          </div>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default Education;
