import ContactDetails from "@/components/contact/ContactDetails"
import ServiceDetailsBanner from "@/components/serviceDetails/ServiceDetailsBanner"


const page = () => {
    return (
        <>
            <ServiceDetailsBanner pageName={"Contact Us"} title={"Contact Us"} bannerImg="contactUsBanner" />
            <ContactDetails />
        </>
    )
}

export default page