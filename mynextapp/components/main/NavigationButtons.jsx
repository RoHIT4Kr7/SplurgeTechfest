import React, { useState, useEffect } from 'react';
import { FaCheckCircle, FaUsers, FaCogs, FaLayerGroup } from 'react-icons/fa';

const NavigationTabs = ({ onSelectTeam }) => {
  const [selectedTeam, setSelectedTeam] = useState('All');
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setIsVisible(currentScrollPos < 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleTeamSelect = (team) => {
    setSelectedTeam(team);
    onSelectTeam(team);
  };

  const tabs = [
    {
      label: 'Core Team',
      icon: <FaUsers />,
      onClick: () => handleTeamSelect('Core Team'),
    },
    {
      label: 'Dev Team',
      icon: <FaCogs />,
      onClick: () => handleTeamSelect('Dev Team'),
    },
    {
      label: 'All',
      icon: <FaLayerGroup />,
      onClick: () => handleTeamSelect('All'),
    },
  ];

  return (
    <div
      className={`Michroma ml-8 navigation-tabs sticky top-[70px] md:top-[99.41px] z-50 text-xs md:text-base overflow-hidden backdrop-brightness-100 backdrop-blur-[1.7px] text-white font-strike-light flex max-w-fit mx-1 md:mx-auto rounded-lg ${isVisible ? 'visible' : 'hidden'}`}
      style={{
        background: 'linear-gradient(135deg, #7042f861 0%, #7042f861 100%)', // Shades of purple gradient
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.4)',
        transition: 'all 0.3s ease-in-out',
      }}
    >
      <ul className="flex justify-center">
        {tabs.map((tab, index) => (
          <li key={index} className="mr-4">
            <button
              className={`py-2 px-4 flex flex-col items-center whitespace-nowrap transition-transform duration-300 ease-in-out transform ${
                selectedTeam === tab.label
                  ? 'bg-[#4a0072] text-[#dcdde1] font-bold scale-110 shadow-xl' // Night-sky inspired colors
                  : 'bg-transparent text-[#dcdde1] hover:bg-[#4a0072] hover:scale-105'
              }`}
              onClick={tab.onClick}
              style={{
                borderRadius: '12px',
                boxShadow: selectedTeam === tab.label ? '0 4px 15px rgba(0, 0, 0, 0.4)' : 'none',
                transition: 'all 0.3s ease-in-out',
              }}
            >
              {tab.icon}
              <span className="text-xs mt-1">{tab.label}</span>
              {selectedTeam === tab.label && <FaCheckCircle className="ml-2 text-[#dcdde1]" />}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavigationTabs;
