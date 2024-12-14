"use client";
import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import './Stylesnew.css';  // Import the simple CSS file
import Link from 'next/link';

const Slider: React.FC = () => {
    const items = [
        {
            imgSrc: 'https://firebasestorage.googleapis.com/v0/b/splurge-techfest.appspot.com/o/eventsimages%2Fnikita_gandhi.jpg?alt=media&token=c43baad5-bd90-4a22-9f5a-670525629561',
            title: 'Band Program',
            description: "Feel the rhythm, live the moment—join us for an unforgettable night of music!",
            link: '/events/bandprogram'
        },
        {
            imgSrc: 'https://firebasestorage.googleapis.com/v0/b/splurge-techfest.appspot.com/o/eventsimages%2Fgaming.jpg?alt=media&token=1701db16-e900-4ff9-a41a-5476d7b04014',
            title: 'eSports',
            description: "Skill, strategy, and split-second decisions define competitive gaming. SPLURGE '24 offers the ultimate esports arena. Assemble your squad, join the tournament, and claim your place on the podium!!",
            link: '/events/esports'
        },
        {
            imgSrc: 'https://firebasestorage.googleapis.com/v0/b/splurge-techfest.appspot.com/o/eventsimages%2Ffunfusion.jpg?alt=media&token=8c455308-f73d-4229-9ee1-e639fb794919',
            title: 'Fun Fusion',
            description: "Unleash your inner child at SPLURGE '24's Fun Zone! Join us for an unforgettable experience packed with games, challenges, and awesome prizes!",
            link: '/events/funfusion'
        },
        {
            imgSrc: 'https://firebasestorage.googleapis.com/v0/b/splurge-techfest.appspot.com/o/eventsimages%2Fcoding.jpg?alt=media&token=99a7a1a1-ee10-4596-9f3d-05f858f51d48',
            title: 'CodeFest',
            description: "Unleash your creativity and logical thinking through coding! Splurge '24 offers a premier platform to demonstrate your coding prowess and innovative ideas. Don't hold back - join the competition and code your way to win exciting rewards and prizes!",
            link: '/events/codefestchallenge'
        },
        {
            imgSrc: 'https://firebasestorage.googleapis.com/v0/b/splurge-techfest.appspot.com/o/eventsimages%2Fmedicalcamp.png?alt=media&token=756ae603-a650-42d9-a2ee-e5ae0a33a7db',
            title: 'Medical Camp',
            description: 
            "Splurge '24 invites you to focus on your well-being with free health services, expert consultations, and wellness tips. Join us to take the first step toward a healthier, happier you!",
            link: '/events/medicalcamp'
        },
        {
            imgSrc: 'https://firebasestorage.googleapis.com/v0/b/splurge-techfest.appspot.com/o/eventsimages%2Frobotland.jpg?alt=media&token=3ff2a4bb-2c57-4516-9fe6-146ded8c6396',
            title: 'Robusta',
            description: "Unleash your creativity and technical prowess at Splurge '24! Join our thrilling robotics competition and showcase your innovative designs for a chance to win amazing prizes.",
            link: '/events/robusta'
        },
        {
            imgSrc: 'https://firebasestorage.googleapis.com/v0/b/splurge-techfest.appspot.com/o/eventsimages%2Fdrone.jpeg?alt=media&token=1b3024fc-a6d5-4e3b-965c-5616fcd3b4e5',
            title: 'Heaven Venture',
            description: "Drones reveal your ingenuity and precision. Showcase your skills at SPLURGE '24's drone competition. Participate and fly high for a chance to win exciting prizes!",
            link: '/events/heavenventure'
        },
        {
            imgSrc: 'https://firebasestorage.googleapis.com/v0/b/splurge-techfest.appspot.com/o/modelmaking.jpg?alt=media&token=9b937365-c57b-4044-8392-bd47660ecc27',
            title: 'Maker Mania',
            description: "Every model tells a story of creativity and dedication. SPLURGE '24 invites model makers to showcase their skills. Join the competition, build your masterpiece, and win incredible prizes!",
            link: '/events/makermania'
        },
        {
            imgSrc: 'https://firebasestorage.googleapis.com/v0/b/splurge-techfest.appspot.com/o/eventsimages%2Fbrainbattle.jpg?alt=media&token=fbbdb241-fbf2-48f0-be0a-cd1b2f700a95',
            title: 'Brain Battle',
            description: "Knowledge is power, and quizzing is the ultimate test of skill! Get ready to clash with the brightest minds at Splurge '24! Join us , outsmart the competition, and claim your rewards!",
            link: '/events/brainbattle'
        },
        {
            imgSrc: 'https://firebasestorage.googleapis.com/v0/b/splurge-techfest.appspot.com/o/eventsimages%2Fsports.avif?alt=media&token=5aecf3cd-9a21-499a-9dcd-4f7c7b100aa5',
            title: 'Sports',
            description: "Your skills on the field are more than just moves - they're a testament to your dedication and passion. Let Splurge '24 be the catalyst that drives you to new heights.So, what's holding you back? Join the game, push your limits, and win fantastic prizes!",
            link: '/events/sports'
        },
        {
            imgSrc: 'https://firebasestorage.googleapis.com/v0/b/splurge-techfest.appspot.com/o/eventsimages%2Fcamera.avif?alt=media&token=73c8354c-264d-446f-ab1c-a21397cd8775',
            title: 'Artistic Aura',
            description: "Your camera is a window to your soul, capturing the world's beauty. Let Splurge '24 be your canvas, and your photographs and videos be the masterpieces that inspire and delight. Join us, and let your creativity shine!",
            link: '/events/artisticaura'
        }
    ];

    const [activeIndex, setActiveIndex] = useState(0);
    const countItem = items.length;

    const next = useCallback(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % countItem);
    }, [countItem]);

    const prev = () => {
        setActiveIndex((prevIndex) => (prevIndex - 1 + countItem) % countItem);
    };

    const showSlider = (index: number) => {
        setActiveIndex(index);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            next();
        }, 20000);
        return () => clearInterval(interval);
    }, [next,activeIndex]);

    return (
        <div className="slider">
            {/* List Items */}
            <div className="list">
                {items.map((item, index) => (
                    <div key={index} className={`item ${index === activeIndex ? 'active' : ''}`}>
                        <Image src={item.imgSrc} alt={`Slider ${index + 1}`} width={500} height={300} />
                        <div className="content">
                            <h2 className='font-ethnocentric text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-blue-700'>{item.title}</h2>
                            <p className="Michroma description-container">{item.description}</p>
                            <Link href={item.link}>
                                <button className="custom-button Michroma">
                                    S E E M O R E
                                    <div id="clip">
                                        <div id="leftTop" className="corner"></div>
                                        <div id="rightBottom" className="corner"></div>
                                        <div id="rightTop" className="corner"></div>
                                        <div id="leftBottom" className="corner"></div>
                                    </div>
                                    <span id="rightArrow" className="arrow"></span>
                                    <span id="leftArrow" className="arrow"></span>
                                </button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
            {/* Button Arrows */}
            <div className="arrows">
                <button onClick={prev} id="prev">&lt;</button>
                <button onClick={next} id="next">&gt;</button>
            </div>
            {/* Thumbnail */}
            <div className="thumbnail">
                {items.map((item, index) => (
                    <div key={index} className={`item ${index === activeIndex ? 'active' : ''}`}>
                        <Image src={item.imgSrc} alt={`Thumbnail ${index + 1}`} width={100} height={60} onClick={() => showSlider(index)} />
                        <div className="content Michroma text-white font-bold">
                            {item.title}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Slider;
