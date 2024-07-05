import React from "react";
import { SiLinkedin, SiGithub, SiLeetcode, SiMedium, SiGmail } from 'react-icons/si';
import "../CSS/socials.css";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
    duration: 1200
});

const Socials = () => {
    return (
        <div className="socials">
            <div>
                <a href="https://github.com/Sarita-021" data-aos="zoom-in-down" ><SiGithub style={{ color: "rgb(213, 213, 213)" }} className="social_icons" /></a>
                <a href="https://leetcode.com/u/Sarita_021/" data-aos="zoom-in-down" ><SiLeetcode style={{ color: "rgb(213, 213, 213)" }} className="social_icons" /></a>
                <a href="mailto:pansaritawar@gmail.com" data-aos="zoom-in-down" ><SiGmail style={{ color: "rgb(213, 213, 213)" }} className="social_icons" /></a>
                <a href="https://medium.com/@pansaritawar" data-aos="zoom-in-down" ><SiMedium style={{ color: "rgb(213, 213, 213)" }} className="social_icons" /></a>
                <a href="https://www.linkedin.com/in/sarita021/" data-aos="zoom-in-down" ><SiLinkedin style={{ color: "rgb(213, 213, 213)" }} className="social_icons" /></a>
            </div>
        </div>
    )
}

export default Socials;