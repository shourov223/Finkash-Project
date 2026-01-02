import { Outfit } from "next/font/google"
import Link from "next/link"

const outfit = Outfit({
    weight: ["400", "500", "600", "700"]
})
const ServiceDetailsBanner = ({ bannerImg = "ServiceDetailsBanner", title, pageName, }) => {
    return (
        <section className={`${bannerImg} ${outfit.className}`}>
            <div className="container">
                <h2 className={`text-white text-[60px] leading-[70px] font-bold pb-[32px]`}>{title}</h2>
                <p className="text-[25px] text-white leading-8"><Link href={"/"}>Home</Link> / Page / {pageName}</p>
            </div>
        </section>
    )
}

export default ServiceDetailsBanner