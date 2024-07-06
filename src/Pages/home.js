import React from "react";
import Sarita from "../details";
import Main from "../Components/main";
import Education from "../Components/education";
import Skillbox from "../Components/skillbox";
import Achievements from "../Components/achievement";
import Experience from "../Components/experience";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
    duration: 1200,
});

const Home = () => {
    return (
        <>
            <main className="home">
                <div>
                    <Main props={Sarita} />
                    <Skillbox props={Sarita} />
                    <Experience props={Sarita} />
                    <Achievements />
                    <Education props={Sarita} />

                </div>
            </main>
        </>
    );
};

export default Home; 