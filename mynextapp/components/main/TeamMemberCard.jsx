import React from 'react';
import './CardStyles.css'; 
import Link from 'next/link';
import Image from 'next/image';

const TeamMemberCard = ({ name, aboutMe, profilePic, whatsappNumber, team, email, github, x, linkedin }) => (
  <div className="card z-50">
    <button className="mail">
      <a href={`mailto:${email}`} target="_blank" rel="noopener noreferrer">
      <svg
      className="lucide lucide-mail"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      stroke="currentColor"
      fill="none"
      viewBox="0 0 24 24"
      height="24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
      >
      <rect rx="2" y="4" x="2" height="16" width="20"></rect>
      <path d="M22 7L13.03 12.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
      </svg>
      </a>
    </button>
    <div className="profile-pic">
      <Image src={profilePic} alt={`${name}'s profile`} width={150} height={150} />
    </div>
    <div className="bottom">
      <div className="content">
        <span className="name">{name}</span>
        <span className="about-me">{aboutMe}</span>
      </div>
      <div className="bottom-bottom">
        <div className="social-links-container">
          {team === 'Dev Team' && (
            <div className="social-links-container">
              <Link href={`https://x.com/${x}`} target="_blank" rel="noreferrer">
                <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                  <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path>
                </svg>
              </Link>
              <Link href={`https://github.com/${github}`} target="_blank" rel="noreferrer">
                <svg viewBox="0 0 496 512" xmlns="http://www.w3.org/2000/svg">
                  <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
                </svg>
              </Link>
            </div>
          )}
          {team === 'Core Team' && (
            <Link href={`https://www.linkedin.com/in/${linkedin}`} target="_blank" rel="noreferrer">
              <svg viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                <path d="M100.28 448H7.4V148.9h92.78zM53.79 108.1C24.09 108.1 0 83.21 0 53.53S24.09 0 53.79 0s53.79 24.09 53.79 53.79c0 29.69-24.09 54.38-53.79 54.38zM447.7 448h-92.4V302.4c0-34.7-12.4-58.4-43.4-58.4-23.6 0-37.7 15.8-43.9 31.1-2.3 5.4-2.9 12.9-2.9 20.4V448h-92.4s1.3-239.4 0-264h92.4v37.4c12.3-19 34.4-46.1 83.8-46.1 61.2 0 107.1 39.9 107.1 125.4V448z"></path>
              </svg>
            </Link>
          )}
        </div>
        <Link href={`https://wa.me/+91${whatsappNumber}`} target="_blank" rel="noreferrer">
          <button className="button">Contact Me</button>
        </Link>
      </div>
    </div>
  </div>
);

export default TeamMemberCard;
