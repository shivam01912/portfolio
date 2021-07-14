import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { experiences } from "../data";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import moment from 'moment'

const iconStyle = {
  borderRadius: 50
};

var a = moment();
var b = moment('01-2019', 'MM-YYYY');
var age = moment.duration(a.diff(b));
var years = age.years();
var months = age.months();

export default function Experiences() {
  return (
    <section id="experiences" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <CodeIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Past Experience
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            I have been working as a Software Engineer for past {years} years and {months} months.
          </p>
        </div>
        <div>
          <VerticalTimeline>
          {experiences.map((experience) => (
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={experience.contentStyle}
              contentArrowStyle={experience.arrrowStyle}
              date={experience.time}
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff'}}
              icon={<img style={iconStyle}
              src={experience.icon}
            />}
            >
              <h3 className="vertical-timeline-element-title">{experience.company}</h3>
              <h4 className="vertical-timeline-element-subtitle">{experience.description}</h4>
              <p>
                {experience.cardDetailedText}
              </p>
            </VerticalTimelineElement>
          ))}
            <VerticalTimelineElement
              iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}/>
          </VerticalTimeline>
        </div>
        {/* <div className="flex flex-wrap -m-4">
          {experiences.map((experience) => (
            <a
              href={experience.link}
              key={experience.image}
              className="sm:w-1/2 w-100 p-4">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={experience.image}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                    {experience.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {experience.title}
                  </h1>
                  <p className="leading-relaxed">{experience.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div> */}
      </div>
    </section>
  );
}