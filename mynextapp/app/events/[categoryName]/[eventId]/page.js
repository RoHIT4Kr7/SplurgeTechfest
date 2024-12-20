import React from "react";
import { notFound } from 'next/navigation'; 
import { useSession } from 'next-auth/react';
import categoriesData from "@/app/data/FinalEventsList.json";
import Image from "next/image";
import styles from "@/app/styles/Home.module.css";
import Navbar2 from "@/components/main/Navbar2";

export async function generateMetadata({ params }) {
  const { categoryName, eventId } = params;
  const category = categoriesData.categories.find(cat => cat.name === categoryName);
  const event = category ? category.events.find(event => event.id === eventId) : null;

  if (!event) {
    return {
      title: 'Event Not Found'
    };
  }

  return {
    title: `${event.title} - Register`
  };
}

const EventPage = ({ params }) => {
  const { data: session } = useSession();
  const { categoryName, eventId } = params;
  const category = categoriesData.categories.find(cat => cat.name === categoryName);
  const event = category ? category.events.find(event => event.id === eventId) : null;

  if (!event) {
    return notFound();
  }

  const {
    title,
    description,
    image,
    linksingle,
    ruleLink,
    date,
    time,
    registrationfee,
    prizes,
    eventmanager1,
    contact1,
    eventmanager2,
    contact2,
    eligibility
  } = event;

  const registrationMessage = (categoryName === "bandprogram" && eventId === "1")
    ? "Booking to be open soon."
    : "Registration will be open soon.";

  return (
    <div className={styles.singleEvent}>
      <Navbar2/>
      <div className={styles.singleEventCard}>
        <div className={styles.col1}>
          <Image className={styles.eventPoster} src={image} alt={title} width={500} height={500} />
        </div>
        <div className={styles.col2}>
          <h1 className={styles.eventHeading}>{title}</h1>
          <div>
          <p className={styles.content}>DESCRIPTION</p>
            <h2><a className="bg-[#4637B4] group relative flex flex-col justify-center overflow-hidden rounded-full px-8 py-2 transition">
              <div className="absolute inset-0 flex items-center [container-type:inline-size]">
                <div className="absolute h-[100cqw] w-[100cqw] animate-spin bg-[conic-gradient(from_0_at_50%_50%,rgba(255,255,255,0.5)_0deg,transparent_60deg,transparent_300deg,rgba(255,255,255,0.5)_360deg)] opacity-0 transition duration-300 group-hover:opacity-100"></div>
              </div>
              <div className="absolute inset-0.5 rounded-full bg-black/90"></div>
              <div className="absolute bottom-0 left-1/2 h-1/3 w-4/5 -translate-x-1/2 rounded-full bg-white/10 opacity-50 blur-md transition-all duration-500 group-hover:h-2/3 group-hover:opacity-100"></div>
              <div className="relative inline-flex items-center gap-2">
                <span className="mt-px bg-gradient-to-b from-white/25 to-white bg-clip-text text-sm font-medium text-transparent transition-all duration-200">{description}</span>
              </div>
            </a></h2>
          </div>
          <div>
          <p className={styles.content}>FEES</p>
            <h2><a className="bg-[#4637B4] group relative flex flex-col justify-center overflow-hidden rounded-full px-8 py-2 transition">
              <div className="absolute inset-0 flex items-center [container-type:inline-size]">
                <div className="absolute h-[100cqw] w-[100cqw] animate-spin bg-[conic-gradient(from_0_at_50%_50%,rgba(255,255,255,0.5)_0deg,transparent_60deg,transparent_300deg,rgba(255,255,255,0.5)_360deg)] opacity-0 transition duration-300 group-hover:opacity-100"></div>
              </div>
              <div className="absolute inset-0.5 rounded-full bg-black/90"></div>
              <div className="absolute bottom-0 left-1/2 h-1/3 w-4/5 -translate-x-1/2 rounded-full bg-white/10 opacity-50 blur-md transition-all duration-500 group-hover:h-2/3 group-hover:opacity-100"></div>
              <div className="relative inline-flex items-center gap-2">
                <span className="font-mona mt-px bg-gradient-to-b from-white/25 to-white bg-clip-text text-sm font-medium text-transparent transition-all duration-200">{registrationfee}</span>
              </div>
            </a></h2>
            
          </div>
          <div>
  {prizes && prizes.trim() !== "" && (
    <h2>
      <p className={styles.content}>PRIZE POOL</p>
      <a className="bg-[#4637B4] group relative flex flex-col justify-center overflow-hidden rounded-full px-8 py-2 transition">
        <div className="absolute inset-0 flex items-center [container-type:inline-size]">
          <div className="absolute h-[100cqw] w-[100cqw] animate-spin bg-[conic-gradient(from_0_at_50%_50%,rgba(255,255,255,0.5)_0deg,transparent_60deg,transparent_300deg,rgba(255,255,255,0.5)_360deg)] opacity-0 transition duration-300 group-hover:opacity-100"></div>
        </div>
        <div className="absolute inset-0.5 rounded-full bg-black/90"></div>
        <div className="absolute bottom-0 left-1/2 h-1/3 w-4/5 -translate-x-1/2 rounded-full bg-white/10 opacity-50 blur-md transition-all duration-500 group-hover:h-2/3 group-hover:opacity-100"></div>
        <div className="relative inline-flex items-center gap-2">
          <span className="font-mona mt-px bg-gradient-to-b from-white/25 to-white bg-clip-text text-sm font-medium text-transparent transition-all duration-200">{prizes}</span>
        </div>
      </a>
    </h2>
  )}
</div>

          <div>
          <p className={styles.content}>DATE AND TIMING</p>
            <h2><a className="bg-[#4637B4] group relative flex flex-col justify-center overflow-hidden rounded-full px-8 py-2 transition">
              <div className="absolute inset-0 flex items-center [container-type:inline-size]">
                <div className="absolute h-[100cqw] w-[100cqw] animate-spin bg-[conic-gradient(from_0_at_50%_50%,rgba(255,255,255,0.5)_0deg,transparent_60deg,transparent_300deg,rgba(255,255,255,0.5)_360deg)] opacity-0 transition duration-300 group-hover:opacity-100"></div>
              </div>
              <div className="absolute inset-0.5 rounded-full bg-black/90"></div>
              <div className="absolute bottom-0 left-1/2 h-1/3 w-4/5 -translate-x-1/2 rounded-full bg-white/10 opacity-50 blur-md transition-all duration-500 group-hover:h-2/3 group-hover:opacity-100"></div>
              <div className="relative inline-flex items-center gap-2">
                <span className="font-mona mt-px bg-gradient-to-b from-white/25 to-white bg-clip-text text-sm font-medium text-transparent transition-all duration-200"><p>{date}</p> <p>{time}</p></span>
              </div>
            </a></h2>
          </div>
          <div>
  {eligibility && (
    <h2>
            <p className={styles.content}>ELIGIBILITY CRITERIA</p>
      <a className="bg-[#4637B4] group relative flex flex-col justify-center overflow-hidden rounded-full px-8 py-2 transition">
        <div className="absolute inset-0 flex items-center [container-type:inline-size]">
          <div className="absolute h-[100cqw] w-[100cqw] animate-spin bg-[conic-gradient(from_0_at_50%_50%,rgba(255,255,255,0.5)_0deg,transparent_60deg,transparent_300deg,rgba(255,255,255,0.5)_360deg)] opacity-0 transition duration-300 group-hover:opacity-100"></div>
        </div>
        <div className="absolute inset-0.5 rounded-full bg-black/90"></div>
        <div className="absolute bottom-0 left-1/2 h-1/3 w-4/5 -translate-x-1/2 rounded-full bg-white/10 opacity-50 blur-md transition-all duration-500 group-hover:h-2/3 group-hover:opacity-100"></div>
        <div className="relative inline-flex items-center gap-2">
          <span className="font-mona mt-px bg-gradient-to-b from-white/25 to-white bg-clip-text text-sm font-medium text-transparent transition-all duration-200">
          {eligibility && <p>{eligibility}</p>}</span>
        </div>
      </a>
    </h2>
  )}
  
</div>

          <div>
          <p className={styles.content}>EVENT MANAGERS</p>
            <h2><a className="bg-[#4637B4] group relative flex flex-col justify-center overflow-hidden rounded-full px-8 py-2 transition">
              <div className="absolute inset-0 flex items-center [container-type:inline-size]">
                <div className="absolute h-[100cqw] w-[100cqw] animate-spin bg-[conic-gradient(from_0_at_50%_50%,rgba(255,255,255,0.5)_0deg,transparent_60deg,transparent_300deg,rgba(255,255,255,0.5)_360deg)] opacity-0 transition duration-300 group-hover:opacity-100"></div>
              </div>
              <div className="absolute inset-0.5 rounded-full bg-black/90"></div>
              <div className="absolute bottom-0 left-1/2 h-1/3 w-4/5 -translate-x-1/2 rounded-full bg-white/10 opacity-50 blur-md transition-all duration-500 group-hover:h-2/3 group-hover:opacity-100"></div>
              <div className="relative inline-flex items-center gap-2">
                <span className="font-mona mt-px bg-gradient-to-b from-white/25 to-white bg-clip-text text-sm font-medium text-transparent transition-all duration-200"><p>{eventmanager1} - {contact1}</p>
                <p>{eventmanager2} - {contact2}</p></span>
              </div>
            </a></h2>
          </div>
          <div>
            {ruleLink && (
              <a href={ruleLink} target="_blank" rel="noopener noreferrer">
                <button className={styles.rulebutton}>RULES</button>
              </a>
            )}
          </div>
          <div>
            {session ? (
              <a href={linksingle} target="_blank" rel="noopener noreferrer">
                <button className={styles.registerButton}>
                  <span>REGISTER</span>
                </button>
              </a>
            ) : (
              <p className={styles.soon}>Please login to register</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventPage;

export async function generateStaticParams() {
  const paths = [];
  categoriesData.categories.forEach(category => {
    category.events.forEach(event => {
      paths.push({
        categoryName: category.name,
        eventId: event.id,
      });
    });
  });
  return paths;
}