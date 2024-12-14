import React from "react";
import HeroContent from "../sub/HeroContent";

const Hero = () => {
  return (
    <div className="relative flex flex-col h-full w-full" id="about-me">
      <video
        autoPlay
        muted
        loop
        className="rotate-180 absolute top-[-340px]  h-full w-full left-0 z-[1] object-cover] "
      >
        <source src="https://firebasestorage.googleapis.com/v0/b/splurge-techfest.appspot.com/o/blackhole.webm?alt=media&token=df679335-98b7-42a4-a2d0-6ae0f55de4c3" type="video/webm" />
      </video>
      <HeroContent />
    </div>
  );
};

export default Hero;
