import Pricing from '@/components/Pricing_plan/Pricing'
import ServiceDetailsBanner from '@/components/serviceDetails/ServiceDetailsBanner'
import React from 'react'

const page = () => {
    return (
        <>
            <ServiceDetailsBanner pageName={"Pricing Plan"} title={"Pricing Plan"} bannerImg='pricingPlanBanner' />
            <Pricing />
        </>
    )
}

export default page