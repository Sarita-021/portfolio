import * as React from 'react';
import { useState, useEffect, useRef } from 'react';
import "../CSS/project.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

AOS.init({
    duration: 1200
});


const Project = ({ props }) => {
    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);
    const [slider1, setSlider1] = useState(null);
    const [slider2, setSlider2] = useState(null);
    useEffect(() => {
        setNav1(slider1);
        setNav2(slider2);
    });

    const settings = {
        infinite: true,
        speed: 500,
        arrows: true,
        autoplaySpeed: 5000,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipeToSlide: true,
        asNavFor: ".sub-slider",
        pauseOnHover: true,
        focusOnSelect: true
    };
    const thumbnailSettings = {
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 500,
        arrows: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: ".main-slider",
        swipeToSlide: true,
        focusOnSelect: true,
        infinite: true,
        pauseOnHover: true
    };


    return (
        <div id='project' style={{ backgroundImage: "url(img/bgp.jpg)" }}>
            <div className='main-container'>
                <div className='title'>
                    <h3>A taste of what I can do for you </h3>
                    <p>Check what I made - this is worth a thousand words about me.</p>
                </div>
                <div className='project-container container'>
                    <Slider className='main-slider'  {...settings} asNavFor={nav2} ref={(slider) => { setSlider1(slider) }}>
                        {props.Projects.map((Val) => (
                            <div className='fun_box slick-slide' key={Val.id}>
                                <div className='project_img'>
                                    <img className='project_img1' src={Val.img} alt='img' />
                                    <div className='bg'></div>
                                    <a href={Val.glink} target="_blank"><button className='github btn'> Source Code </button></a>
                                    <a href={Val.demo} target="_blank"><button className='demo btn'> Live Demo </button></a>
                                </div>
                                <div className='project_text'>
                                    <div className='project_name'>
                                        <p>{Val.name}</p>
                                    </div>
                                    <div className='project_desp'>
                                        <p>{Val.description}</p>
                                    </div>
                                </div>

                            </div>
                        ))}
                    </Slider>
                </div>
                <div className='project-container container'>
                    <Slider className='sub-slider'  {...thumbnailSettings} asNavFor={nav1} ref={(slider) => { setSlider2(slider) }}>
                        {props.Projects.map((Val) => (
                            <div className='fun_box' key={Val.id}>
                                <div className='project_img'>
                                    <img className='project_img1' src={Val.img} alt='img' />
                                </div>
                                <hr />
                            </div>

                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
}

export default Project;