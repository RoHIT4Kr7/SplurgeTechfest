"use client";
import React, { useState } from 'react';
import NavigationTabs from './NavigationButtons';
import TeamMemberCard from './TeamMemberCard'; 

const TeamPage = () => {
  const [selectedTeam, setSelectedTeam] = useState('All');

  const handleSelectTeam = (team) => {
    setSelectedTeam(team);
  };

  const teamMembers = [
    // Your team members data
    {
      name: 'Priyanka Shannigrahi ',
      aboutMe: 'President',
      whatsappNumber: '8240288123',
      email: "priyankashannigrahi@gmail.com",
      linkedin:'priyanka-shannigrahi-391973238',
      profilePic: 'https://firebasestorage.googleapis.com/v0/b/splurge-techfest.appspot.com/o/Priyanka%20Shanigrahi.jpg?alt=media&token=f0e9446a-9708-4ce6-83b4-905a36836401',
      team: 'Core Team',
    },
    {
      name: 'Sourik Maity ',
      aboutMe: 'Vice President ',
      whatsappNumber: '9832376605',
      email: "sourikmaity612@gmail.com",
      linkedin:'sourik-maity-3b9b41302',
      profilePic: 'https://firebasestorage.googleapis.com/v0/b/splurge-techfest.appspot.com/o/SOURIK%20MAITY%20-%20Sourik%20Maity.jpg?alt=media&token=3baa6c69-409b-4adf-bd61-e02cb005c70d',
      team: 'Core Team',
    },
    // Add more team members here
    {
      name: 'Soumalya Bhattacharjee',
      aboutMe: 'General Secretary',
      whatsappNumber: '8981617227',
      email: "bhattacharjeesoumalya77@gmail.com",
      linkedin:'soumalya-bhattacherjee-ab829b287',
      profilePic: 'https://firebasestorage.googleapis.com/v0/b/splurge-techfest.appspot.com/o/dimaagnhihai.jpg?alt=media&token=7c4444b4-2306-4574-96d5-04ef59c26eca',
      team: 'Core Team',
    },
    {
      name: 'Adarsh Pandey',
      aboutMe: 'Convenor',
      whatsappNumber: '8617758589',
      email: "adarshpandey2502@gmail.com",
      linkedin:'adarsh-pandey-731282320',
      profilePic: 'https://firebasestorage.googleapis.com/v0/b/splurge-techfest.appspot.com/o/image-1320x1320.jpg?alt=media&token=87554c88-e871-4e52-bad0-65874eac43e5',
      team: 'Core Team',
    },
    {
      name: 'Srinjoyee Mondal',
      aboutMe: 'Treasurer',
      whatsappNumber: '9051383384',
      email: "msrinjoyee@gmail.com",
      linkedin:'srinjoyee-mondal-7072a72b1',
      profilePic: 'https://firebasestorage.googleapis.com/v0/b/splurge-techfest.appspot.com/o/Srinjoyee%20Mondal.jpg?alt=media&token=aa1d0ffc-d9e7-48da-b01b-33db5be24710',
      team: 'Core Team',
    },
    {
      name: 'Soumyajit Chakraborty',
      aboutMe: 'Co-Treasurer',
      whatsappNumber: '9163046366',
      email: "csoumyajit35@gmail.com",
      linkedin:'soumyajit-chakraborty-585008324',
      profilePic: 'https://firebasestorage.googleapis.com/v0/b/splurge-techfest.appspot.com/o/Soumyajit%20Chakraborty.jpg?alt=media&token=5406a17d-263a-419d-895f-d7491eb70835',
      team: 'Core Team',
    },
    {
      name: 'Rohit Kumar',
      aboutMe: 'WEB DEV HEAD',
      whatsappNumber: '0987654321',
      profilePic: '/image/profilepic.jpg',
      email: "rohitdemolition88@gmail.com",
      github: "RoHIT4Kr7",
      x: "RohitKumar0192",
      team: 'Dev Team',
    },
    {
      name: 'Mridul Mishra',
      aboutMe: 'Developer',
      profilePic: '/image/mishraji.jpg',
      email: "mridulm288@gmail.com",
      github: "mridulmishra27",
      x: "MridulMishra27",
      team: 'Dev Team',
    },
    {
      name: 'Tanishq Kumar Singh',
      aboutMe: 'Developer',
      whatsappNumber: '0987654321',
      profilePic: "/image/tanishq.jpg",
      email: "tanishqkumar15@gmail.com",
      x: "taniiishq15",
      github: "RoHIT4Kr7",
      team: 'Dev Team',
    },
    {
      name: 'Somshuvra Ghosh',
      aboutMe: 'Press & Media Head',
      whatsappNumber: '7797748775',
      email: "somshuvraghosh@gmail.com",
      linkedin:'somshuvraghosh',
      profilePic: 'https://firebasestorage.googleapis.com/v0/b/splurge-techfest.appspot.com/o/Somshuvra%20Ghosh.jpg?alt=media&token=c5542e82-6b9b-41d1-a7a3-1923e00699ba',
      team: 'Core Team',
    },
    {
      name: 'Suman Das',
      aboutMe: 'Graphics Head',
      whatsappNumber: '9749803821',
      email: "das60suman@gmail.com",
      linkedin:'suman-das-25b756304',
      profilePic: 'https://firebasestorage.googleapis.com/v0/b/splurge-techfest.appspot.com/o/Suman%20Das.jpg?alt=media&token=bba18f9e-9030-4404-80cc-93ae17719016',
      team: 'Core Team',
    },{
      name: 'Tanusree Dey',
      aboutMe: 'Graphics and design coordinator',
      whatsappNumber: '8017306938',
      email: "tanusreedey9989@gmail.com",
      linkedin:'tanusree-dey-921056254',
      profilePic: 'https://firebasestorage.googleapis.com/v0/b/splurge-techfest.appspot.com/o/tanu.jpg?alt=media&token=4d42195f-9ad5-4e73-b59e-4cd71e297955',
      team: 'Core Team',
    },
    ,
    {
      name: 'Keshav Gautam',
      aboutMe: 'Logistics Head',
      whatsappNumber: '9903688750',
      email: "keshav2004gautam@gmail.com",
      linkedin:'keshav-gautam-1b7624276',
      profilePic: 'https://firebasestorage.googleapis.com/v0/b/splurge-techfest.appspot.com/o/Keshav%20Gautam.jpg?alt=media&token=de9e6724-9e0f-4cb5-ba9d-e51b0f388f57',
      team: 'Core Team',
    },
    {
      name: 'Subha Samanta',
      aboutMe: 'Decoration Head',
      whatsappNumber: '9073633028',
      email: "subhasumanta1968@gmail.com",
      linkedin:'subha-samanta-93883423b',
      profilePic: 'https://firebasestorage.googleapis.com/v0/b/splurge-techfest.appspot.com/o/Subho%20Sumanta.jpg?alt=media&token=fed0de56-3451-4146-adea-9ce21da76803',
      team: 'Core Team',
    },
    {
      name: 'Tanaya Halder',
      aboutMe: 'Literary Convenor',
      whatsappNumber: '9007558322',
      email: "tanayahalder555@gmail.com",
      profilePic: 'https://firebasestorage.googleapis.com/v0/b/splurge-techfest.appspot.com/o/Tanaya(2)%20-%20Tanaya%20Halder.jpg?alt=media&token=a54b5880-d85e-4e6f-8d0b-21a88e8ca6b2',
      team: '',
    },
    {
      name: 'Prity Sardar ',
      aboutMe: 'Prize Distribution Head',
      whatsappNumber: '8910464296',
      email: "pritysardar09@gmail.com",
      profilePic: 'https://firebasestorage.googleapis.com/v0/b/splurge-techfest.appspot.com/o/IMG_20240815_120446%20-%20Prity%20Sardar.jpg?alt=media&token=cc58733b-cc4f-4dfa-9a1e-e3f850a2f06d',
      team: '',
    },
    {
      name: 'Zeba Kazi',
      aboutMe: 'Guest Management Handling',
      whatsappNumber: '9163267089',
      email: "zebakazi1133@gmail.com",
      profilePic: 'https://firebasestorage.googleapis.com/v0/b/splurge-techfest.appspot.com/o/IMG_20240722_090724%20-%20Zeba%20Kazi.jpg?alt=media&token=f7cf9f07-dae1-49d9-aa3d-56f74798c132',
      team: '',
    },
    {
      name: 'Rishita Mondal',
      aboutMe: 'Non Technical Head',
      whatsappNumber: '7003173417',
      email: "rishitamondal79@gmail.com",
      profilePic: 'https://firebasestorage.googleapis.com/v0/b/splurge-techfest.appspot.com/o/DocScanner%20Jul%2022%2C%202024%208-48%20AM%20-%20Rishita%20Mondal.jpg?alt=media&token=fc6679c1-ec9c-41e0-8da4-e590ab0a4c93',
      team: '',
    },
    {
      name: 'Muntusha Mondal',
      aboutMe: 'Cultural Head',
      whatsappNumber: '9123941491',
      email: "muntushamondal@gmail.com",
      profilePic: 'https://firebasestorage.googleapis.com/v0/b/splurge-techfest.appspot.com/o/Muntusha%20-%20Muntusha%20Mondal.jpg?alt=media&token=4b65e47d-f027-42fc-8f30-bb1c2d74b33c',
      team: '',
    },
    {
      name: 'Shahzer Alam',
      aboutMe: 'Sports Head',
      whatsappNumber: '8434140425',
      email: "sshahzer786@gmail.com",
      profilePic: 'https://firebasestorage.googleapis.com/v0/b/splurge-techfest.appspot.com/o/SHAHZER%20ALAM%20-%20Shahzer%20Alam.jpg?alt=media&token=4c750694-6729-4030-94c3-2849f94dadeb',
      team: '',
    },
    {
      name: 'Debanshu Pradhan',
      aboutMe: 'Esports Convernor(efootball)',
      whatsappNumber: '9875551753',
      email: "pradhandeban21@gmail.com",
      profilePic: 'https://firebasestorage.googleapis.com/v0/b/splurge-techfest.appspot.com/o/Debanshu%20Pradhan.jpg?alt=media&token=1acdc5c4-435c-4941-879b-2cf035eabc78',
      team: '',
    },
    {
      name: 'Smita Laha',
      aboutMe: 'Hospitality Head',
      whatsappNumber: '9749608718',
      email: "lahasmita0@gmail.com",
      profilePic: 'https://firebasestorage.googleapis.com/v0/b/splurge-techfest.appspot.com/o/smitalaha.jpg?alt=media&token=4743a168-88e3-477c-8910-8dd34bab2c46',
      team: '',
    },
    {
      name: 'Moudood Sepai',
      aboutMe: 'Esports Head(BGMI)',
      whatsappNumber: '7890515770',
      email: "moudood.2002@gmail.com",
      profilePic: 'https://firebasestorage.googleapis.com/v0/b/splurge-techfest.appspot.com/o/Moudood%202002.jpeg?alt=media&token=055cd45c-6e03-446c-9d30-b6953f887b4a',
      team: '',
    },
    {
      name: 'Tritan Dutta',
      aboutMe: 'Esports Head(Free Fire)',
      whatsappNumber: '9123888473',
      email: "iamtritandutta2003@gmail.com",
      profilePic: 'https://firebasestorage.googleapis.com/v0/b/splurge-techfest.appspot.com/o/-%20Tritan%20Dutta.jpg?alt=media&token=a31dc0c5-26e3-4f4a-b770-f54ede1f980d',
      team: '',
    },
    {
      name: 'Surjodeep Biswas',
      aboutMe: 'Invitation & Publication Head',
      whatsappNumber: '7044900967',
      email: "rijubiswas1237@gmail.com",
      profilePic: 'https://firebasestorage.googleapis.com/v0/b/splurge-techfest.appspot.com/o/Surjadeep%20Biswas.jpg?alt=media&token=3be1a14b-f42d-4d03-9a91-02165e3a20ba',
      team: '',
    },
    {
      name: 'Ayan Halder',
      aboutMe: 'Technical Head',
      whatsappNumber: '9073830669',
      email: "ayaanhalder543@gmail.com",
      profilePic: 'https://firebasestorage.googleapis.com/v0/b/splurge-techfest.appspot.com/o/Photo%20from%20Ayan%20-%20Ayan%20Halder.jpg?alt=media&token=a3855d2c-3be0-40cf-9f2a-84d31f49eb50',
      team: '',
    },
  ];

  const filteredTeamMembers = teamMembers.filter(
    (member) => selectedTeam === 'All' || member.team === selectedTeam
  );

  return (
    <div className="team-page">
      <NavigationTabs onSelectTeam={handleSelectTeam} /> {/* Pass the handler function */}
      <div className="team-members grid md:grid-cols-2 items-center pb-8 lg:grid-cols-3 pt-5 md:pt-8 px-5 md:px-12 lg:px-36 grid-cols-1 md:gap-20 lg:gap-12 gap-4 w-full">
        {filteredTeamMembers.map((member, index) => (
          <TeamMemberCard
            key={index}
            name={member.name}
            aboutMe={member.aboutMe}
            profilePic={member.profilePic}
            whatsappNumber={member.whatsappNumber}
            team={member.team}
            email={member.email}
            github={member.github}
            x={member.x}
            linkedin={member.linkedin}
          />
        ))}
      </div>
    </div>
  );
};

export default TeamPage;
