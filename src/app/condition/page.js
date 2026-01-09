import ConditionDetails from '@/components/condition/ConditionDetails'
import ServiceDetailsBanner from '@/components/serviceDetails/ServiceDetailsBanner'
import React from 'react'

const page = () => {
    return (
        <>
            <ServiceDetailsBanner pageName={"Terms and Conditions"} title={"Terms and Conditions"} bannerImg='conditionBannerImage' />
            <ConditionDetails />
        </>
    )
}

export default page