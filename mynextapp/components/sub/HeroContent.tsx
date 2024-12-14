"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/app/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col lg:flex-row items-center justify-center px-5 lg:px-20 mt-20 lg:mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-center lg:text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9] mx-auto lg:mx-0"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="font-ethnocentric Welcome-text text-[13px]">
            SPLURGE 2K24
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="font-ethnocentric flex flex-col gap-6 mt-6 text-3xl lg:text-6xl font-bold text-white max-w-[600px] w-auto h-auto mx-auto lg:mx-0"
        >
          <span>
            Welcome To
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              PGI&apos;s Techfest{" "}
            </span>
            splurge
          </span>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.8)}
          className="Michroma text-sm lg:text-lg text-gray-400 my-5 max-w-[600px] mx-auto lg:mx-0"
        >
          <p className="font-ethnocentric text-white">(It&apos;s Back, It&apos;s Big &amp; Better)</p>
          SPLURGE is an eagerly anticipated event that brings together students from diverse colleges to showcase their technical prowess and artistic flair. Come let&apos;s be a part of PGI family&apos;s symphony of innovation that defines who we are.
        </motion.div>
        <motion.div
          variants={slideInFromLeft(1)}
          className="Michroma py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px] mx-auto lg:mx-0"
        >
          <Link href="/aboutus">Explore More!</Link>
        </motion.div>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center mt-10 lg:mt-0"
      >
        <Image
          src="https://firebasestorage.googleapis.com/v0/b/splurge-techfest.appspot.com/o/purple.png?alt=media&token=23d9a816-f047-4fd8-a1d2-cfc56839b93b"
          alt="work icons"
          height={650}
          width={650}
          className="floating-image max-w-full h-auto"
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
