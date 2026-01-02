import DetailsPart from '@/components/serviceDetails/DetailsPart'
import ServiceDetailsBanner from '@/components/serviceDetails/ServiceDetailsBanner'

const page = () => {
    return (
        <>
            <ServiceDetailsBanner pageName={"Service Details"} title={"Service Details"} />
            <DetailsPart />
        </>
    )
}

export default page