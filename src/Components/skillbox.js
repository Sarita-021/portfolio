import React, { useState } from "react";
import "../CSS/skill.css"
import { GiSkills } from "react-icons/gi"

const Skillbox = ({ props }) => {


    return (
        <div id="skills" style={{ backgroundImage: "url(img/bg.jpg)" }}>
            <div className="main-container">
                <div className="title" data-aos="flip-left"><h2> <GiSkills /> Skills</h2></div>
                <div className="flex-container">
                    {props.skills.map((Val, i) => {

                        return (
                            <>
                                <div className="container" key={i}>
                                    <div className="circle"></div>
                                    <div className="skill_category" data-aos="zoom-in">
                                        <h3>{Val.category}</h3>
                                    </div>
                                    <div className="flex-cont">
                                        {Val.technology?.map((tech, id) => {
                                            return (
                                                <div className="skill_box" data-aos="zoom-out" key={id}>
                                                    <div className="logo" ><tech.logo /></div>
                                                    <div className="skill_name" ><p>{tech.name}</p></div>
                                                </div>)
                                        }
                                        )
                                        }
                                    </div>

                                </div>
                            </>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Skillbox;