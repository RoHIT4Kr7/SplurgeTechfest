import React from 'react';
import Image from 'next/image';
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';
import Link from 'next/link';
const Footer = () => {
  return (
    <footer className="text-gray-400 py-2 z-10 Michroma footer-bg">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/2 lg:w-1/3 px-4 my-4">
            <div className="relative">
              <Image src="https://firebasestorage.googleapis.com/v0/b/splurge-techfest.appspot.com/o/eventsimages%2Ffooter.png?alt=media&token=6b1c4fe8-0b57-4e9e-a9b4-b673f5936a90" alt="Pailan Splurge Logo" width={224} height={80} className="absolute top-0 transition-transform transform hover:scale-110" />
            </div>
            <p className="text-justify mt-24 text-gray-300">
              Welcome to annual tech fest SPLURGE, organised by Pailan Group of Institutions.
            </p>
          </div>
          <div className="w-full md:w-1/3 lg:w-1/6 px-4 my-4">
            <h2 className="text-2xl pb-4 mb-4 border-b-4 border-purple-400 text-gray-200">About Us</h2>
            <ul className="leading-8">
              <li><Link href="/aboutus" className="hover:text-purple-400 transition-colors">About Us</Link></li>
              <li><Link href="https://firebasestorage.googleapis.com/v0/b/splurge-techfest.appspot.com/o/TERMS%20%26%20CONDITIONS.pdf?alt=media&token=401ecf55-ef19-49a2-8b59-9bf17736472b" target="_blank"
                  rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">Terms & Conditions</Link></li>
              <li><Link href="https://firebasestorage.googleapis.com/v0/b/splurge-techfest.appspot.com/o/PRIVACY%20%26%20POLICY.pdf?alt=media&token=96769751-9cbf-4cd3-80af-9cb7050c99f0" target="_blank"
                  rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">Privacy Policy</Link></li>
              <li><Link href="/contacts" className="hover:text-purple-400 transition-colors">Contact Us</Link></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 lg:w-1/6 px-4 my-4">
            <h2 className="text-2xl pb-4 mb-4 border-b-4 border-purple-400 text-gray-200">Follow Us</h2>
            <div className="flex space-x-2">
              {[
                { icon: FaFacebookF, href: "https://www.facebook.com/pgi.splurge" },
                { icon: FaInstagram, href: "https://www.instagram.com/splurge_pgi/#" },
                { icon: FaYoutube, href: "https://youtube.com/@pcmt-156?si=iHs9oLDqho_mWGXL" },
              ].map(({ icon: Icon, href }, index) => (
                <Link
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center h-10 w-10 bg-gray-800 border border-gray-600 rounded-full text-white hover:text-purple-400 hover:border-purple-400 transition-colors"
                >
                  <Icon className="w-4 h-4 fill-current" />
                </Link>
              ))}
            </div>
          </div>
          <div className="w-full lg:w-1/4 px-4 my-4">
            <h2 className="text-2xl pb-4 mb-4 border-b-4 border-purple-400 text-gray-200">Find Us Here</h2>
            <div className="w-full h-50 md:h-30 lg:h-40">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3687.928584360953!2d88.29748087532835!3d22.431713638119298!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a027af1aab16aaf%3A0xece882c96a7e3341!2sPailan%20College%20of%20Management%20%26%20Technology%2C%20PCMT!5e0!3m2!1sen!2sin!4v1721215103220!5m2!1sen!2sin"
                className="w-full h-full rounded-xl"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom py-4 text-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center">
            ©SPLURGE 2024. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
