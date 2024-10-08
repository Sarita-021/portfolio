import React from "react";
import "../CSS/footer.css"
import Socials from "./socials";
import AOS from "aos";

AOS.init({
    duration: 1200,
    once: true
});

function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer>
            <div id="footer">
                <div className="main-container">
                    <div className="container flex-item">
                        <div className="txt" data-aos="fade-right" data-aos-easing="ease-in-sine">
                            <h2>Sarita</h2>
                            <p>MERN Stack Developer</p>
                        </div>
                        <div className="icons"><Socials /></div>
                        <div className="download-link">
                            <a className="resume" href="https://drive.google.com/file/d/1d2Q45q6oPo0ezZZBRPvRYPMn-lZryMSR/view?usp=drivesdk" >
                                <button className="mr btn" data-aos="fade-right" data-aos-offset="0">Resume</button>
                            </a>
                        </div>
                    </div>
                    <div className='myphoto flex-item' data-aos="zoom-in">
                        <img className="myph" alt="myimage" src={"img/myphoto.jpeg"} />
                    </div>
                </div>
                <div>
                    <p className="copyright"> Copyright ⓒ {year} , Making my own path</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;