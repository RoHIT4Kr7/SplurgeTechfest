"use client";
import React from "react";
import { motion } from "framer-motion";
import { slideInFromTop } from "@/app/utils/motion";
import Image from "next/image";

const Encryption = ({ onUnlock }: { onUnlock: () => void }) => {
  return (
    <div className="font-ethnocentric flex flex-col relative items-center justify-center min-h-screen w-full h-full">
      <div className="absolute w-auto h-auto top-8 z-[5]">
        <motion.div
          variants={slideInFromTop}
          className="text-[40px] font-medium text-center text-gray-200"
        >
          WELCOME
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            {" "}
            TO{" "}
          </span>
          SPLURGE
        </motion.div>
      </div>

      <div className="Mobile-img flex flex-col items-center justify-center absolute z-[20] w-auto h-auto mt-10 sm:mt-5 md:mt-2 lg:mt-0">
        <div onClick={onUnlock} className="flex flex-col items-center group cursor-pointer w-auto h-auto">
          <Image
            src="/LockTop.png"
            alt="Lock top"
            width={50}
            height={50}
            className="w-[40px] sm:w-[40px] md:w-[40px] lg:w-[50px] translate-y-5 sm:translate-y-3 md:translate-y-2 lg:translate-y-5 transition-all duration-200 group-hover:translate-y-11 sm:group-hover:translate-y-9 md:group-hover:translate-y-7 lg:group-hover:translate-y-11"
          />
          <Image
            src="/LockMain.png"
            alt="Lock Main"
            width={70}
            height={70}
            className="z-10 w-[50px] sm:w-[60px] md:w-[50px] lg:w-[70px]"
          />
        </div>

        <div className="Mobile Welcome-box px-[15px] py-[4px] z-[20] border my-[20px] border-[#7042f88b] opacity-[0.9]">
          <h1 className="Welcome-text text-[12px]">Encryption</h1>
        </div>
      </div>
      
      <div className="absolute z-[20] bottom-[70px] px-[5px]">
        <div className="font-ethnocentric text-[20px] font-medium text-center text-gray-300">
          UNLOCK TO EXPERIENCE SPLURGE 2024
        </div>
      </div>

      <div className="w-full flex items-center justify-center absolute top-0 bottom-0 z-[-1]">
        <video
          loop
          muted
          autoPlay
          playsInline
          preload="auto"
          className="w-full h-auto"
          src="https://firebasestorage.googleapis.com/v0/b/splurge-techfest.appspot.com/o/encryption.webm?alt=media&token=8c98ed59-df95-4bd3-8305-53796f9e3649"
        />
      </div>
    </div>
  );
};

export default Encryption;
