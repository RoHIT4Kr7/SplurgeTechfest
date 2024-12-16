import React, { useState } from "react";
import Swiperapp from "@/components/main/Swiper";
import SparkleButton from "./SparkleButton";
import "./Accomodation.css";
const Accom2 = () => {
  const [activeIndex, setActiveIndex] = useState(0); // Default to "Accommodation Policies"

  const toggleSection = (index) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  const sections = [
    {
      title: "Accommodation Policies",
      content: `
   • Booking dates are from 18th–21st January
 • All accommodation bookings must be made through the official Splurge Tech Fest
 website.
 • Full payment is required at the time of booking.
 • Payments are non-refundable
`,
    },
    {
      title: "Contacts",
      content: `
        Suman Das:\n
        Phone: +91 97498 03821 \n
        Email: das60suman@gmail.com\n\n
        Adarsh Pandey:\n
        Phone: +91 86177 58589 \n
        Email: adarshpandey2502@gmail.com
      `,
    },
  ];

  return (
    <div className="flex flex-col lg:flex-row items-start lg:items-start space-y-4 lg:space-y-0 lg:space-x-10">
      <div className="w-full lg:w-1/2 lg:mt-30 lg:mt-0 lg:ml-60">
        <Swiperapp />
        <div className="hidden lg:block Michroma mt-5">
          <SparkleButton text="BOOK NOW!" />
        </div>
      </div>
      <div className="w-full lg:w-1/2 mt-10 lg:mt-10">
        {sections.map((section, index) => (
          <div key={index} className="w-full">
            <div className="w-full">
              <div className="cursor-pointer py-2 px-4 font-bold text-lg Michroma rounded-2xl">
                <div className="w-full flex">
                  <SparkleButton
                    text={section.title}
                    onClick={() => toggleSection(index)}
                  />
                </div>
              </div>
            </div>
            {activeIndex === index && (
              <div className="content-container mt-2 py-4 px-6 border-2 border-gray-300 Michroma rounded-xl text-white mr-5 ">
                <p className="text-red-600">
                  *SEPARATE HOSTEL FACILITIES FOR GIRLS AND BOYS
                </p>
                <p>{section.content}</p>
                <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                  <a
                    href="https://firebasestorage.googleapis.com/v0/b/splurge-techfest.appspot.com/o/ACCOMODATION.pdf?alt=media&token=47eda1bb-7778-4a60-b2b0-16377627de4f"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    TERMS AND CONDITIONS
                  </a>
                </button>
              </div>
            )}
          </div>
        ))}
        <button className="text-white mt-5 Michroma ml-5 lg:hidden block">
          BOOK NOW!
        </button>
      </div>
    </div>
  );
};

export default Accom2;
