import Banner from '@/components/home/Banner'
import Financial from '@/components/home/Financial'
import Navbar from '@/components/home/Navbar'
import OurClients from '@/components/home/OurClients'
import OurService from '@/components/home/OurService'
import Planing from '@/components/home/Planing'
import Services from '@/components/home/Services'
import SmartLiving from '@/components/home/SmartLiving'
import Topbar from '@/components/home/Topbar'
import WeDo from '@/components/home/WeDo'
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
      <OurClients />
      <Planing />
      <Financial />
      <WeDo />
    </>
  )
}

export default page