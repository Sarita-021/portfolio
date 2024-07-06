import React from 'react';
import "../CSS/experience.css";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { BsPersonWorkspace } from "react-icons/bs";

const Content = ({ text, tech }) => {
    return (
        <div>
            <p className="abt">
                {text}{" "}
            </p>

            {tech && (
                <>
                    <p className="abt">
                        Tech Stack
                    </p>
                    <div className="ts-cnt">
                        {tech.map((tech, index) => (
                            <span
                                key={tech.id}
                                index={index}
                                className="logo"
                            >
                                <tech.icon />
                            </span>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

const ExperienceCard = ({ experience }) => {
    const { logo, organisation, positions } = experience
    return (
        <VerticalTimelineElement
            contentStyle={{
                background: 'transparent',
                border: '0.1px solid #f96767',
                maxWidth: '600px'
            }}
            contentArrowStyle={{ borderRight: "10px solid  #f96767" }}
            date={experience.date}
            iconStyle={{ background: 'white', width: 55, height: 55 }}
            icon={
                <div className='icon-c'>
                    <img
                        src={logo}
                        alt={organisation}
                        className='icon'
                    />
                </div>
            }
        >

            <ol className='box'>
                {positions.map((position, index) => {
                    return <li
                        key={`card-${index}`}
                        className={`${index === positions.length - 1 ? "mb-0" : "mb-4"
                            } ml-4`}
                    >
                        <div className="dot"></div>
                        <h3 className="pos-title">
                            {position.title}
                        </h3>
                        <time className="pos-dur">
                            {position.duration}
                        </time>
                        {position.content.map((info, index) => (
                            <Content key={`content-${index}`} index={index} {...info} />
                        ))}
                    </li>
                })}
            </ol>
        </VerticalTimelineElement>
    );
};

const Experience = ({ props }) => {
    return (
        <div id="experience" >
            <div className='main-container'>
                <div className='title' data-aos="flip-down"><BsPersonWorkspace className='exp_icon' /> Experience</div>

                <div className='sub-cont'>
                    <VerticalTimeline>
                        {props.Experiences.map((experience, index) => (
                            <ExperienceCard
                                key={`experience-${index}`}
                                experience={experience}
                            />
                        ))}
                    </VerticalTimeline>
                </div>
            </div>
        </div>
    );
}

export default Experience;