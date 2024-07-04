import * as React from 'react';
import Socials from './socials';
import "../CSS/main.css";
import { useState, useEffect } from 'react';
import { useTypewriter } from 'react-simple-typewriter'
import AOS from "aos";
import "aos/dist/aos.css";
import SCarousel from "slick-carousel";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick";
import $ from 'jquery';
import Slider from "react-slick";

AOS.init({
    duration: 1200
});

$('.js-slick-carousel').each(function() {
    var slickCarousel = $.HSCore.components.HSSlickCarousel.init($(this));
});

const Main = ({ props }) => {


    const [profession] = useTypewriter({
        words: props.profession,
        loop: 0
    })

    return (
        <>
            <div className='wrapper'>
                <div className='container'>
                    <p className='greeting' data-aos="fade-up" data-aos-duration="1000"><span className='emoji' >👋</span> HEY THERE,</p>
                    <p className='greeting' data-aos="zoom-in-up" data-aos-delay="50000">I'm  <span className='my_name'> {props.name}</span></p>

                    <div className='myprofession' data-aos="fade-up" data-aos-delay="10000" data-aos-duration="4000">
                        <span>{profession}</span>
                    </div>
                    <div className='quote' data-aos="zoom-in-left" data-aos-delay="20000" data-aos-duration="8000">
                        <p>"Life is a series of 0s and 1s, and coding is the art of solving its problems."</p>
                        <p> -Jyoti</p>
                    </div>
                    <div className='socials' data-aos="zoom-in" data-aos-duration="10000"><Socials /></div>
                </div>
            </div>
        </>
    );
}


export default Main;