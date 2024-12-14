"use client";
import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import Image from 'next/image';

const AboutUs = () => {
  const aboutUsRef = useRef(null);
  const isInView = useInView(aboutUsRef, { triggerOnce: true });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated]);

  return (
    <div className="min-h-screen relative flex flex-col lg:flex-row items-center justify-center lg:justify-start overflow-hidden">
      <motion.div
        className="flex flex-col lg:flex-row p-12 bg-white bg-opacity-0 rounded-lg shadow-md items-center lg:items-start relative z-10 w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="w-full lg:w-1/2 order-2 lg:order-1 flex flex-col space-y-4">
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/splurge-techfest.appspot.com/o/ufo.png?alt=media&token=c0284067-e136-4ff1-af6a-c6c8f24257f7"
            alt="Image 2"
            width={600}
            height={600}
            className="rounded-lg floating-image mt-10 md:mt-0" // Adjust the margin top
          />
        </div>
        <div className="w-full lg:w-1/2 order-1 lg:order-2">
          <motion.h1
            ref={aboutUsRef}
            className="text-4xl lg:text-6xl mb-6 lg:mb-10 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 font-ethnocentric"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: hasAnimated ? 1 : 0, x: hasAnimated ? 0 : 100 }}
            transition={{ duration: 1 }}
          >
            About <span className='text-white'>Us</span>
          </motion.h1>
          <motion.div
            className="text-base lg:text-lg leading-relaxed text-slate-50 max-w-2xl Michroma"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: hasAnimated ? 1 : 0, x: hasAnimated ? 0 : 100 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <Typewriter
              words={[
                'You\'re invited to "SPLURGE 2024", a vibrant four-day Cultural and Technical Fiesta where creativity meets innovation! Immerse yourself in cultural delights like music, dance, art exhibitions, DJ nights, stand-up comedy, and fashion shows, showcasing student and renowned artist talents. Explore technical wonders through hackathons, coding competitions, robotics displays, and witness the future of technology unfold. Participate in competitions, quizzes, and workshops to win prizes and recognition, network with enthusiasts, experts, and thought leaders, and forge lasting connections. Don\'t miss this fantastic opportunity to experience the perfect blend of culture and technology - mark your calendars for "SPLURGE 2024" and get ready to be amazed, inspired, and entertained!'
              ]}
              loop={1}
              cursor
              cursorStyle=""
              typeSpeed={100}
              deleteSpeed={80}
              delaySpeed={2000}
            />
          </motion.div>
        </div>
      </motion.div>
      <div className="w-full h-full absolute">
        <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
          <video
            className="w-full h-full object-cover"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
            src="https://firebasestorage.googleapis.com/v0/b/splurge-techfest.appspot.com/o/cards-video.webm?alt=media&token=e024a940-fd65-4116-a403-e2fb62037509"
          />
        </div>
      </div>
    </div>

  );
};

export default AboutUs;
