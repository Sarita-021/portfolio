import React from "react";
import '../CSS/achievements.css';
import SwipeRightAltIcon from '@mui/icons-material/SwipeRightAlt';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import { colors } from "@mui/material";
import { orange } from "@mui/material/colors";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
    duration: 1200,
});

const Achievements = () => {
    return (
        <>
            <div id="achievements" style={{backgroundImage: "url(img/bgi.jpg)"}}>
                <div className="main-container">
                    <p className="title" data-aos="flip-up"><EmojiEventsIcon className="ach_icon" />Achievements</p>
                    <div className="container">
                        <p data-aos="fade-right"><SwipeRightAltIcon className="arrow" /> <span>AIR - 3784</span> in GATE CSE 2023</p>
                        <p data-aos="fade-right"><SwipeRightAltIcon className="arrow" /> Achieved a rank of <span>1485</span> in <span>LeetCode Weekly Contest</span></p> 
                        <p data-aos="fade-right"><SwipeRightAltIcon className="arrow" /> Advanced to the <span>finals</span> of Smart India Hackathon <span>SIH - 2022</span></p>
                        <p data-aos="fade-right"><SwipeRightAltIcon className="arrow" /> <span>Open-source</span> contributor in JGEC - Winter of Code'23</p>  
                        <p data-aos="fade-right"><SwipeRightAltIcon className="arrow" /> <span>1st</span> place in the University's <span>Monthly Coding Contest</span></p>
                        <p data-aos="fade-right"><SwipeRightAltIcon className="arrow" /> <span>Runner-up</span> position in <span>COFAS International's Softek contests</span></p>
                        <p data-aos="fade-right"><SwipeRightAltIcon className="arrow" /> Earned the distinction of being an <span>"ATL Girl"</span> in the 12th grade</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Achievements;