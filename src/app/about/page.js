import Aboutbanner from '@/components/About/Aboutbanner'
import History from '@/components/About/History'
import ContactUs from '@/components/home/ContactUs'
import OurClients from '@/components/home/OurClients'
import Services from '@/components/home/Services'
import SmartLiving from '@/components/home/SmartLiving'
import TeamMembers from '@/components/home/TeamMembers'
import WeDo from '@/components/home/WeDo'
import React from 'react'

const page = () => {
    return (
        <>
            <Aboutbanner />
            <SmartLiving />
            <OurClients />
            <Services />
            <WeDo />
            <History />
            <TeamMembers />
            <ContactUs />
        </>
    )
}

export default page