import Details from "@/components/blogDetails/Details"
import ServiceDetailsBanner from "@/components/serviceDetails/ServiceDetailsBanner"


const page = () => {
    return (
        <>
            <ServiceDetailsBanner pageName={"Blog Details"} title={"Blog Details"} bannerImg="blogDetailsBanner" />
            <Details />
        </>
    )
}

export default page