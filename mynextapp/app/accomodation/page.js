import React from 'react'
import Navbar2 from '@/components/main/Navbar2'
import Accommodation from '@/components/main/Accommodation'
import Footer from '@/components/main/Footer'
export const metadata= {
  title: "ACCOMODATION"
}
const page = () => {
  return (
    <div className="flex flex-col gap-10">
    <Navbar2/>
    <Accommodation/>
    <Footer/>
    
    </div>
  )
}

export default page