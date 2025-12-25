import Banner from '@/components/home/Banner'
import Navbar from '@/components/home/Navbar'
import OurService from '@/components/home/OurService'
import Services from '@/components/home/Services'
import SmartLiving from '@/components/home/SmartLiving'
import Topbar from '@/components/home/Topbar'
import React from 'react'

const page = () => {
  return (
    <>
      <Topbar />
      <Navbar />
      <Banner />
      <SmartLiving />
      <Services />
      <OurService />
    </>
  )
}

export default page