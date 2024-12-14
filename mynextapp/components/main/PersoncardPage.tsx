"use client";
import { useState } from 'react';
import PersonCard from './PersonCard';
import Gallery from './Gallery';
import Collegedetail from './Collegedetail';
import SparkleButton from './SparkleButton';
import './Navbar.css'
const TogglePage = () => {
  const [activeComponent, setActiveComponent] = useState('about');

  return (
    <div className="min-h-screen flex flex-col items-center p-4">
      <div className="flex space-x-4 mt-20 z-50 Michroma">
        <div
          className={` Michroma ${activeComponent === 'about' ? '' : ''} `}
          
        >
         <SparkleButton text="About The College" onClick={() => setActiveComponent('about')} /> 
        </div>
        <div
          className={` ${activeComponent === 'message' ? '' : ''} `}
        >
          <SparkleButton text="Message" onClick={() => setActiveComponent('message')}/>
        </div>
        <div
          className={`Michroma ${activeComponent === 'gallery' ? '' : ''}`}
          
        >
          <SparkleButton text="Gallery" onClick={() => setActiveComponent('gallery')}/>
        </div>
      </div>
      {activeComponent === 'about' && (
        <Collegedetail />
      )}
      {activeComponent === 'message' && (
        <div className="Michroma grid grid-cols-1 lg:grid-cols-1 gap-8 max-w-7xl mx-auto mt-10 z-50">
        <div className="lg:flex lg:flex-col lg:items-center">
          <PersonCard 
            imageSrc="https://firebasestorage.googleapis.com/v0/b/splurge-techfest.appspot.com/o/eventsimages%2Fregistrar.jpg?alt=media&token=5a006885-3f3c-4549-b1ae-1b4d5a7caf05" 
            title="Registrar Sir's
             Message: " 
            message={`Dear Students, Faculty, and Esteemed Guests,
      
      It is with immense pride and enthusiasm that I welcome you to *Splurge 2024* at our esteemed institution. This annual celebration of innovation, creativity, and technical excellence serves as a testament to the dedication and talent of our students and faculty members, who continually strive to push the boundaries of engineering and technology.
      
      Techfest has always been a platform where bright minds come together to share knowledge, collaborate on groundbreaking projects, and inspire each other to achieve new heights. This year, with our theme "Unleashing Innovation and Engineering Excellence," we aim to highlight the transformative power of technology in shaping our future.
      
      The meticulously curated events, including keynote speeches by industry leaders, interactive workshops, competitive hackathons, and project exhibitions, provide an unparalleled opportunity for learning and growth. Each session is designed to challenge conventional thinking and encourage participants to explore new frontiers in technology.
      
      As we embark on this exciting journey, I encourage each participant to make the most of the opportunities presented. Engage actively in discussions, collaborate with your peers, and immerse yourself in the wealth of knowledge that will be shared. Remember, this fest is not just an event; it is an experience that can shape your future and the future of technology.
      
      I extend my heartfelt thanks to the organizing committee, our sponsors, and every individual who are contributing to making Splurge 2024 a reality. Your hard work and dedication are truly commendable.
      
      Let us come together to celebrate the spirit of innovation and engineering excellence. I look forward to witnessing the incredible achievements and breakthroughs that will emerge from this festival.
      
      Wishing you all a productive and inspiring Splurge 2024.`} 
          />
        </div>
        <div className="lg:flex lg:flex-col lg:items-center">
          <PersonCard 
            imageSrc="https://firebasestorage.googleapis.com/v0/b/splurge-techfest.appspot.com/o/eventsimages%2Fvcpailan.jpg?alt=media&token=96a68b4d-c219-4bdf-aa91-ef4ee613028f" 
            title="Vice-Chairperson's Message: " 
            message="It is with great pleasure that I announce SPLURGE 2k24,  our annual technical and cultural fest where creativity, innovation and talent come together in a vibrant celebration.This event embodies our institutions spirit of excellence inclusivity and joy.

SPLURGE 2K24 promises to be an unforgettable experience with a diverse range of technical competitions, cultural performances and engaging activities that will showcase our student's skills, creativity and passion.

I invite all participants and attendees to immerse themselves in this festive atmosphere, forge new connections and create lifelong memories. 

I wish the organizers, participants and attendees make this event a resounding triumph, marked by joy,excitement and inspiring achievements. Together, let's create a spectacular celebration of innovation, creativity and talent that will be etched in our memories forever!" 
          />
        </div>
      </div>
      
      )}
      {activeComponent === 'gallery' && (
        <Gallery />
      )}
    </div>
  );
};

export default TogglePage;
