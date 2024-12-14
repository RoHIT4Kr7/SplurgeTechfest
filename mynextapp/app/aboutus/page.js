import React from 'react'
import Navbar2 from '@/components/main/Navbar2'
import TogglePage from '@/components/main/PersoncardPage'
import Footer from '@/components/main/Footer'
export const metadata= {
  title: "ABOUT"
}
const page = () => {
  return (
    <div className="flex flex-col gap-20">
          <Navbar2/>
          <TogglePage/>
          <Footer/>
          </div>
  )
}

export default page
