import React from 'react'
import Slider from "@/components/main/Carousel"
import Navbar2 from '@/components/main/Navbar2'
export const metadata= {
  title: "EVENTS"
}
const page = () => {
  return (
    <>
    <div>
        <Navbar2/>
        <Slider/>
    </div>
    </>
  )
}

export default page