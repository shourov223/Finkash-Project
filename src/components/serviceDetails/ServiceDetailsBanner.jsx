import { Outfit } from "next/font/google"
import Link from "next/link"

const outfit = Outfit({
    weight: ["400", "500", "600", "700"]
})
const ServiceDetailsBanner = ({ bannerImg = "ServiceDetailsBanner", title, pageName, }) => {
    return (
        <section className={`${bannerImg} ${outfit.className} pt-[150px] md:pt-[270px] pb-[100px] md:pb-[200px] rounded-[30px]`}>
            <div className="container">
                <h2 className={`text-white text-[32px] sm:text-[40px] md:text-[50px] lg:text-[60px] leading-[40px] sm:leading-[50px] md:leading-[60px] lg:leading-[70px] font-bold pb-[20px] sm:pb-[24px] md:pb-[28px] lg:pb-[32px]`}>{title}</h2>
                <p className="text-[16px] sm:text-[18px] md:text-[22px] lg:text-[25px] text-white leading-6 sm:leading-7 md:leading-[30px] lg:leading-8"><Link href={"/"}>Home</Link> / Page / {pageName}</p>
            </div>
        </section>
    )
}

export default ServiceDetailsBanner