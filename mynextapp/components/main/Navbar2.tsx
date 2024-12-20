"use client";
import { Socials } from "@/constants";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import "./Navbar.css";

const MenuIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    className="w-6 h-6 text-white"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M4 6h16M4 12h16m-7 6h7"
    />
  </svg>
);

const XIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    className="w-6 h-6 text-white"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

const Navbar2 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState<{ id: number; email: string; name: string } | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    const loginTime = localStorage.getItem('loginTime');
    const currentTime = Date.now();

    if (storedUser && loginTime && currentTime - parseInt(loginTime) < 24 * 60 * 60 * 1000) {
      setUser(JSON.parse(storedUser));
    } else {
      localStorage.removeItem('user');
      localStorage.removeItem('loginTime');
    }
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('loginTime');
    setUser(null);
  };

  return (
    <div className="Michroma w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-[500] px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <a className="h-auto w-auto flex flex-row items-center">
          <Image
            src="/logo.png"
            alt="logo"
            width={70}
            height={70}
            className="cursor-pointer hover:animate-slowspin"
          />
          <Image
            src="/Splurge.png"
            alt="logo"
            width={90}
            height={90}
            className="pl-3 cursor-pointer hover:animate-slowspin"
          />
        </a>

        <div className="hidden md:flex w-[700px] h-full flex-row items-center justify-between md:mr-4">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] px-[20px] py-[10px] rounded-full text-white">
            <Link href="/default" className="cursor-pointer hover:text-[#FF00FF]">
              Home
            </Link>
            <Link href="/events" className="cursor-pointer hover:text-[#FF00FF]">
              Events
            </Link>
            <Link href="/aboutus" className="cursor-pointer hover:text-[#FF00FF]">
              About Us
            </Link>
            <Link href="/accomodation" className="cursor-pointer hover:text-[#FF00FF]">
              Accomodation
            </Link>
            <Link href="/contacts" className="cursor-pointer hover:text-[#FF00FF]">
              Contact Us
            </Link>
          </div>
        </div>

        <div className="hidden md:flex flex-row gap-1 text-white">
          {user ? (
            <div className="flex items-center">
              <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center">
                {user.name.charAt(0)}
              </div>
              <span className="ml-2">Hi, {user.name}</span>
              <button onClick={handleLogout} className="ml-4 cursor-pointer hover:text-[#FF00FF]">
                Logout
              </button>
            </div>
          ) : (
            <>
              <Link href="/login" className="cursor-pointer hover:text-[#FF00FF]">
                LOGIN
              </Link>
              /
              <Link href="/signup" className="cursor-pointer hover:text-[#FF00FF]">
                REGISTER
              </Link>
            </>
          )}
        </div>

        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="focus:outline-none">
            {isOpen ? <XIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="absolute top-[50px] inset-0 md:hidden flex flex-col items-center bg-[#060620d8] border-t border-[#7042f861] w-full h-screen text-white text-2xl">
          <Link href="/default" className="cursor-pointer py-8 w-full text-center mt-20 border-b border-[#ececec] rounded-full hover:text-[#FF00FF]">
            Home
          </Link>
          <Link href="/events" className="cursor-pointer py-8 w-full text-center border-b border-[#ececec] rounded-full hover:text-[#FF00FF]">
            Events
          </Link>
          <Link href="/aboutus" className="cursor-pointer py-8 w-full text-center border-b border-[#ececec] rounded-full hover:text-[#FF00FF]">
            About Us
          </Link>
          <Link href="/accomodation" className="cursor-pointer py-8 w-full text-center border-b border-[#ececec] rounded-full hover:text-[#FF00FF]">
            Accomodation
          </Link>
          <Link href="/contacts" className="cursor-pointer py-8 w-full text-center border-b border-[#ececec] rounded-full hover:text-[#FF00FF]">
            Contact Us
          </Link>
          <div className="flex flex-row gap-5 mt-20">
            {Socials.map((social) => (
              <a href={social.link} target="_blank" rel="noopener noreferrer" key={social.name}>
                <Image
                  src={social.src}
                  alt={social.name}
                  width={40}
                  height={40}
                />
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar2;