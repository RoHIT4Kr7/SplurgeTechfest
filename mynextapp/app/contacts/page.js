import React from 'react'
import TeamMemberCard from '@/components/main/TeamPage'
import Navbar2 from '@/components/main/Navbar2'
export const metadata= {
  title: "CONTACT US"
}
const page = () => {
  return (
    <>
    <div>
      <Navbar2/>
      <TeamMemberCard/>
    </div>
    </>
  )
}

export default page