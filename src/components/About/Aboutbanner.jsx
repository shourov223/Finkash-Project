import { Outfit } from "next/font/google"

const outfit = Outfit({
    weight: "700"
})
const outfit2 = Outfit({
    weight: "500"
})

const Aboutbanner = () => {
    return (
        <section className='about_banner pt-[150px] md:pt-[200px] lg:pt-[276px] pb-[120px] md:pb-[160px] lg:pb-[202px] rounded-[30px]'>
            <div className="container px-4 md:px-6 lg:px-8">
                <h1 className={`text-white text-[36px] md:text-[48px] lg:text-[60px] leading-[46px] md:leading-[58px] lg:leading-[70px] font-bold pb-5 md:pb-6 lg:pb-8 ${outfit.className}`}>About us</h1>
                <p className={`text-[18px] md:text-[21px] lg:text-[25px] font-medium leading-[26px] md:leading-[29px] lg:leading-[33px] text-white ${outfit2.className}`}>Home / About Us</p>
            </div>
        </section>
    )
}

export default Aboutbanner