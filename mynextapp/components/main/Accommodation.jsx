"use client";
import React from "react";
import Image from "next/image";
import "./Accomodation.css";
import Accom2 from "@/components/main/Accom2";
import HorizontalCard from "@/components/main/Creekcard";

const Accommodation = () => {
  return (
    <>
      <div className="promo-banner-container z-10">
        <div className="notification-bar mt-32 lg:text-xl">
          <a
            href="https://the-creek-club.kolkatahotels.org/en/"
            target="_blank"
            rel="noopener noreferrer"
          >
            BOOK PREMIUM ROOMS AT CREEK CLUB @25% OFF, VALID ONLY TILL
            SPLURGE&apos;24.
          </a>
        </div>
        <Image
          src="https://firebasestorage.googleapis.com/v0/b/splurge-techfest.appspot.com/o/bg_accom.jpg?alt=media&token=7558772a-9f45-4ac9-8043-c424e435fc69"
          alt="Background"
          className="background-image"
          fill
          style={{ objectFit: "cover" }}
        />
        <h1 className="text-3xl lg:text-6xl promo-text font-ethnocentric text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
          ACCOMMODATION
        </h1>
      </div>

      {/* Centering the text and controlling the border width */}
      <div className="flex justify-center mt-10">
        <div className="font-ethnocentric inline-block text-4xl text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-blue-700 border-b-4 border-purple-400">
          OUR HOSTEL FACILITIES
        </div>
      </div>

      <div className="z-10 mt-10">
        <Accom2 />
      </div>
      <div className="mt-5 z-10">
        <HorizontalCard />
      </div>
    </>
  );
};

export default Accommodation;
