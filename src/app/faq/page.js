import FaqDetails from '@/components/faq/FaqDetails'
import ServiceDetailsBanner from '@/components/serviceDetails/ServiceDetailsBanner'
import React from 'react'

const page = () => {
    return (
        <>
            <ServiceDetailsBanner pageName={"Faq"} title={"Faq"} bannerImg='faqBannerImage' />
            <FaqDetails />
        </>
    )
}

export default page