import { Outfit } from "next/font/google"
import Link from "next/link"

const outfit = Outfit({
    weight: "700"
})
const outfit2 = Outfit({
    weight: "500"
})

const ServiceBanner = () => {
    return (
        <section className='serviceBanner pt-[120px] md:pt-[180px] lg:pt-[276px] pb-[80px] md:pb-[140px] lg:pb-[202px] rounded-[20px] md:rounded-[25px] lg:rounded-[30px]'>
            <div className="container px-4 md:px-6 lg:px-8">
                <h1 className={`text-white font-bold text-[32px] md:text-[45px] lg:text-[60px] leading-[40px] md:leading-[55px] lg:leading-[70px] pb-4 md:pb-6 lg:pb-8 ${outfit.className}`}>Our Services</h1>
                <p className={`text-white text-[16px] md:text-[20px] lg:text-[25px] leading-[24px] md:leading-[30px] lg:leading-[38px] font-medium ${outfit2.className}`}><Link href={"/"}>Home</Link> / Page / Our Services</p>
            </div>
        </section>
    )
}

export default ServiceBanner