import React from "react";
import '../CSS/achievements.css';
import SwipeRightAltIcon from '@mui/icons-material/SwipeRightAlt';
import AOS from "aos";
import { GiDiamondTrophy } from "react-icons/gi";
import "aos/dist/aos.css";

AOS.init({
    duration: 1200,
});

const Achievements = () => {
    return (
        <>
            <div id="achievements" style={{ backgroundImage: "url(img/bga.jpg)" }}>
                <div className="main-container">
                    <div className="title" data-aos="flip-up"><GiDiamondTrophy className="ach_icon" />Highlights</div>
                    <div className="container">
                        <p data-aos="fade-right"><SwipeRightAltIcon className="arrow" /> <span>School Topper</span> in 12th and 10th Standard.</p>
                        <p data-aos="fade-right"><SwipeRightAltIcon className="arrow" /> Secured <span>First Rank</span> in <span>SIH 2024 Internal Hackathon</span>.</p>
                        <p data-aos="fade-right"><SwipeRightAltIcon className="arrow" /> "<span>Myntra HackerRamp: WeForShe 2024</span>" Semi-Finalist.</p>
                        <p data-aos="fade-right"><SwipeRightAltIcon className="arrow" /> Semi-Finalist at, <span>Flipkart GRiD 6.0 - Robotics Challenge</span>.</p>
                        <p data-aos="fade-right"><SwipeRightAltIcon className="arrow" /> Semi-Finalist at <span>Tata Imagination Challenge 2024</span>: Student Track.</p>
                        <p data-aos="fade-right"><SwipeRightAltIcon className="arrow" /> Among <span>Top 100</span> in the "<span>ICPC Algo Queen 2024 Challenge</span>" – a competitive DSA coding competition with 2K+ participants.</p>
                        <p data-aos="fade-right"><SwipeRightAltIcon className="arrow" /> "<span>Pragati Scholarship, Govt. of India 2022</span>" – Merit-based scholarship awarded to 5K female students pursuing B.Tech.</p>
                        <p data-aos="fade-right"><SwipeRightAltIcon className="arrow" /> "<span>Reliance Foundation Scholar 2022</span>" – Awarded to 5K students nationwide based on performance in the Aptitude Test & academic excellence.</p>
                        <p data-aos="fade-right"><SwipeRightAltIcon className="arrow" /> Attained prestigious recognition as an awardee of the "<span>Army Welfare Scholarship Scheme</span>" for 4 consecutive years (2018–2022).</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Achievements;