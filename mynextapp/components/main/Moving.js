"use client";
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

function Moving() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);
  return (
    <div className='w-full py-6 sm:py-10'>
      <div className='text-white text border-t-1 border-b-1 border-zinc-300 flex overflow-hidden whitespace-nowrap'>
        <motion.h1 
          initial={{ x: "0" }} 
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 8 }}
          className='text-4xl sm:text-8xl leading-none uppercase font-ethnocentric'
        >
          <div className='h-[15px] w-[15px] sm:h-[25px] sm:w-[25px] rounded-full inline-block bg-[#FE320A] m-[1vw]'> 
          </div>
          <span className='text-white'>HACKATHON</span>
          <div className='h-[15px] w-[15px] sm:h-[25px] sm:w-[25px] rounded-full inline-block bg-[#FE320A] m-[1vw]'> 
          </div><span className='text-white'>ROBOTICS</span>
          <div className='h-[15px] w-[15px] sm:h-[25px] sm:w-[25px] rounded-full inline-block bg-[#FE320A] m-[1vw]'> 
          </div><span className='text-white'>CONCERT</span>
          <div className='h-[15px] w-[15px] sm:h-[25px] sm:w-[25px] rounded-full inline-block bg-[#FE320A] m-[1vw]'> 
          </div><span className='text-white'>ESPORTS</span>
        </motion.h1>
        <motion.h1 
          initial={{ x: "0" }} 
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 8 }}
          className='text-4xl sm:text-8xl leading-none uppercase font-ethnocentric'
        >
          <div className='h-[15px] w-[15px] sm:h-[25px] sm:w-[25px] rounded-full inline-block bg-[#FE320A] m-[1vw]'> 
          </div>HACKATHON
          <div className='h-[15px] w-[15px] sm:h-[25px] sm:w-[25px] rounded-full inline-block bg-[#FE320A] m-[1vw]'> 
          </div>ROBOTICS
          <div className='h-[15px] w-[15px] sm:h-[25px] sm:w-[25px] rounded-full inline-block bg-[#FE320A] m-[1vw]'> 
          </div>CONCERT
          <div className='h-[15px] w-[15px] sm:h-[25px] sm:w-[25px] rounded-full inline-block bg-[#FE320A] m-[1vw]'> 
          </div>ESPORTS
        </motion.h1>
      </div>
    </div>
  )
}

export default Moving;
