"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS
import Link from "next/link"; // Import the StarsCanvas component

function Hovering() {
    
    useEffect(() => {
        AOS.init({ duration: 1000 }); // Initialize AOS with default settings

        const elemC = document.querySelector("#elem-container");
        const fixed = document.querySelector("#fixed-video");

        const handleMouseEnterContainer = () => {
            fixed.style.display = "block";
        };

        const handleMouseLeaveContainer = () => {
            fixed.style.display = "none";
        };

        const handleMouseEnterElement = (e) => {
            const video = e.target.getAttribute("data-video");
            const videoElement = fixed.querySelector("video");
            videoElement.src = video;
            videoElement.play();
        };

        if (elemC && fixed) {
            elemC.addEventListener("mouseenter", handleMouseEnterContainer);
            elemC.addEventListener("mouseleave", handleMouseLeaveContainer);

            const elems = document.querySelectorAll(".elem");
            elems.forEach((e) => {
                e.addEventListener("mouseenter", handleMouseEnterElement);
            });

            // Cleanup event listeners on component unmount
            return () => {
                elemC.removeEventListener("mouseenter", handleMouseEnterContainer);
                elemC.removeEventListener("mouseleave", handleMouseLeaveContainer);

                elems.forEach((e) => {
                    e.removeEventListener("mouseenter", handleMouseEnterElement);
                });
            };
        }
    }, []);

    useEffect(() => {
        const videos = document.querySelectorAll("#grid-container video");
        videos.forEach((video) => {
            video.play();
        });
    }, []);

    return (
        <div className="relative min-h-screen w-full bg-slate-950 py-16 px-4">
          <Link href="/events">  <button
  className="Michroma overflow-hidden  w-32 p-2 h-12 bg-black text-white border-none rounded-md text-xl font-bold cursor-pointer relative z-10 group"
>
  See All
  <span
    className="absolute w-36 h-32 -top-8 -left-2 bg-white rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-left"
  ></span>
  <span
    className="absolute w-36 h-32 -top-8 -left-2 bg-purple-600 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-left"
  ></span>
  <span
    className="absolute w-36 h-32 -top-8 -left-2 bg-purple-800 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-left"
  ></span>
  <span
    className="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-6 z-10"
    >Events</span
  >
</button></Link>
            <div id="fixed-video" className="h-[30vw] w-[24vw] rounded-lg fixed z-50 left-1/2 top-[25%] hidden lg:block">
                <video muted loop className="h-full w-full object-cover rounded-[15px]"></video>
            </div>

            {/* Grid for smaller Screens */}
            <div className="mt-8 grid gap-4 relative z-10 lg:hidden">
  <div className="flex overflow-x-auto snap-x snap-mandatory Michroma">
    <div className="snap-center shrink-0 w-full sm:w-1/2 md:w-1/3 p-2">
      <div className="overflow-hidden rounded-lg flex flex-col items-start p-4">
        <video src="https://firebasestorage.googleapis.com/v0/b/splurge-techfest.appspot.com/o/Nikitagandhimusic.mp4?alt=media&token=b7fa5cc1-bd62-458f-b35f-b1d5f469e6f0" alt="Live Performance" className="border overflow-hidden rounded-lg w-full h-full object-cover border-slate-100" muted loop autoPlay />
        <Link href="/events/bandprogram"><h2 className="mt-4 text-xl sm:text-2xl lg:text-3xl text-white bg-transparent font-bold">Live Performance</h2></Link>
      </div>
    </div>
    <div className="snap-center shrink-0 w-full sm:w-1/2 md:w-1/3 p-2">
      <div className="overflow-hidden rounded-lg flex flex-col items-start p-4">
        <video src="https://firebasestorage.googleapis.com/v0/b/splurge-techfest.appspot.com/o/fashion.mp4?alt=media&token=6789869a-bde7-4647-9362-4094a91b97f3" alt="eSports" className="border overflow-hidden rounded-lg w-full h-full object-cover border-slate-100" muted loop autoPlay />
    <Link href="/events/funfusion/4"><h2 className="mt-4 text-xl sm:text-2xl lg:text-3xl text-white bg-transparent font-bold">Fashion Show</h2></Link>
      </div>
    </div>
    <div className="snap-center shrink-0 w-full sm:w-1/2 md:w-1/3 p-2">
      <div className="overflow-hidden rounded-lg flex flex-col items-start p-4">
        <video src="https://firebasestorage.googleapis.com/v0/b/splurge-techfest.appspot.com/o/medicalcamp.mp4?alt=media&token=2d81cb5b-c06e-41a6-a68a-5337edc946bd" alt="Drone Competition" className="border overflow-hidden rounded-lg w-full h-full object-cover border-slate-100" muted loop autoPlay />
        <Link href="/events/medicalcamp"><h2 className="mt-4 text-xl sm:text-2xl lg:text-3xl text-white bg-transparent font-bold">Medical Camp</h2></Link>
      </div>
    </div>
    <div className="snap-center shrink-0 w-full sm:w-1/2 md:w-1/3 p-2">
      <div className="overflow-hidden rounded-lg flex flex-col items-start p-4">
        <video src="https://firebasestorage.googleapis.com/v0/b/splurge-techfest.appspot.com/o/Codingfest.mp4?alt=media&token=19ce354d-2bb7-4041-9c35-de3a81997103" alt="Drone Competition" className="border overflow-hidden rounded-lg w-full h-full object-cover border-slate-100" muted loop autoPlay />
        <Link href="/events/codefestchallenge"> <h2 className="mt-4 text-xl sm:text-2xl lg:text-3xl text-white bg-transparent font-bold">CodeFest Challenge</h2></Link>
      </div>
    </div>
    <div className="snap-center shrink-0 w-full sm:w-1/2 md:w-1/3 p-2">
      <div className="overflow-hidden rounded-lg flex flex-col items-start p-4">
        <video src="https://firebasestorage.googleapis.com/v0/b/splurge-techfest.appspot.com/o/esportsvideo.mp4?alt=media&token=6cab6269-cddc-4d85-a580-c24a1cfeab0b" alt="Drone Competition" className="border overflow-hidden rounded-lg w-full h-full object-cover border-slate-100" muted loop autoPlay />
        <Link href="/events/esports"><h2 className="mt-4 text-xl sm:text-2xl lg:text-3xl text-white bg-transparent font-bold">eSports</h2></Link> 
      </div>
    </div>
    {/* Add more cards as needed */}
  </div>
</div>


            {/* Hover Effects for larger Screens */}
            <div id="elem-container" className="font-ethnocentric hidden lg:grid relative z-10 mt-5">
                <div
                    className="elem h-[150px] w-full relative border-b border-slate-100 overflow-hidden rounded-[15px] flex items-center px-[2vw] group"
                    data-aos="fade-up"
                    data-video="https://firebasestorage.googleapis.com/v0/b/splurge-techfest.appspot.com/o/Nikitagandhimusic.mp4?alt=media&token=b7fa5cc1-bd62-458f-b35f-b1d5f469e6f0"
                >
                    <Link href="/events/bandprogram"><h2 className="text-[3vw] relative z-10 text-white">Live Performance</h2></Link>
                    <div className="overlay h-full w-full bg-slate-900 absolute left-0 top-[-100%] transition-all duration-250 ease-linear group-hover:top-0"></div>
                </div>
                <div
                    className="elem h-[150px] w-full relative border-b border-slate-100 overflow-hidden rounded-[15px] flex items-center px-[2vw] group"
                    data-aos="fade-up"
                    data-video="https://firebasestorage.googleapis.com/v0/b/splurge-techfest.appspot.com/o/fashion.mp4?alt=media&token=6789869a-bde7-4647-9362-4094a91b97f3"
                >
                    <Link href="/events/funfusion/4"><h2 className="text-[3vw] relative z-10 text-white">Fashion Show</h2></Link>
                    <div className="overlay h-full w-full bg-slate-900 absolute left-0 top-[-100%] transition-all duration-250 ease-linear group-hover:top-0"></div>
                </div>
                <div
                    className="elem h-[150px] w-full relative border-b border-slate-100 overflow-hidden flex rounded-[15px] items-center px-[2vw] group"
                    data-aos="fade-up"
                    data-video="https://firebasestorage.googleapis.com/v0/b/splurge-techfest.appspot.com/o/medicalcamp.mp4?alt=media&token=2d81cb5b-c06e-41a6-a68a-5337edc946bd"
                >
                   <Link href="/events/medicalcamp"> <h2 className="text-[3vw] relative z-10 text-white">Medical Camp</h2></Link>
                    <div className="overlay h-full w-full bg-slate-900 absolute left-0 top-[-100%] transition-all duration-250 ease-linear group-hover:top-0"></div>
                </div>
                <div
                    className="elem h-[150px] w-full relative border-b border-slate-100 overflow-hidden flex rounded-[15px] items-center px-[2vw] group"
                    data-aos="fade-up"
                    data-video="https://firebasestorage.googleapis.com/v0/b/splurge-techfest.appspot.com/o/Codingfest.mp4?alt=media&token=19ce354d-2bb7-4041-9c35-de3a81997103"
                >
                    <Link href="/events/codefestchallenge"><h2 className="text-[3vw] relative z-10 text-white">CodeFest Challenge</h2></Link>
                    <div className="overlay h-full w-full bg-slate-900 absolute left-0 top-[-100%] transition-all duration-250 ease-linear group-hover:top-0"></div>
                </div>
                <div
                    className="elem h-[150px] w-full relative border-b border-slate-100 overflow-hidden flex rounded-[15px] items-center px-[2vw] group"
                    data-aos="fade-up"
                    data-video="https://firebasestorage.googleapis.com/v0/b/splurge-techfest.appspot.com/o/esportsvideo.mp4?alt=media&token=6cab6269-cddc-4d85-a580-c24a1cfeab0b"
                >
                    <Link href="/events/esports"><h2 className="text-[3vw] relative z-10 text-white">eSports</h2></Link>
                    <div className="overlay h-full w-full bg-slate-900 absolute left-0 top-[-100%] transition-all duration-250 ease-linear group-hover:top-0"></div>
                </div>
                {/* Add more cards as needed */}
            </div>
        </div>
    );
}

export default Hovering;
