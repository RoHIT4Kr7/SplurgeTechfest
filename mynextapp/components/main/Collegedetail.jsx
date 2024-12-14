"use client";
import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';

const Collegedetail = () => {
  const aboutUsRef = useRef(null);
  const isInView = useInView(aboutUsRef, { triggerOnce: true });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated]);

  return (
    <div className="top-10 relative flex flex-col lg:flex-row items-center justify-center lg:justify-start overflow-hidden">
      <motion.div
        className="flex flex-col lg:flex-row p-8 bg-white bg-opacity-0 rounded-lg shadow-md items-center lg:items-start relative z-10 w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="w-full lg:w-1/2 order-1 lg:order-1">
          <motion.h1
            ref={aboutUsRef}
            className="text-4xl lg:text-6xl mb-4 lg:mb-0 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 font-ethnocentric"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: hasAnimated ? 1 : 0, x: hasAnimated ? 0 : -100 }}
            transition={{ duration: 1 }}
          >
            About <span className='text-white'>The</span>
            <p>College</p>
          </motion.h1>
        </div>
        <div className="w-full lg:w-full order-2 lg:order-2 lg:m-auto">
          <motion.div
            className="text-base lg:text-lg leading-relaxed text-slate-50 Michroma lg:max-w-2xl" // Added responsive classes
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: hasAnimated ? 1 : 0, x: hasAnimated ? 0 : 100 }}
            transition={{ duration: 1, delay: 0.5 }}
            style={{ textAlign: 'justify' }} // Justify text alignment
          >
            Pailan College of Management and Technology (PCMT) is a renowned private college situated in Kolkata, West Bengal, India, established in 2002. Affiliated with Maulana Abul Kalam Azad University of Technology (MAKAUT), the college offers a wide range of undergraduate and postgraduate programs in various fields, including Business Administration (BBA, MBA), Computer Science (BCA), Engineering (B.Tech), Hospitality Management (BHM). With a strong focus on industry-oriented education and skill development, PCMT aims to equip students with the necessary knowledge and expertise to excel in their chosen careers. The college boasts modern infrastructure, including smart classrooms, state-of-the-art labs, and well-stocked libraries, providing an ideal environment for learning and growth. Additionally, PCMT has established strong connections with the industry, ensuring ample opportunities for placements and internships. The college also encourages extracurricular activities, such as sports, cultural events, and clubs, to foster overall development and teamwork skills among students. By combining academic excellence with practical experience, PCMT strives to produce well-rounded professionals ready to make a meaningful impact in their respective fields.
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Collegedetail;
