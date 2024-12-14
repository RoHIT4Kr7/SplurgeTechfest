"use client";
import React from 'react'
import Hero from "@/components/main/Hero";
import AboutUs from "@/components/main/AboutUs"
import Navbar2 from "@/components/main/Navbar2";
import Moving from "@/components/main/Moving";
import Hovering from "@/components/main/Hovering";
import ClientLogoSlider from "@/components/main/LogoSlider"
import Footer from "@/components/main/Footer";

const HomeContent = () => {
  return (
    <>
    <div className="flex flex-col gap:5 lg:gap-20">
          <Navbar2/>
          <Hero />
          <AboutUs />
          <Moving/>
          <Hovering/>
          <div className='mb-20 lg:mb-0'><ClientLogoSlider/></div>
          <Footer/>
        </div>
    </>
  )
}

export default HomeContent