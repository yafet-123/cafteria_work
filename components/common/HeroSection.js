import React, { useEffect, useRef } from 'react';
import Image from "next/image";
import Link from 'next/link'
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import Slider, { Settings, LazyLoadTypes } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export function HeroSection() {
  const heroContent = [
    {
      image: "home-1",
      description1:"Tradational & Hygine",
      head:"For the love of delicious food",
      description2:"Come with family & feel the joy of mouthwatering food",
    },

    {
      image: "home-2",
      description1:"Delightful experience",
      head:"Flavors Inspired by the Seasons",
      description2:"Come with family & feel the joy of mouthwatering food",
    },
    {
      image: "home-3",
      description1:"Amazing & delicious",
      head:"Where every flavor tells a story",
      description2:"Come with family & feel the joy of mouthwatering food",
    },
  ]

  var settings = {
    dots: false,
    lazyLoad: true,
    fade: true,
    infinite: true,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 3000,
  };

  return (
    <section className="w-full h-full lg:h-[100vh] relative overflow-hidden" aria-label="home" id="home">
      <Slider {...settings}>
        {  heroContent.map((hero,index)=>(
          <div 
            key={index}
            className={`${hero.image} w-full h-full lg:h-screen bg-fixed pt-40 flex flex-col px-5 lg:px-0 py-20 lg:py-0`}
          >
            <div className={`lg:absolute lg:top-1/2 lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:-translate-y-1/2 flex flex-col justify-center items-center ${ index == 0 ? "z-50" : "z-0"} `}>
              <p className="text-[#d6b987] text-xl label-2 text-center pt-20 mb-5 animate-bottomToTop delay-1">{hero.description1}</p>
              <Image 
                className="w-[100px] text-[#e3c48f] " 
                src='/separator.svg'
                width="100px"
                height="50%"
              />
              <h1 
                className="font-serif text-white text-6xl lg:text-7xl font-light text-center mb-5 animate-bottomToTop delay-1" 
                style={{ transform: "translateY(30px)" }}
              >
                {hero.head}
              </h1>

              <p className="text-lg text-white my-5 text-center font-light leading-relaxed w-full lg:w-3/4 animate-bottomToTop delay-1">
                {hero.description2}
              </p>
              <Link href="/Menu">
                <a className="animate-bottomToTop delay-1 btn relative flex items-center justify-center text-[#dec08c] text-[1.2rem] font-medium uppercase tracking-[3px] max-w-max border-2 border-[#dec08c] px-[30px] py-[15px] overflow-hidden z-[1]">
                  <span className="transition ease-[ease] duration-[250ms] ">View Our Menu</span>
                  <span className="text text-2" aria-hidden="true">View Our Menu</span>
                </a>
              </Link>
            </div>
          </div>
        ))}
      </Slider>
      
  </section>
  );
};