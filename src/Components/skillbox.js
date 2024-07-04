import React, { useState } from "react";
import "../CSS/skill.css"
import {GiSkills} from "react-icons/gi"

const Skillbox = ({ props }) => {


    return (
        <div id="skills" style={{backgroundImage: "url(img/bg.jpg)"}}>
            <div className="main-container">
                <div className="title" data-aos="flip-left"><h2> <GiSkills /> Skills</h2></div>
                <div className="flex-container">
                {props.skills.map((Val) => {

                    return (
                        <>
                            <div className="container">
                            <div class="circle"></div>
                                <div className="skill_category" data-aos="zoom-in">
                                    <h3>{Val.category}</h3>
                                </div>
                                <div className="flex-cont">
                                    {Val.technology?.map((tech) => {
                                        return (
                                            <div className="skill_box" data-aos="zoom-out">
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