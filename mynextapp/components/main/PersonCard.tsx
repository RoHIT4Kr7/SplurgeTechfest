import React, { useState } from 'react';
import Image from 'next/image';

interface PersonCardProps {
  imageSrc: string;
  title: string;
  message: string;
}

const PersonCard: React.FC<PersonCardProps> = ({ imageSrc, title, message }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="shadow-md rounded-lg p-6 flex flex-col items-center space-y-4 mt-10 max-w-5xl mx-auto">
      <div className="w-80 h-80">
        <Image 
          src={imageSrc} 
          alt="Person Image" 
          width={600} 
          height={400} 
          className="rounded-lg object-cover w-full h-full" 
        />
      </div>
      <div className="text-center">
        <h2 className="font-ethnocentric text-2xl font-bold text-slate-100 mt-5">{title}</h2>
        <p className={`mt-4 text-lg text-slate-200 border-2 border-white rounded-xl p-4 ${isExpanded ? '' : 'line-clamp-3'}`}>
          {message}
        </p>
        <button 
          onClick={toggleExpand} 
          className="mt-2 text-blue-500 hover:text-blue-300 focus:outline-none"
        >
          {isExpanded ? 'See less' : 'See more'}
        </button>
      </div>
    </div>
  );
};

export default PersonCard;
