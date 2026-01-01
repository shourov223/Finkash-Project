import ContactUs from "@/components/home/ContactUs"
import ServiceBanner from "@/components/service/ServiceBanner"
import SocialFinancial from "@/components/service/SocialFinancial"


const page = () => {
    return (
        <>
            <ServiceBanner />
            <SocialFinancial />
            <ContactUs />
        </>
    )
}

export default page