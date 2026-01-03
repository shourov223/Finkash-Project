import AllTeamMembers from "@/components/ourTeam/AllTeamMembers"
import ServiceDetailsBanner from "@/components/serviceDetails/ServiceDetailsBanner"

const page = () => {
    return (
        <>
            <ServiceDetailsBanner bannerImg="ourTeamBaner" title={"Our Team"} pageName={"Our Team"} />
            <AllTeamMembers />
        </>
    )
}

export default page