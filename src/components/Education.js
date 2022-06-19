import React from "react";
import { FaRegBell } from "react-icons/fa";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Education = () => {
  return (
    <div name="education" className="h-full mx-auto lg:h-screen w-full max-w-[1000px]">
        <p className="text-4xl font-bold text-gray-300 border-b-8 border-pink-600 py-4">Education</p>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2011 - present"
          dateClassName="text-gray-300 font-bold"
          iconStyle={{ background: "rgb(219, 39, 119)", color: "rgb(209, 213, 219)" }}
        >
          <h3 className="vertical-timeline-element-title">Creative Director</h3>
          <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
          <p>
            Creative Direction, User Experience, Visual Design, Project
            Management, Team Leading
          </p>
        </VerticalTimelineElement>
        
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2010 - 2011"
          dateClassName="text-gray-300 font-bold"
          iconStyle={{ background: "rgb(219, 39, 119)", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">Art Director</h3>
          <h4 className="vertical-timeline-element-subtitle">
            San Francisco, CA
          </h4>
          <p>
            Creative Direction, User Experience, Visual Design, SEO, Online
            Marketing
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2011 - present"
          dateClassName="text-gray-300 font-bold"
          iconStyle={{ background: "rgb(219, 39, 119)", color: "rgb(209, 213, 219)" }}
        >
          <h3 className="vertical-timeline-element-title">Creative Director</h3>
          <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
          <p>
            Creative Direction, User Experience, Visual Design, Project
            Management, Team Leading
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default Education;
