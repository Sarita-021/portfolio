import React from "react";
import Jyoti from "../details";
import Main from "../Components/main";
import Education from "../Components/education";
import Skillbox from "../Components/skillbox";
import Achievements from "../Components/achievement";
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
                    <Main props={Jyoti} />
                    <Achievements />
                    <Education props={Jyoti} />
                    <Skillbox props={Jyoti} />
                </div>
            </main>
        </>
    );
};

export default Home; 