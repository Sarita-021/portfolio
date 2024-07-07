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
            <div id="achievements" style={{ backgroundImage: "url(img/bgi.jpg)" }}>
                <div className="main-container">
                    <div className="title" data-aos="flip-up"><GiDiamondTrophy className="ach_icon" />Highlights</div>
                    <div className="container">
                        <p data-aos="fade-right"><SwipeRightAltIcon className="arrow" /> <span>School Topper</span> in 12th and 10th Standard.</p>
                        <p data-aos="fade-right"><SwipeRightAltIcon className="arrow" /> Accumulated <span>60+ Stars and 8+ Trophies</span> on GitHub.</p>
                        <p data-aos="fade-right"><SwipeRightAltIcon className="arrow" /> Excelled in the <span>IEEE</span> Web Development Bootcamp, earning a spot in the top <span>5%</span> of performers. </p>
                        <p data-aos="fade-right"><SwipeRightAltIcon className="arrow" /> <span>Open-source</span> contributor in <span>JGEC</span> - Winter of Code'23 and <span>GirlScript</span> Summer of Code'23.</p>
                        <p data-aos="fade-right"><SwipeRightAltIcon className="arrow" /> Contributed to a successful project organized by <span>MLSA</span>, achieving recognition among the <span>top 5 projects</span>.</p>
                        <p data-aos="fade-right"><SwipeRightAltIcon className="arrow" /> Attained a position among the <span>top 5K</span> students as a <span>Reliance Foundation Scholar</span>.</p>
                        <p data-aos="fade-right"><SwipeRightAltIcon className="arrow" /> Attained a position among the <span>top 5K</span> students as a <span>Pragati Scholarship by Govt. of India</span>.</p>
                        <p data-aos="fade-right"><SwipeRightAltIcon className="arrow" /> Achieved a Top <span>100</span> ranking in the <span>ICPC Algo Queen 2024 Challenge</span>, a competitive DSA coding competition.</p>
                        <p data-aos="fade-right"><SwipeRightAltIcon className="arrow" /> <span>Mentored</span> more than 50 students by leading <span>AI 900 Study Group</span> to become Microsoft Certified.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Achievements;