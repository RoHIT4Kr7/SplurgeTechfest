import React from "react";
import Image from "next/image";

const images = [
  'https://firebasestorage.googleapis.com/v0/b/splurge-techfest.appspot.com/o/eventsimages%2Fkolkata-the-creek-club-hotel-photo-25.JPEG?alt=media&token=53abf8b6-9966-4065-add5-c464807c98d2',
  'https://firebasestorage.googleapis.com/v0/b/splurge-techfest.appspot.com/o/eventsimages%2Fkolkata-the-creek-club-hotel-photo-35.JPEG?alt=media&token=d5254796-1342-493f-8d9b-b08f60ff7a3e',
  'https://firebasestorage.googleapis.com/v0/b/splurge-techfest.appspot.com/o/eventsimages%2Fkolkata-the-creek-club-hotel-photo-26.JPEG?alt=media&token=394a39da-eee9-4dde-8be3-17aed2e10e77',
  'https://firebasestorage.googleapis.com/v0/b/splurge-techfest.appspot.com/o/eventsimages%2Fkolkata-the-creek-club-hotel-photo-23.JPEG?alt=media&token=acf1a031-03ce-4d07-b3a3-c4a152b6554a'
  // Add more image URLs as needed
];

function getRandomImage() {
  const randomIndex = Math.floor(Math.random() * images.length);
  return images[randomIndex];
}

const HorizontalCard = () => {
  const randomImageSrc = getRandomImage();

  return (
    <div className="relative flex flex-col md:flex-row items-center">
      {/* Text Outside the Card */}
      <div className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 text-4xl font-semibold font-ethnocentric mb-4 md:absolute md:top-1/2 md:transform md:-translate-y-1/2 md:left-20 md:mb-0">
        FOR PREMIUM FACILITY:
      </div>

      {/* Card Section */}
      <div className="w-full max-w-xl lg:max-w-3xl md:ml-auto md:w-1/2 rounded-lg shadow-lg overflow-hidden">
        <div className="flex flex-col md:flex-row">
          {/* Image Section */}
          <div className="md:w-2/5">
            <Image
              src={randomImageSrc}
              alt="Card Image"
              width={500}
              height={500}
              className="w-full h-full object-cover"
            />
          </div>
          {/* Text Section */}
          <div className="md:w-3/5 p-6 flex flex-col justify-center border-4 rounded-xl md:mr-5">
            <h2 className="text-white text-xl font-semibold mb-2 font-ethnocentric">ABOUT CREEK CLUB</h2>
            <p className="text-slate-300 mb-4 Michroma">
              Featuring Wi-Fi in public areas, the 3-star The Creek Club Hotel Kolkata is within a 15-minute drive of The Harrington Street Arts Centre.
              There are 18 rooms at this Kolkata hotel, each of them has ironing facilities and air conditioner.
            </p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 Michroma">
              <a 
                href="https://the-creek-club.kolkatahotels.org/en/"
                target="_blank"
                rel="noopener noreferrer"
              >
                BOOK NOW!
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HorizontalCard;
